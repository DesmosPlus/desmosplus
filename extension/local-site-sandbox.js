(function () {
  "use strict";

  var values = {};
  var readyResolve;
  window.DesmosPlusExtensionStorageReady = new Promise(function (resolve) {
    readyResolve = resolve;
  });

  window.DesmosPlusExtensionStorage = {
    getItem: function (key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? values[key] : null;
    },
    setItem: function (key, value) {
      values[key] = String(value);
      window.parent.postMessage(
        { type: "desmosplus-storage-change", key: key, value: values[key] },
        "*",
      );
    },
    removeItem: function (key) {
      delete values[key];
      window.parent.postMessage(
        { type: "desmosplus-storage-change", key: key, value: null },
        "*",
      );
    },
  };

  window.DesmosPlusExtensionNavigate = function (path) {
    window.parent.postMessage({ type: "desmosplus-navigate", path: path }, "*");
  };

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target && event.target.closest && event.target.closest("a[href]");
      if (!link) return;
      var target = new URL(link.href, window.location.href);
      if (target.protocol !== "chrome-extension:") return;
      event.preventDefault();
      window.DesmosPlusExtensionNavigate(target.pathname + target.search + target.hash);
    },
    true,
  );

  window.addEventListener("message", function (event) {
    if (event.source !== window.parent || !event.data) return;
    if (event.data.type !== "desmosplus-storage-init") return;
    values = event.data.values && typeof event.data.values === "object"
      ? event.data.values
      : {};
    readyResolve();
  });

  window.parent.postMessage({ type: "desmosplus-storage-ready" }, "*");
})();
