import fs from "node:fs";
import path from "node:path";

export const extensionSitePages = [
  "index.html",
  "2dcalculator.html",
  "3dcalculator.html",
  "geometry.html",
  "matrix.html",
  "notebook.html",
  "fourfunction.html",
  "scientific.html",
  "extension.html",
  "privacy.html",
  "support.html",
];

const calculatorPages = new Set([
  "2dcalculator.html",
  "3dcalculator.html",
  "geometry.html",
  "matrix.html",
  "notebook.html",
  "fourfunction.html",
  "scientific.html",
]);

function copyFile(root, destination, relativePath) {
  const target = path.join(destination, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(root, relativePath), target);
}

export function buildExtensionSite(root, destination) {
  for (const page of extensionSitePages) {
    let html = fs.readFileSync(path.join(root, page), "utf8");
    if (page === "index.html") {
      html = html.replace('href="/test-versions/"',
        'href="https://desmosplus.pages.dev/test-versions/" target="_blank" rel="noopener noreferrer"');
    }
    if (calculatorPages.has(page)) {
      html = html.replace(
        /(<script src="\/assets\/local\/offline-guard\.js[^>]*><\/script>)/,
        '<script src="/local-site-sandbox.js"></script>\n        $1',
      );
      if (!html.includes('src="/local-site-sandbox.js"')) {
        throw new Error(`Could not install the local storage bridge in ${page}.`);
      }
    }
    if (page === "2dcalculator.html") {
      html = html.replace('</head>', '<script src="/extension/desaudify-sandbox-data.js"></script></head>');
    }
    fs.writeFileSync(path.join(destination, page), html);
  }

  fs.cpSync(path.join(root, "assets"), path.join(destination, "assets"), {
    recursive: true,
  });

  for (const endpoint of ["sessions/bugsnag", "usage-stats", "account/user_info"]) {
    copyFile(root, destination, endpoint);
  }

  for (const file of ["desaudify-page.js", "svg-import.js", "big-list.js", "big-list-page.js", "desaudify-audio.js", "desaudify-audio-worker.js", "desaudify-v2.js", "vendor/fft.js", "vendor/qrcodegen.js", "qr-code.js", "qr-ui.js", "qr-ui.css", "qr-page.js"]) {
    copyFile(root, destination, `extension/${file}`);
  }
  // Sandboxed extension pages have opaque origins and cannot load URL workers.
  const workerSource = ["vendor/fft.js", "big-list.js", "desaudify-v2.js", "desaudify-audio-worker.js"]
    .map(file => fs.readFileSync(path.join(root, "extension", file), "utf8")).join("\n;\n");
  const template = JSON.parse(fs.readFileSync(path.join(root, "assets/desaudify/template-state.json"), "utf8"));
  fs.writeFileSync(path.join(destination, "extension/desaudify-sandbox-data.js"),
    `globalThis.DesmosPlusAudioWorkerSource = ${JSON.stringify(workerSource)};\nglobalThis.DesmosPlusAudioTemplate = ${JSON.stringify(template)};\n`);
  copyFile(
    root,
    destination,
    "extension/vendor/desmos-unlocked/catalog.js",
  );
  fs.cpSync(
    path.join(root, "extension", "icons"),
    path.join(destination, "extension", "icons"),
    { recursive: true },
  );
}
