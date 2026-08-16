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

const manifest = JSON.parse(
  fs.readFileSync(path.join(extension, "manifest.json"), "utf8"),
);
const forbiddenManifestKeys = [
  "background",
  "content_scripts",
  "host_permissions",
  "web_accessible_resources",
];
if (forbiddenManifestKeys.some((key) => key in manifest)) {
  throw new Error("Web Store package contains a DesModder-related manifest key.");
}
if (
  manifest.permissions.some((permission) =>
    ["storage", "declarativeNetRequest"].includes(permission),
  )
) {
  throw new Error("Web Store package contains a DesModder-related permission.");
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
if (!firstPartySource.includes(WATERMARK_MARKER)) {
  throw new Error("Packaged first-party code is missing its release watermark.");
}
if (thirdPartySource.includes(WATERMARK_MARKER)) {
  throw new Error("Packaged third-party code was incorrectly watermarked.");
}

console.log(output);
