(function (root) {
  "use strict";

  if (root.DesmosPlusDesAudify) return;

  var MAX_SCHEMA_BYTES = 6 * 1024 * 1024;
  var MAX_SCHEMA_LINES = 500;

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

  function insertSchema(text, fileName, kind) {
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
    var title =
      (kind === "data" ? "DesAudify data: " : "DesAudify processing: ") +
      cleanName(fileName, kind + " schema");
    var folder = {
      id: base + "_folder",
      type: "folder",
      title: title,
      collapsed: true,
      hidden: kind === "data",
    };
    var expressions = lines.map(function (line, index) {
      return {
        id: base + "_line_" + String(index + 1),
        type: "expression",
        latex: line,
        folderId: folder.id,
      };
    });

    state.expressions.list.push.apply(state.expressions.list, [folder].concat(expressions));
    instance.setState(state, { allowUndo: true });
    return { ok: true, equationCount: expressions.length, folderTitle: title };
  }

  root.DesmosPlusDesAudify = {
    hasPlayer: function () {
      return hasPlayer(calculator().getState());
    },
    insertSchema: insertSchema,
    loadTemplate: loadTemplate,
  };
})(globalThis);
