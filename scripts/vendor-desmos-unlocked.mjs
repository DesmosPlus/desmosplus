import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.resolve(process.argv[2] || "/tmp/desmos-unlocked");
const outputDir = path.join(root, "extension", "vendor", "desmos-unlocked");

function parseObjectExport(source, name) {
  const match = source.match(
    new RegExp(`export const ${name}[^=]*=\\s*({[\\s\\S]*?\\n});`),
  );
  if (!match) throw new Error(`Could not find ${name}.`);
  const withoutComments = match[1].replace(/\/\/.*$/gm, "");
  return Function(`"use strict"; return (${withoutComments});`)();
}

const namedEntities = {
  Prime: "″", alefsym: "ℵ", amp: "&", and: "∧", ang: "∠",
  approx: "≈", asymp: "≈", bull: "•", cap: "∩", cup: "∪",
  dArr: "⇓", darr: "↓", deg: "°", divide: "÷", empty: "∅",
  epsilon: "ε", exist: "∃", ge: "≥", gt: ">", hArr: "⇔",
  harr: "↔", hellip: "…", image: "ℑ", infin: "∞", isin: "∈",
  lArr: "⇐", lambda: "λ", lang: "⟨", larr: "←", le: "≤",
  lowast: "∗", lt: "<", middot: "·", minus: "−", nabla: "∇",
  ne: "≠", ni: "∋", not: "¬", or: "∨", part: "∂", perp: "⊥",
  phi: "φ", pi: "π", piv: "ϖ", plusmn: "±", pound: "£",
  prime: "′", prop: "∝", rArr: "⇒", rang: "⟩", rarr: "→",
  real: "ℜ", sigmaf: "ς", sub: "⊂", sube: "⊆", sup: "⊃",
  supe: "⊇", thetasym: "ϑ", times: "×", uArr: "⇑", uarr: "↑",
  upsih: "ϒ", upsilon: "υ",
};

function decodeHtml(value) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#([0-9]+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&([A-Za-z]+);/g, (_, name) => namedEntities[name] || "");
}

function extendedSymbolMap(source, names) {
  const mapped = new Map();
  let pending = [];
  for (const line of source.split("\n")) {
    for (const match of line.matchAll(
      /LatexCmds(?:\.([A-Za-z_$][\w$]*)|\[['"]([^'"]+)['"]\])\s*=/g,
    )) {
      pending.push(match[1] || match[2]);
    }
    const binding = line.match(
      /(?:bindVanillaSymbol|bindBinaryOperator|bindVariable)\(\s*'((?:\\.|[^'])*)'\s*,\s*'((?:\\.|[^'])*)'/,
    );
    if (binding) {
      const html = Function(`"use strict"; return '${binding[2]}';`)();
      const symbol = decodeHtml(html);
      for (const name of pending) {
        if (names.has(name) && symbol) mapped.set(name, [symbol, symbol, false]);
      }
      pending = [];
    } else if (line.includes(";")) {
      pending = [];
    }
  }
  return mapped;
}

const commandsSource = fs.readFileSync(
  path.join(sourceDir, "src", "utils", "autoCommands.ts"),
  "utf8",
);
const extendedSource = fs.readFileSync(
  path.join(sourceDir, "src", "utils", "extendedShortcuts.ts"),
  "utf8",
);
const mathQuillSource = fs.readFileSync(
  path.join(sourceDir, "src", "preload", "extend_mathquill.js"),
  "utf8",
);
const extendedMatch = extendedSource.match(/new Set\(\[([\s\S]*?)\]\)/);
if (!extendedMatch) throw new Error("Could not find extended shortcuts.");

const extendedNames = Function(`"use strict"; return [${extendedMatch[1]}];`)();
const symbols = extendedSymbolMap(mathQuillSource, new Set(extendedNames));
const manualSymbols = new Map([
  ["notin", ["∉", "∉", false]], ["cong", ["≅", "≅", false]],
  ["equiv", ["≡", "≡", false]], ["oplus", ["⊕", "⊕", false]],
  ["otimes", ["⊗", "⊗", false]], ["cuz", ["∵", "∵", false]],
  ["because", ["∵", "∵", false]], ["not", ["¬", "¬", false]],
]);
const wrappers = new Map();
for (const name of ["text", "textnormal", "textrm", "textup", "textmd"]) {
  wrappers.set(name, ["roman", "\\mathrm{}", true]);
}
for (const name of ["em", "italic", "italics", "emph", "textit", "textsl"]) {
  wrappers.set(name, ["italic", "\\mathit{}", true]);
}
for (const name of ["strong", "bold", "textbf"]) {
  wrappers.set(name, ["bold", "\\mathbf{}", true]);
}
for (const name of ["sf", "textsf"]) wrappers.set(name, ["sans", "\\mathsf{}", true]);
for (const name of ["tt", "texttt"]) wrappers.set(name, ["mono", "\\mathtt{}", true]);
for (const name of ["textsc", "uppercase", "lowercase", "mathbb"]) {
  wrappers.set(name, [name, "\\mathrm{}", true]);
}

const extendedEntries = extendedNames.map((name) => {
  const definition = wrappers.get(name) || manualSymbols.get(name) || symbols.get(name);
  return definition ? [name, definition[0], definition[1], definition[2]] : [name, name, name, false];
});
const unresolved = extendedNames.filter(
  (name) => !wrappers.has(name) && !manualSymbols.has(name) && !symbols.has(name),
);
if (unresolved.length) {
  throw new Error(`Missing extended shortcut mappings: ${unresolved.join(", ")}`);
}

const catalog = {
  source: "https://github.com/SinclaM/desmos-unlocked",
  version: "1.1.2",
  categories: [
    {
      id: "desmos-default",
      label: "Desmos defaults",
      entries: Object.entries(parseObjectExport(commandsSource, "desmosDefualtAutoCommands")),
    },
    {
      id: "basic",
      label: "Basic symbols",
      entries: Object.entries(parseObjectExport(commandsSource, "basicAutoCommands")),
    },
    {
      id: "advanced",
      label: "Advanced commands",
      entries: Object.entries(parseObjectExport(commandsSource, "advancedAutoCommands")),
    },
    { id: "extended", label: "Extended symbols", entries: extendedEntries },
  ],
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, "catalog.js"),
  `window.DesmosUnlockedCatalog = ${JSON.stringify(catalog, null, 2)};\n`,
);

console.log(
  `Vendored ${catalog.categories.reduce((total, category) => total + category.entries.length, 0)} Desmos Unlocked shortcuts.`,
);
