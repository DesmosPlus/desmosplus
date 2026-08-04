(function () {
  "use strict";

  var SITE_CACHE_VERSION = "2026-08-03-3";
  var SITE_CACHE_KEY = "desmosplus.site-cache-version";

  function resetOldSiteCache() {
    var previousVersion = "";
    try {
      previousVersion = localStorage.getItem(SITE_CACHE_KEY) || "";
      if (previousVersion === SITE_CACHE_VERSION) {
        document.documentElement.setAttribute("data-cache-reset", "current");
        return;
      }
      localStorage.setItem(SITE_CACHE_KEY, SITE_CACHE_VERSION);
    } catch (error) {
      // Cache cleanup still runs when persistent storage is unavailable.
    }

    document.documentElement.setAttribute("data-cache-reset", "running");
    var tasks = [];
    if (window.caches && typeof window.caches.keys === "function") {
      tasks.push(
        window.caches.keys().then(function (names) {
          return Promise.all(
            names.map(function (name) {
              return window.caches.delete(name);
            }),
          );
        }),
      );
    }
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
      tasks.push(
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          return Promise.all(
            registrations.map(function (registration) {
              return registration.unregister();
            }),
          );
        }),
      );
    }

    Promise.allSettled(tasks).then(function () {
      document.documentElement.setAttribute("data-cache-reset", "done");
    });
  }

  document.documentElement.setAttribute("data-cache-version", SITE_CACHE_VERSION);
  resetOldSiteCache();

  function isLocalUrl(value) {
    try {
      var url = new URL(value, window.location.href);
      return (
        url.origin === window.location.origin ||
        url.protocol === "data:" ||
        url.protocol === "blob:" ||
        url.protocol === "about:"
      );
    } catch (error) {
      return true;
    }
  }

  function emptyResponse() {
    return new Response("{}", {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  if (window.fetch) {
    var originalFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : input && input.url;
      if (url && !isLocalUrl(url)) return Promise.resolve(emptyResponse());
      return originalFetch(input, init);
    };
  }

  if (window.XMLHttpRequest) {
    var originalOpen = XMLHttpRequest.prototype.open;
    var originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (method, url) {
      this.__offlineBlocked = url && !isLocalUrl(url);
      if (this.__offlineBlocked) {
        this.__offlineMethod = method || "GET";
        this.__offlineUrl = url;
        return;
      }
      return originalOpen.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function () {
      if (!this.__offlineBlocked) return originalSend.apply(this, arguments);
      setTimeout(
        function () {
          this.dispatchEvent(new Event("loadend"));
        }.bind(this),
        0,
      );
    };
  }

  if (navigator.sendBeacon) {
    var originalBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (url, data) {
      if (!isLocalUrl(url)) return false;
      return originalBeacon(url, data);
    };
  }

  var originalAppendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function (node) {
    if (
      node &&
      node.tagName === "SCRIPT" &&
      node.src &&
      !isLocalUrl(node.src)
    ) {
      node.removeAttribute("src");
      node.text = "";
    }
    return originalAppendChild.apply(this, arguments);
  };

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target && event.target.closest && event.target.closest("a[href]");
      if (!link || isLocalUrl(link.href)) return;
      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );
})();
