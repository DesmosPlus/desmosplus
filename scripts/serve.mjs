import cluster from "node:cluster";
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

function supervise() {
  let worker;
  let failures = 0;
  let checking = false;
  let restarting = false;
  let stopping = false;

  function startWorker() {
    if (stopping) return;
    worker = cluster.fork();
    failures = 0;
    restarting = false;
  }

  function recordHealth(ok) {
    checking = false;
    failures = ok ? 0 : failures + 1;
    if (failures < 3 || restarting || !worker || worker.isDead()) return;
    restarting = true;
    console.error("DesmosPlus server stopped responding; restarting it.");
    worker.kill("SIGKILL");
  }

  function checkHealth() {
    if (checking || restarting || !worker || worker.isDead()) return;
    checking = true;
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      recordHealth(ok);
    };
    const request = http.get(
      { host: "127.0.0.1", port, path: "/__desmosplus_health", timeout: 1000 },
      (response) => {
        response.resume();
        finish(response.statusCode === 200);
      },
    );
    request.on("timeout", () => {
      request.destroy();
      finish(false);
    });
    request.on("error", () => finish(false));
  }

  cluster.on("exit", (deadWorker, code, signal) => {
    if (deadWorker !== worker || stopping) return;
    worker = undefined;
    console.error(
      `DesmosPlus server exited (${signal || code}); restarting in one second.`,
    );
    setTimeout(startWorker, 1000);
  });

  const healthTimer = setInterval(checkHealth, 2000);
  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => {
      if (stopping) return;
      stopping = true;
      clearInterval(healthTimer);
      if (worker && !worker.isDead()) worker.kill(signal);
      setTimeout(() => process.exit(0), 250);
    });
  });

  startWorker();
}

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

function startServer() {
  const server = http.createServer((request, response) => {
    const requestUrl = new URL(
      request.url || "/",
      `http://${request.headers.host || "localhost"}`,
    );

    if (request.method === "GET" && requestUrl.pathname === "/__desmosplus_health") {
      sendJson(response, 200, { ok: true, pid: process.pid });
      return;
    }

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

  server.on("clientError", (error, socket) => {
    if (socket.writable) socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
  });
  server.headersTimeout = 5000;
  server.requestTimeout = 10000;
  server.listen(port, () => {
    console.log(`Serving ${root} at http://localhost:${port}/ (worker ${process.pid})`);
  });
}

if (cluster.isPrimary) supervise();
else startServer();
