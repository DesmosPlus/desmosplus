import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteVersion = "2026-08-16-1";

const captures = [
  {
    slug: "2dcalculator",
    title: "2D Calculator",
    har: "/Users/lucasoleksyuk/Downloads/2dcalculator.har",
  },
  {
    slug: "3dcalculator",
    title: "3D Calculator",
    har: "/Users/lucasoleksyuk/Downloads/3dcalculator.har",
  },
  {
    slug: "geometry",
    title: "Geometry",
    har: "/Users/lucasoleksyuk/Downloads/geometry.har",
  },
  {
    slug: "matrix",
    title: "Matrix",
    har: "/Users/lucasoleksyuk/Downloads/matrix.har",
  },
  {
    slug: "notebook",
    title: "Notebook",
    har: "/Users/lucasoleksyuk/Downloads/notebook.har",
  },
  {
    slug: "fourfunction",
    title: "Four Function",
    har: "/Users/lucasoleksyuk/Downloads/fourfunction.har",
  },
  {
    slug: "scientific",
    title: "Scientific",
    har: "/Users/lucasoleksyuk/Downloads/scientific.har",
  },
];

const written = new Set();

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function contentBuffer(content) {
  if (!content.text) return null;
  return Buffer.from(content.text, content.encoding === "base64" ? "base64" : "utf8");
}

function urlToLocalPath(url) {
  const parsed = new URL(url);
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname === "/account/user_info") return "account/user_info";
  if (pathname === "/usage-stats") return "usage-stats";
  if (pathname === "/analytics/js/") return "analytics/js/index.js";
  if (pathname.startsWith("/")) pathname = pathname.slice(1);
  return pathname || "index.html";
}

function writeEntry(entry) {
  const content = entry.response?.content;
  if (!content?.text || entry.response.status !== 200) return;
  if (content.mimeType === "text/html") return;
  const localPath = urlToLocalPath(entry.request.url);
  if (!localPath || written.has(localPath)) return;
  const outPath = path.join(root, localPath);
  ensureDir(outPath);
  fs.writeFileSync(outPath, contentBuffer(content));
  written.add(localPath);
}

function rewriteHtml(html, capture) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>DesmosPlus | ${capture.title}</title>`)
    .replace(/<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/<link\s+rel="alternate"[^>]*>/gi, "")
    .replace(
      /<script>\s*var _paq =[\s\S]*?<\/script>/g,
      `<script src="/extension/desaudify-page.js?v=${siteVersion}"></script>
        <script src="/extension/svg-import.js?v=${siteVersion}"></script>
        <script src="/assets/local/offline-save.js?v=${siteVersion}"></script>`,
    )
    .replace(
      /<script type="text\/javascript">\s*var _paq =[\s\S]*?<\/script>/g,
      `<script src="/extension/desaudify-page.js?v=${siteVersion}"></script>
        <script src="/extension/svg-import.js?v=${siteVersion}"></script>
        <script src="/assets/local/offline-save.js?v=${siteVersion}"></script>`,
    )
    .replace(
      "</head>",
      `        <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline' data:; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' data: blob:; worker-src 'self' blob:; child-src 'self' blob:; frame-src 'self' blob:;">\n        <link rel="stylesheet" href="/assets/local/offline-save.css?v=${siteVersion}" />\n      </head>`,
    )
    .replace(
      /(<script src="\/assets\/build\/[^"]+\.js"><\/script>)/,
      `<script src="/assets/local/offline-guard.js?v=${siteVersion}"></script>\n        $1`,
    )
    .replaceAll('href="/assets/', 'href="/assets/')
    .replaceAll("href=/assets/", "href=/assets/")
    .replaceAll('src="/assets/', 'src="/assets/')
    .replaceAll("src=/assets/", "src=/assets/")
    .replaceAll("https://www.desmos.com/account/user_info", "/account/user_info")
    .replaceAll("https://www.desmos.com/usage-stats", "/usage-stats")
    .replaceAll("https://www.desmos.com/analytics/js/", "/analytics/js/index.js")
    .replaceAll('src="/analytics/js/"', 'src="/analytics/js/index.js"')
    .replaceAll("src='/analytics/js/'", "src='/analytics/js/index.js'")
    .replaceAll("https://sessions.bugsnag.com/", "/sessions/bugsnag");
}

function mainHtmlEntry(har) {
  return har.log.entries.find((entry) => entry.response?.content?.mimeType === "text/html");
}

for (const capture of captures) {
  const har = JSON.parse(fs.readFileSync(capture.har, "utf8"));

  for (const entry of har.log.entries) {
    writeEntry(entry);
  }

  const entry = mainHtmlEntry(har);
  if (!entry) throw new Error(`No HTML entry found in ${capture.har}`);

  const pagePath = path.join(root, `${capture.slug}.html`);
  fs.writeFileSync(pagePath, rewriteHtml(entry.response.content.text, capture));
}

fs.mkdirSync(path.join(root, "account"), { recursive: true });
fs.writeFileSync(
  path.join(root, "account", "user_info"),
  JSON.stringify({ loggedIn: false, isMaintenanceMode: false }) + "\n",
);
fs.writeFileSync(path.join(root, "usage-stats"), JSON.stringify({ ok: true }) + "\n");
fs.mkdirSync(path.join(root, "analytics", "js"), { recursive: true });
fs.writeFileSync(path.join(root, "analytics", "js", "index.js"), "\n");
fs.mkdirSync(path.join(root, "sessions"), { recursive: true });
fs.writeFileSync(path.join(root, "sessions", "bugsnag"), "\n");

const links = captures
  .map(
    (capture) =>
      `        <a href="/${capture.slug}.html"><strong>${capture.title}</strong><span>Open</span></a>`,
  )
  .join("\n");

fs.writeFileSync(
  path.join(root, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>DesmosPlus | Calculators</title>
    <link rel="stylesheet" href="/assets/local/offline-save.css?v=${siteVersion}">
    <script src="/assets/local/offline-guard.js?v=${siteVersion}"></script>
  </head>
  <body class="desmosplus-home">
    <header id="desmosplus-shell">
      <a class="desmosplus-brand" href="/">DesmosPlus</a>
      <span class="desmosplus-home-section">Calculators</span>
    </header>
    <main>
      <h1>Calculators</h1>
      <p>Local tools and saved work.</p>
      <nav aria-label="Calculators">
${links}
      </nav>
    </main>
  </body>
</html>
`,
);

console.log(`Built ${captures.length} pages in ${root}`);
