(function () {
  "use strict";

  if (globalThis.__desmosPlusDesModderLoader) return;
  globalThis.__desmosPlusDesModderLoader = true;

  function send(message) {
    return new Promise(function (resolve, reject) {
      chrome.runtime.sendMessage(message, function (response) {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
          return;
        }
        if (!response || response.ok !== true) {
          reject(new Error((response && response.error) || "DesModder did not respond."));
          return;
        }
        resolve(response.result);
      });
    });
  }

  function injectScript(relativePath) {
    var script = document.createElement("script");
    script.src = chrome.runtime.getURL("vendor/desmodder/" + relativePath);
    script.onload = function () {
      script.remove();
    };
    (document.head || document.documentElement).appendChild(script);
  }

  function injectStyle() {
    if (document.querySelector("link[data-desmosplus-desmodder]")) return;
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = chrome.runtime.getURL("vendor/desmodder/script.css");
    style.setAttribute("data-desmosplus-desmodder", "true");
    (document.head || document.documentElement).appendChild(style);
  }

  function post(message) {
    window.postMessage(message, "*");
  }

  function sendHeartbeat(options) {
    chrome.storage.sync.get({ "_plugin-settings": {} }, function (items) {
      var settings = items["_plugin-settings"] || {};
      var wakatime = settings.wakatime || {};
      chrome.runtime.sendMessage(
        {
          type: "send-background-heartbeat",
          options: Object.assign({}, options, {
            secretKey: wakatime.secretKey,
            projectName: wakatime.projectName,
            splitProjects: wakatime.splitProjects,
          }),
        },
        function (response) {
          if (response && response.type === "heartbeat-error") post(response);
        },
      );
    });
  }

  function startBridge(version) {
    var root = document.documentElement;
    if (root.hasAttribute("data-desmosplus-desmodder")) return;
    root.setAttribute("data-desmosplus-desmodder", version || "enabled");

    var defaults = {
      "_force-disabled": [],
      "_force-disabled-version": "",
      "_plugins-enabled": {},
      "_plugin-settings": {},
    };

    function initialData() {
      chrome.storage.sync.get(defaults, function (items) {
        var forceDisabled = items["_force-disabled"] || [];
        if (items["_force-disabled-version"] !== version) {
          forceDisabled = [];
          chrome.storage.sync.set({
            "_force-disabled": [],
            "_force-disabled-version": version,
          });
        }
        var settings = structuredClone(items["_plugin-settings"] || {});
        if (settings.wakatime && settings.wakatime.secretKey) {
          settings.wakatime.secretKey = "????????-????-????-????-????????????";
        }
        post({
          type: "apply-initial-data",
          pluginsEnabled: items["_plugins-enabled"] || {},
          pluginsForceDisabled: forceDisabled,
          pluginSettings: settings,
          scriptURL: chrome.runtime.getURL("vendor/desmodder/script.js"),
        });
      });
    }

    window.addEventListener("message", function (event) {
      if (event.source !== window || !event.data || typeof event.data.type !== "string") {
        return;
      }
      if (event.data.type === "get-initial-data") {
        injectStyle();
        initialData();
      } else if (event.data.type === "set-plugins-enabled") {
        chrome.storage.sync.set({ "_plugins-enabled": event.data.value });
      } else if (event.data.type === "set-plugins-force-disabled") {
        chrome.storage.sync.set({
          "_force-disabled": Array.from(event.data.value || []),
          "_force-disabled-version": version,
        });
      } else if (event.data.type === "set-plugin-settings") {
        chrome.storage.sync.set({ "_plugin-settings": event.data.value });
      } else if (event.data.type === "send-heartbeat") {
        sendHeartbeat(event.data.options);
      }
    });

    injectScript("preload/script.js");
  }

  if (document.location.hostname === "maintain.desmos.com") return;
  send({ type: "desmosplus-desmodder-should-inject" })
    .then(function (state) {
      if (state && state.inject) startBridge(state.version);
    })
    .catch(function () {});
})();
