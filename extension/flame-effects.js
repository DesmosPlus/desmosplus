(function () {
  "use strict";

  var PURPLE = [167 / 255, 1 / 255, 1];
  var BLUE = [54 / 255, 0, 1];
  var OPTION_CONFIG = {
    color: PURPLE,
    intensity: 0.58,
    height: 82,
    spread: 8,
    radius: 6,
    speed: 0.25,
    scale: 0.75,
    turbulence: 0.58,
    turbulenceScale: 0.5,
    turbulenceReach: 25,
    sparks: 1.5,
    sparkSize: 0.35,
    sparkDensity: 1,
    sparkSpeed: 1,
    rim: 2.5,
    melt: 4.5,
    distortion: 10,
    smoke: 1.5,
    ember: 2,
    scorch: 0,
  };
  var FRAME_CONFIG = Object.assign({}, OPTION_CONFIG, {
    height: 112,
    turbulenceReach: 25,
    sparks: 1.5,
    melt: 4.5,
    distortion: 10,
    smoke: 1.5,
  });
  var state = { view: "graph", menuOpen: false, maxActive: false };
  var optionInstance = null;
  var frameInstance = null;
  var optionHighlighted = false;
  var maxWrap = document.getElementById("desaudify-max-flame-wrap");
  var maxOption = document.getElementById("desaudify-max-option");
  var maxCanvas = document.getElementById("desaudify-max-flame-canvas");
  var frameTarget = document.getElementById("desaudify-flame-frame");
  var frameCanvas = document.getElementById("desaudify-flame-canvas");

  function flameApi() {
    return window.CanvasUIFlameWrap || null;
  }

  function createEffect(target, canvas, options) {
    var api = flameApi();
    if (!api || typeof api.createFlameWrap !== "function") return null;
    canvas.hidden = false;
    var instance = api.createFlameWrap(
      {
        source: { getContext: function () { return null; } },
        content: target,
        output: canvas,
      },
      options,
    );
    if (!instance) canvas.hidden = true;
    return instance;
  }

  function destroyEffect(instance, canvas) {
    if (instance) instance.destroy();
    canvas.hidden = true;
    return null;
  }

  function optionColor() {
    if (optionInstance) {
      optionInstance.setOptions({ color: optionHighlighted ? BLUE : PURPLE });
    }
    maxWrap.setAttribute("data-highlighted", String(optionHighlighted));
  }

  function setOptionHighlighted(value) {
    optionHighlighted = value;
    optionColor();
  }

  function render() {
    var inDesAudify = state.view === "desaudify";
    var showOption = inDesAudify && state.menuOpen;
    var showFrame = inDesAudify && state.maxActive;

    document.body.setAttribute("data-desaudify-view", String(inDesAudify));
    document.body.setAttribute("data-max-flame", String(showFrame));
    maxWrap.setAttribute("data-flame-active", String(showOption));

    if (showOption && !optionInstance) {
      optionInstance = createEffect(maxOption, maxCanvas, OPTION_CONFIG);
      optionColor();
    } else if (!showOption && optionInstance) {
      optionInstance = destroyEffect(optionInstance, maxCanvas);
      setOptionHighlighted(false);
    } else if (showOption && optionInstance) {
      optionInstance.resize();
    }

    if (showFrame && !frameInstance) {
      frameInstance = createEffect(frameTarget, frameCanvas, FRAME_CONFIG);
    } else if (!showFrame && frameInstance) {
      frameInstance = destroyEffect(frameInstance, frameCanvas);
    } else if (showFrame && frameInstance) {
      frameInstance.resize();
    }
  }

  maxWrap.addEventListener("pointerenter", function () {
    setOptionHighlighted(true);
  });
  maxWrap.addEventListener("pointerleave", function () {
    setOptionHighlighted(document.activeElement === maxOption);
  });
  maxOption.addEventListener("focus", function () {
    setOptionHighlighted(true);
  });
  maxOption.addEventListener("blur", function () {
    setOptionHighlighted(maxWrap.matches(":hover"));
  });
  window.addEventListener("pagehide", function () {
    optionInstance = destroyEffect(optionInstance, maxCanvas);
    frameInstance = destroyEffect(frameInstance, frameCanvas);
  });

  window.DesmosPlusFlameEffects = {
    setState: function (next) {
      Object.assign(state, next);
      render();
    },
    destroy: function () {
      optionInstance = destroyEffect(optionInstance, maxCanvas);
      frameInstance = destroyEffect(frameInstance, frameCanvas);
    },
  };
})();
