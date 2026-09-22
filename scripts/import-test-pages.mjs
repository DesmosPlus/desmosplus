// One-time capture importer. See test-versions/README.md for dependencies.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { parse: parseJS } = require("acorn");
const { parse, serialize } = await import(require.resolve("parse5"));
const source = process.argv[2];
if (!source) throw new Error("Pass the PagePack folder as the first argument.");
const root = path.resolve(import.meta.dirname, "..");
const runtime = path.join(root, "test-versions/runtime");
fs.mkdirSync(runtime, { recursive: true });
const report = JSON.parse(fs.readFileSync(path.join(source, "report.json"), "utf8"));
const captures = report.filter(row => new URL(row.url).pathname.startsWith("/testing/"));
const entities = new Map();
const usedAssets = new Set();
function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const [key, value] of Object.entries(node)) {
    if (key === "parentNode") continue;
    if (Array.isArray(value)) value.forEach(child => walk(child, visit));
    else if (value && typeof value === "object") walk(value, visit);
  }
}
function properties(node) {
  return Object.fromEntries(node.properties.filter(p => p.type === "Property")
    .map(p => [p.key.name || p.key.value, p.value]));
}
function strings(node) {
  const result = [];
  walk(node, n => { if (n.type === "Literal" && typeof n.value === "string" && !n.value.startsWith("http")) result.push(n.value); });
  return result;
}
function asset(text, extension) {
  const name = crypto.createHash("sha256").update(text).digest("hex").slice(0, 16) + extension;
  usedAssets.add(name);
  fs.writeFileSync(path.join(runtime, name), text);
  return "/test-versions/runtime/" + name;
}
const pages = new Map();
for (const capture of captures) {
  if (capture.status !== "saved") throw new Error(`Missing capture: ${capture.url}`);
  const url = new URL(capture.url);
  const doc = parse(fs.readFileSync(path.join(source, capture.filename), "utf8"));
  const scripts = [], styles = [];
  walk(doc, node => {
    if (node.tagName === "script") {
      let text = node.childNodes.map(n => n.value || "").join("");
      if (text.includes("stateTestName") && !entities.size) {
        walk(parseJS(text, { ecmaVersion: "latest" }), n => {
          if (n.type !== "ObjectExpression") return;
          const p = properties(n);
          if (p.urlCode?.type !== "Literal" || p.name?.type !== "Literal") return;
          entities.set(p.urlCode.value, { name: p.name.value, code: p.urlCode.value,
            test: [p.stateTestName?.value, ...strings(p.assessmentInfo)].filter(Boolean).join("; "), versions: [] });
        });
      }
      if (text.includes("stateTestName")) {
        // Preserve language selection on our host, without enabling other URL flags.
        text = text.replace('return fT(r)?new URLSearchParams(e!=null?e:t):new URLSearchParams',
          'return fT(r)?new URLSearchParams(e!=null?e:t):new URLSearchParams(new URLSearchParams(t).has("lang")?{lang:new URLSearchParams(t).get("lang")}:{} )');
        text = text.replace('/testing/.test(document.location.search)||od(new Ml);', "");
      }
      // Omit the capture's analytics loader; assessment configurations stay unchanged.
      if (text && !text.includes("setTrackerUrl")) scripts.push(asset(text, ".js"));
      node.childNodes = [];
    }
    if (node.tagName === "style") {
      styles.push(asset(node.childNodes.map(n => n.value || "").join(""), ".css"));
      node.childNodes = [];
    }
  });
  const key = url.pathname;
  const page = pages.get(key) || { doc, variants: {} };
  page.variants[url.searchParams.get("lang") || "default"] = { scripts, styles };
  pages.set(key, page);
  const [, , code, type] = key.split("/");
  const entity = entities.get(code);
  if (!entity) throw new Error(`Unknown test: ${code}`);
  entity.versions.push({ type, lang: url.searchParams.get("lang") || "", href: key + "/" + url.search, original: capture.url });
}
for (const [route, { doc, variants }] of pages) {
  const config = asset(JSON.stringify(variants), ".json");
  let html = serialize(doc).replace(/<script[^>]*><\/script>/g, "").replace(/<style><\/style>/g, "");
  html = html.replace("</body>", `<script src="/test-versions/loader.js" data-config="${config}"></script></body>`);
  const dir = path.join(root, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}
fs.writeFileSync(path.join(root, "test-versions/catalog.json"), JSON.stringify([...entities.values()].sort((a, b) => a.name.localeCompare(b.name)), null, 2) + "\n");
for (const file of fs.readdirSync(runtime)) {
  if (/^[a-f0-9]{16}\.(js|css|json)$/.test(file) && !usedAssets.has(file)) fs.unlinkSync(path.join(runtime, file));
}
console.log(`Imported ${captures.length} links, ${pages.size} routes, ${entities.size} tests/states.`);
