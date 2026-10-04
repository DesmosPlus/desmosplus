import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const context = vm.createContext({TextEncoder, setTimeout});
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
test("million-value sequences stay constant size and validate bounds", () => {
  for (const count of [10000000, 20000000, 1000000000, Number.MAX_SAFE_INTEGER]) {
    const expression = lists.sequence("massive", 3, -2, count);
    assert(expression.length < 200);
    assert(expression.includes(String(count)));
    assert(expression.includes("floor"));
  }
  for (const invalid of [0, -1, 1.5, Infinity, Number.MAX_SAFE_INTEGER + 1]) assert.throws(() => lists.sequence("b", 0, 1, invalid));
  assert.throws(() => lists.sequence("b", Number.MAX_VALUE, Number.MAX_VALUE, 2));
  assert.throws(() => lists.windowExpression("b", 1, Array(10001).fill(0)));
});
test("streaming JSON handles token boundaries and arbitrary windows", async () => {
  const values = Array.from({length:2401}, (_, i) => i % 2 ? -i / 1000 : i * 1e7);
  const file = new Blob([" \n" + JSON.stringify(values) + "\r\n"]);
  const source = await lists.indexFile(file, {chunkSize:37});
  assert.equal(source.length, values.length);
  assert.equal(source.starts.length, 3);
  for (const start of [1, 2, 999, 1000, 1001, 1999, 2401]) {
    assert.deepEqual(Array.from(await lists.readWindow(source, start, 1200)), values.slice(start - 1, start + 1199));
  }
  await assert.rejects(() => lists.readWindow(source, 2402));
  await assert.rejects(() => lists.readWindow(source, 1, 10001));
});
test("streaming validation rejects malformed data and honors cancellation", async () => {
  for (const text of ["[]", "[1,]", "[1,,2]", "[NaN]", "[1e999]", "[true]", '["1"]', "[01]", "[+1]", "[.1]", "[1.]", "[1", "[1]x", "[1][2]", "{\"a\":1}", "[\u00a01]", "[1/*x*/]", "[[1]]", "[" + "1".repeat(1025) + "]"]) {
    await assert.rejects(() => lists.indexFile(new Blob([text]), {chunkSize:2}), undefined, text);
  }
  const controller = new AbortController();
  await assert.rejects(() => lists.indexFile(new Blob(["[1,2,3,4]"]), {chunkSize:3, signal:controller.signal, onProgress:() => controller.abort()}), /cancelled/);
  const source = await lists.indexFile(new Blob(["[ -1.25e+3, 2E-5, -0 ]"]), {chunkSize:1});
  assert.deepEqual(Array.from(await lists.readWindow(source, 1)), [-1250, 0.00002, -0]);
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
