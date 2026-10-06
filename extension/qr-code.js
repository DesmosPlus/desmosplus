(function (root) {
  "use strict";
  const marker = "DesmosPlus QR v1\n";
  function options(input) {
    const value = {text:String(input.text ?? ""), name:String(input.name || "QR code").slice(0,100),
      dark:input.dark || "#000000", light:input.light || "#ffffff", size:Number(input.size ?? 10)};
    if (!value.text.length) throw new Error("Enter text or a URL.");
    if (value.text.length > 7089) throw new Error("Text exceeds a single QR code's capacity (at most 7,089 digits or 2,953 UTF-8 bytes for general text).");
    if (!/^#[0-9a-f]{6}$/i.test(value.dark) || !/^#[0-9a-f]{6}$/i.test(value.light)) throw new Error("Choose valid colors.");
    if (!Number.isFinite(value.size) || value.size < 0.1 || value.size > 1000000) throw new Error("Size must be between 0.1 and 1,000,000 graph units.");
    const luminance = hex => {
      const c = [1,3,5].map(i => parseInt(hex.slice(i,i+2),16)/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4);
      return c[0]*.2126 + c[1]*.7152 + c[2]*.0722;
    };
    if ((luminance(value.light)+.05)/(luminance(value.dark)+.05) < 4.5) throw new Error("Choose darker modules and a lighter background with stronger contrast.");
    return value;
  }
  function encode(input) {
    const value = options(input), {QrCode, QrSegment} = qrcodegen;
    const segments = QrSegment.makeSegments(value.text);
    if (/[^\x00-\x7f]/.test(value.text)) segments.unshift(QrSegment.makeEci(26));
    let qr;
    try { qr = QrCode.encodeSegments(segments, QrCode.Ecc.LOW, 1, 40, -1, false); }
    catch (error) {
      if (error instanceof RangeError) throw new Error("Text exceeds a single QR code's capacity. Shorten it: general ASCII text supports up to 2,953 bytes; Unicode uses more bytes per character.");
      throw error;
    }
    return {value, qr, bytes:new TextEncoder().encode(value.text).length};
  }
  function build(input, id = "qr_" + crypto.randomUUID().replaceAll("-", "")) {
    if (!/^qr_[a-zA-Z0-9]+$/.test(id)) throw new Error("Invalid QR folder identifier.");
    const {value, qr, bytes} = encode(input);
    const list = [{type:"folder", id, title:value.name, collapsed:true},
      {type:"text", id:id+"_settings", folderId:id, text:marker+JSON.stringify(value)}];
    const n = qr.size, scale = value.size/(n+8), origin = -value.size/2;
    const f = x => String(Number(x.toPrecision(12)));
    const add = (suffix, latex, color) => list.push({type:"expression", id:id+suffix, folderId:id, latex, color, fillOpacity:"1", lineOpacity:"0", hidden:false});
    const lo = f(origin), hi = f(-origin);
    add("_paper", `\\operatorname{polygon}((${lo},${lo}),(${hi},${lo}),(${hi},${hi}),(${lo},${hi}))`, value.light);
    // Horizontal runs reduce polygon count; each list stays below Desmos's limit.
    const runs = [];
    for (let y=0;y<n;y++) for (let x=0;x<n;) {
      if (!qr.getModule(x,y)) {x++; continue;}
      const left = x;
      while (x<n && qr.getModule(x,y)) x++;
      runs.push([origin+(left+4)*scale, origin+(n-y+3)*scale, origin+(x+4)*scale, origin+(n-y+4)*scale]);
    }
    for (let i=0;i<runs.length;i+=1000) {
      const chunk = runs.slice(i,i+1000);
      const a = column => "[" + chunk.map(row=>f(row[column])).join(",") + "]";
      const [x,y,r,t] = [0,1,2,3].map(a);
      add("_modules"+i, `\\operatorname{polygon}((${x},${y}),(${r},${y}),(${r},${t}),(${x},${t}))`, value.dark);
    }
    return {id, list, value, version:qr.version, bytes, modules:n};
  }
  function saved(state) {
    const list = state.expressions?.list || [];
    return list.filter(e=>e.type==="folder" && /^qr_[a-zA-Z0-9]+$/.test(e.id)).flatMap(folder=>{
      const note = list.find(e=>e.id===folder.id+"_settings" && e.folderId===folder.id && e.type==="text");
      if (!note?.text?.startsWith(marker)) return [];
      try {return [{id:folder.id, ...options(JSON.parse(note.text.slice(marker.length)))}];} catch {return [];}
    });
  }
  function insert(calc, input, id) {
    if (!calc?.getState || !calc?.setState || !calc?.getExpressions || calc.controller?.getProduct?.() !== "graphing") throw new Error("Open the 2D graphing calculator first.");
    const group = build(input,id), state = calc.getState(), list = state.expressions.list;
    let position = list.length;
    if (id) {
      if (!saved(state).some(item=>item.id===id)) throw new Error("That QR folder was removed or changed. Create a new QR code.");
      position = list.findIndex(item=>item.id===id);
      state.expressions.list = list.filter(item=>item.id!==id && item.folderId!==id);
    }
    state.expressions.list.splice(position,0,...group.list);
    calc.setState(state,{allowUndo:true});
    if (input.fit) {
      const half = group.value.size*.6;
      calc.setMathBounds({left:-half,right:half,bottom:-half,top:half});
    }
    return {id:group.id, version:group.version, bytes:group.bytes};
  }
  root.DesmosPlusQR = {options, encode, build, saved, insert};
})(globalThis);
