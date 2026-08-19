(function () {
  "use strict";

  var settings = { engineEnabled: false, commands: new Map() };
  var installed = false;

  function waitForCalculator() {
    return new Promise(function (resolve) {
      var timer = setInterval(function () {
        if (
          window.Desmos &&
          window.Desmos.MathQuill &&
          typeof window.Desmos.MathQuill.config === "function" &&
          window.Calc
        ) {
          clearInterval(timer);
          resolve();
        }
      }, 50);
    });
  }

  function applyMathQuillConfig(config) {
    var next = Object.assign({}, config);
    delete next.isAutoParenEnabled;
    Object.keys(next).forEach(function (key) {
      if (next[key] === undefined) delete next[key];
    });
    window.Desmos.MathQuill.config(next);
  }

  function activeMathField(event) {
    if (!window.Calc || !window.Calc.focusedMathQuill) return null;
    if (!event.target.closest || !event.target.closest(".dcg-math-field")) return null;
    return window.Calc.focusedMathQuill;
  }

  function findCommand(latex) {
    var found = null;
    settings.commands.forEach(function (entry, name) {
      if (found) return;
      var suffix = "\\backslash " + name;
      var compactSuffix = "\\backslash" + name;
      if (latex.endsWith(suffix)) {
        found = { entry: entry, start: latex.length - suffix.length };
      } else if (latex.endsWith(compactSuffix)) {
        found = { entry: entry, start: latex.length - compactSuffix.length };
      }
    });
    return found;
  }

  function replaceCommand(event) {
    if (!settings.engineEnabled) return;
    if (event.key !== " " && event.key !== "Enter" && event.key !== "Tab") return;
    var field = activeMathField(event);
    if (!field || typeof field.latex !== "function") return;
    var latex = field.latex();
    var found = findCommand(latex);
    if (!found) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    var insertion = found.entry[2] || found.entry[1] || found.entry[0];
    field.latex(latex.slice(0, found.start));
    field.moveToRightEnd();
    field.write(insertion);
    if (found.entry[3]) field.keystroke("Left");
    if (typeof field.simulateUserChangedLatex === "function") {
      field.simulateUserChangedLatex();
    }
  }

  function install() {
    if (installed) return;
    installed = true;
    document.addEventListener("keydown", replaceCommand, true);
  }

  document.addEventListener("desmosplus-shortcut-config", function (event) {
    var detail = event.detail || {};
    waitForCalculator().then(function () {
      applyMathQuillConfig(detail.config || {});
      settings.engineEnabled = detail.engineEnabled === true;
      settings.commands = new Map(
        Array.isArray(detail.commands)
          ? detail.commands.map(function (entry) { return [entry[0], entry]; })
          : [],
      );
      install();
    });
  });
})();
