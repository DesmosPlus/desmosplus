const {chromium}=require("playwright");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const {PNG}=require("pngjs");
const decode=require("jsqr");
const output=process.env.QR_TEST_OUTPUT || "/tmp/desmos-qr-check";
fs.mkdirSync(output,{recursive:true});
async function decodedGraph(page,text,label) {
  await page.waitForTimeout(1500);
  const buffer=await page.locator(".dcg-grapher").first().screenshot();
  fs.writeFileSync(path.join(output,label+".png"),buffer);
  const png=PNG.sync.read(buffer);
  let result;
  // Scanner input may be downsampled; very large screenshots exceed jsQR's
  // useful finder-pattern scale even when the symbol is valid.
  for (const step of [1,2,3]) {
    const width=Math.floor(png.width/step), height=Math.floor(png.height/step);
    const pixels=new Uint8ClampedArray(width*height*4);
    for(let y=0;y<height;y++)for(let x=0;x<width;x++)for(let c=0;c<4;c++) pixels[(y*width+x)*4+c]=png.data[(y*step*png.width+x*step)*4+c];
    result=decode(pixels,width,height);
    if(result?.data===text)break;
  }
  assert.equal(result?.data,text,"Rendered QR must decode: "+label);
  assert.deepEqual(await page.evaluate(()=>Object.entries(Calc.expressionAnalysis).filter(([,v])=>v.isError)),[]);
}
async function fill(editor,text) {
  await editor.locator('[name="text"]').fill(text);
  await editor.locator('[type="submit"]').click();
  await editor.getByRole("status").filter({hasText:"QR folder saved."}).waitFor();
}
(async()=>{
  const browser=await chromium.launch();
  try {
    const p=await browser.newPage({viewport:{width:1600,height:1200}});
    await p.goto("http://127.0.0.1:8765/2dcalculator.html");
    await p.waitForFunction(()=>window.Calc?.setState);
    await p.evaluate(()=>Calc.setExpressions([{id:"preserve",latex:"a=7"}]));
    await p.locator("#local-qr").click();
    let d=p.locator("#desmosplus-qr-dialog");
    await fill(d,"https://desmosplus.pages.dev");
    await d.getByRole("button",{name:"Close QR editor"}).click();
    await decodedGraph(p,"https://desmosplus.pages.dev","website-short");
    await p.locator("#local-qr").click();
    await d.getByRole("button",{name:"Edit QR code",exact:true}).click();
    await d.locator('[name="dark"]').fill("#102040");
    await d.locator('[name="light"]').fill("#ffffdd");
    await d.locator('[name="size"]').fill("20");
    const unicode="Hello, 世界! 🙂 ".repeat(20);
    await fill(d,unicode);
    await d.getByRole("button",{name:"Close QR editor"}).click();
    await decodedGraph(p,unicode,"website-unicode");
    assert.equal(await p.evaluate(()=>Calc.getState().expressions.list.filter(e=>e.type==="folder").length),1);
    assert(await p.evaluate(()=>Calc.getExpressions().some(e=>e.id==="preserve")));
    const state=await p.evaluate(()=>Calc.getState());
    await p.reload();await p.waitForFunction(()=>window.Calc?.setState);await p.evaluate(state=>Calc.setState(state),state);
    await p.locator("#local-qr").click();await d.getByRole("button",{name:"Edit QR code",exact:true}).click();
    assert.equal(await d.locator('[name="text"]').inputValue(),unicode);
    await d.locator('[name="dark"]').fill("#000000");await d.locator('[name="light"]').fill("#ffffff");
    await fill(d,"x".repeat(2953));
    await d.getByRole("button",{name:"Close QR editor"}).click();
    await decodedGraph(p,"x".repeat(2953),"website-version40");
    await p.locator("#local-qr").click();await d.getByRole("button",{name:"Edit QR code",exact:true}).click();
    await d.locator('[name="text"]').fill("x".repeat(2954));
    await d.getByRole("status").filter({hasText:"capacity"}).waitFor();
    assert(await d.locator('[type="submit"]').isDisabled());
    await d.locator('[name="text"]').fill("Mobile QR");await p.setViewportSize({width:390,height:844});
    await p.waitForTimeout(300);
    assert(await d.evaluate(e=>e.getBoundingClientRect().right<=innerWidth && e.scrollWidth<=e.clientWidth));
    await p.screenshot({path:path.join(output,"website-mobile.png")});
    console.log("PASS website QR decoding, 2,953-byte version 40, Unicode, colors, size, reload, single-folder update, overflow rejection, mobile");
  } finally {await browser.close();}
  const dir=process.env.QR_EXTENSION_DIR;
  if(!dir)return;
  const id=crypto.createHash("sha256").update(fs.realpathSync(dir)).digest("hex").slice(0,32).replace(/[0-9a-f]/g,x=>String.fromCharCode(97+parseInt(x,16)));
  const ctx=await chromium.launchPersistentContext(fs.mkdtempSync("/tmp/desmos-qr-profile-"),{
    headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,viewport:{width:1600,height:1200},
    args:["--disable-extensions-except="+dir,"--load-extension="+dir]});
  try {
    const g=await ctx.newPage();await g.goto("https://www.desmos.com/calculator");await g.waitForFunction(()=>window.Calc?.setState,null,{timeout:60000});
    await g.evaluate(()=>Calc.setExpressions([{id:"preserve",latex:"a=9"}]));
    const p=await ctx.newPage();await g.bringToFront();await p.goto("chrome-extension://"+id+"/popup.html");
    await p.locator('[data-view="qr"]').click();await g.bringToFront();
    const editor=p.locator("#qr-editor");await fill(editor,"Extension QR "+"long text ".repeat(70));
    await decodedGraph(g,"Extension QR "+"long text ".repeat(70),"extension-official");
    await g.bringToFront();await editor.locator('[name="size"]').fill("15");await fill(editor,"Updated from extension");
    assert.equal(await g.evaluate(()=>Calc.getState().expressions.list.filter(e=>e.type==="folder").length),1);
    assert(await g.evaluate(()=>Calc.getExpressions().some(e=>e.id==="preserve")));
    await p.screenshot({path:path.join(output,"extension-editor.png")});
    for(const tab of ["graph","svg","three-d","functions","desaudify","biglist","qr","settings"]) {
      await p.locator(`[data-view="${tab}"]`).click();await p.waitForTimeout(300);assert.equal(await p.locator('[data-panel]:visible').count(),1);
    }
    console.log("PASS packaged extension QR injection, decoding, update, and eight tabs");
    const local=await ctx.newPage();const remote=[];
    local.on("response",r=>{if(/^https?:/.test(r.url()))remote.push(r.url());});
    await local.goto("chrome-extension://"+id+"/local-site.html#2dcalculator.html");
    const scope=local.frameLocator("#local-site-frame");await scope.locator("#local-qr").click();
    const d=scope.locator("#desmosplus-qr-dialog");await fill(d,"Offline QR works");await d.getByRole("button",{name:"Close QR editor"}).click();
    const frame=local.frames().find(f=>f.url().endsWith("/2dcalculator.html"));
    await decodedGraph(frame,"Offline QR works","extension-offline");assert.deepEqual(remote,[]);
    console.log("PASS packaged offline website QR generation and decoding without network responses");
  } finally {await ctx.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
