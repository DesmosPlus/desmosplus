import fs from "node:fs";
import path from "node:path";

export const WATERMARK_MARKER = "DesmosPlus release watermark";

const SOURCE_URL = "https://github.com/DesmosPlus/desmosplus";
const SKIPPED_DIRECTORIES = new Set(["icons", "vendor"]);
const SKIPPED_PATH_PREFIXES = [
  path.join("assets", "build"),
  path.join("assets", "desaudify"),
  path.join("assets", "img"),
];
const CODE_EXTENSIONS = new Set([".css", ".html", ".js"]);

function watermark(version) {
  return `${WATERMARK_MARKER} | v${version} | ${SOURCE_URL}`;
}

function stampFile(file, version) {
  const extension = path.extname(file);
  let source = fs.readFileSync(file, "utf8");
  if (source.includes(WATERMARK_MARKER)) return;

  const mark = watermark(version);
  if (extension === ".html") {
    const doctype = /^<!doctype html>\r?\n/i;
    source = doctype.test(source)
      ? source.replace(doctype, (line) => `${line}<!-- ${mark} -->\n`)
      : `<!-- ${mark} -->\n${source}`;
  } else {
    source = `/* ${mark} */\n${source}`;
  }
  fs.writeFileSync(file, source);
}

function stampDirectory(directory, version, relative = "") {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const childRelative = path.join(relative, entry.name);
    const pathParts = childRelative.split(path.sep);
    const skippedPath = SKIPPED_PATH_PREFIXES.some(
      (prefix) => childRelative === prefix || childRelative.startsWith(prefix + path.sep),
    );
    if (entry.isDirectory()) {
      if (
        !skippedPath &&
        !pathParts.some((part) => SKIPPED_DIRECTORIES.has(part))
      ) {
        stampDirectory(path.join(directory, entry.name), version, childRelative);
      }
      continue;
    }
    if (CODE_EXTENSIONS.has(path.extname(entry.name))) {
      stampFile(path.join(directory, entry.name), version);
    }
  }
}

export function watermarkExtensionDirectory(directory, version) {
  stampDirectory(directory, version);
  fs.writeFileSync(
    path.join(directory, "DESMOSPLUS-BUILD.txt"),
    [
      `DesmosPlus v${version}`,
      `Source: ${SOURCE_URL}`,
      `Identifier: DESMOSPLUS:v${version}:DesmosPlus/desmosplus`,
      "",
      "DesmosPlus-owned HTML, CSS, and JavaScript in this package include a release watermark.",
      "Third-party files retain their original attribution and are not watermarked as DesmosPlus code.",
      "",
    ].join("\n"),
  );
}
