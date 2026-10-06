const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const context = vm.createContext({TextEncoder, crypto:require("node:crypto").webcrypto});
for (const file of ["vendor/qrcodegen.js","qr-code.js"]) vm.runInContext(fs.readFileSync(path.join(__dirname,"../extension",file),"utf8"),context);
const api = context.DesmosPlusQR;
const plain = value => JSON.parse(JSON.stringify(value));

test("QR versions grow to 40; Unicode and numeric capacity are supported",()=>{
  assert.equal(api.encode({text:"https://desmosplus.pages.dev"}).value.text,"https://desmosplus.pages.dev");
  assert.equal(api.encode({text:"x".repeat(2953)}).qr.version,40);
  assert.equal(api.encode({text:"1".repeat(7089)}).qr.version,40);
  assert.equal(api.encode({text:"A".repeat(4296)}).qr.version,40);
  assert.equal(api.encode({text:"你好🙂"}).bytes,10);
  assert.throws(()=>api.encode({text:"x".repeat(2954)}),/capacity/);
  assert.throws(()=>api.encode({text:"1".repeat(7090)}),/capacity/);
  assert.throws(()=>api.encode({text:""}),/Enter text/);
  assert.throws(()=>api.build({text:"hello",size:0}),/Size/);
  assert.throws(()=>api.build({text:"hello",size:Infinity}),/Size/);
  assert.throws(()=>api.build({text:"hello",dark:"#ffffff"}),/contrast/);
});

test("generated polygon runs reproduce every QR module with a quiet zone",()=>{
  for (const text of ["HELLO","https://desmosplus.pages.dev", "你好🙂", "x".repeat(2953)]) {
    const {qr} = api.encode({text}), result=api.build({text,size:qr.size+8},"qr_test");
    const actual=Array.from({length:qr.size},()=>Array(qr.size).fill(false));
    const origin=-(qr.size+8)/2;
    for(const e of result.list.filter(e=>e.id.includes("_modules"))) {
      const arrays=[...e.latex.matchAll(/\[([^\]]+)\]/g)].map(m=>m[1].split(",").map(Number));
      assert(arrays[0].length<=1000);
      for(let i=0;i<arrays[0].length;i++) {
        const left=arrays[0][i]-origin-4, right=arrays[2][i]-origin-4;
        const y=qr.size-(arrays[1][i]-origin-3);
        for(let x=left;x<right;x++) {assert(!actual[y][x]);actual[y][x]=true;}
      }
    }
    for(let y=0;y<qr.size;y++)for(let x=0;x<qr.size;x++)assert.equal(actual[y][x],qr.getModule(x,y));
    assert.equal(result.list.filter(e=>e.type==="folder").length,1);
    assert(result.list.slice(1).every(e=>e.folderId==="qr_test"));
    assert(result.list[0].collapsed);
  }
});

test("updates preserve unrelated graph state and keep only one folder",()=>{
  let state={graph:{viewport:{xmin:-99}},expressions:{list:[{id:"old",type:"expression",latex:"y=x"}]}};
  let bounds;
  const calc={controller:{getProduct:()=>"graphing"},getExpressions:()=>state.expressions.list,getState:()=>structuredClone(state),setState:s=>state=s,setMathBounds:b=>bounds=b};
  const first=api.insert(calc,{text:"one"});
  api.insert(calc,{text:"two",size:20,fit:true,dark:"#112233"},first.id);
  assert.equal(state.expressions.list.filter(e=>e.type==="folder").length,1);
  assert.deepEqual(plain(state.expressions.list[0]),{id:"old",type:"expression",latex:"y=x"});
  assert.equal(api.saved(state)[0].text,"two");
  assert.equal(bounds.right,12);
  const before=JSON.stringify(state);
  assert.throws(()=>api.insert(calc,{text:"x".repeat(3000)},first.id),/capacity/);
  assert.equal(JSON.stringify(state),before);
  state.expressions.list=state.expressions.list.filter(e=>e.id!==first.id);
  assert.throws(()=>api.insert(calc,{text:"lost"},first.id),/removed/);
});
