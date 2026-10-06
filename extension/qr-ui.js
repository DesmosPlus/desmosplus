(function (root) {
  "use strict";
  if (root.DesmosPlusQRUI) return;
  function mount(container, adapter) {
    container.classList.add("dp-qr");
    container.innerHTML = `<form class="qr-form">
      <label>Name<input name="name" value="QR code" maxlength="100" required></label>
      <label>Text or URL<textarea name="text" rows="5" required spellcheck="false"></textarea></label>
      <div class="qr-grid"><label>Modules<input name="dark" type="color" value="#000000"></label>
      <label>Background<input name="light" type="color" value="#ffffff"></label></div>
      <label>Size (graph units)<input name="size" type="number" min="0.1" max="1000000" step="any" value="10" required></label>
      <label class="qr-fit"><input name="fit" type="checkbox" checked> Fit graph to QR code</label>
      <canvas class="qr-preview" width="370" height="370" aria-label="QR code preview" hidden></canvas>
      <p class="qr-status" role="status" aria-live="polite"></p>
      <div class="qr-grid"><button type="submit">Add QR folder</button><button type="button" data-new>New QR</button></div>
    </form><div class="qr-saved" aria-label="Saved QR folders"></div>`;
    const form = container.querySelector("form"), status = container.querySelector("[role=status]");
    const canvas = container.querySelector("canvas"), submit = form.querySelector('[type=submit]');
    let id, timer, busy=false;
    const read = () => Object.fromEntries(["name","text","dark","light","size"].map(key=>[key,form.elements[key].value]));
    function preview() {
      clearTimeout(timer);
      try {
        const {qr,bytes,value} = root.DesmosPlusQR.encode(read());
        const pixel = Math.max(2,Math.floor(370/(qr.size+8)));
        canvas.width = canvas.height = (qr.size+8)*pixel;
        const c = canvas.getContext("2d");
        c.fillStyle = value.light; c.fillRect(0,0,canvas.width,canvas.height);
        c.fillStyle = value.dark;
        for(let y=0;y<qr.size;y++) for(let x=0;x<qr.size;x++) if(qr.getModule(x,y)) c.fillRect((x+4)*pixel,(y+4)*pixel,pixel,pixel);
        canvas.hidden=false; submit.disabled=busy;
        status.textContent = `Version ${qr.version} · ${bytes.toLocaleString()} UTF-8 bytes · ${qr.size} × ${qr.size} modules`;
      } catch(error) {canvas.hidden=true;submit.disabled=true;status.textContent=error.message;}
    }
    form.addEventListener("input",()=>{clearTimeout(timer);submit.disabled=true;timer=setTimeout(preview,180);});
    async function refresh() {
      const saved = container.querySelector(".qr-saved");
      try {
        const items = await adapter.list(); saved.replaceChildren();
        for (const item of items) {
          const button = document.createElement("button");
          button.type="button";button.textContent="Edit " + item.name;
          button.onclick=()=>{
            id=item.id;for(const key of ["name","text","dark","light","size"]) form.elements[key].value=item[key];
            submit.textContent="Update QR folder";preview();
          };
          saved.appendChild(button);
        }
      } catch(error) {status.textContent=error.message;}
    }
    form.querySelector("[data-new]").onclick=()=>{id=undefined;form.reset();submit.textContent="Add QR folder";preview();};
    form.onsubmit=async event=>{
      event.preventDefault();if(busy)return;
      busy=true;form.querySelectorAll("input,textarea,button").forEach(n=>n.disabled=true);
      try {
        const result = await adapter.save({...read(),fit:form.elements.fit.checked},id);
        id=result.id;submit.textContent="Update QR folder";
        await refresh();status.textContent="QR folder saved.";
      } catch(error) {status.textContent=error.message;}
      finally {busy=false;form.querySelectorAll("input,textarea,button").forEach(n=>n.disabled=false);}
    };
    preview();refresh();
    return {refresh, destroy:()=>clearTimeout(timer)};
  }
  root.DesmosPlusQRUI = {mount};
})(globalThis);
