import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 8765);

const types = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
  [".woff2", "font/woff2"],
]);

function sendJson(response, status, body) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body) + "\n");
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const withoutLeadingSlash = decoded.replace(/^\/+/, "");
  const resolved = path.resolve(root, withoutLeadingSlash || "index.html");
  if (!resolved.startsWith(root + path.sep) && resolved !== root) return null;
  return resolved;
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (request.method === "POST" && requestUrl.pathname === "/usage-stats") {
    request.resume();
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/sessions/bugsnag") {
    request.resume();
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/account/user_info") {
    sendJson(response, 200, { loggedIn: false, isMaintenanceMode: false });
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { allow: "GET, HEAD, POST" });
    response.end();
    return;
  }

  let filePath = safePath(requestUrl.pathname);
  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden\n");
    return;
  }

  if (requestUrl.pathname === "/analytics/js/") {
    filePath = path.join(root, "analytics", "js", "index.js");
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found\n");
      return;
    }

    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": types.get(path.extname(filePath)) || "application/octet-stream",
    });
    if (request.method === "HEAD") response.end();
    else response.end(data);
  });
});

server.listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}/`);
});
