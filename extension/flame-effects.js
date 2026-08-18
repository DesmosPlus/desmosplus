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
  var state = { view: "graph", menuOpen: false, maxActive: false, objMaxActive: false };
  var frameInstance = null;
  var optionEffects = [
    {
      view: "desaudify",
      wrap: document.getElementById("desaudify-max-flame-wrap"),
      option: document.getElementById("desaudify-max-option"),
      canvas: document.getElementById("desaudify-max-flame-canvas"),
      instance: null,
      highlighted: false,
    },
    {
      view: "three-d",
      wrap: document.getElementById("obj-max-flame-wrap"),
      option: document.getElementById("obj-max-option"),
      canvas: document.getElementById("obj-max-flame-canvas"),
      instance: null,
      highlighted: false,
    },
  ];
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

  function optionColor(effect) {
    if (effect.instance) {
      effect.instance.setOptions({ color: effect.highlighted ? BLUE : PURPLE });
    }
    effect.wrap.setAttribute("data-highlighted", String(effect.highlighted));
  }

  function setOptionHighlighted(effect, value) {
    effect.highlighted = value;
    render();
  }

  function syncOptionEffect(effect, visible) {
    effect.wrap.setAttribute("data-flame-active", String(visible));
    if (visible && !effect.instance) {
      effect.instance = createEffect(effect.option, effect.canvas, OPTION_CONFIG);
      optionColor(effect);
    } else if (!visible && effect.instance) {
      effect.instance = destroyEffect(effect.instance, effect.canvas);
    } else if (visible && effect.instance) {
      optionColor(effect);
      effect.instance.resize();
    }
  }

  function render() {
    var inDesAudify = state.view === "desaudify";
    var inObj = state.view === "three-d";
    var showFrame = (inDesAudify && state.maxActive) || (inObj && state.objMaxActive);

    document.body.setAttribute("data-desaudify-view", String(inDesAudify));
    document.body.setAttribute("data-max-flame", String(showFrame));
    syncOptionEffect(optionEffects[0], inDesAudify && state.menuOpen);
    syncOptionEffect(
      optionEffects[1],
      inObj && (state.objMaxActive || optionEffects[1].highlighted),
    );

    if (showFrame && !frameInstance) {
      frameInstance = createEffect(frameTarget, frameCanvas, FRAME_CONFIG);
    } else if (!showFrame && frameInstance) {
      frameInstance = destroyEffect(frameInstance, frameCanvas);
    } else if (showFrame && frameInstance) {
      frameInstance.resize();
    }
  }

  optionEffects.forEach(function (effect) {
    effect.wrap.addEventListener("pointerenter", function () {
      setOptionHighlighted(effect, true);
    });
    effect.wrap.addEventListener("pointerleave", function () {
      setOptionHighlighted(effect, document.activeElement === effect.option);
    });
    effect.option.addEventListener("focus", function () {
      setOptionHighlighted(effect, true);
    });
    effect.option.addEventListener("blur", function () {
      setOptionHighlighted(effect, effect.wrap.matches(":hover"));
    });
  });
  window.addEventListener("pagehide", function () {
    optionEffects.forEach(function (effect) {
      effect.instance = destroyEffect(effect.instance, effect.canvas);
    });
    frameInstance = destroyEffect(frameInstance, frameCanvas);
  });

  window.DesmosPlusFlameEffects = {
    setState: function (next) {
      Object.assign(state, next);
      render();
    },
    destroy: function () {
      optionEffects.forEach(function (effect) {
        effect.instance = destroyEffect(effect.instance, effect.canvas);
      });
      frameInstance = destroyEffect(frameInstance, frameCanvas);
    },
  };
})();
