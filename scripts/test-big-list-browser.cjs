const {chromium} = require("playwright");
const assert = require("node:assert/strict");
const path = require("node:path");
const fs = require("node:fs");

const fixture = process.argv[2];
if (!fixture) throw new Error("Pass the irregular-values.json fixture from test-big-list-scale.mjs (BIGLIST_KEEP_FIXTURE=1).");
const base = process.env.BIGLIST_TEST_URL || "http://127.0.0.1:8765/2dcalculator.html";
const count = Number(process.env.BIGLIST_TEST_COUNT || 30000000);
const expected = index => ((index * 97) % 1000003) * (index % 2 ? -1 : 1) || 0;
async function value(page, latex) {
  return page.evaluate(async latex => {
    const helper = Calc.HelperExpression({latex});
    for (let i = 0; i < 400; i++) {
      if (helper.listValue !== undefined) return helper.listValue;
      if (helper.numericValue !== undefined) return helper.numericValue;
      await new Promise(resolve => setTimeout(resolve, 25));
    }
    throw new Error("Expression did not evaluate: " + latex);
  }, latex);
}
(async () => {
  const browser = await chromium.launch({headless:true, executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE});
  const page = await browser.newPage({viewport:{width:1440, height:1000}});
  const results = [];
  const pass = (name, details) => { results.push({name, ...details}); console.log("PASS", name, details || ""); };
  const output = process.env.BIGLIST_TEST_OUTPUT;
  if (output) fs.mkdirSync(output, {recursive:true});
  try {
    await page.goto(base);
    await page.waitForFunction(() => window.Calc?.setExpressions);
    await page.evaluate(() => Calc.setBlank());
    await page.locator("#local-biglist").click();
    const dialog = page.locator("#desmosplus-biglist-dialog");
    const start = performance.now();
    await dialog.locator('[name="name"]').fill("huge");
    await dialog.getByRole("button", {name:"Add expanded list"}).click();
    await dialog.getByRole("status").filter({hasText:"20,000,000 indexed"}).waitFor();
    assert.deepEqual(await value(page, "h_{uge}([1,10000000,20000000])"), [1,10000000,20000000]);
    assert(Number.isNaN(await value(page, "h_{uge}(20000001)")));
    assert(Number.isNaN(await value(page, "h_{uge}(1.5)")));
    pass("20 million generated values", {elapsedMs:Math.round(performance.now() - start)});
    await dialog.locator('[name="name"]').fill("billion");
    await dialog.locator('[name="first"]').fill("7");
    await dialog.locator('[name="step"]').fill("-2");
    await dialog.locator('[name="count"]').fill("1000000000");
    await dialog.getByRole("button", {name:"Add expanded list"}).click();
    await dialog.getByRole("status").filter({hasText:"1,000,000,000 indexed"}).waitFor();
    assert.deepEqual(await value(page, "b_{illion}([1,20000000,1000000000])"), [7,7-2*19999999,7-2*999999999]);
    pass("One billion generated values with negative step");
    await dialog.locator('[name="name"]').fill("dataset");
    await dialog.locator('[name="source"][value="file"]').check();
    await dialog.locator('[name="file"]').setInputFiles(fixture);
    await page.evaluate(() => {
      window.__biglistTiming = {last:performance.now(), maxGap:0};
      window.__biglistTimer = setInterval(() => {
        const now = performance.now(); __biglistTiming.maxGap = Math.max(__biglistTiming.maxGap, now - __biglistTiming.last); __biglistTiming.last = now;
      }, 20);
    });
    const indexed = performance.now();
    await dialog.getByRole("button", {name:"Add expanded list"}).click();
    await dialog.locator(".bl-source").waitFor({timeout:120000});
    const maxGap = await page.evaluate(() => { clearInterval(__biglistTimer); return __biglistTiming.maxGap; });
    pass("Real file indexed", {count, elapsedMs:Math.round(performance.now() - indexed), maxMainThreadGapMs:Math.round(maxGap)});
    assert.deepEqual(await value(page, "d_{ataset}([1,999,1000])"), [expected(0), expected(998), expected(999)]);
    assert(Number.isNaN(await value(page, "d_{ataset}(1001)")));
    await dialog.getByRole("button", {name:"Next window", exact:true}).click();
    assert.deepEqual(await value(page, "d_{ataset}([1001,1999,2000])"), [expected(1000), expected(1998), expected(1999)]);
    await dialog.getByRole("button", {name:"Previous window", exact:true}).click();
    await dialog.getByLabel("Start index for dataset", {exact:true}).fill(String(count - 999));
    const windowTime = performance.now();
    await dialog.getByRole("button", {name:"Load window", exact:true}).click();
    await dialog.getByRole("status").filter({hasText:"Loaded indices " + (count - 999).toLocaleString()}).waitFor();
    assert.deepEqual(await value(page, "d_{ataset}([" + (count - 999) + "," + count + "])"), [expected(count - 1000), expected(count - 1)]);
    assert(Number.isNaN(await value(page, "d_{ataset}(1)")));
    pass("Last values, global indices and bounded window", {elapsedMs:Math.round(performance.now() - windowTime)});
    assert.deepEqual(await page.evaluate(() => Object.entries(Calc.expressionAnalysis).filter(([,value]) => value.isError)), []);
    const state = await page.evaluate(() => Calc.getState());
    assert(JSON.stringify(state).length < 30000);
    pass("Small portable graph", {bytes:JSON.stringify(state).length});
    if (output) await page.screenshot({path:path.join(output,"biglist-desktop.png")});
    await page.setViewportSize({width:390,height:844});
    assert(await dialog.evaluate(element => element.getBoundingClientRect().right <= innerWidth && element.scrollWidth <= element.clientWidth));
    if (output) await page.screenshot({path:path.join(output,"biglist-mobile.png")});
    await page.setViewportSize({width:1440,height:1000});
    await dialog.locator('[name="name"]').fill("cancelled");
    await dialog.getByRole("button", {name:"Add expanded list"}).click();
    await dialog.getByRole("status").filter({hasText:"Indexing"}).waitFor();
    await dialog.getByRole("button", {name:"Close", exact:true}).click();
    await page.waitForTimeout(500);
    assert(!await page.evaluate(() => Calc.getExpressions().some(e => (e.latex || "").startsWith("c_{ancelled}"))));
    pass("Indexing can be cancelled without injecting a partial graph");
    await page.reload();
    await page.waitForFunction(() => window.Calc?.setState);
    await page.evaluate(state => Calc.setState(state), state);
    assert.deepEqual(await value(page, "h_{uge}([1,20000000])"), [1,20000000]);
    assert.deepEqual(await value(page, "d_{ataset}([" + count + "])"), [expected(count - 1)]);
    await page.locator("#local-biglist").click();
    assert.equal(await page.locator(".bl-source").count(), 0);
    pass("Saved sequence and active file window survive reload; local file handle is not persisted");
    await dialog.getByRole("button", {name:"Reattach dataset", exact:true}).click();
    await dialog.locator('[name="file"]').setInputFiles(fixture);
    await dialog.getByRole("button", {name:"Add expanded list"}).click();
    await dialog.locator(".bl-source").waitFor({timeout:120000});
    assert.equal(await dialog.getByLabel("Start index for dataset", {exact:true}).inputValue(), String(count - 999));
    await dialog.getByRole("button", {name:"Previous window", exact:true}).click();
    assert.deepEqual(await value(page, "d_{ataset}([" + (count - 1999) + "])"), [expected(count - 2000)]);
    pass("Reattaching a saved file resumes paging without replacing unrelated graph content");
  } catch (error) {
    if (output) await page.screenshot({path:path.join(output,"failure.png")});
    throw error;
  } finally {
    if (output) fs.writeFileSync(path.join(output,"results.json"), JSON.stringify(results,null,2));
    await browser.close();
  }
})().catch(error => {console.error(error);process.exitCode = 1;});
