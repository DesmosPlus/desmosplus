(function () {
  "use strict";

  var AUTO_KEY = "desmodderAutoInject";
  var MANUAL_TAB_KEY = "desmodderManualTabId";
  var DYNAMIC_OFFSET = 1000;
  var SESSION_OFFSET = 2000;
  var resourcesPromise;

  function localJson(name) {
    return fetch(chrome.runtime.getURL("vendor/desmodder/" + name)).then(function (
      response,
    ) {
      if (!response.ok) throw new Error("Could not read bundled DesModder " + name + ".");
      return response.json();
    });
  }

  function resources() {
    if (!resourcesPromise) {
      resourcesPromise = Promise.all([
        localJson("net_request_rules.json"),
        localJson("metadata.json"),
      ]).then(function (values) {
        return { rules: values[0], metadata: values[1] };
      });
    }
    return resourcesPromise;
  }

  function adaptedRules(rules, offset, tabId) {
    return rules.map(function (rule) {
      var copy = JSON.parse(JSON.stringify(rule));
      copy.id = offset + rule.id;
      if (Number.isInteger(tabId)) copy.condition.tabIds = [tabId];
      return copy;
    });
  }

  async function syncAutoRules(enabled) {
    var bundle = await resources();
    var rules = adaptedRules(bundle.rules, DYNAMIC_OFFSET);
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rules.map(function (rule) {
        return rule.id;
      }),
      addRules: enabled ? rules : [],
    });
  }

  async function syncManualRules(tabId) {
    var bundle = await resources();
    var rules = adaptedRules(bundle.rules, SESSION_OFFSET, tabId);
    await chrome.declarativeNetRequest.updateSessionRules({
      removeRuleIds: rules.map(function (rule) {
        return rule.id;
      }),
      addRules: Number.isInteger(tabId) ? rules : [],
    });
  }

  async function readState() {
    var values = await Promise.all([
      chrome.storage.local.get({ [AUTO_KEY]: false }),
      chrome.storage.session.get({ [MANUAL_TAB_KEY]: null }),
      resources(),
    ]);
    return {
      autoInject: values[0][AUTO_KEY] === true,
      manualTabId: Number.isInteger(values[1][MANUAL_TAB_KEY])
        ? values[1][MANUAL_TAB_KEY]
        : null,
      version: values[2].metadata.version,
      releaseUrl: values[2].metadata.releaseUrl,
    };
  }

  async function setAutoInject(enabled) {
    await chrome.storage.local.set({ [AUTO_KEY]: enabled });
    await chrome.storage.session.remove(MANUAL_TAB_KEY);
    await Promise.all([syncAutoRules(enabled), syncManualRules(null)]);
    return readState();
  }

  async function enableTab(tabId) {
    if (!Number.isInteger(tabId)) throw new Error("No active Desmos tab was found.");
    var state = await readState();
    if (state.autoInject) return state;
    await chrome.storage.session.set({ [MANUAL_TAB_KEY]: tabId });
    await syncManualRules(tabId);
    return readState();
  }

  async function shouldInject(sender) {
    var state = await readState();
    return {
      inject:
        state.autoInject ||
        (sender.tab && sender.tab.id === state.manualTabId),
      version: state.version,
    };
  }

  async function handleMessage(message, sender) {
    if (!message || typeof message.type !== "string") return undefined;
    if (message.type === "desmosplus-desmodder-get-state") return readState();
    if (message.type === "desmosplus-desmodder-set-auto") {
      return setAutoInject(message.enabled === true);
    }
    if (message.type === "desmosplus-desmodder-enable-tab") {
      return enableTab(message.tabId);
    }
    if (message.type === "desmosplus-desmodder-should-inject") {
      return shouldInject(sender);
    }
    return undefined;
  }

  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (!message || !String(message.type || "").startsWith("desmosplus-desmodder-")) {
      return false;
    }
    handleMessage(message, sender).then(
      function (result) {
        sendResponse({ ok: true, result: result });
      },
      function (error) {
        sendResponse({ ok: false, error: error.message || String(error) });
      },
    );
    return true;
  });

  chrome.tabs.onRemoved.addListener(function (tabId) {
    chrome.storage.session.get({ [MANUAL_TAB_KEY]: null }).then(function (items) {
      if (items[MANUAL_TAB_KEY] !== tabId) return;
      chrome.storage.session.remove(MANUAL_TAB_KEY);
      syncManualRules(null);
    });
  });

  function restoreRules() {
    readState().then(function (state) {
      return Promise.all([
        syncAutoRules(state.autoInject),
        syncManualRules(state.manualTabId),
      ]);
    });
  }

  chrome.runtime.onInstalled.addListener(restoreRules);
  chrome.runtime.onStartup.addListener(restoreRules);
  restoreRules();
})();

importScripts("vendor/desmodder/background.js");
