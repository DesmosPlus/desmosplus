import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const extension = path.join(root, "extension");
const manifest = JSON.parse(
  fs.readFileSync(path.join(extension, "manifest.json"), "utf8"),
);
const output = path.resolve(
  process.argv[2] ||
    path.join(root, "dist", `DesmosPlus-Extension-v${manifest.version}.zip`),
);

fs.mkdirSync(path.dirname(output), { recursive: true });
if (fs.existsSync(output)) fs.unlinkSync(output);

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
  { cwd: extension },
);

const members = execFileSync("unzip", ["-Z1", output], {
  encoding: "utf8",
}).trim().split("\n");
if (!members.includes("manifest.json")) {
  throw new Error("Packaged extension is missing manifest.json at the ZIP root.");
}
if (members.some((member) => member.includes(".DS_Store") || member.endsWith(".zip"))) {
  throw new Error("Packaged extension contains excluded metadata or archives.");
}

console.log(output);
