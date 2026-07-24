(function () {
  "use strict";

  var STORE_KEY = "desmos.offline.saves.v1";
  var COOKIE_KEY = "desmos_offline_saves_v1";
  var COOKIE_AGE = 60 * 60 * 24 * 365 * 20;
  var CHUNK_SIZE = 3200;
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
      '<label class="desmosplus-product-label" for="desmosplus-product">Calculator</label>' +
      '<select id="desmosplus-product" aria-label="Calculator">' +
      PRODUCTS.map(function (entry) {
        return (
          '<option value="' +
          escapeHtml(entry[0]) +
          '"' +
          (entry[0] === product() ? " selected" : "") +
          ">" +
          escapeHtml(entry[1]) +
          "</option>"
        );
      }).join("") +
      "</select>" +
      '<div class="desmosplus-actions">' +
      '<button type="button" id="local-new">New</button>' +
      '<button type="button" id="local-save">Save</button>' +
      '<button type="button" id="local-library" aria-expanded="false">Library</button>' +
      "</div>";
    document.body.appendChild(shell);

    document.getElementById("desmosplus-product").addEventListener("change", function (event) {
      window.location.href = productPath(event.target.value);
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

    document.getElementById("local-save-category").value = productName(product());
    document.getElementById("local-save-form").addEventListener("submit", function (event) {
      event.preventDefault();
      saveCurrent();
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
      node.setAttribute("aria-label", node.getAttribute("aria-label").replaceAll("Desmos", "DesmosPlus"));
    });
  }

  function pendingSaveId() {
    return new URLSearchParams(window.location.hash.slice(1)).get("save") || "";
  }

  function boot() {
    buildShell();
    buildPanel();
    interceptBuiltInSave();
    setInterval(keepBuiltInSaveLocal, 500);
    var timer = setInterval(function () {
      var ready = apiReady();
      document.documentElement.setAttribute("data-local-save-api", ready ? "ready" : "waiting");
      if (!ready) return;
      clearInterval(timer);
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
})();
