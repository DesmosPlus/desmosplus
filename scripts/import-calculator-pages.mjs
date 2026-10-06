// Refresh captured runtimes without replacing the DesmosPlus homepage or tools.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { parse, serialize } = await import(require.resolve("parse5"));
const source = process.argv[2];
if (!source) throw new Error("Pass a PagePack directory.");
const root = path.resolve(import.meta.dirname, "..");
const report = JSON.parse(fs.readFileSync(path.join(source, "report.json"), "utf8"));
const pages = {
  calculator: "2dcalculator.html", "3d": "3dcalculator.html",
  geometry: "geometry.html", matrix: "matrix.html", notebook: "notebook.html",
  scientific: "scientific.html", fourfunction: "fourfunction.html"
};
function walk(node, visit) {
  visit(node);
  for (const child of [...(node.childNodes || [])]) walk(child, visit);
}
function remove(node) {
  node.parentNode.childNodes = node.parentNode.childNodes.filter(child => child !== node);
}
const pending = new Map();
for (const [product, filename] of Object.entries(pages)) {
  const capture = report.find(row => row.url === `https://www.desmos.com/${product}`);
  if (capture?.status !== "saved") throw new Error(`Missing ${product} capture`);
  const old = parse(fs.readFileSync(path.join(root, filename), "utf8"));
  const doc = parse(fs.readFileSync(path.join(source, capture.filename), "utf8"));
  let head, body;
  const hooks = [];
  let guard;
  walk(old, node => {
    if (node.tagName === "script" && node.attrs.some(a => a.name === "src" && /^(\/assets\/local\/|\/extension\/)/.test(a.value))) {
      if (node.attrs.some(a => a.value.includes("offline-guard.js"))) guard = node;
      else hooks.push(node);
    }
  });
  if (!guard) throw new Error(`Missing local guard in ${filename}`);
  walk(doc, node => {
    if (node.tagName === "html") node.attrs = [{name:"lang", value:"en"}, {name:"class", value:"dcg-calculator-api-container-v1_13"}];
    if (node.tagName === "head") head = node;
    if (node.tagName === "body") body = node;
    const data = node.attrs?.find(a => a.name === "data-load-data");
    if (data) {
      const { initialProduct } = JSON.parse(data.value);
      data.value = JSON.stringify(initialProduct ? {initialProduct} : {});
    }
    if (node.tagName === "link") remove(node);
    if (node.tagName === "script" || node.tagName === "style") {
      const text = node.childNodes.map(n => n.value || "").join("");
      if (node.tagName === "script" && (text.includes("setTrackerUrl") || node.attrs.some(a => a.name === "src"))) {
        remove(node);
        return;
      }
      if (text.length > 1000) {
        const extension = node.tagName === "script" ? "js" : "css";
        const asset = `/assets/pagepack/${crypto.createHash("sha256").update(text).digest("hex").slice(0,16)}.${extension}`;
        pending.set(asset.slice(1), text);
        node.childNodes = [];
        if (extension === "js") node.attrs = [{name:"src",value:asset}];
        else {
          node.tagName = node.nodeName = "link";
          node.attrs = [{name:"rel",value:"stylesheet"},{name:"href",value:asset}];
        }
      }
    }
  });
  walk(old, node => {
    if (node.tagName === "meta" && node.attrs.some(a => a.name === "http-equiv" && a.value === "Content-Security-Policy") ||
        node.tagName === "link" && node.attrs.some(a => a.value.includes("offline-save.css"))) {
      node.parentNode = head;
      head.childNodes.unshift(node);
    }
    if (node.tagName === "title") {
      head.childNodes = head.childNodes.filter(n => n.tagName !== "title");
      node.parentNode = head;
      head.childNodes.push(node);
    }
  });
  guard.parentNode = head;
  head.childNodes.push(guard);
  for (const hook of hooks) { hook.parentNode = body; body.childNodes.push(hook); }
  walk(doc, node => {
    for (const attr of node.attrs || []) {
      if (!["src", "href"].includes(attr.name) || !/^\/(assets\/local|extension)\//.test(attr.value)) continue;
      const localPath = attr.value.split("?")[0];
      const hash = crypto.createHash("sha256").update(fs.readFileSync(path.join(root, localPath))).digest("hex").slice(0,16);
      attr.value = `${localPath}?v=${hash}`;
    }
  });
  pending.set(filename, serialize(doc).replace(/[\t ]+$/gm, "") + "\n");
}
for (const [filename, text] of pending) {
  fs.mkdirSync(path.dirname(path.join(root, filename)), {recursive:true});
  fs.writeFileSync(path.join(root, filename), text);
}
console.log(`Imported ${Object.keys(pages).length} anonymous calculator pages.`);
