(function () {
  "use strict";

  var STORAGE_KEY = "desmosPlusLocalWebsiteStorage";
  var PAGES = new Set([
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
  ]);
  var frame = document.getElementById("local-site-frame");
  var requestedTarget = "";
  try {
    requestedTarget = decodeURIComponent(window.location.hash.slice(1));
  } catch (error) {
    requestedTarget = "";
  }
  var requestedUrl = new URL(
    requestedTarget || "index.html",
    chrome.runtime.getURL("index.html"),
  );
  var requestedPage = requestedUrl.pathname.split("/").pop() || "index.html";
  var page = PAGES.has(requestedPage) ? requestedPage : "index.html";
  var pageUrl = chrome.runtime.getURL(page) + requestedUrl.search + requestedUrl.hash;
  var values = {};
  var saveTimer = null;

  function sendStorage() {
    if (!frame.contentWindow) return;
    frame.contentWindow.postMessage(
      { type: "desmosplus-storage-init", values: values },
      "*",
    );
  }

  function queueSave() {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(function () {
      chrome.storage.local.set({ [STORAGE_KEY]: values }).catch(function () {});
    }, 50);
  }

  function persistNow() {
    window.clearTimeout(saveTimer);
    saveTimer = null;
    return chrome.storage.local.set({ [STORAGE_KEY]: values });
  }

  function navigate(targetPage, target) {
    persistNow().finally(function () {
      window.location.hash = encodeURIComponent(
        targetPage + target.search + target.hash,
      );
      window.location.reload();
    });
  }

  window.addEventListener("message", function (event) {
    if (event.source !== frame.contentWindow || !event.data) return;
    if (event.data.type === "desmosplus-navigate") {
      var target = new URL(event.data.path, chrome.runtime.getURL("index.html"));
      var targetPage = target.pathname.split("/").pop() || "index.html";
      if (PAGES.has(targetPage)) {
        navigate(targetPage, target);
      }
      return;
    }
    if (event.data.type === "desmosplus-storage-ready") {
      sendStorage();
      return;
    }
    if (event.data.type !== "desmosplus-storage-change") return;
    if (event.data.value === null) delete values[event.data.key];
    else values[event.data.key] = String(event.data.value);
    queueSave();
  });

  chrome.storage.local
    .get(STORAGE_KEY)
    .then(function (stored) {
      values = stored[STORAGE_KEY] && typeof stored[STORAGE_KEY] === "object"
        ? stored[STORAGE_KEY]
        : {};
    })
    .catch(function () {
      values = {};
    })
    .finally(function () {
      frame.src = pageUrl;
    });

  frame.addEventListener("load", sendStorage);
})();
