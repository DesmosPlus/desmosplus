(function (root) {
  "use strict";

  var encoder = new TextEncoder();
  var crcTable = null;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function schemaLines(text) {
    return String(text || "")
      .split(/\r?\n/)
      .map(function (line) {
        return line.trim();
      })
      .filter(Boolean);
  }

  function chunkIds(text) {
    var ids = [];
    schemaLines(text).forEach(function (line) {
      var match = /^t_\{(\d+)\}=/.exec(line);
      if (match) ids.push(Number(match[1]));
    });
    if (!ids.length) throw new Error("A DesAudify shard contains no audio chunks.");
    return ids;
  }

  function appendSchema(state, text, kind, title, prefix) {
    var lines = schemaLines(text);
    var processingFolder = state.expressions.list.find(function (item) {
      return (
        kind === "processing" &&
        item.type === "folder" &&
        (String(item.id) === "9183" || item.title === "Processing")
      );
    });
    var folder =
      processingFolder ||
      {
        id: prefix + "_folder",
        type: "folder",
        title: title,
        collapsed: true,
        hidden: kind === "data",
      };
    if (!processingFolder) state.expressions.list.push(folder);
    var processingColors = ["#2d70b3", "#388c46", "#6042a6", "#000000", "#c74440"];
    lines.forEach(function (line, index) {
      state.expressions.list.push({
        id: prefix + "_line_" + String(index + 1),
        type: "expression",
        color:
          kind === "data"
            ? index % 2 === 0
              ? "#c74440"
              : "#2d70b3"
            : processingColors[index % processingColors.length],
        latex: line,
        folderId: folder.id,
      });
    });
  }

  function graphFile(state, name, category, exportedAt, part) {
    return {
      format: "desmosplus.graph",
      version: 1,
      product: "2dcalculator",
      name: name,
      category: category,
      exportedAt: exportedAt,
      sourceUrl: "",
      desaudify: part,
      state: state,
    };
  }

  function crc32(bytes) {
    if (!crcTable) {
      crcTable = new Uint32Array(256);
      for (var index = 0; index < 256; index += 1) {
        var value = index;
        for (var bit = 0; bit < 8; bit += 1) {
          value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
        }
        crcTable[index] = value >>> 0;
      }
    }
    var crc = 0xffffffff;
    for (var byteIndex = 0; byteIndex < bytes.length; byteIndex += 1) {
      crc = crcTable[(crc ^ bytes[byteIndex]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function dosDateTime(date) {
    var year = Math.max(1980, date.getFullYear());
    return {
      time:
        ((date.getHours() & 31) << 11) |
        ((date.getMinutes() & 63) << 5) |
        ((Math.floor(date.getSeconds() / 2) || 0) & 31),
      date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    };
  }

  function header(size) {
    return new DataView(new ArrayBuffer(size));
  }

  async function zip(files, onProgress) {
    if (files.length >= 65535) throw new Error("The shard ZIP contains too many files.");
    var localParts = [];
    var centralParts = [];
    var offset = 0;
    var stamp = dosDateTime(new Date());

    for (var index = 0; index < files.length; index += 1) {
      var name = encoder.encode(files[index].name);
      var data =
        files[index].data instanceof Uint8Array
          ? files[index].data
          : encoder.encode(String(files[index].data));
      if (data.length > 0xffffffff || offset > 0xffffffff) {
        throw new Error("The shard ZIP is too large for this browser exporter.");
      }
      var checksum = crc32(data);
      var local = header(30);
      local.setUint32(0, 0x04034b50, true);
      local.setUint16(4, 20, true);
      local.setUint16(6, 0x0800, true);
      local.setUint16(8, 0, true);
      local.setUint16(10, stamp.time, true);
      local.setUint16(12, stamp.date, true);
      local.setUint32(14, checksum, true);
      local.setUint32(18, data.length, true);
      local.setUint32(22, data.length, true);
      local.setUint16(26, name.length, true);
      local.setUint16(28, 0, true);
      localParts.push(new Uint8Array(local.buffer), name, data);

      var central = header(46);
      central.setUint32(0, 0x02014b50, true);
      central.setUint16(4, 20, true);
      central.setUint16(6, 20, true);
      central.setUint16(8, 0x0800, true);
      central.setUint16(10, 0, true);
      central.setUint16(12, stamp.time, true);
      central.setUint16(14, stamp.date, true);
      central.setUint32(16, checksum, true);
      central.setUint32(20, data.length, true);
      central.setUint32(24, data.length, true);
      central.setUint16(28, name.length, true);
      central.setUint16(30, 0, true);
      central.setUint16(32, 0, true);
      central.setUint16(34, 0, true);
      central.setUint16(36, 0, true);
      central.setUint32(38, 0, true);
      central.setUint32(42, offset, true);
      centralParts.push(new Uint8Array(central.buffer), name);
      offset += 30 + name.length + data.length;

      if (onProgress) onProgress("Packaging file " + (index + 1) + " of " + files.length + "...");
      if (index % 4 === 3) {
        await new Promise(function (resolve) {
          root.setTimeout(resolve, 0);
        });
      }
    }

    var centralSize = centralParts.reduce(function (total, part) {
      return total + part.byteLength;
    }, 0);
    var end = header(22);
    end.setUint32(0, 0x06054b50, true);
    end.setUint16(4, 0, true);
    end.setUint16(6, 0, true);
    end.setUint16(8, files.length, true);
    end.setUint16(10, files.length, true);
    end.setUint32(12, centralSize, true);
    end.setUint32(16, offset, true);
    end.setUint16(20, 0, true);
    return new Blob(localParts.concat(centralParts, [new Uint8Array(end.buffer)]), {
      type: "application/zip",
    });
  }

  async function createBundle(options) {
    var converted = options.converted;
    var exportedAt = new Date().toISOString();
    var title = options.title;
    var allIds = [];
    var shards = converted.dataShards.map(function (schema, index) {
      var ids = chunkIds(schema);
      Array.prototype.push.apply(allIds, ids);
      return { schema: schema, ids: ids, index: index + 1 };
    });
    var files = [];
    var uiState = options.prepareTemplate(clone(options.template), {
      chunkIds: allIds,
      title: title,
      description:
        converted.stats.chunkCount +
        " chunks in " +
        converted.stats.shardCount +
        " downloadable shard" +
        (converted.stats.shardCount === 1 ? "" : "s"),
    });
    appendSchema(
      uiState,
      converted.processing,
      "processing",
      "Processing",
      "desaudify_processing",
    );
    files.push({
      name: "01-player-ui.desmos",
      data: JSON.stringify(
        graphFile(uiState, title + " - Player UI", "DesAudify / Player", exportedAt, {
          kind: "ui",
          shardCount: shards.length,
        }),
      ),
    });

    var width = Math.max(3, String(shards.length).length);
    shards.forEach(function (shard) {
      var number = String(shard.index).padStart(width, "0");
      var shardTitle = title + " - Shard " + number;
      var state = clone(options.template);
      state.expressions = { list: [] };
      appendSchema(state, shard.schema, "data", "Shard " + number, "desaudify_data_" + number);
      files.push({
        name: "shards/" + number + "-shard.desmos",
        data: JSON.stringify(
          graphFile(state, shardTitle, "DesAudify / Shards", exportedAt, {
            kind: "shard",
            index: shard.index,
            total: shards.length,
            chunkIds: shard.ids,
          }),
        ),
      });
    });

    var manifest = {
      format: "desmosplus.desaudify-bundle",
      version: 1,
      title: title,
      sourceFile: options.sourceName,
      exportedAt: exportedAt,
      conversion: options.settings,
      stats: converted.stats,
      player: "01-player-ui.desmos",
      shards: shards.map(function (shard) {
        var number = String(shard.index).padStart(width, "0");
        return {
          index: shard.index,
          file: "shards/" + number + "-shard.desmos",
          chunkIds: shard.ids,
        };
      }),
    };
    files.unshift({ name: "00-manifest.json", data: JSON.stringify(manifest, null, 2) + "\n" });
    files.push({
      name: "README.txt",
      data:
        "DesAudify shard bundle generated locally by DesmosPlus.\n\n" +
        "01-player-ui.desmos contains the player and processing equations.\n" +
        "Each numbered file in shards/ contains exactly one folder with that shard's " +
        "t_i and p_i audio equations.\n\n" +
        "ASSEMBLE WITH DESMOS COPY AND PASTE\n" +
        "1. Open an official Desmos 2D graph and import 01-player-ui.desmos with the " +
        "DesmosPlus Graph tab. Keep this as the destination graph.\n" +
        "2. In another official Desmos 2D tab, import the first numbered shard with " +
        "the DesmosPlus Graph tab.\n" +
        "3. Focus the shard folder in the expression list and press Ctrl+C on Windows " +
        "or Command+C on macOS. This copies the folder and everything in it.\n" +
        "4. Return to the player graph, focus a blank expression line, and press Ctrl+V " +
        "or Command+V. Desmos inserts the shard as a folder.\n" +
        "5. Repeat steps 2-4 for every numbered shard. Keep the original order.\n" +
        "6. Unmute Desmos and click the title to play or pause. Click the author row " +
        "to restart.\n",
    });

    return {
      blob: await zip(files, options.onProgress),
      fileCount: files.length,
      shardCount: shards.length,
    };
  }

  root.DesmosPlusDesAudifyExport = {
    appendSchema: appendSchema,
    chunkIds: chunkIds,
    createBundle: createBundle,
    zip: zip,
  };
})(globalThis);
