(function () {
  "use strict";

  var HOST_ID = "desmosplus-graph-overlay";
  var CONTROLLER_KEY = "__desmosPlusGraphOverlay";
  var CALCULATOR_URL = "https://desmosplus.pages.dev/2dcalculator";
  var ICON_URL = "https://desmosplus.pages.dev/extension/icons/icon-48.png";
  var MIN_WIDTH = 420;
  var MIN_HEIGHT = 320;
  var EDGE_GAP = 12;
  var COMPACT_LAYOUT = "(max-width:640px), (max-height:520px)";
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
    ".window{--window-left:max(12px,calc(50vw - 380px));--window-top:max(12px,calc(50vh - 260px));position:fixed;left:var(--window-left);top:var(--window-top);z-index:2147483647;display:flex;width:min(760px,calc(100vw - 48px));height:min(520px,calc(100vh - 48px));min-width:420px;min-height:320px;max-width:calc(100vw - 12px);max-height:calc(100vh - 12px);overflow:hidden;flex-direction:column;border:1px solid #000;background:#fff;box-shadow:0 8px 28px rgba(0,0,0,.22);font:14px -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;letter-spacing:0}",
    ".bar{display:flex;min-height:44px;align-items:center;border-bottom:1px solid #000;background:#fff;cursor:move;touch-action:none;user-select:none}",
    ".title{min-width:0;flex:1;padding:0 14px;overflow:hidden;color:#000;font-weight:600;text-overflow:ellipsis;white-space:nowrap}",
    ".controls{display:flex;align-self:stretch;cursor:default}",
    ".control{width:44px;height:44px;padding:0;border:0;border-left:1px solid #000;background:#fff;color:#000;font:24px/1 -apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;cursor:pointer}",
    ".control:hover,.control:focus-visible,.launcher:hover,.launcher:focus-visible{background:#000;color:#fff}",
    ".control:focus-visible,.launcher:focus-visible{outline:2px solid #000;outline-offset:2px}",
    ".launcher{position:fixed;right:24px;bottom:24px;z-index:2147483647;display:flex;width:56px;height:56px;padding:7px;align-items:center;justify-content:center;border:1px solid #000;background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2);cursor:pointer}",
    ".launcher img{display:block;width:40px;height:40px}",
    "iframe{display:block;min-width:0;min-height:0;flex:1;border:0;background:#fff}",
    ".resize-handle{position:absolute;right:0;bottom:0;z-index:2;width:22px;height:22px;padding:0;border:0;background:transparent;cursor:nwse-resize;touch-action:none}",
    ".resize-handle:before,.resize-handle:after{content:\"\";position:absolute;right:4px;bottom:4px;border-right:1px solid #000;border-bottom:1px solid #000}",
    ".resize-handle:before{width:12px;height:12px}.resize-handle:after{width:6px;height:6px}",
    ".resize-handle:focus-visible{outline:2px solid #000;outline-offset:-2px}",
    "@media(max-width:640px),(max-height:520px){.window{inset:0;width:auto;height:auto;min-width:0;min-height:0;max-width:none;max-height:none;border:0}.bar{min-height:42px;cursor:default;touch-action:auto}.control{width:42px;height:42px}.launcher{right:12px;bottom:12px}.resize-handle{display:none}}",
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

  var resizeHandle = document.createElement("button");
  resizeHandle.className = "resize-handle";
  resizeHandle.type = "button";
  resizeHandle.setAttribute("aria-label", "Resize graph");
  resizeHandle.title = "Drag to resize graph";

  var dragState = null;
  var resizeState = null;

  function compactLayout() {
    return window.matchMedia(COMPACT_LAYOUT).matches;
  }

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, value));
  }

  function setPanelSize(width, height) {
    var rect = panel.getBoundingClientRect();
    var maxWidth = Math.max(MIN_WIDTH, window.innerWidth - rect.left - EDGE_GAP);
    var maxHeight = Math.max(MIN_HEIGHT, window.innerHeight - rect.top - EDGE_GAP);
    panel.style.width = clamp(width, MIN_WIDTH, maxWidth) + "px";
    panel.style.height = clamp(height, MIN_HEIGHT, maxHeight) + "px";
  }

  function startDrag(event) {
    if (event.button !== 0 || compactLayout() || controls.contains(event.target)) return;
    var rect = panel.getBoundingClientRect();
    dragState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    bar.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  function moveDrag(event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    var left = dragState.left + event.clientX - dragState.startX;
    var top = dragState.top + event.clientY - dragState.startY;
    panel.style.left = clamp(left, 0, window.innerWidth - dragState.width) + "px";
    panel.style.top = clamp(top, 0, window.innerHeight - dragState.height) + "px";
  }

  function stopDrag(event) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    dragState = null;
  }

  function startResize(event) {
    if (event.button !== 0 || compactLayout()) return;
    var rect = panel.getBoundingClientRect();
    resizeState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      width: rect.width,
      height: rect.height,
    };
    resizeHandle.setPointerCapture(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
  }

  function moveResize(event) {
    if (!resizeState || event.pointerId !== resizeState.pointerId) return;
    setPanelSize(
      resizeState.width + event.clientX - resizeState.startX,
      resizeState.height + event.clientY - resizeState.startY,
    );
  }

  function stopResize(event) {
    if (!resizeState || event.pointerId !== resizeState.pointerId) return;
    resizeState = null;
  }

  function resizeWithKeyboard(event) {
    var directions = {
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    };
    var direction = directions[event.key];
    if (!direction || compactLayout()) return;
    var rect = panel.getBoundingClientRect();
    var amount = event.shiftKey ? 40 : 10;
    setPanelSize(rect.width + direction[0] * amount, rect.height + direction[1] * amount);
    event.preventDefault();
  }

  function clampPanelToViewport() {
    if (panel.hidden) return;
    if (compactLayout()) {
      panel.style.left = "";
      panel.style.top = "";
      panel.style.width = "";
      panel.style.height = "";
      return;
    }
    var rect = panel.getBoundingClientRect();
    var width = Math.min(rect.width, window.innerWidth - EDGE_GAP * 2);
    var height = Math.min(rect.height, window.innerHeight - EDGE_GAP * 2);
    panel.style.width = width + "px";
    panel.style.height = height + "px";
    panel.style.left = clamp(rect.left, 0, window.innerWidth - width) + "px";
    panel.style.top = clamp(rect.top, 0, window.innerHeight - height) + "px";
  }

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
    window.removeEventListener("resize", clampPanelToViewport);
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
  bar.addEventListener("pointerdown", startDrag);
  bar.addEventListener("pointermove", moveDrag);
  bar.addEventListener("pointerup", stopDrag);
  bar.addEventListener("pointercancel", stopDrag);
  resizeHandle.addEventListener("pointerdown", startResize);
  resizeHandle.addEventListener("pointermove", moveResize);
  resizeHandle.addEventListener("pointerup", stopResize);
  resizeHandle.addEventListener("pointercancel", stopResize);
  resizeHandle.addEventListener("keydown", resizeWithKeyboard);
  document.addEventListener("keydown", onKeyDown, true);
  window.addEventListener("resize", clampPanelToViewport);

  controls.append(minimizeButton, closeButton);
  bar.append(title, controls);
  launcher.append(launcherIcon);
  panel.append(bar, frame, resizeHandle);
  root.append(style, panel, launcher);
  document.documentElement.appendChild(host);
  minimizeButton.focus();

  return { state: "opened" };
})();
