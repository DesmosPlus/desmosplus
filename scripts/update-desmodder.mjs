import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const destination = path.join(root, "extension", "vendor", "desmodder");
const latestReleaseUrl =
  "https://api.github.com/repos/DesModder/DesModder/releases/latest";
const userAgent = "DesmosPlus-DesModder-Updater";

async function get(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": userAgent,
    },
  });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}): ${url}`);
  }
  return response;
}

function extract(zipPath, member) {
  return execFileSync("unzip", ["-p", zipPath, member], {
    encoding: null,
    maxBuffer: 64 * 1024 * 1024,
  });
}

function writeChanged(filePath, contents) {
  const next = Buffer.isBuffer(contents) ? contents : Buffer.from(contents);
  if (fs.existsSync(filePath) && fs.readFileSync(filePath).equals(next)) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, next);
  return true;
}

const release = await (await get(latestReleaseUrl)).json();
if (release.draft || release.prerelease || !release.tag_name) {
  throw new Error("GitHub did not return a stable DesModder release.");
}

const asset = release.assets.find((candidate) =>
  /^DesModder-Chrome-v[^/]+[.]zip$/.test(candidate.name),
);
if (!asset) throw new Error("The latest release has no Chrome ZIP asset.");

const archive = Buffer.from(await (await get(asset.browser_download_url)).arrayBuffer());
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "desmosplus-desmodder-"));
const zipPath = path.join(temporary, asset.name);
fs.writeFileSync(zipPath, archive);

try {
  const upstreamManifest = JSON.parse(
    extract(zipPath, "dist/manifest.json").toString("utf8"),
  );
  const version = String(release.tag_name).replace(/^v/, "");
  if (upstreamManifest.version !== version) {
    throw new Error(
      `Release ${release.tag_name} contains manifest ${upstreamManifest.version}.`,
    );
  }

  const files = [
    "background.js",
    "net_request_rules.json",
    "preload/script.js",
    "script.css",
    "script.js",
  ];
  let changed = false;
  for (const file of files) {
    changed =
      writeChanged(path.join(destination, file), extract(zipPath, `dist/${file}`)) ||
      changed;
  }

  const licenseUrl = `https://raw.githubusercontent.com/DesModder/DesModder/${encodeURIComponent(
    release.tag_name,
  )}/LICENSE`;
  changed =
    writeChanged(
      path.join(destination, "LICENSE"),
      Buffer.from(await (await get(licenseUrl)).arrayBuffer()),
    ) || changed;

  const metadata = {
    name: "DesModder",
    version,
    tag: release.tag_name,
    releaseUrl: release.html_url,
    assetName: asset.name,
    assetUrl: asset.browser_download_url,
    sha256: createHash("sha256").update(archive).digest("hex"),
  };
  changed =
    writeChanged(
      path.join(destination, "metadata.json"),
      `${JSON.stringify(metadata, null, 2)}\n`,
    ) || changed;

  console.log(
    `${changed ? "Updated" : "Already current"}: DesModder ${release.tag_name}`,
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
