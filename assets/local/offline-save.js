(function () {
  "use strict";

  var STORE_KEY = "desmos.offline.saves.v1";
  var COOKIE_KEY = "desmos_offline_saves_v1";
  var COOKIE_AGE = 60 * 60 * 24 * 365 * 20;
  var CHUNK_SIZE = 3200;
  var loadedId = "";

  function product() {
    var path = window.location.pathname;
    if (path.indexOf("3dcalculator") !== -1) return "3dcalculator";
    if (path.indexOf("geometry") !== -1) return "geometry";
    if (path.indexOf("matrix") !== -1) return "matrix";
    if (path.indexOf("notebook") !== -1) return "notebook";
    if (path.indexOf("fourfunction") !== -1) return "fourfunction";
    if (path.indexOf("scientific") !== -1) return "scientific";
    return "2dcalculator";
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
    var current = api();
    if (!current || typeof current.getState !== "function") {
      throw new Error("Calculator is not ready yet.");
    }
    return current.getState();
  }

  function setState(state) {
    var current = api();
    if (!current || typeof current.setState !== "function") {
      throw new Error("Calculator is not ready yet.");
    }
    current.setState(state, { allowUndo: true });
  }

  function cookieMap() {
    return document.cookie.split(";").reduce(function (map, part) {
      var index = part.indexOf("=");
      if (index === -1) return map;
      var key = part.slice(0, index).trim();
      map[key] = part.slice(index + 1);
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
    if (!count) return "";
    var value = "";
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
      if (!Array.isArray(parsed.saves)) return blankStore();
      return parsed;
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

  function categories(store) {
    var set = {};
    store.saves.forEach(function (save) {
      if (save.product === product()) set[save.category || product()] = true;
    });
    set[product()] = true;
    return Object.keys(set).sort();
  }

  function visibleSaves(store, category) {
    return store.saves
      .filter(function (save) {
        return save.product === product() && (!category || save.category === category);
      })
      .sort(function (a, b) {
        return (b.updatedAt || "").localeCompare(a.updatedAt || "");
      });
  }

  function safeName(value, fallback) {
    var trimmed = String(value || "").trim();
    return trimmed || fallback;
  }

  function buildPanel() {
    if (document.getElementById("local-save-panel")) return;

    var panel = document.createElement("section");
    panel.id = "local-save-panel";
    panel.innerHTML =
      '<form id="local-save-form">' +
      "<label>Name<br><input id=\"local-save-name\" autocomplete=\"off\"></label>" +
      "<label>Category<br><input id=\"local-save-category\" list=\"local-save-categories\" autocomplete=\"off\"></label>" +
      '<datalist id="local-save-categories"></datalist>' +
      '<div class="local-save-actions">' +
      '<button type="submit">Save</button> ' +
      '<button type="button" id="local-new">New</button>' +
      "</div>" +
      "</form>" +
      '<div class="local-save-row">' +
      "Open<br><select id=\"local-open-category\"></select>" +
      "</div>" +
      '<div id="local-save-list"></div>' +
      '<div id="local-save-status" aria-live="polite"></div>';
    document.body.appendChild(panel);

    document.getElementById("local-save-category").value = product();
    document.getElementById("local-save-name").value = "Untitled";

    panel.addEventListener("submit", function (event) {
      event.preventDefault();
      saveCurrent();
    });

    document.getElementById("local-new").addEventListener("click", function () {
      loadedId = "";
      document.getElementById("local-save-name").value = "Untitled";
      var current = api();
      if (current && typeof current.setBlank === "function") current.setBlank();
    });

    render();
  }

  function status(message) {
    var node = document.getElementById("local-save-status");
    if (node) node.textContent = message;
  }

  function saveCurrent() {
    try {
      if (!apiReady()) {
        status("Calculator is still loading.");
        return;
      }
      var store = readStore();
      var now = new Date().toISOString();
      var category = safeName(document.getElementById("local-save-category").value, product());
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
    var store = readStore();
    var save = store.saves.find(function (entry) {
      return entry.id === id;
    });
    if (!save) return;
    try {
      setState(save.state);
      loadedId = save.id;
      document.getElementById("local-save-name").value = save.name;
      document.getElementById("local-save-category").value = save.category;
      render();
      status("Opened local save.");
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
    status("Deleted local save.");
  }

  function render() {
    var store = readStore();
    var categoryInput = document.getElementById("local-save-category");
    var openCategory = document.getElementById("local-open-category");
    var datalist = document.getElementById("local-save-categories");
    var list = document.getElementById("local-save-list");
    if (!categoryInput || !openCategory || !datalist || !list) return;

    var currentCategory = openCategory.value || categoryInput.value || product();
    var cats = categories(store);
    datalist.innerHTML = cats
      .map(function (category) {
        return '<option value="' + escapeHtml(category) + '"></option>';
      })
      .join("");
    openCategory.innerHTML = cats
      .map(function (category) {
        return '<option value="' + escapeHtml(category) + '">' + escapeHtml(category) + "</option>";
      })
      .join("");
    openCategory.value = cats.indexOf(currentCategory) === -1 ? cats[0] : currentCategory;
    openCategory.onchange = render;

    var saves = visibleSaves(store, openCategory.value);
    list.innerHTML = saves.length
      ? saves
          .map(function (save) {
            return (
              '<div class="local-save-row">' +
              '<button type="button" data-open="' +
              escapeHtml(save.id) +
              '">' +
              escapeHtml(save.name) +
              "</button>" +
              '<button type="button" data-delete="' +
              escapeHtml(save.id) +
              '">Delete</button>' +
              "</div>"
            );
          })
          .join("")
      : "No local saves.";

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
        if (!(event.ctrlKey || event.metaKey) || event.shiftKey || event.key.toLowerCase() !== "s") return;
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
  }

  function boot() {
    buildPanel();
    interceptBuiltInSave();
    setInterval(keepBuiltInSaveLocal, 500);
    var timer = setInterval(function () {
      document.documentElement.setAttribute("data-local-save-api", apiReady() ? "ready" : "waiting");
      if (apiReady()) {
        clearInterval(timer);
        status("Local saves ready.");
      }
    }, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
