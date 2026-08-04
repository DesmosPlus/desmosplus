(function () {
  "use strict";

  var STORE_KEY = "desmos.offline.saves.v1";
  var COOKIE_KEY = "desmos_offline_saves_v1";
  var COOKIE_AGE = 60 * 60 * 24 * 365 * 20;
  var CHUNK_SIZE = 3200;
  var TURBO_KEY = "desmosplus.turbo.speed";
  var TURBO_SPEEDS = [1, 2, 4, 8, 16];
  var turbo = {
    speed: 1,
    calculator: null,
    originalTick: null,
    lastRealTime: null,
    virtualTime: null,
    fpsStartedAt: null,
    frameCount: 0,
    fps: 0,
  };
  var loadedId = "";
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
    return api().getState();
  }

  function setState(state) {
    if (!apiReady()) throw new Error("Calculator is not ready yet.");
    api().setState(state, { allowUndo: true });
  }

  function readTurboSpeed() {
    try {
      var speed = Number(sessionStorage.getItem(TURBO_KEY) || 1);
      return TURBO_SPEEDS.indexOf(speed) === -1 ? 1 : speed;
    } catch (error) {
      return 1;
    }
  }

  function setTurboSpeed(value, announce) {
    var speed = Number(value);
    turbo.speed = TURBO_SPEEDS.indexOf(speed) === -1 ? 1 : speed;

    setDropdownValue("local-turbo", String(turbo.speed));
    document.documentElement.setAttribute("data-turbo-speed", String(turbo.speed));

    try {
      sessionStorage.setItem(TURBO_KEY, String(turbo.speed));
    } catch (error) {
      // Turbo still works when session storage is unavailable.
    }

    if (announce) {
      status(
        turbo.speed === 1
          ? "Turbo off."
          : "Turbo " + turbo.speed + "x enabled. Higher CPU and memory use.",
      );
    }
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
        turbo.virtualTime = realTime;
      } else {
        var delta = Math.max(0, realTime - turbo.lastRealTime);
        turbo.lastRealTime = realTime;
        turbo.virtualTime += delta * (paused ? 1 : turbo.speed);
      }

      updateTurboStats(realTime);
      return turbo.originalTick.call(this, turbo.virtualTime, paused);
    };

    if (button) button.disabled = false;
    document.documentElement.setAttribute("data-turbo-api", "ready");
  }

  function updateTurboStats(realTime) {
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
      options
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
        .join("") +
      "</div></div>"
    );
  }

  function setDropdownValue(id, value) {
    var dropdown = document.getElementById(id);
    if (!dropdown) return;
    var selected = dropdown.querySelector('[data-value="' + value + '"]');
    if (!selected) return;
    dropdown.setAttribute("data-value", value);
    document.getElementById(id + "-button").textContent = selected.textContent;
    dropdown.querySelectorAll("[role=option]").forEach(function (option) {
      option.setAttribute("aria-selected", option === selected ? "true" : "false");
    });
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
    var options = Array.from(dropdown.querySelectorAll("[role=option]"));

    button.addEventListener("click", function () {
      var list = dropdown.querySelector(".desmosplus-menu-options");
      document.querySelectorAll(".desmosplus-menu").forEach(function (other) {
        if (other !== dropdown) closeDropdown(other, false);
      });
      list.hidden = !list.hidden;
      button.setAttribute("aria-expanded", list.hidden ? "false" : "true");
    });

    options.forEach(function (option, index) {
      option.addEventListener("click", function () {
        setDropdownValue(id, option.getAttribute("data-value"));
        closeDropdown(dropdown, true);
        onSelect(option.getAttribute("data-value"));
      });
      option.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          event.preventDefault();
          closeDropdown(dropdown, true);
        } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          var step = event.key === "ArrowDown" ? 1 : -1;
          options[(index + step + options.length) % options.length].focus();
        }
      });
    });

    button.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDropdown(dropdown, false);
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        var list = dropdown.querySelector(".desmosplus-menu-options");
        list.hidden = false;
        button.setAttribute("aria-expanded", "true");
        options[event.key === "ArrowDown" ? 0 : options.length - 1].focus();
      }
    });

    document.addEventListener("click", function () {
      closeDropdown(dropdown, false);
    });
  }

  function isolateControls(container) {
    ["pointerdown", "mousedown", "mouseup", "click", "touchstart"].forEach(function (type) {
      container.addEventListener(type, function (event) {
        event.stopPropagation();
      });
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
      '<input id="local-save-category" list="local-save-categories" autocomplete="off">' +
      '<datalist id="local-save-categories"></datalist>' +
      '<button type="submit">Save instance</button>' +
      '<button type="button" id="local-import">Import graph file</button>' +
      '<input type="file" id="local-import-file" accept=".json,.desmosplus.json,application/json" hidden>' +
      "</form>" +
      '<div class="local-filters">' +
      '<label for="local-product-filter">Calculator</label>' +
      '<select id="local-product-filter"><option value="">All calculators</option></select>' +
      '<label for="local-category-filter">Category</label>' +
      '<select id="local-category-filter"><option value="">All categories</option></select>' +
      "</div>" +
      '<div id="local-save-list"></div>' +
      '<div id="local-save-status" aria-live="polite"></div>';
    document.body.appendChild(panel);
    isolateControls(panel);

    document.getElementById("local-save-category").value = productName(product());
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
    document.getElementById("local-close").addEventListener("click", closePanel);
    document.getElementById("local-product-filter").addEventListener("change", render);
    document.getElementById("local-category-filter").addEventListener("change", render);
    render();
  }

  function togglePanel() {
    var panel = document.getElementById("local-save-panel");
    if (panel.hidden) openPanel();
    else closePanel();
  }

  function openPanel() {
    document.getElementById("local-save-panel").hidden = false;
    document.getElementById("local-library").setAttribute("aria-expanded", "true");
    render();
  }

  function closePanel() {
    document.getElementById("local-save-panel").hidden = true;
    document.getElementById("local-library").setAttribute("aria-expanded", "false");
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
        name: safeName(wrapped && imported.name, file.name.replace(/\.(desmosplus\.)?json$/i, "")),
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

  function render() {
    var store = readStore();
    var productFilter = document.getElementById("local-product-filter");
    var categoryFilter = document.getElementById("local-category-filter");
    var datalist = document.getElementById("local-save-categories");
    var list = document.getElementById("local-save-list");
    if (!productFilter || !categoryFilter || !datalist || !list) return;

    var selectedProduct = productFilter.value;
    var selectedCategory = categoryFilter.value;
    productFilter.innerHTML =
      '<option value="">All calculators</option>' +
      PRODUCTS.map(function (entry) {
        return (
          '<option value="' +
          escapeHtml(entry[0]) +
          '">' +
          escapeHtml(entry[1]) +
          "</option>"
        );
      }).join("");
    productFilter.value = selectedProduct;

    var cats = categories(store, selectedProduct);
    datalist.innerHTML = cats
      .map(function (category) {
        return '<option value="' + escapeHtml(category) + '"></option>';
      })
      .join("");
    categoryFilter.innerHTML =
      '<option value="">All categories</option>' +
      cats
        .map(function (category) {
          return (
            '<option value="' +
            escapeHtml(category) +
            '">' +
            escapeHtml(category) +
            "</option>"
          );
        })
        .join("");
    categoryFilter.value = cats.indexOf(selectedCategory) === -1 ? "" : selectedCategory;

    var saves = store.saves
      .filter(function (save) {
        return (
          (!productFilter.value || save.product === productFilter.value) &&
          (!categoryFilter.value || save.category === categoryFilter.value)
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
    buildShell();
    setTurboSpeed(readTurboSpeed(), false);
    buildPanel();
    interceptBuiltInSave();
    setInterval(keepBuiltInSaveLocal, 500);
    var timer = setInterval(function () {
      var ready = apiReady();
      document.documentElement.setAttribute("data-local-save-api", ready ? "ready" : "waiting");
      if (!ready) return;
      clearInterval(timer);
      installTurbo();
      var id = pendingSaveId();
      if (id) openSave(id);
      else status("Local saves ready.");
    }, 250);
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
  };
})();
