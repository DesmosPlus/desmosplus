(function () {
  "use strict";

  var exportButton = document.getElementById("export");
  var importButton = document.getElementById("import");
  var svgButton = document.getElementById("import-svg");
  var importFile = document.getElementById("import-file");
  var svgFile = document.getElementById("svg-file");
  var nameInput = document.getElementById("graph-name");
  var categoryInput = document.getElementById("graph-category");
  var statusNode = document.getElementById("status");

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

  function setBusy(value) {
    exportButton.disabled = value;
    importButton.disabled = value;
    svgButton.disabled = value || svgButton.dataset.supported !== "true";
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
      setStatus("Exported. Import file from DesmosPlus Library.");
    } catch (error) {
      setStatus(error.message || String(error));
    } finally {
      setBusy(false);
    }
  }

  async function importGraph(file) {
    setBusy(true);
    setStatus("Reading file...");
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
    setStatus("Reading SVG...");
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
          ". Use Desmos Save to keep them.",
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
      svgButton.dataset.supported = String(DesmosPlusSvg.supportedProduct(page.product));
      svgButton.disabled = svgButton.dataset.supported !== "true";
      setStatus("Ready to transfer.");
    } catch (error) {
      setStatus(error.message || String(error));
      exportButton.disabled = true;
      importButton.disabled = true;
    }
  }

  exportButton.addEventListener("click", exportGraph);
  importButton.addEventListener("click", function () {
    importFile.click();
  });
  svgButton.addEventListener("click", function () {
    svgFile.click();
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
  initialize();
})();
