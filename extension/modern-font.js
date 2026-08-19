(function () {
  "use strict";

  var STORAGE_KEY = "desmosPlusModernFontEnabled";
  var ROOT_ATTRIBUTE = "data-desmosplus-modern-font";

  function apply(enabled) {
    if (!document.documentElement) return;
    if (enabled) document.documentElement.setAttribute(ROOT_ATTRIBUTE, "true");
    else document.documentElement.removeAttribute(ROOT_ATTRIBUTE);
  }

  chrome.storage.local
    .get(STORAGE_KEY)
    .then(function (stored) {
      apply(stored[STORAGE_KEY] === true);
    })
    .catch(function () {
      apply(false);
    });

  chrome.storage.onChanged.addListener(function (changes, areaName) {
    if (areaName !== "local" || !changes[STORAGE_KEY]) return;
    apply(changes[STORAGE_KEY].newValue === true);
  });
})();
