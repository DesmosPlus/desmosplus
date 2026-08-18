(function () {
  "use strict";

  var exportButton = document.getElementById("export");
  var importButton = document.getElementById("import");
  var svgButton = document.getElementById("import-svg");
  var objImportButton = document.getElementById("import-obj");
  var tickerAddButton = document.getElementById("ticker-add");
  var tickerRemoveButton = document.getElementById("ticker-remove");
  var functionsAddButton = document.getElementById("functions-add");
  var functionsRemoveButton = document.getElementById("functions-remove");
  var audioImportButton = document.getElementById("desaudify-audio");
  var audioDownloadButton = document.getElementById("desaudify-download");
  var templateButton = document.getElementById("desaudify-template");
  var dataButton = document.getElementById("desaudify-data");
  var processingButton = document.getElementById("desaudify-processing");
  var importFile = document.getElementById("import-file");
  var svgFile = document.getElementById("svg-file");
  var objFile = document.getElementById("obj-file");
  var audioFile = document.getElementById("desaudify-audio-file");
  var dataFile = document.getElementById("desaudify-data-file");
  var processingFile = document.getElementById("desaudify-processing-file");
  var modeInput = document.getElementById("desaudify-mode");
  var modeMenu = document.getElementById("desaudify-mode-menu");
  var modeButton = document.getElementById("desaudify-mode-button");
  var customSettings = document.getElementById("desaudify-custom-settings");
  var objModeInput = document.getElementById("obj-mode");
  var objModeSummary = document.getElementById("obj-mode-summary");
  var objMaxWarning = document.getElementById("obj-max-warning");
  var settingsSummary = document.getElementById("desaudify-settings-summary");
  var maxWarning = document.getElementById("desaudify-max-warning");
  var desaudifyProjectLink = document.getElementById("desaudify-project-link");
  var tabsNode = document.querySelector(".tabs");
  var popoutPanel = document.getElementById("popout-panel");
  var popoutButton = document.getElementById("open-popout");
  var overlayButton = document.getElementById("open-overlay");
  var nameInput = document.getElementById("graph-name");
  var categoryInput = document.getElementById("graph-category");
  var darkModeToggle = document.getElementById("dark-mode-toggle");
  var darkModeState = document.getElementById("dark-mode-state");
  var autosaveToggle = document.getElementById("autosave-toggle");
  var autosaveState = document.getElementById("autosave-state");
  var statusNode = document.getElementById("status");
  var availability = {
    graph: false,
    svg: false,
    threeD: false,
    functions: false,
    desaudify: false,
  };
  var busy = false;
  var panelAnimation = null;
  var panelTransitionId = 0;
  var audioAction = "import";
  var POPOUT_URL = "https://desmosplus.pages.dev/2dcalculator";
  var DARK_MODE_KEY = "desmosPlusDarkModeEnabled";
  var AUTOSAVE_KEY = "desmosPlusAutosaveEnabled";
  var FUNCTION_FOLDER_ID = "desmosplus-functions-folder";
  var FUNCTION_ID_PREFIX = "desmosplus-function-";
  var TICKER_FOLDER_ID = "desmosplus-starter-ticker-folder";
  var TICKER_ID_PREFIX = "desmosplus-starter-ticker-";
  var TICKER_HANDLER = "u_{pdate}\\left(\\operatorname{dt}\\right)";
  var FUNCTION_DEFINITIONS = [
    { id: "sinc", latex: "f_{sinc}\\left(x\\right)=\\left\\{x=0:1,\\frac{\\sin\\left(\\pi x\\right)}{\\pi x}\\right\\}" },
    { id: "clamp", latex: "f_{clamp}\\left(x,a,b\\right)=\\min\\left(\\max\\left(x,a\\right),b\\right)" },
    { id: "lerp", latex: "f_{lerp}\\left(a,b,t\\right)=a+\\left(b-a\\right)t" },
    { id: "frac", latex: "f_{frac}\\left(x\\right)=x-\\floor\\left(x\\right)" },
    { id: "hypot", latex: "f_{hypot}\\left(x,y\\right)=\\sqrt{x^2+y^2}" },
    { id: "logistic", latex: "f_{logistic}\\left(x\\right)=\\frac{1}{1+e^{-x}}" },
    { id: "sign", latex: "f_{sign}\\left(x\\right)=\\left\\{x>0:1,x<0:-1,0\\right\\}" },
    { id: "roundto", latex: "f_{roundto}\\left(x,n\\right)=\\frac{\\round\\left(10^n x\\right)}{10^n}" },
    { id: "versin", latex: "f_{versin}\\left(x\\right)=1-\\cos\\left(x\\right)" },
    { id: "haversin", latex: "f_{haversin}\\left(x\\right)=\\sin^2\\left(\\frac{x}{2}\\right)" },
    { id: "asinh", latex: "f_{asinh}\\left(x\\right)=\\ln\\left(x+\\sqrt{x^2+1}\\right)" },
    { id: "acosh", latex: "f_{acosh}\\left(x\\right)=\\ln\\left(x+\\sqrt{x^2-1}\\right)" },
    { id: "atanh", latex: "f_{atanh}\\left(x\\right)=\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)" },
    { id: "wrap", latex: "f_{wrap}\\left(x,a,b\\right)=a+\\mod\\left(x-a,b-a\\right)" },
  ];
  var MAX_MODE_CONFIRMATION =
    "MAX is not an originally supported mode for DesAudify. It removes " +
    "DesmosPlus safety limits and may exhaust CPU or RAM, freeze or crash the " +
    "browser or Desmos, and lose unsaved work. The extension owner is not " +
    "responsible for anything that happens beyond this point. Continue?";
  var OBJ_MAX_CONFIRMATION =
    "OBJ MAX removes DesmosPlus file-size and triangle safeguards. Large models " +
    "may exhaust CPU or RAM, freeze or crash the browser or Desmos, and lose " +
    "unsaved work. The extension owner is not responsible for anything that " +
    "happens beyond this point. Continue?";

  function productFromUrl(value) {
    var url = new URL(value);
    var path = url.pathname.toLowerCase();
    if (path.indexOf("/2dcalculator") === 0) return "2dcalculator";
    if (path.indexOf("/3dcalculator") === 0) return "3dcalculator";
    if (path.indexOf("/3d") === 0) return "3dcalculator";
    if (path.indexOf("/geometry") === 0) return "geometry";
    if (path.indexOf("/notebook") === 0) return "notebook";
    if (path.indexOf("/matrix") === 0) return "matrix";
    if (path.indexOf("/fourfunction") === 0) return "fourfunction";
    if (path.indexOf("/scientific") === 0) return "scientific";
    if (path.indexOf("/calculator") === 0) return "2dcalculator";
    return "";
  }

  function supportedCalculatorHost(url) {
    var hostname = url.hostname.toLowerCase();
    return (
      hostname === "desmos.com" ||
      hostname.endsWith(".desmos.com") ||
      hostname === "desmosplus.pages.dev" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  }

  function safeName(value, fallback) {
    return String(value || "").trim() || fallback;
  }

  function fileName(value) {
    return (
      safeName(value, "desmos-graph")
        .replace(/[^a-z0-9_-]+/gi, "-")
        .replace(/^-+|-+$/g, "") || "desmos-graph"
    );
  }

  function readCalculator() {
    var calculator = window.Calc || window.Notebook;
    if (!calculator || typeof calculator.getState !== "function") {
      throw new Error("Calculator API is not ready.");
    }
    var loadData = {};
    try {
      loadData = JSON.parse(document.body.getAttribute("data-load-data") || "{}");
    } catch (error) {}
    return {
      state: calculator.getState(),
      title:
        (loadData.graph && loadData.graph.title) ||
        document.title.replace(/\s*[|]\s*Desmos\s*$/, ""),
    };
  }

  function writeCalculator(state) {
    var calculator = window.Calc || window.Notebook;
    if (!calculator || typeof calculator.setState !== "function") {
      throw new Error("Calculator API is not ready.");
    }
    calculator.setState(state, { allowUndo: true });
    return true;
  }

  function writeSvg(expressions) {
    var calculator = window.Calc;
    if (
      !calculator ||
      typeof calculator.getState !== "function" ||
      typeof calculator.setState !== "function"
    ) {
      throw new Error("Graphing Calculator API is not ready.");
    }
    var state = calculator.getState();
    if (!state.expressions || !Array.isArray(state.expressions.list)) {
      throw new Error("This calculator cannot accept SVG equations.");
    }
    Array.prototype.push.apply(state.expressions.list, expressions);
    calculator.setState(state, { allowUndo: true });
    return true;
  }

  function writeObj(expressions) {
    var calculator = window.Calc;
    if (
      !calculator ||
      typeof calculator.getState !== "function" ||
      typeof calculator.setState !== "function"
    ) {
      throw new Error("3D Calculator API is not ready.");
    }
    var state = calculator.getState();
    if (!state.expressions || !Array.isArray(state.expressions.list)) {
      throw new Error("This calculator cannot accept OBJ expressions.");
    }
    Array.prototype.push.apply(state.expressions.list, expressions);
    calculator.setState(state, { allowUndo: true });
    return { expressionCount: expressions.length };
  }

  function updateStarterTicker(action, folderId, idPrefix, handlerLatex) {
    var calculator = window.Calc;
    if (
      !calculator ||
      typeof calculator.getState !== "function" ||
      typeof calculator.setState !== "function"
    ) {
      throw new Error("Calculator API is not ready.");
    }
    var state = calculator.getState();
    if (!state.expressions || !Array.isArray(state.expressions.list)) {
      throw new Error("This calculator cannot accept a ticker.");
    }
    var ticker = state.expressions.ticker;
    var hasOwnedItems = state.expressions.list.some(function (item) {
      return (
        String(item.id || "") === folderId ||
        String(item.id || "").indexOf(idPrefix) === 0 ||
        String(item.folderId || "") === folderId
      );
    });
    if (
      action === "add" &&
      ticker &&
      (!hasOwnedItems || ticker.handlerLatex !== handlerLatex)
    ) {
      return { conflict: true, added: 0, removed: 0 };
    }
    var removed = 0;
    state.expressions.list = state.expressions.list.filter(function (item) {
      var owned =
        String(item.id || "") === folderId ||
        String(item.id || "").indexOf(idPrefix) === 0 ||
        String(item.folderId || "") === folderId;
      if (owned) removed += 1;
      return !owned;
    });
    if (action === "add") {
      state.expressions.list.push({
        id: folderId,
        type: "folder",
        title: "Desmos+ Starter Ticker",
        collapsed: true,
      });
      state.expressions.list.push({
        id: idPrefix + "elapsed",
        folderId: folderId,
        type: "expression",
        color: "#2d70b3",
        latex: "t_{elapsed}=0",
      });
      state.expressions.list.push({
        id: idPrefix + "update",
        folderId: folderId,
        type: "expression",
        color: "#c74440",
        hidden: true,
        latex:
          "u_{pdate}\\left(d\\right)=t_{elapsed}\\to t_{elapsed}+\\frac{d}{1000}",
      });
      state.expressions.ticker = {
        handlerLatex: handlerLatex,
        minStepLatex: "0",
        open: true,
        playing: false,
      };
    } else if (action === "remove") {
      if (removed > 0 && ticker && ticker.handlerLatex === handlerLatex) {
        delete state.expressions.ticker;
      }
    } else {
      throw new Error("Unknown ticker action.");
    }
    calculator.setState(state, { allowUndo: true });
    return { conflict: false, added: action === "add" ? 3 : 0, removed: removed };
  }

  function updateFunctionLibrary(action, definitions, folderId, idPrefix) {
    var calculator = window.Calc;
    if (
      !calculator ||
      typeof calculator.getState !== "function" ||
      typeof calculator.setState !== "function"
    ) {
      throw new Error("Graphing Calculator API is not ready.");
    }
    var state = calculator.getState();
    if (!state.expressions || !Array.isArray(state.expressions.list)) {
      throw new Error("This calculator cannot accept function definitions.");
    }
    var removed = 0;
    state.expressions.list = state.expressions.list.filter(function (item) {
      var owned =
        String(item.id || "") === folderId ||
        String(item.id || "").indexOf(idPrefix) === 0 ||
        String(item.folderId || "") === folderId;
      if (owned) removed += 1;
      return !owned;
    });
    if (action === "add") {
      state.expressions.list.push({
        id: folderId,
        type: "folder",
        title: "Desmos+ Functions",
        collapsed: true,
      });
      definitions.forEach(function (definition) {
        state.expressions.list.push({
          id: idPrefix + definition.id,
          folderId: folderId,
          type: "expression",
          color: "#2d70b3",
          hidden: true,
          latex: definition.latex,
        });
      });
    } else if (action !== "remove") {
      throw new Error("Unknown function library action.");
    }
    calculator.setState(state, { allowUndo: true });
    return { added: action === "add" ? definitions.length : 0, removed: removed };
  }

  function callDesAudify(action, args) {
    var bridge = window.DesmosPlusDesAudify;
    if (!bridge || typeof bridge[action] !== "function") {
      throw new Error("DesAudify injection did not load.");
    }
    return bridge[action].apply(bridge, args || []);
  }

  function download(value, name) {
    var url = URL.createObjectURL(
      new Blob([JSON.stringify(value)], { type: "application/json" }),
    );
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName(name) + ".desmos";
    link.click();
    URL.revokeObjectURL(url);
  }

  function downloadBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  }

  function setStatus(message) {
    statusNode.textContent = message;
  }

  function showDarkModeState(enabled) {
    darkModeToggle.checked = enabled;
    darkModeState.textContent = enabled ? "On" : "Off";
  }

  async function loadDarkModeSetting() {
    var stored = await chrome.storage.local.get(DARK_MODE_KEY);
    showDarkModeState(stored[DARK_MODE_KEY] === true);
  }

  async function saveDarkModeSetting() {
    var enabled = darkModeToggle.checked;
    darkModeToggle.disabled = true;
    try {
      await chrome.storage.local.set({ [DARK_MODE_KEY]: enabled });
      showDarkModeState(enabled);
      setStatus(enabled ? "Dark mode enabled." : "Dark mode disabled.");
    } catch (error) {
      showDarkModeState(!enabled);
      setStatus("Reload DesmosPlus, then reopen this popup.");
    } finally {
      darkModeToggle.disabled = false;
    }
  }

  function showAutosaveState(enabled) {
    autosaveToggle.checked = enabled;
    autosaveState.textContent = enabled ? "Every 60 seconds" : "Off";
  }

  async function loadAutosaveSetting() {
    var stored = await chrome.storage.local.get(AUTOSAVE_KEY);
    showAutosaveState(stored[AUTOSAVE_KEY] === true);
  }

  async function saveAutosaveSetting() {
    var enabled = autosaveToggle.checked;
    autosaveToggle.disabled = true;
    try {
      await chrome.storage.local.set({ [AUTOSAVE_KEY]: enabled });
      showAutosaveState(enabled);
      setStatus(
        enabled
          ? "Autosave enabled for saved Desmos graphs."
          : "Autosave disabled.",
      );
    } catch (error) {
      showAutosaveState(!enabled);
      setStatus("Reload DesmosPlus, then reopen this popup.");
    } finally {
      autosaveToggle.disabled = false;
    }
  }

  function updateAvailability() {
    exportButton.disabled = busy || !availability.graph;
    importButton.disabled = busy || !availability.graph;
    svgButton.disabled = busy || !availability.svg;
    objImportButton.disabled = busy || !availability.threeD;
    tickerAddButton.disabled = busy || !availability.threeD;
    tickerRemoveButton.disabled = busy || !availability.threeD;
    functionsAddButton.disabled = busy || !availability.functions;
    functionsRemoveButton.disabled = busy || !availability.functions;
    audioImportButton.disabled = busy || !availability.desaudify;
    audioDownloadButton.disabled = busy;
    templateButton.disabled = busy || !availability.desaudify;
    dataButton.disabled = busy || !availability.desaudify;
    processingButton.disabled = busy || !availability.desaudify;
    document.querySelectorAll("[data-conversion-setting]").forEach(function (control) {
      control.disabled = busy;
    });
    document.querySelectorAll("[data-obj-mode]").forEach(function (control) {
      control.disabled = busy;
    });
    if (modeButton.disabled) closeModeMenu(false);
  }

  function setBusy(value) {
    busy = value;
    updateAvailability();
  }

  function setObjMode(mode) {
    objModeInput.value = mode === "direct" ? "direct" : mode === "max" ? "max" : "optimized";
    document.querySelectorAll("[data-obj-mode]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.objMode === objModeInput.value));
    });
    if (objModeInput.value === "direct") {
      objModeSummary.textContent = "One expression per face, up to 2,500 triangles";
    } else if (objModeInput.value === "max") {
      objModeSummary.textContent = "Indexed arrays with no DesmosPlus file-size or triangle limit";
    } else {
      objModeSummary.textContent = "Indexed arrays, up to 50,000 triangles";
    }
    objMaxWarning.hidden = objModeInput.value !== "max";
    updateFlameEffects({ objMaxActive: objModeInput.value === "max" });
  }

  function modeOptions() {
    return Array.from(modeMenu.querySelectorAll("[role=option]"));
  }

  function updateFlameEffects(next) {
    if (window.DesmosPlusFlameEffects) {
      window.DesmosPlusFlameEffects.setState(next);
    }
  }

  function closeModeMenu(restoreFocus) {
    document.getElementById("desaudify-mode-options").hidden = true;
    modeButton.setAttribute("aria-expanded", "false");
    updateFlameEffects({ menuOpen: false });
    if (restoreFocus) modeButton.focus();
  }

  function openModeMenu(focusLast) {
    if (modeButton.disabled) return;
    var options = modeOptions();
    document.getElementById("desaudify-mode-options").hidden = false;
    modeButton.setAttribute("aria-expanded", "true");
    updateFlameEffects({ menuOpen: true });
    var selectedIndex = options.findIndex(function (option) {
      return option.getAttribute("aria-selected") === "true";
    });
    var index = focusLast ? options.length - 1 : Math.max(0, selectedIndex);
    options[index].focus();
  }

  function setMode(value) {
    var selected = modeOptions().find(function (option) {
      return option.getAttribute("data-value") === value;
    });
    if (!selected) return;
    modeInput.value = value;
    modeMenu.setAttribute("data-value", value);
    modeButton.textContent = selected.textContent;
    modeOptions().forEach(function (option) {
      option.setAttribute("aria-selected", option === selected ? "true" : "false");
    });
    updateFlameEffects({ maxActive: value === "max" });
    updateConversionSettings();
  }

  function setupModeMenu() {
    var list = document.getElementById("desaudify-mode-options");

    modeButton.addEventListener("click", function () {
      if (list.hidden) openModeMenu(false);
      else closeModeMenu(false);
    });
    modeButton.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeModeMenu(false);
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openModeMenu(event.key === "ArrowUp");
      }
    });
    list.addEventListener("click", function (event) {
      var option = event.target.closest("[role=option]");
      if (!option) return;
      setMode(option.getAttribute("data-value"));
      closeModeMenu(true);
    });
    list.addEventListener("keydown", function (event) {
      var options = modeOptions();
      var index = options.indexOf(event.target);
      if (event.key === "Escape") {
        event.preventDefault();
        closeModeMenu(true);
      } else if (index !== -1 && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
        event.preventDefault();
        var step = event.key === "ArrowDown" ? 1 : -1;
        options[(index + step + options.length) % options.length].focus();
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        options[event.key === "Home" ? 0 : options.length - 1].focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (!modeMenu.contains(event.target)) closeModeMenu(false);
    });
  }

  function updateViewChrome(view) {
    document.querySelectorAll("[data-view]").forEach(function (button) {
      var selected = button.dataset.view === view;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
  }

  function finishViewSelection(view) {
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.panel !== view;
    });
    desaudifyProjectLink.hidden = view !== "desaudify";
    updateFlameEffects({ view: view });
    if (view !== "desaudify") closeModeMenu(false);
  }

  function selectView(view) {
    var currentPanel = document.querySelector("[data-panel]:not([hidden])");
    var nextPanel = document.querySelector('[data-panel="' + view + '"]');
    if (!nextPanel) return;

    updateViewChrome(view);
    panelTransitionId += 1;
    var transitionId = panelTransitionId;
    if (panelAnimation) {
      panelAnimation.cancel();
      panelAnimation = null;
    }

    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!currentPanel || currentPanel === nextPanel || reducedMotion) {
      finishViewSelection(view);
      return;
    }

    var buttons = Array.from(document.querySelectorAll("[data-view]"));
    var currentIndex = buttons.findIndex(function (button) {
      return button.dataset.view === currentPanel.dataset.panel;
    });
    var nextIndex = buttons.findIndex(function (button) {
      return button.dataset.view === view;
    });
    var direction = nextIndex >= currentIndex ? 1 : -1;

    var outgoingAnimation = currentPanel.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(" + -8 * direction + "px)" },
      ],
      { duration: 90, easing: "ease-out", fill: "forwards" },
    );
    panelAnimation = outgoingAnimation;
    outgoingAnimation.finished
      .catch(function () {})
      .then(function () {
        if (transitionId !== panelTransitionId) return;
        finishViewSelection(view);
        outgoingAnimation.cancel();
        var incomingAnimation = nextPanel.animate(
          [
            { opacity: 0, transform: "translateX(" + 8 * direction + "px)" },
            { opacity: 1, transform: "translateX(0)" },
          ],
          {
            duration: 160,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            fill: "both",
          },
        );
        panelAnimation = incomingAnimation;
        incomingAnimation.finished
          .catch(function () {})
          .then(function () {
            if (transitionId === panelTransitionId) {
              incomingAnimation.cancel();
              panelAnimation = null;
            }
          });
      });
  }

  function numericSetting(id, fallback) {
    var value = Number(document.getElementById(id).value);
    return Number.isFinite(value) ? value : fallback;
  }

  function conversionSettings() {
    if (modeInput.value === "auto") {
      return {
        mode: "auto",
        start: 0,
        end: 0,
        fps: 30,
        polyphony: 32,
        maxNotes: 260000,
        minimumMagnitude: 0.0001,
      };
    }
    if (modeInput.value === "high") {
      return {
        mode: "high",
        start: 0,
        end: 0,
        fps: 60,
        polyphony: 144,
        maxNotes: 1200000,
        minimumMagnitude: 0.0001,
      };
    }
    if (modeInput.value === "max") {
      return {
        mode: "max",
        unlimited: true,
        start: 0,
        end: 0,
        fps: 120,
        polyphony: 1024,
        maxNotes: Number.MAX_SAFE_INTEGER,
        minimumMagnitude: 0,
      };
    }
    return {
      mode: "custom",
      start: Math.max(0, numericSetting("desaudify-start", 0)),
      end: Math.max(0, numericSetting("desaudify-end", 0)),
      fps: Math.max(10, Math.min(120, numericSetting("desaudify-fps", 30))),
      polyphony: Math.max(8, Math.min(192, numericSetting("desaudify-polyphony", 32))),
      maxNotes: Math.max(1000, Math.min(1500000, numericSetting("desaudify-notes", 260000))),
      minimumMagnitude: Math.max(
        0.000001,
        Math.min(1, numericSetting("desaudify-magnitude", 0.0001)),
      ),
    };
  }

  function updateConversionSettings() {
    customSettings.hidden = modeInput.value !== "custom";
    maxWarning.hidden = modeInput.value !== "max";
    var settings = conversionSettings();
    if (settings.unlimited) {
      settingsSummary.textContent =
        "120 FPS, all detected voices, no file, duration, or note limit";
      return;
    }
    settingsSummary.textContent =
      settings.fps +
      " FPS, " +
      settings.polyphony +
      " voices, up to " +
      settings.maxNotes.toLocaleString() +
      " notes";
  }

  function prepareDesAudifyTemplate(template, file, stats, options) {
    options = options || {};
    var state = JSON.parse(JSON.stringify(template));
    var items = state.expressions.list;
    var byId = function (id) {
      return items.find(function (item) {
        return String(item.id) === String(id);
      });
    };
    var title = options.title || file.name.replace(/\.[^.]+$/, "") || "DesAudify Audio";
    var chunkIds =
      options.chunkIds ||
      Array.from({ length: stats.chunkCount }, function (_, index) {
        return index + 1;
      });
    var countExpression = byId("8647");
    var countParts = [];
    chunkIds.forEach(function (id) {
      countParts.push("c_{ount}\\left(t_{" + id + "}\\right)");
    });

    byId("8901").text =
      "Data\n\n" +
      (options.description ||
        stats.chunkCount +
          " chunks in " +
          stats.shardCount +
          " injected shard" +
          (stats.shardCount === 1 ? "" : "s"));
    byId("8512").title = "Aux (Total " + stats.notes.toLocaleString() + ")";
    byId("8512").collapsed = true;
    countExpression.latex = countParts.join("+");
    byId("9130").latex =
      "g_{calc2}\\left(q,v\\right)=\\operatorname{join}\\left(\\left(v+q\\right)\\left[q>0\\right],v\\left[v>0\\right]\\right)";
    byId("9131").latex =
      "g_{calc}\\left(L\\right)=g_{calc2}\\left(\\operatorname{floor}\\left(0.0000001L\\right),\\operatorname{mod}\\left(L,10000000\\right)\\right)";
    byId("7716").latex =
      "s_{gain}\\left(x\\right)=10^{\\frac{4}{998}\\left(l_{ightgain}\\left(x\\right)-1\\right)-4}";
    byId("34").latex = "d_{t}=" + Math.round(1000 / stats.fps);
    byId("34").slider.max = String(Math.max(20, Math.round(1000 / stats.fps)));
    byId("9183").title = "Processing";
    byId("9183").collapsed = true;
    byId("7089").label = title;
    byId("7104").label = "Generated locally with DesmosPlus";
    if (state.expressions.ticker) state.expressions.ticker.playing = false;
    return state;
  }

  async function activeTab() {
    var tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    return tabs[0];
  }

  async function inspectPage() {
    var tab = await activeTab();
    var url = tab && tab.url ? new URL(tab.url) : null;
    var product = url && supportedCalculatorHost(url) ? productFromUrl(url.href) : "";
    if (!tab || !product) throw new Error("Open a supported Desmos calculator.");
    return { tab: tab, product: product };
  }

  function showPopoutState() {
    panelTransitionId += 1;
    if (panelAnimation) {
      panelAnimation.cancel();
      panelAnimation = null;
    }
    tabsNode.hidden = true;
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = true;
    });
    popoutPanel.hidden = false;
    desaudifyProjectLink.hidden = true;
    updateFlameEffects({ view: "graph", menuOpen: false, maxActive: false });
    setStatus("Choose where to open the graph.");
  }

  async function openGraphPopout() {
    popoutButton.disabled = true;
    setStatus("Opening graph pop-out...");
    try {
      await chrome.windows.create({
        url: POPOUT_URL,
        type: "popup",
        width: 1200,
        height: 800,
        focused: true,
      });
      popoutButton.disabled = false;
      setStatus("Graph pop-out opened.");
    } catch (error) {
      popoutButton.disabled = false;
      setStatus(error.message || String(error));
    }
  }

  async function openGraphOverlay() {
    overlayButton.disabled = true;
    setStatus("Opening graph on this page...");
    try {
      var tab = await activeTab();
      if (!tab || typeof tab.id !== "number") throw new Error("The active tab is unavailable.");
      var results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["graph-overlay.js"],
      });
      var result = results[0] && results[0].result;
      if (!result || (result.state !== "opened" && result.state !== "restored")) {
        throw new Error("The graph overlay did not open.");
      }
      setStatus(result.state === "restored" ? "Graph restored on this page." : "Graph opened on this page.");
    } catch (error) {
      setStatus("This page blocks in-page tools. Use Open graph window.");
    } finally {
      overlayButton.disabled = false;
    }
  }

  async function injectDesAudify(page) {
    await chrome.scripting.executeScript({
      target: { tabId: page.tab.id },
      world: "MAIN",
      files: ["desaudify-page.js"],
    });
  }

  async function runDesAudify(page, action, args) {
    await injectDesAudify(page);
    var results = await chrome.scripting.executeScript({
      target: { tabId: page.tab.id },
      world: "MAIN",
      func: callDesAudify,
      args: [action, args || []],
    });
    var result = results[0] && results[0].result;
    if (!result || result.ok !== true) throw new Error("DesAudify injection failed.");
    return result;
  }

  async function exportGraph() {
    setBusy(true);
    setStatus("Reading graph...");
    try {
      var page = await inspectPage();
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: readCalculator,
      });
      var graph = results[0] && results[0].result;
      if (!graph || !graph.state || typeof graph.state !== "object") {
        throw new Error("Graph state was empty.");
      }
      var enteredName = safeName(nameInput.value, "Untitled");
      var name = enteredName === "Untitled" ? safeName(graph.title, enteredName) : enteredName;
      download(
        {
          format: "desmosplus.graph",
          version: 1,
          product: page.product,
          name: name,
          category: safeName(categoryInput.value, "Imported"),
          exportedAt: new Date().toISOString(),
          sourceUrl: page.tab.url,
          state: graph.state,
        },
        name,
      );
      setStatus("Exported. Import the file from DesmosPlus Library.");
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importGraph(file) {
    setBusy(true);
    setStatus("Reading graph file...");
    try {
      var page = await inspectPage();
      var imported = JSON.parse(await file.text());
      var wrapped =
        imported &&
        typeof imported === "object" &&
        imported.format === "desmosplus.graph" &&
        imported.version === 1;
      var state = wrapped ? imported.state : imported;
      if (!state || typeof state !== "object" || Array.isArray(state)) {
        throw new Error("Invalid graph file.");
      }
      if (wrapped && imported.product !== page.product) {
        throw new Error("Open the matching Desmos calculator first.");
      }
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: writeCalculator,
        args: [state],
      });
      if (!results[0] || results[0].result !== true) {
        throw new Error("Desmos rejected the graph state.");
      }
      setStatus("Imported into Desmos. Use Desmos Save to keep it.");
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importSvg(file) {
    setBusy(true);
    setStatus("Converting SVG...");
    try {
      var page = await inspectPage();
      if (!DesmosPlusSvg.supportedProduct(page.product)) {
        throw new Error("Open Desmos 2D Calculator or Geometry.");
      }
      var converted = DesmosPlusSvg.parse(await file.text(), file.name);
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: writeSvg,
        args: [converted.expressions],
      });
      if (!results[0] || results[0].result !== true) {
        throw new Error("Desmos rejected the SVG equations.");
      }
      setStatus(
        "Added " +
          converted.equationCount +
          " editable equation" +
          (converted.equationCount === 1 ? "" : "s") +
          ".",
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importObj(file) {
    setBusy(true);
    setStatus("Parsing OBJ...");
    try {
      var page = await inspectPage();
      if (page.product !== "3dcalculator") throw new Error("Open Desmos 3D Calculator.");
      if (!window.DesmosPlusObj) throw new Error("OBJ importer did not load.");
      if (objModeInput.value !== "max" && file.size > window.DesmosPlusObj.limits.fileBytes) {
        throw new Error("OBJ files must be 15 MB or smaller.");
      }
      var converted = window.DesmosPlusObj.parse(await file.text(), {
        mode: objModeInput.value,
        name: file.name,
        token: Date.now().toString(36),
      });
      setStatus("Adding " + converted.stats.triangles.toLocaleString() + " triangles...");
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: writeObj,
        args: [converted.expressions],
      });
      var result = results[0] && results[0].result;
      if (!result || result.expressionCount !== converted.expressions.length) {
        throw new Error("Desmos rejected the OBJ expressions.");
      }
      setStatus(
        "Imported " +
          converted.stats.vertices.toLocaleString() +
          " vertices and " +
          converted.stats.triangles.toLocaleString() +
          " triangles in " +
          converted.stats.mode +
          " mode.",
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function applyStarterTicker(action) {
    setBusy(true);
    setStatus(action === "add" ? "Adding starter ticker..." : "Removing starter ticker...");
    try {
      var page = await inspectPage();
      if (page.product !== "3dcalculator") throw new Error("Open Desmos 3D Calculator.");
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: updateStarterTicker,
        args: [action, TICKER_FOLDER_ID, TICKER_ID_PREFIX, TICKER_HANDLER],
      });
      var result = results[0] && results[0].result;
      if (!result || typeof result.conflict !== "boolean") {
        throw new Error("Desmos rejected the ticker change.");
      }
      if (result.conflict) {
        setStatus("This graph already has a different ticker. It was not changed.");
      } else if (action === "add") {
        setStatus("Starter ticker added. Start it from the Desmos expression panel.");
      } else if (result.removed > 0) {
        setStatus("Starter ticker removed.");
      } else {
        setStatus("The Desmos+ starter ticker was not in this graph.");
      }
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function applyFunctionLibrary(action) {
    setBusy(true);
    setStatus(action === "add" ? "Adding function library..." : "Removing function library...");
    try {
      var page = await inspectPage();
      if (page.product !== "2dcalculator") throw new Error("Open Desmos 2D Calculator.");
      var results = await chrome.scripting.executeScript({
        target: { tabId: page.tab.id },
        world: "MAIN",
        func: updateFunctionLibrary,
        args: [action, FUNCTION_DEFINITIONS, FUNCTION_FOLDER_ID, FUNCTION_ID_PREFIX],
      });
      var result = results[0] && results[0].result;
      if (!result || typeof result.added !== "number") {
        throw new Error("Desmos rejected the function library.");
      }
      setStatus(
        action === "add"
          ? "Added " + result.added + " editable function definitions."
          : result.removed > 0
            ? "Removed the Desmos+ function library."
            : "The Desmos+ function library was not in this graph.",
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function loadDesAudifyTemplate() {
    if (!window.confirm("Replace the current graph with the DesAudify player?")) return;
    setBusy(true);
    setStatus("Loading DesAudify player...");
    try {
      var page = await inspectPage();
      if (page.product !== "2dcalculator") throw new Error("Open Desmos 2D Calculator.");
      var response = await fetch(chrome.runtime.getURL("desaudify-template.json"));
      if (!response.ok) throw new Error("Bundled DesAudify player could not be read.");
      var result = await runDesAudify(page, "loadTemplate", [await response.json()]);
      setStatus("DesAudify player loaded with " + result.expressionCount + " items.");
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importAudio(file) {
    var settings = conversionSettings();
    if (settings.unlimited && !window.confirm(MAX_MODE_CONFIRMATION)) return;
    setBusy(true);
    setStatus("Preparing audio...");
    try {
      var page = await inspectPage();
      if (page.product !== "2dcalculator") throw new Error("Open Desmos 2D Calculator.");
      if (!window.DesmosPlusAudio) throw new Error("Audio converter did not load.");
      var converted = await window.DesmosPlusAudio.convert(
        file,
        chrome.runtime.getURL("desaudify-audio-worker.js"),
        settings,
        setStatus,
      );
      setStatus("Loading player and equations...");
      var response = await fetch(chrome.runtime.getURL("desaudify-template.json"));
      if (!response.ok) throw new Error("Bundled DesAudify player could not be read.");
      var template = prepareDesAudifyTemplate(await response.json(), file, converted.stats);
      await runDesAudify(page, "loadTemplate", [template]);
      for (var shardIndex = 0; shardIndex < converted.dataShards.length; shardIndex += 1) {
        setStatus(
          "Injecting shard " +
            (shardIndex + 1) +
            " of " +
            converted.dataShards.length +
            " at a safe rate...",
        );
        await runDesAudify(page, "insertSchema", [
          converted.dataShards[shardIndex],
          "Shard " + (shardIndex + 1),
          "data",
        ]);
      }
      var processingResult = await runDesAudify(page, "insertSchema", [
        converted.processing,
        "Processing",
        "processing",
      ]);
      nameInput.value = file.name.replace(/\.[^.]+$/, "") || "DesAudify Audio";
      setStatus(
        "Imported " +
          converted.stats.notes +
          " notes from " +
          Math.round(converted.stats.duration) +
          " seconds at " +
          converted.stats.fps +
          " FPS across " +
          converted.stats.shardCount +
          " shard" +
          (converted.stats.shardCount === 1 ? "" : "s") +
          ". " +
          (processingResult.tickerPlaying
            ? "Click the title to play."
            : "Start the ticker, then click the title to play."),
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function downloadAudioBundle(file) {
    var settings = conversionSettings();
    if (settings.unlimited && !window.confirm(MAX_MODE_CONFIRMATION)) return;
    setBusy(true);
    setStatus("Preparing audio for download...");
    try {
      if (!window.DesmosPlusAudio) throw new Error("Audio converter did not load.");
      if (!window.DesmosPlusDesAudifyExport) throw new Error("Shard exporter did not load.");
      var converted = await window.DesmosPlusAudio.convert(
        file,
        chrome.runtime.getURL("desaudify-audio-worker.js"),
        settings,
        setStatus,
      );
      var response = await fetch(chrome.runtime.getURL("desaudify-template.json"));
      if (!response.ok) throw new Error("Bundled DesAudify player could not be read.");
      var template = await response.json();
      var title = file.name.replace(/\.[^.]+$/, "") || "DesAudify Audio";
      var result = await window.DesmosPlusDesAudifyExport.createBundle({
        template: template,
        converted: converted,
        title: title,
        sourceName: file.name,
        settings: settings,
        onProgress: setStatus,
        prepareTemplate: function (state, options) {
          return prepareDesAudifyTemplate(state, file, converted.stats, options);
        },
      });
      downloadBlob(result.blob, fileName(title) + "-desaudify-shards.zip");
      setStatus(
        "Downloaded player UI and " +
          result.shardCount +
          " copy-ready shard folder" +
          (result.shardCount === 1 ? "" : "s") +
          ".",
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importDesAudifySchemas(files, kind) {
    if (!files.length) return;
    setBusy(true);
    setStatus("Injecting DesAudify " + kind + "...");
    try {
      var page = await inspectPage();
      if (page.product !== "2dcalculator") throw new Error("Open Desmos 2D Calculator.");
      var total = 0;
      for (var i = 0; i < files.length; i += 1) {
        var result = await runDesAudify(page, "insertSchema", [
          await files[i].text(),
          files[i].name,
          kind,
        ]);
        total += result.equationCount;
      }
      setStatus(
        "Injected " + total + " DesAudify equation" + (total === 1 ? "" : "s") + ".",
      );
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function initialize() {
    try {
      var page = await inspectPage();
      availability.graph = true;
      availability.svg = DesmosPlusSvg.supportedProduct(page.product);
      availability.threeD = page.product === "3dcalculator";
      availability.functions = page.product === "2dcalculator";
      availability.desaudify = page.product === "2dcalculator";
      setStatus("Ready.");
    } catch (error) {
      showPopoutState();
    }
    updateAvailability();
  }

  document.querySelectorAll("[data-view]").forEach(function (button) {
    button.addEventListener("click", function () {
      selectView(button.dataset.view);
    });
  });
  exportButton.addEventListener("click", exportGraph);
  popoutButton.addEventListener("click", openGraphPopout);
  overlayButton.addEventListener("click", openGraphOverlay);
  importButton.addEventListener("click", function () {
    importFile.click();
  });
  svgButton.addEventListener("click", function () {
    svgFile.click();
  });
  objImportButton.addEventListener("click", function () {
    if (objModeInput.value === "max" && !window.confirm(OBJ_MAX_CONFIRMATION)) return;
    objFile.click();
  });
  tickerAddButton.addEventListener("click", function () {
    applyStarterTicker("add");
  });
  tickerRemoveButton.addEventListener("click", function () {
    applyStarterTicker("remove");
  });
  document.querySelectorAll("[data-obj-mode]").forEach(function (button) {
    button.addEventListener("click", function () {
      setObjMode(button.dataset.objMode);
    });
  });
  functionsAddButton.addEventListener("click", function () {
    applyFunctionLibrary("add");
  });
  functionsRemoveButton.addEventListener("click", function () {
    applyFunctionLibrary("remove");
  });
  templateButton.addEventListener("click", loadDesAudifyTemplate);
  audioImportButton.addEventListener("click", function () {
    audioAction = "import";
    audioFile.click();
  });
  audioDownloadButton.addEventListener("click", function () {
    audioAction = "download";
    audioFile.click();
  });
  dataButton.addEventListener("click", function () {
    dataFile.click();
  });
  processingButton.addEventListener("click", function () {
    processingFile.click();
  });
  importFile.addEventListener("change", function () {
    var file = importFile.files && importFile.files[0];
    if (file) importGraph(file);
    importFile.value = "";
  });
  svgFile.addEventListener("change", function () {
    var file = svgFile.files && svgFile.files[0];
    if (file) importSvg(file);
    svgFile.value = "";
  });
  objFile.addEventListener("change", function () {
    var file = objFile.files && objFile.files[0];
    if (file) importObj(file);
    objFile.value = "";
  });
  audioFile.addEventListener("change", function () {
    var file = audioFile.files && audioFile.files[0];
    if (file) {
      if (audioAction === "download") downloadAudioBundle(file);
      else importAudio(file);
    }
    audioFile.value = "";
  });
  dataFile.addEventListener("change", function () {
    importDesAudifySchemas(Array.from(dataFile.files || []), "data");
    dataFile.value = "";
  });
  processingFile.addEventListener("change", function () {
    importDesAudifySchemas(Array.from(processingFile.files || []), "processing");
    processingFile.value = "";
  });
  customSettings.addEventListener("input", updateConversionSettings);
  darkModeToggle.addEventListener("change", saveDarkModeSetting);
  autosaveToggle.addEventListener("change", saveAutosaveSetting);

  setupModeMenu();
  selectView("graph");
  setObjMode("optimized");
  updateConversionSettings();
  loadDarkModeSetting().catch(function () {
    showDarkModeState(false);
    setStatus("Reload DesmosPlus, then reopen this popup.");
  });
  loadAutosaveSetting().catch(function () {
    showAutosaveState(false);
    setStatus("Reload DesmosPlus, then reopen this popup.");
  });
  initialize();
})();
