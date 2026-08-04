(function (root) {
  "use strict";

  var MAX_SVG_BYTES = 1024 * 1024;
  var MAX_GEOMETRIES = 200;
  var MAX_EXPRESSIONS = 400;
  var MAX_TOTAL_POINTS = 6000;
  var MAX_POINTS_PER_SHAPE = 320;
  var GEOMETRY_SELECTOR = "path,rect,circle,ellipse,line,polyline,polygon";
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
  var UNSUPPORTED_ELEMENTS = {
    clippath: true,
    filter: true,
    image: true,
    marker: true,
    mask: true,
    pattern: true,
    symbol: true,
    text: true,
    textpath: true,
    tspan: true,
    use: true,
  };

  function supportedProduct(product) {
    return product === "2dcalculator" || product === "geometry";
  }

  function svgName(fileName) {
    return String(fileName || "Imported SVG").replace(/\.svg$/i, "") || "Imported SVG";
  }

  function byteLength(value) {
    return new TextEncoder().encode(value).length;
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
    return width && height ? { width: width, height: height } : { width: 100, height: 100 };
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
      if (UNSUPPORTED_ELEMENTS[localName]) {
        throw new Error(
          "SVG text, images, clipping, filters, patterns, and reusable symbols must be converted to paths first.",
        );
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

  function matrixPoint(matrix, point) {
    return {
      x: matrix.a * point.x + matrix.c * point.y + matrix.e,
      y: matrix.b * point.x + matrix.d * point.y + matrix.f,
    };
  }

  function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function pointToSegmentDistance(point, start, end) {
    var dx = end.x - start.x;
    var dy = end.y - start.y;
    if (!dx && !dy) return distance(point, start);
    var t = ((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy);
    t = Math.max(0, Math.min(1, t));
    return distance(point, { x: start.x + t * dx, y: start.y + t * dy });
  }

  function simplify(points, tolerance) {
    if (points.length <= 2) return points.slice();
    var farthest = 0;
    var index = 0;
    for (var i = 1; i < points.length - 1; i += 1) {
      var current = pointToSegmentDistance(points[i], points[0], points[points.length - 1]);
      if (current > farthest) {
        farthest = current;
        index = i;
      }
    }
    if (farthest <= tolerance) return [points[0], points[points.length - 1]];
    var left = simplify(points.slice(0, index + 1), tolerance);
    var right = simplify(points.slice(index), tolerance);
    return left.slice(0, -1).concat(right);
  }

  function visible(element, svg) {
    var current = element;
    while (current && current !== svg.parentNode) {
      var style = root.getComputedStyle(current);
      if (style.display === "none" || style.visibility === "hidden") return false;
      current = current.parentElement;
    }
    return true;
  }

  function opacityFor(element, svg) {
    var opacity = 1;
    var current = element;
    while (current && current !== svg.parentNode) {
      var value = Number.parseFloat(root.getComputedStyle(current).opacity);
      if (Number.isFinite(value)) opacity *= value;
      current = current.parentElement;
    }
    return Math.max(0, Math.min(1, opacity));
  }

  function colorInfo(value) {
    var normalized = String(value || "").trim().toLowerCase();
    if (!normalized || normalized === "none" || normalized === "transparent") return null;
    var hex = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
    if (hex) {
      var raw = hex[1];
      if (raw.length === 3) raw = raw.replace(/(.)/g, "$1$1");
      var alpha = raw.length === 8 ? parseInt(raw.slice(6), 16) / 255 : 1;
      return { color: "#" + raw.slice(0, 6), alpha: alpha };
    }
    var rgb = normalized.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+)%?)?\s*\)$/);
    if (rgb) {
      var toHex = function (part) {
        return Math.max(0, Math.min(255, Math.round(Number(part))))
          .toString(16)
          .padStart(2, "0");
      };
      var alphaValue = rgb[4] === undefined ? 1 : Number(rgb[4]);
      if (normalized.indexOf("%") !== -1 && rgb[4] !== undefined) alphaValue /= 100;
      return {
        color: "#" + toHex(rgb[1]) + toHex(rgb[2]) + toHex(rgb[3]),
        alpha: Math.max(0, Math.min(1, alphaValue)),
      };
    }
    return { color: "#000000", alpha: 1 };
  }

  function styleOpacity(style, property) {
    var value = Number.parseFloat(style[property]);
    return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 1;
  }

  function sampleGeometry(element, svg, sourceMax) {
    if (!visible(element, svg)) return null;
    var length;
    var matrix;
    try {
      length = element.getTotalLength();
      matrix = element.getCTM();
    } catch (error) {
      return null;
    }
    if (!Number.isFinite(length) || length <= 0 || !matrix) return null;

    var targetStep = Math.max(sourceMax / 180, 0.05);
    var sampleCount = Math.max(2, Math.min(700, Math.ceil(length / targetStep) + 1));
    var nominalStep = length / Math.max(1, sampleCount - 1);
    var splitDistance = Math.max(nominalStep * 6, sourceMax / 25);
    var segments = [[]];
    var previousLocal = null;

    for (var i = 0; i < sampleCount; i += 1) {
      var local = element.getPointAtLength((length * i) / (sampleCount - 1));
      if (previousLocal && distance(local, previousLocal) > splitDistance) segments.push([]);
      var transformed = matrixPoint(matrix, local);
      var segment = segments[segments.length - 1];
      if (!segment.length || distance(segment[segment.length - 1], transformed) > 0.000001) {
        segment.push(transformed);
      }
      previousLocal = local;
    }

    segments = segments.filter(function (segment) {
      return segment.length >= 2;
    });
    if (!segments.length) return null;
    return {
      element: element,
      segments: segments,
      style: root.getComputedStyle(element),
      opacity: opacityFor(element, svg),
    };
  }

  function boundsFor(shapes) {
    var bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
    shapes.forEach(function (shape) {
      shape.segments.forEach(function (segment) {
        segment.forEach(function (point) {
          bounds.minX = Math.min(bounds.minX, point.x);
          bounds.minY = Math.min(bounds.minY, point.y);
          bounds.maxX = Math.max(bounds.maxX, point.x);
          bounds.maxY = Math.max(bounds.maxY, point.y);
        });
      });
    });
    return bounds;
  }

  function downsample(points, limit) {
    if (points.length <= limit) return points;
    var result = [];
    for (var i = 0; i < limit; i += 1) {
      result.push(points[Math.round((i * (points.length - 1)) / (limit - 1))]);
    }
    return result;
  }

  function formatNumber(value) {
    var rounded = Number(value.toFixed(4));
    return String(Object.is(rounded, -0) ? 0 : rounded);
  }

  function pointLatex(point) {
    return "\\left(" + formatNumber(point.x) + "," + formatNumber(point.y) + "\\right)";
  }

  function opacityString(value) {
    return formatNumber(Math.max(0, Math.min(1, value)));
  }

  function expressionId(base, index) {
    return base + "_" + String(index + 1);
  }

  function convert(svg, name) {
    var dimensions = sourceDimensions(svg);
    var sourceMax = Math.max(dimensions.width, dimensions.height);
    var mounted = root.document.importNode(svg, true);
    mounted.setAttribute("width", String(dimensions.width));
    mounted.setAttribute("height", String(dimensions.height));
    mounted.style.position = "fixed";
    mounted.style.left = "-100000px";
    mounted.style.top = "-100000px";
    mounted.style.pointerEvents = "none";
    mounted.style.width = dimensions.width + "px";
    mounted.style.height = dimensions.height + "px";
    root.document.body.appendChild(mounted);

    try {
      var geometries = Array.from(mounted.querySelectorAll(GEOMETRY_SELECTOR));
      if (geometries.length > MAX_GEOMETRIES) {
        throw new Error("SVG files may contain at most " + MAX_GEOMETRIES + " shapes.");
      }
      var shapes = geometries
        .map(function (element) {
          return sampleGeometry(element, mounted, sourceMax);
        })
        .filter(Boolean);
      if (!shapes.length) throw new Error("The SVG does not contain supported visible shapes.");

      var bounds = boundsFor(shapes);
      var width = bounds.maxX - bounds.minX;
      var height = bounds.maxY - bounds.minY;
      var span = Math.max(width, height);
      if (!Number.isFinite(span) || span <= 0) throw new Error("The SVG has no drawable area.");
      var centerX = (bounds.minX + bounds.maxX) / 2;
      var centerY = (bounds.minY + bounds.maxY) / 2;
      var scale = 10 / span;
      var simplifyTolerance = span / 900;
      var totalPoints = 0;
      var base = "svg_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
      var folderId = base + "_folder";
      var expressions = [{ type: "folder", id: folderId, title: name, collapsed: false }];

      shapes.forEach(function (shape) {
        var style = shape.style;
        var fill = colorInfo(style.fill);
        var stroke = colorInfo(style.stroke);
        var commonOpacity = shape.opacity;
        var fillOpacity = fill
          ? commonOpacity * fill.alpha * styleOpacity(style, "fillOpacity")
          : 0;
        var strokeOpacity = stroke
          ? commonOpacity * stroke.alpha * styleOpacity(style, "strokeOpacity")
          : 0;
        var strokeWidth = Math.max(0.5, Math.min(10, Number.parseFloat(style.strokeWidth) || 1));

        shape.segments.forEach(function (rawSegment) {
          var closed = distance(rawSegment[0], rawSegment[rawSegment.length - 1]) <= span / 1000;
          var simplified = simplify(rawSegment, simplifyTolerance);
          if (closed && distance(simplified[0], simplified[simplified.length - 1]) > span / 1000) {
            simplified.push(simplified[0]);
          }
          simplified = downsample(simplified, MAX_POINTS_PER_SHAPE);
          var normalized = simplified.map(function (point) {
            return { x: (point.x - centerX) * scale, y: (centerY - point.y) * scale };
          });
          totalPoints += normalized.length;
          if (totalPoints > MAX_TOTAL_POINTS) {
            throw new Error("SVG conversion exceeded the " + MAX_TOTAL_POINTS + " point limit.");
          }

          var points = normalized.map(pointLatex);
          var canFill = fill && fillOpacity > 0 && normalized.length >= 3;
          var sameStroke = stroke && fill && stroke.color === fill.color;
          if (canFill) {
            expressions.push({
              type: "expression",
              id: expressionId(base, expressions.length - 1),
              folderId: folderId,
              latex: "\\operatorname{polygon}\\left(" + points.join(",") + "\\right)",
              color: fill.color,
              fillOpacity: opacityString(fillOpacity),
              lineOpacity: opacityString(sameStroke ? strokeOpacity : 0),
              lineWidth: String(strokeWidth),
            });
          }
          if (stroke && strokeOpacity > 0 && (!canFill || !sameStroke)) {
            expressions.push({
              type: "expression",
              id: expressionId(base, expressions.length - 1),
              folderId: folderId,
              latex: "\\left[" + points.join(",") + "\\right]",
              color: stroke.color,
              points: false,
              lines: true,
              lineOpacity: opacityString(strokeOpacity),
              lineWidth: String(strokeWidth),
            });
          }
          if (expressions.length - 1 > MAX_EXPRESSIONS) {
            throw new Error("SVG conversion exceeded the " + MAX_EXPRESSIONS + " equation limit.");
          }
        });
      });

      if (expressions.length === 1) {
        throw new Error("The SVG does not contain visible filled or stroked shapes.");
      }
      return {
        name: name,
        expressions: expressions,
        equationCount: expressions.length - 1,
        pointCount: totalPoints,
      };
    } finally {
      mounted.remove();
    }
  }

  function parse(text, fileName) {
    if (byteLength(text) > MAX_SVG_BYTES) {
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
    return convert(svg, svgName(fileName));
  }

  root.DesmosPlusSvg = {
    parse: parse,
    supportedProduct: supportedProduct,
  };
})(globalThis);
