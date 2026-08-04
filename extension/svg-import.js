(function (root) {
  "use strict";

  var MAX_SVG_BYTES = 1024 * 1024;
  var ANIMATION_ELEMENTS = {
    animate: true,
    animatemotion: true,
    animatetransform: true,
    discard: true,
    set: true,
  };
  var UNSAFE_ELEMENTS = {
    audio: true,
    embed: true,
    foreignobject: true,
    iframe: true,
    object: true,
    script: true,
    video: true,
  };

  function supportedProduct(product) {
    return product === "2dcalculator" || product === "geometry";
  }

  function svgName(fileName) {
    return String(fileName || "Imported SVG").replace(/\.svg$/i, "") || "Imported SVG";
  }

  function lengthInPixels(value) {
    var match = String(value || "")
      .trim()
      .match(/^([0-9]*\.?[0-9]+)(px|pt|pc|in|cm|mm|q)?$/i);
    if (!match) return 0;
    var amount = Number(match[1]);
    var unit = (match[2] || "px").toLowerCase();
    var scale = {
      px: 1,
      pt: 96 / 72,
      pc: 16,
      in: 96,
      cm: 96 / 2.54,
      mm: 96 / 25.4,
      q: 96 / 101.6,
    }[unit];
    return Number.isFinite(amount) && amount > 0 ? amount * scale : 0;
  }

  function sourceDimensions(svg) {
    var viewBox = String(svg.getAttribute("viewBox") || "")
      .trim()
      .split(/[\s,]+/)
      .map(Number);
    if (
      viewBox.length === 4 &&
      viewBox.every(Number.isFinite) &&
      viewBox[2] > 0 &&
      viewBox[3] > 0
    ) {
      return { width: viewBox[2], height: viewBox[3] };
    }

    var width = lengthInPixels(svg.getAttribute("width"));
    var height = lengthInPixels(svg.getAttribute("height"));
    return width && height ? { width: width, height: height } : { width: 1, height: 1 };
  }

  function graphDimensions(dimensions) {
    var ratio = dimensions.width / dimensions.height;
    var width = ratio >= 1 ? 10 : 10 * ratio;
    var height = ratio >= 1 ? 10 / ratio : 10;
    return {
      width: String(Math.max(0.1, Math.round(width * 10) / 10)),
      height: String(Math.max(0.1, Math.round(height * 10) / 10)),
    };
  }

  function hasExternalUrl(value) {
    var urls = String(value || "").match(/url\(([^)]+)\)/gi) || [];
    return urls.some(function (entry) {
      var target = entry
        .slice(4, -1)
        .trim()
        .replace(/^['"]|['"]$/g, "");
      return target && target.charAt(0) !== "#";
    });
  }

  function validateElements(svg) {
    var nodes = [svg].concat(Array.from(svg.querySelectorAll("*")));
    for (var i = 0; i < nodes.length; i += 1) {
      var node = nodes[i];
      var localName = String(node.localName || node.nodeName).toLowerCase();
      if (ANIMATION_ELEMENTS[localName]) {
        throw new Error("Animated SVG files are not supported.");
      }
      if (UNSAFE_ELEMENTS[localName]) {
        throw new Error("SVG scripts and embedded content are not supported.");
      }

      for (var j = 0; j < node.attributes.length; j += 1) {
        var attribute = node.attributes[j];
        var name = attribute.name.toLowerCase();
        var value = attribute.value.trim();
        if (name.indexOf("on") === 0) {
          throw new Error("SVG event scripts are not supported.");
        }
        if (hasExternalUrl(value)) {
          throw new Error("Embedded or external SVG resources are not supported.");
        }
        if (
          (name === "href" || name === "xlink:href" || name === "src") &&
          value &&
          value.charAt(0) !== "#"
        ) {
          throw new Error("Embedded or external SVG resources are not supported.");
        }
      }
    }
  }

  function validateStyles(svg) {
    var css = Array.from(svg.querySelectorAll("style"))
      .map(function (style) {
        return style.textContent || "";
      })
      .join("\n");
    var styledNodes = (svg.hasAttribute("style") ? [svg] : []).concat(
      Array.from(svg.querySelectorAll("[style]")),
    );
    var inlineStyles = styledNodes
      .map(function (node) {
        return node.getAttribute("style") || "";
      })
      .join("\n");
    var styles = css + "\n" + inlineStyles;
    if (/@import/i.test(styles)) {
      throw new Error("Embedded or external SVG resources are not supported.");
    }
    if (/@keyframes|\banimation(?:-name)?\s*:|\btransition\s*:/i.test(styles)) {
      throw new Error("Animated SVG files are not supported.");
    }
    if (hasExternalUrl(styles)) {
      throw new Error("Embedded or external SVG resources are not supported.");
    }
  }

  function encodeSvg(value) {
    var bytes = new TextEncoder().encode(value);
    var chunks = [];
    for (var i = 0; i < bytes.length; i += 32768) {
      chunks.push(String.fromCharCode.apply(null, bytes.subarray(i, i + 32768)));
    }
    return "data:image/svg+xml;base64," + btoa(chunks.join(""));
  }

  function parse(text, fileName) {
    if (new TextEncoder().encode(text).length > MAX_SVG_BYTES) {
      throw new Error("SVG files must be 1 MB or smaller.");
    }
    if (/<!doctype|<!entity/i.test(text)) {
      throw new Error("SVG document types and entities are not supported.");
    }

    var documentNode = new DOMParser().parseFromString(text, "image/svg+xml");
    var parserError = documentNode.querySelector("parsererror");
    var svg = documentNode.documentElement;
    if (parserError || !svg || String(svg.localName).toLowerCase() !== "svg") {
      throw new Error("Invalid SVG file.");
    }

    validateElements(svg);
    validateStyles(svg);
    if (!svg.getAttribute("xmlns")) svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    var dimensions = graphDimensions(sourceDimensions(svg));
    var serialized = new XMLSerializer().serializeToString(svg);
    return {
      type: "image",
      id:
        "svg_" +
        Date.now().toString(36) +
        "_" +
        Math.random().toString(36).slice(2, 8),
      image_url: encodeSvg(serialized),
      name: svgName(fileName),
      center: "\\left(0,0\\right)",
      angle: "0",
      width: dimensions.width,
      height: dimensions.height,
      opacity: "1",
    };
  }

  root.DesmosPlusSvg = {
    parse: parse,
    supportedProduct: supportedProduct,
  };
})(globalThis);
