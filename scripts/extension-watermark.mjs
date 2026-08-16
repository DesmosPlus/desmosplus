import fs from "node:fs";
import path from "node:path";

export const WATERMARK_MARKER = "DesmosPlus release watermark";

const SOURCE_URL = "https://github.com/loleksyuk/desmosplus";
const SKIPPED_DIRECTORIES = new Set(["icons", "vendor"]);
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
    const topLevel = childRelative.split(path.sep)[0];
    if (entry.isDirectory()) {
      if (!SKIPPED_DIRECTORIES.has(topLevel)) {
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
      `Identifier: DESMOSPLUS:v${version}:loleksyuk/desmosplus`,
      "",
      "DesmosPlus-owned HTML, CSS, and JavaScript in this package include a release watermark.",
      "Third-party files retain their original attribution and are not watermarked as DesmosPlus code.",
      "",
    ].join("\n"),
  );
}
