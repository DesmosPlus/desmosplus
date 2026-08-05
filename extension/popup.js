(function () {
  "use strict";

  var exportButton = document.getElementById("export");
  var importButton = document.getElementById("import");
  var svgButton = document.getElementById("import-svg");
  var audioImportButton = document.getElementById("desaudify-audio");
  var templateButton = document.getElementById("desaudify-template");
  var dataButton = document.getElementById("desaudify-data");
  var processingButton = document.getElementById("desaudify-processing");
  var importFile = document.getElementById("import-file");
  var svgFile = document.getElementById("svg-file");
  var audioFile = document.getElementById("desaudify-audio-file");
  var dataFile = document.getElementById("desaudify-data-file");
  var processingFile = document.getElementById("desaudify-processing-file");
  var modeInput = document.getElementById("desaudify-mode");
  var customSettings = document.getElementById("desaudify-custom-settings");
  var settingsSummary = document.getElementById("desaudify-settings-summary");
  var nameInput = document.getElementById("graph-name");
  var categoryInput = document.getElementById("graph-category");
  var statusNode = document.getElementById("status");
  var availability = { graph: false, svg: false, desaudify: false };
  var busy = false;

  function productFromUrl(value) {
    var url = new URL(value);
    var path = url.pathname.toLowerCase();
    if (path.indexOf("/3d") === 0) return "3dcalculator";
    if (path.indexOf("/geometry") === 0) return "geometry";
    if (path.indexOf("/notebook") === 0) return "notebook";
    if (path.indexOf("/matrix") === 0) return "matrix";
    if (path.indexOf("/fourfunction") === 0) return "fourfunction";
    if (path.indexOf("/scientific") === 0) return "scientific";
    if (path.indexOf("/calculator") === 0) return "2dcalculator";
    return "";
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

  function setStatus(message) {
    statusNode.textContent = message;
  }

  function updateAvailability() {
    exportButton.disabled = busy || !availability.graph;
    importButton.disabled = busy || !availability.graph;
    svgButton.disabled = busy || !availability.svg;
    audioImportButton.disabled = busy || !availability.desaudify;
    templateButton.disabled = busy || !availability.desaudify;
    dataButton.disabled = busy || !availability.desaudify;
    processingButton.disabled = busy || !availability.desaudify;
    document.querySelectorAll("[data-conversion-setting]").forEach(function (control) {
      control.disabled = busy || !availability.desaudify;
    });
  }

  function setBusy(value) {
    busy = value;
    updateAvailability();
  }

  function selectView(view) {
    document.querySelectorAll("[data-view]").forEach(function (button) {
      var selected = button.dataset.view === view;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = panel.dataset.panel !== view;
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
    return {
      mode: "custom",
      start: Math.max(0, numericSetting("desaudify-start", 0)),
      end: Math.max(0, numericSetting("desaudify-end", 0)),
      fps: Math.max(10, Math.min(120, numericSetting("desaudify-fps", 30))),
      polyphony: Math.max(8, Math.min(192, numericSetting("desaudify-polyphony", 32))),
      maxNotes: Math.max(1000, Math.min(700000, numericSetting("desaudify-notes", 260000))),
      minimumMagnitude: Math.max(
        0.000001,
        Math.min(1, numericSetting("desaudify-magnitude", 0.0001)),
      ),
    };
  }

  function updateConversionSettings() {
    customSettings.hidden = modeInput.value !== "custom";
    var settings = conversionSettings();
    settingsSummary.textContent =
      settings.fps +
      " FPS, " +
      settings.polyphony +
      " voices, up to " +
      settings.maxNotes.toLocaleString() +
      " notes";
  }

  async function activeTab() {
    var tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    return tabs[0];
  }

  async function inspectPage() {
    var tab = await activeTab();
    var url = tab && tab.url ? new URL(tab.url) : null;
    var isDesmos = url && (url.hostname === "desmos.com" || url.hostname.endsWith(".desmos.com"));
    var product = isDesmos ? productFromUrl(url.href) : "";
    if (!tab || !product) throw new Error("Open a supported Desmos calculator.");
    return { tab: tab, product: product };
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
    setBusy(true);
    setStatus("Preparing audio...");
    try {
      var page = await inspectPage();
      if (page.product !== "2dcalculator") throw new Error("Open Desmos 2D Calculator.");
      if (!window.DesmosPlusAudio) throw new Error("Audio converter did not load.");
      var converted = await window.DesmosPlusAudio.convert(
        file,
        chrome.runtime.getURL("desaudify-audio-worker.js"),
        conversionSettings(),
        setStatus,
      );
      setStatus("Loading player and equations...");
      var response = await fetch(chrome.runtime.getURL("desaudify-template.json"));
      if (!response.ok) throw new Error("Bundled DesAudify player could not be read.");
      await runDesAudify(page, "loadTemplate", [await response.json()]);
      await runDesAudify(page, "insertSchema", [converted.data, file.name + " data", "data"]);
      await runDesAudify(page, "insertSchema", [
        converted.processing,
        file.name + " processing",
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
          " FPS.",
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
      availability.desaudify = page.product === "2dcalculator";
      setStatus("Ready.");
    } catch (error) {
      setStatus(error.message || String(error));
    }
    updateAvailability();
  }

  document.querySelectorAll("[data-view]").forEach(function (button) {
    button.addEventListener("click", function () {
      selectView(button.dataset.view);
    });
  });
  exportButton.addEventListener("click", exportGraph);
  importButton.addEventListener("click", function () {
    importFile.click();
  });
  svgButton.addEventListener("click", function () {
    svgFile.click();
  });
  templateButton.addEventListener("click", loadDesAudifyTemplate);
  audioImportButton.addEventListener("click", function () {
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
  audioFile.addEventListener("change", function () {
    var file = audioFile.files && audioFile.files[0];
    if (file) importAudio(file);
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
  modeInput.addEventListener("change", updateConversionSettings);
  customSettings.addEventListener("input", updateConversionSettings);

  selectView("graph");
  updateConversionSettings();
  initialize();
})();
