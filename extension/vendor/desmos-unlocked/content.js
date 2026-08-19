(function () {
  "use strict";

  var CONFIG_KEYS = [
    "autoCommands",
    "charsThatBreakOutOfSupSub",
    "isAutoParenEnabled",
    "disableAutoSubstitutionInSubscripts",
    "enableMathquillOverrides",
  ];
  var DEFAULTS = {
    autoCommands:
      "keepmeKEEPME alpha beta sqrt theta Theta phi Phi pi Pi tau nthroot cbrt " +
      "sum prod int ans percent infinity infty gamma Gamma delta Delta epsilon " +
      "epsiv zeta eta kappa lambda Lambda mu xi Xi rho sigma Sigma chi Psi " +
      "omega Omega digamma iota nu upsilon Upsilon Psi square mid parallel " +
      "nparallel perp times div approx",
    charsThatBreakOutOfSupSub: "+-=<>*",
    isAutoParenEnabled: false,
    disableAutoSubstitutionInSubscripts: true,
    enableMathquillOverrides: false,
  };
  var injected = false;

  function injectRuntime() {
    if (injected) return Promise.resolve();
    injected = true;
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = chrome.runtime.getURL("vendor/desmos-unlocked/script.js");
      script.onload = function () {
        script.remove();
        resolve();
      };
      script.onerror = function () {
        script.remove();
        reject(new Error("Desmos Unlocked runtime could not be loaded."));
      };
      (document.head || document.documentElement).appendChild(script);
    });
  }

  function shortcutPayload(stored) {
    stored = Object.assign({}, DEFAULTS, stored);
    var enabled = new Set(String(stored.autoCommands).split(/\s+/));
    var extended = window.DesmosUnlockedCatalog.categories.find(function (category) {
      return category.id === "extended";
    });
    return {
      config: {
        autoCommands: stored.autoCommands,
        charsThatBreakOutOfSupSub: stored.charsThatBreakOutOfSupSub,
        isAutoParenEnabled: stored.isAutoParenEnabled,
        disableAutoSubstitutionInSubscripts:
          stored.disableAutoSubstitutionInSubscripts,
      },
      engineEnabled: stored.enableMathquillOverrides === true,
      commands: (extended ? extended.entries : []).filter(function (entry) {
        return enabled.has(entry[0]);
      }),
    };
  }

  async function sendConfig() {
    var stored = await chrome.storage.local.get(CONFIG_KEYS);
    await injectRuntime();
    document.dispatchEvent(
      new CustomEvent("desmosplus-shortcut-config", {
        detail: shortcutPayload(stored),
      }),
    );
  }

  sendConfig().catch(function (error) {
    console.error("DesmosPlus shortcut setup failed:", error);
  });
  chrome.storage.onChanged.addListener(function (changes, areaName) {
    if (areaName !== "local") return;
    if (!CONFIG_KEYS.some(function (key) { return changes[key]; })) return;
    sendConfig().catch(function (error) {
      console.error("DesmosPlus shortcut update failed:", error);
    });
  });
})();
