// DesmosPlus browser adaptation of DesAudify's Apache-2.0 BigList 2 formatter.
// See BIGLIST-NOTICE and DESAUDIFY-LICENSE.
(function (root) {
  "use strict";
  function variable(name) {
    if (!/^[A-Za-z][A-Za-z0-9]*$/.test(name)) throw new Error("Use a letter followed by letters or numbers for the function name.");
    return name.length === 1 ? name : name[0] + "_{" + name.slice(1) + "}";
  }
  function number(value) {
    if (typeof value !== "number" || !Number.isFinite(value)) throw new Error("Lists must contain finite numbers only.");
    return String(value).replace(/e([+-]?\d+)/i, "\\cdot10^{$1}");
  }
  function format(name, values, mode) {
    const symbol = variable(name);
    if (!Array.isArray(values) || !values.length) throw new Error("Enter at least one number.");
    const size = 10000;
    const fragments = mode === "matrix" ? 8 : 1;
    const lines = [], choices = [];
    for (let start = 0, block = 1; start < values.length; start += size * fragments, block++) {
      const end = Math.min(values.length, start + size * fragments);
      const helper = variable(name + "part" + block);
      const lists = [];
      for (let offset = start; offset < end; offset += size) {
        const chunk = values.slice(offset, Math.min(end, offset + size));
        let list = "\\left[" + chunk.map(number).join(",") + "\\right]";
        if (mode === "matrix" && chunk.length < size) list += ".\\operatorname{join}\\left(\\operatorname{repeat}\\left(0," + (size - chunk.length) + "\\right)\\right)";
        lists.push(list);
      }
      let body;
      if (mode === "matrix") {
        const cells = Array(1024).fill("");
        lists.forEach((list, index) => { cells[index] = list; });
        const rows = [];
        for (let i = 0; i < 1024; i += 32) rows.push(cells.slice(i, i + 32).join("&"));
        body = "\\begin{bmatrix}" + rows.join("\\\\") + "\\end{bmatrix}\\left[1+\\operatorname{floor}\\left(\\frac{k-1}{320000}\\right);1+\\operatorname{mod}\\left(\\operatorname{floor}\\left(\\frac{k-1}{10000}\\right),32\\right)\\right]\\left[1+\\operatorname{mod}\\left(k-1,10000\\right)\\right]";
      } else {
        body = lists[0] + "\\left[k\\right]";
      }
      lines.push(helper + "\\left(k\\right)=" + body);
      choices.push((start + 1) + "\\le k\\le" + end + ":" + helper + "\\left(k-" + start + "\\right)");
    }
    lines.push(symbol + "\\left(l\\right)=\\left\\{" + choices.join(",") + "\\right\\}\\operatorname{for}k=l");
    return lines;
  }
  function count(value, label) {
    if (!Number.isSafeInteger(value) || value < 1) throw new Error(label + " must be a positive safe integer.");
    return value;
  }
  function indexed(symbol, total, body, start = 1) {
    return symbol + "\\left(k\\right)=\\left\\{" + start + "\\le k\\le" + total + ":\\left\\{k=\\operatorname{floor}\\left(k\\right):" + body + "\\right\\}\\right\\}";
  }
  function sequence(name, start, step, length) {
    count(length, "Count");
    number(start); number(step); number(start + step * (length - 1));
    return indexed(variable(name), length, "\\left(" + number(start) + "\\right)+\\left(" + number(step) + "\\right)\\left(k-1\\right)");
  }
  function windowExpression(name, start, values) {
    count(start, "Start index");
    if (!Array.isArray(values) || !values.length || values.length > 10000) throw new Error("A window must contain 1 to 10,000 values.");
    const end = count(start + values.length - 1, "End index");
    return indexed(variable(name), end, "\\left[" + values.map(number).join(",") + "\\right]\\left[k-" + (start - 1) + "\\right]", start);
  }

  // Index byte ranges, not values. Each read/parse stays bounded even for multi-GB files.
  async function indexFile(file, {signal, onProgress, chunkSize = 1024 * 1024} = {}) {
    count(chunkSize, "Chunk size");
    const pageSize = 1000, starts = [], ends = [];
    let phase = "open", pending = "", length = 0, pageStart = 0;
    const numeric = /^\s*(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?)\s*$/;
    const abort = () => { if (signal?.aborted) throw new Error("Indexing cancelled."); };
    for (let offset = 0; offset < file.size; offset += chunkSize) {
      abort();
      const text = pending + await file.slice(offset, offset + chunkSize).text();
      const base = offset - pending.length;
      pending = "";
      // JSON numeric arrays are ASCII. Reject other bytes to keep file offsets exact.
      if (/[^\x20-\x7e\t\r\n]/.test(text)) throw new Error("Use a UTF-8 JSON array of finite numbers.");
      let pos = 0;
      if (phase === "open") {
        while (pos < text.length && /[ \t\r\n]/.test(text[pos])) pos++;
        if (pos === text.length) continue;
        if (text[pos++] !== "[") throw new Error("The file must contain one JSON array of numbers.");
        phase = "value";
      }
      const close = text.indexOf("]", pos);
      while (phase === "value") {
        const comma = text.indexOf(",", pos);
        const end = comma < 0 ? close : close < 0 ? comma : Math.min(comma, close);
        if (end < 0) {
          pending = text.slice(pos);
          if (pending.length > 1024) throw new Error("A number or whitespace gap is too long (1,024 bytes maximum).");
          break;
        }
        const token = text.slice(pos, end);
        if (token.length > 1024 || !numeric.test(token) || !Number.isFinite(Number(token))) throw new Error("Lists must contain finite numbers only, with no empty entries or trailing comma.");
        if (length % pageSize === 0) pageStart = base + pos;
        count(++length, "Count");
        if (length % pageSize === 0) { starts.push(pageStart); ends.push(base + end); }
        pos = end + 1;
        if (text[end] === "]") {
          if (length % pageSize) { starts.push(pageStart); ends.push(base + end); }
          phase = "done";
        }
      }
      if (phase === "done" && /[^ \t\r\n]/.test(text.slice(pos))) throw new Error("Unexpected content after the JSON array.");
      onProgress?.({count:length, bytes:Math.min(file.size, offset + chunkSize), total:file.size});
      await new Promise(resolve => setTimeout(resolve, 0));
    }
    abort();
    if (phase !== "done" || !length) throw new Error("The JSON array is empty or incomplete.");
    return {file, length, pageSize, starts, ends};
  }
  async function readWindow(source, start, size = 1000) {
    count(start, "Start index"); count(size, "Window size");
    if (size > 10000 || start > source.length) throw new Error("Choose an existing index and a window of at most 10,000 values.");
    const end = Math.min(source.length, start + size - 1);
    const first = Math.floor((start - 1) / source.pageSize), last = Math.floor((end - 1) / source.pageSize);
    const text = await source.file.slice(source.starts[first], source.ends[last]).text();
    const values = JSON.parse("[" + text + "]");
    return values.slice((start - 1) % source.pageSize, (start - 1) % source.pageSize + end - start + 1);
  }
  root.DesmosPlusBigList = { format, variable, sequence, windowExpression, indexFile, readWindow };
})(globalThis);
