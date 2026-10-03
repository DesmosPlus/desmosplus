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
  root.DesmosPlusBigList = { format, variable };
})(globalThis);
