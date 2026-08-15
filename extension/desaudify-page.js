(function (root) {
  "use strict";

  var BRIDGE_VERSION = 3;
  if (root.DesmosPlusDesAudify && root.DesmosPlusDesAudify.version === BRIDGE_VERSION) return;

  var MAX_SCHEMA_BYTES = 6 * 1024 * 1024;
  var MAX_SCHEMA_LINES = 500;
  var MAX_BATCH_BYTES = 750 * 1024;
  var MAX_BATCH_LINES = 4;

  function calculator() {
    var instance = root.Calc;
    if (
      !instance ||
      typeof instance.getState !== "function" ||
      typeof instance.setState !== "function"
    ) {
      throw new Error("Open a ready Desmos 2D Calculator first.");
    }
    return instance;
  }

  function byteLength(value) {
    return new TextEncoder().encode(value).length;
  }

  function cleanName(value, fallback) {
    var name = String(value || "")
      .replace(/\.[^.]+$/, "")
      .replace(/[\u0000-\u001f\u007f]/g, " ")
      .trim();
    return name.slice(0, 80) || fallback;
  }

  function schemaLines(text) {
    if (byteLength(text) > MAX_SCHEMA_BYTES) {
      throw new Error("Each DesAudify schema file must be 6 MB or smaller.");
    }
    var lines = String(text || "")
      .split(/\r?\n/)
      .map(function (line) {
        return line.trim();
      })
      .filter(Boolean);
    if (!lines.length) throw new Error("The DesAudify schema file is empty.");
    if (lines.length > MAX_SCHEMA_LINES) {
      throw new Error("A DesAudify schema file may contain at most 500 equations.");
    }
    return lines;
  }

  function validTemplate(state) {
    return Boolean(
      state &&
        typeof state === "object" &&
        !Array.isArray(state) &&
        state.expressions &&
        Array.isArray(state.expressions.list),
    );
  }

  function hasPlayer(state) {
    if (!validTemplate(state)) return false;
    var expressions = state.expressions.list;
    var hasTone = expressions.some(function (item) {
      return item.type === "expression" && /\\operatorname\{tone\}/.test(item.latex || "");
    });
    var hasPitch = expressions.some(function (item) {
      return item.type === "expression" && /S_\{pitch\}/.test(item.latex || "");
    });
    return hasTone && hasPitch;
  }

  function loadTemplate(state) {
    if (!validTemplate(state) || !hasPlayer(state)) {
      throw new Error("The bundled DesAudify player template is invalid.");
    }
    calculator().setState(state, { allowUndo: true });
    return { ok: true, expressionCount: state.expressions.list.length };
  }

  function pause(milliseconds) {
    return new Promise(function (resolve) {
      root.setTimeout(resolve, milliseconds);
    });
  }

  function injectionBatches(lines, kind) {
    if (kind === "data") {
      var pairs = [];
      for (var pairIndex = 0; pairIndex < lines.length; pairIndex += 2) {
        pairs.push(lines.slice(pairIndex, pairIndex + 2));
      }
      return pairs;
    }

    var batches = [];
    var current = [];
    var currentBytes = 0;
    lines.forEach(function (line) {
      var lineBytes = byteLength(line);
      if (
        current.length &&
        (current.length >= MAX_BATCH_LINES || currentBytes + lineBytes > MAX_BATCH_BYTES)
      ) {
        batches.push(current);
        current = [];
        currentBytes = 0;
      }
      current.push(line);
      currentBytes += lineBytes;
    });
    if (current.length) batches.push(current);
    return batches;
  }

  function settleDelay(batch) {
    var bytes = byteLength(batch.join("\n"));
    return Math.min(2500, 300 + Math.ceil(bytes / (250 * 1024)) * 250);
  }

  function startTicker(instance) {
    var current = instance || calculator();
    var controller =
      (current._calc && current._calc.controller) || current.controller || null;
    if (
      !controller ||
      typeof controller.getTickerPlaying !== "function" ||
      typeof controller.dispatch !== "function"
    ) {
      return false;
    }
    if (!controller.getTickerPlaying()) controller.dispatch({ type: "toggle-ticker" });
    return controller.getTickerPlaying();
  }

  async function insertSchema(text, fileName, kind) {
    if (kind !== "data" && kind !== "processing") {
      throw new Error("Unknown DesAudify schema type.");
    }
    var instance = calculator();
    var state = instance.getState();
    if (!validTemplate(state)) throw new Error("The current graph state is invalid.");
    if (!hasPlayer(state)) throw new Error("Load the DesAudify player before adding schemas.");

    var lines = schemaLines(text);
    var stamp = Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
    var base = "desaudify_" + kind + "_" + stamp;
    var title = cleanName(fileName, kind === "data" ? "Shard" : "Processing");
    var existingProcessingFolder =
      kind === "processing"
        ? state.expressions.list.find(function (item) {
            return (
              item.type === "folder" &&
              (String(item.id) === "9183" || item.title === "Processing")
            );
          })
        : null;
    var folder =
      existingProcessingFolder ||
      {
        id: base + "_folder",
        type: "folder",
        title: title,
        collapsed: true,
        hidden: kind === "data",
      };
    var processingColors = [
      "#2d70b3",
      "#388c46",
      "#6042a6",
      "#000000",
      "#c74440",
    ];
    var expressions = lines.map(function (line, index) {
      return {
        id: base + "_line_" + String(index + 1),
        type: "expression",
        color:
          kind === "data"
            ? index % 2 === 0
              ? "#c74440"
              : "#2d70b3"
            : processingColors[index % processingColors.length],
        latex: line,
        folderId: folder.id,
      };
    });
    var batches = injectionBatches(lines, kind);
    var offset = 0;

    if (typeof instance.setExpressions !== "function") {
      throw new Error("This Desmos calculator cannot accept paced equation batches.");
    }
    if (!existingProcessingFolder) {
      instance.setExpressions([folder]);
      await pause(200);
    }
    for (var batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
      var batch = expressions.slice(offset, offset + batches[batchIndex].length);
      instance.setExpressions(batch);
      offset += batch.length;
      await pause(settleDelay(batches[batchIndex]));
    }
    var tickerPlaying = kind === "processing" ? startTicker(instance) : false;
    return {
      ok: true,
      equationCount: expressions.length,
      batchCount: batches.length,
      folderTitle: folder.title,
      tickerPlaying: tickerPlaying,
    };
  }

  root.DesmosPlusDesAudify = {
    version: BRIDGE_VERSION,
    hasPlayer: function () {
      return hasPlayer(calculator().getState());
    },
    insertSchema: insertSchema,
    loadTemplate: loadTemplate,
    startTicker: function () {
      return { ok: true, tickerPlaying: startTicker() };
    },
  };
})(globalThis);
