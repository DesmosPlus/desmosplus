import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";

const count = Number(process.env.BIGLIST_TEST_COUNT || 20000000);
assert(Number.isSafeInteger(count) && count >= 10001);
const directory = fs.mkdtempSync(path.join(os.tmpdir(), "desmos-biglist-scale-"));
const filename = path.join(directory, "irregular-values.json");
const expected = index => ((index * 97) % 1000003) * (index % 2 ? -1 : 1) || 0;
const context = vm.createContext({setTimeout});
vm.runInContext(fs.readFileSync(new URL("../extension/big-list.js", import.meta.url), "utf8"), context);
const api = context.DesmosPlusBigList;
try {
  const fd = fs.openSync(filename, "wx");
  try {
    fs.writeSync(fd, "[");
    for (let start = 0; start < count; start += 10000) {
      const values = Array.from({length:Math.min(10000, count - start)}, (_, i) => expected(start + i));
      fs.writeSync(fd, (start ? "," : "") + values.join(","));
    }
    fs.writeSync(fd, "]");
  } finally { fs.closeSync(fd); }
  const before = process.memoryUsage().heapUsed;
  let peak = before;
  const start = performance.now();
  const source = await api.indexFile(await fs.openAsBlob(filename), {onProgress:() => { peak = Math.max(peak, process.memoryUsage().heapUsed); }});
  assert.equal(source.length, count);
  assert.equal(source.starts.length, Math.ceil(count / 1000));
  for (const index of [1, 999, 1000, 1001, Math.floor(count / 2), count - 10000, count - 999, count]) {
    const values = await api.readWindow(source, index, 10000);
    assert.deepEqual(Array.from(values), Array.from({length:Math.min(10000, count - index + 1)}, (_, i) => expected(index + i - 1)));
  }
  assert(peak - before < 128 * 1024 * 1024, "Indexing unexpectedly retained a large array");
  console.log(JSON.stringify({count, bytes:fs.statSync(filename).size, elapsedMs:Math.round(performance.now() - start), indexPages:source.starts.length, peakHeapGrowthMB:Math.round((peak - before) / 1024 / 1024), result:"PASS"}, null, 2));
  if (process.env.BIGLIST_KEEP_FIXTURE === "1") console.log("Fixture: " + filename);
} finally {
  if (process.env.BIGLIST_KEEP_FIXTURE !== "1") fs.rmSync(directory, {recursive:true, force:true});
}
