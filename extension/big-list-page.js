(function (root) {
  "use strict";
  if (root.DesmosPlusBigListPage) return;
  let observer, timer, enabled = false;
  const sources = new Map();
  const fileNote = "BigList local file window (reattach the file after reload)\n";
  const calc = () => {
    if (!root.Calc?.getExpressions || !root.Calc?.setExpressions) throw new Error("Open a ready graphing calculator first.");
    return root.Calc;
  };
  function edit(id) {
    calc();
    document.getElementById("desmosplus-biglist-dialog")?.close();
    const dialog = document.createElement("dialog");
    dialog.id = "desmosplus-biglist-dialog";
    dialog.style.cssText = "width:min(540px,calc(100vw - 32px));box-sizing:border-box;max-height:85vh;overflow:auto;border:1px solid;border-radius:8px;padding:20px;background:white;color:black;font:15px system-ui;";
    dialog.innerHTML = `<style>
      #desmosplus-biglist-dialog [hidden]{display:none!important}
      #desmosplus-biglist-dialog label{display:block;margin:8px 0}
      #desmosplus-biglist-dialog fieldset{margin:16px 0;border:1px solid #888}
      #desmosplus-biglist-dialog input:not([type=radio]):not([type=checkbox]),#desmosplus-biglist-dialog textarea{display:block;box-sizing:border-box;width:100%;min-width:0;padding:8px;border:1px solid #888;border-radius:4px;background:white;color:black;font:inherit}
      #desmosplus-biglist-dialog button{padding:8px 12px;margin:4px 4px 4px 0;border:1px solid #888;border-radius:4px;background:white;color:black;font:inherit;cursor:pointer}
      #desmosplus-biglist-dialog button:disabled{opacity:.5;cursor:default}
      #desmosplus-biglist-dialog .bl-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
      #desmosplus-biglist-dialog .bl-source{border-top:1px solid #888;padding-top:12px;margin-top:16px;overflow-wrap:anywhere}
      #desmosplus-biglist-dialog [role=status]{overflow-wrap:anywhere}
    </style><form method="dialog">
      <h2>Desmos BigList</h2>
      <label>Function name <input name="name" value="biglist" required pattern="[A-Za-z][A-Za-z0-9]*"></label>
      <fieldset><legend>Source</legend>
        <label><input type="radio" name="source" value="sequence" checked> Generated sequence</label>
        <label><input type="radio" name="source" value="file"> Large JSON file (windowed)</label>
        <label><input type="radio" name="source" value="paste"> Pasted array</label>
      </fieldset>
      <div data-source="sequence"><div class="bl-grid">
        <label>First value <input name="first" type="number" step="any" value="1" required></label>
        <label>Step <input name="step" type="number" step="any" value="1" required></label>
      </div><label>Count <input name="count" type="number" min="1" max="9007199254740991" step="1" value="20000000" required></label></div>
      <div data-source="file" hidden><label>Numeric JSON array <input name="file" type="file" accept=".json,application/json"></label></div>
      <div data-source="paste" hidden><label>Numbers (JSON array)<textarea name="values" rows="6" maxlength="2097152" placeholder="[1,2,3]"></textarea></label>
        <fieldset><legend>Embedded format (up to 10,000 values)</legend><label><input type="radio" name="mode" value="compatible" checked> Compatible</label><label><input type="radio" name="mode" value="matrix"> BigList 2 matrices</label></fieldset></div>
      <div class="bl-sources"></div>
      <p role="status" aria-live="polite"></p>
      <button value="cancel" type="button">Close</button><button type="submit">Add expanded list</button>
    </form>`;
    const form = dialog.querySelector("form"), status = dialog.querySelector('[role="status"]');
    const api = root.DesmosPlusBigList;
    let controller;
    function sourceChanged() {
      form.querySelectorAll("[data-source]").forEach(panel => {
        panel.hidden = panel.dataset.source !== form.elements.source.value;
        panel.querySelectorAll("input,textarea").forEach(input => { input.disabled = panel.hidden; });
      });
    }
    form.querySelectorAll('[name="source"]').forEach(input => { input.onchange = sourceChanged; });
    const symbolExists = symbol => calc().getExpressions().some(item =>
      (item.latex || "").replace(/\\left|\\right|\s/g, "").startsWith(symbol + "("));
    function prefix() { return "biglist_" + crypto.randomUUID().replaceAll("-", ""); }
    function folder(id, name) { return {id, type:"folder", title:"BigList: " + name, collapsed:true}; }
    function addGroup(id, name, expressions) {
      const state = calc().getState();
      state.expressions.list.push(folder(id, name), ...expressions);
      // The public setExpressions API omits folder membership and collapsed state.
      calc().setState(state, {allowUndo:true});
    }
    function savedWindows() {
      const expressions = calc().getState().expressions.list, saved = [];
      for (const item of expressions) {
        if (item.type !== "text" || !item.id.startsWith("biglist_") || !item.text?.startsWith(fileNote)) continue;
        try {
          const data = JSON.parse(item.text.slice(fileNote.length));
          const symbol = api.variable(data.name);
          if (data.version !== 1 || !Number.isSafeInteger(data.length) || data.length < 1 || !Number.isSafeInteger(data.start) || data.start < 1 || data.start > data.length || !Number.isInteger(data.size) || data.size < 1 || data.size > 10000) continue;
          const id = item.id.slice(0, -"_note".length);
          if (!item.id.endsWith("_note") || !expressions.some(e => e.id === id && e.type === "folder") || !expressions.some(e => e.id === id + "_window" && e.latex?.startsWith(symbol + "\\left("))) continue;
          saved.push({...data, id});
        } catch {}
      }
      return saved;
    }
    async function loadWindow(session, start, size, create = false) {
      if (!create && !calc().getExpressions().some(item => item.id === session.id)) throw new Error("This BigList folder was removed. Add the file again.");
      const values = await api.readWindow(session.source, start, size);
      const expressions = [
        {id:session.id + "_window", type:"expression", folderId:session.id, latex:api.windowExpression(session.name, start, values)},
        {id:session.id + "_note", folderId:session.id, type:"text", text:fileNote + JSON.stringify({version:1, name:session.name, fileName:session.source.file.name, fileSize:session.source.file.size, length:session.source.length, start, size, embeddedEnd:start + values.length - 1})}
      ];
      if (create) addGroup(session.id, session.name, expressions);
      else calc().setExpressions(expressions);
      session.start = start; session.size = size;
      status.textContent = "Loaded indices " + start.toLocaleString() + " to " + (start + values.length - 1).toLocaleString() + " of " + session.source.length.toLocaleString() + ". Other indices are undefined until loaded.";
    }
    function renderSources() {
      const container = form.querySelector(".bl-sources");
      container.replaceChildren();
      for (const saved of savedWindows().filter(item => !sources.has(item.id))) {
        const button = document.createElement("button");
        button.type = "button"; button.textContent = "Reattach " + saved.name;
        button.onclick = () => {
          form.elements.name.value = saved.name; form.elements.source.value = "file"; sourceChanged();
          status.textContent = "Choose " + saved.fileName + " to resume at index " + saved.start.toLocaleString() + ".";
        };
        container.append(button);
      }
      for (const session of sources.values()) {
        const section = document.createElement("section");
        section.className = "bl-source";
        const title = document.createElement("strong");
        title.textContent = session.name + ": " + session.source.file.name + " (" + session.source.length.toLocaleString() + ")";
        section.append(title);
        const fields = document.createElement("div"); fields.className = "bl-grid";
        const field = (text, value, max) => {
          const label = document.createElement("label"), input = document.createElement("input");
          input.type = "number"; input.min = "1"; input.max = String(max); input.step = "1"; input.value = String(value);
          input.setAttribute("aria-label", text + " for " + session.name);
          label.append(text, input); fields.append(label); return input;
        };
        const start = field("Start index", session.start, session.source.length), size = field("Window size", session.size, 10000);
        section.append(fields);
        const action = (label, title, run) => {
          const button = document.createElement("button"); button.type = "button"; button.textContent = label; button.title = title; button.setAttribute("aria-label", title);
          button.onclick = async () => {
            section.querySelectorAll("button,input").forEach(control => { control.disabled = true; });
            try { await run(); } catch (error) { status.textContent = error.message; }
            finally { renderSources(); }
          };
          section.append(button); return button;
        };
        action("\u2190", "Previous window", () => loadWindow(session, Math.max(1, session.start - session.size), session.size)).disabled = session.start === 1;
        action("\u2192", "Next window", () => loadWindow(session, session.start + session.size, session.size)).disabled = session.start + session.size > session.source.length;
        action("Load window", "Load window", () => loadWindow(session, Number(start.value), Number(size.value)));
        action("Forget file", "Release local file (keep current graph window)", () => { sources.delete(session.id); status.textContent = "File released. The current window remains in the graph."; });
        container.append(section);
      }
    }
    const toggleLabel = document.createElement("label");
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = enabled;
    toggle.onchange = () => setEnabled(toggle.checked);
    toggleLabel.append(toggle, " Per-list expand buttons");
    form.insertBefore(toggleLabel, status);
    const expression = calc().getExpressions().find(item => item.id === id);
    const literal = (expression?.latex || "").split("=").pop().replace(/\\left|\\right/g, "");
    try { const values = JSON.parse(literal); if (Array.isArray(values)) { form.elements.values.value = JSON.stringify(values); form.elements.source.value = "paste"; } } catch {}
    sourceChanged(); renderSources();
    dialog.querySelector('[value="cancel"]').onclick = () => dialog.close();
    dialog.addEventListener("close", () => { controller?.abort(); dialog.remove(); });
    form.onsubmit = async event => {
      event.preventDefault();
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      controller = new AbortController();
      try {
        const name = form.elements.name.value;
        const source = form.elements.source.value;
        const resume = source === "file" ? savedWindows().find(item => item.name === name) : null;
        if (symbolExists(api.variable(name)) && !resume) throw new Error("That function or a helper name already exists. Choose a new name.");
        if (source === "sequence") {
          const length = Number(form.elements.count.value);
          const latex = api.sequence(name, Number(form.elements.first.value), Number(form.elements.step.value), length);
          const id = prefix();
          addGroup(id, name, [{id:id + "_sequence", type:"expression", folderId:id, latex}]);
          status.textContent = "Added " + length.toLocaleString() + " indexed values as one compact equation. Original expression kept.";
          return;
        }
        let file, values;
        if (source === "file") {
          file = form.elements.file.files[0];
          if (!file) throw new Error("Choose a JSON file first.");
          if (resume && (file.name !== resume.fileName || file.size !== resume.fileSize)) throw new Error("Choose the original file " + resume.fileName + ", or use a new function name.");
        } else {
          if (form.elements.values.value.length > 2097152) throw new Error("Use Large JSON file for arrays over 2 MB.");
          values = JSON.parse(form.elements.values.value);
          if (!Array.isArray(values) || !values.length) throw new Error("Enter at least one number.");
          if (values.length > 10000) file = new File([form.elements.values.value], name + ".json", {type:"application/json"});
        }
        if (file) {
          const index = await api.indexFile(file, {signal:controller.signal, onProgress:progress => {
            status.textContent = "Indexing " + Math.floor(progress.bytes / progress.total * 100) + "%: " + progress.count.toLocaleString() + " values. Close to cancel.";
          }});
          if (controller.signal.aborted) return;
          // Recheck after indexing: the graph can change while file I/O yields.
          if (resume) {
            if (index.length !== resume.length || !savedWindows().some(item => item.id === resume.id && item.name === name)) throw new Error("The file or saved window changed. Add it with a new function name.");
          } else if (symbolExists(api.variable(name))) throw new Error("That function name now exists. Choose a new name.");
          const id = resume?.id || prefix(), session = {id, name, source:index, start:resume?.start || 1, size:resume?.size || 1000};
          await loadWindow(session, session.start, session.size, !resume);
          sources.set(id, session); renderSources();
          return;
        }
        const mode = form.elements.mode.value;
        if (mode === "matrix" && !confirm("Matrix format requires a recent Desmos calculator. Use Compatible for the bundled website. Continue?")) return;
        const lines = api.format(name, values, mode);
        const symbols = lines.map(line => line.split("\\left(")[0]);
        if (symbols.some(symbolExists)) throw new Error("That function or a helper name already exists. Choose a new name.");
        const id = prefix();
        addGroup(id, name, lines.map((latex, i) => ({id:id + "_" + i,type:"expression",folderId:id,latex})));
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
