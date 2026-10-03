import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const context = vm.createContext({TextEncoder});
for (const file of ["big-list.js", "desaudify-v2.js"]) vm.runInContext(fs.readFileSync(new URL("../extension/" + file, import.meta.url), "utf8"), context);
const {DesmosPlusBigList: lists, DesmosPlusAudioV2: audio} = context;

test("BigList validates inputs and splits at 10,000", () => {
  assert.throws(() => lists.format("a", []));
  assert.throws(() => lists.format("a", [Infinity]));
  assert.throws(() => lists.format("a", ["1"]));
  assert.throws(() => lists.format("a()", [1]));
  const lines = lists.format("sample", Array.from({length:20001}, (_, i) => i));
  assert.equal(lines.length, 4);
  assert(lines[3].includes("10001\\le k\\le20000"));
  assert(lines[3].includes("k-20000"));
  assert(lists.format("a", [1e-7])[0].includes("10^{-7}"));
});
test("matrix fragments use local offsets and pad the final list", () => {
  const lines = lists.format("sample", Array(80001).fill(1), "matrix");
  assert.equal(lines.length, 3);
  assert(lines[1].includes("repeat}\\left(0,9999"));
  assert(lines[2].includes("k-80000"));
});
test("audio v2 includes silent frames and timing pointers", () => {
  const output = audio.schemas([[1000100], [], [1000100, 2000200]], 30, "compatible");
  const data = output.dataShards.join("\n");
  assert(data.includes("t_{onetimingspart1}\\left(k\\right)=\\left[1,2,3,4\\right]"));
  assert(output.processing.includes("a_{udioduration}=100"));
  assert.equal(output.bigListVersion, 2);
  const state = JSON.parse(fs.readFileSync(new URL("../extension/desaudify-template.json", import.meta.url)));
  const prepared = audio.prepare(state, {name:"song.wav"}, {polyphony:32});
  assert.equal(prepared.expressions.list.find(e=>e.id==='7089').label, "song");
  assert(!prepared.expressions.list.some(e=>e.id==='9187'));
  assert.equal(prepared.expressions.ticker.playing, false);
});
