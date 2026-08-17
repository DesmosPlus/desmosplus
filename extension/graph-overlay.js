(function () {
  "use strict";

  var HOST_ID = "desmosplus-graph-overlay";
  var CALCULATOR_URL = "https://desmosplus.pages.dev/2dcalculator";
  var existing = document.getElementById(HOST_ID);

  if (typeof globalThis.__desmosPlusGraphOverlayClose === "function") {
    globalThis.__desmosPlusGraphOverlayClose();
  } else if (existing) existing.remove();

  var host = document.createElement("div");
  host.id = HOST_ID;
  host.setAttribute("data-desmosplus-overlay", "true");

  var root = host.attachShadow({ mode: "closed" });
  var style = document.createElement("style");
  style.textContent = [
    ":host{all:initial;color-scheme:light}",
    ".window{position:fixed;inset:24px;z-index:2147483647;display:flex;min-width:0;min-height:320px;flex-direction:column;border:1px solid #000;background:#fff;box-shadow:0 8px 28px rgba(0,0,0,.22);font:14px -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;letter-spacing:0}",
    ".bar{display:flex;min-height:44px;align-items:center;border-bottom:1px solid #000;background:#fff}",
    ".title{min-width:0;flex:1;padding:0 14px;overflow:hidden;color:#000;font-weight:600;text-overflow:ellipsis;white-space:nowrap}",
    ".close{width:44px;height:44px;padding:0;border:0;border-left:1px solid #000;background:#fff;color:#000;font:24px/1 -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;cursor:pointer}",
    ".close:hover,.close:focus-visible{background:#000;color:#fff}",
    ".close:focus-visible{outline:2px solid #000;outline-offset:2px}",
    "iframe{display:block;min-width:0;min-height:0;flex:1;border:0;background:#fff}",
    "@media(max-width:640px),(max-height:520px){.window{inset:0;border:0}.bar{min-height:42px}.close{width:42px;height:42px}}",
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

  var closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close graph");
  closeButton.title = "Close graph";
  closeButton.textContent = "\u00d7";

  var frame = document.createElement("iframe");
  frame.src = CALCULATOR_URL;
  frame.title = "DesmosPlus 2D calculator";
  frame.referrerPolicy = "no-referrer";
  frame.allow = "autoplay; clipboard-read; clipboard-write";

  function onKeyDown(event) {
    if (event.key === "Escape") close();
  }

  function close() {
    document.removeEventListener("keydown", onKeyDown, true);
    host.remove();
    if (globalThis.__desmosPlusGraphOverlayClose === close) {
      delete globalThis.__desmosPlusGraphOverlayClose;
    }
  }

  globalThis.__desmosPlusGraphOverlayClose = close;
  closeButton.addEventListener("click", close);
  document.addEventListener("keydown", onKeyDown, true);

  bar.append(title, closeButton);
  panel.append(bar, frame);
  root.append(style, panel);
  document.documentElement.appendChild(host);
  closeButton.focus();

  return { state: "opened" };
})();
