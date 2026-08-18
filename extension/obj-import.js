(function (global) {
  "use strict";

  // OBJ-to-Desmos workflow adapted from DesLoader under its MIT license.
  var MAX_FILE_BYTES = 15 * 1024 * 1024;
  var MAX_DIRECT_TRIANGLES = 2500;
  var MAX_OPTIMIZED_TRIANGLES = 50000;
  var MAX_CHUNK_VERTICES = 9000;
  var MAX_CHUNK_TRIANGLES = 4000;

  function numberLatex(value) {
    if (!Number.isFinite(value)) throw new Error("OBJ contains a non-finite coordinate.");
    if (Math.abs(value) > 1000000000) throw new Error("OBJ coordinates must be within 1,000,000,000 units.");
    if (Math.abs(value) < 0.0000000001) return "0";
    return value.toFixed(10).replace(/0+$/, "").replace(/[.]$/, "");
  }

  function pointLatex(point) {
    return (
      "(" +
      numberLatex(point[0]) +
      "," +
      numberLatex(point[1]) +
      "," +
      numberLatex(point[2]) +
      ")"
    );
  }

  function faceIndex(token, vertexCount, lineNumber) {
    var value = Number(String(token || "").split("/")[0]);
    if (!Number.isInteger(value) || value === 0) {
      throw new Error("Invalid face index on OBJ line " + lineNumber + ".");
    }
    var index = value > 0 ? value - 1 : vertexCount + value;
    if (index < 0 || index >= vertexCount) {
      throw new Error("Face index is out of range on OBJ line " + lineNumber + ".");
    }
    return index;
  }

  function parseGeometry(text) {
    var lines = String(text || "").split(/\r?\n/);
    var vertices = [];
    var triangles = [];
    var verticesSeen = 0;

    lines.forEach(function (line, index) {
      var trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      var parts = trimmed.split(/\s+/);
      if (parts[0] !== "v") return;
      if (parts.length < 4) throw new Error("Incomplete vertex on OBJ line " + (index + 1) + ".");
      var point = [Number(parts[1]), Number(parts[2]), Number(parts[3])];
      point.forEach(numberLatex);
      vertices.push(point);
    });

    lines.forEach(function (line, index) {
      var trimmed = line.trim();
      if (!trimmed || trimmed.charAt(0) === "#") return;
      var parts = trimmed.split(/\s+/);
      if (parts[0] === "v") {
        verticesSeen += 1;
        return;
      }
      if (parts[0] !== "f") return;
      if (parts.length < 4) throw new Error("Face needs at least three vertices on OBJ line " + (index + 1) + ".");
      var indexes = parts.slice(1).map(function (token) {
        return faceIndex(token, verticesSeen || vertices.length, index + 1);
      });
      for (var faceIndexOffset = 1; faceIndexOffset < indexes.length - 1; faceIndexOffset += 1) {
        var triangle = [indexes[0], indexes[faceIndexOffset], indexes[faceIndexOffset + 1]];
        if (triangle[0] !== triangle[1] && triangle[1] !== triangle[2] && triangle[0] !== triangle[2]) {
          triangles.push(triangle);
        }
      }
    });

    if (!vertices.length) throw new Error("OBJ does not contain any vertices.");
    if (!triangles.length) throw new Error("OBJ does not contain any usable faces.");
    return { vertices: vertices, triangles: triangles };
  }

  function optimizedChunks(vertices, triangles) {
    var chunks = [];
    var current = null;

    function startChunk() {
      current = { vertices: [], faces: [], indexes: new Map() };
    }

    function finishChunk() {
      if (current && current.faces.length) chunks.push(current);
      current = null;
    }

    startChunk();
    triangles.forEach(function (triangle) {
      var additions = triangle.filter(function (index) {
        return !current.indexes.has(index);
      }).length;
      if (
        current.faces.length >= MAX_CHUNK_TRIANGLES ||
        current.vertices.length + additions > MAX_CHUNK_VERTICES
      ) {
        finishChunk();
        startChunk();
      }
      var localFace = triangle.map(function (index) {
        if (!current.indexes.has(index)) {
          current.vertices.push(vertices[index]);
          current.indexes.set(index, current.vertices.length);
        }
        return current.indexes.get(index);
      });
      current.faces.push(localFace);
    });
    finishChunk();
    return chunks;
  }

  function safeTitle(name) {
    return (
      String(name || "OBJ model")
        .replace(/\.[^.]+$/, "")
        .replace(/[\u0000-\u001f]/g, "")
        .trim()
        .slice(0, 80) || "OBJ model"
    );
  }

  function safeToken(value) {
    return String(value || Date.now().toString(36)).replace(/[^a-z0-9]/gi, "").slice(-16) || "model";
  }

  function parse(text, options) {
    options = options || {};
    var mode =
      options.mode === "direct" ? "direct" : options.mode === "max" ? "max" : "optimized";
    if (mode !== "max" && String(text || "").length > MAX_FILE_BYTES) {
      throw new Error("OBJ files must be 15 MB or smaller.");
    }
    var geometry = parseGeometry(text);
    if (mode === "direct" && geometry.triangles.length > MAX_DIRECT_TRIANGLES) {
      throw new Error("Direct mode supports up to 2,500 triangles. Use Optimized mode for this model.");
    }
    if (mode === "optimized" && geometry.triangles.length > MAX_OPTIMIZED_TRIANGLES) {
      throw new Error("Optimized mode supports up to 50,000 triangles.");
    }

    var token = safeToken(options.token);
    var idPrefix = "desmosplus-obj-" + token + "-";
    var folderId = idPrefix + "folder";
    var expressions = [
      {
        id: folderId,
        type: "folder",
        title:
          safeTitle(options.name) +
          (mode === "optimized" ? " (optimized)" : mode === "max" ? " (MAX)" : ""),
        collapsed: true,
      },
    ];

    if (mode === "direct") {
      geometry.triangles.forEach(function (triangle, index) {
        expressions.push({
          id: idPrefix + "triangle-" + index,
          folderId: folderId,
          type: "expression",
          color: "#c74440",
          latex:
            "\\operatorname{triangle}\\left(" +
            triangle.map(function (vertexIndex) {
              return pointLatex(geometry.vertices[vertexIndex]);
            }).join(",") +
            "\\right)",
        });
      });
    } else {
      optimizedChunks(geometry.vertices, geometry.triangles).forEach(function (chunk, index) {
        var suffix = token + (index + 1);
        var vertexName = "V_{" + suffix + "}";
        var faceName = "F_{" + suffix + "}";
        expressions.push({
          id: idPrefix + "vertices-" + index,
          folderId: folderId,
          type: "expression",
          color: "#2d70b3",
          hidden: true,
          latex: vertexName + "=[" + chunk.vertices.map(pointLatex).join(",") + "]",
        });
        expressions.push({
          id: idPrefix + "faces-" + index,
          folderId: folderId,
          type: "expression",
          color: "#388c46",
          hidden: true,
          latex:
            faceName +
            "=[" +
            chunk.faces.map(function (face) {
              return "(" + face.join(",") + ")";
            }).join(",") +
            "]",
        });
        expressions.push({
          id: idPrefix + "surface-" + index,
          folderId: folderId,
          type: "expression",
          color: "#c74440",
          latex:
            "\\operatorname{triangle}\\left(" +
            vertexName +
            "[" +
            faceName +
            ".x]," +
            vertexName +
            "[" +
            faceName +
            ".y]," +
            vertexName +
            "[" +
            faceName +
            ".z]\\right)",
        });
      });
    }

    return {
      expressions: expressions,
      stats: {
        mode: mode,
        vertices: geometry.vertices.length,
        triangles: geometry.triangles.length,
        expressionCount: expressions.length - 1,
      },
    };
  }

  global.DesmosPlusObj = {
    parse: parse,
    limits: {
      fileBytes: MAX_FILE_BYTES,
      directTriangles: MAX_DIRECT_TRIANGLES,
      optimizedTriangles: MAX_OPTIMIZED_TRIANGLES,
    },
  };
})(window);
