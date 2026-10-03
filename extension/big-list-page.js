(function (root) {
  "use strict";
  if (root.DesmosPlusBigListPage) return;
  let observer, timer, enabled = false;
  const calc = () => {
    if (!root.Calc?.getExpressions || !root.Calc?.setExpressions) throw new Error("Open a ready graphing calculator first.");
    return root.Calc;
  };
  function edit(id) {
    calc();
    document.getElementById("desmosplus-biglist-dialog")?.remove();
    const dialog = document.createElement("dialog");
    dialog.id = "desmosplus-biglist-dialog";
    dialog.style.cssText = "width:min(540px,90vw);max-height:85vh;overflow:auto;border:1px solid;padding:20px;background:white;color:black;font:15px system-ui;";
    dialog.innerHTML = '<form method="dialog"><h2>Desmos BigList</h2><label>Function name <input name="name" value="biglist" required pattern="[A-Za-z][A-Za-z0-9]*"></label><p><label>Numbers (JSON array)<textarea name="values" rows="8" style="display:block;width:100%;box-sizing:border-box" placeholder="[1,2,3]" required></textarea></label></p><fieldset><legend>Format</legend><label><input type="radio" name="mode" value="compatible" checked> Compatible</label> <label><input type="radio" name="mode" value="matrix"> BigList 2 matrices</label></fieldset><p role="status"></p><button value="cancel" type="button">Cancel</button> <button type="submit">Add expanded list</button></form>';
    const form = dialog.querySelector("form"), status = dialog.querySelector('[role="status"]');
    const toggleLabel = document.createElement("label");
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = enabled;
    toggle.onchange = () => setEnabled(toggle.checked);
    toggleLabel.append(toggle, " Per-list expand buttons");
    form.insertBefore(toggleLabel, status);
    const expression = calc().getExpressions().find(item => item.id === id);
    const literal = (expression?.latex || "").split("=").pop().replace(/\\left|\\right/g, "");
    try { const values = JSON.parse(literal); if (Array.isArray(values)) form.elements.values.value = JSON.stringify(values); } catch {}
    dialog.querySelector('[value="cancel"]').onclick = () => dialog.close();
    dialog.addEventListener("close", () => dialog.remove());
    form.onsubmit = async event => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      try {
        const name = form.elements.name.value;
        const mode = form.elements.mode.value;
        const values = JSON.parse(form.elements.values.value);
        if (mode === "matrix" && !confirm("Matrix format requires a recent Desmos calculator. Use Compatible for the bundled website. Continue?")) return;
        const lines = root.DesmosPlusBigList.format(name, values, mode);
        const symbols = lines.map(line => line.split("\\left(")[0]);
        if (calc().getExpressions().some(item => symbols.some(symbol => (item.latex || "").startsWith(symbol + "\\left(")))) throw new Error("That function or a helper name already exists. Choose a new name.");
        const prefix = "biglist_" + Date.now().toString(36);
        calc().setExpressions([{id:prefix, type:"folder",title:"BigList: " + name,collapsed:true}]);
        for (let i = 0; i < lines.length; i++) {
          status.textContent = "Adding " + (i + 1) + " / " + lines.length;
          calc().setExpressions([{id:prefix + "_" + i,folderId:prefix,latex:lines[i]}]);
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        status.textContent = "Added " + values.length.toLocaleString() + " values. Access with " + name + "([1,2,3]). Original expression kept.";
      } catch (error) { status.textContent = error.message; }
      finally { submit.disabled = false; }
    };
    document.body.append(dialog);
    dialog.showModal();
  }
  function refresh() {
    timer = null;
    if (!enabled || !root.Calc?.getExpressions) return;
    const lists = new Map(calc().getExpressions().filter(item => item.type === "expression" && /\[/.test(item.latex || "") && !item.id.startsWith("biglist_")).map(item => [String(item.id), item]));
    document.querySelectorAll("[data-desmosplus-biglist]").forEach(button => {
      if (!lists.has(button.dataset.desmosplusBiglist)) button.remove();
    });
    document.querySelectorAll(".dcg-expressionitem[expr-id]").forEach(row => {
      const id = row.getAttribute("expr-id");
      if (!lists.has(id) || row.querySelector("[data-desmosplus-biglist]")) return;
      const target = row.querySelector(".dcg-evaluation-container") || row.querySelector(".dcg-expression-bottom");
      if (!target) return;
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.desmosplusBiglist = id;
      button.title = "Expand list with BigList";
      button.setAttribute("aria-label", "Expand list with BigList");
      // Lucide expand icon, ISC licensed; see LUCIDE-LICENSE.
      button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 15 6 6"/><path d="m15 9 6-6"/><path d="M21 16v5h-5"/><path d="M21 8V3h-5"/><path d="M3 16v5h5"/><path d="m3 21 6-6"/><path d="M3 8V3h5"/><path d="M9 9 3 3"/></svg>';
      button.style.cssText = "float:left;position:relative;z-index:2;width:28px;height:28px;margin-right:6px;border:1px solid #888;background:white;color:black;cursor:pointer;font:20px system-ui;";
      button.onpointerdown = event => event.stopPropagation();
      button.onclick = event => { event.preventDefault();event.stopPropagation();edit(id); };
      target.prepend(button);
    });
  }
  function setEnabled(value) {
    calc();
    enabled = Boolean(value);
    observer?.disconnect();
    clearTimeout(timer);
    if (enabled) {
      observer = new MutationObserver(() => {
        if (!timer) timer = setTimeout(refresh, 150);
      });
      observer.observe(document.body, {childList:true,subtree:true});
      refresh();
    } else document.querySelectorAll("[data-desmosplus-biglist]").forEach(button => button.remove());
    return {ok:true,enabled};
  }
  root.DesmosPlusBigListPage = { edit, setEnabled, isEnabled: () => enabled };
})(globalThis);
