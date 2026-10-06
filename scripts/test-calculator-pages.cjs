const {chromium} = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = process.env.CALCULATOR_TEST_URL || "http://127.0.0.1:8765";
const output = process.env.CALCULATOR_TEST_OUTPUT;
const standard = ["2dcalculator", "3dcalculator", "geometry", "matrix", "notebook", "scientific", "fourfunction"];
const tests = ["/testing/digital-act/graphing/", "/testing/collegeboard/scientific/",
  "/testing/collegeboard/fourfunction/", "/testing/quebec/graphing/?lang=en",
  "/testing/quebec/graphing/?lang=fr-CA"];
(async () => {
  const browser = await chromium.launch({headless:true});
  if (output) fs.mkdirSync(output, {recursive:true});
  try {
    for (const route of [...standard.map(name => `/${name}.html`), ...tests]) {
      const page = await browser.newPage({viewport:{width:1280,height:800}});
      const errors = [], external = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("response", response => {
        if (/^https?:/.test(response.url()) && new URL(response.url()).origin !== new URL(base).origin) external.push(response.url());
      });
      await page.goto(base + route);
      await page.waitForFunction(() => {
        const loading = document.querySelector(".dcg-loading-div-container");
        return !loading || loading.style.display === "none";
      });
      await page.waitForTimeout(500);
      if (route.endsWith(".html")) {
        await page.waitForFunction(() => !!(window.Calc || window.Notebook));
        assert(await page.getByText("DesmosPlus", {exact:true}).count());
        assert(await page.evaluate(() => {
          const data = document.body.getAttribute("data-load-data");
          return !data || !Object.hasOwn(JSON.parse(data), "user");
        }));
      }
      if (route === "/2dcalculator.html") {
        await page.locator(".dcg-mq-editable-field").first().click();
        await page.keyboard.type("y=x^2");
        assert((await page.evaluate(() => Calc.getExpressions())).some(e => e.latex?.includes("x")));
        await page.locator("#local-biglist").click();
        const dialog = page.locator("#desmosplus-biglist-dialog");
        await dialog.locator('[name="name"]').fill("huge");
        await dialog.getByRole("button", {name:"Add expanded list"}).click();
        await dialog.getByRole("status").filter({hasText:"20,000,000 indexed"}).waitFor();
        assert.deepEqual(await page.evaluate(async () => {
          const h = Calc.HelperExpression({latex:"h_{uge}([1,10000000,20000000])"});
          for (let i=0;i<100 && !h.listValue;i++) await new Promise(r=>setTimeout(r,50));
          return h.listValue;
        }), [1,10000000,20000000]);
        await dialog.getByRole("button", {name:"Close",exact:true}).click();
      }
      if (route.includes("lang=fr-CA")) assert((await page.locator("body").innerText()).includes("Calculatrice"));
      assert.deepEqual(errors, [], route + " runtime errors");
      assert.deepEqual(external, [], route + " external responses");
      if (output) await page.screenshot({path:path.join(output, route.replace(/[^a-z0-9]/gi,"_") + ".png")});
      console.log("PASS", route);
      await page.close();
    }
  } finally { await browser.close(); }
})().catch(error => {console.error(error); process.exitCode = 1;});
