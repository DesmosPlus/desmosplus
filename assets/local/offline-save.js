(function () {
  "use strict";

  var STORE_KEY = "desmos.offline.saves.v1";
  var COOKIE_KEY = "desmos_offline_saves_v1";
  var COOKIE_AGE = 60 * 60 * 24 * 365 * 20;
  var CHUNK_SIZE = 3200;
  var LEGACY_TURBO_KEY = "desmosplus.turbo.speed";
  var TURBO_SPEEDS = [1, 2, 4, 8, 16];
  var TURBO_MIN_FPS = 30;
  var TURBO_LOW_FPS_LIMIT = 3;
  var TURBO_MAX_FRAME_DELTA = 100;
  var TURBO_MAX_TICKER_FPS = 30;
  var RECOVERY_PREFIX = "desmosplus.recovery.";
  var RECOVERY_REARM_DELAY = 5000;
  var recoveryNeeded = false;
  var recoverySkipped = false;
  var recoverySafeAt = 0;
  var recoveryTimer = null;
  var turbo = {
    speed: 1,
    calculator: null,
    originalTick: null,
    lastRealTime: null,
    virtualTime: null,
    fpsStartedAt: null,
    frameCount: 0,
    fps: 0,
    lowFpsSamples: 0,
    tickerAdaptive: false,
    tickerController: null,
    tickerOriginalHandler: "",
    tickerOriginalMinStep: "",
    tickerAcceleratedHandler: "",
  };
  var loadedId = "";
  var SHORTCUT_COMMANDS_KEY = "desmosplus.site.shortcut-commands.v1";
  var SHORTCUT_ENGINE_KEY = "desmosplus.site.shortcut-engine.v1";
  var SHORTCUT_SENTINEL = "keepmeKEEPME";
  var SHORTCUT_DEFAULT_COMMANDS =
    "alpha beta sqrt theta Theta phi Phi pi Pi tau nthroot cbrt sum prod int " +
    "ans percent infinity infty gamma Gamma delta Delta epsilon epsiv zeta eta " +
    "kappa lambda Lambda mu xi Xi rho sigma Sigma chi Psi omega Omega digamma " +
    "iota nu upsilon Upsilon square mid parallel nparallel perp times div approx";
  var shortcutSettings = { engineEnabled: false, commands: new Set() };
  var shortcutRuntimeInstalled = false;
  var PRODUCTS = [
    ["2dcalculator", "2D Calculator"],
    ["3dcalculator", "3D Calculator"],
    ["geometry", "Geometry"],
    ["matrix", "Matrix"],
    ["notebook", "Notebook"],
    ["fourfunction", "Four Function"],
    ["scientific", "Scientific"],
  ];

  function product() {
    var path = window.location.pathname;
    for (var i = 0; i < PRODUCTS.length; i += 1) {
      if (path.indexOf(PRODUCTS[i][0]) !== -1) return PRODUCTS[i][0];
    }
    return "2dcalculator";
  }

  function productName(id) {
    var match = PRODUCTS.find(function (entry) {
      return entry[0] === id;
    });
    return match ? match[1] : id;
  }

  function productPath(id) {
    return "/" + id + ".html";
  }

  function api() {
    return window.Calc || window.Notebook || null;
  }

  function apiReady() {
    var current = api();
    return !!(
      current &&
      typeof current.getState === "function" &&
      typeof current.setState === "function"
    );
  }

  function getState() {
    if (!apiReady()) throw new Error("Calculator is not ready yet.");
    return cleanTurboState(api().getState());
  }

  function setState(state) {
    if (!apiReady()) throw new Error("Calculator is not ready yet.");
    restoreAdaptiveTicker();
    api().setState(state, { allowUndo: true });
    setTimeout(syncAdaptiveTicker, 0);
  }

  function cleanTurboState(state) {
    var ticker = state && state.expressions && state.expressions.ticker;
    if (!ticker || !turbo.tickerAdaptive) return state;
    ticker.handlerLatex = turbo.tickerOriginalHandler;
    ticker.minStepLatex = turbo.tickerOriginalMinStep;
    return state;
  }

  function clearLegacyTurboSpeed() {
    try {
      sessionStorage.removeItem(LEGACY_TURBO_KEY);
    } catch (error) {
      // Turbo still resets when session storage is unavailable.
    }
    try {
      localStorage.removeItem(LEGACY_TURBO_KEY);
    } catch (error) {
      // Turbo still resets when local storage is unavailable.
    }
  }

  function setTurboSpeed(value, announce) {
    var speed = Number(value);
    turbo.speed = TURBO_SPEEDS.indexOf(speed) === -1 ? 1 : speed;
    turbo.lowFpsSamples = 0;

    setDropdownValue("local-turbo", String(turbo.speed));
    document.documentElement.setAttribute("data-turbo-speed", String(turbo.speed));
    syncAdaptiveTicker();

    if (announce) {
      status(
        turbo.speed === 1
          ? "Turbo off."
          : "Turbo " + turbo.speed + "x enabled. Higher CPU and memory use.",
      );
    }
  }

  function restoreAdaptiveTicker() {
    var controller = turbo.tickerController;
    if (turbo.tickerAdaptive && controller) {
      if (controller.getTickerHandlerLatex() === turbo.tickerAcceleratedHandler) {
        controller.dispatch({
          type: "update-ticker-handlerlatex",
          latex: turbo.tickerOriginalHandler,
        });
        controller.dispatch({
          type: "update-ticker-minsteplatex",
          latex: turbo.tickerOriginalMinStep,
        });
      }
    }
    turbo.tickerAdaptive = false;
    turbo.tickerController = null;
    turbo.tickerOriginalHandler = "";
    turbo.tickerOriginalMinStep = "";
    turbo.tickerAcceleratedHandler = "";
    document.documentElement.setAttribute("data-turbo-ticker", "clock");
  }

  function simpleTickerPlan(controller) {
    var state = api().getState();
    var expressions = state && state.expressions;
    var ticker = expressions && expressions.ticker;
    if (!ticker || !ticker.handlerLatex) return null;

    var minStep = Number(ticker.minStepLatex);
    if (!Number.isFinite(minStep) || minStep <= 0) return null;

    var definition = expressions.list.find(function (item) {
      return (
        item.type === "expression" &&
        typeof item.latex === "string" &&
        item.latex.indexOf(ticker.handlerLatex + "=") === 0
      );
    });
    if (!definition) return null;

    var actionLatex = definition.latex.slice(ticker.handlerLatex.length + 1);
    var update = actionLatex.match(
      /^([A-Za-z](?:_\{[^{}]+\})?)\\to\s*\1\s*\+\s*(.+)$/,
    );
    if (!update || update[2].indexOf("\\operatorname{dt}") !== -1) return null;

    var acceleratedHandler =
      update[1] +
      "\\to " +
      update[1] +
      "+\\left(" +
      update[2] +
      "\\right)\\frac{\\operatorname{dt}}{" +
      ticker.minStepLatex +
      "}" +
      turbo.speed;
    return {
      controller: controller,
      originalHandler: ticker.handlerLatex,
      originalMinStep: ticker.minStepLatex,
      acceleratedHandler: acceleratedHandler,
      acceleratedMinStep: String(
        Math.max(1000 / TURBO_MAX_TICKER_FPS, minStep / turbo.speed),
      ),
    };
  }

  function syncAdaptiveTicker() {
    var controller = turbo.calculator && turbo.calculator.controller;
    restoreAdaptiveTicker();
    if (!controller || turbo.speed === 1) return;

    var plan = simpleTickerPlan(controller);
    if (!plan) return;

    turbo.tickerAdaptive = true;
    turbo.tickerController = plan.controller;
    turbo.tickerOriginalHandler = plan.originalHandler;
    turbo.tickerOriginalMinStep = plan.originalMinStep;
    turbo.tickerAcceleratedHandler = plan.acceleratedHandler;
    document.documentElement.setAttribute("data-turbo-ticker", "adaptive");
    controller.dispatch({
      type: "update-ticker-handlerlatex",
      latex: plan.acceleratedHandler,
    });
    controller.dispatch({
      type: "update-ticker-minsteplatex",
      latex: plan.acceleratedMinStep,
    });
  }

  function installTurbo() {
    var current = api();
    var calculator = current && current._calc;
    var button = document.getElementById("local-turbo-button");

    if (!calculator || typeof calculator.tick !== "function") {
      if (button) button.disabled = true;
      document.documentElement.setAttribute("data-turbo-api", "unavailable");
      return;
    }
    if (turbo.calculator === calculator) return;

    turbo.calculator = calculator;
    turbo.originalTick = calculator.tick;
    turbo.lastRealTime = null;
    turbo.virtualTime = null;
    calculator.tick = function (realTime, paused) {
      if (!Number.isFinite(realTime)) {
        return turbo.originalTick.call(this, realTime, paused);
      }
      if (turbo.lastRealTime === null) {
        turbo.lastRealTime = realTime;
        if (turbo.virtualTime === null) turbo.virtualTime = realTime;
      } else {
        var frameDelta = Math.max(0, realTime - turbo.lastRealTime);
        turbo.lastRealTime = realTime;
        if (
          frameDelta > TURBO_MAX_FRAME_DELTA &&
          turbo.speed > 1 &&
          !turbo.tickerAdaptive
        ) {
          setTurboSpeed(1, false);
          status("Turbo disabled after the page stalled.");
        }
        var delta = Math.min(frameDelta, TURBO_MAX_FRAME_DELTA);
        var clockSpeed = turbo.tickerAdaptive ? 1 : turbo.speed;
        turbo.virtualTime += delta * (paused ? 1 : clockSpeed);
      }

      updateTurboStats(realTime);
      return turbo.originalTick.call(this, turbo.virtualTime, paused);
    };

    if (button) button.disabled = false;
    document.documentElement.setAttribute("data-turbo-api", "ready");
    syncAdaptiveTicker();
  }

  function updateTurboStats(realTime) {
    if (document.hidden) {
      turbo.fpsStartedAt = realTime;
      turbo.frameCount = 0;
      turbo.lowFpsSamples = 0;
      return;
    }
    if (turbo.fpsStartedAt === null) turbo.fpsStartedAt = realTime;
    turbo.frameCount += 1;
    var elapsed = realTime - turbo.fpsStartedAt;
    if (elapsed < 500) return;

    turbo.fps = Math.round((turbo.frameCount * 1000) / elapsed);
    turbo.frameCount = 0;
    turbo.fpsStartedAt = realTime;
    document.documentElement.setAttribute("data-turbo-fps", String(turbo.fps));
    document.documentElement.setAttribute(
      "data-turbo-time",
      String(Math.round(turbo.virtualTime)),
    );
    var readout = document.getElementById("local-turbo-fps");
    if (readout) readout.textContent = turbo.fps + " FPS";

    if (turbo.speed === 1 || turbo.tickerAdaptive || turbo.fps >= TURBO_MIN_FPS) {
      turbo.lowFpsSamples = 0;
      return;
    }
    turbo.lowFpsSamples += 1;
    if (turbo.lowFpsSamples < TURBO_LOW_FPS_LIMIT) return;

    var speedIndex = TURBO_SPEEDS.indexOf(turbo.speed);
    var saferSpeed = TURBO_SPEEDS[Math.max(0, speedIndex - 1)];
    setTurboSpeed(saferSpeed, false);
    status(
      saferSpeed === 1
        ? "Turbo disabled after frame rate dropped below 30 FPS."
        : "Turbo reduced to " + saferSpeed + "x after frame rate dropped below 30 FPS.",
    );
  }

  function recoveryKey(name) {
    return RECOVERY_PREFIX + product() + "." + name;
  }

  function startRecoverySession() {
    try {
      var wasActive = sessionStorage.getItem(recoveryKey("active")) === "1";
      var restoreAttempted =
        sessionStorage.getItem(recoveryKey("restore-attempted")) === "1";
      recoveryNeeded = wasActive && !restoreAttempted;
      recoverySkipped = wasActive && restoreAttempted;
      if (recoverySkipped) localStorage.removeItem(recoveryKey("snapshot"));
      sessionStorage.setItem(recoveryKey("active"), "1");
      document.documentElement.setAttribute(
        "data-recovery",
        recoverySkipped ? "skipped" : recoveryNeeded ? "pending" : "ready",
      );
    } catch (error) {
      document.documentElement.setAttribute("data-recovery", "unavailable");
    }

    window.addEventListener("pagehide", function () {
      try {
        sessionStorage.removeItem(recoveryKey("active"));
        sessionStorage.removeItem(recoveryKey("restore-attempted"));
      } catch (error) {
        // A blocked storage API cannot be cleaned up.
      }
    });
    window.addEventListener("pageshow", function () {
      try {
        sessionStorage.setItem(recoveryKey("active"), "1");
      } catch (error) {
        // A blocked storage API cannot track the active page.
      }
    });
  }

  function writeRecoverySnapshot() {
    if (!apiReady()) return;
    if (Date.now() < recoverySafeAt) {
      queueRecoverySnapshot();
      return;
    }
    try {
      localStorage.setItem(
        recoveryKey("snapshot"),
        JSON.stringify({
          version: 1,
          product: product(),
          savedAt: new Date().toISOString(),
          state: getState(),
        }),
      );
      sessionStorage.removeItem(recoveryKey("restore-attempted"));
      document.documentElement.setAttribute("data-recovery", "ready");
    } catch (error) {
      document.documentElement.setAttribute("data-recovery", "unavailable");
    }
  }

  function queueRecoverySnapshot() {
    clearTimeout(recoveryTimer);
    recoveryTimer = setTimeout(
      writeRecoverySnapshot,
      Math.max(400, recoverySafeAt - Date.now()),
    );
  }

  function restoreRecoverySnapshot() {
    if (!recoveryNeeded) return false;
    try {
      var snapshot = JSON.parse(localStorage.getItem(recoveryKey("snapshot")) || "null");
      if (!snapshot || snapshot.product !== product() || !snapshot.state) return false;
      sessionStorage.setItem(recoveryKey("restore-attempted"), "1");
      localStorage.removeItem(recoveryKey("snapshot"));
      recoverySafeAt = Date.now() + RECOVERY_REARM_DELAY;
      setState(snapshot.state);
      document.documentElement.setAttribute("data-recovery", "restored");
      status("Recovered unsaved graph after the previous crash.");
      return true;
    } catch (error) {
      document.documentElement.setAttribute("data-recovery", "failed");
      return false;
    }
  }

  function setupRecoverySnapshots() {
    var current = api();
    if (current && typeof current.observeEvent === "function") {
      current.observeEvent("change", queueRecoverySnapshot);
    } else {
      setInterval(writeRecoverySnapshot, 3000);
    }
    queueRecoverySnapshot();
  }

  function dropdownOptionsHtml(value, options) {
    return options
      .map(function (option) {
        return (
          '<button type="button" role="option" data-value="' +
          escapeHtml(option[0]) +
          '" aria-selected="' +
          (option[0] === value ? "true" : "false") +
          '">' +
          escapeHtml(option[1]) +
          "</button>"
        );
      })
      .join("");
  }

  function dropdownHtml(id, value, options) {
    var selected = options.find(function (option) {
      return option[0] === value;
    });
    return (
      '<div class="desmosplus-menu" id="' +
      id +
      '" data-value="' +
      escapeHtml(value) +
      '">' +
      '<button type="button" class="desmosplus-menu-button" id="' +
      id +
      '-button" role="combobox" aria-expanded="false" aria-controls="' +
      id +
      '-options" aria-haspopup="listbox">' +
      escapeHtml(selected ? selected[1] : value) +
      "</button>" +
      '<div class="desmosplus-menu-options" id="' +
      id +
      '-options" role="listbox" hidden>' +
      dropdownOptionsHtml(value, options) +
      "</div></div>"
    );
  }

  function setDropdownValue(id, value) {
    var dropdown = document.getElementById(id);
    if (!dropdown) return;
    var selected = Array.from(dropdown.querySelectorAll("[role=option]")).find(
      function (option) {
        return option.getAttribute("data-value") === value;
      },
    );
    if (!selected) return;
    dropdown.setAttribute("data-value", value);
    document.getElementById(id + "-button").textContent = selected.textContent;
    dropdown.querySelectorAll("[role=option]").forEach(function (option) {
      option.setAttribute("aria-selected", option === selected ? "true" : "false");
    });
  }

  function setDropdownOptions(id, value, options) {
    var dropdown = document.getElementById(id);
    if (!dropdown || !options.length) return;
    var nextValue = options.some(function (option) {
      return option[0] === value;
    })
      ? value
      : options[0][0];
    dropdown.querySelector(".desmosplus-menu-options").innerHTML =
      dropdownOptionsHtml(nextValue, options);
    setDropdownValue(id, nextValue);
  }

  function closeDropdown(dropdown, restoreFocus) {
    var button = dropdown.querySelector(".desmosplus-menu-button");
    dropdown.querySelector(".desmosplus-menu-options").hidden = true;
    button.setAttribute("aria-expanded", "false");
    if (restoreFocus) button.focus();
  }

  function setupDropdown(id, onSelect) {
    var dropdown = document.getElementById(id);
    var button = dropdown.querySelector(".desmosplus-menu-button");
    var list = dropdown.querySelector(".desmosplus-menu-options");

    function options() {
      return Array.from(dropdown.querySelectorAll("[role=option]"));
    }

    button.addEventListener("click", function () {
      document.querySelectorAll(".desmosplus-menu").forEach(function (other) {
        if (other !== dropdown) closeDropdown(other, false);
      });
      list.hidden = !list.hidden;
      button.setAttribute("aria-expanded", list.hidden ? "false" : "true");
    });

    list.addEventListener("click", function (event) {
      var option = event.target.closest("[role=option]");
      if (!option) return;
      var value = option.getAttribute("data-value");
      setDropdownValue(id, value);
      closeDropdown(dropdown, true);
      onSelect(value);
    });

    list.addEventListener("keydown", function (event) {
      var currentOptions = options();
      var index = currentOptions.indexOf(event.target);
      if (event.key === "Escape") {
        event.preventDefault();
        closeDropdown(dropdown, true);
      } else if (
        index !== -1 &&
        (event.key === "ArrowDown" || event.key === "ArrowUp")
      ) {
        event.preventDefault();
        var step = event.key === "ArrowDown" ? 1 : -1;
        currentOptions[(index + step + currentOptions.length) % currentOptions.length].focus();
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        currentOptions[event.key === "Home" ? 0 : currentOptions.length - 1].focus();
      }
    });

    button.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdown(dropdown, false);
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        var currentOptions = options();
        list.hidden = false;
        button.setAttribute("aria-expanded", "true");
        currentOptions[event.key === "ArrowDown" ? 0 : currentOptions.length - 1].focus();
      }
    });

    document.addEventListener(
      "click",
      function (event) {
        if (!dropdown.contains(event.target)) closeDropdown(dropdown, false);
      },
      true,
    );
  }

  function isolateControls(container) {
    ["pointerdown", "mousedown", "mouseup", "click", "touchstart"].forEach(function (type) {
      container.addEventListener(type, function (event) {
        event.stopPropagation();
      });
    });
  }

  function shortcutCatalog() {
    return window.DesmosUnlockedCatalog || { categories: [] };
  }

  function shortcutSupported() {
    return product() === "2dcalculator";
  }

  function allShortcutNames() {
    return shortcutCatalog().categories.flatMap(function (category) {
      return category.entries.map(function (entry) {
        return entry[0];
      });
    });
  }

  function extendedShortcutNames() {
    var category = shortcutCatalog().categories.find(function (entry) {
      return entry.id === "extended";
    });
    return new Set((category ? category.entries : []).map(function (entry) {
      return entry[0];
    }));
  }

  function readShortcutSettings() {
    var commands = SHORTCUT_DEFAULT_COMMANDS.split(/\s+/);
    var engineEnabled = false;
    try {
      var storedCommands = JSON.parse(localStorage.getItem(SHORTCUT_COMMANDS_KEY) || "null");
      if (Array.isArray(storedCommands)) commands = storedCommands;
      engineEnabled = localStorage.getItem(SHORTCUT_ENGINE_KEY) === "true";
    } catch (error) {
      // Default shortcuts remain available when local storage is blocked.
    }
    var allowed = new Set(allShortcutNames());
    return {
      commands: new Set(commands.filter(function (name) { return allowed.has(name); })),
      engineEnabled: engineEnabled,
    };
  }

  function writeShortcutSettings(commands, engineEnabled) {
    shortcutSettings = {
      commands: new Set(commands),
      engineEnabled: engineEnabled === true,
    };
    try {
      localStorage.setItem(SHORTCUT_COMMANDS_KEY, JSON.stringify(Array.from(commands)));
      localStorage.setItem(SHORTCUT_ENGINE_KEY, String(engineEnabled === true));
    } catch (error) {
      functionsStatus("Shortcut settings apply until this page closes.");
    }
    applyShortcutSettings();
    showShortcutSettings();
  }

  function applyShortcutSettings() {
    if (
      !shortcutSupported() ||
      !window.Desmos ||
      !window.Desmos.MathQuill ||
      typeof window.Desmos.MathQuill.config !== "function"
    ) {
      return false;
    }
    window.Desmos.MathQuill.config({
      autoCommands:
        SHORTCUT_SENTINEL +
        (shortcutSettings.commands.size
          ? " " + Array.from(shortcutSettings.commands).join(" ")
          : ""),
      charsThatBreakOutOfSupSub: "+-=<>*",
      disableAutoSubstitutionInSubscripts: true,
    });
    return true;
  }

  function activeMathField(event) {
    if (!window.Calc || !window.Calc.focusedMathQuill) return null;
    if (!event.target.closest || !event.target.closest(".dcg-math-field")) return null;
    return window.Calc.focusedMathQuill;
  }

  function enabledExtendedCommands() {
    var extended = shortcutCatalog().categories.find(function (category) {
      return category.id === "extended";
    });
    return new Map(
      (extended ? extended.entries : []).filter(function (entry) {
        return shortcutSettings.commands.has(entry[0]);
      }).map(function (entry) {
        return [entry[0], entry];
      }),
    );
  }

  function findShortcutCommand(latex) {
    var found = null;
    enabledExtendedCommands().forEach(function (entry, name) {
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

  function replaceShortcutCommand(event) {
    if (!shortcutSettings.engineEnabled) return;
    if (event.key !== " " && event.key !== "Enter" && event.key !== "Tab") return;
    var field = activeMathField(event);
    if (!field || typeof field.latex !== "function") return;
    var latex = field.latex();
    var found = findShortcutCommand(latex);
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

  function installShortcutRuntime() {
    if (shortcutRuntimeInstalled || !shortcutSupported()) return;
    shortcutRuntimeInstalled = true;
    shortcutSettings = readShortcutSettings();
    document.addEventListener("keydown", replaceShortcutCommand, true);
    applyShortcutSettings();
    showShortcutSettings();
  }

  function functionsStatus(message) {
    var node = document.getElementById("local-functions-status");
    if (node) node.textContent = message;
  }

  function showShortcutSettings() {
    var toggle = document.getElementById("local-shortcut-engine");
    var state = document.getElementById("local-shortcut-engine-state");
    if (toggle) toggle.checked = shortcutSettings.engineEnabled;
    if (state) state.textContent = shortcutSettings.engineEnabled ? "On" : "Off";
    document.querySelectorAll("[data-local-shortcut]").forEach(function (input) {
      input.checked = shortcutSettings.commands.has(input.dataset.localShortcut);
    });
  }

  function renderShortcutCatalog() {
    var list = document.getElementById("local-shortcut-list");
    if (!list) return;
    list.replaceChildren();
    shortcutCatalog().categories.forEach(function (category) {
      var section = document.createElement("section");
      section.className = "local-shortcut-category";
      section.dataset.localShortcutCategory = category.id;

      var heading = document.createElement("h3");
      heading.textContent = category.label + " (" + category.entries.length + ")";
      section.appendChild(heading);

      category.entries.forEach(function (entry) {
        var name = entry[0];
        var label = document.createElement("label");
        label.className = "local-shortcut-entry";
        label.dataset.localShortcutSearch = (name + " " + (entry[1] || "")).toLowerCase();

        var symbol = document.createElement("span");
        symbol.className = "local-shortcut-symbol";
        symbol.textContent = entry[1] || "\\";
        var command = document.createElement("code");
        command.textContent = "\\" + name;
        var input = document.createElement("input");
        input.type = "checkbox";
        input.dataset.localShortcut = name;
        input.setAttribute("aria-label", "Enable " + name + " shortcut");
        input.addEventListener("change", function () {
          var commands = new Set(shortcutSettings.commands);
          if (input.checked) commands.add(name);
          else commands.delete(name);
          var engineEnabled =
            shortcutSettings.engineEnabled ||
            (input.checked && extendedShortcutNames().has(name));
          writeShortcutSettings(commands, engineEnabled);
          functionsStatus("Updated \\" + name + ".");
        });
        label.append(symbol, command, input);
        section.appendChild(label);
      });
      list.appendChild(section);
    });
    showShortcutSettings();
  }

  function filterShortcutCatalog() {
    var input = document.getElementById("local-shortcut-filter");
    var query = input ? input.value.trim().toLowerCase() : "";
    document.querySelectorAll("[data-local-shortcut-category]").forEach(function (category) {
      var visible = 0;
      category.querySelectorAll(".local-shortcut-entry").forEach(function (entry) {
        entry.hidden = Boolean(query) && !entry.dataset.localShortcutSearch.includes(query);
        if (!entry.hidden) visible += 1;
      });
      category.hidden = visible === 0;
    });
  }

  function cookieMap() {
    return document.cookie.split(";").reduce(function (map, part) {
      var index = part.indexOf("=");
      if (index === -1) return map;
      map[part.slice(0, index).trim()] = part.slice(index + 1);
      return map;
    }, {});
  }

  function clearCookieChunks() {
    var map = cookieMap();
    Object.keys(map).forEach(function (key) {
      if (key === COOKIE_KEY || key.indexOf(COOKIE_KEY + "_") === 0) {
        document.cookie = key + "=; path=/; max-age=0; SameSite=Lax";
      }
    });
  }

  function writeCookie(value) {
    clearCookieChunks();
    var chunks = [];
    for (var i = 0; i < value.length; i += CHUNK_SIZE) {
      chunks.push(value.slice(i, i + CHUNK_SIZE));
    }
    document.cookie =
      COOKIE_KEY +
      "=" +
      chunks.length +
      "; path=/; max-age=" +
      COOKIE_AGE +
      "; SameSite=Lax";
    chunks.forEach(function (chunk, index) {
      document.cookie =
        COOKIE_KEY +
        "_" +
        index +
        "=" +
        chunk +
        "; path=/; max-age=" +
        COOKIE_AGE +
        "; SameSite=Lax";
    });
  }

  function readCookie() {
    var map = cookieMap();
    var count = Number(map[COOKIE_KEY] || 0);
    var value = "";
    if (!count) return value;
    for (var i = 0; i < count; i += 1) {
      if (!map[COOKIE_KEY + "_" + i]) return "";
      value += map[COOKIE_KEY + "_" + i];
    }
    return value;
  }

  function blankStore() {
    return { version: 1, saves: [] };
  }

  function readStore() {
    var encoded = readCookie() || localStorage.getItem(STORE_KEY) || "";
    if (!encoded) return blankStore();
    try {
      var parsed = JSON.parse(decodeURIComponent(encoded));
      return Array.isArray(parsed.saves) ? parsed : blankStore();
    } catch (error) {
      return blankStore();
    }
  }

  function writeStore(store) {
    var encoded = encodeURIComponent(JSON.stringify(store));
    localStorage.setItem(STORE_KEY, encoded);
    try {
      writeCookie(encoded);
    } catch (error) {
      localStorage.setItem(STORE_KEY + ".cookieError", String(error));
    }
  }

  function safeName(value, fallback) {
    return String(value || "").trim() || fallback;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[character];
    });
  }

  function buildShell() {
    if (document.getElementById("desmosplus-shell")) return;

    document.title = "DesmosPlus | " + productName(product());

    var shell = document.createElement("header");
    shell.id = "desmosplus-shell";
    shell.innerHTML =
      '<a class="desmosplus-brand" href="/">DesmosPlus</a>' +
      '<label class="desmosplus-product-label" for="desmosplus-product-button">Calculator</label>' +
      dropdownHtml("desmosplus-product", product(), PRODUCTS) +
      '<div class="desmosplus-actions">' +
      '<label class="desmosplus-turbo-label" for="local-turbo-button">Turbo</label>' +
      dropdownHtml("local-turbo", "1", [
        ["1", "Off"],
        ["2", "2x"],
        ["4", "4x"],
        ["8", "8x"],
        ["16", "16x"],
      ]) +
      '<span id="local-turbo-fps" title="Current animation frame rate">-- FPS</span>' +
      '<button type="button" id="local-new">New</button>' +
      '<button type="button" id="local-save">Save</button>' +
      (product() === "2dcalculator"
        ? '<button type="button" id="local-audio" aria-expanded="false">Audio</button>'
        : "") +
      (shortcutSupported()
        ? '<button type="button" id="local-functions" aria-expanded="false">Functions</button>'
        : "") +
      '<button type="button" id="local-library" aria-expanded="false">Library</button>' +
      "</div>";
    document.body.appendChild(shell);
    isolateControls(shell);

    setupDropdown("desmosplus-product", function (value) {
      window.location.href = productPath(value);
    });
    setupDropdown("local-turbo", function (value) {
      setTurboSpeed(value, true);
    });
    document.getElementById("local-new").addEventListener("click", newCurrent);
    document.getElementById("local-save").addEventListener("click", saveCurrent);
    var audioButton = document.getElementById("local-audio");
    if (audioButton) audioButton.addEventListener("click", toggleAudioPanel);
    var functionsButton = document.getElementById("local-functions");
    if (functionsButton) functionsButton.addEventListener("click", toggleFunctionsPanel);
    document.getElementById("local-library").addEventListener("click", togglePanel);
  }

  function buildPanel() {
    if (document.getElementById("local-save-panel")) return;

    var panel = document.createElement("aside");
    panel.id = "local-save-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="local-panel-header">' +
      "<strong>Saved instances</strong>" +
      '<button type="button" id="local-close" aria-label="Close library">Close</button>' +
      "</div>" +
      '<form id="local-save-form">' +
      '<label for="local-save-name">Name</label>' +
      '<input id="local-save-name" value="Untitled" autocomplete="off">' +
      '<label for="local-save-category">Category</label>' +
      '<div class="local-editable-menu" id="local-save-category-menu">' +
      '<input id="local-save-category" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="local-save-category-options" autocomplete="off">' +
      '<div class="desmosplus-menu-options local-category-options" id="local-save-category-options" role="listbox" hidden></div>' +
      "</div>" +
      '<button type="submit">Save instance</button>' +
      '<button type="button" id="local-import">Import graph file</button>' +
      '<input type="file" id="local-import-file" accept=".desmos,.desmosplus.json,.json,application/json" hidden>' +
      '<button type="button" id="local-import-svg">Import SVG as equations</button>' +
      '<input type="file" id="local-import-svg-file" accept=".svg,image/svg+xml" hidden>' +
      "</form>" +
      '<div class="local-filters">' +
      '<label for="local-product-filter-button">Calculator</label>' +
      dropdownHtml(
        "local-product-filter",
        "",
        [["", "All calculators"]].concat(PRODUCTS),
      ) +
      '<label for="local-category-filter-button">Category</label>' +
      dropdownHtml("local-category-filter", "", [["", "All categories"]]) +
      "</div>" +
      '<div id="local-save-list"></div>' +
      '<div id="local-save-status" aria-live="polite"></div>';
    document.body.appendChild(panel);
    isolateControls(panel);

    document.getElementById("local-save-category").value = productName(product());
    setupEditableCategoryMenu();
    document.getElementById("local-save-form").addEventListener("submit", function (event) {
      event.preventDefault();
      saveCurrent();
    });
    document.getElementById("local-import").addEventListener("click", function () {
      document.getElementById("local-import-file").click();
    });
    document.getElementById("local-import-file").addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) importGraph(file);
      event.target.value = "";
    });
    var svgButton = document.getElementById("local-import-svg");
    var svgFile = document.getElementById("local-import-svg-file");
    var svgSupported =
      window.DesmosPlusSvg && window.DesmosPlusSvg.supportedProduct(product());
    svgButton.disabled = !svgSupported;
    svgButton.title = svgSupported
      ? "Convert a static SVG into editable Desmos equations"
      : "Available in 2D Calculator and Geometry";
    svgButton.addEventListener("click", function () {
      svgFile.click();
    });
    svgFile.addEventListener("change", function (event) {
      var file = event.target.files && event.target.files[0];
      if (file) importSvg(file);
      event.target.value = "";
    });
    document.getElementById("local-close").addEventListener("click", closePanel);
    setupDropdown("local-product-filter", render);
    setupDropdown("local-category-filter", render);
    render();
  }

  function togglePanel() {
    var panel = document.getElementById("local-save-panel");
    if (panel.hidden) openPanel();
    else closePanel();
  }

  function openPanel() {
    closeAudioPanel();
    closeFunctionsPanel();
    document.getElementById("local-save-panel").hidden = false;
    document.getElementById("local-library").setAttribute("aria-expanded", "true");
    render();
  }

  function closePanel() {
    var panel = document.getElementById("local-save-panel");
    panel.querySelectorAll(".desmosplus-menu").forEach(function (dropdown) {
      closeDropdown(dropdown, false);
    });
    var categoryInput = document.getElementById("local-save-category");
    document.getElementById("local-save-category-options").hidden = true;
    categoryInput.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    document.getElementById("local-library").setAttribute("aria-expanded", "false");
  }

  function buildAudioPanel() {
    if (product() !== "2dcalculator" || document.getElementById("local-audio-panel")) return;

    var panel = document.createElement("aside");
    panel.id = "local-audio-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="local-panel-header">' +
      "<strong>DesAudify</strong>" +
      '<button type="button" id="local-audio-close" aria-label="Close audio tools">Close</button>' +
      "</div>" +
      '<div class="local-audio-actions">' +
      '<button type="button" id="local-audio-template">Load player</button>' +
      '<button type="button" id="local-audio-data">Import data</button>' +
      '<button type="button" id="local-audio-processing">Import processing</button>' +
      '<input type="file" id="local-audio-data-file" accept=".txt,text/plain" multiple hidden>' +
      '<input type="file" id="local-audio-processing-file" accept=".txt,text/plain" multiple hidden>' +
      "</div>" +
      '<div id="local-audio-status" aria-live="polite">Audio tools ready.</div>';
    document.body.appendChild(panel);
    isolateControls(panel);

    document.getElementById("local-audio-close").addEventListener("click", closeAudioPanel);
    document
      .getElementById("local-audio-template")
      .addEventListener("click", loadDesAudifyTemplate);
    document.getElementById("local-audio-data").addEventListener("click", function () {
      document.getElementById("local-audio-data-file").click();
    });
    document.getElementById("local-audio-processing").addEventListener("click", function () {
      document.getElementById("local-audio-processing-file").click();
    });
    document.getElementById("local-audio-data-file").addEventListener("change", function (event) {
      importDesAudifySchemas(Array.from(event.target.files || []), "data");
      event.target.value = "";
    });
    document
      .getElementById("local-audio-processing-file")
      .addEventListener("change", function (event) {
        importDesAudifySchemas(Array.from(event.target.files || []), "processing");
        event.target.value = "";
      });
  }

  function audioStatus(message) {
    var node = document.getElementById("local-audio-status");
    if (node) node.textContent = message;
  }

  function toggleAudioPanel() {
    var panel = document.getElementById("local-audio-panel");
    if (!panel) return;
    if (panel.hidden) openAudioPanel();
    else closeAudioPanel();
  }

  function openAudioPanel() {
    var panel = document.getElementById("local-audio-panel");
    if (!panel) return;
    closePanel();
    closeFunctionsPanel();
    panel.hidden = false;
    document.getElementById("local-audio").setAttribute("aria-expanded", "true");
  }

  function closeAudioPanel() {
    var panel = document.getElementById("local-audio-panel");
    var button = document.getElementById("local-audio");
    if (panel) panel.hidden = true;
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function buildFunctionsPanel() {
    if (!shortcutSupported() || document.getElementById("local-functions-panel")) return;

    var count = allShortcutNames().length;
    var panel = document.createElement("aside");
    panel.id = "local-functions-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="local-panel-header">' +
      "<strong>Functions</strong>" +
      '<button type="button" id="local-functions-close" aria-label="Close function tools">Close</button>' +
      "</div>" +
      '<div class="local-shortcut-controls">' +
      '<div class="local-shortcut-engine-row">' +
      '<div><strong>Extended shortcut engine</strong><span id="local-shortcut-engine-state">Off</span></div>' +
      '<label class="local-toggle" for="local-shortcut-engine">' +
      '<input id="local-shortcut-engine" type="checkbox">' +
      '<span aria-hidden="true"></span></label></div>' +
      '<label for="local-shortcut-filter">Editor shortcuts (' + count + ")</label>" +
      '<input id="local-shortcut-filter" type="search" placeholder="Find a shortcut" autocomplete="off">' +
      "</div>" +
      '<div id="local-shortcut-list" class="local-shortcut-list" aria-label="Editor shortcuts"></div>' +
      '<div class="local-shortcut-actions">' +
      '<button type="button" id="local-shortcuts-enable-all">Enable all</button>' +
      '<button type="button" id="local-shortcuts-disable-all">Disable all</button>' +
      "</div>" +
      '<div id="local-functions-status" aria-live="polite">Function shortcuts ready.</div>';
    document.body.appendChild(panel);
    isolateControls(panel);

    shortcutSettings = readShortcutSettings();
    renderShortcutCatalog();
    document.getElementById("local-functions-close").addEventListener("click", closeFunctionsPanel);
    document.getElementById("local-shortcut-filter").addEventListener("input", filterShortcutCatalog);
    document.getElementById("local-shortcut-engine").addEventListener("change", function (event) {
      writeShortcutSettings(shortcutSettings.commands, event.target.checked);
      functionsStatus(event.target.checked ? "Extended shortcut engine enabled." : "Extended shortcut engine disabled.");
    });
    document.getElementById("local-shortcuts-enable-all").addEventListener("click", function () {
      writeShortcutSettings(new Set(allShortcutNames()), true);
      functionsStatus("Enabled all " + count + " shortcuts.");
    });
    document.getElementById("local-shortcuts-disable-all").addEventListener("click", function () {
      writeShortcutSettings(new Set(), false);
      functionsStatus("Disabled all shortcuts.");
    });
  }

  function toggleFunctionsPanel() {
    var panel = document.getElementById("local-functions-panel");
    if (!panel) return;
    if (panel.hidden) openFunctionsPanel();
    else closeFunctionsPanel();
  }

  function openFunctionsPanel() {
    var panel = document.getElementById("local-functions-panel");
    if (!panel) return;
    closePanel();
    closeAudioPanel();
    panel.hidden = false;
    document.getElementById("local-functions").setAttribute("aria-expanded", "true");
  }

  function closeFunctionsPanel() {
    var panel = document.getElementById("local-functions-panel");
    var button = document.getElementById("local-functions");
    if (panel) panel.hidden = true;
    if (button) button.setAttribute("aria-expanded", "false");
  }

  function desAudifyBridge() {
    if (!window.DesmosPlusDesAudify) {
      throw new Error("DesAudify tools did not load. Reload the calculator.");
    }
    if (!apiReady()) throw new Error("Calculator is still loading.");
    return window.DesmosPlusDesAudify;
  }

  async function loadDesAudifyTemplate() {
    if (!window.confirm("Replace the current graph with the DesAudify player?")) return;
    audioStatus("Loading DesAudify player...");
    try {
      var response = await fetch("/assets/desaudify/template-state.json");
      if (!response.ok) throw new Error("Bundled DesAudify player could not be read.");
      var result = desAudifyBridge().loadTemplate(await response.json());
      loadedId = "";
      document.getElementById("local-save-name").value = "DesAudify Audio";
      document.getElementById("local-save-category").value = "Audio";
      queueRecoverySnapshot();
      audioStatus("DesAudify player loaded with " + result.expressionCount + " items.");
    } catch (error) {
      audioStatus(error.message || String(error));
    }
  }

  async function importDesAudifySchemas(files, kind) {
    if (!files.length) return;
    audioStatus("Importing DesAudify " + kind + "...");
    try {
      var bridge = desAudifyBridge();
      var total = 0;
      var tickerPlaying = false;
      for (var i = 0; i < files.length; i += 1) {
        audioStatus(
          "Importing " +
            (i + 1) +
            " of " +
            files.length +
            " at a safe rate...",
        );
        var result = await bridge.insertSchema(await files[i].text(), files[i].name, kind);
        total += result.equationCount;
        tickerPlaying = tickerPlaying || result.tickerPlaying;
      }
      queueRecoverySnapshot();
      audioStatus(
        "Imported " +
          total +
          " DesAudify equation" +
          (total === 1 ? "" : "s") +
          "." +
          (kind === "processing"
            ? tickerPlaying
              ? " Click the title to play."
              : " Start the ticker, then click the title to play."
            : ""),
      );
    } catch (error) {
      audioStatus(error.message || String(error));
    }
  }

  function status(message) {
    var node = document.getElementById("local-save-status");
    if (node) node.textContent = message;
  }

  function newCurrent() {
    loadedId = "";
    document.getElementById("local-save-name").value = "Untitled";
    document.getElementById("local-save-category").value = productName(product());
    if (apiReady() && typeof api().setBlank === "function") api().setBlank();
    status("New instance.");
  }

  function saveCurrent() {
    try {
      if (!apiReady()) {
        status("Calculator is still loading.");
        return;
      }
      var store = readStore();
      var now = new Date().toISOString();
      var category = safeName(
        document.getElementById("local-save-category").value,
        productName(product()),
      );
      var name = safeName(document.getElementById("local-save-name").value, "Untitled");
      var id = loadedId || product() + "-" + Date.now().toString(36);
      var next = {
        id: id,
        product: product(),
        category: category,
        name: name,
        state: getState(),
        updatedAt: now,
      };
      var index = store.saves.findIndex(function (save) {
        return save.id === id;
      });
      if (index === -1) store.saves.push(next);
      else store.saves[index] = next;
      loadedId = id;
      writeStore(store);
      render();
      status("Saved locally.");
    } catch (error) {
      status(error.message || String(error));
    }
  }

  function openSave(id) {
    var save = readStore().saves.find(function (entry) {
      return entry.id === id;
    });
    if (!save) return;
    if (save.product !== product()) {
      window.location.href = productPath(save.product) + "#save=" + encodeURIComponent(id);
      return;
    }
    try {
      setState(save.state);
      loadedId = save.id;
      document.getElementById("local-save-name").value = save.name;
      document.getElementById("local-save-category").value = save.category;
      window.history.replaceState(null, "", window.location.pathname);
      render();
      status("Opened local instance.");
    } catch (error) {
      status(error.message || String(error));
    }
  }

  function deleteSave(id) {
    var store = readStore();
    store.saves = store.saves.filter(function (save) {
      return save.id !== id;
    });
    if (loadedId === id) loadedId = "";
    writeStore(store);
    render();
    status("Deleted local instance.");
  }

  function knownProduct(value) {
    return PRODUCTS.some(function (entry) {
      return entry[0] === value;
    });
  }

  async function importSvg(file) {
    try {
      if (!window.DesmosPlusSvg || !window.DesmosPlusSvg.supportedProduct(product())) {
        throw new Error("SVG import is available in 2D Calculator and Geometry.");
      }
      if (!apiReady()) throw new Error("Calculator is still loading.");

      var converted = window.DesmosPlusSvg.parse(await file.text(), file.name);
      var state = getState();
      if (!state.expressions || !Array.isArray(state.expressions.list)) {
        throw new Error("This calculator cannot accept SVG equations.");
      }
      Array.prototype.push.apply(state.expressions.list, converted.expressions);
      setState(state);

      var nameInput = document.getElementById("local-save-name");
      if (nameInput.value === "Untitled") nameInput.value = converted.name;
      queueRecoverySnapshot();
      openPanel();
      status(
        "Imported " +
          converted.equationCount +
          " editable SVG equation" +
          (converted.equationCount === 1 ? "" : "s") +
          ". Save the instance to keep them.",
      );
    } catch (error) {
      status(error.message || String(error));
    }
  }

  async function importGraph(file) {
    try {
      var imported = JSON.parse(await file.text());
      var wrapped = imported.format === "desmosplus.graph" && imported.version === 1;
      var raw =
        !wrapped &&
        imported &&
        typeof imported === "object" &&
        !Array.isArray(imported) &&
        imported.graph &&
        typeof imported.graph === "object" &&
        imported.expressions &&
        Array.isArray(imported.expressions.list);
      var importedProduct = wrapped ? imported.product : product();
      var importedState = wrapped ? imported.state : imported;
      if (
        (!wrapped && !raw) ||
        !knownProduct(importedProduct) ||
        !importedState ||
        typeof importedState !== "object" ||
        Array.isArray(importedState)
      ) {
        throw new Error("Invalid DesmosPlus graph file.");
      }

      var store = readStore();
      var id = importedProduct + "-import-" + Date.now().toString(36);
      store.saves.push({
        id: id,
        product: importedProduct,
        category: safeName(wrapped && imported.category, "Imported"),
        name: safeName(
          wrapped && imported.name,
          file.name.replace(/\.(?:desmos|desmosplus\.json|json)$/i, ""),
        ),
        state: importedState,
        updatedAt: new Date().toISOString(),
      });
      writeStore(store);

      if (importedProduct !== product()) {
        window.location.href =
          productPath(importedProduct) + "#save=" + encodeURIComponent(id);
        return;
      }

      openSave(id);
      openPanel();
      status("Imported graph.");
    } catch (error) {
      status(error.message || String(error));
    }
  }

  function categories(store, productFilter) {
    var seen = {};
    store.saves.forEach(function (save) {
      if (!productFilter || save.product === productFilter) seen[save.category] = true;
    });
    return Object.keys(seen).sort();
  }

  function setupEditableCategoryMenu() {
    var menu = document.getElementById("local-save-category-menu");
    var input = document.getElementById("local-save-category");
    var list = document.getElementById("local-save-category-options");
    var ignoreNextFocus = false;

    function options() {
      return Array.from(list.querySelectorAll("[role=option]"));
    }

    function close(restoreFocus) {
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
      if (restoreFocus) {
        ignoreNextFocus = true;
        input.focus();
      }
    }

    function open() {
      var query = input.value.trim().toLowerCase();
      var matches = categories(readStore(), "").filter(function (category) {
        return !query || category.toLowerCase().indexOf(query) !== -1;
      });
      list.innerHTML = dropdownOptionsHtml(
        "",
        matches.map(function (category) {
          return [category, category];
        }),
      );
      list.hidden = !matches.length;
      input.setAttribute("aria-expanded", matches.length ? "true" : "false");
    }

    input.addEventListener("focus", function () {
      if (ignoreNextFocus) {
        ignoreNextFocus = false;
        return;
      }
      open();
    });
    input.addEventListener("input", open);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        close(false);
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        open();
        var currentOptions = options();
        if (!currentOptions.length) return;
        event.preventDefault();
        currentOptions[event.key === "ArrowDown" ? 0 : currentOptions.length - 1].focus();
      }
    });
    list.addEventListener("click", function (event) {
      var option = event.target.closest("[role=option]");
      if (!option) return;
      input.value = option.getAttribute("data-value");
      close(true);
    });
    list.addEventListener("keydown", function (event) {
      var currentOptions = options();
      var index = currentOptions.indexOf(event.target);
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      } else if (
        index !== -1 &&
        (event.key === "ArrowDown" || event.key === "ArrowUp")
      ) {
        event.preventDefault();
        var step = event.key === "ArrowDown" ? 1 : -1;
        currentOptions[(index + step + currentOptions.length) % currentOptions.length].focus();
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        currentOptions[event.key === "Home" ? 0 : currentOptions.length - 1].focus();
      }
    });
    document.addEventListener(
      "click",
      function (event) {
        if (!menu.contains(event.target)) close(false);
      },
      true,
    );
  }

  function render() {
    var store = readStore();
    var productFilter = document.getElementById("local-product-filter");
    var categoryFilter = document.getElementById("local-category-filter");
    var list = document.getElementById("local-save-list");
    if (!productFilter || !categoryFilter || !list) return;

    var selectedProduct = productFilter.getAttribute("data-value") || "";
    var selectedCategory = categoryFilter.getAttribute("data-value") || "";
    setDropdownValue("local-product-filter", selectedProduct);

    var cats = categories(store, selectedProduct);
    var nextCategory = cats.indexOf(selectedCategory) === -1 ? "" : selectedCategory;
    setDropdownOptions(
      "local-category-filter",
      nextCategory,
      [["", "All categories"]].concat(
        cats.map(function (category) {
          return [category, category];
        }),
      ),
    );

    var saves = store.saves
      .filter(function (save) {
        return (
          (!selectedProduct || save.product === selectedProduct) &&
          (!nextCategory || save.category === nextCategory)
        );
      })
      .sort(function (a, b) {
        return (b.updatedAt || "").localeCompare(a.updatedAt || "");
      });

    list.innerHTML = saves.length
      ? saves
          .map(function (save) {
            return (
              '<article class="local-save-row">' +
              "<strong>" +
              escapeHtml(save.name) +
              "</strong>" +
              "<small>" +
              escapeHtml(productName(save.product)) +
              " / " +
              escapeHtml(save.category) +
              "</small>" +
              '<div><button type="button" data-open="' +
              escapeHtml(save.id) +
              '">Open</button>' +
              '<button type="button" data-delete="' +
              escapeHtml(save.id) +
              '">Delete</button></div>' +
              "</article>"
            );
          })
          .join("")
      : '<p class="local-empty">No saved instances.</p>';

    list.querySelectorAll("[data-open]").forEach(function (button) {
      button.addEventListener("click", function () {
        openSave(button.getAttribute("data-open"));
      });
    });
    list.querySelectorAll("[data-delete]").forEach(function (button) {
      button.addEventListener("click", function () {
        deleteSave(button.getAttribute("data-delete"));
      });
    });

    document.getElementById("local-library").textContent =
      "Library" + (store.saves.length ? " (" + store.saves.length + ")" : "");
  }

  function interceptBuiltInSave() {
    document.addEventListener(
      "click",
      function (event) {
        var button =
          event.target &&
          event.target.closest &&
          event.target.closest(".dcg-action-save, .dcg-save-button");
        if (!button) return;
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        saveCurrent();
      },
      true,
    );

    document.addEventListener(
      "keydown",
      function (event) {
        if (
          !(event.ctrlKey || event.metaKey) ||
          event.shiftKey ||
          event.key.toLowerCase() !== "s"
        ) {
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        saveCurrent();
      },
      true,
    );
  }

  function keepBuiltInSaveLocal() {
    document.querySelectorAll(".dcg-action-save, .dcg-save-button").forEach(function (button) {
      if (button.tagName === "BUTTON") {
        button.disabled = false;
        button.removeAttribute("disabled");
      }
      button.classList.remove("dcg-disabled");
      button.classList.add("dcg-local-save-button");
    });
    document.querySelectorAll('[aria-label*="Desmos"]').forEach(function (node) {
      node.setAttribute(
        "aria-label",
        node.getAttribute("aria-label").replace(/Desmos(?!Plus)/g, "DesmosPlus"),
      );
    });
  }

  function pendingSaveId() {
    return new URLSearchParams(window.location.hash.slice(1)).get("save") || "";
  }

  function boot() {
    startRecoverySession();
    buildShell();
    clearLegacyTurboSpeed();
    setTurboSpeed(1, false);
    buildPanel();
    buildAudioPanel();
    buildFunctionsPanel();
    interceptBuiltInSave();
    setInterval(keepBuiltInSaveLocal, 500);
    var timer = setInterval(function () {
      var ready = apiReady();
      document.documentElement.setAttribute("data-local-save-api", ready ? "ready" : "waiting");
      if (!ready) return;
      clearInterval(timer);
      installTurbo();
      installShortcutRuntime();
      var id = pendingSaveId();
      if (id) openSave(id);
      else if (!restoreRecoverySnapshot()) {
        status(
          recoverySkipped
            ? "Started safely without the failing recovery snapshot."
            : "Local saves ready.",
        );
      }
      setupRecoverySnapshots();
    }, 250);

    document.addEventListener("visibilitychange", function () {
      turbo.lastRealTime = null;
      turbo.fpsStartedAt = null;
      turbo.frameCount = 0;
      turbo.lowFpsSamples = 0;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.DesmosPlusTurbo = {
    getSpeed: function () {
      return turbo.speed;
    },
    setSpeed: function (speed) {
      setTurboSpeed(speed, true);
    },
    isReady: function () {
      return turbo.calculator !== null;
    },
    getFps: function () {
      return turbo.fps;
    },
    cleanState: cleanTurboState,
  };
})();
