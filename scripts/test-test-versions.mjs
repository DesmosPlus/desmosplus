import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { buildExtensionSite } from "./build-extension-site.mjs";

const root = path.resolve(import.meta.dirname, "..");
const catalog = JSON.parse(fs.readFileSync(path.join(root, "test-versions/catalog.json")));

test("every captured assessment link has a page and complete local runtime", () => {
  assert.equal(catalog.length, 60);
  const versions = catalog.flatMap(entry => entry.versions);
  assert.equal(versions.length, 143);
  assert.equal(new Set(versions.map(v => v.original)).size, 143);
  for (const version of versions) {
    const url = new URL(version.href, "https://desmosplus.pages.dev");
    const original = new URL(version.original);
    assert.equal(url.pathname.replace(/\/$/, ""), original.pathname);
    assert.equal(url.search, original.search);
    const html = fs.readFileSync(path.join(root, url.pathname, "index.html"), "utf8");
    const configPath = /data-config="([^"]+)"/.exec(html)?.[1];
    assert(configPath, version.href);
    const config = JSON.parse(fs.readFileSync(path.join(root, configPath)));
    const selected = config[version.lang || "default"];
    assert(selected, version.href);
    for (const asset of [...selected.scripts, ...selected.styles]) {
      assert(asset.startsWith("/test-versions/runtime/"));
      assert(fs.statSync(path.join(root, asset)).size > 0, asset);
    }
  }
});

test("extension only opens the hosted directory and never bundles test pages", () => {
  const destination = fs.mkdtempSync(path.join(os.tmpdir(), "desmosplus-site-check-"));
  try {
    buildExtensionSite(root, destination);
    assert(!fs.existsSync(path.join(destination, "testing")));
    assert(!fs.existsSync(path.join(destination, "test-versions")));
    const expected = 'href="https://desmosplus.pages.dev/test-versions/" target="_blank"';
    assert(fs.readFileSync(path.join(destination, "index.html"), "utf8").includes(expected));
    assert(fs.readFileSync(path.join(root, "extension/popup.html"), "utf8").includes(expected));
  } finally {
    fs.rmSync(destination, { recursive: true, force: true });
  }
});
