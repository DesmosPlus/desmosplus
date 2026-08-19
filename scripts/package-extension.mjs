import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  WATERMARK_MARKER,
  watermarkExtensionDirectory,
} from "./extension-watermark.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const extension = path.join(root, "extension");
const archiveTimestamp = new Date("2000-01-01T00:00:00Z");

function normalizeArchiveTimestamps(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const child = path.join(directory, entry.name);
    if (entry.isDirectory()) normalizeArchiveTimestamps(child);
    fs.utimesSync(child, archiveTimestamp, archiveTimestamp);
  }
}

const manifest = JSON.parse(
  fs.readFileSync(path.join(extension, "manifest.json"), "utf8"),
);
if (manifest.background) {
  throw new Error("Web Store package contains an unexpected background worker.");
}
if (
  JSON.stringify(manifest.host_permissions) !==
  JSON.stringify(["https://www.desmos.com/calculator*"])
) {
  throw new Error("Web Store package has unexpected host permissions.");
}
const allowedPermissions = new Set([
  "activeTab",
  "scripting",
  "storage",
]);
if (manifest.permissions.some((permission) => !allowedPermissions.has(permission))) {
  throw new Error("Web Store package contains an unexpected permission.");
}
const expectedContentScripts = [
  {
    matches: [
      "https://desmos.com/*",
      "https://*.desmos.com/*",
      "https://desmosplus.pages.dev/*",
    ],
    css: ["dark-mode.css", "modern-font.css"],
    js: ["dark-mode.js", "modern-font.js"],
    run_at: "document_start",
  },
  {
    matches: [
      "https://desmos.com/calculator/*",
      "https://*.desmos.com/calculator/*",
    ],
    js: ["autosave.js"],
    run_at: "document_idle",
  },
  {
    matches: ["https://www.desmos.com/calculator*"],
    js: [
      "vendor/desmos-unlocked/catalog.js",
      "vendor/desmos-unlocked/content.js",
    ],
    run_at: "document_idle",
  },
];
if (
  JSON.stringify(manifest.content_scripts) !== JSON.stringify(expectedContentScripts)
) {
  throw new Error("Web Store package contains an unexpected content script.");
}
const expectedFontResources = [
  {
    resources: [
      "fonts/LMMath-Regular-v3.woff2",
      "fonts/LMRoman10-Regular.woff2",
      "fonts/lmroman10-italic.woff2",
    ],
    matches: [
      "https://desmos.com/*",
      "https://*.desmos.com/*",
      "https://desmosplus.pages.dev/*",
    ],
  },
  {
    resources: ["vendor/desmos-unlocked/script.js"],
    matches: ["https://www.desmos.com/*"],
  },
];
if (
  JSON.stringify(manifest.web_accessible_resources) !==
  JSON.stringify(expectedFontResources)
) {
  throw new Error("Web Store package contains unexpected accessible resources.");
}
const output = path.resolve(
  process.argv[2] ||
    path.join(root, "dist", `DesmosPlus-Extension-v${manifest.version}.zip`),
);

fs.mkdirSync(path.dirname(output), { recursive: true });
if (fs.existsSync(output)) fs.unlinkSync(output);

const staging = fs.mkdtempSync(path.join(os.tmpdir(), "desmosplus-extension-"));
try {
  fs.cpSync(extension, staging, { recursive: true });
  watermarkExtensionDirectory(staging, manifest.version);
  normalizeArchiveTimestamps(staging);
  execFileSync(
    "zip",
    [
      "-X",
      "-q",
      "-r",
      output,
      ".",
      "-x",
      "*.DS_Store",
      "__MACOSX/*",
      "*.zip",
    ],
    { cwd: staging },
  );
} finally {
  fs.rmSync(staging, { recursive: true, force: true });
}

const members = execFileSync("unzip", ["-Z1", output], {
  encoding: "utf8",
}).trim().split("\n");
if (!members.includes("manifest.json")) {
  throw new Error("Packaged extension is missing manifest.json at the ZIP root.");
}
if (!members.includes("DESMOSPLUS-BUILD.txt")) {
  throw new Error("Packaged extension is missing its release watermark file.");
}
if (!members.includes("obj-import.js")) {
  throw new Error("Packaged extension is missing the OBJ importer.");
}
if (!members.includes("DESLOADER-LICENSE")) {
  throw new Error("Packaged extension is missing the DesLoader MIT license.");
}
if (!members.includes("MODERN-FONT-NOTICE")) {
  throw new Error("Packaged extension is missing the Modern Font notice.");
}
if (
  !members.includes("DESMOS-UNLOCKED-LICENSE") ||
  !members.includes("DESMOS-UNLOCKED-NOTICE")
) {
  throw new Error("Packaged extension is missing Desmos Unlocked attribution.");
}
const unlockedMembers = [
  "vendor/desmos-unlocked/catalog.js",
  "vendor/desmos-unlocked/content.js",
  "vendor/desmos-unlocked/script.js",
];
if (unlockedMembers.some((member) => !members.includes(member))) {
  throw new Error("Packaged extension is missing a Desmos Unlocked file.");
}
for (const resource of expectedFontResources[0].resources) {
  if (!members.includes(resource)) {
    throw new Error(`Packaged extension is missing ${resource}.`);
  }
}
const functionEquationAssets = [
  "acosh", "asinh", "atanh", "clamp", "frac", "haversin", "hypot",
  "lerp", "logistic", "roundto", "sign", "sinc", "versin", "wrap",
].map((name) => `equations/${name}.svg`);
if (functionEquationAssets.some((member) => !members.includes(member))) {
  throw new Error("Packaged extension is missing a function equation image.");
}
if (members.some((member) => member.includes(".DS_Store") || member.endsWith(".zip"))) {
  throw new Error("Packaged extension contains excluded metadata or archives.");
}
if (members.some((member) => member.toLowerCase().includes("desmodder"))) {
  throw new Error("Packaged extension contains DesModder files.");
}

const firstPartySource = execFileSync("unzip", ["-p", output, "popup.js"], {
  encoding: "utf8",
});
const thirdPartySource = execFileSync("unzip", ["-p", output, "vendor/fft.js"], {
  encoding: "utf8",
});
const unlockedSource = execFileSync(
  "unzip",
  ["-p", output, "vendor/desmos-unlocked/script.js"],
  { encoding: "utf8" },
);
const unlockedCatalogSource = execFileSync(
  "unzip",
  ["-p", output, "vendor/desmos-unlocked/catalog.js"],
  { encoding: "utf8" },
);
const unlockedCatalog = JSON.parse(
  unlockedCatalogSource
    .replace(/^window\.DesmosUnlockedCatalog = /, "")
    .replace(/;\s*$/, ""),
);
const unlockedShortcutCount = unlockedCatalog.categories.reduce(
  (total, category) => total + category.entries.length,
  0,
);
if (unlockedShortcutCount !== 387) {
  throw new Error(`Expected 387 Desmos Unlocked shortcuts, found ${unlockedShortcutCount}.`);
}
if (!unlockedSource.includes("window.Calc.focusedMathQuill")) {
  throw new Error("Desmos Unlocked runtime is not using the current MathQuill API.");
}
if (!firstPartySource.includes(WATERMARK_MARKER)) {
  throw new Error("Packaged first-party code is missing its release watermark.");
}
if (thirdPartySource.includes(WATERMARK_MARKER)) {
  throw new Error("Packaged third-party code was incorrectly watermarked.");
}
if (unlockedSource.includes(WATERMARK_MARKER)) {
  throw new Error("Packaged Desmos Unlocked code was incorrectly watermarked.");
}

console.log(output);
