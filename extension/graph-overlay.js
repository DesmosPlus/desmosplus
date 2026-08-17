(function () {
  "use strict";

  var HOST_ID = "desmosplus-graph-overlay";
  var CONTROLLER_KEY = "__desmosPlusGraphOverlay";
  var CALCULATOR_URL = "https://desmosplus.pages.dev/2dcalculator";
  var ICON_URL = "https://desmosplus.pages.dev/extension/icons/icon-48.png";
  var existing = document.getElementById(HOST_ID);
  var existingController = globalThis[CONTROLLER_KEY];

  if (existing && existingController && typeof existingController.restore === "function") {
    return existingController.restore();
  }
  if (typeof globalThis.__desmosPlusGraphOverlayClose === "function") {
    globalThis.__desmosPlusGraphOverlayClose();
  } else if (existing) existing.remove();
  delete globalThis[CONTROLLER_KEY];

  var host = document.createElement("div");
  host.id = HOST_ID;
  host.setAttribute("data-desmosplus-overlay", "true");

  var root = host.attachShadow({ mode: "closed" });
  var style = document.createElement("style");
  style.textContent = [
    ":host{all:initial;color-scheme:light}",
    "[hidden]{display:none!important}",
    ".window{--window-left:max(12px,calc(50vw - 380px));--window-top:max(12px,calc(50vh - 260px));position:fixed;left:var(--window-left);top:var(--window-top);z-index:2147483647;display:flex;width:min(760px,calc(100vw - 48px));height:min(520px,calc(100vh - 48px));min-width:420px;min-height:320px;max-width:calc(100vw - var(--window-left) - 12px);max-height:calc(100vh - var(--window-top) - 12px);resize:both;overflow:hidden;flex-direction:column;border:1px solid #000;background:#fff;box-shadow:0 8px 28px rgba(0,0,0,.22);font:14px -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;letter-spacing:0}",
    ".bar{display:flex;min-height:44px;align-items:center;border-bottom:1px solid #000;background:#fff}",
    ".title{min-width:0;flex:1;padding:0 14px;overflow:hidden;color:#000;font-weight:600;text-overflow:ellipsis;white-space:nowrap}",
    ".controls{display:flex;align-self:stretch}",
    ".control{width:44px;height:44px;padding:0;border:0;border-left:1px solid #000;background:#fff;color:#000;font:24px/1 -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;cursor:pointer}",
    ".control:hover,.control:focus-visible,.launcher:hover,.launcher:focus-visible{background:#000;color:#fff}",
    ".control:focus-visible,.launcher:focus-visible{outline:2px solid #000;outline-offset:2px}",
    ".launcher{position:fixed;right:24px;bottom:24px;z-index:2147483647;display:flex;width:56px;height:56px;padding:7px;align-items:center;justify-content:center;border:1px solid #000;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2);cursor:pointer}",
    ".launcher img{display:block;width:40px;height:40px}",
    "iframe{display:block;min-width:0;min-height:0;flex:1;border:0;background:#fff}",
    "@media(max-width:640px),(max-height:520px){.window{inset:0;width:auto;height:auto;min-width:0;min-height:0;max-width:none;max-height:none;resize:none;border:0}.bar{min-height:42px}.control{width:42px;height:42px}.launcher{right:12px;bottom:12px}}",
  ].join("");

  var panel = document.createElement("section");
  panel.className = "window";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "DesmosPlus graph");

  var bar = document.createElement("div");
  bar.className = "bar";

  var title = document.createElement("div");
  title.className = "title";
  title.textContent = "DesmosPlus Graph";

  var controls = document.createElement("div");
  controls.className = "controls";

  var minimizeButton = document.createElement("button");
  minimizeButton.className = "control";
  minimizeButton.type = "button";
  minimizeButton.setAttribute("aria-label", "Minimize graph");
  minimizeButton.title = "Minimize graph";
  minimizeButton.textContent = "-";

  var closeButton = document.createElement("button");
  closeButton.className = "control";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close graph");
  closeButton.title = "Close graph";
  closeButton.textContent = "\u00d7";

  var launcher = document.createElement("button");
  launcher.className = "launcher";
  launcher.type = "button";
  launcher.setAttribute("aria-label", "Restore DesmosPlus graph");
  launcher.title = "Restore DesmosPlus graph";
  launcher.hidden = true;

  var launcherIcon = document.createElement("img");
  launcherIcon.alt = "";
  launcherIcon.referrerPolicy = "no-referrer";
  launcherIcon.src = ICON_URL;

  var frame = document.createElement("iframe");
  frame.src = CALCULATOR_URL;
  frame.title = "DesmosPlus 2D calculator";
  frame.referrerPolicy = "no-referrer";
  frame.allow = "autoplay; clipboard-read; clipboard-write";

  function onKeyDown(event) {
    if (event.key === "Escape" && !panel.hidden) minimize();
  }

  function minimize() {
    panel.hidden = true;
    launcher.hidden = false;
    launcher.focus();
    return { state: "minimized" };
  }

  function restore() {
    panel.hidden = false;
    launcher.hidden = true;
    minimizeButton.focus();
    return { state: "restored" };
  }

  function close() {
    document.removeEventListener("keydown", onKeyDown, true);
    host.remove();
    if (globalThis[CONTROLLER_KEY] === controller) delete globalThis[CONTROLLER_KEY];
    if (globalThis.__desmosPlusGraphOverlayClose === close) {
      delete globalThis.__desmosPlusGraphOverlayClose;
    }
  }

  var controller = { close: close, minimize: minimize, restore: restore };
  globalThis[CONTROLLER_KEY] = controller;
  globalThis.__desmosPlusGraphOverlayClose = close;
  minimizeButton.addEventListener("click", minimize);
  closeButton.addEventListener("click", close);
  launcher.addEventListener("click", restore);
  document.addEventListener("keydown", onKeyDown, true);

  controls.append(minimizeButton, closeButton);
  bar.append(title, controls);
  launcher.append(launcherIcon);
  panel.append(bar, frame);
  root.append(style, panel, launcher);
  document.documentElement.appendChild(host);
  minimizeButton.focus();

  return { state: "opened" };
})();
