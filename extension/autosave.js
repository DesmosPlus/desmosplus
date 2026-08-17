(function () {
  "use strict";

  var STORAGE_KEY = "desmosPlusAutosaveEnabled";
  var SAVE_INTERVAL_MS = 60000;
  var saveTimer = null;

  function isSavedCalculator() {
    var url = new URL(window.location.href);
    var isDesmos = url.hostname === "desmos.com" || url.hostname.endsWith(".desmos.com");
    return isDesmos && /^\/calculator\/[^/?#]+/.test(url.pathname);
  }

  function canSave() {
    if (!isSavedCalculator()) return false;
    if (document.querySelector(".dcg-sign-in")) return false;
    return !document.querySelector(
      ".dcg-action-save.dcg-disabled, " +
        ".dcg-action-save[aria-disabled='true'], " +
        ".dcg-action-save[disabled]",
    );
  }

  function requestSave() {
    if (!canSave()) return;
    var isApple = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || "");
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "s",
        code: "KeyS",
        metaKey: isApple,
        ctrlKey: !isApple,
        bubbles: true,
        cancelable: true,
        composed: true,
      }),
    );
  }

  function stop() {
    if (saveTimer !== null) window.clearTimeout(saveTimer);
    saveTimer = null;
  }

  function schedule(enabled) {
    stop();
    if (!enabled) return;
    saveTimer = window.setTimeout(function tick() {
      requestSave();
      saveTimer = window.setTimeout(tick, SAVE_INTERVAL_MS);
    }, SAVE_INTERVAL_MS);
  }

  chrome.storage.local
    .get(STORAGE_KEY)
    .then(function (stored) {
      schedule(stored[STORAGE_KEY] === true);
    })
    .catch(function () {
      schedule(false);
    });

  chrome.storage.onChanged.addListener(function (changes, areaName) {
    if (areaName !== "local" || !changes[STORAGE_KEY]) return;
    schedule(changes[STORAGE_KEY].newValue === true);
  });

  window.addEventListener("pagehide", stop, { once: true });
})();
