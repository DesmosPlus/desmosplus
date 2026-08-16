"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/js-tokens/index.js
  var require_js_tokens = __commonJS({
    "node_modules/js-tokens/index.js"(exports, module) {
      var HashbangComment;
      var Identifier;
      var JSXIdentifier;
      var JSXPunctuator;
      var JSXString;
      var JSXText;
      var KeywordsWithExpressionAfter;
      var KeywordsWithNoLineTerminatorAfter;
      var LineTerminatorSequence;
      var MultiLineComment;
      var Newline;
      var NumericLiteral;
      var Punctuator;
      var RegularExpressionLiteral;
      var SingleLineComment;
      var StringLiteral;
      var Template;
      var TokensNotPrecedingObjectLiteral;
      var TokensPrecedingExpression;
      var WhiteSpace;
      var jsTokens3;
      RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
      Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
      Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
      StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
      NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
      Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
      WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
      LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
      MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
      SingleLineComment = /\/\/.*/y;
      HashbangComment = /^#!.*/;
      JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
      JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
      JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
      JSXText = /[^<>{}]+/y;
      TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
      TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
      KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
      KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
      Newline = RegExp(LineTerminatorSequence.source);
      module.exports = jsTokens3 = function* (input, { jsx = false } = {}) {
        var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match2, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
        ({ length } = input);
        lastIndex = 0;
        lastSignificantToken = "";
        stack = [
          { tag: "JS" }
        ];
        braces = [];
        parenNesting = 0;
        postfixIncDec = false;
        if (match2 = HashbangComment.exec(input)) {
          yield {
            type: "HashbangComment",
            value: match2[0]
          };
          lastIndex = match2[0].length;
        }
        while (lastIndex < length) {
          mode = stack[stack.length - 1];
          switch (mode.tag) {
            case "JS":
            case "JSNonExpressionParen":
            case "InterpolationInTemplate":
            case "InterpolationInJSX":
              if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                RegularExpressionLiteral.lastIndex = lastIndex;
                if (match2 = RegularExpressionLiteral.exec(input)) {
                  lastIndex = RegularExpressionLiteral.lastIndex;
                  lastSignificantToken = match2[0];
                  postfixIncDec = true;
                  yield {
                    type: "RegularExpressionLiteral",
                    value: match2[0],
                    closed: match2[1] !== void 0 && match2[1] !== "\\"
                  };
                  continue;
                }
              }
              Punctuator.lastIndex = lastIndex;
              if (match2 = Punctuator.exec(input)) {
                punctuator = match2[0];
                nextLastIndex = Punctuator.lastIndex;
                nextLastSignificantToken = punctuator;
                switch (punctuator) {
                  case "(":
                    if (lastSignificantToken === "?NonExpressionParenKeyword") {
                      stack.push({
                        tag: "JSNonExpressionParen",
                        nesting: parenNesting
                      });
                    }
                    parenNesting++;
                    postfixIncDec = false;
                    break;
                  case ")":
                    parenNesting--;
                    postfixIncDec = true;
                    if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                      stack.pop();
                      nextLastSignificantToken = "?NonExpressionParenEnd";
                      postfixIncDec = false;
                    }
                    break;
                  case "{":
                    Punctuator.lastIndex = 0;
                    isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                    braces.push(isExpression);
                    postfixIncDec = false;
                    break;
                  case "}":
                    switch (mode.tag) {
                      case "InterpolationInTemplate":
                        if (braces.length === mode.nesting) {
                          Template.lastIndex = lastIndex;
                          match2 = Template.exec(input);
                          lastIndex = Template.lastIndex;
                          lastSignificantToken = match2[0];
                          if (match2[1] === "${") {
                            lastSignificantToken = "?InterpolationInTemplate";
                            postfixIncDec = false;
                            yield {
                              type: "TemplateMiddle",
                              value: match2[0]
                            };
                          } else {
                            stack.pop();
                            postfixIncDec = true;
                            yield {
                              type: "TemplateTail",
                              value: match2[0],
                              closed: match2[1] === "`"
                            };
                          }
                          continue;
                        }
                        break;
                      case "InterpolationInJSX":
                        if (braces.length === mode.nesting) {
                          stack.pop();
                          lastIndex += 1;
                          lastSignificantToken = "}";
                          yield {
                            type: "JSXPunctuator",
                            value: "}"
                          };
                          continue;
                        }
                    }
                    postfixIncDec = braces.pop();
                    nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                    break;
                  case "]":
                    postfixIncDec = true;
                    break;
                  case "++":
                  case "--":
                    nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                    break;
                  case "<":
                    if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                      stack.push({ tag: "JSXTag" });
                      lastIndex += 1;
                      lastSignificantToken = "<";
                      yield {
                        type: "JSXPunctuator",
                        value: punctuator
                      };
                      continue;
                    }
                    postfixIncDec = false;
                    break;
                  default:
                    postfixIncDec = false;
                }
                lastIndex = nextLastIndex;
                lastSignificantToken = nextLastSignificantToken;
                yield {
                  type: "Punctuator",
                  value: punctuator
                };
                continue;
              }
              Identifier.lastIndex = lastIndex;
              if (match2 = Identifier.exec(input)) {
                lastIndex = Identifier.lastIndex;
                nextLastSignificantToken = match2[0];
                switch (match2[0]) {
                  case "for":
                  case "if":
                  case "while":
                  case "with":
                    if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                      nextLastSignificantToken = "?NonExpressionParenKeyword";
                    }
                }
                lastSignificantToken = nextLastSignificantToken;
                postfixIncDec = !KeywordsWithExpressionAfter.test(match2[0]);
                yield {
                  type: match2[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
                  value: match2[0]
                };
                continue;
              }
              StringLiteral.lastIndex = lastIndex;
              if (match2 = StringLiteral.exec(input)) {
                lastIndex = StringLiteral.lastIndex;
                lastSignificantToken = match2[0];
                postfixIncDec = true;
                yield {
                  type: "StringLiteral",
                  value: match2[0],
                  closed: match2[2] !== void 0
                };
                continue;
              }
              NumericLiteral.lastIndex = lastIndex;
              if (match2 = NumericLiteral.exec(input)) {
                lastIndex = NumericLiteral.lastIndex;
                lastSignificantToken = match2[0];
                postfixIncDec = true;
                yield {
                  type: "NumericLiteral",
                  value: match2[0]
                };
                continue;
              }
              Template.lastIndex = lastIndex;
              if (match2 = Template.exec(input)) {
                lastIndex = Template.lastIndex;
                lastSignificantToken = match2[0];
                if (match2[1] === "${") {
                  lastSignificantToken = "?InterpolationInTemplate";
                  stack.push({
                    tag: "InterpolationInTemplate",
                    nesting: braces.length
                  });
                  postfixIncDec = false;
                  yield {
                    type: "TemplateHead",
                    value: match2[0]
                  };
                } else {
                  postfixIncDec = true;
                  yield {
                    type: "NoSubstitutionTemplate",
                    value: match2[0],
                    closed: match2[1] === "`"
                  };
                }
                continue;
              }
              break;
            case "JSXTag":
            case "JSXTagEnd":
              JSXPunctuator.lastIndex = lastIndex;
              if (match2 = JSXPunctuator.exec(input)) {
                lastIndex = JSXPunctuator.lastIndex;
                nextLastSignificantToken = match2[0];
                switch (match2[0]) {
                  case "<":
                    stack.push({ tag: "JSXTag" });
                    break;
                  case ">":
                    stack.pop();
                    if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                      nextLastSignificantToken = "?JSX";
                      postfixIncDec = true;
                    } else {
                      stack.push({ tag: "JSXChildren" });
                    }
                    break;
                  case "{":
                    stack.push({
                      tag: "InterpolationInJSX",
                      nesting: braces.length
                    });
                    nextLastSignificantToken = "?InterpolationInJSX";
                    postfixIncDec = false;
                    break;
                  case "/":
                    if (lastSignificantToken === "<") {
                      stack.pop();
                      if (stack[stack.length - 1].tag === "JSXChildren") {
                        stack.pop();
                      }
                      stack.push({ tag: "JSXTagEnd" });
                    }
                }
                lastSignificantToken = nextLastSignificantToken;
                yield {
                  type: "JSXPunctuator",
                  value: match2[0]
                };
                continue;
              }
              JSXIdentifier.lastIndex = lastIndex;
              if (match2 = JSXIdentifier.exec(input)) {
                lastIndex = JSXIdentifier.lastIndex;
                lastSignificantToken = match2[0];
                yield {
                  type: "JSXIdentifier",
                  value: match2[0]
                };
                continue;
              }
              JSXString.lastIndex = lastIndex;
              if (match2 = JSXString.exec(input)) {
                lastIndex = JSXString.lastIndex;
                lastSignificantToken = match2[0];
                yield {
                  type: "JSXString",
                  value: match2[0],
                  closed: match2[2] !== void 0
                };
                continue;
              }
              break;
            case "JSXChildren":
              JSXText.lastIndex = lastIndex;
              if (match2 = JSXText.exec(input)) {
                lastIndex = JSXText.lastIndex;
                lastSignificantToken = match2[0];
                yield {
                  type: "JSXText",
                  value: match2[0]
                };
                continue;
              }
              switch (input[lastIndex]) {
                case "<":
                  stack.push({ tag: "JSXTag" });
                  lastIndex++;
                  lastSignificantToken = "<";
                  yield {
                    type: "JSXPunctuator",
                    value: "<"
                  };
                  continue;
                case "{":
                  stack.push({
                    tag: "InterpolationInJSX",
                    nesting: braces.length
                  });
                  lastIndex++;
                  lastSignificantToken = "?InterpolationInJSX";
                  postfixIncDec = false;
                  yield {
                    type: "JSXPunctuator",
                    value: "{"
                  };
                  continue;
              }
          }
          WhiteSpace.lastIndex = lastIndex;
          if (match2 = WhiteSpace.exec(input)) {
            lastIndex = WhiteSpace.lastIndex;
            yield {
              type: "WhiteSpace",
              value: match2[0]
            };
            continue;
          }
          LineTerminatorSequence.lastIndex = lastIndex;
          if (match2 = LineTerminatorSequence.exec(input)) {
            lastIndex = LineTerminatorSequence.lastIndex;
            postfixIncDec = false;
            if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
              lastSignificantToken = "?NoLineTerminatorHere";
            }
            yield {
              type: "LineTerminatorSequence",
              value: match2[0]
            };
            continue;
          }
          MultiLineComment.lastIndex = lastIndex;
          if (match2 = MultiLineComment.exec(input)) {
            lastIndex = MultiLineComment.lastIndex;
            if (Newline.test(match2[0])) {
              postfixIncDec = false;
              if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
                lastSignificantToken = "?NoLineTerminatorHere";
              }
            }
            yield {
              type: "MultiLineComment",
              value: match2[0],
              closed: match2[1] !== void 0
            };
            continue;
          }
          SingleLineComment.lastIndex = lastIndex;
          if (match2 = SingleLineComment.exec(input)) {
            lastIndex = SingleLineComment.lastIndex;
            postfixIncDec = false;
            yield {
              type: "SingleLineComment",
              value: match2[0]
            };
            continue;
          }
          firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
          lastIndex += firstCodePoint.length;
          lastSignificantToken = firstCodePoint;
          postfixIncDec = false;
          yield {
            type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
            value: firstCodePoint
          };
        }
        return void 0;
      };
    }
  });

  // src/globals/window.ts
  var window_default = window;
  var Fragile = new Proxy(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {},
    {
      get(_target, prop) {
        return window.Desmos?.Private?.Fragile?.[prop];
      }
    }
  );
  var Private = new Proxy(
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    {},
    {
      get(_target, prop) {
        return window.Desmos?.Private?.[prop];
      }
    }
  );
  var Console = (globalThis ?? window).console;

  // src/globals/index.ts
  var globals_default = window_default;

  // src/utils/injectScript.ts
  function injectScript(url) {
    const s = document.createElement("script");
    s.src = url;
    s.onload = function() {
      s.remove();
    };
    const head = document.head || document.documentElement;
    if (head !== null) {
      head.appendChild(s);
    }
  }

  // src/utils/messages.ts
  function postMessage(message) {
    window.postMessage(message, "*");
  }
  function postMessageUp(message) {
    postMessage(message);
  }
  function listenToMessage(callback) {
    const wrappedCallback = (event) => {
      if (event.source !== window) {
        return;
      }
      const cancel = callback(event.data);
      if (cancel) {
        window.removeEventListener("message", wrappedCallback, false);
      }
    };
    window.addEventListener("message", wrappedCallback, false);
    return wrappedCallback;
  }
  function listenToMessageDown(callback) {
    listenToMessage(callback);
  }
  function arrayToSet(x) {
    return new Set(x);
  }

  // src/utils/utils.ts
  async function pollForValue(func) {
    return await new Promise((resolve) => {
      const interval = setInterval(() => {
        const val = func();
        if (val !== null && val !== void 0) {
          clearInterval(interval);
          resolve(val);
        }
      }, 50);
    });
  }

  // localization/en.ftl
  var en_default = `# File Conventions:
# Everything related to a plugin starts with the ID of the plugin
# Hardcoded in the Typescript:
# [pluginID]-name = Name
# [pluginID]-desc = Description
# [pluginID]-opt-[optionKey]-name = Option Name
# [pluginID]-opt-[optionKey]-desc = Option Description

## General
menu-learn-more = Learn more
menu-desmodder-plugins = DesModder Plugins
menu-desmodder-tooltip = DesModder Menu

## Category names
category-core-name = Core
category-utility-name = Utility
category-visual-name = Visual
category-integrations-name = Integrations

## GLesmos
GLesmos-name = GLesmos
GLesmos-desc = Render implicits on the GPU. Can cause the UI to slow down or freeze in rare cases; reload the page if you have issues.
GLesmos-label-toggle-glesmos = Render with GLesmos
GLesmos-confirm-lines = Confirm lines
GLesmos-confirm-lines-body = GLesmos line rendering can be slow. Be careful, especially for a list of layers.
GLesmos-no-support = Unfortunately, your browser does not support GLesmos because it does not support WebGL2.
GLesmos-not-enabled = Enable the GLesmos plugin to improve the performance of some implicits in this graph.
# Missing: error messages

## Tips
show-tips-name = Show Tips
show-tips-desc = Show tips at the bottom of the expressions list
show-tips-tip-export-videos = When exporting videos, prefer MP4 or APNG over GIF
show-tips-tip-disable-graphpaper = Disabling graphpaper in Calculator Settings is useful for writing a sequence of equations
show-tips-tip-paste-asciimath = Paste ASCII Math directly into Desmos
show-tips-tip-pin = Pin (bookmark) commonly-used expressions for easy access
show-tips-tip-long-video-capture = Before starting a long video capture, it's safest to test the beginning of an export
show-tips-tip-find-replace = Find and Replace is great for renaming variables
show-tips-tip-duplicate = Press Ctrl+Q or Ctrl+Shift+Q to duplicate the current expression
show-tips-tip-note-newline = Type Shift+Enter inside notes and folder titles for a newline
show-tips-tip-hide-errors = Click the yellow triangle (or type Shift+Enter) to fade a warning and hide sliders
show-tips-tip-note-folder = Type " to quickly make a note or "folder" for a folder
show-tips-tip-arctan = Use arctan(y, x) instead of arctan(y / x) to get the angle of a point
show-tips-tip-indefinite-integral = Integrals can have infinite bounds
show-tips-tip-random = The random function can sample from a distribution
show-tips-tip-two-argument-round = Two-argument round is great for rounding labels
show-tips-tip-two-argument-sort = Sort one list using keys of another list with sort(A, B)
show-tips-tip-custom-colors = Create custom colors with the functions rgb and hsv
show-tips-tip-ctrl-f = Press Ctrl+F to search through expressions
show-tips-tip-derivatives = Take derivatives using prime notation or Leibniz notation
show-tips-tip-unbounded-list-slices = List slices do not have to be bounded
show-tips-tip-dataviz-plots = To visualize data, you can use a histogram, boxplot, and more
show-tips-tip-statistics = Desmos has many built-in statistics functions
show-tips-tip-table-draggable-points = Use a table for a list of draggable points
show-tips-tip-polygon = Use the polygon function for easy polygons
show-tips-tip-point-arithmetic = Point (vector) arithmetic works as expected (e.g. (1, 2) + (3, 4) is (4, 6))
show-tips-tip-shift-drag = Shift-mouse drag over an axis to scale only that axis
show-tips-tip-action-ticker = Use actions and tickers to run simulations
show-tips-tip-latex-copy-paste = The math from Desmos can be directly copy-pasted into LaTeX editors
show-tips-tip-time-in-worker = To test how fast your graph runs, use ?timeInWorker or enable the Performance Display plugin
show-tips-tip-format-labels = Use backticks to math-format point labels
show-tips-tip-dynamic-labels = Use \${"{"} {"}"} for dynamic point labels based on a variable
show-tips-tip-disable-text-outline = Disabling text outline can sometimes make labels more readable
show-tips-tip-regression-power = Regressions are more powerful than you can imagine
show-tips-tip-spreadsheet-table = Paste spreadsheet data to make a table
show-tips-tip-keyboard-shortcuts = Type Ctrl+/ or Cmd+/ to open the list of keyboard shortcuts
show-tips-tip-listcomps = List comprehensions are great for grids of points or lists of polygons
show-tips-tip-list-filters = List filters can be used to filter for positive elements, even elements, and more
show-tips-tip-bernard = Bernard
show-tips-tip-new-desmos = What's new at Desmos
show-tips-tip-simultaneous-actions = Action assignments are simultaneous, not sequential
show-tips-tip-share-permalink = You can share graphs via permalink without signing in
show-tips-tip-point-coordinate = Extract the x or y coordinate of points by appending .x or .y to your point variable
show-tips-tip-audiotrace = Listen to your graphs using Audio Trace!
show-tips-tip-audiotrace-note-frequency = Note frequencies for audio trace depend on how high or low they are located in the viewport
show-tips-tip-audiotrace-range = Audio Trace range starts on an E4 (329.63 Hz) and ends on E5 (659.25 Hz)
show-tips-tip-other-calculators = Desmos also has other calculators!
show-tips-tip-lock-viewport = Don't want your viewport to be moved? Lock it in the graph settings!
show-tips-tip-glesmos = Enable the GLesmos plugin to make some implicits run faster
show-tips-tip-disable-show-tips = Tired of seeing me? Disable the "Show Tips" plugin in the Desmodder settings
show-tips-tip-compact-view-multiline = Sick of scrolling the expressions panel? Try enabling Compact View and/or Multiline Expressions to see more at once
show-tips-tip-intellisense = Too many long variable names? Enable Intellisense to make dealing with them easier
show-tips-tip-youre-doing-great = You're doing great :)
show-tips-tip-youre-superb = You're superb <3
show-tips-tip-huggy = Huggy!

## Text Mode
text-mode-name = Text Mode BETA
text-mode-desc = Expect bugs. Temporary documentation:
text-mode-toggle = Toggle Text Mode
text-mode-toggle-spaces = Spaces
text-mode-toggle-spaces-tooltip = Include unnecessary spaces when formatting
text-mode-toggle-newlines = Newlines
text-mode-toggle-newlines-tooltip = Include newlines and indentation when formatting
text-mode-format = Format

## Find and Replace
find-and-replace-name = Find and Replace
find-and-replace-desc = Adds a "replace all" button in the Ctrl+F Menu to let you easily refactor variable/function names.
find-and-replace-replace-all = replace all

## Wolfram To Desmos
wolfram2desmos-name = Wolfram To Desmos
wolfram2desmos-desc = Lets you paste ASCII Math (such as the results of Wolfram Alpha queries) into Desmos.
wolfram2desmos-opt-reciprocalExponents2Surds-name = Radical Notation
wolfram2desmos-opt-reciprocalExponents2Surds-desc = Converts fractional powers less than one to a radical equivalent (surd)
wolfram2desmos-opt-derivativeLoopLimit-name = Expand Derivatives
wolfram2desmos-opt-derivativeLoopLimit-desc = Expands the nth derivative of Leibniz notation into repeated derivatives (limited to 10).

## Pin Expressions
pin-expressions-name = Pin Expressions
pin-expressions-desc = Pin expressions from Edit List mode
pin-expressions-pin = Pin
pin-expressions-unpin = Unpin

## Builtin Settings
builtin-settings-name = Calculator Settings
builtin-settings-desc = Lets you toggle features built-in to Desmos. Most options apply only to your own browser and are ignored when you share graphs with others.
builtin-settings-opt-advancedStyling-name = Advanced styling
builtin-settings-opt-advancedStyling-desc = Enable label editing, show-on-hover, text outline, and one-quadrant grid
builtin-settings-opt-graphpaper-name = Graphpaper
builtin-settings-opt-graphpaper-desc = {""}
builtin-settings-opt-authorFeatures-name = Author features
builtin-settings-opt-authorFeatures-desc = Toggle hidden folders, toggle readonly, and more
builtin-settings-opt-pointsOfInterest-name = Show points of interest
builtin-settings-opt-pointsOfInterest-desc = Intercepts, holes, intersections, etc.
builtin-settings-opt-trace-name = Trace along curves
builtin-settings-opt-trace-desc = {""}
builtin-settings-opt-expressions-name = Show Expressions
builtin-settings-opt-expressions-desc = {""}
builtin-settings-opt-zoomButtons-name = Show Zoom Buttons
builtin-settings-opt-zoomButtons-desc = {""}
builtin-settings-opt-keypad-name = Show keypad
builtin-settings-opt-keypad-desc = {""}
builtin-settings-opt-showPerformanceMeter-name = Show performance meter
builtin-settings-opt-showPerformanceMeter-desc = {""}
builtin-settings-opt-showIDs-name = Show IDs
builtin-settings-opt-showIDs-desc = {""}

## Duplicate Expression Hotkey
duplicate-expression-hotkey-name = Duplicate Expression Hotkey
duplicate-expression-hotkey-desc = Type Ctrl+Q or Ctrl+Shift+Q to duplicate the selected expression.

## Right Click Tray
right-click-tray-name = Right Click Tray
right-click-tray-desc = Allows settings tray to be opened with a right click instead of holding left click on the settings bubble

## Scroll Beyond Last Line
scroll-beyond-name = Scroll Beyond Last Line
scroll-beyond-desc = When enabled, the expression list will scroll beyond the last line.

## Set Primary Color
set-primary-color-name = Set Primary Color
set-primary-color-desc = Choose the primary color for the user interface
set-primary-color-opt-primaryColor-name = Primary Color
set-primary-color-opt-primaryColor-desc = Primary color across the calculator
set-primary-color-opt-doFavicon-name = Update Site Icon
set-primary-color-opt-doFavicon-desc = Toggle updating the site icon

## Hide Errors
hide-errors-name = Hide Errors
hide-errors-desc = Shift-click error triangles to fade them and hide suggested sliders.
hide-errors-hide = hide

## Folder Tools
folder-tools-name = Folder Tools
folder-tools-desc = Adds buttons in edit-list-mode to help manage folders.
folder-tools-dump = Dump
folder-tools-merge = Merge
folder-tools-enclose = Enclose

## Video Creator
video-creator-name = Video Creator
video-creator-desc = Lets you export videos and GIFs of your graphs based on actions or sliders.
video-creator-menu = Video Creator Menu
video-creator-to = to
video-creator-step = , step
video-creator-ticks-playing-sliders = Playing sliders:
video-creator-ticks-step = Time step (ms):
video-creator-prev-action = Prev
video-creator-next-action = Next
video-creator-orientation = Orientation
video-creator-orientation-mode-current-speed = current
video-creator-orientation-mode-current-delta = step
video-creator-orientation-mode-from-to = from/to
video-creator-size = Size:
video-creator-mosaic = Mosaic:
video-creator-angle-current = Angle:
video-creator-angle-from = From:
video-creator-angle-to = To:
video-creator-angle-step = Step:
video-creator-angle-speed = Speed:
video-creator-step-count = Step count:
video-creator-frame-count = Frame count:
video-creator-target-same-pixel-ratio = Target same pixel ratio
video-creator-fast-screenshot = Fast captures
video-creator-target-tooltip = Adjusts scaling of line width, point size, label size, etc.
video-creator-ffmpeg-loading = FFmpeg loading...
video-creator-ffmpeg-fail = If this doesn't work in the next few seconds, try reloading the page or reporting this bug to DesModder devs.
video-creator-exporting = Exporting...
video-creator-cancel-capture = Cancel
video-creator-cancel-export = Cancel
video-creator-capture = Capture
video-creator-preview = Preview
video-creator-delete-all = Delete all
video-creator-filename-placeholder = set a filename
video-creator-export = Export
video-creator-export-as = Export as { $fileType }
video-creator-fps = FPS:
video-creator-method-once = once
video-creator-method-ntimes = count
video-creator-method-slider = slider
video-creator-method-action = action
video-creator-method-ticks = ticks

## Wakatime
wakatime-name = WakaTime
wakatime-desc = Track your desmos activity on WakaTime.com
wakatime-opt-secretKey-name = Secret Key
wakatime-opt-secretKey-desc = API Key used for WakaTime servers
wakatime-opt-splitProjects-name = Split Projects by Graph
wakatime-opt-splitProjects-desc = Store each graph as its own project instead of branches of a unified Desmos Project
wakatime-opt-projectName-name = Project name
wakatime-opt-projectName-desc = Visible from WakaTime, and shared for all Desmos projects

## Performance Display
performance-info-name = Performance Display
performance-info-desc = Displays information about the performance of the current graph.
performance-info-refresh-graph = Refresh Graph
performance-info-refresh-graph-tooltip = Refresh the graph to test initial load time
performance-info-sticky-tooltip = Keep menu open
performance-info-time-in-worker = Time In Worker
performance-info-compiling = Compiling
performance-info-rendering = Rendering
performance-info-other = Other

## Better Evaluation View
better-evaluation-view-name = Better Evaluation View
better-evaluation-view-desc = Displays list elements, colors, and undefined values
better-evaluation-view-evaluation-list = { $count } element list
better-evaluation-view-opt-floats-name = Advanced floating point
better-evaluation-view-opt-floats-desc = Show NaN/\u221E/-\u221E instead of undefined, and '-0' for negative 0.
better-evaluation-view-opt-lists-name = Show list elements
better-evaluation-view-opt-lists-desc = Show list elements instead of list length
better-evaluation-view-opt-lists-old = Variant
better-evaluation-view-opt-lists-new = Default
better-evaluation-view-opt-lists-length = Count
better-evaluation-view-opt-colors-name = Show colors
better-evaluation-view-opt-colors-desc = Show colors as rgb values
better-evaluation-view-opt-colorLists-name = Show lists of colors
better-evaluation-view-opt-colorLists-desc = Show lists of colors as lists of rgb values

## Pillbox Menus
pillbox-menus-name = Pillbox Menus (Core)
pillbox-menus-desc = Show the buttons on the right side, such as the Video Creator or DesModder main menu

## Manage Metadata
manage-metadata-name = Manage Metadata (Core)
manage-metadata-desc = Manage Metadata, such as GLesmos or pinned/unpinned status

## Intellisense
intellisense-name = Intellisense
intellisense-desc = Brings several common IDE features to Desmos, including autocompletion suggestions, function call help, and jump to definition. Documentation here:
intellisense-opt-subscriptify-name = Auto-Subscriptify
intellisense-opt-subscriptify-desc = Automatically converts text of variables/functions with subscripts when they are typed without subscripts.
intellisense-jump2def-menu-instructions = has multiple definitions. Pick one from below to jump to.

## Compact View
compact-view-name = Compact View
compact-view-desc = Offers a variety of options for condensing the UI so you can see more on the screen at once.
compact-view-opt-textFontSize-name = Text Font Size
compact-view-opt-textFontSize-desc = Size of the font in notes
compact-view-opt-mathFontSize-name = Math Font Size
compact-view-opt-mathFontSize-desc = Size of the font in mathematical expressions
compact-view-opt-bracketFontSizeFactor-name = Bracket Multiplier
compact-view-opt-bracketFontSizeFactor-desc = Text inside of brackets (parentheses, curly braces, etc.) decreases in size by this factor.
compact-view-opt-minimumFontSize-name = Min Font Size
compact-view-opt-minimumFontSize-desc = Minimum possible math font size (overrides Bracket Font Size Factor)
compact-view-opt-compactFactor-name = Remove Spacing
compact-view-opt-compactFactor-desc = Removes lots of empty space in the expressions list.
compact-view-opt-hideFolderToggles-name = Hide Folder Toggles
compact-view-opt-hideFolderToggles-desc = Hides the folder toggles added to hide folders and bring to front.
compact-view-opt-noSeparatingLines-name = No Separating lines
compact-view-opt-noSeparatingLines-desc = Removes the separating lines between expressions and replaces them with alternating colors.
compact-view-opt-highlightAlternatingLines-name = Highlight Alternating Lines
compact-view-opt-highlightAlternatingLines-desc = Highlights alternating expressions so that they can be easily distinguished from one another.
compact-view-opt-hideEvaluations-name = Collapse Evaluations
compact-view-opt-hideEvaluations-desc = Puts evaluations off to the side. They can be focused or hovered to be shown.

## Multiline
multiline-name = Multiline Expressions
multiline-desc = Splits expressions onto multiple lines to better make use of available space.
multiline-opt-widthBeforeMultiline-name = Width Threshold (%)
multiline-opt-widthBeforeMultiline-desc = Minimum width (as a percent of the viewport size) at which point wrapping will occur. On mobile, this value is tripled.
multiline-opt-automaticallyMultilinify-name = Insert Linebreaks while Typing
multiline-opt-automaticallyMultilinify-desc = Automatically splits expressions onto multiple lines while you type, bypassing the need to use Ctrl+M.
multiline-opt-multilinifyDelayAfterEdit-name = Edit Delay (ms)
multiline-opt-multilinifyDelayAfterEdit-desc = Multiline expressions should be updated after no edits are made for this number of milliseconds.
multiline-opt-spacesToNewlines-name = Spaces to Newlines
multiline-opt-spacesToNewlines-desc = Convert groups of 3 spaces into newlines. These can be automatically created with Shift+Enter.
multiline-opt-determineLineBreaksAutomatically-name = Auto Insert Linebreaks
multiline-opt-determineLineBreaksAutomatically-desc = Automatically figure out where to put line breaks. Use Ctrl+M to trigger this.
multiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-name = Skip expressions with triple spaces
multiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-desc = Don't automatically insert extra line breaks in expressions that have any manually-added line breaks (triple spaces).

## Custom MathQuill Config
custom-mathquill-config-name = Custom MathQuill Config
custom-mathquill-config-desc = Changes how equation input works.
custom-mathquill-config-opt-superscriptOperators-name = Operators in Exponents
custom-mathquill-config-opt-superscriptOperators-desc = Allows you to type operators like "+" in exponents
custom-mathquill-config-opt-noAutoSubscript-name = Disable Auto Subscripts
custom-mathquill-config-opt-noAutoSubscript-desc = Disable automatically putting numbers typed after variable names in subscripts
custom-mathquill-config-opt-noNEquals-name = Disable n= Sums
custom-mathquill-config-opt-noNEquals-desc = Disable sums automatically placing "n=" in the lower bound
custom-mathquill-config-opt-subSupWithoutOp-name = Subscripts/Superscripts Without Operand
custom-mathquill-config-opt-subSupWithoutOp-desc = Allows subscripts and superscripts to be made even if not preceded by anything
custom-mathquill-config-opt-allowMixedBrackets-name = Allow Mismatched Brackets
custom-mathquill-config-opt-allowMixedBrackets-desc = Allows all brackets to match with each other (includes absolute value)
custom-mathquill-config-opt-subscriptReplacements-name = Allow Replacements in Subscripts
custom-mathquill-config-opt-subscriptReplacements-desc = Allows symbols and function names to be typed into subscripts
custom-mathquill-config-opt-noPercentOf-name = Disable % of
custom-mathquill-config-opt-noPercentOf-desc = Makes typing "%" insert the percent character instead of "% of"
custom-mathquill-config-opt-commaDelimiter-name = Comma Separators
custom-mathquill-config-opt-commaDelimiter-desc = Inserts commas as delimiters in numbers (purely visual)
custom-mathquill-config-opt-delimiterOverride-name = Custom Delimiter
custom-mathquill-config-opt-delimiterOverride-desc = Set the string to be used as number delimiters
custom-mathquill-config-opt-leftIntoSubscript-name = Left/Right into Subscripts
custom-mathquill-config-opt-leftIntoSubscript-desc = Moving the cursor left or right will go into subscript instead of superscript
custom-mathquill-config-opt-extendedGreek-name = More Greek Letters
custom-mathquill-config-opt-extendedGreek-desc = Enables replacements for all supported greek letters
custom-mathquill-config-opt-lessFSpacing-name = Less Spacing Around "f"
custom-mathquill-config-opt-lessFSpacing-desc = Reduces extra spacing around the letter "f"

## Code Golf
code-golf-name = Code Golf
code-golf-desc = Tools for helping Desmos Code Golfers. Press Alt+Q to enable/disable.
code-golf-width-in-pixels = Width: { $pixels } px
code-golf-symbol-count = Symbol Count: { $elements }
code-golf-click-to-enable-folder = Click to enable code golf stats.
code-golf-note-latex-byte-count = { $chars } LaTeX Bytes
code-golf-opt-showWidth-name = Show 'Width'
code-golf-opt-showWidth-desc = {""}
code-golf-opt-disableOnReload-name = Disable on reload.
code-golf-opt-disableOnReload-desc = {""}

## Syntax highlightAlternatingLines
syntax-highlighting-name = Syntax Highlighting
syntax-highlighting-desc = Color in various parts of expressions to make them easier to reason about.
syntax-highlighting-opt-bracketPairColorization-name = Bracket Pair Colorization
syntax-highlighting-opt-bracketPairColorization-desc = Applies a set of alternating colors to brackets (e.g. ()[]{"{"}{"}"}||) to make matching bracket pairs easy to spot.
syntax-highlighting-opt-bracketPairColorizationColors-name = Bracket Pair Colors
syntax-highlighting-opt-bracketPairColorizationColors-desc = Sets the number and order of colors that are used for bracket pair colorization.
syntax-highlighting-opt-bpcColorInText-name = Colorize Text in Brackets
syntax-highlighting-opt-bpcColorInText-desc = Applies Bracket Pair Colors to the text within the brackets.
syntax-highlighting-opt-thickenBrackets-name = Thicken Brackets
syntax-highlighting-opt-thickenBrackets-desc = Add additional thickness to brackets to assist in bracket colorization.
syntax-highlighting-opt-highlightBracketBlocks-name = Highlight Bracket Blocks
syntax-highlighting-opt-highlightBracketBlocks-desc = Highlight the smallest enclosing bracket pair containing the text cursor.
syntax-highlighting-opt-highlightBracketBlocksHover-name = Highlight on Hover
syntax-highlighting-opt-highlightBracketBlocksHover-desc = Highlight the smallest enclosing bracket pair containing the mouse.
syntax-highlighting-opt-underlineHighlightedRanges-name = Underline Highlighted Ranges
syntax-highlighting-opt-underlineHighlightedRanges-desc = Puts a dark underline under highlighted ranges for better visibility.

## Better Navigation
better-navigation-name = Better Navigation
better-navigation-desc = Tools for making Desmos expressions easier to navigate.
better-navigation-opt-ctrlArrow-name = Ctrl+Arrow Support
better-navigation-opt-ctrlArrow-desc = Use Ctrl+ArrowKeys or Ctrl+Shift+ArrowKeys to skip over large blocks of text quickly. Use Ctrl+Backspace to delete large blocks of text.
better-navigation-opt-scrollableExpressions-name = Scrollable Expressions
better-navigation-opt-scrollableExpressions-desc = Adds horizontal scrollbars to expressions. This is primarily intended to make scrolling easier on mobile.
better-navigation-opt-showScrollbar-name = Show Scrollbar
better-navigation-opt-showScrollbar-desc = Shows or hides scrollbar. It is convenient to turn this off for touch devices.

## Paste Image
paste-image-name = Paste Image
paste-image-desc = Lets you paste image files to import them at once.
paste-image-error-images-not-enabled = Image insertion is not enabled for this graph.
paste-image-error-another-upload-in-progress = Retry after another upload in progress is completed.

## Quake Pro
quake-pro-name = Quake Pro
quake-pro-desc = Allows you to increase the Field of View beyond the 3D calculator's regular limit.
quake-pro-opt-dollyMagnification-name = Dolly Multiplier
quake-pro-opt-dollyMagnification-desc = Heightens the zoom behavior by multiplying (dollying) the camera's viewport slider.
quake-pro-opt-scalarZoomed-name = Scalar Cancellation
quake-pro-opt-scalarZoomed-desc = Combats perspective distortion by multiplying (enlarging) the screen viewport (requires max zoom to be fully seen).
`;

  // localization/es.ftl
  var es_default = `# File Conventions:
# Everything related to a plugin starts with the ID of the plugin
# Hardcoded in the Typescript:
# [pluginID]-name = Name
# [pluginID]-desc = Description
# [pluginID]-opt-[optionKey]-name = Option Name
# [pluginID]-opt-[optionKey]-desc = Option Description

## General
menu-learn-more = Aprende m\xE1s
menu-desmodder-plugins = Extensiones de DesModder
menu-desmodder-tooltip = Men\xFA de DesModder

## Category names
category-core-name = Funciones Principales
category-utility-name = Utilidades
category-visual-name = Apariencia
category-integrations-name = Integraciones

## GLesmos
# Unchanged
GLesmos-name = GLesmos
GLesmos-desc = Genera funciones impl\xEDcitas en la GPU. Puede ralentizar la interfaz gr\xE1fica o en raras ocasiones puede congelar la p\xE1gina. Recarga la p\xE1gina si te causa problemas.
GLesmos-label-toggle-glesmos = Usar GLesmos
GLesmos-confirm-lines = Confirmar l\xEDneas
GLesmos-confirm-lines-body = Generar l\xEDneas con GLesmos puede ser lento. S\xE9 especialmente cuidadoso cuando utilices listas.
GLesmos-no-support = Desafortunadamente tu navegador no soporta GLesmos porque no provee soporte para WebGL2.
GLesmos-not-enabled = Habilita GLesmos para mejorar el rendimiento de algunas expresiones impl\xEDcitas.
# Missing: error messages

## Tips
show-tips-name = Mostrar Consejos
show-tips-desc = Te muestra consejos en la parte de abajo de la lista de expresiones
show-tips-tip-export-videos = Cuando exportas videos es preferible escoger MP4 o APNG sobre GIF
show-tips-tip-disable-graphpaper = Cuando necesites escribir ecuaciones largas, es \xFAtil deshabilitar el \xE1rea del gr\xE1fico en la Configuraci\xF3n de Calculadora
show-tips-tip-paste-asciimath = Puedes pegar ecuaciones en formato ASCII directamente en Desmos
show-tips-tip-pin = Fija expresiones que uses frecuentemente para no perderlas de vista
show-tips-tip-long-video-capture = Antes de empezar a capturar un v\xEDdeo largo, es una buena idea exportar un v\xEDdeo corto de prueba
show-tips-tip-find-replace = Buscar y reemplazar es ideal para renombrar variables
show-tips-tip-duplicate = Presiona Ctrl+Q \xF3 Ctrl+Shift+Q para duplicar la expresi\xF3n seleccionada
show-tips-tip-note-newline = Teclea Shift+Entrar para a\xF1adir l\xEDneas nuevas en las notas y en los t\xEDtulos de im\xE1genes/carpetas
show-tips-tip-hide-errors = Has clic a los tri\xE1ngulos de advertencia para desvanecerlos (o presiona Shift+Entrar)
show-tips-tip-note-folder = Para crear una nota puedes teclear una comilla doble o escribir "folder" para crear una carpeta
show-tips-tip-arctan = Utiliza arctan(y, x) en lugar de arctan(y / x) para obtener el \xE1ngulo de un punto
show-tips-tip-indefinite-integral = Puedes utilizar l\xEDmites infinitos en integrales
show-tips-tip-random = La funci\xF3n "random" puede tomar muestras de una distribuci\xF3n
show-tips-tip-two-argument-round = La funci\xF3n "round" con su segundo argumento es ideal para redondear n\xFAmeros para r\xF3tulos
show-tips-tip-two-argument-sort = Es posible reordenar una lista con la clasificaci\xF3n de otra usando "sort(A, B)"
show-tips-tip-custom-colors = Crea colores personalizados usando las funciones "rgb" y "hsv"
show-tips-tip-ctrl-f = Presiona Ctrl+F para buscar expresiones
show-tips-tip-derivatives = Toma derivadas usando notaci\xF3n de Lagrange o notaci\xF3n de Leibniz
show-tips-tip-unbounded-list-slices = Los l\xEDmites de listas no tienen que estar acotados
show-tips-tip-dataviz-plots = Para visualizar datos puedes utilizar las funciones "histogram", "boxplot", y m\xE1s
show-tips-tip-statistics = Desmos tiene much\xEDsimas funciones para estad\xEDstica
show-tips-tip-table-draggable-points = Una tabla te permite crear una lista de puntos interactivos
show-tips-tip-polygon = Utiliza la funci\xF3n "polygon" para crear pol\xEDgonos con facilidad
show-tips-tip-point-arithmetic = Puedes aplicar aritm\xE9tica a puntos (o vectores). Por ejemplo, (1, 2) + (3, 4) es (4, 6)
show-tips-tip-shift-drag = Shift+click izquierdo sobre un eje te permite cambiar el tama\xF1o de ese eje independientemente
show-tips-tip-action-ticker = Utiliza acciones y contadores para correr simulaciones
show-tips-tip-latex-copy-paste = Expresiones copiadas en Desmos pueden ser pegadas en editores de composici\xF3n de texto as\xED como LaTeX
show-tips-tip-time-in-worker = Para monitorear el rendimiento del gr\xE1fico a\xF1ade "?timeInWorker" a la URL o activa el Monitor de Rendimiento
show-tips-tip-format-labels = Enmarca el texto de r\xF3tulos entre \` para darles formato de expresi\xF3n
show-tips-tip-dynamic-labels = Puedes enmarcar nombres de variables en \${"{"} {"}"} para mostrar su valor en r\xF3tulos
show-tips-tip-disable-text-outline = Deshabilitar el borde de texto puede hacer r\xF3tulos m\xE1s legibles en algunos casos
show-tips-tip-regression-power = La utilidad de regresiones en Desmos te puede sorprender
show-tips-tip-spreadsheet-table = Pega datos de una hoja de c\xE1lculo (como Excel) para crear una tabla
show-tips-tip-keyboard-shortcuts = Presiona Ctrl+/ \xF3 Cmd+/ para mostrar la lista de atajos de teclado
show-tips-tip-listcomps = Las listas por comprensi\xF3n son ideales para crear cuadr\xEDculas de puntos o listas de pol\xEDgonos
show-tips-tip-list-filters = Puedes utilizar filtrado de listas para filtrar elementos positivos, pares y m\xE1s
# Unchanged
show-tips-tip-bernard = Bernard
show-tips-tip-new-desmos = \xA1Lo nuevo en Desmos!
show-tips-tip-simultaneous-actions = Las reglas de una acci\xF3n son simult\xE1neas no secuenciales
show-tips-tip-share-permalink = Puedes compartir gr\xE1ficos por medio de un permalink sin necesidad de iniciar sesi\xF3n
show-tips-tip-point-coordinate = Puedes acceder las coordenadas de x \xF3 y de un punto a\xF1adiendo .x \xF3 .y a la variable de tu punto
show-tips-tip-audiotrace = \xA1Escucha tus gr\xE1ficos utilizando el modo Seguimiento de Audio!
show-tips-tip-audiotrace-note-frequency = Las frecuencias de sonido del seguimiento de audio son relativas a la posici\xF3n del gr\xE1fico en la pantalla.
show-tips-tip-audiotrace-range = El rango del seguimiento de audio empieza en Mi 4\xAA (329.63 hz) y termina en Mi 5\xAA (659.25 Hz)
show-tips-tip-other-calculators = \xA1Desmos tambi\xE9n ofrece otros tipos de calculadores!
show-tips-tip-lock-viewport = \xBFNo quieres que el \xE1rea del gr\xE1fico se mueva? \xA1F\xEDjala en la configuraci\xF3n del gr\xE1fico!
show-tips-tip-glesmos = Habilita la extensi\xF3n GLesmos para que tus expresiones impl\xEDcitas sean m\xE1s r\xE1pidas
show-tips-tip-disable-show-tips = \xBFCansado de verme? Deshabilita "Mostrar Consejos" en la configuraci\xF3n de Desmodder
show-tips-tip-compact-view-multiline = \xBFHarto de navegar largas listas de expresiones? Prueba la Vista Compacta y/o Expresiones Multil\xEDnea para ver m\xE1s contenido
show-tips-tip-intellisense = \xBFLos nombres de tus variables son muy largos? Habilita Intellisense para lidiar con estos m\xE1s f\xE1cilmente
show-tips-tip-youre-doing-great = \xA1Vamos! Tu puedes :)
show-tips-tip-youre-superb = Eres incre\xEDble <3
show-tips-tip-huggy = \xA1Un abrazo de oso!

## Text Mode
text-mode-name = Modo Texto BETA
text-mode-desc = Errores son esperados. Documentaci\xF3n temporal:
text-mode-toggle = Alternar Modo Texto
text-mode-toggle-spaces = Espacios
text-mode-toggle-spaces-tooltip = Incluir espacios superfluos al aplicar formato
text-mode-toggle-newlines = Nueva l\xEDnea
text-mode-toggle-newlines-tooltip = Incluir nueva l\xEDnea y sangrado al aplicar formato
text-mode-format = Dar Formato

## Find and Replace
find-and-replace-name = Buscar y Reemplazar
find-and-replace-desc = Agrega un bot\xF3n de "reemplazar todo" en el men\xFA de b\xFAsqueda con Ctrl+F y te permite cambiar f\xE1cilmente los nombres de variables o funciones.
find-and-replace-replace-all = reemplazar todo

## Wolfram To Desmos
wolfram2desmos-name = Wolfram a Desmos
wolfram2desmos-desc = Te permite pegar texto de ecuaciones en formato ASCII (as\xED como las b\xFAsquedas en Wolfram Alpha) en Desmos.
wolfram2desmos-opt-reciprocalExponents2Surds-name = Notaci\xF3n Radical
wolfram2desmos-opt-reciprocalExponents2Surds-desc = Convierte exponentes fraccionarios menores que uno a su equivalente en radical.
wolfram2desmos-opt-derivativeLoopLimit-name = Expandir Derivadas
wolfram2desmos-opt-derivativeLoopLimit-desc = Expande las derivadas de orden superior en notaci\xF3n de Leibniz en forma de derivadas anidadas (l\xEDmite de 10).

## Pin Expressions
pin-expressions-name = Fijar Expresiones
pin-expressions-desc = Fija expresiones desde modo de edici\xF3n
pin-expressions-pin = Fijar
pin-expressions-unpin = Desfijar

## Builtin Settings
builtin-settings-name = Configuraci\xF3n de Calculadora
builtin-settings-desc = Te permite configurar las funciones integradas en Desmos. La mayor\xEDa de las opciones aplican solamente a tu navegador y son ignoradas cuando compartes tu gr\xE1fico con otras personas.
builtin-settings-opt-advancedStyling-name = Dise\xF1o avanzado
builtin-settings-opt-advancedStyling-desc = Permite editar r\xF3tulos, as\xED como mostrar \xE9stos cuando el cursor est\xE1 encima, a\xF1adir contorno de texto y mostrar un solo cuadrante de cuadr\xEDcula.
builtin-settings-opt-graphpaper-name = \xC1rea del Gr\xE1fico
# Unchanged
builtin-settings-opt-graphpaper-desc = {""}
builtin-settings-opt-authorFeatures-name = Funciones para autores
builtin-settings-opt-authorFeatures-desc = Permite esconder carpetas, expresiones de solo lectura, y m\xE1s.
builtin-settings-opt-pointsOfInterest-name = Muestra puntos de inter\xE9s.
builtin-settings-opt-pointsOfInterest-desc = Cortes de eje x/y, discontinuidades, intersecciones, etc.
builtin-settings-opt-trace-name = Trazar sobre curvas
builtin-settings-opt-trace-desc = Permite hacer clic en curvas para obtener coordenadas.
builtin-settings-opt-expressions-name = Mostrar Expresiones
# Unchanged
builtin-settings-opt-expressions-desc = {""}
builtin-settings-opt-zoomButtons-name = Muestra los Botones de Zoom
# Unchanged
builtin-settings-opt-zoomButtons-desc = {""}
builtin-settings-opt-keypad-name = Mostrar el teclado num\xE9rico
# Unchanged
builtin-settings-opt-keypad-desc = {""}
builtin-settings-opt-showPerformanceMeter-name = Mostrar Monitor de Rendimiento
# Unchanged
builtin-settings-opt-showPerformanceMeter-desc = {""}
builtin-settings-opt-showIDs-name = Mostrar IDs
# Unchanged
builtin-settings-opt-showIDs-desc = {""}

## Duplicate Expression Hotkey
duplicate-expression-hotkey-name = Tecla R\xE1pida para Duplicar Expresi\xF3n
duplicate-expression-hotkey-desc = Presiona Ctrl+Q \xF3 Ctrl+Shift+Q para replicar la expresi\xF3n seleccionada.

## Right Click Tray
right-click-tray-name = Color con Clic Derecho
right-click-tray-desc = Permite abrir el men\xFA para configurar expresiones con el clic derecho.

## Scroll Beyond Last Line
scroll-beyond-name = Desplazar Despues de \xDAltima L\xEDnea
scroll-beyond-desc = Cuando se habilita permite desplazar las expressiones m\xE1s all\xE1 de la \xFAltima expressi\xF3n.

## Set Primary Color
set-primary-color-name = Cambiar Color de Aplicaci\xF3n
set-primary-color-desc = Elige el color principal para la interfaz de usuario.
set-primary-color-opt-primaryColor-name = Color principal
set-primary-color-opt-primaryColor-desc = Cambia el color principal en toda la calculadora.
set-primary-color-opt-doFavicon-name = Actualizar el icono del sitio web.
set-primary-color-opt-doFavicon-desc = Alternar el color del icono del sitio web.

## Hide Errors
hide-errors-name = Esconder los Errores
hide-errors-desc = Permite hacer clic en los tri\xE1ngulos de advertencia para desvanecerlos y esconder las sugerencias de controles deslizantes.
hide-errors-hide = esconder

## Folder Tools
folder-tools-name = Herramientas para Carpetas
folder-tools-desc = A\xF1ade botones en el modo de edici\xF3n para ayudar con la gesti\xF3n de carpetas
folder-tools-dump = Vaciar
folder-tools-merge = Llenar
folder-tools-enclose = Encerrar

## Video Creator
video-creator-name = Creador de Video
video-creator-desc = Te permite exportar videos y GIFs de tu gr\xE1fico usando acciones o controles deslizantes.
video-creator-menu = Men\xFA del Creador de Video
video-creator-to = hasta
video-creator-step = , paso
video-creator-ticks-playing-sliders = Deslizadores activos:
video-creator-ticks-step = Tiempo por paso (ms):
video-creator-prev-action = Previo
video-creator-next-action = Siguiente
video-creator-orientation = Orientaci\xF3n
video-creator-orientation-mode-current-speed = actual
video-creator-orientation-mode-current-delta = recorrer
video-creator-orientation-mode-from-to = rango
video-creator-size = Tama\xF1o:
video-creator-mosaic = Mosaico:
video-creator-angle-current = \xC1ngulo:
video-creator-angle-from = Desde:
video-creator-angle-to = Hasta:
video-creator-angle-step = Paso:
video-creator-angle-speed = Velocidad:
video-creator-step-count = N\xFAmero de pasos:
video-creator-frame-count = N\xFAmero de cuadros:
video-creator-target-same-pixel-ratio = Mantener la misma proporci\xF3n de p\xEDxeles.
video-creator-fast-screenshot = Captura r\xE1pida
video-creator-target-tooltip = Ajustar la magnitud del ancho de las l\xEDneas, el tama\xF1o de puntos, el tama\xF1o de r\xF3tulos, etc.
video-creator-ffmpeg-loading = cargando FFmpeg...
video-creator-ffmpeg-fail = Si no funciona en unos segundos, prueba recargar la p\xE1gina o informa los devs de DesModder sobre el error.
video-creator-exporting = Exportando...
video-creator-cancel-capture = Cancelar
video-creator-cancel-export = Cancelar
video-creator-capture = Capturar
video-creator-preview = Vista R\xE1pida
video-creator-delete-all = Eliminar todo
video-creator-filename-placeholder = nombre de tu video...
video-creator-export = Exportar
video-creator-export-as = Exportar como { $fileType }
# Unchanged
video-creator-fps = FPS:
video-creator-method-once = una vez
video-creator-method-ntimes = contar
video-creator-method-slider = deslizador
video-creator-method-action = acci\xF3n
video-creator-method-ticks = contador

## Wakatime
# Unchanged
wakatime-name = WakaTime
wakatime-desc = Le da seguimiento a tu actividad de Desmos en WakaTime.com
wakatime-opt-secretKey-name = Llave Secreta
wakatime-opt-secretKey-desc = Llave API usada para los servidores de WakaTime
wakatime-opt-splitProjects-name = Separa los proyectos por gr\xE1ficos individuales
wakatime-opt-splitProjects-desc = Guarda cada gr\xE1fico como su propio proyecto y no como ramificaciones de un solo proyecto de Desmos.
wakatime-opt-projectName-name = Nombre de Proyecto
wakatime-opt-projectName-desc = Visible en WakaTime y es compartido por todos tus proyectos de Desmos.

## Performance Display
performance-info-name = Monitor de Rendimiento
performance-info-desc = Visualiza informaci\xF3n sobre el rendimiento del gr\xE1fico.
performance-info-refresh-graph = Refrescar el Gr\xE1fico
performance-info-refresh-graph-tooltip = Refresca el gr\xE1fico para monitorear el tiempo de carga.
performance-info-sticky-tooltip = Mantener el men\xFA abierto
performance-info-time-in-worker = Tiempo en Web Worker
performance-info-compiling = Compilando
performance-info-rendering = Visualizando
performance-info-other = Otro

## Better Evaluation View
better-evaluation-view-name = Mejor Vista de Evaluaci\xF3n
better-evaluation-view-desc = Permite dar un vistazo a los elementos en listas, colores, y los n\xFAmeros indefinidos.
better-evaluation-view-evaluation-list = lista de { $count } elementos
better-evaluation-view-opt-floats-name = Punto flotante avanzado
better-evaluation-view-opt-floats-desc = Mostrar NaN/\u221E/-\u221E en lugar de 'undefined' y '-0' cuando 0 es negativo.
better-evaluation-view-opt-lists-name = Mostrar los elementos de la lista.
better-evaluation-view-opt-lists-desc = Mostrar los elementos de la lista en vez de su tama\xF1o.
better-evaluation-view-opt-colors-name = Mostrar colores
better-evaluation-view-opt-colors-desc = Mostrar colores como valores RGB
better-evaluation-view-opt-colorLists-name = Mostrar listas de colores
better-evaluation-view-opt-colorLists-desc = Mostrar listas de colores como listas de valores RGB

## Pillbox Menus
pillbox-menus-name = Men\xFA de Botones (Funciones Principales)
pillbox-menus-desc = Muestra botones al lado derecho, as\xED como el Creador de Video o el men\xFA principal de DesModder

## Manage Metadata
manage-metadata-name = Administrar Metadatos (Funciones Principales)
manage-metadata-desc = Permite administrar metadatos, as\xED como las extensiones GLesmos o Fijar Expresiones

## Intellisense
# Unchanged
intellisense-name = Intellisense
intellisense-desc = Brinda varias funciones esenciales de una IDE en Desmos incluyendo sugerencias de autocompletado, visualizaci\xF3n de par\xE1metros, e ir a definici\xF3n. Sigue el enlace para la documentaci\xF3n:
intellisense-opt-subscriptify-name = Convertir Sub\xEDndices
intellisense-opt-subscriptify-desc = Autom\xE1ticamente convierte nombres de funciones o variables con sub\xEDndices, aunque los escribas sin estos.
intellisense-jump2def-menu-instructions = tiene m\xFAltiples definiciones. Elige a cu\xE1l quieres navegar.

## Compact View
compact-view-name = Vista Compacta
compact-view-desc = Permite personalizar la interfaz gr\xE1fica con \xE9nfasis en mostrar m\xE1s informaci\xF3n de manera compacta.
compact-view-opt-textFontSize-name = Tama\xF1o de fuente (texto)
compact-view-opt-textFontSize-desc = Tama\xF1o del texto en notas y carpetas
compact-view-opt-mathFontSize-name = Tama\xF1o de fuente (matem\xE1tica)
compact-view-opt-mathFontSize-desc = Tama\xF1o de texto de expresiones y ecuaciones
compact-view-opt-bracketFontSizeFactor-name = Factor de par\xE9ntesis
compact-view-opt-bracketFontSizeFactor-desc = Este factor ajusta el tama\xF1o del texto encerrado en par\xE9ntesis (o corchetes).
compact-view-opt-minimumFontSize-name = M\xEDnimo tama\xF1o de fuente
compact-view-opt-minimumFontSize-desc = El m\xEDnimo tama\xF1o de fuente posible. Sobrescribe el factor de par\xE9ntesis.
compact-view-opt-compactFactor-name = Remover espacio
compact-view-opt-compactFactor-desc = Remueve el espacio entre las expresiones y notas en la lista.
compact-view-opt-hideFolderToggles-name = Ocultar Opciones de Carpeta
compact-view-opt-hideFolderToggles-desc = Esconde las opciones de carpeta para ocultar carpeta y poner delante de todo.
compact-view-opt-noSeparatingLines-name = Sin l\xEDneas de separaci\xF3n
compact-view-opt-noSeparatingLines-desc = Remueve las l\xEDneas de separaci\xF3n entre el medio de las expresiones.
compact-view-opt-highlightAlternatingLines-name = Realzar l\xEDneas alternas
compact-view-opt-highlightAlternatingLines-desc = Realza con colores alternos las expresiones para que estas puedan distinguirse con m\xE1s facilidad.
compact-view-opt-hideEvaluations-name = Colapsar evaluaciones
compact-view-opt-hideEvaluations-desc = Mueve evaluaciones de listas fuera de la vista y las muestra solo cuando colocas el cursor sobre ellas.

## Multiline
multiline-name = Expresiones Multil\xEDnea
multiline-desc = Divide expresiones largas en m\xFAltiples l\xEDneas. Puedes activar esta funci\xF3n manualmente presionando Ctrl+M.
multiline-opt-widthBeforeMultiline-name = L\xEDmite de ancho (%)
multiline-opt-widthBeforeMultiline-desc = Este es un porcentaje de la pantalla al cual el largo de la expresi\xF3n provoca ajuste de l\xEDneas. En m\xF3vil este valor es triplicado.
multiline-opt-automaticallyMultilinify-name = Ajuste de l\xEDnea al teclear
multiline-opt-automaticallyMultilinify-desc = Autom\xE1ticamente divide las expresiones en m\xFAltiples l\xEDneas mientras escribes sin la necesidad the teclear Ctrl+M.
multiline-opt-multilinifyDelayAfterEdit-name = Retraso de ajuste (ms)
multiline-opt-multilinifyDelayAfterEdit-desc = Retrasa el ajuste de l\xEDneas en la expresi\xF3n que est\xE1s editando por el n\xFAmero de milisegundos especificado.
multiline-opt-spacesToNewlines-name = Espacios a L\xEDneas Nuevas
multiline-opt-spacesToNewlines-desc = Convierte grupos de 3 espacios a l\xEDneas nuevas. Puedes usar Shift+Entrar para el mismo efecto.
multiline-opt-determineLineBreaksAutomatically-name = Ajuste de l\xEDnea autom\xE1tico
multiline-opt-determineLineBreaksAutomatically-desc = Determina autom\xE1ticamente en d\xF3nde utilizar ajuste de l\xEDnea. Alternat\xEDvamente puedes utilizar Ctrl+M para insertar l\xEDneas nuevas.
multiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-name = Ignorar expresiones con tres espacios
multiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-desc = Previene el ajuste de l\xEDnea en expresiones donde l\xEDneas nuevas han sido insertadas manualmente.

## Custom MathQuill Config
custom-mathquill-config-name = Configuraci\xF3n de MathQuill
custom-mathquill-config-desc = Te permite expandir y personalizar la edici\xF3n de ecuaciones
custom-mathquill-config-opt-superscriptOperators-name = Operadores en exponentes
custom-mathquill-config-opt-superscriptOperators-desc = Permite teclear operadores, as\xED como "+", en los exponentes
custom-mathquill-config-opt-noAutoSubscript-name = Deshabilita sub\xEDndices autom\xE1ticos
custom-mathquill-config-opt-noAutoSubscript-desc = Deshabilita sub\xEDndices autom\xE1ticos en n\xFAmeros cuando estos son escritos despu\xE9s de una variable
custom-mathquill-config-opt-noNEquals-name = Deshabilita n= en sumatorio
custom-mathquill-config-opt-noNEquals-desc = Deshabilita "n=" en el l\xEDmite inferior de los sumatorios
custom-mathquill-config-opt-subSupWithoutOp-name = Sub\xEDndices y exponentes sin base
custom-mathquill-config-opt-subSupWithoutOp-desc = Permite crear sub\xEDndices y exponentes sin que estos est\xE9n precedidos de un s\xEDmbolo
custom-mathquill-config-opt-allowMixedBrackets-name = Permitir par\xE9ntesis mezclados
custom-mathquill-config-opt-allowMixedBrackets-desc = Permite mezclar par\xE9ntesis de distinto tipo (incluyendo el valor absoluto)
custom-mathquill-config-opt-subscriptReplacements-name = Permite reemplazos en sub\xEDndices
custom-mathquill-config-opt-subscriptReplacements-desc = Permite s\xEDmbolos y nombres de funciones dentro de los sub\xEDndices
custom-mathquill-config-opt-noPercentOf-name = Deshabilita % of
custom-mathquill-config-opt-noPercentOf-desc = Permite teclear el car\xE1cter "%" sin la inserci\xF3n autom\xE1tica de "% of"
custom-mathquill-config-opt-commaDelimiter-name = Coma de separaci\xF3n
custom-mathquill-config-opt-commaDelimiter-desc = Inserta comas de separaci\xF3n en n\xFAmeros (s\xF3lo visualmente)
custom-mathquill-config-opt-delimiterOverride-name = Separador personalizado
custom-mathquill-config-opt-delimiterOverride-desc = Car\xE1cter que va a ser usado como separador de millares
custom-mathquill-config-opt-leftIntoSubscript-name = Navegaci\xF3n hacia sub\xEDndices
custom-mathquill-config-opt-leftIntoSubscript-desc = Prioriza sub\xEDndices sobre exponentes al navegar con las flechas del teclado
custom-mathquill-config-opt-extendedGreek-name = M\xE1s letras griegas
custom-mathquill-config-opt-extendedGreek-desc = Habilita reemplazos para todas las letras griegas
custom-mathquill-config-opt-lessFSpacing-name = Reducir interletraje en la "f"
custom-mathquill-config-opt-lessFSpacing-desc = Reduce el espacio a los lados de la letra "f" en expresiones

## Code Golf
# Unchanged
code-golf-name = Code Golf
code-golf-desc = Herramientas para ayudar con el code golf en Desmos.
code-golf-width-in-pixels = Ancho: { $pixels } px
code-golf-symbol-count = Cantidad de S\xEDmbolos: { $elements }
code-golf-click-to-enable-folder = Has clic para habilitar estad\xEDsticas de tu golf.
# Unchanged
code-golf-note-latex-byte-count = { $chars } LaTeX Bytes
code-golf-opt-showWidth-name = Mostrar 'Ancho'
# Unchanged
code-golf-opt-showWidth-desc = {""}
code-golf-opt-disableOnReload-name = Deshabilitar despues de recarga
# Unchanged
code-golf-opt-disableOnReload-desc = {""}

## Syntax highlightAlternatingLines
syntax-highlighting-name = Resaltado de Sintaxis
syntax-highlighting-desc = Colorea distintas partes de una expresi\xF3n para hacerlas m\xE1s f\xE1cil de distinguir.
syntax-highlighting-opt-bracketPairColorization-name = Colorear Pares de Par\xE9ntesis
syntax-highlighting-opt-bracketPairColorization-desc = Aplica diferentes colores a cada par balanceado de par\xE9ntesis para hacerlos m\xE1s f\xE1cil de emparejar visualmente.
syntax-highlighting-opt-bracketPairColorizationColors-name = Colores de Pares
syntax-highlighting-opt-bracketPairColorizationColors-desc = Especifica el n\xFAmero y el orden de los colores utilizados para colorear los par\xE9ntesis.
syntax-highlighting-opt-bpcColorInText-name = Colorear Texto Encerrado
syntax-highlighting-opt-bpcColorInText-desc = Aplica el mismo color de cada par\xE9ntesis al texto que estos encierran.
syntax-highlighting-opt-thickenBrackets-name = Ensanchar Par\xE9ntesis
syntax-highlighting-opt-thickenBrackets-desc = Adherir ancho adicional a los par\xE9ntesis para asistir el coloreado de \xE9stos.
syntax-highlighting-opt-highlightBracketBlocks-name = Resaltar Bloques
syntax-highlighting-opt-highlightBracketBlocks-desc = Resalta el grupo de par\xE9ntesis m\xE1s peque\xF1o que contiene el cursor de texto.
syntax-highlighting-opt-highlightBracketBlocksHover-name = Resaltar con el Rat\xF3n
syntax-highlighting-opt-highlightBracketBlocksHover-desc = Resalta el grupo de par\xE9ntesis m\xE1s peque\xF1o que contiene el cursor del rat\xF3n.
syntax-highlighting-opt-underlineHighlightedRanges-name = Subrayar Grupos Resaltados
syntax-highlighting-opt-underlineHighlightedRanges-desc = Agrega subrayado debajo de los grupos resaltados para mejorar visibilidad.

## Better Navigation
better-navigation-name = Navegaci\xF3n Mejorada
better-navigation-desc = Te provee herramientas para facilitar la navegaci\xF3n en Desmos.
better-navigation-opt-ctrlArrow-name = Atajo Ctrl+Flecha.
better-navigation-opt-ctrlArrow-desc = Te permite utilizar Ctrl+Flecha y Ctrl+Shift+Flecha para avanzar bloques de texto m\xE1s r\xE1pidamente. De manera similar puedes usar Ctrl+Retroceso para borrar bloques.
better-navigation-opt-scrollableExpressions-name = Expresiones Desplazables
better-navigation-opt-scrollableExpressions-desc = A\xF1ade una barra de desplazamiento horizontal. Mayormente destinado para facilitar la navegaci\xF3n en m\xF3vil.
better-navigation-opt-showScrollbar-name = Mostrar Barra de Desplazamiento
better-navigation-opt-showScrollbar-desc = Mostrar o esconder barra de desplazamiento. Coveniente para dispositivos de pantalla t\xE1ctil.

## Paste Image
paste-image-name = Pegar Imagen
paste-image-desc = Te permite pegar imagenes directamente en las expressiones para importar.
paste-image-error-images-not-enabled = Inserci\xF3n de imagen no est\xE1 disponible para este gr\xE1fico.
paste-image-error-another-upload-in-progress = Vuelve a intentar cuando la imagen previa termine de procesarse.

## Quake Pro
# Unchanged
quake-pro-name = Quake Pro
quake-pro-desc = Permite incrementar el campo de visi\xF3n o perspectiva m\xE1s all\xE1 del l\xEDmite regular.
quake-pro-opt-dollyMagnification-name = Multiplicador
quake-pro-opt-dollyMagnification-desc = Incrementa el valor regular de perspectiva por este factor (normalmente 1).
quake-pro-opt-scalarZoomed-name = Ajuste de zoom
quake-pro-opt-scalarZoomed-desc = Ajusta el nivel de zoom sin cambiar la distancia para reducir la distorci\xF3n de perspectiva.
`;

  // localization/fr.ftl
  var fr_default = `# File Conventions:
# Everything related to a plugin starts with the ID of the plugin
# Hardcoded in the Typescript:
# [pluginID]-name = Name
# [pluginID]-desc = Description
# [pluginID]-opt-[optionKey]-name = Option Name
# [pluginID]-opt-[optionKey]-desc = Option Description

## General
menu-learn-more = En-savoir plus
menu-desmodder-plugins = DesModder Plugins
menu-desmodder-tooltip = Parametre de DesModder

## Category names
category-core-name = Essentiel
category-utility-name = Utilitaire
category-visual-name = Visuel
category-integrations-name = Int\xE9grations

## GLesmos
# Unchanged
GLesmos-name = GLesmos
GLesmos-desc = Rendre les implicites sur le GPU. Dans des rares cas, peut causait l'onglet de s'arreter; rechargez la page si vous rencontrez des probl\xE8mes.
GLesmos-label-toggle-glesmos = Rendre avec GLesmos
GLesmos-confirm-lines = Confirmer les lignes
GLesmos-confirm-lines-body = Le rendu des lignes GLesmos peut \xEAtre lent. Soyez prudent, surtout pour une liste de calques.
# Missing: error messages

## Tips
show-tips-name = Afficher des Conseils
show-tips-desc = Afficher les conseils au bas de la liste des expressions.
# Missing: all tips. Is it worthwhile?

## Text Mode
text-mode-name = Mode Text BETA
text-mode-desc = Attendez-vous au bugs. Documentation temporaire:
text-mode-toggle = Option Text Mode
# Missing: error messages

## Find and Replace
find-and-replace-name = Trouver et remplacer
find-and-replace-desc = Ajoute un bouton "remplacer tout" dans le menu Ctrl+F pour refactoriser plus facilement les noms de variables/fonctions.
find-and-replace-replace-all = tout remplacer

## Wolfram To Desmos
wolfram2desmos-name = Wolfram \xE0 Desmos
wolfram2desmos-desc = Coller des expression de math\xE9matiques ASCII (comme les r\xE9sultats de Wolfram Alpha) dans Desmos
wolfram2desmos-opt-reciprocalExponents2Surds-name = Notation Radical
wolfram2desmos-opt-reciprocalExponents2Surds-desc = Conversion de puissances fractionnaires inf\xE9rieures powers \xE0 un en radical \xE9quivalent (surd)
wolfram2desmos-opt-derivativeLoopLimit-name = D\xE9velopper les D\xE9riv\xE9s
wolfram2desmos-opt-derivativeLoopLimit-desc = D\xE9velopper les nth d\xE9riv\xE9s de notation Leivniz en d\xE9riv\xE9s r\xE9p\xE9t\xE9s (limit\xE9 \xE0 10)

## Pin Expressions
pin-expressions-name = \xC9pingler l'Expression
pin-expressions-desc = \xC9pingler l'Expression depuis Edit List mode
pin-expressions-pin = \xC9pingler
pin-expressions-unpin = D\xE9tacher

## Builtin Settings
builtin-settings-name = Param\xE8tres
builtin-settings-desc = Permet l'utilisation de fonctionnalit\xE9s int\xE9gr\xE9es \xE0 Desmos. La plupart des option appliquent uniquement \xE0 votre navigateure et sont ignor\xE9es lorsque vous partagez des graphiques avec d'autres.
builtin-settings-opt-advancedStyling-name = Outils de Style Avanc\xE9
builtin-settings-opt-advancedStyling-desc = Permet l'\xE9dition d'\xE9tiquettes, l'affichage au survol, le contour du texte et la grille \xE0 un quadrant
builtin-settings-opt-authorFeatures-name = Tableau Graphiques
# Unchanged
builtin-settings-opt-graphpaper-desc = {""}
builtin-settings-opt-pointsOfInterest-name = Afficher les points d'int\xE9r\xEAt
builtin-settings-opt-pointsOfInterest-desc = Interception, trous, intersections, etc.
builtin-settings-opt-trace-name = Trace des Courbes
# Unchanged
builtin-settings-opt-trace-desc = {""}
builtin-settings-opt-expressions-name = Afficher les expression
# Unchanged
builtin-settings-opt-expressions-desc = {""}
builtin-settings-opt-zoomButtons-name = Afficher le navigateur de zoom
# Unchanged
builtin-settings-opt-zoomButtons-desc = {""}
builtin-settings-opt-keypad-name = Afficher le Clavier
# Unchanged
builtin-settings-opt-keypad-desc = {""}

## Duplicate Expression Hotkey
duplicate-expression-hotkey-name = Touche de raccourci d'expression en double
duplicate-expression-hotkey-desc = Tapez Ctrl+Q ou Ctrl+Maj+Q pour dupliquer l'expression s\xE9lectionn\xE9e.

## Right Click Tray
right-click-tray-name = Clic droit pour options
right-click-tray-desc = Permets l'utilisation d'un clic droit au lieu d'avoir \xE0 maintenir le clic gauche pour ouvire le dialgue d'options (style circulaire)

## Set Primary Color
set-primary-color-name = D\xE9finir la Couleur Primaire
set-primary-color-desc = D\xE9finir la couleur primaire pour l'interface utilisateur
set-primary-color-opt-primaryColor-name = Couleur Primaire
set-primary-color-opt-primaryColor-desc = Couleur Primaire pour la calculatrice
set-primary-color-opt-doFavicon-name = Changer l'Ic\xF4ne du Site
set-primary-color-opt-doFavicon-desc = {""}

## Hide Errors
hide-errors-name = Cacher les Erreurs
hide-errors-desc = Click error triangles to fade them and hide suggested sliders.
hide-errors-hide = cacher

## Folder Tools
folder-tools-name = Outils de Dossier
folder-tools-desc = Ajoute des boutons en mode revision de liste pour aider \xE0 g\xE9rer les dossiers.
folder-tools-dump = D\xE9charger
folder-tools-merge = Fusionner
folder-tools-enclose = Enfermer

## Video Creator
video-creator-name = Cr\xE9ateur de Vid\xE9os
video-creator-desc = Cr\xE9er des vid\xE9os et des GIFs de vos graphiques en fonction d'actions ou de curseurs.
video-creator-menu = Menu du Cr\xE9ateur de Vid\xE9os
video-creator-to = \xE0
video-creator-step = , \xE9tape
video-creator-prev-action = Pr\xE9c\xE9dent
video-creator-next-action = Suivant
video-creator-size = Taille:
video-creator-step-count = Nombe d'\xE9tape:
video-creator-target-same-pixel-ratio = Cibler le m\xEAme ratio de pixels
video-creator-target-tooltip = Ajuste la mise \xE0 l'\xE9chelle de la largeur de ligne, de la taille des points, de la taille de l'\xE9tiquette, etc.
video-creator-ffmpeg-loading = Chargement de FFmpeg...
video-creator-ffmpeg-fail = Si cela ne fonctionne pas dans quelque instants, essayez de recharger la page ou de signaler ce bogue aux d\xE9veloppeurs de DesModder.
video-creator-exporting = Rendition en cours...
video-creator-cancel-capture = Annuler
video-creator-cancel-export = Annuler
video-creator-capture = Enregistrer
video-creator-preview = Avant-premi\xE8re
video-creator-delete-all = Tout Suprimer
video-creator-filename-placeholder = d\xE9finir le nom de fichier
video-creator-export = Cr\xE9er
video-creator-export-as = Cr\xE9er comme { $fileType }
video-creator-fps = Images par seconde:
video-creator-method-once = unique
video-creator-method-slider = curseurs
# Unchanged
video-creator-method-action = action

## Wakatime
# Unchanged
wakatime-name = WakaTime
wakatime-desc = Suivez votre activit\xE9 sur Desmos sur WakaTime.com
wakatime-opt-secretKey-name = Clef Secr\xE8te
wakatime-opt-secretKey-desc = Cl\xE9 API utilis\xE9e pour les serveurs WakaTime
wakatime-opt-splitProjects-name = Diviser les projets par graphique
wakatime-opt-splitProjects-desc = Stockez chaque graphique comme son propre projet au lieu des branches d'un projet unifi\xE9
wakatime-opt-projectName-name = Nom du projet
wakatime-opt-projectName-desc = Visible depuis WakaTime, et partag\xE9 pour tous les projets Desmos

## Performance Display
performance-info-name = Affichage des Performances
performance-info-desc = Affiche des informations sur les performances du graphique actuel.
performance-info-refresh-graph = Actualiser le graphique
performance-info-refresh-graph-tooltip = Actualisez le graphique pour mesurer le temps de chargement initial
performance-info-sticky-tooltip = Garder le Menu Ouvert
# Unchanged
performance-info-time-in-worker = Time In Worker
performance-info-compiling = Compilation
performance-info-rendering = Rendition
performance-info-other = Autre

## Better Evaluation View
better-evaluation-view-name = Meilleure Vue d'\xE9valuation
better-evaluation-view-desc = Affiche les \xE9l\xE9ments de la liste, les couleurs et les valeurs non d\xE9finies
better-evaluation-view-evaluation-list = { $count } \xE9l\xE9ments liste
better-evaluation-view-opt-lists-name = Afficher les \xE9l\xE9ments du liste
better-evaluation-view-opt-lists-desc = Afficher les \xE9l\xE9ments du liste plut\xF4t que la longeur du liste
better-evaluation-view-opt-colors-name = Afficher les couleurs
better-evaluation-view-opt-colors-desc = Afficher les couleurs comme des valeurs RGB
better-evaluation-view-opt-colorLists-name = Afficher les liste de couleurs
better-evaluation-view-opt-colorLists-desc = Afficher les liste de couleurs comme des valeurs RGB
`;

  // localization/ja.ftl
  var ja_default = '# File Conventions:\n# Everything related to a plugin starts with the ID of the plugin\n# Hardcoded in the Typescript:\n# [pluginID]-name = \u540D\u524D\n# [pluginID]-desc = \u8AAC\u660E\n# [pluginID]-opt-[optionKey]-name = \u30AA\u30D7\u30B7\u30E7\u30F3\u540D\n# [pluginID]-opt-[optionKey]-desc = \u30AA\u30D7\u30B7\u30E7\u30F3\u8AAC\u660E\n\n## General\nmenu-learn-more = \u8A73\u7D30\nmenu-desmodder-plugins = DesModder \u30D7\u30E9\u30B0\u30A4\u30F3\nmenu-desmodder-tooltip = DesModder \u30E1\u30CB\u30E5\u30FC\n\n## Category names\ncategory-core-name = \u30B3\u30A2\ncategory-utility-name = \u64CD\u4F5C\ncategory-visual-name = \u5916\u89B3\ncategory-integrations-name = \u30A4\u30F3\u30C6\u30B0\u30EC\u30FC\u30B7\u30E7\u30F3\n\n## GLesmos\nGLesmos-name = GLesmos\nGLesmos-desc = GPU \u3067\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u3002\u307E\u308C\u306B UI \u304C\u9045\u304F\u306A\u3063\u305F\u308A\u3001\u30D5\u30EA\u30FC\u30BA\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u554F\u984C\u304C\u3042\u308B\u5834\u5408\u306F\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nGLesmos-label-toggle-glesmos = GLesmos \u3092\u4F7F\u3063\u305F\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\nGLesmos-confirm-lines = \u7DDA\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306E\u78BA\u8A8D\nGLesmos-confirm-lines-body = GLesmos \u306E\u7DDA\u306E\u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\u306F\u9045\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u7279\u306B\u30EC\u30A4\u30E4\u30FC\u306E\u30EA\u30B9\u30C8\u306B\u306F\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nGLesmos-no-support = \u6B8B\u5FF5\u306A\u304C\u3089\u3001\u3042\u306A\u305F\u306E\u30D6\u30E9\u30A6\u30B6\u306F WebGL2 \u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u3001GLesmos \u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u307E\u305B\u3093\u3002\nGLesmos-not-enabled = \u3053\u306E\u30B0\u30E9\u30D5\u306E\u9670\u95A2\u6570\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u3092\u5411\u4E0A\u3055\u305B\u308B\u305F\u3081\u306B\u3001GLesmos \u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n# Missing: error messages\n\n## Tips\nshow-tips-name = \u30D2\u30F3\u30C8\u306E\u8868\u793A\nshow-tips-desc = \u6570\u5F0F\u30EA\u30B9\u30C8\u306E\u4E00\u756A\u4E0B\u306B\u30D2\u30F3\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\u3002\nshow-tips-tip-export-videos = \u52D5\u753B\u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3059\u308B\u5834\u5408\u306F\u3001GIF \u3088\u308A\u3082 MP4 \u307E\u305F\u306F APNG \u306E\u307B\u3046\u304C\u3088\u3044\u3067\u3057\u3087\u3046\u3002\nshow-tips-tip-disable-graphpaper = \u8A08\u7B97\u6A5F\u306E\u8A2D\u5B9A\u3067\u30B0\u30E9\u30D5\u7528\u7D19\u3092\u7121\u52B9\u306B\u3059\u308B\u3068\u3001\u4E00\u9023\u306E\u6570\u5F0F\u3092\u66F8\u304F\u306E\u306B\u4FBF\u5229\u3067\u3059\u3002\nshow-tips-tip-paste-asciimath = Desmos \u306B\u306F\u76F4\u63A5 ASCII Math \u3092\u8CBC\u308A\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-pin = \u3088\u304F\u4F7F\u3046\u6570\u5F0F\u3092\u56FA\u5B9A\uFF08\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\uFF09\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u3092\u7C21\u7565\u5316\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-long-video-capture = \u9577\u3044\u52D5\u753B\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u3092\u306F\u3058\u3081\u308B\u524D\u306B\u30C6\u30B9\u30C8\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002\nshow-tips-tip-find-replace = \u691C\u7D22\u3068\u7F6E\u63DB\u306F\u5909\u6570\u540D\u306E\u5909\u66F4\u306B\u6700\u9069\u3067\u3059\u3002\nshow-tips-tip-duplicate = Ctrl+Q \u307E\u305F\u306F Ctrl+Shift+Q \u3092\u62BC\u4E0B\u3057\u3066\u3001\u73FE\u5728\u306E\u5F0F\u3092\u8907\u88FD\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-note-newline = \u8AAC\u660E\u6587\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u30BF\u30A4\u30C8\u30EB\u3067 Shift+Enter \u3092\u62BC\u4E0B\u3059\u308B\u3068\u6539\u884C\u3055\u308C\u307E\u3059\u3002\nshow-tips-tip-hide-errors = \u9EC4\u8272\u306E\u4E09\u89D2\u5F62\u3092\u30AF\u30EA\u30C3\u30AF\uFF08\u307E\u305F\u306F Shift+Enter \u3092\u62BC\u4E0B\uFF09\u3059\u308B\u3068\u3001\u30A8\u30E9\u30FC\u304C\u975E\u8868\u793A\u306B\u306A\u308A\u307E\u3059\u3002\nshow-tips-tip-note-folder =  " \u3092\u62BC\u4E0B\u3059\u308B\u3068\u3001\u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u7D20\u65E9\u304F\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-arctan = \u70B9\u306E\u89D2\u5EA6\u3092\u6C42\u3081\u308B\u306B\u306F\u3001arctan(y / x) \u306E\u4EE3\u308F\u308A\u306B arctan(y, x) \u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-indefinite-integral = \u7A4D\u5206\u7BC4\u56F2\u306F\u7121\u9650\u533A\u9593\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-random = \u30E9\u30F3\u30C0\u30E0\u95A2\u6570\u306F\u5206\u5E03\u304B\u3089\u30B5\u30F3\u30D7\u30EA\u30F3\u30B0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-two-argument-round = 2 \u5F15\u6570\u306E round \u95A2\u6570\u306F\u30E9\u30D9\u30EB\u3067\u306E\u4E38\u3081\u306B\u6700\u9069\u3067\u3059\u3002\nshow-tips-tip-two-argument-sort = sort(A, B) \u3092\u4F7F\u3063\u3066\u3001\u5225\u306E\u30EA\u30B9\u30C8\u3092\u30AD\u30FC\u3068\u3057\u3066\u3042\u308B\u30EA\u30B9\u30C8\u3092\u30BD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-custom-colors = rgb \u95A2\u6570\u3068 hsv \u95A2\u6570\u3092\u4F7F\u3063\u3066\u30AB\u30B9\u30BF\u30E0\u30AB\u30E9\u30FC\u3092\u4F5C\u6210\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-ctrl-f = Ctrl+F \u3067\u6570\u5F0F\u3092\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-derivatives = \u30E9\u30B0\u30E9\u30F3\u30B8\u30E5\u8A18\u6CD5\u307E\u305F\u306F\u30E9\u30A4\u30D7\u30CB\u30C3\u30C4\u8A18\u6CD5\u3092\u7528\u3044\u3066\u5C0E\u95A2\u6570\u3092\u3068\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-unbounded-list-slices = \u30EA\u30B9\u30C8\u306E\u30B9\u30E9\u30A4\u30B9\u306F\u7D42\u4E86\u4F4D\u7F6E\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093\u3002\nshow-tips-tip-dataviz-plots = \u30C7\u30FC\u30BF\u3092\u8996\u899A\u5316\u3059\u308B\u306B\u306F\u3001\u30D2\u30B9\u30C8\u30B0\u30E9\u30E0\u3084\u7BB1\u3072\u3052\u56F3\u306A\u3069\u304C\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-statistics = Desmos \u306B\u306F\u591A\u304F\u306E\u7D71\u8A08\u6A5F\u80FD\u304C\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u307E\u3059\u3002\nshow-tips-tip-table-draggable-points = \u30C9\u30E9\u30C3\u30B0\u53EF\u80FD\u306A\u70B9\u306E\u30EA\u30B9\u30C8\u306B\u306F\u8868\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-polygon = \u7C21\u5358\u306A\u591A\u89D2\u5F62\u306B\u306F polygon \u95A2\u6570\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-point-arithmetic = \u70B9\uFF08\u30D9\u30AF\u30C8\u30EB\uFF09\u6F14\u7B97\u306F\u671F\u5F85\u901A\u308A\u306B\u6A5F\u80FD\u3057\u307E\u3059\u3002\u4F8B: (1, 2) + (3, 4) = (4, 6)\nshow-tips-tip-shift-drag = Shift \u30AD\u30FC\u3092\u62BC\u3057\u306A\u304C\u3089\u8EF8\u306E\u4E0A\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B\u3068\u3001\u305D\u306E\u8EF8\u3060\u3051\u3092\u62E1\u5927\u7E2E\u5C0F\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-action-ticker = \u30A2\u30AF\u30B7\u30E7\u30F3\u3068\u30C6\u30A3\u30C3\u30AB\u30FC\u3092\u4F7F\u3046\u3068\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-latex-copy-paste = Desmos \u306E\u6570\u5F0F\u306F\u3001LaTeX \u30A8\u30C7\u30A3\u30BF\u306B\u76F4\u63A5\u30B3\u30D4\u30FC&\u30DA\u30FC\u30B9\u30C8\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-time-in-worker = \u30B0\u30E9\u30D5\u306E\u5B9F\u884C\u901F\u5EA6\u3092\u30C6\u30B9\u30C8\u3059\u308B\u306B\u306F\u3001?timeInWorker \u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u8868\u793A\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-format-labels = \u70B9\u306E\u30E9\u30D9\u30EB\u3092\u6570\u5F0F\u306B\u3059\u308B\u306B\u306F\u30D0\u30C3\u30AF\u30AF\u30A9\u30FC\u30C8\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-dynamic-labels = \u5909\u6570\u306B\u57FA\u3065\u304F\u52D5\u7684\u306A\u70B9\u306E\u30E9\u30D9\u30EB\u306B\u306F ${"{"} {"}"} \u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-disable-text-outline = \u30E9\u30D9\u30EB\u306E\u8F2A\u90ED\u3092\u7121\u52B9\u306B\u3059\u308B\u3068\u8AAD\u307F\u3084\u3059\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\nshow-tips-tip-regression-power = \u56DE\u5E30\u5206\u6790\u306F\u60F3\u50CF\u4EE5\u4E0A\u306B\u5F37\u529B\u3067\u3059\u3002\nshow-tips-tip-spreadsheet-table = \u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u306E\u30C7\u30FC\u30BF\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u8868\u3092\u4F5C\u6210\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-keyboard-shortcuts = Ctrl+/ \u304B Cmd+/ \u3067\u30AD\u30FC\u30DC\u30FC\u30C9\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E\u30EA\u30B9\u30C8\u3092\u958B\u3051\u307E\u3059\u3002\nshow-tips-tip-listcomps = \u30EA\u30B9\u30C8\u5185\u5305\u306F\u3001\u70B9\u306E\u30B0\u30EA\u30C3\u30C9\u3084\u591A\u89D2\u5F62\u306E\u30EA\u30B9\u30C8\u306B\u6700\u9069\u3067\u3059\u3002\nshow-tips-tip-list-filters = \u30EA\u30B9\u30C8\u30D5\u30A3\u30EB\u30BF\u30FC\u306F\u3001\u6B63\u306E\u8981\u7D20\u3084\u5076\u6570\u306E\u8981\u7D20\u306A\u3069\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-bernard = Bernard\nshow-tips-tip-new-desmos = Desmos \u306E\u65B0\u7740\u60C5\u5831\nshow-tips-tip-simultaneous-actions =\u30A2\u30AF\u30B7\u30E7\u30F3\u306E\u5272\u308A\u5F53\u3066\u306F\u9806\u6B21\u3067\u306F\u306A\u304F\u3001\u540C\u6642\u306B\u884C\u308F\u308C\u307E\u3059\u3002\nshow-tips-tip-share-permalink = \u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u306A\u304F\u3066\u3082\u3001\u30D1\u30FC\u30DE\u30EA\u30F3\u30AF\u7D4C\u7531\u3067\u30B0\u30E9\u30D5\u3092\u5171\u6709\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-point-coordinate = \u70B9\u306E\u5909\u6570\u306B .x \u3084 .y \u3092\u8FFD\u52A0\u3057\u3066\u3001x \u5EA7\u6A19\u3084 y \u5EA7\u6A19\u3092\u62BD\u51FA\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-audiotrace = \u30AA\u30FC\u30C7\u30A3\u30AA\u30C8\u30EC\u30FC\u30B9\u3092\u4F7F\u3063\u3066\u30B0\u30E9\u30D5\u3092\u8074\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-audiotrace-note-frequency = \u30AA\u30FC\u30C7\u30A3\u30AA\u30C8\u30EC\u30FC\u30B9\u306E\u5468\u6CE2\u6570\u306F\u8868\u793A\u57DF\u5185\u306E\u9AD8\u3055\u307E\u305F\u306F\u4F4E\u3055\u306B\u4F9D\u5B58\u3057\u307E\u3059\u3002\nshow-tips-tip-audiotrace-range = \u30AA\u30FC\u30C7\u30A3\u30AA\u30C8\u30EC\u30FC\u30B9\u306E\u7BC4\u56F2\u306F E4\uFF08329.63 Hz\uFF09\u304B\u3089 E5\uFF08659.25 Hz\uFF09\u307E\u3067\u3067\u3059\u3002\nshow-tips-tip-other-calculators = Desmos \u306B\u306F\u4ED6\u306B\u3082\u8A08\u7B97\u6A5F\u304C\u3042\u308A\u307E\u3059\u3002\nshow-tips-tip-lock-viewport = \u8868\u793A\u57DF\u3092\u79FB\u52D5\u3055\u305B\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001\u30B0\u30E9\u30D5\u306E\u8A2D\u5B9A\u3067\u56FA\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-glesmos = GLesmos \u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u9670\u95A2\u6570\u3092\u9AD8\u901F\u5316\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-disable-show-tips = \u79C1\u306B\u306F\u3046\u3093\u3056\u308A\uFF1F\u30D2\u30F3\u30C8\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u306B\u306F DesModder \u306E\u8A2D\u5B9A\u3067\u30D2\u30F3\u30C8\u8868\u793A\u306E\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u7121\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\nshow-tips-tip-compact-view-multiline = \u6570\u5F0F\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u306B\u3046\u3093\u3056\u308A\u3057\u3066\u3044\u307E\u305B\u3093\u304B\uFF1F\u5C0F\u578B\u30D3\u30E5\u30FC\u3084\u8907\u6570\u884C\u30E2\u30FC\u30C9\u3092\u6709\u52B9\u306B\u3059\u308B\u3068\u3001\u3059\u3050\u306B\u6570\u5F0F\u306E\u5168\u4F53\u3092\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nshow-tips-tip-intellisense = \u9577\u3044\u5909\u6570\u540D\u304C\u591A\u3059\u304E\u307E\u3059\u304B\uFF1F\u30A4\u30F3\u30C6\u30EA\u30BB\u30F3\u30B9\u3092\u6709\u52B9\u306B\u3057\u3066\u3001\u7C21\u5358\u306B\u6271\u3048\u308B\u3088\u3046\u306B\u3057\u307E\u3057\u3087\u3046\u3002\nshow-tips-tip-youre-doing-great = \u3042\u306A\u305F\u306F\u3088\u304F\u9811\u5F35\u3063\u3066\u3044\u307E\u3059 :)\nshow-tips-tip-youre-superb = \u3042\u306A\u305F\u306F\u7D20\u6674\u3089\u3057\u3044 <3\nshow-tips-tip-huggy = Huggy!\n\n## Text Mode\ntext-mode-name = \u30C6\u30AD\u30B9\u30C8\u30E2\u30FC\u30C9\uFF08\u30D9\u30FC\u30BF\u7248\uFF09\ntext-mode-desc = \u30D0\u30B0\u304C\u3042\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u4E00\u6642\u7684\u306A\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u3053\u3061\u3089:\ntext-mode-toggle = \u30C6\u30AD\u30B9\u30C8\u30E2\u30FC\u30C9\u306E\u5207\u308A\u66FF\u3048\ntext-mode-toggle-spaces = \u30B9\u30DA\u30FC\u30B9\ntext-mode-toggle-spaces-tooltip = \u6574\u5F62\u6642\u3001\u30C7\u30EA\u30DF\u30BF\u306E\u5F8C\u306B\u30B9\u30DA\u30FC\u30B9\u3092\u633F\u5165\u3057\u307E\u3059\u3002\ntext-mode-toggle-newlines = \u30A4\u30F3\u30C7\u30F3\u30C8\ntext-mode-toggle-newlines-tooltip = \u6574\u5F62\u6642\u3001\u6539\u884C\u3068\u30A4\u30F3\u30C7\u30F3\u30C8\u3092\u633F\u5165\u3057\u307E\u3059\u3002\ntext-mode-format = \u6574\u5F62\n\n## Find and Replace\nfind-and-replace-name = \u691C\u7D22\u3068\u7F6E\u63DB\nfind-and-replace-desc = Ctrl+F \u30E1\u30CB\u30E5\u30FC\u306B\u8FFD\u52A0\u3055\u308C\u305F\u300C\u3059\u3079\u3066\u7F6E\u63DB\u300D\u30DC\u30BF\u30F3\u304B\u3089\u3001\u5909\u6570\u540D\u3084\u95A2\u6570\u540D\u306E\u4E00\u62EC\u7F6E\u63DB\u304C\u3067\u304D\u307E\u3059\u3002\nfind-and-replace-replace-all = \u3059\u3079\u3066\u7F6E\u63DB\n\n## Wolfram To Desmos\nwolfram2desmos-name = Wolfram \u304B\u3089 Desmos\nwolfram2desmos-desc = ASCII Math\uFF08Wolfram Alpha \u30AF\u30A8\u30EA\u306E\u7D50\u679C\u306A\u3069\uFF09\u3092 Desmos \u306B\u8CBC\u308A\u4ED8\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\nwolfram2desmos-opt-reciprocalExponents2Surds-name = \u6839\u53F7\u8868\u8A18\nwolfram2desmos-opt-reciprocalExponents2Surds-desc = \u81EA\u7136\u6570\u306E\u9006\u6570\u306E\u3079\u304D\u3092\u3001\u305D\u308C\u3068\u7B49\u4FA1\u306A\u6839\u53F7\u8868\u8A18\u3067\u66F8\u304D\u63DB\u3048\u307E\u3059\u3002\nwolfram2desmos-opt-derivativeLoopLimit-name = \u5FAE\u5206\u306E\u5C55\u958B\nwolfram2desmos-opt-derivativeLoopLimit-desc = \u30E9\u30A4\u30D7\u30CB\u30C3\u30C4\u8A18\u6CD5\u306E n \u968E\u5FAE\u5206\u3092\u53CD\u5FA9\u5FAE\u5206\u306B\u5C55\u958B\u3057\u307E\u3059\uFF0810 \u56DE\u307E\u3067\uFF09\u3002\n\n## Pin Expressions\npin-expressions-name = \u6570\u5F0F\u306E\u56FA\u5B9A\npin-expressions-desc = \u300C\u30EA\u30B9\u30C8\u306E\u7DE8\u96C6\u300D\u30E2\u30FC\u30C9\u304B\u3089\u6570\u5F0F\u3092\u56FA\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\npin-expressions-pin = \u56FA\u5B9A\npin-expressions-unpin = \u56FA\u5B9A\u3092\u5916\u3059\n\n## Builtin Settings\nbuiltin-settings-name = \u8A08\u7B97\u6A5F\u306E\u8A2D\u5B9A\nbuiltin-settings-desc = Desmos\u306B\u7D44\u307F\u8FBC\u307E\u308C\u3066\u3044\u308B\u6A5F\u80FD\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002\u307B\u3068\u3093\u3069\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u81EA\u5206\u306E\u30D6\u30E9\u30A6\u30B6\u306B\u306E\u307F\u9069\u7528\u3055\u308C\u3001\u4ED6\u306E\u4EBA\u3068\u30B0\u30E9\u30D5\u3092\u5171\u6709\u3059\u308B\u3068\u304D\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\nbuiltin-settings-opt-advancedStyling-name = \u9AD8\u5EA6\u306A\u30B9\u30BF\u30A4\u30EA\u30F3\u30B0\nbuiltin-settings-opt-advancedStyling-desc = \u30E9\u30D9\u30EB\u306E\u7DE8\u96C6\u3001\u30DE\u30A6\u30B9\u30DB\u30D0\u30FC\u3001\u30E9\u30D9\u30EB\u306E\u8F2A\u90ED\u3001\u7B2C\u4E00\u8C61\u9650\u306E\u76EE\u76DB\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002\nbuiltin-settings-opt-graphpaper-name = \u30B0\u30E9\u30D5\u7528\u7D19\u3092\u6709\u52B9\u306B\u3059\u308B\nbuiltin-settings-opt-graphpaper-desc = {""}\nbuiltin-settings-opt-authorFeatures-name = \u7BA1\u7406\u8005\u6A5F\u80FD\nbuiltin-settings-opt-authorFeatures-desc = \u96A0\u3057\u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u5207\u308A\u66FF\u3048\u3001\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u306E\u5207\u308A\u66FF\u3048\u306A\u3069\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002\nbuiltin-settings-opt-pointsOfInterest-name = \u6CE8\u76EE\u3059\u3079\u304D\u70B9\u3092\u8868\u793A\nbuiltin-settings-opt-pointsOfInterest-desc = \u5207\u7247\u3001\u9664\u53BB\u53EF\u80FD\u306A\u4E0D\u9023\u7D9A\u70B9\u3001\u4EA4\u70B9\u306A\u3069\u3092\u8868\u793A\u3057\u307E\u3059\u3002\nbuiltin-settings-opt-trace-name = \u66F2\u7DDA\u306B\u6CBF\u3063\u3066\u306A\u305E\u308B\nbuiltin-settings-opt-trace-desc = {""}\nbuiltin-settings-opt-expressions-name = \u6570\u5F0F\u30EA\u30B9\u30C8\u306E\u8868\u793A\nbuiltin-settings-opt-expressions-desc = {""}\nbuiltin-settings-opt-zoomButtons-name = \u30BA\u30FC\u30E0\u30DC\u30BF\u30F3\u306E\u8868\u793A\nbuiltin-settings-opt-zoomButtons-desc = {""}\nbuiltin-settings-opt-keypad-name = \u30AD\u30FC\u30D1\u30C3\u30C9\u306E\u8868\u793A\nbuiltin-settings-opt-keypad-desc = {""}\nbuiltin-settings-opt-showPerformanceMeter-name = \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u30E1\u30FC\u30BF\u30FC\u3092\u8868\u793A\nbuiltin-settings-opt-showPerformanceMeter-desc = {""}\nbuiltin-settings-opt-showIDs-name = ID \u3092\u8868\u793A\nbuiltin-settings-opt-showIDs-desc = \u884C\u756A\u53F7\u306E\u4EE3\u308F\u308A\u306B\u6570\u5F0F ID \u3092\u8868\u793A\u3057\u307E\u3059\u3002\n\n## Duplicate Expression Hotkey\nduplicate-expression-hotkey-name = \u6570\u5F0F\u8907\u88FD\u306E\u30DB\u30C3\u30C8\u30AD\u30FC\nduplicate-expression-hotkey-desc = Ctrl+Q \u307E\u305F\u306F Ctrl+Shift+Q \u3092\u62BC\u4E0B\u3059\u308B\u3053\u3068\u3067\u5F0F\u3092\u8907\u88FD\u3067\u304D\u307E\u3059\u3002\n\n## Right Click Tray\nright-click-tray-name = \u30C8\u30EC\u30A4\u306E\u53F3\u30AF\u30EA\u30C3\u30AF\nright-click-tray-desc = \u5DE6\u30AF\u30EA\u30C3\u30AF\u306E\u9577\u62BC\u3057\u3067\u306F\u306A\u304F\u53F3\u30AF\u30EA\u30C3\u30AF\u3067\u5404\u6570\u5F0F\u306E\u8A2D\u5B9A\u30C8\u30EC\u30A4\u3092\u958B\u3051\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\n\n## Set Primary Color\nset-primary-color-name = \u57FA\u8ABF\u8272\u8A2D\u5B9A\nset-primary-color-desc = UI \u306E\u57FA\u8ABF\u8272\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\nset-primary-color-opt-primaryColor-name = \u57FA\u8ABF\u8272\nset-primary-color-opt-primaryColor-desc = \u8A08\u7B97\u6A5F\u5168\u4F53\u306E\u57FA\u8ABF\u8272\nset-primary-color-opt-doFavicon-name = \u30D5\u30A1\u30D3\u30B3\u30F3\u306B\u9069\u7528\nset-primary-color-opt-doFavicon-desc = \u30D5\u30A1\u30D3\u30B3\u30F3\u306B\u3082\u57FA\u8ABF\u8272\u8A2D\u5B9A\u3092\u9069\u7528\u3057\u307E\u3059\u3002\n\n## Hide Errors\nhide-errors-name = \u30A8\u30E9\u30FC\u306E\u975E\u8868\u793A\nhide-errors-desc = \u30A8\u30E9\u30FC\u306E\u4E09\u89D2\u5F62\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u975E\u8868\u793A\u306B\u3057\u307E\u3059\u3002\nhide-errors-hide = \u975E\u8868\u793A\n\n## Folder Tools\nfolder-tools-name = \u30D5\u30A9\u30EB\u30C0\u30FC\u7BA1\u7406\u30C4\u30FC\u30EB\nfolder-tools-desc = \u300C\u30EA\u30B9\u30C8\u306E\u7DE8\u96C6\u300D\u30E2\u30FC\u30C9 \u3067\u30D5\u30A9\u30EB\u30C0\u30FC\u7BA1\u7406\u306B\u5F79\u7ACB\u3064\u30DC\u30BF\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\nfolder-tools-dump = \u30D5\u30A9\u30EB\u30C0\u30FC\u3092\u5C55\u958B\nfolder-tools-merge = \u4E0B\u306E\u6570\u5F0F\u3084\u30D5\u30A9\u30EB\u30C0\u30FC\u3068\u7D71\u5408\nfolder-tools-enclose = \u30D5\u30A9\u30EB\u30C0\u30FC\u306B\u5305\u3080\n\n## Video Creator\nvideo-creator-name = \u52D5\u753B\u4F5C\u6210\nvideo-creator-desc = \u30A2\u30AF\u30B7\u30E7\u30F3\u3084\u30B9\u30E9\u30A4\u30C0\u30FC\u306B\u57FA\u3065\u3044\u3066\u30B0\u30E9\u30D5\u306E\u52D5\u753B\u3084 GIF \u3092\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002\nvideo-creator-menu = \u52D5\u753B\u4F5C\u6210\u30E1\u30CB\u30E5\u30FC\nvideo-creator-to = to\nvideo-creator-step = , \u4E3B\u76EE\u76DB\nvideo-creator-ticks-playing-sliders = Playing sliders:\nvideo-creator-ticks-step = \u30BF\u30A4\u30E0\u30B9\u30C6\u30C3\u30D7\uFF08ms\uFF09:\nvideo-creator-prev-action = \u524D\u3078\nvideo-creator-next-action = \u6B21\u3078\nvideo-creator-orientation = Orientation\nvideo-creator-orientation-mode-current-speed = current\nvideo-creator-orientation-mode-current-delta = step\nvideo-creator-orientation-mode-from-to = from/to\nvideo-creator-size = \u30B5\u30A4\u30BA:\nvideo-creator-mosaic = \u30E2\u30B6\u30A4\u30AF:\nvideo-creator-angle-current = Angle:\nvideo-creator-angle-from = From:\nvideo-creator-angle-to = To:\nvideo-creator-angle-step = Step:\nvideo-creator-angle-speed = Speed:\nvideo-creator-step-count = \u30B9\u30C6\u30C3\u30D7\u6570:\nvideo-creator-frame-count = \u30D5\u30EC\u30FC\u30E0\u6570:\nvideo-creator-target-same-pixel-ratio = \u30D4\u30AF\u30BB\u30EB\u6BD4\u3092\u63C3\u3048\u308B\nvideo-creator-fast-screenshot = \u9AD8\u901F\u30AD\u30E3\u30D7\u30C1\u30E3\nvideo-creator-target-tooltip = \u7DDA\u306E\u5E45\u3001\u70B9\u306E\u30B5\u30A4\u30BA\u3001\u30E9\u30D9\u30EB\u30B5\u30A4\u30BA\u306A\u3069\u306E\u62E1\u5927\u7E2E\u5C0F\u3092\u8ABF\u6574\u3057\u3066\u30D4\u30AF\u30BB\u30EB\u6BD4\u3092\u63C3\u3048\u308B\nvideo-creator-ffmpeg-loading = FFmpeg \u3092\u8AAD\u307F\u8FBC\u307F\u4E2D...\nvideo-creator-ffmpeg-fail = \u6570\u79D2\u4EE5\u5185\u306B\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u5834\u5408\u306F\u3001\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u304B\u3001\u3053\u306E\u30D0\u30B0\u3092 DesModder \u958B\u767A\u8005\u306B\u5831\u544A\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002\nvideo-creator-exporting = \u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\u4E2D...\nvideo-creator-cancel-capture = \u30AD\u30E3\u30F3\u30BB\u30EB\nvideo-creator-cancel-export = \u30AD\u30E3\u30F3\u30BB\u30EB\nvideo-creator-capture = \u30AD\u30E3\u30D7\u30C1\u30E3\nvideo-creator-preview = \u30D7\u30EC\u30D3\u30E5\u30FC\nvideo-creator-delete-all = \u5168\u30D5\u30EC\u30FC\u30E0\u3092\u524A\u9664\nvideo-creator-filename-placeholder = \u30D5\u30A1\u30A4\u30EB\u540D\u306E\u8A2D\u5B9A\nvideo-creator-export = \u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\nvideo-creator-export-as = { $fileType } \u3068\u3057\u3066\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8\nvideo-creator-fps = FPS:\nvideo-creator-method-once = 1 \u5EA6\u3060\u3051\nvideo-creator-method-ntimes = count\nvideo-creator-method-slider = \u30B9\u30E9\u30A4\u30C0\u30FC\nvideo-creator-method-action = \u30A2\u30AF\u30B7\u30E7\u30F3\nvideo-creator-method-ticks = ticks\n\n## Wakatime\nwakatime-name = WakaTime\nwakatime-desc = WakaTime.com \u3067 Desmos \u306E\u30A2\u30AF\u30C6\u30A3\u30D3\u30C6\u30A3\u3092\u8FFD\u8DE1\u3057\u307E\u3059\u3002\nwakatime-opt-secretKey-name = API \u30AD\u30FC\nwakatime-opt-secretKey-desc = WakaTime \u30B5\u30FC\u30D0\u30FC\u3067\u4F7F\u7528\u3059\u308B API \u30AD\u30FC\nwakatime-opt-splitProjects-name = \u30B0\u30E9\u30D5\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u5206\u5272\u3059\u308B\nwakatime-opt-splitProjects-desc = \u5404\u30B0\u30E9\u30D5\u3092 Desmos \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306E\u30D6\u30E9\u30F3\u30C1\u3068\u3057\u3066\u3067\u306F\u306A\u304F\u3001\u72EC\u81EA\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3068\u3057\u3066\u4FDD\u5B58\u3059\u308B\nwakatime-opt-projectName-name = \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u540D\nwakatime-opt-projectName-desc = WakaTime \u304B\u3089\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u3059\u3079\u3066\u306E Desmos \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u5171\u6709\u3055\u308C\u307E\u3059\u3002\n\n## Performance Display\nperformance-info-name = \u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u8868\u793A\nperformance-info-desc = \u73FE\u5728\u306E\u30B0\u30E9\u30D5\u306E\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u8868\u793A\u3057\u307E\u3059\u3002\nperformance-info-refresh-graph = \u30B0\u30E9\u30D5\u3092\u66F4\u65B0\nperformance-info-refresh-graph-tooltip = \u521D\u671F\u8AAD\u307F\u8FBC\u307F\u6642\u9593\u3092\u30C6\u30B9\u30C8\u3059\u308B\u305F\u3081\u306B\u30B0\u30E9\u30D5\u3092\u66F4\u65B0\u3059\u308B\nperformance-info-sticky-tooltip = \u30E1\u30CB\u30E5\u30FC\u3092\u958B\u3044\u305F\u307E\u307E\u306B\u3059\u308B\nperformance-info-time-in-worker = \u5B9F\u884C\u6642\u9593\nperformance-info-compiling = \u30B3\u30F3\u30D1\u30A4\u30EB\nperformance-info-rendering = \u30EC\u30F3\u30C0\u30EA\u30F3\u30B0\nperformance-info-other = \u305D\u306E\u4ED6\n\n## Better Evaluation View\nbetter-evaluation-view-name = \u8A55\u4FA1\u30D3\u30E5\u30FC\u306E\u6539\u5584\nbetter-evaluation-view-desc = \u30EA\u30B9\u30C8\u306E\u8981\u7D20\u3001\u8272\u3001\u672A\u5B9A\u7FA9\u306E\u5024\u3092\u8868\u793A\u3057\u307E\u3059\u3002\nbetter-evaluation-view-evaluation-list = \u6570\u5217\u306E\u9805\u6570\uFF1A{ $count }\nbetter-evaluation-view-opt-floats-name = \u7279\u6B8A\u306A\u6D6E\u52D5\u5C0F\u6570\u70B9\u5024\nbetter-evaluation-view-opt-floats-desc = \u672A\u5B9A\u7FA9\u306E\u4EE3\u308F\u308A\u306B NaN/\u221E/-\u221E \u3092\u3001 \u8CA0\u306E\u30BC\u30ED\u306B\u5BFE\u3057\u3066 -0 \u3092\u8868\u793A\u3059\u308B\nbetter-evaluation-view-opt-lists-name = \u30EA\u30B9\u30C8\u306E\u8981\u7D20\u3092\u8868\u793A\nbetter-evaluation-view-opt-lists-desc = \u30EA\u30B9\u30C8\u306E\u9577\u3055\u306E\u4EE3\u308F\u308A\u306B\u8981\u7D20\u3092\u8868\u793A\u3059\u308B\nbetter-evaluation-view-opt-colors-name = \u8272\u3092\u8868\u793A\nbetter-evaluation-view-opt-colors-desc = \u8272\u3092 RGB \u5024\u3067\u8868\u793A\u3059\u308B\nbetter-evaluation-view-opt-colorLists-name = \u8272\u306E\u30EA\u30B9\u30C8\u3092\u8868\u793A\nbetter-evaluation-view-opt-colorLists-desc = \u8272\u306E\u30EA\u30B9\u30C8\u3092 RGB \u5024\u306E\u30EA\u30B9\u30C8\u3068\u3057\u3066\u8868\u793A\u3059\u308B\nbetter-navigation-opt-showScrollbar-name = \u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u8868\u793A\nbetter-navigation-opt-showScrollbar-desc = \u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u8868\u793A\u307E\u305F\u306F\u96A0\u3057\u307E\u3059\u3002\u30BF\u30C3\u30C1\u30C7\u30D0\u30A4\u30B9\u3067\u306F\u30AA\u30D5\u306B\u3059\u308B\u3068\u4F7F\u3044\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002\n\n## Pillbox Menus\npillbox-menus-name = Pillbox Menus (Core)\npillbox-menus-desc = \u52D5\u753B\u4F5C\u6210\u30E1\u30CB\u30E5\u30FC\u3084 DesModder \u306E\u30E1\u30A4\u30F3\u30E1\u30CB\u30E5\u30FC\u306A\u3069\u306E\u53F3\u5074\u306E\u30DC\u30BF\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002\n\n## Manage Metadata\nmanage-metadata-name = Manage Metadata (Core)\nmanage-metadata-desc = GLesmos \u3084\u6570\u5F0F\u56FA\u5B9A\u306E\u72B6\u614B\u306A\u3069\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002\n\n## Intellisense\nintellisense-name = \u30A4\u30F3\u30C6\u30EA\u30BB\u30F3\u30B9\nintellisense-desc = \u81EA\u52D5\u88DC\u5B8C\u3001\u95A2\u6570\u547C\u3073\u51FA\u3057\u306E\u30D8\u30EB\u30D7\u3001\u5B9A\u7FA9\u3078\u306E\u30B8\u30E3\u30F3\u30D7\u306A\u3069\u3001\u4E00\u822C\u7684\u306A IDE \u6A5F\u80FD\u3092 Desmos \u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306F\u3053\u3061\u3089:\nintellisense-opt-subscriptify-name = \u81EA\u52D5\u6DFB\u3048\u5B57\nintellisense-opt-subscriptify-desc = \u5909\u6570\u540D / \u95A2\u6570\u540D\u304C\u6DFB\u3048\u5B57\u306A\u3057\u3067\u5165\u529B\u3055\u308C\u308B\u3068\u3001\u81EA\u52D5\u7684\u306B\u6DFB\u3048\u5B57\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\nintellisense-jump2def-menu-instructions = \u8907\u6570\u306E\u5B9A\u7FA9\u304C\u3042\u308A\u307E\u3059\u3002\u4EE5\u4E0B\u304B\u3089\u9078\u3093\u3067\u30B8\u30E3\u30F3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n## Compact View\ncompact-view-name = \u5C0F\u578B\u30D3\u30E5\u30FC\ncompact-view-desc = UI \u3092\u51DD\u7E2E\u3057\u3001\u3059\u3050\u306B\u753B\u9762\u4E0A\u306E\u591A\u304F\u3092\u898B\u3089\u308C\u308B\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u3055\u307E\u3056\u307E\u306A\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\ncompact-view-opt-textFontSize-name = \u6587\u5B57\u30B5\u30A4\u30BA\ncompact-view-opt-textFontSize-desc = {""}\ncompact-view-opt-mathFontSize-name = \u6570\u5F0F\u4E2D\u6587\u5B57\u30B5\u30A4\u30BA\ncompact-view-opt-mathFontSize-desc = {""}\ncompact-view-opt-bracketFontSizeFactor-name = \u62EC\u5F27\u30B5\u30A4\u30BA\u306E\u4FC2\u6570\ncompact-view-opt-bracketFontSizeFactor-desc = \u62EC\u5F27\uFF08\u4E38\u62EC\u5F27\u3001\u6CE2\u62EC\u5F27\u306A\u3069\uFF09\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306F\u3001\u3053\u306E\u5206\u3060\u3051\u6587\u5B57\u30B5\u30A4\u30BA\u304C\u5C0F\u3055\u304F\u306A\u308A\u307E\u3059\u3002\ncompact-view-opt-minimumFontSize-name = \u6700\u5C0F\u6587\u5B57\u30B5\u30A4\u30BA\ncompact-view-opt-minimumFontSize-desc = \u3075\u3055\u308F\u3057\u3044\u6700\u5C0F\u306E\u6587\u5B57\u30B5\u30A4\u30BA\uFF08\u62EC\u5F27\u30B5\u30A4\u30BA\u306E\u4FC2\u6570\u3088\u308A\u512A\u5148\u3055\u308C\u307E\u3059\uFF09\ncompact-view-opt-compactFactor-name = \u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664\ncompact-view-opt-compactFactor-desc = \u6570\u5F0F\u30EA\u30B9\u30C8\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u9664\ncompact-view-opt-hideFolderToggles-name = \u30D5\u30A9\u30EB\u30C0\u30FC\u30E1\u30CB\u30E5\u30FC\u3092\u96A0\u3059\ncompact-view-opt-hideFolderToggles-desc = \u30D5\u30A9\u30EB\u30C0\u30FC\u306E\u8868\u793A / \u975E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u305F\u308A\u6700\u524D\u9762\u306B\u8868\u793A\u3057\u305F\u308A\u3059\u308B\u305F\u3081\u306B\u8FFD\u52A0\u3055\u308C\u305F\u30D5\u30A9\u30EB\u30C0\u30FC\u30E1\u30CB\u30E5\u30FC\u3092\u96A0\u3057\u307E\u3059\u3002\ncompact-view-opt-noSeparatingLines-name = \u533A\u5207\u308A\u7DDA\u3092\u524A\u9664\ncompact-view-opt-noSeparatingLines-desc = \u5F0F\u3068\u5F0F\u306E\u9593\u306E\u533A\u5207\u308A\u7DDA\u3092\u524A\u9664\u3057\u30011 \u884C\u304A\u304D\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\u3067\u4EE3\u66FF\u3057\u307E\u3059\u3002\ncompact-view-opt-highlightAlternatingLines-name = \u6570\u5F0F\u3092\u4EA4\u4E92\u306B\u30CF\u30A4\u30E9\u30A4\u30C8\ncompact-view-opt-highlightAlternatingLines-desc = \u6570\u5F0F\u3092 1 \u884C\u304A\u304D\u306B\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u3001\u4E92\u3044\u306B\u533A\u5225\u3057\u3084\u3059\u304F\u3057\u307E\u3059\u3002\ncompact-view-opt-hideEvaluations-name = \u8A55\u4FA1\u30D3\u30E5\u30FC\u3092\u6298\u308A\u305F\u305F\u3080\ncompact-view-opt-hideEvaluations-desc = \u6570\u5F0F\u306E\u8A55\u4FA1\u30D3\u30E5\u30FC\u3092\u6A2A\u306B\u8868\u793A\u3057\u307E\u3059\u3002\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u305F\u308A\u3001\u30AB\u30FC\u30BD\u30EB\u3092\u5408\u308F\u305B\u305F\u308A\u3059\u308B\u3068\u8868\u793A\u3055\u308C\u307E\u3059\u3002\n\n## Multiline\nmultiline-name = \u8907\u6570\u884C\u30E2\u30FC\u30C9\nmultiline-desc = \u6570\u5F0F\u3092\u8907\u6570\u884C\u306B\u5206\u5272\u3057\u307E\u3059\u3002\nmultiline-opt-widthBeforeMultiline-name = \u3057\u304D\u3044\u5024\uFF08%\uFF09\nmultiline-opt-widthBeforeMultiline-desc = \u6298\u308A\u8FD4\u3057\u304C\u767A\u751F\u3059\u308B\u6700\u5C0F\u5E45\uFF08\u8868\u793A\u57DF\u306E\u30B5\u30A4\u30BA\u306B\u5BFE\u3059\u308B\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\uFF09\u3002\u30E2\u30D0\u30A4\u30EB\u3067\u306F\u3001\u3053\u306E\u5024\u306F 3 \u500D\u306B\u306A\u308A\u307E\u3059\u3002\nmultiline-opt-automaticallyMultilinify-name = \u5165\u529B\u4E2D\u306B\u6539\u884C\u3092\u633F\u5165\u3059\u308B\nmultiline-opt-automaticallyMultilinify-desc = \u5165\u529B\u4E2D\u306B\u6570\u5F0F\u3092\u81EA\u52D5\u7684\u306B\u8907\u6570\u884C\u306B\u5206\u5272\u3059\u308B\u3088\u3046\u306B\u3059\u308B\u3068\u3001Ctrl+M \u3092\u4F7F\u3046\u5FC5\u8981\u304C\u3042\u308A\u307E\u305B\u3093\u3002\nmultiline-opt-multilinifyDelayAfterEdit-name = \u66F4\u65B0\u9593\u9694\uFF08ms\uFF09\nmultiline-opt-multilinifyDelayAfterEdit-desc = \u8907\u6570\u884C\u30E2\u30FC\u30C9\u306E\u81EA\u52D5\u6298\u308A\u8FD4\u3057\u306F\u3001\u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u6642\u9593\u7DE8\u96C6\u304C\u884C\u308F\u308C\u306A\u3051\u308C\u3070\u66F4\u65B0\u3055\u308C\u307E\u3059\u3002\nmultiline-opt-spacesToNewlines-name = \u30B9\u30DA\u30FC\u30B9\u3092\u6539\u884C\u306B\u5909\u63DB\nmultiline-opt-spacesToNewlines-desc = 3 \u3064\u306E\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3092\u6539\u884C\u306B\u5909\u63DB\u3057\u307E\u3059\u3002Shift+Enter \u3092\u62BC\u4E0B\u3057\u3066\u6539\u884C\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\nmultiline-opt-determineLineBreaksAutomatically-name = \u81EA\u52D5\u3067\u6570\u5F0F\u3092\u6298\u308A\u8FD4\u3059\nmultiline-opt-determineLineBreaksAutomatically-desc = \u6539\u884C\u4F4D\u7F6E\u3092\u81EA\u52D5\u7684\u306B\u5224\u65AD\u3057\u307E\u3059\u3002Ctrl+M \u3092\u62BC\u4E0B\u3059\u308B\u3068\u624B\u52D5\u3067\u6539\u884C\u3067\u304D\u307E\u3059\u3002\nmultiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-name = 3 \u3064\u306E\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3092\u542B\u3080\u6570\u5F0F\u3092\u30B9\u30AD\u30C3\u30D7\nmultiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-desc = \u624B\u52D5\u3067\u8FFD\u52A0\u3057\u305F\u6539\u884C\uFF083 \u3064\u306E\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\uFF09\u304C\u3042\u308B\u6570\u5F0F\u306B\u306F\u81EA\u52D5\u7684\u306B\u6539\u884C\u3092\u8FFD\u52A0\u3057\u307E\u305B\u3093\u3002\n\n## Custom MathQuill Config\ncustom-mathquill-config-name = MathQuill \u306E\u30AB\u30B9\u30BF\u30E0\u8A2D\u5B9A\ncustom-mathquill-config-desc = \u6570\u5F0F\u306E\u5165\u529B\u65B9\u6CD5\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-superscriptOperators-name = \u6307\u6570\u3067\u306E\u6F14\u7B97\u5B50\u5165\u529B\ncustom-mathquill-config-opt-superscriptOperators-desc = \u6307\u6570\u306B + \u306E\u3088\u3046\u306A\u6F14\u7B97\u5B50\u3092\u5165\u529B\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-noAutoSubscript-name = \u81EA\u52D5\u6DFB\u3048\u5B57\u3092\u7121\u52B9\u5316\ncustom-mathquill-config-opt-noAutoSubscript-desc = \u5909\u6570\u540D\u306E\u5F8C\u306B\u5165\u529B\u3055\u308C\u305F\u6570\u5B57\u304C\u81EA\u52D5\u3067\u6DFB\u3048\u5B57\u306B\u5165\u308B\u6A5F\u80FD\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-noNEquals-name = \u7DCF\u548C\u306E n= \u3092\u7121\u52B9\u5316\ncustom-mathquill-config-opt-noNEquals-desc = \u7DCF\u548C\u306E\u4E0B\u9650\u306B n= \u304C\u81EA\u52D5\u7684\u306B\u5165\u529B\u3055\u308C\u308B\u6A5F\u80FD\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-subSupWithoutOp-name = \u30AA\u30DA\u30E9\u30F3\u30C9\u306A\u3057\u306E\u4E0A\u4ED8\u304D / \u4E0B\u4ED8\u304D\u6587\u5B57\ncustom-mathquill-config-opt-subSupWithoutOp-desc = \u4E0A\u4ED8\u304D\u6587\u5B57\u3068\u4E0B\u4ED8\u304D\u6587\u5B57\u3092\u3001\u524D\u306B\u4F55\u3082\u4ED8\u3044\u3066\u3044\u306A\u304F\u3066\u3082\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-allowMixedBrackets-name = \u62EC\u5F27\u306E\u4E0D\u4E00\u81F4\u3092\u8A31\u53EF\ncustom-mathquill-config-opt-allowMixedBrackets-desc = \u3059\u3079\u3066\u306E\u62EC\u5F27\u304C\u4E92\u3044\u306B\u4E00\u81F4\u3059\u308B\u3088\u3046\u306B\u3057\u307E\u3059\uFF08\u7D76\u5BFE\u5024\u3092\u542B\u3080\uFF09\u3002\ncustom-mathquill-config-opt-subscriptReplacements-name = \u6DFB\u3048\u5B57\u306E\u7F6E\u63DB\u3092\u8A31\u53EF\ncustom-mathquill-config-opt-subscriptReplacements-desc = \u8A18\u53F7\u3084\u95A2\u6570\u540D\u3092\u6DFB\u3048\u5B57\u3067\u5165\u529B\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-noPercentOf-name = % of \u3092\u7121\u52B9\u5316\ncustom-mathquill-config-opt-noPercentOf-desc = % \u3068\u5165\u529B\u3059\u308B\u3068\u4EE3\u308F\u308A\u306B % of \u304C\u5165\u529B\u3055\u308C\u308B\u6A5F\u80FD\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-commaDelimiter-name = \u6570\u5024\u306E\u30AB\u30F3\u30DE\u533A\u5207\u308A\ncustom-mathquill-config-opt-commaDelimiter-desc = \u6570\u5024\u306E\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u30AB\u30F3\u30DE\u3092\u633F\u5165\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-delimiterOverride-name = \u30AB\u30B9\u30BF\u30E0\u533A\u5207\u308A\u6587\u5B57\ncustom-mathquill-config-opt-delimiterOverride-desc = \u6570\u5024\u306E\u533A\u5207\u308A\u6587\u5B57\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u6587\u5B57\u5217\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-leftIntoSubscript-name = \u5DE6\u53F3\u79FB\u52D5\u3092\u4E0B\u4ED8\u304D\u6587\u5B57\u306B\ncustom-mathquill-config-opt-leftIntoSubscript-desc = \u30AB\u30FC\u30BD\u30EB\u3092\u5DE6\u53F3\u306B\u52D5\u304B\u3057\u305F\u3068\u304D\u3001\u4E0A\u4ED8\u304D\u6587\u5B57\u3067\u306F\u306A\u304F\u4E0B\u4ED8\u304D\u6587\u5B57\u306B\u30AB\u30FC\u30BD\u30EB\u3092\u79FB\u52D5\u3055\u305B\u307E\u3059\u3002\ncustom-mathquill-config-opt-extendedGreek-name = \u30AE\u30EA\u30B7\u30E3\u6587\u5B57\u306E\u62E1\u5F35\ncustom-mathquill-config-opt-extendedGreek-desc = \u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u30AE\u30EA\u30B7\u30E3\u6587\u5B57\u306E\u633F\u5165\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002\ncustom-mathquill-config-opt-lessFSpacing-name = f \u306E\u5468\u308A\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u6E1B\ncustom-mathquill-config-opt-lessFSpacing-desc = \u6587\u5B57 f \u306E\u5468\u308A\u306E\u4F59\u5206\u306A\u30B9\u30DA\u30FC\u30B9\u3092\u524A\u6E1B\u3057\u307E\u3059\u3002\n\n## Code Golf\ncode-golf-name = \u6570\u5F0F\u30B4\u30EB\u30D5\ncode-golf-desc = Desmos \u306E\u6570\u5F0F\u30B4\u30EB\u30D5\u30A1\u30FC\u306E\u305F\u3081\u306E\u88DC\u52A9\u30C4\u30FC\u30EB\ncode-golf-width-in-pixels = \u5E45: { $pixels } px\ncode-golf-symbol-count = \u6587\u5B57\u6570: { $elements }\ncode-golf-click-to-enable-folder = \u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u30B4\u30EB\u30D5\u306E\u7D71\u8A08\u3092\u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002\ncode-golf-note-latex-byte-count = LaTeX \u8868\u73FE\u306E\u30D0\u30A4\u30C8\u6570 { $chars }\n\n## Syntax highlightAlternatingLines\nsyntax-highlighting-name = \u30B7\u30F3\u30BF\u30C3\u30AF\u30B9\u30CF\u30A4\u30E9\u30A4\u30C8\nsyntax-highlighting-desc = \u6570\u5F0F\u306E\u3055\u307E\u3056\u307E\u306A\u90E8\u5206\u306B\u8272\u3092\u3064\u3051\u3066\u5224\u8AAD\u6027\u3092\u9AD8\u3081\u307E\u3059\u3002\nsyntax-highlighting-opt-bracketPairColorization-name = \u62EC\u5F27\u306E\u8272\u4ED8\u3051\nsyntax-highlighting-opt-bracketPairColorization-desc = \u62EC\u5F27\u306B\u4EA4\u4E92\u306B\u8272\u3092\u9069\u7528\u3057\uFF08\u4F8B: ()[]{"{"}{"}"}||\uFF09\u3001\u4E00\u81F4\u3059\u308B\u62EC\u5F27\u306E\u30DA\u30A2\u3092\u898B\u3064\u3051\u3084\u3059\u304F\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-bracketPairColorizationColors-name = \u62EC\u5F27\u306E\u8272\nsyntax-highlighting-opt-bracketPairColorizationColors-desc = \u62EC\u5F27\u306E\u8272\u4ED8\u3051\u306B\u4F7F\u7528\u3059\u308B\u8272\u306E\u6570\u3068\u9806\u5E8F\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-bpcColorInText-name = \u62EC\u5F27\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8272\u4ED8\u3051\u3059\u308B\nsyntax-highlighting-opt-bpcColorInText-desc = \u62EC\u5F27\u5185\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u62EC\u5F27\u306E\u8272\u3092\u9069\u7528\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-thickenBrackets-name = \u62EC\u5F27\u3092\u592A\u304F\u3059\u308B\nsyntax-highlighting-opt-thickenBrackets-desc = \u62EC\u5F27\u3092\u592A\u304F\u3057\u3001\u8272\u4ED8\u3051\u3092\u88DC\u52A9\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-highlightBracketBlocks-name = \u62EC\u5F27\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\nsyntax-highlighting-opt-highlightBracketBlocks-desc = \u30C6\u30AD\u30B9\u30C8\u30AB\u30FC\u30BD\u30EB\u3092\u542B\u3080\u6700\u5C0F\u306E\u62EC\u5F27\u306E\u30DA\u30A2\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-highlightBracketBlocksHover-name = \u30DB\u30D0\u30FC\u6642\u306E\u30CF\u30A4\u30E9\u30A4\u30C8\nsyntax-highlighting-opt-highlightBracketBlocksHover-desc = \u30DE\u30A6\u30B9\u3092\u542B\u3080\u6700\u5C0F\u306E\u62EC\u5F27\u306E\u30DA\u30A2\u3092\u30CF\u30A4\u30E9\u30A4\u30C8\u3057\u307E\u3059\u3002\nsyntax-highlighting-opt-underlineHighlightedRanges-name = \u30CF\u30A4\u30E9\u30A4\u30C8\u7BC4\u56F2\u306B\u4E0B\u7DDA\u3092\u5F15\u304F\nsyntax-highlighting-opt-underlineHighlightedRanges-desc = \u30CF\u30A4\u30E9\u30A4\u30C8\u3055\u308C\u305F\u7BC4\u56F2\u306E\u4E0B\u306B\u6FC3\u3044\u4E0B\u7DDA\u3092\u5F15\u3044\u3066\u898B\u3084\u3059\u304F\u3057\u307E\u3059\u3002\n\n## Better Navigation\nbetter-navigation-name = \u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u306E\u6539\u5584\nbetter-navigation-desc = Desmos \u306E\u6570\u5F0F\u3067\u306E\u79FB\u52D5\u3092\u3088\u308A\u7C21\u5358\u306B\u3059\u308B\u305F\u3081\u306E\u30C4\u30FC\u30EB\nbetter-navigation-opt-ctrlArrow-name = Ctrl+Arrow \u306E\u30B5\u30DD\u30FC\u30C8\nbetter-navigation-opt-ctrlArrow-desc = Ctrl+\u77E2\u5370\u30AD\u30FC \u307E\u305F\u306F Ctrl+Shift+\u77E2\u5370\u30AD\u30FC \u3092\u4F7F\u7528\u3057\u3066\u3001\u5927\u304D\u306A\u30C6\u30AD\u30B9\u30C8\u30D6\u30ED\u30C3\u30AF\u3092\u3059\u3070\u3084\u304F\u30B9\u30AD\u30C3\u30D7\u3057\u307E\u3059\u3002Ctrl+Backspace \u3092\u4F7F\u7528\u3059\u308B\u3068\u3001\u5927\u304D\u306A\u30C6\u30AD\u30B9\u30C8\u30D6\u30ED\u30C3\u30AF\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002\nbetter-navigation-opt-scrollableExpressions-name = \u6570\u5F0F\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u6709\u52B9\u5316\nbetter-navigation-opt-scrollableExpressions-desc = \u6570\u5F0F\u306B\u6C34\u5E73\u30B9\u30AF\u30ED\u30FC\u30EB\u30D0\u30FC\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u3053\u308C\u306F\u4E3B\u306B\u30E2\u30D0\u30A4\u30EB\u3067\u306E\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u7C21\u5358\u306B\u3059\u308B\u305F\u3081\u306E\u3082\u306E\u3067\u3059\u3002\n\n## Paste Image\npaste-image-name = \u753B\u50CF\u306E\u8CBC\u308A\u4ED8\u3051\npaste-image-desc = \u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u8CBC\u308A\u4ED8\u3051\u3066\u4E00\u5EA6\u306B\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002\npaste-image-error-images-not-enabled = \u3053\u306E\u30B0\u30E9\u30D5\u3067\u306F\u753B\u50CF\u306E\u633F\u5165\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u305B\u3093\u3002\npaste-image-error-another-upload-in-progress = \u9032\u884C\u4E2D\u306E\u4ED6\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u304C\u7D42\u4E86\u3057\u3066\u304B\u3089\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n## Quake Pro\nquake-pro-name = Quake Pro\nquake-pro-desc = 3D \u30B0\u30E9\u30D5\u8A08\u7B97\u6A5F\u306E\u901A\u5E38\u306E\u5236\u9650\u3092\u8D85\u3048\u3066\u8996\u91CE\u89D2\u3092\u5E83\u3052\u3089\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\nquake-pro-opt-magnification-name = \u30BA\u30FC\u30E0\u4FC2\u6570\nquake-pro-opt-magnification-desc = \u3053\u306E\u5024\u3092\u639B\u3051\u5408\u308F\u305B\u3066\u8868\u793A\u9818\u57DF\u306E\u30BA\u30FC\u30E0\u4E0A\u9650\u3092\u4E0A\u3052\u308B\n';

  // localization/zh-CN.ftl
  var zh_CN_default = '# File Conventions:\n# Everything related to a plugin starts with the ID of the plugin\n# Hardcoded in the Typescript:\n# [pluginID]-name = Name\n# [pluginID]-desc = Description\n# [pluginID]-opt-[optionKey]-name = Option Name\n# [pluginID]-opt-[optionKey]-desc = Option Description\n\n## General\nmenu-learn-more = \u4E86\u89E3\u66F4\u591A\nmenu-desmodder-plugins = DesModder \u63D2\u4EF6\nmenu-desmodder-tooltip = DesModder \u83DC\u5355\n\n## Category names\ncategory-core-name = \u6838\u5FC3\u529F\u80FD\ncategory-utility-name = \u5DE5\u5177\ncategory-visual-name = \u89C6\u89C9\ncategory-integrations-name = \u96C6\u6210\n\n## GLesmos\nGLesmos-name = GLesmos\nGLesmos-desc = \u4F7F\u7528 GPU \u6E32\u67D3\u9690\u5F0F\u56FE\u5F62\u3002\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\u53EF\u80FD\u5BFC\u81F4\u754C\u9762\u5361\u987F\u6216\u65E0\u54CD\u5E94\uFF1B\u5982\u9047\u95EE\u9898\u8BF7\u5237\u65B0\u9875\u9762\u3002\nGLesmos-label-toggle-glesmos = \u4F7F\u7528 GLesmos \u6E32\u67D3\nGLesmos-confirm-lines = \u786E\u8BA4\u6E32\u67D3\nGLesmos-confirm-lines-body = GLesmos \u6E32\u67D3\u7EBF\u6761\u53EF\u80FD\u4F1A\u5F88\u6162\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u5C24\u5176\u662F\u4F7F\u7528\u5217\u8868\u7ED8\u5236\u4E00\u7CFB\u5217\u56FE\u5C42\u65F6\u3002\nGLesmos-no-support = \u5F88\u62B1\u6B49\uFF0C\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 GLesmos\uFF0C\u56E0\u4E3A\u4E0D\u652F\u6301 WebGL2\u3002\nGLesmos-not-enabled = \u542F\u7528 GLesmos \u63D2\u4EF6\u53EF\u63D0\u5347\u90E8\u5206\u9690\u5F0F\u56FE\u5F62\u7684\u6027\u80FD\u3002\n# Missing: error messages\n\n## Tips\nshow-tips-name = \u663E\u793A tips\nshow-tips-desc = \u5728\u8868\u8FBE\u5F0F\u5217\u8868\u5E95\u90E8\u663E\u793A\u5404\u7C7B\u63D0\u793A\nshow-tips-tip-export-videos = \u5BFC\u51FA\u89C6\u9891\u65F6\uFF0C\u5EFA\u8BAE\u4F18\u5148\u9009\u62E9 MP4 \u6216 APNG \u683C\u5F0F\uFF0C\u907F\u514D\u4F7F\u7528 GIF\nshow-tips-tip-disable-graphpaper = \u5173\u95ED\u8BA1\u7B97\u5668\u8BBE\u7F6E\u4E2D\u7684\u7ED8\u56FE\u533A\uFF0C\u6709\u52A9\u4E8E\u8FDE\u7EED\u8F93\u5165\u591A\u6761\u65B9\u7A0B\nshow-tips-tip-paste-asciimath = \u53EF\u76F4\u63A5\u5C06 ASCII Math \u7C98\u8D34\u5230 Desmos\nshow-tips-tip-pin = \u53EF\u5C06\u5E38\u7528\u8868\u8FBE\u5F0F\u7F6E\u9876\uFF08"\u4E66\u7B7E"\uFF09\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u8BBF\u95EE\nshow-tips-tip-long-video-capture = \u8FDB\u884C\u957F\u65F6\u95F4\u5F55\u5236\u524D\uFF0C\u5EFA\u8BAE\u5148\u4ECE\u5F00\u5934\u7247\u6BB5\u6D4B\u8BD5\u4E00\u4E0B\nshow-tips-tip-find-replace = "\u67E5\u627E\u4E0E\u66FF\u6362"\u529F\u80FD\u5F88\u9002\u5408\u7528\u4E8E\u6279\u91CF\u91CD\u547D\u540D\u53D8\u91CF\u6216\u51FD\u6570\nshow-tips-tip-duplicate = \u6309 Ctrl+Q \u6216 Ctrl+Shift+Q \u53EF\u590D\u5236\u5F53\u524D\u8868\u8FBE\u5F0F\nshow-tips-tip-note-newline = \u5728\u6CE8\u91CA\u4E0E\u6587\u4EF6\u5939\u6807\u9898\u4E2D\u6309 Shift+Enter \u53EF\u6362\u884C\nshow-tips-tip-hide-errors = \u70B9\u51FB\u9EC4\u8272\u8B66\u544A\u7B26\u53F7\uFF08\u6216\u6309 Shift+Enter\uFF09\u53EF\u6DE1\u5316\u8B66\u544A\u5E76\u9690\u85CF\u6ED1\u5757\u521B\u5EFA\u5EFA\u8BAE\nshow-tips-tip-note-folder = \u8F93\u5165 " \uFF08\u82F1\u6587\u53CC\u5F15\u53F7\uFF09\u53EF\u5FEB\u901F\u65B0\u5EFA\u6CE8\u91CA\uFF1B\u8F93\u5165 "folder" \u53EF\u65B0\u5EFA\u6587\u4EF6\u5939\nshow-tips-tip-arctan = \u4F7F\u7528 arctan(y, x) \u800C\u4E0D\u662F arctan(y / x) \u83B7\u53D6\u70B9\u7684\u89D2\u5EA6\nshow-tips-tip-indefinite-integral = \u79EF\u5206\u53EF\u4EE5\u4F7F\u7528\u65E0\u7A77\u4F5C\u4E3A\u4E0A\u4E0B\u9650\nshow-tips-tip-random = random \u51FD\u6570\u53EF\u4EE5\u4ECE\u5206\u5E03\u4E2D\u91C7\u6837\nshow-tips-tip-two-argument-round = round \u7684\u53CC\u53C2\u6570\u5F62\u5F0F\u5F88\u9002\u5408\u5BF9\u6807\u7B7E\u8FDB\u884C\u56DB\u820D\u4E94\u5165\nshow-tips-tip-two-argument-sort = sort(A, B) \u53EF\u4F9D\u636E\u4E00\u4E2A\u5217\u8868\u5BF9\u53E6\u4E00\u4E2A\u5217\u8868\u6392\u5E8F\nshow-tips-tip-custom-colors = \u4F7F\u7528 rgb \u548C hsv \u51FD\u6570\u81EA\u5B9A\u4E49\u989C\u8272\nshow-tips-tip-ctrl-f = \u6309 Ctrl+F \u53EF\u641C\u7D22\u8868\u8FBE\u5F0F\nshow-tips-tip-derivatives = \u53EF\u7528\u6487\u53F7\u6216\u83B1\u5E03\u5C3C\u8328\u8BB0\u53F7\u6C42\u5BFC\nshow-tips-tip-unbounded-list-slices = \u5217\u8868\u5207\u7247\u4E0D\u5FC5\u6709\u754C\nshow-tips-tip-dataviz-plots = \u53EF\u7528\u76F4\u65B9\u56FE(histogram)\u3001\u7BB1\u7EBF\u56FE(boxplot)\u7B49\u65B9\u5F0F\u53EF\u89C6\u5316\u6570\u636E\nshow-tips-tip-statistics = Desmos \u5185\u7F6E\u591A\u79CD\u7EDF\u8BA1\u51FD\u6570\nshow-tips-tip-table-draggable-points = \u4F7F\u7528\u8868\u683C\u53EF\u4EE5\u6279\u91CF\u521B\u5EFA\u53EF\u62D6\u52A8\u7684\u70B9\nshow-tips-tip-polygon = polygon \u51FD\u6570\u53EF\u4FBF\u6377\u7ED8\u5236\u591A\u8FB9\u5F62\nshow-tips-tip-point-arithmetic = \u70B9\uFF08\u5411\u91CF\uFF09\u8FD0\u7B97\u5982 (1, 2) + (3, 4) = (4, 6)\nshow-tips-tip-shift-drag = \u6309\u4F4F Shift \u62D6\u52A8\u5750\u6807\u8F74\u53EF\u5355\u72EC\u7F29\u653E\u8BE5\u8F74\nshow-tips-tip-action-ticker = \u4F7F\u7528 action \u548C ticker \u53EF\u8FDB\u884C\u6A21\u62DF\u8FD0\u7B97\nshow-tips-tip-latex-copy-paste = \u53EF\u5C06 Desmos \u7684\u6570\u5B66\u5185\u5BB9\u76F4\u63A5\u7C98\u8D34\u5230 LaTeX \u7F16\u8F91\u5668\nshow-tips-tip-time-in-worker = \u60F3\u6D4B\u8BD5\u56FE\u8868\u8FD0\u884C\u901F\u5EA6\uFF0C\u53EF\u7528 ?timeInWorker \u6216\u5F00\u542F\u6027\u80FD\u663E\u793A\u63D2\u4EF6\nshow-tips-tip-format-labels = \u7528\u53CD\u5F15\u53F7\u53EF\u8BA9\u70B9\u6807\u7B7E\u4EE5\u6570\u5B66\u683C\u5F0F\u663E\u793A\nshow-tips-tip-dynamic-labels = \u7528 ${"{"} {"}"} \u53EF\u8BBE\u7F6E\u52A8\u6001\u663E\u793A\u53D8\u91CF\u7684\u70B9\u6807\u7B7E\nshow-tips-tip-disable-text-outline = \u5173\u95ED\u6587\u672C\u8F6E\u5ED3\u6709\u65F6\u80FD\u63D0\u5347\u6807\u7B7E\u53EF\u8BFB\u6027\nshow-tips-tip-regression-power = \u56DE\u5F52\u5206\u6790\u6BD4\u4F60\u60F3\u8C61\u7684\u66F4\u5F3A\u5927\nshow-tips-tip-spreadsheet-table = \u7C98\u8D34\u5916\u90E8\u8868\u683C\u6570\u636E\u53EF\u5FEB\u901F\u521B\u5EFA Desmos \u8868\u683C\nshow-tips-tip-keyboard-shortcuts = \u6309 Ctrl+/ \u6216 Cmd+/ \u53EF\u67E5\u770B\u5FEB\u6377\u952E\u5217\u8868\nshow-tips-tip-listcomps = \u5217\u8868\u63A8\u5BFC\u5F0F\u9002\u5408\u6279\u91CF\u751F\u6210\u7F51\u683C\u70B9\u5217\u8868\u6216\u591A\u8FB9\u5F62\u5217\u8868\nshow-tips-tip-list-filters = \u5217\u8868\u8FC7\u6EE4\u5F0F\u53EF\u7528\u4E8E\u7B5B\u9009\u5217\u8868\u4E2D\u7684\u6B63\u6570\u3001\u5076\u6570\u7B49\nshow-tips-tip-bernard = Bernard\nshow-tips-tip-new-desmos = \u4E86\u89E3 Desmos \u65B0\u52A8\u6001\nshow-tips-tip-simultaneous-actions = \u52A8\u4F5C\u8D4B\u503C\u662F\u540C\u65F6\u8FDB\u884C\u7684\uFF0C\u800C\u975E\u987A\u5E8F\u6267\u884C\nshow-tips-tip-share-permalink = \u53EF\u901A\u8FC7\u6C38\u4E45\u94FE\u63A5\u5206\u4EAB\u56FE\u8868\uFF0C\u65E0\u9700\u767B\u5F55\nshow-tips-tip-point-coordinate = \u5728\u70B9\u53D8\u91CF\u540E\u4F7F\u7528 .x \u6216 .y \u53EF\u63D0\u53D6\u5750\u6807\u5206\u91CF\nshow-tips-tip-audiotrace = \u4F7F\u7528\u97F3\u9891\u8DDF\u8E2A\u529F\u80FD\u53EF\u4EE5"\u542C"\u4F60\u7684\u56FE\u8868\uFF01\nshow-tips-tip-audiotrace-note-frequency = \u97F3\u9891\u8DDF\u8E2A\u7684\u97F3\u9AD8\u53D6\u51B3\u4E8E\u5176\u5728\u89C6\u53E3\u4E2D\u7684\u4F4D\u7F6E\nshow-tips-tip-audiotrace-range = \u97F3\u9891\u8DDF\u8E2A\u7684\u97F3\u9AD8\u8303\u56F4\u4E3A E4\uFF08329.63 Hz\uFF09\u5230 E5\uFF08659.25 Hz\uFF09\nshow-tips-tip-other-calculators = Desmos \u8FD8\u6709\u5176\u4ED6\u8BA1\u7B97\u5668\uFF01\nshow-tips-tip-lock-viewport = \u4E0D\u60F3\u8BA9\u89C6\u53E3\u88AB\u79FB\u52A8\uFF1F\u53EF\u5728\u56FE\u8868\u8BBE\u7F6E\u4E2D\u9501\u5B9A\uFF01\nshow-tips-tip-glesmos = \u542F\u7528 GLesmos \u63D2\u4EF6\u53EF\u52A0\u901F\u90E8\u5206\u9690\u5F0F\u56FE\u5F62\u7684\u6E32\u67D3\nshow-tips-tip-disable-show-tips = \u4E0D\u60F3\u518D\u770B\u5230 tips\uFF1F\u53EF\u5728\u8BBE\u7F6E\u4E2D\u5173\u95ED"\u663E\u793A tips"\u63D2\u4EF6\nshow-tips-tip-compact-view-multiline = \u8868\u8FBE\u5F0F\u9762\u677F\u592A\u957F\uFF1F\u8BD5\u8BD5\u5F00\u542F"\u7D27\u51D1\u89C6\u56FE"\u6216"\u591A\u884C\u8868\u8FBE\u5F0F"\nshow-tips-tip-intellisense = \u53D8\u91CF\u540D\u592A\u957F\uFF1F\u542F\u7528"Intellisense"\u8BA9\u64CD\u4F5C\u66F4\u4FBF\u6377\nshow-tips-tip-youre-doing-great = \u4F60\u505A\u5F97\u5F88\u68D2 :)\nshow-tips-tip-youre-superb = \u4F60\u8D85\u68D2 <3\nshow-tips-tip-huggy = \u62B1\u62B1\uFF01\n\n## Text Mode\ntext-mode-name = \u6587\u672C\u6A21\u5F0F\uFF08\u6D4B\u8BD5\u7248\uFF09\ntext-mode-desc = \u53EF\u80FD\u5B58\u5728 bug\u3002\u4E34\u65F6\u6587\u6863\uFF1A\ntext-mode-toggle = \u5207\u6362\u6587\u672C\u6A21\u5F0F\ntext-mode-toggle-spaces = \u7A7A\u683C\ntext-mode-toggle-spaces-tooltip = \u683C\u5F0F\u5316\u65F6\u4FDD\u7559\u591A\u4F59\u7A7A\u683C\ntext-mode-toggle-newlines = \u6362\u884C\ntext-mode-toggle-newlines-tooltip = \u683C\u5F0F\u5316\u65F6\u4FDD\u7559\u6362\u884C\u548C\u7F29\u8FDB\ntext-mode-format = \u683C\u5F0F\u5316\n\n## Find and Replace\nfind-and-replace-name = \u67E5\u627E\u4E0E\u66FF\u6362\nfind-and-replace-desc = \u5728 Ctrl+F \u83DC\u5355\u4E2D\u65B0\u589E\u4E00\u4E2A"\u5168\u90E8\u66FF\u6362"\u6309\u94AE\uFF0C\u65B9\u4FBF\u6279\u91CF\u91CD\u547D\u540D\u53D8\u91CF\u6216\u51FD\u6570\u3002\nfind-and-replace-replace-all = \u5168\u90E8\u66FF\u6362\n\n## Wolfram To Desmos\nwolfram2desmos-name = Wolfram \u8F6C Desmos\nwolfram2desmos-desc = \u5141\u8BB8\u4F60\u5C06 ASCII Math\uFF08\u5982 Wolfram Alpha \u67E5\u8BE2\u7ED3\u679C\uFF09\u7C98\u8D34\u5230 Desmos\u3002\nwolfram2desmos-opt-reciprocalExponents2Surds-name = \u6839\u53F7\u8BB0\u6CD5\nwolfram2desmos-opt-reciprocalExponents2Surds-desc = \u5C06\u5C0F\u4E8E 1 \u7684\u5206\u6570\u6307\u6570\u5E42\u8F6C\u6362\u4E3A\u6839\u53F7\u8868\u8FBE\u5F0F\nwolfram2desmos-opt-derivativeLoopLimit-name = \u5C55\u5F00\u591A\u9636\u5BFC\u6570\nwolfram2desmos-opt-derivativeLoopLimit-desc = \u5C06\u83B1\u5E03\u5C3C\u8328\u7B26\u53F7\u4E0B\u7684 n \u9636\u5BFC\u6570\u5C55\u5F00\u4E3A\u591A\u5C42\u5D4C\u5957\uFF08\u6700\u591A 10 \u5C42\uFF09\u3002\n\n## Pin Expressions\npin-expressions-name = \u7F6E\u9876\u8868\u8FBE\u5F0F\npin-expressions-desc = \u53EF\u5728\u7F16\u8F91\u5217\u8868\u6A21\u5F0F\u4E0B\u5C06\u8868\u8FBE\u5F0F\u7F6E\u9876\u663E\u793A\npin-expressions-pin = \u7F6E\u9876\npin-expressions-unpin = \u53D6\u6D88\u7F6E\u9876\n\n## Builtin Settings\nbuiltin-settings-name = \u8BA1\u7B97\u5668\u8BBE\u7F6E\nbuiltin-settings-desc = \u53EF\u5F00\u542F\u6216\u5173\u95ED Desmos \u7684\u5185\u7F6E\u529F\u80FD\u3002\u5927\u591A\u6570\u9009\u9879\u4EC5\u5BF9\u672C\u5730\u6D4F\u89C8\u5668\u751F\u6548\uFF0C\u5206\u4EAB\u56FE\u8868\u65F6\u4E0D\u4F1A\u5F71\u54CD\u4ED6\u4EBA\u3002\nbuiltin-settings-opt-advancedStyling-name = \u9AD8\u7EA7\u6837\u5F0F\nbuiltin-settings-opt-advancedStyling-desc = \u542F\u7528\u6807\u7B7E\u7F16\u8F91\u3001\u60AC\u505C\u663E\u793A\u3001\u6587\u672C\u8F6E\u5ED3\u548C\u5355\u8C61\u9650\u7F51\u683C\u7B49\u529F\u80FD\nbuiltin-settings-opt-graphpaper-name = \u7ED8\u56FE\u533A\nbuiltin-settings-opt-graphpaper-desc = {""}\nbuiltin-settings-opt-authorFeatures-name = \u521B\u4F5C\u8005\u529F\u80FD\nbuiltin-settings-opt-authorFeatures-desc = \u5F00\u542F\u9690\u85CF\u6587\u4EF6\u5939\u3001\u53EA\u8BFB\u6A21\u5F0F\u7B49\u529F\u80FD\nbuiltin-settings-opt-pointsOfInterest-name = \u663E\u793A\u5173\u952E\u70B9\nbuiltin-settings-opt-pointsOfInterest-desc = \u622A\u70B9\u3001\u7A7A\u70B9\u3001\u4EA4\u70B9\u7B49\nbuiltin-settings-opt-trace-name = \u6CBF\u66F2\u7EBF\u8FFD\u8E2A\nbuiltin-settings-opt-trace-desc = {""}\nbuiltin-settings-opt-expressions-name = \u663E\u793A\u8868\u8FBE\u5F0F\u5217\u8868\nbuiltin-settings-opt-expressions-desc = {""}\nbuiltin-settings-opt-zoomButtons-name = \u663E\u793A\u7F29\u653E\u6309\u94AE\nbuiltin-settings-opt-zoomButtons-desc = {""}\nbuiltin-settings-opt-keypad-name = \u663E\u793A\u865A\u62DF\u952E\u76D8\nbuiltin-settings-opt-keypad-desc = {""}\nbuiltin-settings-opt-showPerformanceMeter-name = \u663E\u793A\u6027\u80FD\u8BA1\nbuiltin-settings-opt-showPerformanceMeter-desc = {""}\nbuiltin-settings-opt-showIDs-name = \u663E\u793A ID\nbuiltin-settings-opt-showIDs-desc = {""}\n\n## Duplicate Expression Hotkey\nduplicate-expression-hotkey-name = \u590D\u5236\u8868\u8FBE\u5F0F\u5FEB\u6377\u952E\nduplicate-expression-hotkey-desc = \u6309 Ctrl+Q \u6216 Ctrl+Shift+Q \u53EF\u590D\u5236\u5F53\u524D\u9009\u4E2D\u7684\u8868\u8FBE\u5F0F\u3002\n\n## Right Click Tray\nright-click-tray-name = \u53F3\u952E\u6258\u76D8\nright-click-tray-desc = \u53EF\u901A\u8FC7\u53F3\u952E\u70B9\u51FB\u8BBE\u7F6E\u5706\u70B9\u6253\u5F00\u6258\u76D8\uFF0C\u65E0\u9700\u957F\u6309\n\n## Set Primary Color\nset-primary-color-name = \u8BBE\u7F6E\u4E3B\u8272\u8C03\nset-primary-color-desc = \u9009\u62E9 UI \u4E3B\u8272\u8C03\nset-primary-color-opt-primaryColor-name = \u4E3B\u8272\u8C03\nset-primary-color-opt-primaryColor-desc = \u8BA1\u7B97\u5668\u7684\u5168\u5C40\u4E3B\u8272\u8C03\nset-primary-color-opt-doFavicon-name = \u66F4\u65B0\u7F51\u7AD9\u56FE\u6807\nset-primary-color-opt-doFavicon-desc = \u662F\u5426\u66F4\u65B0\u7F51\u7AD9\u56FE\u6807\u7684\u989C\u8272\n\n## Hide Errors\nhide-errors-name = \u9690\u85CF\u9519\u8BEF\u63D0\u793A\nhide-errors-desc = \u6309\u4F4F Shift \u70B9\u51FB\u9519\u8BEF\u4E09\u89D2\u56FE\u6807\u53EF\u6DE1\u5316\u8B66\u544A\u5E76\u9690\u85CF\u6ED1\u5757\u5EFA\u8BAE\nhide-errors-hide = \u9690\u85CF\n\n## Folder Tools\nfolder-tools-name = \u6587\u4EF6\u5939\u5DE5\u5177\nfolder-tools-desc = \u5728\u7F16\u8F91\u5217\u8868\u6A21\u5F0F\u4E0B\u65B0\u589E\u4E00\u4E9B\u6309\u94AE\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u6587\u4EF6\u5939\nfolder-tools-dump = \u62C6\u5206\nfolder-tools-merge = \u5408\u5E76\nfolder-tools-enclose = \u5C01\u88C5\n\n## Video Creator\nvideo-creator-name = \u89C6\u9891\u521B\u4F5C\u5668\nvideo-creator-desc = \u5F55\u5236\u52A8\u4F5C\u6267\u884C\u6216\u6ED1\u5757\u53D8\u5316\u7684\u56FE\u8868\u52A8\u753B\uFF0C\u5BFC\u51FA\u4E3A\u89C6\u9891\u6216 GIF\nvideo-creator-menu = \u89C6\u9891\u521B\u4F5C\u5668\u83DC\u5355\nvideo-creator-to = \u81F3\nvideo-creator-step = \uFF0C\u6B65\u957F\u4E3A\nvideo-creator-ticks-playing-sliders = \u6B63\u5728\u64AD\u653E\u7684\u6ED1\u5757\uFF1A\nvideo-creator-ticks-step = \u65F6\u95F4\u6B65\u957F\uFF08\u6BEB\u79D2\uFF09\uFF1A\nvideo-creator-prev-action = \u4E0A\u4E00\u4E2A\nvideo-creator-next-action = \u4E0B\u4E00\u4E2A\nvideo-creator-orientation = \u65B9\u5411\nvideo-creator-orientation-mode-current-speed = \u901F\u7387\nvideo-creator-orientation-mode-current-delta = \u6B65\u8FDB\nvideo-creator-orientation-mode-from-to = \u8D77\u6B62\nvideo-creator-size = \u5927\u5C0F\uFF1A\nvideo-creator-mosaic = \u62FC\u56FE\uFF1A\nvideo-creator-angle-current = \u89D2\u5EA6\uFF1A\nvideo-creator-angle-from = \u81EA\uFF1A\nvideo-creator-angle-to = \u81F3\uFF1A\nvideo-creator-angle-step = \u6B65\u957F\uFF1A\nvideo-creator-angle-speed = \u901F\u5EA6\uFF1A\nvideo-creator-step-count = \u6B65\u6570\uFF1A\nvideo-creator-frame-count = \u5E27\u6570\uFF1A\nvideo-creator-target-same-pixel-ratio = \u4FDD\u6301\u50CF\u7D20\u6BD4\nvideo-creator-fast-screenshot = \u5FEB\u901F\u622A\u56FE\nvideo-creator-target-tooltip = \u8C03\u6574\u7EBF\u5BBD\u3001\u70B9\u5927\u5C0F\u3001\u6807\u7B7E\u5927\u5C0F\u7B49\u6574\u4F53\u7F29\u653E\nvideo-creator-ffmpeg-loading = FFmpeg \u52A0\u8F7D\u4E2D\u2026\u2026\nvideo-creator-ffmpeg-fail = \u82E5\u957F\u65F6\u95F4\u65E0\u54CD\u5E94\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u6216\u53CD\u9988\u7ED9\u5F00\u53D1\u8005\nvideo-creator-exporting = \u5BFC\u51FA\u4E2D\u2026\u2026\nvideo-creator-cancel-capture = \u53D6\u6D88\u62CD\u6444\nvideo-creator-cancel-export = \u53D6\u6D88\u5BFC\u51FA\nvideo-creator-capture = \u62CD\u6444\nvideo-creator-preview = \u9884\u89C8\nvideo-creator-delete-all = \u5220\u9664\u5168\u90E8\nvideo-creator-filename-placeholder = \u8BF7\u8BBE\u7F6E\u6587\u4EF6\u540D\nvideo-creator-export = \u5BFC\u51FA\nvideo-creator-export-as = \u5BFC\u51FA\u4E3A { $fileType }\nvideo-creator-fps = \u5E27\u7387\uFF1A\nvideo-creator-method-once = \u5355\u5E27\nvideo-creator-method-ntimes = \u591A\u5E27\nvideo-creator-method-slider = \u6ED1\u5757\nvideo-creator-method-action = \u52A8\u4F5C\nvideo-creator-method-ticks = \u5B9A\u65F6\u5668\n\n## Wakatime\nwakatime-name = WakaTime\nwakatime-desc = \u5728 WakaTime.com \u8BB0\u5F55\u4F60\u7684 Desmos \u6D3B\u52A8\nwakatime-opt-secretKey-name = \u5BC6\u94A5\nwakatime-opt-secretKey-desc = \u7528\u4E8E WakaTime \u670D\u52A1\u5668\u7684 API \u5BC6\u94A5\nwakatime-opt-splitProjects-name = \u6309\u56FE\u8868\u5206\u9879\u76EE\nwakatime-opt-splitProjects-desc = \u6BCF\u4E2A\u56FE\u8868\u5355\u72EC\u4F5C\u4E3A\u4E00\u4E2A\u9879\u76EE\u8BB0\u5F55\nwakatime-opt-projectName-name = \u9879\u76EE\u540D\u79F0\nwakatime-opt-projectName-desc = \u5728 WakaTime \u53EF\u89C1\uFF0C\u6240\u6709 Desmos \u9879\u76EE\u5171\u4EAB\n\n## Performance Display\nperformance-info-name = \u6027\u80FD\u663E\u793A\nperformance-info-desc = \u663E\u793A\u5F53\u524D\u56FE\u8868\u7684\u6027\u80FD\u4FE1\u606F\nperformance-info-refresh-graph = \u5237\u65B0\u56FE\u8868\nperformance-info-refresh-graph-tooltip = \u5237\u65B0\u4EE5\u6D4B\u8BD5\u521D\u59CB\u52A0\u8F7D\u65F6\u95F4\nperformance-info-sticky-tooltip = \u4FDD\u6301\u83DC\u5355\u663E\u793A\nperformance-info-time-in-worker = Worker \u7528\u65F6\nperformance-info-compiling = \u7F16\u8BD1\nperformance-info-rendering = \u6E32\u67D3\nperformance-info-other = \u5176\u4ED6\u7528\u65F6\n\n## Better Evaluation View\nbetter-evaluation-view-name = \u8BE6\u7EC6\u7ED3\u679C\u663E\u793A\nbetter-evaluation-view-desc = \u663E\u793A\u5217\u8868\u5143\u7D20\u3001\u989C\u8272\u548C undefined \u7684\u5177\u4F53\u503C\nbetter-evaluation-view-evaluation-list = { $count }\u4E2A\u5143\u7D20\u5217\u8868\nbetter-evaluation-view-opt-floats-name = \u9AD8\u7EA7\u6D6E\u70B9\u663E\u793A\nbetter-evaluation-view-opt-floats-desc = \u7528 NaN/\u221E/-\u221E \u66FF\u4EE3 undefined\uFF0C\u8D1F\u96F6\u663E\u793A\u4E3A"-0"\nbetter-evaluation-view-opt-lists-name = \u663E\u793A\u5217\u8868\u5143\u7D20\nbetter-evaluation-view-opt-lists-desc = \u5C55\u793A\u5217\u8868\u4E2D\u7684\u5404\u9879\u5143\u7D20\u800C\u975E\u4EC5\u663E\u793A\u5217\u8868\u957F\u5EA6\nbetter-evaluation-view-opt-colors-name = \u663E\u793A\u989C\u8272\nbetter-evaluation-view-opt-colors-desc = \u4EE5 rgb \u5F62\u5F0F\u663E\u793A\u989C\u8272\nbetter-evaluation-view-opt-colorLists-name = \u663E\u793A\u989C\u8272\u5217\u8868\nbetter-evaluation-view-opt-colorLists-desc = \u4EE5 rgb \u5217\u8868\u663E\u793A\u989C\u8272\u5217\u8868\n\n## Pillbox Menus\npillbox-menus-name = \u53F3\u4FA7\u6309\u94AE\uFF08\u6838\u5FC3\uFF09\npillbox-menus-desc = \u5728\u754C\u9762\u53F3\u4FA7\u663E\u793A\u6309\u94AE\uFF0C\u5982\u89C6\u9891\u521B\u4F5C\u5668\u6216 DesModder \u4E3B\u83DC\u5355\n\n## Manage Metadata\nmanage-metadata-name = \u5143\u6570\u636E\u7BA1\u7406\uFF08\u6838\u5FC3\uFF09\nmanage-metadata-desc = \u7BA1\u7406\u5143\u6570\u636E\uFF0C\u5982 GLesmos \u6216\u7F6E\u9876\u72B6\u6001\n\n## Intellisense\nintellisense-name = Intellisense\nintellisense-desc = \u4E3A Desmos \u5E26\u6765\u81EA\u52A8\u8865\u5168\u3001\u51FD\u6570\u53C2\u6570\u63D0\u793A\u3001\u8DF3\u8F6C\u5B9A\u4E49\u7B49\u5E38\u89C1 IDE \u529F\u80FD\u3002\u6587\u6863\u89C1\uFF1A\nintellisense-opt-subscriptify-name = \u81EA\u52A8\u4E0B\u6807\nintellisense-opt-subscriptify-desc = \u81EA\u52A8\u5C06\u5E26\u4E0B\u6807\u7684\u53D8\u91CF/\u51FD\u6570\u540D\u5728\u8F93\u5165\u65F6\u8F6C\u4E3A\u4E0B\u6807\u683C\u5F0F\nintellisense-jump2def-menu-instructions = \u6709\u591A\u4E2A\u5B9A\u4E49\u3002\u8BF7\u9009\u62E9\u4E00\u4E2A\u8DF3\u8F6C\u3002\n\n## Compact View\ncompact-view-name = \u7D27\u51D1\u89C6\u56FE\ncompact-view-desc = \u63D0\u4F9B\u591A\u79CD\u754C\u9762\u538B\u7F29\u9009\u9879\uFF0C\u8BA9\u4F60\u80FD\u5728\u5C4F\u5E55\u4E0A\u770B\u5230\u66F4\u591A\u5185\u5BB9\u3002\ncompact-view-opt-textFontSize-name = \u6CE8\u91CA\u5B57\u4F53\u5927\u5C0F\ncompact-view-opt-textFontSize-desc = \u6CE8\u91CA\u6587\u672C\u7684\u5B57\u4F53\u5927\u5C0F\ncompact-view-opt-mathFontSize-name = \u6570\u5B66\u5B57\u4F53\u5927\u5C0F\ncompact-view-opt-mathFontSize-desc = \u6570\u5B66\u8868\u8FBE\u5F0F\u7684\u5B57\u4F53\u5927\u5C0F\ncompact-view-opt-bracketFontSizeFactor-name = \u62EC\u53F7\u7F29\u653E\u56E0\u5B50\ncompact-view-opt-bracketFontSizeFactor-desc = \u62EC\u53F7\u5185\u6587\u672C\u7684\u5B57\u4F53\u7F29\u5C0F\u6BD4\u4F8B\ncompact-view-opt-minimumFontSize-name = \u6700\u5C0F\u5B57\u4F53\ncompact-view-opt-minimumFontSize-desc = \u6570\u5B66\u5B57\u4F53\u7684\u6700\u5C0F\u503C\uFF08\u8986\u76D6\u62EC\u53F7\u7F29\u653E\uFF09\ncompact-view-opt-compactFactor-name = \u53BB\u9664\u95F4\u8DDD\ncompact-view-opt-compactFactor-desc = \u53BB\u9664\u8868\u8FBE\u5F0F\u5217\u8868\u4E2D\u7684\u591A\u4F59\u7A7A\u767D\ncompact-view-opt-hideFolderToggles-name = \u9690\u85CF\u6587\u4EF6\u5939\u5F00\u5173\ncompact-view-opt-hideFolderToggles-desc = \u9690\u85CF\u7528\u4E8E\u6298\u53E0/\u7F6E\u9876\u6587\u4EF6\u5939\u7684\u6309\u94AE\ncompact-view-opt-noSeparatingLines-name = \u65E0\u5206\u9694\u7EBF\ncompact-view-opt-noSeparatingLines-desc = \u53BB\u9664\u8868\u8FBE\u5F0F\u95F4\u5206\u9694\u7EBF\uFF0C\u6539\u7528\u4EA4\u66FF\u80CC\u666F\u8272\ncompact-view-opt-highlightAlternatingLines-name = \u9AD8\u4EAE\u4EA4\u66FF\u884C\ncompact-view-opt-highlightAlternatingLines-desc = \u7528\u4EA4\u66FF\u80CC\u666F\u8272\u9AD8\u4EAE\u8868\u8FBE\u5F0F\uFF0C\u4FBF\u4E8E\u533A\u5206\ncompact-view-opt-hideEvaluations-name = \u6298\u53E0\u7ED3\u679C\ncompact-view-opt-hideEvaluations-desc = \u7ED3\u679C\u663E\u793A\u5728\u4FA7\u8FB9\uFF0C\u4EC5\u5728\u805A\u7126\u6216\u60AC\u505C\u65F6\u663E\u793A\n\n## Multiline\nmultiline-name = \u591A\u884C\u8868\u8FBE\u5F0F\nmultiline-desc = \u5C06\u8868\u8FBE\u5F0F\u81EA\u52A8\u6362\u884C\uFF0C\u66F4\u597D\u5229\u7528\u7A7A\u95F4\nmultiline-opt-widthBeforeMultiline-name = \u6362\u884C\u5BBD\u5EA6\u9608\u503C\uFF08%\uFF09\nmultiline-opt-widthBeforeMultiline-desc = \u89E6\u53D1\u6362\u884C\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF08\u5360\u89C6\u53E3\u767E\u5206\u6BD4\uFF09\uFF0C\u79FB\u52A8\u7AEF\u4E3A 3 \u500D\nmultiline-opt-automaticallyMultilinify-name = \u8F93\u5165\u65F6\u81EA\u52A8\u6362\u884C\nmultiline-opt-automaticallyMultilinify-desc = \u8F93\u5165\u65F6\u81EA\u52A8\u6362\u884C\uFF0C\u65E0\u9700\u624B\u52A8 Ctrl+M\nmultiline-opt-multilinifyDelayAfterEdit-name = \u7F16\u8F91\u5EF6\u8FDF\uFF08\u6BEB\u79D2\uFF09\nmultiline-opt-multilinifyDelayAfterEdit-desc = \u7F16\u8F91\u540E\u9759\u6B62\u591A\u5C11\u6BEB\u79D2\u81EA\u52A8\u5206\u884C\nmultiline-opt-spacesToNewlines-name = \u7A7A\u683C\u8F6C\u6362\u4E3A\u6362\u884C\nmultiline-opt-spacesToNewlines-desc = \u4E09\u4E2A\u7A7A\u683C\u81EA\u52A8\u8F6C\u4E3A\u6362\u884C\uFF08\u53EF\u7528 Shift+Enter \u5FEB\u901F\u8F93\u5165\uFF09\nmultiline-opt-determineLineBreaksAutomatically-name = \u81EA\u52A8\u63D2\u5165\u6362\u884C\nmultiline-opt-determineLineBreaksAutomatically-desc = \u81EA\u52A8\u5224\u65AD\u6362\u884C\u4F4D\u7F6E\uFF0CCtrl+M \u89E6\u53D1\nmultiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-name = \u8DF3\u8FC7\u624B\u52A8\u5BF9\u9F50\u8868\u8FBE\u5F0F\nmultiline-opt-disableAutomaticLineBreaksForHandAlignedExpressions-desc = \u6709\u624B\u52A8\u6362\u884C\uFF083 \u7A7A\u683C\uFF09\u7684\u8868\u8FBE\u5F0F\u4E0D\u518D\u81EA\u52A8\u6362\u884C\n\n## Custom MathQuill Config\ncustom-mathquill-config-name = \u81EA\u5B9A\u4E49 MathQuill \u914D\u7F6E\ncustom-mathquill-config-desc = \u66F4\u6539\u516C\u5F0F\u8F93\u5165\u65B9\u5F0F\ncustom-mathquill-config-opt-superscriptOperators-name = \u6307\u6570\u4E2D\u7684\u8FD0\u7B97\u7B26\ncustom-mathquill-config-opt-superscriptOperators-desc = \u5141\u8BB8\u5728\u6307\u6570\u4E2D\u8F93\u5165\u5982"+"\u7B49\u8FD0\u7B97\u7B26\ncustom-mathquill-config-opt-noAutoSubscript-name = \u7981\u7528\u81EA\u52A8\u4E0B\u6807\ncustom-mathquill-config-opt-noAutoSubscript-desc = \u7981\u6B62\u53D8\u91CF\u540D\u540E\u8F93\u5165\u6570\u5B57\u81EA\u52A8\u53D8\u4E3A\u4E0B\u6807\ncustom-mathquill-config-opt-noNEquals-name = \u7981\u7528 n= \u6C42\u548C\u7B26\u53F7\ncustom-mathquill-config-opt-noNEquals-desc = \u7981\u6B62\u6C42\u548C\u7B26\u53F7\u81EA\u52A8\u5728\u4E0B\u6807\u5904\u63D2\u5165"n="\ncustom-mathquill-config-opt-subSupWithoutOp-name = \u65E0\u64CD\u4F5C\u6570\u4E0B\u6807/\u4E0A\u6807\ncustom-mathquill-config-opt-subSupWithoutOp-desc = \u5141\u8BB8\u65E0\u524D\u7F6E\u5185\u5BB9\u65F6\u8F93\u5165\u4E0B\u6807\u6216\u4E0A\u6807\ncustom-mathquill-config-opt-allowMixedBrackets-name = \u5141\u8BB8\u4E0D\u5339\u914D\u7684\u62EC\u53F7\ncustom-mathquill-config-opt-allowMixedBrackets-desc = \u5141\u8BB8\u6240\u6709\u62EC\u53F7\u4E92\u76F8\u5339\u914D\uFF08\u5305\u62EC\u7EDD\u5BF9\u503C\uFF09\ncustom-mathquill-config-opt-subscriptReplacements-name = \u4E0B\u6807\u66FF\u6362\ncustom-mathquill-config-opt-subscriptReplacements-desc = \u5141\u8BB8\u5728\u4E0B\u6807\u4E2D\u8F93\u5165\u7B26\u53F7\u548C\u51FD\u6570\u540D\ncustom-mathquill-config-opt-noPercentOf-name = \u7981\u7528"% of"\ncustom-mathquill-config-opt-noPercentOf-desc = \u8F93\u5165"%"\u65F6\u76F4\u63A5\u63D2\u5165\u767E\u5206\u53F7\uFF0C\u800C\u4E0D\u662F"% of"\ncustom-mathquill-config-opt-commaDelimiter-name = \u5343\u5206\u4F4D\u5206\u9694\u7B26\ncustom-mathquill-config-opt-commaDelimiter-desc = \u5728\u6570\u5B57\u4E2D\u63D2\u5165\u9017\u53F7\u5206\u9694\u7B26\uFF08\u4EC5\u89C6\u89C9\u6548\u679C\uFF09\ncustom-mathquill-config-opt-delimiterOverride-name = \u81EA\u5B9A\u4E49\u5206\u9694\u7B26\ncustom-mathquill-config-opt-delimiterOverride-desc = \u8BBE\u7F6E\u6570\u5B57\u5206\u9694\u7B26\u5B57\u7B26\u4E32\ncustom-mathquill-config-opt-leftIntoSubscript-name = \u5DE6\u53F3\u952E\u8FDB\u5165\u4E0B\u6807\ncustom-mathquill-config-opt-leftIntoSubscript-desc = \u7528\u5DE6\u53F3\u952E\u53EF\u8FDB\u5165\u4E0B\u6807\u800C\u975E\u4E0A\u6807\ncustom-mathquill-config-opt-extendedGreek-name = \u66F4\u591A\u5E0C\u814A\u5B57\u6BCD\ncustom-mathquill-config-opt-extendedGreek-desc = \u542F\u7528\u6240\u6709\u652F\u6301\u7684\u5E0C\u814A\u5B57\u6BCD\u66FF\u6362\ncustom-mathquill-config-opt-lessFSpacing-name = \u51CF\u5C11"f"\u5468\u56F4\u95F4\u8DDD\ncustom-mathquill-config-opt-lessFSpacing-desc = \u51CF\u5C11\u5B57\u6BCD"f"\u4E24\u4FA7\u7684\u989D\u5916\u95F4\u8DDD\n\n## Code Golf\ncode-golf-name = Code Golf\ncode-golf-desc = \u4E3A Desmos Code Golf \u7231\u597D\u8005\u63D0\u4F9B\u5DE5\u5177\ncode-golf-width-in-pixels = \u5BBD\u5EA6\uFF1A{ $pixels } px\ncode-golf-symbol-count = \u7B26\u53F7\u6570\uFF1A{ $elements }\ncode-golf-click-to-enable-folder = \u70B9\u51FB\u542F\u7528 Code Golf \u7EDF\u8BA1\ncode-golf-note-latex-byte-count = { $chars } LaTeX \u5B57\u8282\n\n## Syntax Highlighting\nsyntax-highlighting-name = \u8BED\u6CD5\u9AD8\u4EAE\nsyntax-highlighting-desc = \u4E3A\u8868\u8FBE\u5F0F\u7740\u8272\uFF0C\u4FBF\u4E8E\u7406\u89E3\nsyntax-highlighting-opt-bracketPairColorization-name = \u62EC\u53F7\u914D\u5BF9\u7740\u8272\nsyntax-highlighting-opt-bracketPairColorization-desc = \u4E3A\u62EC\u53F7\uFF08\u5982 ()[]{"{"}{"}"}||\uFF09\u914D\u5BF9\u7740\u8272\uFF0C\u4FBF\u4E8E\u8BC6\u522B\nsyntax-highlighting-opt-bracketPairColorizationColors-name = \u62EC\u53F7\u914D\u8272\u65B9\u6848\nsyntax-highlighting-opt-bracketPairColorizationColors-desc = \u8BBE\u7F6E\u62EC\u53F7\u914D\u5BF9\u7740\u8272\u7684\u989C\u8272\u6570\u91CF\u548C\u987A\u5E8F\nsyntax-highlighting-opt-bpcColorInText-name = \u62EC\u53F7\u5185\u6587\u672C\u7740\u8272\nsyntax-highlighting-opt-bpcColorInText-desc = \u5BF9\u62EC\u53F7\u5185\u6587\u672C\u5E94\u7528\u62EC\u53F7\u914D\u8272\nsyntax-highlighting-opt-thickenBrackets-name = \u52A0\u7C97\u62EC\u53F7\nsyntax-highlighting-opt-thickenBrackets-desc = \u52A0\u7C97\u62EC\u53F7\u4EE5\u8F85\u52A9\u914D\u5BF9\u7740\u8272\nsyntax-highlighting-opt-highlightBracketBlocks-name = \u9AD8\u4EAE\u62EC\u53F7\u5757\nsyntax-highlighting-opt-highlightBracketBlocks-desc = \u9AD8\u4EAE\u5149\u6807\u6240\u5728\u7684\u6700\u5C0F\u62EC\u53F7\u5BF9\nsyntax-highlighting-opt-highlightBracketBlocksHover-name = \u60AC\u505C\u9AD8\u4EAE\nsyntax-highlighting-opt-highlightBracketBlocksHover-desc = \u9AD8\u4EAE\u9F20\u6807\u60AC\u505C\u5904\u7684\u6700\u5C0F\u62EC\u53F7\u5BF9\nsyntax-highlighting-opt-underlineHighlightedRanges-name = \u4E0B\u5212\u7EBF\u9AD8\u4EAE\u8303\u56F4\nsyntax-highlighting-opt-underlineHighlightedRanges-desc = \u4E3A\u9AD8\u4EAE\u8303\u56F4\u6DFB\u52A0\u6DF1\u8272\u4E0B\u5212\u7EBF\u4EE5\u589E\u5F3A\u53EF\u89C1\u6027\n\n## Better Navigation\nbetter-navigation-name = \u66F4\u597D\u7684\u5BFC\u822A\nbetter-navigation-desc = \u8BA9 Desmos \u8868\u8FBE\u5F0F\u66F4\u6613\u4E8E\u5BFC\u822A\nbetter-navigation-opt-ctrlArrow-name = Ctrl+\u65B9\u5411\u952E \u652F\u6301\nbetter-navigation-opt-ctrlArrow-desc = \u7528 Ctrl+\u65B9\u5411\u952E\u6216 Ctrl+Shift+\u65B9\u5411\u952E\u53EF\u5FEB\u901F\u8DF3\u8FC7\u5927\u6BB5\u6587\u672C\uFF0CCtrl+Backspace \u53EF\u5FEB\u901F\u5220\u9664\nbetter-navigation-opt-scrollableExpressions-name = \u8868\u8FBE\u5F0F\u53EF\u6EDA\u52A8\nbetter-navigation-opt-scrollableExpressions-desc = \u4E3A\u8868\u8FBE\u5F0F\u6DFB\u52A0\u6A2A\u5411\u6EDA\u52A8\u6761\uFF0C\u79FB\u52A8\u7AEF\u66F4\u6613\u64CD\u4F5C\nbetter-navigation-opt-showScrollbar-name = \u663E\u793A\u6EDA\u52A8\u6761\nbetter-navigation-opt-showScrollbar-desc = \u663E\u793A\u6216\u9690\u85CF\u6EDA\u52A8\u6761\uFF0C\u89E6\u5C4F\u8BBE\u5907\u5EFA\u8BAE\u5173\u95ED\n\n## Paste Image\npaste-image-name = \u7C98\u8D34\u56FE\u7247\npaste-image-desc = \u652F\u6301\u7C98\u8D34\u56FE\u7247\u6587\u4EF6\uFF0C\u4E00\u952E\u5BFC\u5165\npaste-image-error-images-not-enabled = \u5F53\u524D\u56FE\u8868\u672A\u542F\u7528\u63D2\u5165\u56FE\u7247\u529F\u80FD\npaste-image-error-another-upload-in-progress = \u6709\u5176\u4ED6\u4E0A\u4F20\u4EFB\u52A1\u8FDB\u884C\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\n';

  // node_modules/@fluent/bundle/esm/types.js
  var FluentType = class {
    /**
     * Create a `FluentType` instance.
     *
     * @param value The JavaScript value to wrap.
     */
    constructor(value) {
      this.value = value;
    }
    /**
     * Unwrap the raw value stored by this `FluentType`.
     */
    valueOf() {
      return this.value;
    }
  };
  var FluentNone = class extends FluentType {
    /**
     * Create an instance of `FluentNone` with an optional fallback value.
     * @param value The fallback value of this `FluentNone`.
     */
    constructor(value = "???") {
      super(value);
    }
    /**
     * Format this `FluentNone` to the fallback string.
     */
    toString(scope) {
      return `{${this.value}}`;
    }
  };
  var FluentNumber = class extends FluentType {
    /**
     * Create an instance of `FluentNumber` with options to the
     * `Intl.NumberFormat` constructor.
     *
     * @param value The number value of this `FluentNumber`.
     * @param opts Options which will be passed to `Intl.NumberFormat`.
     */
    constructor(value, opts = {}) {
      super(value);
      this.opts = opts;
    }
    /**
     * Format this `FluentNumber` to a string.
     */
    toString(scope) {
      try {
        const nf = scope.memoizeIntlObject(Intl.NumberFormat, this.opts);
        return nf.format(this.value);
      } catch (err) {
        scope.reportError(err);
        return this.value.toString(10);
      }
    }
  };
  var FluentDateTime = class extends FluentType {
    /**
     * Create an instance of `FluentDateTime` with options to the
     * `Intl.DateTimeFormat` constructor.
     *
     * @param value The number value of this `FluentDateTime`, in milliseconds.
     * @param opts Options which will be passed to `Intl.DateTimeFormat`.
     */
    constructor(value, opts = {}) {
      super(value);
      this.opts = opts;
    }
    /**
     * Format this `FluentDateTime` to a string.
     */
    toString(scope) {
      try {
        const dtf = scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts);
        return dtf.format(this.value);
      } catch (err) {
        scope.reportError(err);
        return new Date(this.value).toISOString();
      }
    }
  };

  // node_modules/@fluent/bundle/esm/resolver.js
  var MAX_PLACEABLES = 100;
  var FSI = "\u2068";
  var PDI = "\u2069";
  function match(scope, selector, key) {
    if (key === selector) {
      return true;
    }
    if (key instanceof FluentNumber && selector instanceof FluentNumber && key.value === selector.value) {
      return true;
    }
    if (selector instanceof FluentNumber && typeof key === "string") {
      let category = scope.memoizeIntlObject(Intl.PluralRules, selector.opts).select(selector.value);
      if (key === category) {
        return true;
      }
    }
    return false;
  }
  function getDefault(scope, variants, star) {
    if (variants[star]) {
      return resolvePattern(scope, variants[star].value);
    }
    scope.reportError(new RangeError("No default"));
    return new FluentNone();
  }
  function getArguments(scope, args) {
    const positional = [];
    const named = /* @__PURE__ */ Object.create(null);
    for (const arg of args) {
      if (arg.type === "narg") {
        named[arg.name] = resolveExpression(scope, arg.value);
      } else {
        positional.push(resolveExpression(scope, arg));
      }
    }
    return { positional, named };
  }
  function resolveExpression(scope, expr) {
    switch (expr.type) {
      case "str":
        return expr.value;
      case "num":
        return new FluentNumber(expr.value, {
          minimumFractionDigits: expr.precision
        });
      case "var":
        return resolveVariableReference(scope, expr);
      case "mesg":
        return resolveMessageReference(scope, expr);
      case "term":
        return resolveTermReference(scope, expr);
      case "func":
        return resolveFunctionReference(scope, expr);
      case "select":
        return resolveSelectExpression(scope, expr);
      default:
        return new FluentNone();
    }
  }
  function resolveVariableReference(scope, { name }) {
    let arg;
    if (scope.params) {
      if (Object.prototype.hasOwnProperty.call(scope.params, name)) {
        arg = scope.params[name];
      } else {
        return new FluentNone(`$${name}`);
      }
    } else if (scope.args && Object.prototype.hasOwnProperty.call(scope.args, name)) {
      arg = scope.args[name];
    } else {
      scope.reportError(new ReferenceError(`Unknown variable: $${name}`));
      return new FluentNone(`$${name}`);
    }
    if (arg instanceof FluentType) {
      return arg;
    }
    switch (typeof arg) {
      case "string":
        return arg;
      case "number":
        return new FluentNumber(arg);
      case "object":
        if (arg instanceof Date) {
          return new FluentDateTime(arg.getTime());
        }
      default:
        scope.reportError(new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
        return new FluentNone(`$${name}`);
    }
  }
  function resolveMessageReference(scope, { name, attr }) {
    const message = scope.bundle._messages.get(name);
    if (!message) {
      scope.reportError(new ReferenceError(`Unknown message: ${name}`));
      return new FluentNone(name);
    }
    if (attr) {
      const attribute = message.attributes[attr];
      if (attribute) {
        return resolvePattern(scope, attribute);
      }
      scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
      return new FluentNone(`${name}.${attr}`);
    }
    if (message.value) {
      return resolvePattern(scope, message.value);
    }
    scope.reportError(new ReferenceError(`No value: ${name}`));
    return new FluentNone(name);
  }
  function resolveTermReference(scope, { name, attr, args }) {
    const id = `-${name}`;
    const term = scope.bundle._terms.get(id);
    if (!term) {
      scope.reportError(new ReferenceError(`Unknown term: ${id}`));
      return new FluentNone(id);
    }
    if (attr) {
      const attribute = term.attributes[attr];
      if (attribute) {
        scope.params = getArguments(scope, args).named;
        const resolved2 = resolvePattern(scope, attribute);
        scope.params = null;
        return resolved2;
      }
      scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
      return new FluentNone(`${id}.${attr}`);
    }
    scope.params = getArguments(scope, args).named;
    const resolved = resolvePattern(scope, term.value);
    scope.params = null;
    return resolved;
  }
  function resolveFunctionReference(scope, { name, args }) {
    let func = scope.bundle._functions[name];
    if (!func) {
      scope.reportError(new ReferenceError(`Unknown function: ${name}()`));
      return new FluentNone(`${name}()`);
    }
    if (typeof func !== "function") {
      scope.reportError(new TypeError(`Function ${name}() is not callable`));
      return new FluentNone(`${name}()`);
    }
    try {
      let resolved = getArguments(scope, args);
      return func(resolved.positional, resolved.named);
    } catch (err) {
      scope.reportError(err);
      return new FluentNone(`${name}()`);
    }
  }
  function resolveSelectExpression(scope, { selector, variants, star }) {
    let sel = resolveExpression(scope, selector);
    if (sel instanceof FluentNone) {
      return getDefault(scope, variants, star);
    }
    for (const variant of variants) {
      const key = resolveExpression(scope, variant.key);
      if (match(scope, sel, key)) {
        return resolvePattern(scope, variant.value);
      }
    }
    return getDefault(scope, variants, star);
  }
  function resolveComplexPattern(scope, ptn) {
    if (scope.dirty.has(ptn)) {
      scope.reportError(new RangeError("Cyclic reference"));
      return new FluentNone();
    }
    scope.dirty.add(ptn);
    const result = [];
    const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
    for (const elem of ptn) {
      if (typeof elem === "string") {
        result.push(scope.bundle._transform(elem));
        continue;
      }
      scope.placeables++;
      if (scope.placeables > MAX_PLACEABLES) {
        scope.dirty.delete(ptn);
        throw new RangeError(`Too many placeables expanded: ${scope.placeables}, max allowed is ${MAX_PLACEABLES}`);
      }
      if (useIsolating) {
        result.push(FSI);
      }
      result.push(resolveExpression(scope, elem).toString(scope));
      if (useIsolating) {
        result.push(PDI);
      }
    }
    scope.dirty.delete(ptn);
    return result.join("");
  }
  function resolvePattern(scope, value) {
    if (typeof value === "string") {
      return scope.bundle._transform(value);
    }
    return resolveComplexPattern(scope, value);
  }

  // node_modules/@fluent/bundle/esm/scope.js
  var Scope = class {
    constructor(bundle, errors, args) {
      this.dirty = /* @__PURE__ */ new WeakSet();
      this.params = null;
      this.placeables = 0;
      this.bundle = bundle;
      this.errors = errors;
      this.args = args;
    }
    reportError(error) {
      if (!this.errors || !(error instanceof Error)) {
        throw error;
      }
      this.errors.push(error);
    }
    memoizeIntlObject(ctor, opts) {
      let cache2 = this.bundle._intls.get(ctor);
      if (!cache2) {
        cache2 = {};
        this.bundle._intls.set(ctor, cache2);
      }
      let id = JSON.stringify(opts);
      if (!cache2[id]) {
        cache2[id] = new ctor(this.bundle.locales, opts);
      }
      return cache2[id];
    }
  };

  // node_modules/@fluent/bundle/esm/builtins.js
  function values(opts, allowed) {
    const unwrapped = /* @__PURE__ */ Object.create(null);
    for (const [name, opt] of Object.entries(opts)) {
      if (allowed.includes(name)) {
        unwrapped[name] = opt.valueOf();
      }
    }
    return unwrapped;
  }
  var NUMBER_ALLOWED = [
    "unitDisplay",
    "currencyDisplay",
    "useGrouping",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits"
  ];
  function NUMBER(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
      return new FluentNone(`NUMBER(${arg.valueOf()})`);
    }
    if (arg instanceof FluentNumber) {
      return new FluentNumber(arg.valueOf(), {
        ...arg.opts,
        ...values(opts, NUMBER_ALLOWED)
      });
    }
    if (arg instanceof FluentDateTime) {
      return new FluentNumber(arg.valueOf(), {
        ...values(opts, NUMBER_ALLOWED)
      });
    }
    throw new TypeError("Invalid argument to NUMBER");
  }
  var DATETIME_ALLOWED = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "dayPeriod",
    "hour12",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  function DATETIME(args, opts) {
    let arg = args[0];
    if (arg instanceof FluentNone) {
      return new FluentNone(`DATETIME(${arg.valueOf()})`);
    }
    if (arg instanceof FluentDateTime) {
      return new FluentDateTime(arg.valueOf(), {
        ...arg.opts,
        ...values(opts, DATETIME_ALLOWED)
      });
    }
    if (arg instanceof FluentNumber) {
      return new FluentDateTime(arg.valueOf(), {
        ...values(opts, DATETIME_ALLOWED)
      });
    }
    throw new TypeError("Invalid argument to DATETIME");
  }

  // node_modules/@fluent/bundle/esm/memoizer.js
  var cache = /* @__PURE__ */ new Map();
  function getMemoizerForLocale(locales2) {
    const stringLocale = Array.isArray(locales2) ? locales2.join(" ") : locales2;
    let memoizer = cache.get(stringLocale);
    if (memoizer === void 0) {
      memoizer = /* @__PURE__ */ new Map();
      cache.set(stringLocale, memoizer);
    }
    return memoizer;
  }

  // node_modules/@fluent/bundle/esm/bundle.js
  var FluentBundle = class {
    /**
     * Create an instance of `FluentBundle`.
     *
     * @example
     * ```js
     * let bundle = new FluentBundle(["en-US", "en"]);
     *
     * let bundle = new FluentBundle(locales, {useIsolating: false});
     *
     * let bundle = new FluentBundle(locales, {
     *   useIsolating: true,
     *   functions: {
     *     NODE_ENV: () => process.env.NODE_ENV
     *   }
     * });
     * ```
     *
     * @param locales - Used to instantiate `Intl` formatters used by translations.
     * @param options - Optional configuration for the bundle.
     */
    constructor(locales2, { functions, useIsolating = true, transform = (v) => v } = {}) {
      this._terms = /* @__PURE__ */ new Map();
      this._messages = /* @__PURE__ */ new Map();
      this.locales = Array.isArray(locales2) ? locales2 : [locales2];
      this._functions = {
        NUMBER,
        DATETIME,
        ...functions
      };
      this._useIsolating = useIsolating;
      this._transform = transform;
      this._intls = getMemoizerForLocale(locales2);
    }
    /**
     * Check if a message is present in the bundle.
     *
     * @param id - The identifier of the message to check.
     */
    hasMessage(id) {
      return this._messages.has(id);
    }
    /**
     * Return a raw unformatted message object from the bundle.
     *
     * Raw messages are `{value, attributes}` shapes containing translation units
     * called `Patterns`. `Patterns` are implementation-specific; they should be
     * treated as black boxes and formatted with `FluentBundle.formatPattern`.
     *
     * @param id - The identifier of the message to check.
     */
    getMessage(id) {
      return this._messages.get(id);
    }
    /**
     * Add a translation resource to the bundle.
     *
     * @example
     * ```js
     * let res = new FluentResource("foo = Foo");
     * bundle.addResource(res);
     * bundle.getMessage("foo");
     * // → {value: .., attributes: {..}}
     * ```
     *
     * @param res
     * @param options
     */
    addResource(res, { allowOverrides = false } = {}) {
      const errors = [];
      for (let i = 0; i < res.body.length; i++) {
        let entry = res.body[i];
        if (entry.id.startsWith("-")) {
          if (allowOverrides === false && this._terms.has(entry.id)) {
            errors.push(new Error(`Attempt to override an existing term: "${entry.id}"`));
            continue;
          }
          this._terms.set(entry.id, entry);
        } else {
          if (allowOverrides === false && this._messages.has(entry.id)) {
            errors.push(new Error(`Attempt to override an existing message: "${entry.id}"`));
            continue;
          }
          this._messages.set(entry.id, entry);
        }
      }
      return errors;
    }
    /**
     * Format a `Pattern` to a string.
     *
     * Format a raw `Pattern` into a string. `args` will be used to resolve
     * references to variables passed as arguments to the translation.
     *
     * In case of errors `formatPattern` will try to salvage as much of the
     * translation as possible and will still return a string. For performance
     * reasons, the encountered errors are not returned but instead are appended
     * to the `errors` array passed as the third argument.
     *
     * If `errors` is omitted, the first encountered error will be thrown.
     *
     * @example
     * ```js
     * let errors = [];
     * bundle.addResource(
     *     new FluentResource("hello = Hello, {$name}!"));
     *
     * let hello = bundle.getMessage("hello");
     * if (hello.value) {
     *     bundle.formatPattern(hello.value, {name: "Jane"}, errors);
     *     // Returns "Hello, Jane!" and `errors` is empty.
     *
     *     bundle.formatPattern(hello.value, undefined, errors);
     *     // Returns "Hello, {$name}!" and `errors` is now:
     *     // [<ReferenceError: Unknown variable: name>]
     * }
     * ```
     */
    formatPattern(pattern, args = null, errors = null) {
      if (typeof pattern === "string") {
        return this._transform(pattern);
      }
      let scope = new Scope(this, errors, args);
      try {
        let value = resolveComplexPattern(scope, pattern);
        return value.toString(scope);
      } catch (err) {
        if (scope.errors && err instanceof Error) {
          scope.errors.push(err);
          return new FluentNone().toString(scope);
        }
        throw err;
      }
    }
  };

  // node_modules/@fluent/bundle/esm/resource.js
  var RE_MESSAGE_START = /^(-?[a-zA-Z][\w-]*) *= */gm;
  var RE_ATTRIBUTE_START = /\.([a-zA-Z][\w-]*) *= */y;
  var RE_VARIANT_START = /\*?\[/y;
  var RE_NUMBER_LITERAL = /(-?[0-9]+(?:\.([0-9]+))?)/y;
  var RE_IDENTIFIER = /([a-zA-Z][\w-]*)/y;
  var RE_REFERENCE = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y;
  var RE_FUNCTION_NAME = /^[A-Z][A-Z0-9_-]*$/;
  var RE_TEXT_RUN = /([^{}\n\r]+)/y;
  var RE_STRING_RUN = /([^\\"\n\r]*)/y;
  var RE_STRING_ESCAPE = /\\([\\"])/y;
  var RE_UNICODE_ESCAPE = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y;
  var RE_LEADING_NEWLINES = /^\n+/;
  var RE_TRAILING_SPACES = / +$/;
  var RE_BLANK_LINES = / *\r?\n/g;
  var RE_INDENT = /( *)$/;
  var TOKEN_BRACE_OPEN = /{\s*/y;
  var TOKEN_BRACE_CLOSE = /\s*}/y;
  var TOKEN_BRACKET_OPEN = /\[\s*/y;
  var TOKEN_BRACKET_CLOSE = /\s*] */y;
  var TOKEN_PAREN_OPEN = /\s*\(\s*/y;
  var TOKEN_ARROW = /\s*->\s*/y;
  var TOKEN_COLON = /\s*:\s*/y;
  var TOKEN_COMMA = /\s*,?\s*/y;
  var TOKEN_BLANK = /\s+/y;
  var FluentResource = class {
    constructor(source) {
      this.body = [];
      RE_MESSAGE_START.lastIndex = 0;
      let cursor = 0;
      while (true) {
        let next = RE_MESSAGE_START.exec(source);
        if (next === null) {
          break;
        }
        cursor = RE_MESSAGE_START.lastIndex;
        try {
          this.body.push(parseMessage(next[1]));
        } catch (err) {
          if (err instanceof SyntaxError) {
            continue;
          }
          throw err;
        }
      }
      function test(re) {
        re.lastIndex = cursor;
        return re.test(source);
      }
      function consumeChar(char, errorClass) {
        if (source[cursor] === char) {
          cursor++;
          return true;
        }
        if (errorClass) {
          throw new errorClass(`Expected ${char}`);
        }
        return false;
      }
      function consumeToken(re, errorClass) {
        if (test(re)) {
          cursor = re.lastIndex;
          return true;
        }
        if (errorClass) {
          throw new errorClass(`Expected ${re.toString()}`);
        }
        return false;
      }
      function match2(re) {
        re.lastIndex = cursor;
        let result = re.exec(source);
        if (result === null) {
          throw new SyntaxError(`Expected ${re.toString()}`);
        }
        cursor = re.lastIndex;
        return result;
      }
      function match1(re) {
        return match2(re)[1];
      }
      function parseMessage(id) {
        let value = parsePattern();
        let attributes = parseAttributes();
        if (value === null && Object.keys(attributes).length === 0) {
          throw new SyntaxError("Expected message value or attributes");
        }
        return { id, value, attributes };
      }
      function parseAttributes() {
        let attrs = /* @__PURE__ */ Object.create(null);
        while (test(RE_ATTRIBUTE_START)) {
          let name = match1(RE_ATTRIBUTE_START);
          let value = parsePattern();
          if (value === null) {
            throw new SyntaxError("Expected attribute value");
          }
          attrs[name] = value;
        }
        return attrs;
      }
      function parsePattern() {
        let first;
        if (test(RE_TEXT_RUN)) {
          first = match1(RE_TEXT_RUN);
        }
        if (source[cursor] === "{" || source[cursor] === "}") {
          return parsePatternElements(first ? [first] : [], Infinity);
        }
        let indent = parseIndent();
        if (indent) {
          if (first) {
            return parsePatternElements([first, indent], indent.length);
          }
          indent.value = trim(indent.value, RE_LEADING_NEWLINES);
          return parsePatternElements([indent], indent.length);
        }
        if (first) {
          return trim(first, RE_TRAILING_SPACES);
        }
        return null;
      }
      function parsePatternElements(elements = [], commonIndent) {
        while (true) {
          if (test(RE_TEXT_RUN)) {
            elements.push(match1(RE_TEXT_RUN));
            continue;
          }
          if (source[cursor] === "{") {
            elements.push(parsePlaceable());
            continue;
          }
          if (source[cursor] === "}") {
            throw new SyntaxError("Unbalanced closing brace");
          }
          let indent = parseIndent();
          if (indent) {
            elements.push(indent);
            commonIndent = Math.min(commonIndent, indent.length);
            continue;
          }
          break;
        }
        let lastIndex = elements.length - 1;
        let lastElement = elements[lastIndex];
        if (typeof lastElement === "string") {
          elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
        }
        let baked = [];
        for (let element of elements) {
          if (element instanceof Indent) {
            element = element.value.slice(0, element.value.length - commonIndent);
          }
          if (element) {
            baked.push(element);
          }
        }
        return baked;
      }
      function parsePlaceable() {
        consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
        let selector = parseInlineExpression();
        if (consumeToken(TOKEN_BRACE_CLOSE)) {
          return selector;
        }
        if (consumeToken(TOKEN_ARROW)) {
          let variants = parseVariants();
          consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
          return {
            type: "select",
            selector,
            ...variants
          };
        }
        throw new SyntaxError("Unclosed placeable");
      }
      function parseInlineExpression() {
        if (source[cursor] === "{") {
          return parsePlaceable();
        }
        if (test(RE_REFERENCE)) {
          let [, sigil, name, attr = null] = match2(RE_REFERENCE);
          if (sigil === "$") {
            return { type: "var", name };
          }
          if (consumeToken(TOKEN_PAREN_OPEN)) {
            let args = parseArguments();
            if (sigil === "-") {
              return { type: "term", name, attr, args };
            }
            if (RE_FUNCTION_NAME.test(name)) {
              return { type: "func", name, args };
            }
            throw new SyntaxError("Function names must be all upper-case");
          }
          if (sigil === "-") {
            return {
              type: "term",
              name,
              attr,
              args: []
            };
          }
          return { type: "mesg", name, attr };
        }
        return parseLiteral();
      }
      function parseArguments() {
        let args = [];
        while (true) {
          switch (source[cursor]) {
            case ")":
              cursor++;
              return args;
            case void 0:
              throw new SyntaxError("Unclosed argument list");
          }
          args.push(parseArgument());
          consumeToken(TOKEN_COMMA);
        }
      }
      function parseArgument() {
        let expr = parseInlineExpression();
        if (expr.type !== "mesg") {
          return expr;
        }
        if (consumeToken(TOKEN_COLON)) {
          return {
            type: "narg",
            name: expr.name,
            value: parseLiteral()
          };
        }
        return expr;
      }
      function parseVariants() {
        let variants = [];
        let count = 0;
        let star;
        while (test(RE_VARIANT_START)) {
          if (consumeChar("*")) {
            star = count;
          }
          let key = parseVariantKey();
          let value = parsePattern();
          if (value === null) {
            throw new SyntaxError("Expected variant value");
          }
          variants[count++] = { key, value };
        }
        if (count === 0) {
          return null;
        }
        if (star === void 0) {
          throw new SyntaxError("Expected default variant");
        }
        return { variants, star };
      }
      function parseVariantKey() {
        consumeToken(TOKEN_BRACKET_OPEN, SyntaxError);
        let key;
        if (test(RE_NUMBER_LITERAL)) {
          key = parseNumberLiteral();
        } else {
          key = {
            type: "str",
            value: match1(RE_IDENTIFIER)
          };
        }
        consumeToken(TOKEN_BRACKET_CLOSE, SyntaxError);
        return key;
      }
      function parseLiteral() {
        if (test(RE_NUMBER_LITERAL)) {
          return parseNumberLiteral();
        }
        if (source[cursor] === '"') {
          return parseStringLiteral();
        }
        throw new SyntaxError("Invalid expression");
      }
      function parseNumberLiteral() {
        let [, value, fraction = ""] = match2(RE_NUMBER_LITERAL);
        let precision = fraction.length;
        return {
          type: "num",
          value: parseFloat(value),
          precision
        };
      }
      function parseStringLiteral() {
        consumeChar('"', SyntaxError);
        let value = "";
        while (true) {
          value += match1(RE_STRING_RUN);
          if (source[cursor] === "\\") {
            value += parseEscapeSequence();
            continue;
          }
          if (consumeChar('"')) {
            return { type: "str", value };
          }
          throw new SyntaxError("Unclosed string literal");
        }
      }
      function parseEscapeSequence() {
        if (test(RE_STRING_ESCAPE)) {
          return match1(RE_STRING_ESCAPE);
        }
        if (test(RE_UNICODE_ESCAPE)) {
          let [, codepoint4, codepoint6] = match2(RE_UNICODE_ESCAPE);
          let codepoint = parseInt(codepoint4 || codepoint6, 16);
          return codepoint <= 55295 || 57344 <= codepoint ? (
            // It's a Unicode scalar value.
            String.fromCodePoint(codepoint)
          ) : (
            // Lonely surrogates can cause trouble when the parsing result is
            // saved using UTF-8. Use U+FFFD REPLACEMENT CHARACTER instead.
            "\uFFFD"
          );
        }
        throw new SyntaxError("Unknown escape sequence");
      }
      function parseIndent() {
        let start = cursor;
        consumeToken(TOKEN_BLANK);
        switch (source[cursor]) {
          case ".":
          case "[":
          case "*":
          case "}":
          case void 0:
            return false;
          case "{":
            return makeIndent(source.slice(start, cursor));
        }
        if (source[cursor - 1] === " ") {
          return makeIndent(source.slice(start, cursor));
        }
        return false;
      }
      function trim(text, re) {
        return text.replace(re, "");
      }
      function makeIndent(blank) {
        let value = blank.replace(RE_BLANK_LINES, "\n");
        let length = RE_INDENT.exec(blank)[1].length;
        return new Indent(value, length);
      }
    }
  };
  var Indent = class {
    constructor(value, length) {
      this.value = value;
      this.length = length;
    }
  };

  // localization/i18n-core.ts
  function currentLanguage() {
    return window.Desmos?.Private?.Fragile?.currentLanguage?.() ?? "en";
  }
  var locales = /* @__PURE__ */ new Map();
  var Console2 = console;
  var fromFormattable = ({
    key,
    args,
    missingReplacement
  }) => format(key, args, missingReplacement);
  function format(key, args, missingReplacement) {
    const lang = currentLanguage();
    const bundle = locales.get(lang);
    if (bundle) {
      const message = bundle.getMessage(key);
      if (message?.value != null) {
        return bundle.formatPattern(message.value, args);
      }
      if (missingReplacement === void 0)
        Console2.warn("[DesModder] Error formatting key", key, "in locale", lang);
    }
    const englishBundle = locales.get("en");
    const englishMessage = englishBundle.getMessage(key);
    if (englishMessage?.value != null) {
      return englishBundle.formatPattern(englishMessage.value, args);
    }
    return missingReplacement ?? "";
  }
  function addLanguage(locale, ftl) {
    const resource = new FluentResource(ftl);
    const bundle = new FluentBundle(locale, { useIsolating: false });
    const errors = bundle.addResource(resource);
    if (errors.length) {
      Console2.warn("FTL translation file errors for locale " + locale, errors);
    }
    locales.set(locale, bundle);
  }
  addLanguage("en", en_default);
  addLanguage("es", es_default);
  addLanguage("fr", fr_default);
  addLanguage("ja", ja_default);
  addLanguage("zh-CN", zh_CN_default);

  // src/panic/panic.html
  var panic_default = `<!-- we don't necessarily have communication with the background script that
  would insert the style css, so use an inline style element -->
<style>
  #dsm-panic-popover {
    /* positioning */
    position: absolute;
    top: 10px;
    left: calc(50%);
    transform: translateX(-50%);
    z-index: 9999;
    width: max-content;
    max-width: calc(100% - 20px);
    /* formatting */
    background: white;
    padding: 0 20px 20px 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    user-select: text;
  }
  #dsm-panic-popover ul.dsm-checkbox-list {
    list-style-type: none;
    padding-left: 16px;
  }
  #dsm-panic-popover input[type="checkbox"] {
    cursor: pointer;
  }
  #dsm-panic-apply-reload-btn {
    float: right;
    padding: 3px 10px;
  }
  #dsm-plugins-disabled,
  .dsm-encountered-errors {
    /* Don't show until something gets added to this list */
    display: none;
  }
  #dsm-panic-reopen-button {
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(60px);
    z-index: 999;
    width: 37px;
    height: 37px;
    line-height: 34px;
    font-size: 20px;
    color: #5f5f5f;
  }
  @media only screen and (max-width: 800px) {
    #dsm-panic-reopen-button {
      transform: unset;
    }
  }
  @media only screen and (max-width: 450px) {
    #dsm-panic-reopen-button {
      top: unset;
      left: unset;
      bottom: 173px;
      right: 4px;
    }
  }
  .dsm-panic-button {
    text-align: center;
    cursor: pointer;
    background: #ededed;
    box-shadow: 0 0 5px rgb(0 0 0 / 15%);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .dsm-panic-buttons-row {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
  #dsm-panic-x-button {
    border: none;
    background: transparent;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    font-size: 25px;
    color: #5f5f5f;
  }
  #dsm-panic-x-button:hover,
  #dsm-panic-reopen-button:hover {
    color: black;
  }
  body:not(.dsm-panic-open) #dsm-panic-popover {
    display: none;
  }
  body.dsm-panic-open #dsm-panic-reopen-button {
    display: none;
  }
</style>
<div id="dsm-panic-popover">
  <button class="dsm-panic-close-button" id="dsm-panic-x-button">\u2716</button>
  <h2>DesModder Loading Errors Manager</h2>
  <p class="dsm-encountered-errors">
    Looks like some Desmos change happened to break some of DesModder's patches.
    <br />
    The patches are for the following purposes. Some may be critical, some may
    just be styling:
  </p>
  <ul id="dsm-patch-description-list"></ul>
  <p class="dsm-encountered-errors">
    The following plugins are affected: (check box to disable plugin)
  </p>
  <ul class="dsm-checkbox-list" id="dsm-panic-list"></ul>
  <p id="dsm-plugins-disabled">
    The following plugins are currently disabled from loading: (uncheck box to
    allow enabling plugin)
  </p>
  <ul class="dsm-checkbox-list" id="dsm-disabled-list"></ul>
  <div class="dsm-panic-buttons-row">
    <button class="dsm-panic-button dsm-panic-close-button">Ignore</button>
    <button class="dsm-panic-button" id="dsm-panic-apply-reload-btn">
      Apply and Reload
    </button>
  </div>
</div>
<button class="dsm-panic-button" id="dsm-panic-reopen-button">!</button>
`;

  // src/panic/panic.ts
  function insertPanicElement() {
    const frag = document.createRange().createContextualFragment(panic_default);
    document.body.appendChild(frag);
    document.getElementById("dsm-panic-apply-reload-btn").addEventListener("click", () => {
      const inputs = Array.from(
        document.querySelectorAll("#dsm-panic-popover ul input")
      );
      const newPluginsForceDisabled = inputs.filter((el) => el.checked).map((el) => el.dataset.plugin).filter((n) => n !== void 0);
      if (window_default.DesModderPreload) {
        window_default.DesModderPreload.pluginsForceDisabled = new Set(
          newPluginsForceDisabled
        );
      }
      postMessageUp({
        type: "set-plugins-force-disabled",
        value: newPluginsForceDisabled
      });
      location.reload();
    });
    document.querySelectorAll(".dsm-panic-close-button").forEach(
      (n) => n.addEventListener("click", () => {
        document.body.classList.remove("dsm-panic-open");
      })
    );
    document.getElementById("dsm-panic-reopen-button").addEventListener("click", () => {
      document.body.classList.add("dsm-panic-open");
    });
  }
  function getPanicPopover() {
    return document.getElementById("dsm-panic-popover");
  }
  function ensurePanicPopover() {
    if (getPanicPopover() === null)
      insertPanicElement();
    return getPanicPopover();
  }
  function addLabelledCheckboxItem(list, plugin) {
    list.appendChild(
      document.createRange().createContextualFragment(`<li>
      <label>
        <input type="checkbox" />
      </label>
    </li>`)
    );
    const li = list.lastElementChild;
    const humanName = format(plugin + "-name", void 0, plugin);
    li.querySelector("label").appendChild(document.createTextNode(humanName));
    li.querySelector("input").dataset.plugin = plugin;
    return li;
  }
  var panickedPlugins = /* @__PURE__ */ new Set();
  function addPanickedPlugin(plugin) {
    if (window_default.DesModderPreload?.pluginsForceDisabled.has(plugin)) {
      return;
    }
    Console.warn("Panicking for plugin", plugin);
    const panicPopover = ensurePanicPopover();
    document.querySelectorAll(".dsm-encountered-errors").forEach((n) => n.style.display = "unset");
    if (!panickedPlugins.has(plugin)) {
      const list = panicPopover.querySelector("ul#dsm-panic-list");
      addLabelledCheckboxItem(list, plugin);
    }
    panickedPlugins.add(plugin);
  }
  function addPanic(block) {
    block.plugins.forEach(addPanickedPlugin);
    const description = document.createElement("li");
    description.innerText = block.description;
    document.getElementById("dsm-patch-description-list").appendChild(description);
  }
  function addForceDisabled(plugin) {
    const panicPopover = ensurePanicPopover();
    document.getElementById("dsm-plugins-disabled").style.display = "unset";
    const list = panicPopover.querySelector("ul#dsm-disabled-list");
    const li = addLabelledCheckboxItem(list, plugin);
    li.querySelector("input").checked = true;
  }

  // src/plugins/GLesmos/glesmos.replacements
  var glesmos_default = { "file": "# Replacements for GLesmos\n\n*plugin* `GLesmos`\n\n## Add a fill menu option for switching an expression to glesmos rendering mode\n\nWarning: this is partially duplicated below (\"Add a lines menu option...\") rather than\nadding an extra section to the menu view.\n\n*Description* `Add toggle in \"fill\" menu to enable GLesmos`\n\n*Find* => `key`\n```js\n{ class: 'dcg-iconed-mathquill-row dcg-fill-opacity-row' ____ }\n```\n\n*Find_surrounding_template* `key` => `template`\n\n*Find* inside `template`\n```js\n$createElement(\n  'div',\n  {\n    class: 'dcg-options-menu-content',\n    children: __children__\n  }\n)\n```\n\n*Find* inside `template`\n```js\n$createElement2($ToggleView, {\n  ariaLabel: () => this.controller.s(\"graphing-calculator-narration-fill-visible\")\n```\n\nJust add one more child.\n\n*Replace* `children` with\n```js\n[\n  __children__,\n  DesModder.insertElement(() => DSM.glesmos?.glesmosToggle(this.model.id, $ToggleView, true))\n]\n```\n\n## Add a lines menu option for switching an expression to glesmos rendering mode\n\nWarning: this is partially duplicated above (\"Add a fill menu option...\").\n\n*Description* `Add toggle in \"lines\" menu to enable GLesmos and confirm lines`\n\n*Find* => `key`\n```js\n{ class: 'dcg-iconed-mathquill-row dcg-line-opacity-row' ____ }\n```\n\n*Find_surrounding_template* `key` => `template`\n\n*Find* inside `template`\n```js\n$createElement(\n  'div',\n  {\n    class: 'dcg-options-menu-content',\n    children: __children__\n  }\n)\n```\n\n*Find* inside `template`\n```js\n$createElement2($ToggleView, {\n  ariaLabel: () => this.controller.s(\"graphing-calculator-narration-lines-visible\")\n```\n\nAdd one child before and one after.\n\n*Replace* `children` with\n```js\n[\n  DesModder.insertElement(() => DSM.glesmos?.confirmLines(this.model.id, $ToggleView)),\n  __children__,\n  DesModder.insertElement(() => DSM.glesmos?.glesmosToggle(this.model.id, $ToggleView, false))\n]\n```\n\n## Replace main renderer with glesmos rendering when necessary\n\n*Description* `Draw GLesmos code`\n\n*Find*\n\n```js\ndrawSketchToCtx({\n  sketch: $sketch, drawContext: $drawCtx, ____\n}) {__body__}\n```\n\n*Find* inside `__body__` => `guard`\n\n```js\nif (!$ee.branches || !$ee.branches.length) return;\n```\n\n*Replace* `guard` with\n\n```js\n__guard__\nwindow.DesModder?.drawGLesmosSketchToCtx?.(window.Calc, $drawCtx, $sketch);\n```\n\n## Pass GLesmos flag to worker\n\n*Description* `Pass GLesmos flag to the web worker`\n\n*Find* => `addStatement`\n```js\naddStatement($stmt) {\n  this.applyToChangeSets(__callback__)\n}\n```\n\n*Replace* `addStatement` with\n```js\naddStatement($stmt) {\n  if ($stmt.type === \"statement\" && DSM.glesmos?.isGlesmosMode($stmt.id)) {\n    $stmt = {\n      ...$stmt,\n      glesmos: true,\n      glesmosLinesConfirmed: DSM.glesmos?.isGLesmosLinesConfirmed($stmt.id)\n    }\n  }\n  this.applyToChangeSets(__callback__)\n}\n```\n\n## Replace quadtree implicit tracing with glesmos compilation\n\n*Description* `Compile GLesmos code instead of running implicit plotter`\n\n*worker_only*\n\n*Find* => `branchesReplacement`\n```js\nbranchesReplacement: function (____) {\n  ____\n}\n```\n\n*Replace* `branchesReplacement` with\n\n```js\nbranchesReplacement: function (\n  graphProps,\n  concrete,\n  graphInfo,\n  emitGLSL\n) {\n  const { userData } = graphProps;\n  if (!userData.glesmos)\n    return undefined;\n  // 8 == GRAPHMODE.IMPLICIT\n  if (graphInfo.graphMode !== 8) {\n    return undefined;\n  }\n  const isEquality = graphInfo.operator === '=';\n  const lines =\n    userData.lines !== false &&\n    (isEquality || userData.glesmosLinesConfirmed);\n  let derivativeX, derivativeY;\n  if (lines) {\n    try {\n      derivativeX = concrete.takeDerivative('x');\n      derivativeY = concrete.takeDerivative('y');\n    } catch {}\n  }\n  const newCompiled = self.dsm_compileGLesmos(\n    concrete, graphInfo.color, graphInfo.fillOpacity ?? 0, graphInfo.lineOpacity, userData.lines !== false ? graphInfo.lineWidth : 0.0,\n    derivativeX, derivativeY, emitGLSL\n  );\n  return [{\n    graphMode: \"GLesmos\",\n    compiledGL: newCompiled,\n    segments: [],\n    poi: {}\n  }]\n}\n```\n", "filename": "glesmos.replacements" };

  // src/plugins/better-evaluation-view/better-evaluation-view.replacements
  var better_evaluation_view_default = { "file": '# Better Evaluation View Replacements\n\n*plugin* `better-evaluation-view`\n\n## Show list elements: JSX consumer\n\n*Description* `Show list elements`\n\n*Find* => `list`\n```js\n() => this.cachedEvaluationRHS, "type", {\n"list-count": $listCountRhs => $listCountCreateElement(__oldListCount__),\nlist: $rhs => $createElement(__oldList__)\n```\n\n*Replace* `list` with\n```js\n() => this.cachedEvaluationRHS, "type", {\n"list-count": $listCountRhs => DesModder.replaceElement(\n  () => $listCountCreateElement(__oldListCount__),\n  () => DSM.betterEvaluationView?.evaluation(DSM.betterEvaluationView?.getTypedConstantValue.bind(this)),\n  () => DSM.betterEvaluationView?.evaluationUpdateKey(this)\n),\nlist: $rhs => DesModder.replaceElement(\n  () => $createElement(__oldList__),\n  () => DSM.betterEvaluationView?.evaluation(DSM.betterEvaluationView?.getTypedConstantValue.bind(this)),\n  () => DSM.betterEvaluationView?.evaluationUpdateKey(this)\n)\n```\n\n*Find* => `emptyList`\n```js\nemptyList: () => $emptyListCreateElement(__oldEmptyList__)\n```\n\n*Replace* `emptyList` with\n```js\nemptyList: () => DesModder.replaceElement(\n  () => $emptyListCreateElement(__oldEmptyList__),\n  () => DSM.betterEvaluationView?.evaluation(DSM.betterEvaluationView?.getTypedConstantValue.bind(this)),\n  () => DSM.betterEvaluationView?.evaluationUpdateKey(this)\n)\n```\n\n## Show color values: JSX consumer\n\n*Description* `Show color values`\n\n*Find* => `color`\n```js\nrgbcolor: $rhs => $createElement(__swatch__)\n```\n\n*Replace* `color` with\n```js\nrgbcolor: $rhs => DesModder.replaceElement(\n  () => $createElement(__swatch__),\n  () => DSM.betterEvaluationView?.evaluation(DSM.betterEvaluationView?.getTypedConstantValue.bind(this)),\n  () => DSM.betterEvaluationView?.evaluationUpdateKey(this)\n)\n```\n\n## Distinguish undefineds in numericLabels\n\n*Description* `Distinguish NaN vs -\u221E vs +\u221E vs complex`\n\nNeeds \'worker_only\' because this goes into the `shared_module_source`\n\n*worker_only*\n\nAdd a value field to "undefined" labels\n\n*Find* => `undefined`\n```js\nif (isNaN($val) || !isFinite($val)) return { type: "undefined" }\n```\n\n*Replace* `undefined` with\n```js\nif (isNaN($val) || !isFinite($val)) {\n  if (!DSM.betterEvaluationView?.settings.floats) {\n    return { type: "undefined" };\n  }\n  return {\n    type: "decimal",\n    value: isNaN($val)\n      ? "\\\\mathrm{NaN}"\n      : $val === Infinity\n      ? "\\\\infty{}"\n      : $val === -Infinity\n      ? "-\\\\infty{}"\n      : "undefined"\n  };\n}\n```\n\n## Distinguish between 0 and -0 in numericLabels\n\n*Description* `Distinguish 0 vs -0`\n\n*worker_only*\n\n*Find* => `zero`\n```js\nif ($val === 0 || Math.abs($val) < $zeroCutoff)\n  return {\n    type: \'decimal\',\n    value: \'0\'\n  }\n```\n\n*Replace* `zero` with\n```js\nif ($val === 0) {\n  if (!DSM.betterEvaluationView?.settings.floats || Object.is($val, 0)) {\n    return {\n      type: "decimal",\n      value: "0"\n    }\n  } else {\n    return {\n      type: "decimal",\n      value: "-0"\n    }\n  }\n} else if ($zeroCutoff && Math.abs($val) < $zeroCutoff) {\n  if (!DSM.betterEvaluationView?.settings.floats || Math.sign($val) === 1) {\n    return {\n      type: "decimal",\n      value: "0"\n    }\n  } else {\n    return {\n      type: "decimal",\n      value: "-0"\n    }\n  }\n}\n```\n\n## Distinguish NaN, +\u221E, -\u221E in lists.\n\n*Description* `Distinguish NaN, +\u221E, -\u221E in lists.`\n\nNeeds \'worker_only\' because this goes into the `shared_module_source`\n\n*worker_only*\n\n*Find* => `truncatedLatexLabelDef`\n```js\nfunction $truncatedLatexLabel($e, $t) {\n    let $r = $numericLabel($e, $t);\n    switch ($r.type) {\n    case "undefined":\n        return "undefined";\n    case "decimal":\n        return $r.value;\n    case "scientific":\n        return $r.mantissa + "\\\\times10^{" + $r.exponent + "}";\n```\n\n*Replace* `truncatedLatexLabelDef` with\n```js\nfunction $truncatedLatexLabel($e, $t) {\n    let $r = $numericLabel($e, $t);\n    switch ($r.type) {\n    case "undefined":\n        return DSM.betterEvaluationView?.settings.floats ? $r.value : \'undefined\';\n    case "decimal":\n        return $r.value;\n    case "scientific":\n        return $r.mantissa + "\\\\times10^{" + $r.exponent + "}";\n```\n\n## Break cache for list width\n\n*Description* `Force re-measure of list when better-evaluation-view settings change`\n\n*Find* => `cacheEntry`\n\n```js\nevaluationRHS: this.cachedEvaluationRHS,\n```\n\n*Replace* `cacheEntry` with\n\n```js\nevaluationRHS: this.cachedEvaluationRHS,\ndsmBevSettings: DSM.betterEvaluationView?.settings && {...DSM.betterEvaluationView.settings},\n```\n', "filename": "better-evaluation-view.replacements" };

  // src/plugins/code-golf/code-golf.replacements
  var code_golf_default = { "file": '# Replacements for Code Golf\n\n*plugin* `code-golf`\n\n## Add a character count to each expression in the exppanel\n\n*Description* `Show how many characters used by an expression in the exppanel`\n\n*Find* => `math_item`\n```js\n$createElement("div", {\n    class: ()=>({\n        ____$\n        "dcg-highlighted-expressionitem"\n        ____$\n        "dcg-mathitem"\n        ____\n    })\n    ____\n})\n```\n\n*Find* inside `math_item`\n```js\n$createElement2("div", {\n    class: "dcg-fade-container",\n    ____$\n    children: [__children__]\n})\n```\n\n*Replace* `__children__` with\n```js\n__children__,\nDesModder.insertElement(() => ( DSM.codeGolf?.expressionItemCostPanel(this.model, this._rootNode)  ))\n```\n\n## Add total counts to folders in exppanel\n\n*Description* `Show golfing stats for an entire folder`\n\n*Find* => `folder_item`\n```js\n$createElement("div", {\n    class: () => ({\n        ____$\n        "dcg-highlighted-expressionitem"\n        ____$\n        "dcg-expressionfolder"\n        ____\n    })\n    ____\n})\n```\n\n\n*Find* inside `folder_item`\n```js\n$createElement2("div", {\n    class: "dcg-fade-container",\n    children: [__children__]\n})\n```\n\n*Replace* `children` with\n```js\n__children__,\nDesModder.insertElement(() => (DSM.codeGolf?.folderCostPanel(this.model)))\n```\n', "filename": "code-golf.replacements" };

  // src/core-plugins/expr-action-buttons/expr-action-buttons.replacements
  var expr_action_buttons_default = { "file": '# Replacements for Extra Expression Buttons\n\n*plugin* `pin-expressions` `folder-tools`\n\n## Insert extra buttons\n\nInsert before the delete button but after the other buttons.\n\n*Description* `Show buttons like "pin" and "merge folder."`\n\n*Find* => `delete_button`\n```js\n$createElement($Tooltip, {\n  tooltip: () => this.controller.s("graphing-calculator-label-expression-delete-tooltip")\n  ____\n})\n```\n\n*Replace* `delete_button` with\n```js\nDesModder.insertElement(() => DSM.exprActionButtons?.actionButtonsView(this.model())),\n__delete_button__\n```\n', "filename": "expr-action-buttons.replacements" };

  // src/plugins/find-replace/find-replace.replacements
  var find_replace_default = { "file": '# Replacements for Find-Replace\n\n*plugin* `find-and-replace`\n\n## Allow find-replace to appear, even if the expression list is not focused\n\n*Description* `Allow find-replace to appear, even if the expression list is not focused`\n\n*Find* => `from`\n\n```js\nthis.controller.isExpressionListFocused()\n```\n\n*Replace* `from` with\n\n```js\n!DSM.textMode?.inTextMode\n```\n\n## Insert the expression replace bar after the search bar\n\n*Description* `Insert the expression replace bar after the search bar`\n\n*Find* => `searchBar`\n```js\n$createElement("div", {\n  class: () => ({\n    ____$\n    "dcg-expression-search-bar"\n    ____\n  })\n  ____\n})\n```\n\n*Replace* `searchBar` with\n```js\nDesModder.replaceElement(\n  () => __searchBar__,\n  () => DSM.findReplace?.replaceSearchView\n)\n```\n', "filename": "find-replace.replacements" };

  // src/plugins/hide-errors/hide-errors.replacements
  var hide_errors_default = { "file": '# Replacements for Hide Errors\n\n*plugin* `hide-errors`\n\n## Prevent enter/shift-enter from creating sliders\n\n*Description* `Prevent enter and shift-enter from creating sliders`\n\n*Find* => `from`\n```js\n  $cc.areSlidersEnabled())\n  return $cc.createSlidersForItem($model.id\n```\n\n*Replace* `from` with\n```js\n  $cc.areSlidersEnabled() &&\n  !DSM.hideErrors?.isErrorHidden($model.id)\n)\n  return $cc.createSlidersForItem($model.id\n```\n\n## Pass in ID to error triangle\n\n*Description* `Wrap error triangle to control its style (1)`\n\n*Find* => `from`\n```js\nerror: () => $createElement($TooltippedError, {\n    error: $e.bindFn($e.getErrorMsg),\n    __opts__\n  })\n```\n\n*Find_surrounding_template* `from` => `template`\n\n*Find* inside `template`\n```js\n$this.bindFn($this.getIconMode)\n```\n\n*Replace* `from` with\n```js\nerror: () => $createElement($TooltippedError, {\n    error: $e.bindFn($e.getErrorMsg),\n    exprId: () => $this.model.id,\n    __opts__\n  })\n```\n\n## Wrap error triangle with div for onTap and opacity control\n\n*Description* `Wrap error triangle to control its style (2)`\n\nWrap the error message tooltipped-error with a div, using `onTap` to trigger hiding/showing the error (but only when shift is held).\n\n*Find* => `from`\n```js\nadditionalClass: $$const("dcg-tooltipped-error-container"),\nchildren: __errorTriangle__\n```\n\n*Replace* `errorTriangle` with\n```js\nDesModder.replaceElement(\n  () => __errorTriangle__,\n  () => DSM.hideErrors?.errorTriangle(this.props.exprId?.() ?? "")\n)\n```\n\n## Add a "hide" button to the slider prompts\n\n*Description* `Add a "hide" button to the slider prompts`\n\n*Find* => `element`\n```js\n$createElement(\n  \'span\',\n  { class: \'btns\', children: [__children__] }\n)\n```\n\nAdd one more child for the hide button\n\n*Replace* `children` with\n```js\n__children__,\nDesModder.insertElement(() => DSM.hideErrors?.hideButton(() => this.model))\n```\n\n## Disable slider creation prompt if error is hidden\n\n*Description* `Disable slider prompts if error is hidden`\n\n*Find* => `from`\n```js\nshouldShowSliderPrompt($expression) {\n  let\n```\n\n*Replace* `from` with\n```js\nshouldShowSliderPrompt($expression) {\n    if (DSM.hideErrors?.isErrorHidden($expression?.id)) return false;\n    let\n```\n\n## Allow shift-enter to create a new expression and hide errors on the old expression\n\n*Description* `Hide errors on shift-enter`\n\n*Find* => `from`\n```js\nif ($e === "Enter")\n  return $t && ($t.preventDefault(), $t.stopPropagation()),\n    this.controller.dispatch({ type: "on-special-key-pressed", key: "Enter" })\n```\n\n*Replace* `from` with\n```js\n__from__\nelse if ("Shift-Enter" === $e) {\n  if (this.model.error && !DSM.multiline?.settings?.spacesToNewlines)\n    DSM.hideErrors?.hideError(this.model.id);\n  return this.controller.dispatch({\n    type: "on-special-key-pressed",\n    key: "Enter"\n  })\n}\n```\n', "filename": "hide-errors.replacements" };

  // src/core-plugins/manage-metadata/manage-metadata.replacements
  var manage_metadata_default = { "file": '# Metadata Replacements\n\n*plugin* `manage-metadata`\n\nReplacements that apply to more than one plugin.\n\n## Duplicate metadata when an expression is duplicated\n\n*Description* `Duplicate metadata (e.g. GLesmos enabled, or pinned/unpinned) when an expression is duplicated`\n\n*Find*\n```js\ncopyExpressionToIndex(____) { __body__ }\n```\n\n*Find* inside `body`:\n```js\nlet $to = this.createItemModel(\n```\n\n*Find* inside `body`:\n```js\ncase "expression": $from =\n```\n\n*Replace* `body` with\n```js\n__body__;\nDSM.metadata?.duplicateMetadata($to.id, $from.id)\n```\n\n## Convert IDs when loading graph from a link\n\n*Description* `Transfer expression IDs for metadata when a link is pasted into a blank expression`\n\n*Find* => `body`\n\n```js\nfor (let $I = 0; $I < $newList.length; $I++) {\n    let $newId = $r.generateId(),\n        $expr = $newList[$I];\n    if ($expr.type === "folder")\n        if ($m) {\n            $n();\n            return\n        } else {\n            $y[$expr.id] = $newId,\n            $expr.id = $newId;\n            continue\n        }\n    $expr.folderId ? $expr.folderId = $y[$expr.folderId] : $h ? $expr.folderId = $p.id : $u && ($expr.folderId = $p.folderId),\n    $expr.id = $newId\n}\nlet $v = $exports[____]($w),\n    $E = 0;\nfor (; $E < $currentList.length; ) {\n    ____\n}\nlet $k = $h ? $E + 1 : $E,\n    $T = $h ? 0 : 1;\n$currentList.splice($k, $T, ...$newList),\n```\n\n*Find* inside `body` => `firstFor`\n\n```js\nfor (let $ = 0; $ < $.length; $++) {\n    let $ = $.generateId(),\n        $ = $[$];\n```\n\n*Replace* `firstFor` with\n\n```js\nconst dsmOldIdToNewId = new window.Map();\n__firstFor__\n    dsmOldIdToNewId.set($expr.id, $newId);\n```\n\n*Find* inside `body` => `splice`\n\n```js\n$.splice($, $, ...$)\n```\n\n*Replace* `splice` with\n\n```js\n__splice__,\nDSM?.metadata?.transferMetadata($currentList, $newList, dsmOldIdToNewId)\n```\n', "filename": "manage-metadata.replacements" };

  // src/core-plugins/override-keystroke/override-keystroke.replacements
  var override_keystroke_default = { "file": '# Override Keystroke\n\n*plugin* `override-keystroke` `intellisense` `multiline` `better-navigation`\n\n## Duplicate metadata when an expression is duplicated\n\n*Description* `Duplicate metadata (e.g. GLesmos enabled, or pinned/unpinned) when an expression is duplicated`\n\n*Find* => `parentMQ`\n```js\ndidMountMathquill($) {\n  var $, $;\n  this.cachedConfig = this.getCacheableMQConfig();\n  __MQbody__\n```\n\n*Find* inside `MQbody` => `from`\n```js\noverrideKeystroke: ($key, $e) => {\n```\n\n*Replace* `from` with\n```js\noverrideKeystroke: ($key, $e) => {\n  if (DSM.overrideKeystroke?.onMQKeystroke($key, $e) === "cancel") return;\n```\n', "filename": "override-keystroke.replacements" };

  // src/core-plugins/pillbox-menus/pillbox-menus.replacements
  var pillbox_menus_default = { "file": '# Pillbox Replacements\n\n*plugin* `pillbox-menus`\n\n## Insert spot for extra pillbox buttons in regular pillbox view\n\n*Description* `Add pillbox buttons (like the DesModder button) in the graphing calculator`\n\n*Find* => `pushkey`\n```js\nthis.shouldShowSettingsWrench() && $right.push("settings"),\n```\n\n*Replace* `pushkey` with\n```js\n__pushkey__\nDSM.pillboxMenus?.pushToPillboxList($right),\n```\n\n*Find* => `case`\n```js\nswitch ($buttonId) {\n  case "settings":\n    return $createElement($, ____);\n```\n\n*Replace* `case` with\n```js\n__case__\n  default:\n    if ($buttonId.startsWith("dsm-"))\n      return DesModder.insertElement(() => DSM.pillboxMenus?.pillboxButtonView($buttonId.slice(4), false));\n    console.warn("Unhandled pillbox button type");\n    return $createElement("span", {});\n```\n\n\n## Bottom zero for our pillbox menus\n\n*Description* `Fix scrolling of pillbox menus (like the video creator menu)`\n\n*Find* => `from`\n```js\nthis.controller.isGraphSettingsOpen() ? `bottom: ${$e}px;` : "bottom: auto"\n```\n\n*Replace* `from` with\n```js\nthis.controller.isGraphSettingsOpen() || DSM.pillboxMenus?.isSomePillboxMenuOpen()\n  ? `bottom: ${$e}px;` : "bottom: auto;"\n```\n', "filename": "pillbox-menus.replacements" };

  // src/plugins/pin-expressions/pin-expressions.replacements
  var pin_expressions_default = { "file": "# Replacements for Pin Expressions\n\n*plugin* `pin-expressions`\n\n## Disable pinned expressions from appearing in the unpinned section.\n\n*Description* `Remove pinned expressions from the regular (unpinned) expressions list`\n\nCompletely rewrites function `getDisplayState(e)` to also set an item as hidden if it is pinned\n\n*Find* => `from`\n```js\n$e.isHiddenFromUI || $e.filteredBySearch\n```\n\n*Replace* `from` with\n```js\n$e.isHiddenFromUI || $e.filteredBySearch || DSM.pinExpressions?.isExpressionPinned($e.id)\n```\n\nReplacement appears in\n\n```js\nexports.getDisplayState = function ($e) {\n    return $e.isHiddenFromUI || $e.filteredBySearch\n      ? 'none'\n      : $e.renderShell\n      ? 'shell'\n      : 'render'\n  }\n```\n\n## Allow deleting pinned expressions\n\nSince pinned expressions have `isDragDrop=true`, they have `model.dcgView = undefined`, which otherwise prevents the delete animation from occurring.\n\n*Description* `Allow deleting pinned expressions`\n\n*Find*\n```js\n_deleteItemAndAnimateOut ($e, $t ____) {__body__}\n```\n\n*Find* inside `body`\n```js\n$s = this.getItemNodeById($)\n```\n\n*Replace* `body` with\n```js\n__body__;\n$s || this._finishDeletingItemAfterAnimation($e, $t);\n```\n", "filename": "pin-expressions.replacements" };

  // src/plugins/right-click-tray/right-click-tray.replacements
  var right_click_tray_default = { "file": "# Replacements for Right-click tray\n\n*plugin* `right-click-tray`\n\n## Allow right-click to open long-hold menus\n\n*Description* `Allow right-click to open long-hold menus`\n\nPatching JQuery's `.on()` function to behave specially for `.on('dcg-longhold', ...)`.\nWe don't hook up `.off()` because that would be complicated, and it's not necessary.\nDesmos doesn't do `.off('dcg-longhold')`.\n\n*Find* => `on_def`\n```js\non: function($selector, $callback, $a, $b) {\n  return $on(this, $selector, $callback, $a, $b)\n}\n```\n\n*Replace* `on_def` with\n\n```js\non: function($selector, $callback, $a, $b) {\n  if ($selector === 'dcg-longhold') {\n    // this = jquery object\n    this.each(function() {\n      // this = HTML element.\n      this.addEventListener(\"mousedown\", event => {\n        if (event.button !== 2) return;\n        const rightClickTray = DSM.rightClickTray\n        if (!rightClickTray) return;\n        DSM.cc?.dispatch({\n          type: 'close-item-settings-menu'\n        });\n        event.handle = () => event.stopPropagation();\n        rightClickTray.stopNextContextMenu = true;\n        $callback(event);\n      })\n      this.addEventListener(\"contextmenu\", event => {\n        const rightClickTray = DSM.rightClickTray\n        if (!rightClickTray) return;\n        if (rightClickTray.stopNextContextMenu) {\n          event.preventDefault();\n          rightClickTray.stopNextContextMenu = false;\n        }\n      })\n    })\n  }\n  return $on(this, $selector, $callback, $a, $b);\n}\n```\n", "filename": "right-click-tray.replacements" };

  // src/plugins/show-tips/show-tips.replacements
  var show_tips_default = { "file": '# Show-Tips\n\n*plugin* `show-tips`\n\n## Replace branding to show tips\n\n*Description* `Replace "powered by desmos" with tips`\n\n*Find*\n```js\n$createElement(\n  "div",\n  {\n    class: "dcg-expressions-branding",\n    children: __children__\n  }\n)\n```\n\n*Replace* `children` with\n```js\n[\n  __children__,\n  DesModder.insertElement(() => DSM.showTips?.tipView())\n]\n```\n', "filename": "show-tips.replacements" };

  // src/plugins/syntax-highlighting/syntax-highlighting.replacements
  var syntax_highlighting_default = { "file": '# Replacements for Syntax Highlighting\n\n*plugin* `syntax-highlighting`\n\n## Add a class for commas\n\n*Description* `Allow commas (\',\') to be highlighted.`\n\n*Find* => `from`\n\nhttps://github.com/desmosinc/mathquill/blob/5ba5994282a6e7cbec5426b8837ed8089ff0e0d9/src/dom.ts#L56-L83\n\n```js\nfor (var $prop in $opts) {\n    var $val = $opts[$prop];\n    $val !== void 0 && $elem.setAttribute(\n      $prop,\n      typeof $val == "string" ? $val : String($val)\n    )\n}\nif ($children)\n    for (var $i = 0; $i < $children.length; $i++)\n        $elem.appendChild($children[$i]);\n```\n\n*Replace* `from` with\n\n```js\n__from__\nif ($children?.length === 1 && $children[0]?.textContent === ",") {\n  $elem.classList.add("dsm-mq-syntax-comma");\n}\n```\n', "filename": "syntax-highlighting.replacements" };

  // src/plugins/text-mode/text-mode.replacements
  var text_mode_default = { "file": '# Replacements for Text Mode\n\n*plugin* `text-mode`\n\n## Hide the keypad when in text mode\n\n*Description* `Hide the on-screen keypad in Text Mode`\n\n*Find* => `from`\n\n```js\nisShowKeypadButtonVisible () { return __curr__ }\n```\n\n*Replace* `from` with\n\n```js\nisShowKeypadButtonVisible () {\n  return (__curr__) && !DSM.textMode?.inTextMode\n}\n```\n\n## Add text mode toggle button\n\n*Description* `Add toggle button to enable Text Mode`\n\n*Find* => `center`\n```js\n$createElement(\n  \'div\',\n  { class: \'dcg-center-buttons\' ____ }\n)\n```\n\n*Replace* `center` with\n```js\n__center__,\nDesModder.insertElement(() => DSM.textMode?.textModeToggle()),\n// This is for pillbox-menus, not text-mode\nDesModder.insertElement(\n  () => (\n    !this.controller.getGraphSettings().config.graphpaper\n      && DSM.pillboxMenus?.pillboxContainerView(true)\n  )\n)\n```\n\n## Add Text Mode class for styling\n\n*Description* `Style expressions list differently in Text Mode`\n\n*Find* => `from`\n\n```js\n"dcg-exppanel-container": !0\n```\n\n*Replace* `from` with\n\n```js\n"dcg-exppanel-container": !0,\n"dsm-in-text-mode": DSM.textMode?.inTextMode\n```\n', "filename": "text-mode.replacements" };

  // src/preload/moduleOverrides/insert-panels.replacements
  var insert_panels_default = { "file": '# Insert Panels replacements\n\n*plugin* `pin-expressions` `text-mode`\n\n\n## Insert panels on the expressions list\n\n*Description* `Insert panels to show Text Mode and pinned expressions`\n\n*Find* => `element`\n```js\n$createElement(\n  "div",\n  {\n    class: () => {\n      var $;\n      return {\n        "dcg-exppanel-container": ____\n      }\n    },\n    style: () => (____),\n    children: [__children__]\n  }\n)\n```\n\n*Replace* `children` with\n```js\n__children__,\nDesModder.insertElement(() => DSM.pinExpressions?.pinnedPanel(this)),\nDesModder.insertElement(() => DSM.textMode?.editorPanel(this)),\n```\n', "filename": "insert-panels.replacements" };

  // src/plugins/quake-pro/quake-pro.replacements
  var quake_pro_default = { "file": '# Replacements for Quake Pro\n\n*plugin* `quake-pro`\n\n## Increase the FOV of the camera\n\n*Description* `Multiply getPerspectiveDistortion() to increase the viewport FOV.`\n\n*Find* => `from`\n```js\n{\n  let $e = this.graphSettings.perspectiveDistortion;\n  return __return__\n}\n```\n\n*Replace* `from` with\n```js\n{\n  let $e = this.graphSettings.perspectiveDistortion;\n  return (__return__) * (DSM.quakePro?.dollyMagnification ?? 1);\n}\n```\n\n\n## Adjust the FOV of the slider\n\n*Description* `Divide getPerspectiveValue() to normalize the FOV slider in the settings menu.`\n\n*Find* => `from`\n```js\n{\n  return this.controller.getPerspectiveDistortion() - 1\n}\n```\n\n*Replace* `from` with\n```js\n{\n  return this.controller.getPerspectiveDistortion() / (DSM.quakePro?.dollyMagnification ?? 1) - 1\n}\n```\n\n\n## Communicate to the 3D worker\n\n*Description* `Sends the necessary Quake Pro data to the 3D worker.`\n\n*Find* => `from`\n```js\nthis.redrawMessagesInWorker++,\nthis.sendMessage({\n  type: "redraw-3d",\n  workerData: this.getWorkerData(),\n  __payload__\n})\n```\n\n*Replace* `from` with\n```js\nthis.redrawMessagesInWorker++;\n\nconst workerData = this.getWorkerData();\nconst quakePro = DSM.quakePro?.settings;\nconst {settings} = workerData;\n\n/** This stores a value from 0-1 depending how zoomed the user currently is (based on dragging the slider). */\nconst zoomPercentage = settings.perspectiveDistortion / (quakePro?.dollyMagnification ?? 1) / 6.25;\n\nconst scalarMultiplier = quakePro ? (\n  (quakePro.scalarZoomed - 1) * zoomPercentage + 1\n) : 1;\n\n// Adds the Quake Pro settings\nsettings.quakePro = {\n  ...(quakePro ?? {}),\n  zoomPercentage,\n  scalarMultiplier\n};\n\nthis.sendMessage({\n  type: "redraw-3d",\n  workerData,\n  __payload__\n})\n```\n\n\n\n## Multiply everything by scalar\n\n*Description* `Multiply viewport to act like you are zooming in.`\n\n*worker_only*\n\n*Find* => `from`\n```js\nlet $o = $cue / 360,\n  $i = $t6 / $Y0($r, 1);\n```\n\n*Replace* `from` with\n```js\nconst quakePro = this.settings?.quakePro;\nlet $o = $cue / 360,\n  $i = $t6 / ($Y0($r, 1) * (quakePro?.scalarMultiplier ?? 1));\n```\n\n### Alternative\n\n*Description* `Multiply viewport to act like you are zooming in.`\n\n*worker_only*\n\n*Find* => `from`\n```js\ngetFovBeforePerspectiveDistortion(__args__) {\n  return __ret__\n}\n```\n\n*Replace* `from` with\n```js\ngetFovBeforePerspectiveDistortion(__args__) {\n  const quakePro = this.settings?.quakePro;\n  return (__ret__) / (quakePro?.scalarMultiplier ?? 1);\n}\n```\n', "filename": "quake-pro.replacements" };

  // src/plugins/video-creator/video-creator.replacements
  var video_creator_default = { "file": '# Replacements for Video Creator\n\n*plugin* `video-creator`\n\n## keypad fix\n\n*Description* `bring up keypad when tapping on math inputs on mobile`\n\n*Find*  => `focusLocationValid`\n```js\nisCurrentFocusLocationValid() {\n  let $focusLocation = this.focusLocation;\n  if (!$focusLocation)\n    return !0;\n\n```\n\n*Replace* `focusLocationValid` with\n```js\nisCurrentFocusLocationValid() {\n  let $focusLocation = this.focusLocation;\n  if (!$focusLocation)\n    return !0;\n  if ($focusLocation.type === "dsm-focus") {\n    return DSM?.focusLocationValid($focusLocation);\n  }\n```\n\n### Alternative\n\n*Description* `do nothing`\n', "filename": "video-creator.replacements" };

  // src/plugins/index-replacements.ts
  var index_replacements_default = [
    insert_panels_default,
    manage_metadata_default,
    override_keystroke_default,
    pillbox_menus_default,
    better_evaluation_view_default,
    find_replace_default,
    glesmos_default,
    hide_errors_default,
    pin_expressions_default,
    text_mode_default,
    expr_action_buttons_default,
    show_tips_default,
    right_click_tray_default,
    code_golf_default,
    syntax_highlighting_default,
    quake_pro_default,
    video_creator_default
  ];

  // apply-replacements/errors.ts
  var ReplacementError = class extends Error {
    constructor(message) {
      super(message);
      this.message = message;
      this.name = "ReplacementError";
    }
  };

  // apply-replacements/tokenize.ts
  var import_js_tokens = __toESM(require_js_tokens());
  function errorOnLine(msg, lineIndex, line) {
    throw new ReplacementError(`${msg} (line ${lineIndex + 1}): ${line}`);
  }
  function tokenizeReplacement(replacementString, filename) {
    replacementString = replacementString.replace(/\r/g, "");
    if (!replacementString.startsWith("#"))
      throw new ReplacementError("File is missing heading (line 1)");
    const tokens = [];
    const lines = replacementString.split(/\n/g);
    let codeStartLine = null;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith("#")) {
        const depth = /^#+/.exec(line)[0].length;
        tokens.push({
          tag: "heading",
          depth,
          text: line.slice(depth).trim()
        });
      } else if (line.startsWith("*")) {
        const match2 = /^\*([^*]+)\*(.*)$/.exec(line);
        if (match2 === null)
          errorOnLine(`Line starting with '*' missing second '*'`, i, line);
        const parts = match2[2].split("=>");
        if (parts.length > 2)
          errorOnLine("Duplicate '=>'; only one is allowed", i, line);
        const args = inlineCodes(parts[0]);
        const ret = inlineCodes(parts[1] ?? "");
        if (ret.length > 1)
          errorOnLine("Duplicate return capture variable", i, line);
        tokens.push({
          tag: "emph",
          command: normalizeCommand(match2[1]),
          args,
          returns: ret[0]
        });
      } else if (line.startsWith("```")) {
        const isStart = line.startsWith("```js");
        if (isStart) {
          if (codeStartLine !== null)
            errorOnLine(
              "Unexpected code block start after start. Missing '```' or duplicated '```js'",
              i,
              line
            );
          codeStartLine = i;
        } else {
          if (codeStartLine === null)
            errorOnLine(
              "Unexpected code block end without start. Code blocks need to start with '```js'",
              i,
              line
            );
          tokens.push({
            tag: "code",
            value: patternTokens(
              lines.slice(codeStartLine + 1, i).join("\n"),
              filename
            )
          });
          codeStartLine = null;
        }
      }
    }
    return tokens;
  }
  function patternTokens(str, msg) {
    return [..._patternTokens(str, msg)];
  }
  var allowIDs = "allow-ids:";
  var keywords = ["do", "if", "for", "in", "let", "new", "null", "try", "var"];
  var defaultAllowedIDs = ["window", "DesModder", "DSM"].concat(keywords);
  function* _patternTokens(str, msg) {
    const allowedIDs = new Set(defaultAllowedIDs);
    str = safeDSM(str);
    const tokens = [..._patternTokensRaw(str)];
    for (const [i, token] of tokens.entries()) {
      const comment = commentInner(token);
      if (comment !== void 0) {
        if (comment.startsWith(allowIDs)) {
          comment.slice(allowIDs.length).split(",").forEach((s) => allowedIDs.add(s.trim()));
        }
        continue;
      }
      if (token.type === "IdentifierName" && token.value.length <= 3) {
        const dotAccessName = ["?.", "."].includes(tokens[i - 1]?.value);
        const propertyName = tokens[i + 1]?.value === ":";
        const probablyFine = dotAccessName || propertyName;
        if (!probablyFine && !allowedIDs.has(token.value)) {
          throw new Error(
            `Identifier '${token.value}' in '${msg}' may depend on specific minified naming. Prepend a '$' to indicate you want to match any identifier, or lengthen it to longer than 3 letters, or write '// ${allowIDs} ${token.value}' to indicate this is a global or local variable with a fixed name.`
          );
        }
      }
      yield token;
    }
  }
  function* _patternTokensRaw(str) {
    for (const token of (0, import_js_tokens.default)(str.trim())) {
      yield parseToken(token);
    }
  }
  function parseToken(token) {
    switch (true) {
      case token.type !== "IdentifierName":
        return token;
      case /^__\w*__$/.test(token.value):
        return { type: "PatternBalanced", value: token.value };
      case /^__\w*__\$$/.test(token.value):
        return { type: "PatternBalancedNonGreedy", value: token.value };
      case token.value.startsWith("$$"):
        return { type: "PatternIdentifierDot", value: token.value };
      case token.value.startsWith("$"):
        return { type: "PatternIdentifier", value: token.value };
      default:
        return token;
    }
  }
  function commentInner(token) {
    if (token.type === "SingleLineComment")
      return token.value.replace(/^\/+/, "").trim();
    else if (token.type === "MultiLineComment")
      return token.value.replace(/\/\*+/, "").replace(/\*\//, "").trim();
  }
  function safeDSM(str) {
    return str.replace(/(?<!\.)DSM\??\./g, "globalThis.DSM?.");
  }
  function normalizeCommand(command) {
    return command.trim().toLowerCase().replace(/\W/g, "");
  }
  function inlineCodes(str) {
    return [...str.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  }

  // apply-replacements/parse.ts
  function parseFile(fileString, filename) {
    const tokens = tokenizeReplacement(fileString, filename);
    if (tokens[0].tag !== "heading" || tokens[0].depth !== 1)
      throw new ReplacementError("First line must be a # Heading");
    if (tokens[1].tag !== "emph" || tokens[1].command !== "plugin")
      throw new ReplacementError("Second line must be *plugin* `plugin-name`");
    const plugins = tokens[1].args;
    const rules = [];
    for (let i = 2; i < tokens.length; i++) {
      const token = tokens[i];
      if (token.tag === "emph" && token.command === "description") {
        const prevToken = tokens[i - 1];
        if (prevToken.tag !== "heading")
          throw new ReplacementError(
            `*description* command must be preceded by a heading`
          );
        const nextHeadingIndex = tokens.findIndex(
          (t, j) => j > i && t.tag === "heading" && t.depth <= prevToken.depth
        );
        const blockEndIndex = nextHeadingIndex < 0 ? tokens.length : nextHeadingIndex;
        const block = tokens.slice(i + 1, blockEndIndex);
        rules.push(parseBlock(prevToken, token, block, plugins, filename));
        i = blockEndIndex;
      } else if (token.tag === "emph") {
        throw new ReplacementError(
          `Command out of place: *${token.command}*. Did you forget a *description* command?`
        );
      }
    }
    return rules;
  }
  function parseBlock(heading, start, tokens, plugins, filename) {
    if (start.args.length !== 1)
      throw new ReplacementError(
        `Command *description* must have exactly one argument`
      );
    const commands = [];
    let alternative;
    let workerOnly = false;
    for (let i = 0; i < tokens.length; ) {
      const token = tokens[i];
      if (token.tag === "heading") {
        const next = tokens[i + 1];
        if (token.text.includes("Alternative") && next.tag === "emph" && next.command === "description") {
          alternative = parseBlock(
            token,
            next,
            tokens.slice(i + 2),
            plugins,
            filename
          );
          break;
        } else
          throw new ReplacementError("Subheadings not yet implemented");
      } else if (token.tag === "emph" && token.command === "worker_only") {
        workerOnly = true;
        i++;
      } else if (token.tag === "emph" && token.command === "plugin") {
        plugins = token.args;
        i++;
      } else if (token.tag === "emph") {
        const nextToken = tokens[i + 1];
        const code = nextToken?.tag === "code" ? nextToken : void 0;
        commands.push(getCommand(token, code));
        i += code !== void 0 ? 2 : 1;
      } else {
        i++;
      }
    }
    return {
      heading: heading.text,
      filename,
      commands: commands.filter((x) => x.command !== "replace"),
      replaceCommands: commands.filter((x) => x.command === "replace"),
      plugins,
      description: start.args[0],
      workerOnly,
      alternative
    };
  }
  function getCommand(token, nextToken) {
    return {
      command: token.command,
      returns: token.returns,
      args: token.args,
      patternArg: nextToken?.value
    };
  }

  // src/plugins/append.inline.ts
  var append_inline_default = '"use strict";\n(() => {\n  // src/plugins/GLesmos/colorParsing.ts\n  function isEqual(lhs, rhs) {\n    if (lhs.length !== rhs.length)\n      return false;\n    let output = true;\n    for (let i = 0; i < lhs.length; ++i) {\n      output = output && lhs[i] === rhs[i];\n      if (!output)\n        return output;\n    }\n    return output;\n  }\n  var FALLBACK_COLOR = [0.5, 0.5, 0.5, 1];\n  function mapToColorSpace(clFrom, clTo) {\n    if (clFrom === void 0 || clTo === void 0)\n      return () => FALLBACK_COLOR;\n    if (clFrom === clTo)\n      return (args) => args;\n    let convFunc;\n    let rxAlpha;\n    switch (true) {\n      case (/rgba?/.test(clFrom) && /rgba?/.test(clTo)):\n        convFunc = (r, g, b) => [r, g, b];\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/rgba?/.test(clFrom) && /hsla?/.test(clTo)):\n        convFunc = getHSLfromRGB;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/rgba?/.test(clFrom) && /hs[vb]a?/.test(clTo)):\n        convFunc = getHSVfromRGB;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hsla?/.test(clFrom) && /hsla?/.test(clTo)):\n        convFunc = (h, s, l) => [h, s, l];\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hsla?/.test(clFrom) && /rgba?/.test(clTo)):\n        convFunc = getRGBfromHSL;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hsla?/.test(clFrom) && /hs[vb]a?/.test(clTo)):\n        convFunc = getHSVfromHSL;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hs[vb]a?/.test(clFrom) && /hs[vb]a?/.test(clTo)):\n        convFunc = (h, s, v) => [h, s, v];\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hs[vb]a?/.test(clFrom) && /rgba?/.test(clTo)):\n        convFunc = getRGBfromHSV;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      case (/hs[vb]a?/.test(clFrom) && /hsla?/.test(clTo)):\n        convFunc = getHSLfromHSV;\n        rxAlpha = /[a-z]{3}a/;\n        break;\n      default:\n        return () => FALLBACK_COLOR;\n    }\n    const aBf = (rxAlpha.test(clFrom) ? 1 : 0) | (rxAlpha.test(clTo) ? 2 : 0);\n    switch (aBf) {\n      case 0:\n        return (args) => convFunc(...args);\n      case 1:\n        return (args) => convFunc(...args);\n      case 2:\n        return (args) => convFunc(...args).concat(1);\n      case 3:\n        return (args) => {\n          const al = args.pop();\n          return convFunc(...args).concat(al);\n        };\n      default:\n        return () => FALLBACK_COLOR;\n    }\n  }\n  function getRGBfromHSL(hue, sat, light) {\n    const mod = (n, m) => n * m >= 0 ? n % m : n % m + m;\n    const lsRatio = Math.min(light, 1 - light) * sat;\n    return [0, 8, 4].map((offset) => mod(offset + hue / 30, 12)).map(\n      (kval) => light - lsRatio * Math.max(Math.min(Math.min(kval - 3, 9 - kval), 1), -1)\n    );\n  }\n  function getRGBfromHSV(hue, sat, value) {\n    const mod = (n, m) => n * m >= 0 ? n % m : n % m + m;\n    const vsRatio = value * sat;\n    return [5, 3, 1].map((offset) => mod(offset + hue / 60, 6)).map(\n      (kval) => value - vsRatio * Math.max(Math.min(Math.min(kval, 4 - kval), 1), 0)\n    );\n  }\n  function getHSVfromRGB(red, green, blue) {\n    const value = Math.max(red, green, blue);\n    const range = value - Math.min(red, green, blue);\n    const sat = value === 0 ? 0 : range / value;\n    let hue = 0;\n    if (range === 0)\n      hue = 0;\n    else if (value === red)\n      hue = 60 * (green - blue) / range;\n    else if (value === green)\n      hue = 60 * (2 + (blue - red) / range);\n    else if (value === blue)\n      hue = 60 * (4 + (red - green) / range);\n    return [hue, sat, value];\n  }\n  function getHSVfromHSL(hue, sat, light) {\n    const v = light + sat * Math.min(light, 1 - light);\n    const s = v === 0 ? 0 : 2 * (1 - light / v);\n    return [hue, s, v];\n  }\n  function getHSLfromRGB(red, green, blue) {\n    const max = Math.max(red, green, blue);\n    const range = max - Math.min(red, green, blue);\n    const li = max - range / 2;\n    const sat = li === 0 || li === 1 ? 0 : (max - li) / Math.min(li, 1 - li);\n    let hue = 0;\n    if (range === 0)\n      hue = 0;\n    else if (max === red)\n      hue = 60 * (green - blue) / range;\n    else if (max === green)\n      hue = 60 * (2 + (blue - red) / range);\n    else if (max === blue)\n      hue = 60 * (4 + (red - green) / range);\n    return [hue, sat, li];\n  }\n  function getHSLfromHSV(hue, sat, value) {\n    const li = value * (1 - sat / 2);\n    const s = li === 0 || li === 1 ? 0 : (value - li) / Math.min(li, 1 - li);\n    return [hue, s, li];\n  }\n  function parseCSSFunc(color) {\n    const matchSignature = /^([a-zA-Z]+)(\\(.+\\))$/i;\n    const matchArgs = /\\(\\s*([+-]?(?:\\d*?\\.)?\\d+%?)\\s*,\\s*([+-]?(?:\\d*?\\.)?\\d+%?)\\s*,\\s*([+-]?(?:\\d*?\\.)?\\d+%?)\\s*(?:,\\s*([+-]?(?:\\d*?\\.)?\\d+%?)\\s*)?\\)/;\n    const NUMMAP_RGB = [false, false, false];\n    const NUMMAP_HSL = [false, true, true];\n    const [, funcName = "", argSet = ""] = matchSignature.exec(color.trim()) ?? [];\n    const args0 = matchArgs.exec(argSet);\n    if (args0 === null)\n      return null;\n    const args = args0.slice(1);\n    const alphaStr = args.pop();\n    const alpha = parseFloat(alphaStr ?? "");\n    const pType = args.map((t) => isNaN(Number(t)));\n    let components;\n    switch (true) {\n      case funcName === "rgb":\n      case funcName === "rgba":\n        if (!isEqual(pType, NUMMAP_RGB))\n          return null;\n        components = args.map((num) => parseFloat(num) / 255);\n        break;\n      case funcName === "hsl":\n      case funcName === "hsla":\n        if (!isEqual(pType, NUMMAP_HSL))\n          return null;\n        components = args.map(\n          (num, i) => parseFloat(num) * (pType[i] ? 0.01 : 1)\n        );\n        break;\n      default:\n        return null;\n    }\n    if (alphaStr !== void 0) {\n      if (funcName.length === 3)\n        return null;\n      components.push(alpha * (isNaN(alpha) ? 0.01 : 1));\n    }\n    return { type: funcName, values: components };\n  }\n  function parseCSSHex(color) {\n    const rxHex = /^#((?:[0-9a-z]){3,8})$/i;\n    const hexMatch = rxHex.exec(color);\n    if (hexMatch === null)\n      return null;\n    const hex = hexMatch[1];\n    let output;\n    switch (hex.length) {\n      case 3:\n        output = /(.)(.)(.)/.exec(hex)?.splice(1) ?? [];\n        output = output.map((elem) => elem + elem);\n        break;\n      case 6:\n        output = /(..)(..)(..)/.exec(hex)?.splice(1) ?? [];\n        break;\n      case 4:\n        output = /(.)(.)(.)(.)/.exec(hex)?.splice(1) ?? [];\n        output = output.map((elem) => elem + elem);\n        break;\n      case 8:\n        output = /(..)(..)(..)(..)/.exec(hex)?.splice(1) ?? [];\n        break;\n      default:\n        return null;\n    }\n    output = output.map((item) => Number(`0x${item}`) / 255);\n    return output;\n  }\n  function parseNamedColor(color) {\n    const NAME_TABLE = {\n      black: "#000000",\n      navy: "#000080",\n      darkblue: "#00008b",\n      mediumblue: "#0000cd",\n      blue: "#0000ff",\n      darkgreen: "#006400",\n      green: "#008000",\n      teal: "#008080",\n      darkcyan: "#008b8b",\n      deepskyblue: "#00bfff",\n      darkturquoise: "#00ced1",\n      mediumspringgreen: "#00fa9a",\n      lime: "#00ff00",\n      springgreen: "#00ff7f",\n      aqua: "#00ffff",\n      cyan: "#00ffff",\n      midnightblue: "#191970",\n      dodgerblue: "#1e90ff",\n      lightseagreen: "#20b2aa",\n      forestgreen: "#228b22",\n      seagreen: "#2e8b57",\n      darkslategray: "#2f4f4f",\n      darkslategrey: "#2f4f4f",\n      limegreen: "#32cd32",\n      mediumseagreen: "#3cb371",\n      turquoise: "#40e0d0",\n      royalblue: "#4169e1",\n      steelblue: "#4682b4",\n      darkslateblue: "#483d8b",\n      mediumturquoise: "#48d1cc",\n      indigo: "#4b0082",\n      darkolivegreen: "#556b2f",\n      cadetblue: "#5f9ea0",\n      cornflowerblue: "#6495ed",\n      rebeccapurple: "#663399",\n      mediumaquamarine: "#66cdaa",\n      dimgray: "#696969",\n      dimgrey: "#696969",\n      slateblue: "#6a5acd",\n      olivedrab: "#6b8e23",\n      slategray: "#708090",\n      slategrey: "#708090",\n      lightslategray: "#778899",\n      lightslategrey: "#778899",\n      mediumslateblue: "#7b68ee",\n      lawngreen: "#7cfc00",\n      chartreuse: "#7fff00",\n      aquamarine: "#7fffd4",\n      maroon: "#800000",\n      purple: "#800080",\n      olive: "#808000",\n      gray: "#808080",\n      grey: "#808080",\n      skyblue: "#87ceeb",\n      lightskyblue: "#87cefa",\n      blueviolet: "#8a2be2",\n      darkred: "#8b0000",\n      darkmagenta: "#8b008b",\n      saddlebrown: "#8b4513",\n      darkseagreen: "#8fbc8f",\n      lightgreen: "#90ee90",\n      mediumpurple: "#9370db",\n      darkviolet: "#9400d3",\n      palegreen: "#98fb98",\n      darkorchid: "#9932cc",\n      yellowgreen: "#9acd32",\n      sienna: "#a0522d",\n      brown: "#a52a2a",\n      darkgray: "#a9a9a9",\n      darkgrey: "#a9a9a9",\n      lightblue: "#add8e6",\n      greenyellow: "#adff2f",\n      paleturquoise: "#afeeee",\n      lightsteelblue: "#b0c4de",\n      powderblue: "#b0e0e6",\n      firebrick: "#b22222",\n      darkgoldenrod: "#b8860b",\n      mediumorchid: "#ba55d3",\n      rosybrown: "#bc8f8f",\n      darkkhaki: "#bdb76b",\n      silver: "#c0c0c0",\n      mediumvioletred: "#c71585",\n      indianred: "#cd5c5c",\n      peru: "#cd853f",\n      chocolate: "#d2691e",\n      tan: "#d2b48c",\n      lightgray: "#d3d3d3",\n      lightgrey: "#d3d3d3",\n      thistle: "#d8bfd8",\n      orchid: "#da70d6",\n      goldenrod: "#daa520",\n      palevioletred: "#db7093",\n      crimson: "#dc143c",\n      gainsboro: "#dcdcdc",\n      plum: "#dda0dd",\n      burlywood: "#deb887",\n      lightcyan: "#e0ffff",\n      lavender: "#e6e6fa",\n      darksalmon: "#e9967a",\n      violet: "#ee82ee",\n      palegoldenrod: "#eee8aa",\n      lightcoral: "#f08080",\n      khaki: "#f0e68c",\n      aliceblue: "#f0f8ff",\n      honeydew: "#f0fff0",\n      azure: "#f0ffff",\n      sandybrown: "#f4a460",\n      wheat: "#f5deb3",\n      beige: "#f5f5dc",\n      whitesmoke: "#f5f5f5",\n      mintcream: "#f5fffa",\n      ghostwhite: "#f8f8ff",\n      salmon: "#fa8072",\n      antiquewhite: "#faebd7",\n      linen: "#faf0e6",\n      lightgoldenrodyellow: "#fafad2",\n      oldlace: "#fdf5e6",\n      red: "#ff0000",\n      fuchsia: "#ff00ff",\n      magenta: "#ff00ff",\n      deeppink: "#ff1493",\n      orangered: "#ff4500",\n      tomato: "#ff6347",\n      hotpink: "#ff69b4",\n      coral: "#ff7f50",\n      darkorange: "#ff8c00",\n      lightsalmon: "#ffa07a",\n      orange: "#ffa500",\n      lightpink: "#ffb6c1",\n      pink: "#ffc0cb",\n      gold: "#ffd700",\n      peachpuff: "#ffdab9",\n      navajowhite: "#ffdead",\n      moccasin: "#ffe4b5",\n      bisque: "#ffe4c4",\n      mistyrose: "#ffe4e1",\n      blanchedalmond: "#ffebcd",\n      papayawhip: "#ffefd5",\n      lavenderblush: "#fff0f5",\n      seashell: "#fff5ee",\n      cornsilk: "#fff8dc",\n      lemonchiffon: "#fffacd",\n      floralwhite: "#fffaf0",\n      snow: "#fffafa",\n      yellow: "#ffff00",\n      lightyellow: "#ffffe0",\n      ivory: "#fffff0",\n      white: "#ffffff"\n    };\n    return NAME_TABLE[color.toLowerCase()] ?? null;\n  }\n  function getRGBpack(cssColor) {\n    const color = parseCSSHex(\n      parseNamedColor(cssColor) ?? cssColor\n    );\n    if (color) {\n      return color;\n    } else {\n      const funcPar = parseCSSFunc(cssColor);\n      if (funcPar?.values === void 0)\n        return FALLBACK_COLOR;\n      const colorPack = mapToColorSpace(\n        funcPar?.type,\n        "rgba"\n      )(funcPar.values);\n      return colorPack ?? FALLBACK_COLOR;\n    }\n  }\n\n  // src/plugins/GLesmos/outputHelpers.ts\n  function glslFloatify(x) {\n    return Number.isInteger(x) ? (\n      // BigInt prevents scientific notation\n      BigInt(x).toString() + ".0"\n    ) : (\n      // scientific notation is ok here. We aren\'t appending ".0"\n      // NaN gives "NaN", defined via uniform\n      // Infinity gives "Infinity", defined via uniform\n      // -Infinity gives "-Infinity"\n      x.toString()\n    );\n  }\n  function colorVec4(color, opacity) {\n    let r, g, b;\n    if (color.startsWith("#") && color.length === 7) {\n      r = glslFloatify(parseInt(color.slice(1, 3), 16) / 255);\n      g = glslFloatify(parseInt(color.slice(3, 5), 16) / 255);\n      b = glslFloatify(parseInt(color.slice(5, 7), 16) / 255);\n    } else {\n      [r, g, b] = getRGBpack(color).map(glslFloatify);\n    }\n    const a = glslFloatify(opacity);\n    return `vec4(${r}, ${g}, ${b}, ${a})`;\n  }\n\n  // src/plugins/GLesmos/exportAsGLesmos.ts\n  function clampParam(input, min, max, def) {\n    if (isNaN(input))\n      return def;\n    return Math.min(Math.max(input, min), max);\n  }\n  var MAX_RESTRICTION_UNIFORMS = 900;\n  function compileGLesmos(concreteTree, color, fillOpacity, lineOpacity, lineWidth, derivativeX, derivativeY, emitGLSL) {\n    fillOpacity = clampParam(fillOpacity, 0, 1, 0.4);\n    lineOpacity = clampParam(lineOpacity, 0, 1, 0.9);\n    lineWidth = clampParam(lineWidth, 0, Infinity, 2.5);\n    let { source, shaderFunctions, shaderUniforms } = emitGLSL(\n      concreteTree._chunk,\n      MAX_RESTRICTION_UNIFORMS\n    );\n    const shaderFunctionsList = [shaderFunctions];\n    let dxsource = "return 0.0;";\n    let dysource = "return 0.0;";\n    let hasOutlines = false;\n    if (lineWidth > 0 && lineOpacity > 0 && derivativeX && derivativeY) {\n      ({ source: dxsource, shaderFunctions } = emitGLSL(derivativeX._chunk, 0));\n      shaderFunctionsList.push(shaderFunctions);\n      ({ source: dysource, shaderFunctions } = emitGLSL(derivativeY._chunk, 0));\n      shaderFunctionsList.push(shaderFunctions);\n      hasOutlines = true;\n    }\n    return {\n      hasOutlines,\n      shaderFunctionsList,\n      chunk: {\n        main: source,\n        DCG_SC_uniforms: shaderUniforms,\n        dx: dxsource,\n        dy: dysource,\n        fill: fillOpacity > 0,\n        color: colorVec4(color, fillOpacity),\n        line_color: colorVec4(color, lineOpacity),\n        line_width: lineWidth\n      }\n    };\n  }\n\n  // src/plugins/append.inline.ts\n  self.dsm_compileGLesmos = compileGLesmos;\n  var append_inline_default = "";\n})();\n';

  // src/preload/moduleReplacements.ts
  var replacements = [];
  for (const replacement of index_replacements_default) {
    replacements.push(...parseFile(replacement.file, replacement.filename));
  }
  var pluginNames = [
    "builtin-settings",
    "set-primary-color",
    "wolfram2desmos",
    "pin-expressions",
    "video-creator",
    "wakatime",
    "find-and-replace",
    "show-tips",
    "right-click-tray",
    "duplicate-expression-hotkey",
    "GLesmos",
    "hide-errors",
    "folder-tools",
    "text-mode",
    "performance-info",
    "better-evaluation-view",
    "manage-metadata",
    "pillbox-menus",
    "code-golf",
    "syntax-highlighting",
    "better-navigation",
    "multiline",
    "intellisense",
    "override-keystroke",
    "quake-pro"
  ];
  replacements.forEach((r) => {
    r.plugins.forEach((plugin) => {
      if (!pluginNames.includes(plugin))
        throw new Error(
          `Plugin ${plugin} specified in replacement ${r.filename} not found: at risk of instability on panic.`
        );
    });
  });

  // src/preload/replaceElement.ts
  function insertElement(creator) {
    const { DCGView } = Desmos.Private.Fragile;
    return DCGView.createElement(DCGView.Components.If, {
      predicate: () => !!creator(),
      children: () => creator()()
    });
  }
  function replaceElement(old, replacer, key = () => !!replacer()) {
    const { DCGView } = Desmos.Private.Fragile;
    return DCGView.createElement(DCGView.Components.Switch, {
      key,
      children: () => (replacer() ?? ((x) => x))(old())
    });
  }

  // apply-replacements/applyReplacement.ts
  var import_js_tokens2 = __toESM(require_js_tokens());
  function fullReplacement(calcDesktop, enabledReplacements) {
    const tokens = Array.from((0, import_js_tokens2.default)(calcDesktop));
    const sharedModuleTokens = tokens.filter(
      (x) => x.type === "StringLiteral" && x.value.length > 2e5 && // JS is sure to have &&. Protects against translations getting longer
      // than the length cutoff, which is intentionally low in case of huge
      // improvements in minification.
      x.value.includes("&&")
    );
    let workerResult;
    const otherErrors = [];
    if (sharedModuleTokens.length !== 1) {
      otherErrors.push(
        "More than one large JS string found, which is the shared module?"
      );
      workerResult = {
        successful: /* @__PURE__ */ new Set(),
        failed: new Map(
          enabledReplacements.map(
            (b) => [b, `Not reached: ${b.heading}. Maybe no worker builder?`]
          )
        ),
        value: calcDesktop
      };
    } else {
      const [sharedModuleToken] = sharedModuleTokens;
      workerResult = applyReplacements(
        enabledReplacements.filter((x) => x.workerOnly),
        // JSON.parse doesn't work because this is a single-quoted string.
        // js-tokens tokenized this as a string anyway, so it should be
        // safely eval'able to a string.
        // eslint-disable-next-line no-eval
        (0, eval)(sharedModuleToken.value)
      );
      sharedModuleToken.value = JSON.stringify(workerResult.value);
    }
    const wbTokenHead = tokens.find(
      (x) => x.type === "NoSubstitutionTemplate" && x.value.includes("const __dcg_worker_module__ =")
    );
    const wbTokenTail = tokens.find(
      (x) => x.type === "TemplateTail" && x.value.includes(
        "__dcg_worker_module__(__dcg_worker_shared_module_exports__);"
      )
    );
    if (wbTokenTail === void 0 || wbTokenHead === void 0) {
      otherErrors.push("Failed to find valid worker builder.");
    } else {
      wbTokenHead.value = // eslint-disable-next-line no-template-curly-in-string
      "`function loadDesModderWorker(){${window.dsm_workerAppend}}" + wbTokenHead.value.slice(1);
      wbTokenTail.value = wbTokenTail.value.slice(0, -1) + "\n loadDesModderWorker();`";
    }
    const srcWithWorkerAppend = tokens.map((x) => x.value).join("");
    const mainResult = applyReplacements(
      enabledReplacements.filter((x) => !x.workerOnly),
      srcWithWorkerAppend
    );
    const blockFailures = [...workerResult.failed].concat([...mainResult.failed]);
    return {
      newCode: mainResult.value,
      blockFailures,
      otherErrors
    };
  }
  function applyReplacements(repls, file) {
    const replaced = applyStringReplacements(repls, Array.from((0, import_js_tokens2.default)(file)));
    return { ...replaced, value: replaced.value.map((t) => t.value).join("") };
  }
  function symbolName(str) {
    return str.trim().replace(/[_$]/g, "");
  }
  var SymbolTable = class {
    constructor(str) {
      this.str = str;
      this.map = /* @__PURE__ */ new Map();
    }
    has(key) {
      return this.map.has(symbolName(key));
    }
    uncheckedSet(key, value) {
      key = symbolName(key);
      if (key === "")
        return;
      return this.map.set(key, value);
    }
    get(key) {
      return this.map.get(symbolName(key));
    }
    /** set but checking for duplicate bindings */
    set(key, value) {
      if (this.has(key))
        throw new ReplacementError(`Duplicate binding: ${key}`);
      this.uncheckedSet(key, value);
      return this;
    }
    /** Mutate this in place by prefixing all names */
    prefix(p) {
      const entries = [...this.map.entries()];
      this.map.clear();
      for (const [k, v] of entries) {
        this.map.set(p + k, v);
      }
      return this;
    }
    /** Mutate this in place by grabbing all of other's entries */
    merge(other) {
      for (const [key, value] of other.map.entries())
        this.set(key, value);
    }
    /** get but throws an error if not found */
    getRequired(key) {
      const got = this.get(key);
      if (got === void 0)
        throw new ReplacementError(`Binding not found: ${key}`);
      return got;
    }
    /** get but give the underlying token array */
    getSlice(key) {
      const range = this.getRequired(key);
      return this.str.slice(range.start, range.start + range.length);
    }
  };
  function getSymbols(commands, str) {
    const table = new SymbolTable(str);
    for (const command of commands) {
      switch (command.command) {
        case "find": {
          if (command.args.length > 1)
            throw new ReplacementError(
              `*find* command must have either 0 or 1 arguments. You passed ${command.args.length}`
            );
          if (command.patternArg === void 0)
            throw new ReplacementError(
              `*find* command missing a pattern argument.`
            );
          const inside = command.args[0] ? table.getRequired(command.args[0]) : { start: 0, length: table.str.length };
          const found = findPattern(command.patternArg, table.str, inside, {
            allowDuplicates: false,
            table
          });
          table.merge(found.newBindings);
          if (command.returns)
            table.set(command.returns, {
              start: found.startIndex,
              length: found.length
            });
          break;
        }
        case "find_surrounding_template": {
          if (command.args.length > 1)
            throw new ReplacementError(
              `*find_surrounding_template* command must exactly 1 argument. You passed ${command.args.length}`
            );
          if (command.patternArg !== void 0)
            throw new ReplacementError(
              `*find_surrounding_template* should not have a pattern argument.`
            );
          if (command.returns === void 0)
            throw new ReplacementError(
              `*find_surrounding_template* must have return value specified`
            );
          const around = table.getRequired(command.args[0]);
          const ts = findTemplateStartBefore(table, around.start);
          const found = findPattern(
            patternTokens("template() {__return__}", ""),
            table.str,
            { start: ts, length: table.str.length - ts - 1 },
            { allowDuplicates: true, table: new SymbolTable(str) }
          );
          table.set(command.returns, {
            start: found.startIndex,
            length: found.length
          });
          break;
        }
        case "replace":
          throw new ReplacementError(
            "Programming Error: *replace* where it shouldn't be"
          );
      }
    }
    return table;
  }
  function applyStringReplacements(repls, str) {
    const idTable = /* @__PURE__ */ new Map();
    function getPrefix(r) {
      if (!idTable.has(r))
        idTable.set(r, r.heading + "_" + Math.random().toString() + "_");
      return idTable.get(r);
    }
    const blockSucceededSymbols = /* @__PURE__ */ new Set();
    const blockFailedSymbols = /* @__PURE__ */ new Map();
    const failBlock = (b, e) => {
      const msg = e instanceof Error ? e.message : JSON.stringify(e);
      blockFailedSymbols.set(b, msg);
    };
    const table = new SymbolTable(str);
    function applySymbolsForTable(r) {
      try {
        const prefix = getPrefix(r);
        table.merge(getSymbols(r.commands, str).prefix(prefix));
        blockSucceededSymbols.add(r);
      } catch (e) {
        if (r.alternative !== void 0)
          applySymbolsForTable(r.alternative);
        else
          failBlock(r, e);
      }
    }
    for (const r of repls) {
      applySymbolsForTable(r);
    }
    function getReplacement(r) {
      if (!blockSucceededSymbols.has(r)) {
        if (r.alternative)
          return getReplacement(r.alternative);
        else
          return [];
      }
      try {
        return blockReplacements(r, getPrefix, table);
      } catch (e) {
        if (r.alternative !== void 0)
          return getReplacement(r.alternative);
        else
          failBlock(r, e);
        return [];
      }
    }
    const finalRepls = repls.flatMap(getReplacement);
    return {
      successful: blockSucceededSymbols,
      failed: blockFailedSymbols,
      value: Array.from(withReplacements(table.str, finalRepls))
    };
  }
  function isVariablePattern(token) {
    return token.type === "PatternBalanced" || token.type === "PatternBalancedNonGreedy" || token.type === "PatternIdentifier" || token.type === "PatternIdentifierDot";
  }
  function isLongPattern(token) {
    return token.type === "PatternBalanced" || token.type === "PatternBalancedNonGreedy";
  }
  function blockReplacements(r, getPrefix, table) {
    const prefix = getPrefix(r);
    return r.replaceCommands.map((command) => {
      if (command.command !== "replace")
        throw new ReplacementError(
          "Programming error: replaceCommand is not *replace*"
        );
      if (command.args.length !== 1)
        throw new ReplacementError(
          `*replace* command must have exactly 1 argument. You passed ${command.args.length}`
        );
      if (command.patternArg === void 0)
        throw new ReplacementError(
          `*replace* command missing a pattern argument.`
        );
      const skipFirst = isVariablePattern(command.patternArg[0]) && symbolName(command.patternArg[0].value) === symbolName(command.args[0]);
      const from = table.getRequired(prefix + command.args[0]);
      const res = {
        heading: r.heading,
        from: skipFirst ? { start: from.start + from.length, length: 0 } : from,
        to: command.patternArg.slice(skipFirst ? 1 : 0).flatMap((token) => {
          if (isVariablePattern(token)) {
            return table.getSlice(prefix + token.value);
          } else
            return token;
        })
      };
      return res;
    });
  }
  function* withReplacements(tokens, repls) {
    repls.sort((a, b) => a.from.start - b.from.start);
    repls.forEach((e, i) => {
      if (i > 0 && e.from.start + e.from.length <= repls[i - 1].from.start)
        throw new Error(
          `Overlapping replacements: "${repls[i - 1].heading}" and "${e.heading}"`
        );
    });
    let start = 0;
    for (const { from, to } of repls) {
      yield* tokens.slice(start, from.start);
      yield* to;
      start = from.start + from.length;
    }
    yield* tokens.slice(start);
  }
  function findTemplateStartBefore(table, before) {
    for (let i = before; i > 0; i--) {
      if (tokensEqual(table.str[i], {
        type: "IdentifierName",
        value: "template"
      }))
        return i - 1;
    }
    throw new ReplacementError(`Template not found before index ${before}`);
  }
  function findPattern(pattern, str, inside, { allowDuplicates, table }) {
    const fullPattern = pattern;
    pattern = pattern.filter((token) => !isIgnoredWhitespace(token));
    const fixedToken = pattern.find(
      (x) => !x.type.startsWith("Pattern")
    );
    if (fixedToken === void 0)
      throw new Error("Pattern Error: No fixed token found");
    const fixedTokenIdx = pattern.indexOf(fixedToken);
    if (pattern.slice(0, fixedTokenIdx).some(isLongPattern))
      throw new Error("First fixed token is after a variable-width span.");
    let found = null;
    const end = inside.start + inside.length - pattern.length;
    for (let i = inside.start; i < end; ) {
      if (!tokensEqual(str[i + fixedTokenIdx], fixedToken)) {
        i++;
        continue;
      }
      const match2 = patternMatch(pattern, str, i, inside, table, false) !== null ? patternMatch(pattern, str, i, inside, table, true) : null;
      if (match2 !== null) {
        if (allowDuplicates)
          return match2;
        if (found !== null)
          throw new ReplacementError(
            `Duplicate pattern match.
Pattern: ${fullPattern.map((v) => v.value).join("")} 

New match at ${match2.startIndex} with length ${match2.length}: 
` + str.slice(match2.startIndex, match2.startIndex + match2.length).map((v) => v.value).join("") + `

Old match at ${found.startIndex} with length ${found.length}: 
` + str.slice(found.startIndex, found.startIndex + found.length).map((v) => v.value).join("")
          );
        found = match2;
        i += match2.length;
      } else {
        i++;
      }
    }
    if (found === null) {
      const s = inside.start;
      const len = inside.length;
      const msg = `Pattern not found: ${fullPattern.map((v) => v.value).join("")} in {start: ${s}, length: ${len}}
` + str.slice(s, s + 20).concat({ value: " \u2026 " }).concat(str.slice(s + len - 20, s + len)).filter((v) => v.type !== "MultiLineComment").map((v) => v.value.length < 100 ? v.value : "[long token]").join("").replace(/\n{2,}/g, "\n");
      throw new Error(msg);
    }
    return found;
  }
  var DOT = { type: "Punctuator", value: "." };
  var PatternQueue = class {
    constructor(pattern) {
      /** patternIndex points to the next entry yielded. */
      this.patternIndex = 0;
      /** We pop from the end of the stack and should never add to it when nonempty. */
      this.bonusStack = [];
      this.pattern = pattern;
    }
    next() {
      if (this.bonusStack.length)
        return this.bonusStack.pop();
      const ret = this.pattern[this.patternIndex];
      this.patternIndex++;
      return ret;
    }
    peek() {
      if (this.bonusStack.length)
        return this.bonusStack.at(-1);
      const ret = this.pattern[this.patternIndex];
      return ret;
    }
    queueTokens(tokens) {
      if (this.bonusStack.length) {
        throw new Error("Cannot queue more tokens when some are already queued.");
      }
      this.bonusStack = [...tokens].reverse();
    }
    isAtStart() {
      return this.patternIndex === 0;
    }
  };
  var closeBraces = /* @__PURE__ */ new Set([")", "]", "}"]);
  var openBraces = /* @__PURE__ */ new Set(["(", "[", "{"]);
  function patternMatch(pattern, str, startIndex, inside, outerTable, doTable) {
    let table = null;
    if (doTable)
      table = new SymbolTable(str);
    let strIndex = startIndex;
    const patternQueue = new PatternQueue(pattern);
    let expectedToken = patternQueue.next();
    while (expectedToken !== void 0) {
      if ((expectedToken.type === "PatternIdentifier" || expectedToken.type === "PatternIdentifierDot") && outerTable.has(expectedToken.value)) {
        const currValue = outerTable.getSlice(expectedToken.value);
        patternQueue.queueTokens(currValue);
        expectedToken = patternQueue.next();
        continue;
      }
      if (doTable && (expectedToken.type === "PatternIdentifierDot" || expectedToken.type === "PatternIdentifier") && table.has(expectedToken.value)) {
        const currValue = table.getSlice(expectedToken.value);
        patternQueue.queueTokens(currValue);
        expectedToken = patternQueue.next();
        continue;
      }
      const foundToken = str[strIndex];
      if (foundToken === void 0)
        return null;
      if (isIgnoredWhitespace(foundToken) && !patternQueue.isAtStart()) {
        strIndex++;
        continue;
      }
      if (expectedToken.type === "PatternBalanced") {
        let depth = 1;
        let currIndex = strIndex - 1;
        while (depth > 0) {
          currIndex++;
          const curr = str[currIndex].value;
          if (closeBraces.has(curr))
            depth--;
          else if (openBraces.has(curr))
            depth++;
        }
        if (doTable)
          table.set(expectedToken.value, {
            start: strIndex,
            length: currIndex - strIndex
          });
        strIndex = currIndex - 1;
      } else if (expectedToken.type === "PatternBalancedNonGreedy") {
        let depth = 1;
        let currIndex = strIndex - 1;
        const nextPattern = patternQueue.peek();
        if (!nextPattern) {
          throw new Error(
            `Non-greedy pattern ${expectedToken.value} cannot be the final pattern token.`
          );
        }
        if (isVariablePattern(nextPattern)) {
          throw new Error(
            `Variable pattern token '${nextPattern.value}' cannot follow non-greedy pattern token ${expectedToken.value}.`
          );
        }
        while (depth > 0) {
          currIndex++;
          const curr = str[currIndex].value;
          if (closeBraces.has(curr))
            depth--;
          else if (openBraces.has(curr))
            depth++;
          if (depth === 1 && tokensEqual(nextPattern, str[currIndex])) {
            break;
          }
        }
        if (doTable)
          table.set(expectedToken.value, {
            start: strIndex,
            length: currIndex - strIndex
          });
        strIndex = currIndex - 1;
      } else if (expectedToken.type === "PatternIdentifier") {
        if (foundToken.type !== "IdentifierName")
          return null;
        if (doTable)
          table.set(expectedToken.value, { start: strIndex, length: 1 });
      } else if (expectedToken.type === "PatternIdentifierDot") {
        if (foundToken.type !== "IdentifierName")
          return null;
        const startStrIndex = strIndex;
        while (str[strIndex + 1] && tokensEqual(str[strIndex + 1], DOT) && str[strIndex + 2]) {
          strIndex += 2;
          if (foundToken.type !== "IdentifierName")
            return null;
        }
        if (doTable)
          table.set(expectedToken.value, {
            start: startStrIndex,
            length: strIndex - startStrIndex + 1
          });
      } else if (!tokensEqual(expectedToken, foundToken)) {
        return null;
      }
      expectedToken = patternQueue.next();
      strIndex++;
      if (strIndex > inside.start + inside.length)
        return null;
    }
    if (doTable)
      return {
        newBindings: table,
        startIndex,
        length: strIndex - startIndex
      };
    else
      return true;
  }
  function tokensEqual(a, b) {
    if (a.type !== b.type)
      return false;
    else if (a.type === "StringLiteral") {
      return a.value.replace(/"/g, "'") === b.value.replace(/"/g, "'");
    } else {
      return a.value === b.value;
    }
  }
  function isIgnoredWhitespace(token) {
    return token.type === "WhiteSpace" || token.type === "LineTerminatorSequence";
  }

  // node_modules/idb/build/index.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(this.request);
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));
  var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
  var methodMap = {};
  var advanceResults = /* @__PURE__ */ new WeakMap();
  var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
  var cursorIteratorTraps = {
    get(target, prop) {
      if (!advanceMethodProps.includes(prop))
        return target[prop];
      let cachedFunc = methodMap[prop];
      if (!cachedFunc) {
        cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
      }
      return cachedFunc;
    }
  };
  async function* iterate(...args) {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  }
  function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
      if (isIteratorProp(target, prop))
        return iterate;
      return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
      return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    }
  }));

  // src/preload/cacheReplacement.ts
  var CACHE_STORE = "replacement_store";
  var CACHE_KEY = "replacement_cached";
  async function deleteOldDB() {
    try {
      await deleteDB("keyval-store");
    } catch {
    }
  }
  async function fullReplacementCached(calcDesktop, enabledReplacements, replOpts) {
    void deleteOldDB();
    const db = await openDB("cached-replacement-store", 1, {
      upgrade(db2) {
        db2.createObjectStore(CACHE_STORE);
      }
    });
    const cached = await getCache(db);
    const hashRepls = cyrb53(JSON.stringify(enabledReplacements));
    const hashFile = cyrb53(calcDesktop);
    const hashAppend = cyrb53(replOpts.workerAppend);
    if (cached !== void 0 && cached.hashRepls === hashRepls && cached.hashFile === hashFile && cached.hashAppend === hashAppend) {
      return cached.result;
    }
    let good = true;
    const result = fullReplacement(calcDesktop, enabledReplacements);
    for (const e of result.otherErrors) {
      good = false;
      Console.warn(e);
    }
    for (const [b, e] of result.blockFailures) {
      good = false;
      Console.warn(e);
      replOpts.addPanic(b);
      window.DSM_panics ??= [];
      window.DSM_panics.push(e);
    }
    if (good)
      void setCache(db, {
        hashRepls,
        hashFile,
        hashAppend,
        result: result.newCode
      });
    return result.newCode;
  }
  async function getCache(db) {
    try {
      return await db.get(CACHE_STORE, CACHE_KEY);
    } catch {
      return void 0;
    }
  }
  async function setCache(db, obj) {
    try {
      await db.put(CACHE_STORE, obj, CACHE_KEY);
    } catch {
      Console.warn(
        "Failed to cache replacement. This is expected in a Private Window but could indicate a problem in a regular window"
      );
    }
  }
  function cyrb53(str, seed = 0) {
    let h1 = 3735928559 ^ seed;
    let h2 = 1103547991 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  // src/plugins/GLesmos/shaders.ts
  function glesmosError(msg) {
    Console.error(`[GLesmos Error] ${msg}`);
    throw Error(`[GLesmos Error] ${msg}`);
  }
  function setUniform(gl, program, uniformName, uniformType, uniformValue) {
    const uniformSetterKey = "uniform" + uniformType;
    gl[uniformSetterKey](
      gl.getUniformLocation(program.glProgram, uniformName),
      uniformValue
    );
  }
  function compileShader(gl, shaderCode, type) {
    const shader = gl.createShader(type);
    if (shader === null) {
      glesmosError("Invalid shader type");
    }
    gl.shaderSource(shader, shaderCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const shaderInfoLog = gl.getShaderInfoLog(shader);
      glesmosError(
        `While compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader:
      ${shaderInfoLog ?? ""}`
      );
    }
    return shader;
  }
  function buildShaderProgram(gl, vert, frag) {
    const shaderProgram = gl.createProgram();
    if (shaderProgram === null) {
      glesmosError("Unable to create shader program!");
    }
    const vertexShader = compileShader(gl, vert, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, frag, gl.FRAGMENT_SHADER);
    if (vertexShader && fragmentShader) {
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      return shaderProgram;
    } else {
      glesmosError("One or more shaders did not compile.");
    }
  }
  var shaderCache = /* @__PURE__ */ new Map();
  function getShaderProgram(gl, vertexSource, fragment) {
    const key = vertexSource + fragment.source;
    const cachedShader = shaderCache.get(key);
    if (cachedShader) {
      return populateProgram(cachedShader, fragment);
    }
    const glProgram = buildShaderProgram(gl, vertexSource, fragment.source);
    const shaderProgram = {
      glProgram,
      vertexAttribPos: gl.getAttribLocation(glProgram, "vertexPosition"),
      corner: gl.getUniformLocation(glProgram, "graphCorner"),
      size: gl.getUniformLocation(glProgram, "graphSize"),
      dsm_Infinity: gl.getUniformLocation(glProgram, "dsm_Infinity"),
      Infinity: gl.getUniformLocation(glProgram, "Infinity"),
      NaN: gl.getUniformLocation(glProgram, "NaN"),
      DCG_SC_uniforms: fragment.DCG_SC_uniforms.map(
        (_, i) => gl.getUniformLocation(glProgram, `_DCG_SC_${i}`)
      )
    };
    shaderCache.set(key, shaderProgram);
    if (shaderCache.size > 100) {
      const [key2] = Array.from(shaderCache.keys());
      shaderCache.delete(key2);
    }
    return populateProgram(shaderProgram, fragment);
  }
  function populateProgram(cached, fragment) {
    return {
      ...cached,
      DCG_SC_uniformValues: fragment.DCG_SC_uniforms
    };
  }
  var VERTEX_SHADER = `#version 300 es
in highp vec2 vertexPosition;
out vec2 texCoord;

void main() {
  texCoord    = vertexPosition * 0.5 + 0.5;
  gl_Position = vec4(vertexPosition, 0.0, 1.0);
}
`;
  function environment(chunk) {
    let scUniforms = "";
    for (let i = 0; i < chunk.DCG_SC_uniforms.length; i++) {
      scUniforms += `uniform float _DCG_SC_${i};`;
    }
    return `#version 300 es
precision highp float;
in  vec2 texCoord;
out vec4 outColor;

uniform vec2  graphCorner;
uniform vec2  graphSize;
uniform float dsm_Infinity;
${scUniforms}
${Fragile.glslHeader}
${GLESMOS_SHARED}

vec2 toMathCoord(in vec2 fragCoord){
  return fragCoord * graphSize + graphCorner;
}

vec4 mixColor(vec4 from, vec4 top) {
  float a = 1.0 - (1.0 - from.a) * (1.0 - top.a);
  return vec4((from.rgb * from.a * (1.0 - top.a) + top.rgb * top.a) / a, a);
}
`;
  }
  var GLESMOS_SHARED = `
  vec4 getPixel( in vec2 coord, in sampler2D channel ){
    return texture( channel, coord );
  }

  float line_segment(in vec2 p, in vec2 a, in vec2 b) {
    vec2 ba = b - a;
    vec2 pa = p - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
    return length(pa - h * ba);
  }

  float LineSDF(in vec4 line, in vec2 p){
    return line_segment(p, vec2(line[0], line[1]), vec2(line[2], line[3]) );
  }
`;
  function glesmosGetCacheShader(gl, chunk, deps) {
    const source = `${environment(chunk)}
    // dependencies
    ${deps}

    // main implicit
    float f_xy(float x, float y){
      ${chunk.main}
    }

    void main(){
      vec2 mathCoord = texCoord * graphSize + graphCorner;
      float v = f_xy( mathCoord.x, mathCoord.y );
      outColor = vec4(v, 0, 0, 1);
    }
  `;
    const shader = getShaderProgram(gl, VERTEX_SHADER, {
      source,
      DCG_SC_uniforms: chunk.DCG_SC_uniforms
    });
    return shader;
  }
  function glesmosGetSDFShader(gl, chunk, deps) {
    const source = `${environment(chunk)}
    uniform sampler2D iChannel0; // storage
    uniform sampler2D iChannel1; // cache
    uniform int       iInitFlag; // are we initializing?
    uniform vec2      iResolution; // canvas size

    uniform float     c_maxSteps;
    uniform float     c_stepNum;

    //============== BEGIN GLesmos Imports ==============//

    // dependencies
    ${deps}

    // main implicit
    float f_xy(float x, float y){
      ${chunk.main}
    }
    float f_xy_p(in vec2 p){
      return f_xy(p.x, p.y);
    }

    // derivative stuff
    float f_dx(float x, float y){
      ${chunk.dx}
    }
    float f_dy(float x, float y){
      ${chunk.dy}
    }
    vec2 f_dxy(float x, float y){
      return vec2(
        f_dx(x, y),
        f_dy(x, y)
      );
    }
    vec2 f_dxy_p(in vec2 p){
      return f_dxy(p.x, p.y);
    }

    //============== END GLesmos Imports ==============//


    //============== BEGIN JFA Helper Data ==============//

      const vec2 JFA_kernel[9] = vec2[9]( 
        vec2(-1.0,1.0)  , vec2(0.0,1.0)  , vec2(1.0,1.0)  ,
        vec2(-1.0,0.0)  , vec2(0.0,0.0)  , vec2(1.0,0.0)  ,
        vec2(-1.0,-1.0) , vec2(0.0,-1.0) , vec2(1.0,-1.0)
      );

      const vec2 Q_kernel[4] = vec2[4](
        vec2(-0.5,0.5),  vec2(0.5,0.5),
        vec2(-0.5,-0.5), vec2(0.5,-0.5)
      );

      const vec2 D_kernel[4] = vec2[4](
        vec2(0,0), vec2(1,0),
        vec2(0,1), vec2(1,1)
      );

    //============== END JFA Helper Data ==============//



    //============== BEGIN Shadertoy Buffer A ==============//

    float f_xy_cache( in vec2 fragCoord ){
      return getPixel( fragCoord, iChannel1).x;
    }

    bool detectSignChange( in vec2 fragCoord ){

      vec2 mathcoord = toMathCoord(fragCoord);

      const vec4 identity = vec4(1,1,1,1);
      vec4 corners = vec4(
        f_xy_cache( (fragCoord + Q_kernel[0] / iResolution) ),
        f_xy_cache( (fragCoord + Q_kernel[1] / iResolution) ),
        f_xy_cache( (fragCoord + Q_kernel[2] / iResolution) ),
        f_xy_cache( (fragCoord + Q_kernel[3] / iResolution) )
      );

      vec4 corner_signs = sign(corners);

      // TEST 0: NaN -> no outlines!
      for(int i=0; i<4; i++){
        if( corners[i] != corners[i] ){ return false; }
      }

      // TEST 1: did we get extremely lucky and sample a zero directly?
      if( abs( dot(abs(corner_signs), identity) ) < 4.0 ){
        return true;
      }

      // TEST 2: was there a sign change? (if not, no outline)
      if( abs( dot(corner_signs, identity) ) == 4.0 ){
        return false;
      }

      // TEST 3: is this an asymptote like 1/x? (compare true derivative to an approximation)
      vec4 deriv_samples = vec4(
        (corners[1] - corners[0]), (corners[3] - corners[2]),
        (corners[0] - corners[2]), (corners[1] - corners[3]) 
      );
      vec2 derivative_approx = vec2(
        deriv_samples[0] * 0.5 + deriv_samples[1] * 0.5,
        deriv_samples[2] * 0.5 + deriv_samples[3] * 0.5 
      );

      vec2 derivative_real = f_dxy_p( toMathCoord(fragCoord) );
      return dot( normalize(derivative_real), normalize(derivative_approx) ) > 0.8; // if these are about the same, it probably isn't an asymptote

    }

    vec4 lineToPixel(in vec2 p1, in vec2 p2, in vec2 fragCoord){
      return vec4( p1 + fragCoord, p2 + fragCoord );
    }

    vec2 quadTreeSolve( in vec2 seed, in float scale ){

      float closest = dsm_Infinity;
      int closest_n = 0;

      for( int n = 0; n < 4; n++ ){
        vec2 samplepos = toMathCoord(seed + Q_kernel[n] / iResolution * scale);
        float tmp = abs( f_xy( samplepos.x, samplepos.y ) );
        if( tmp < closest ){
          closest_n = n;
          closest = tmp;
        }
      }
      
      return seed + Q_kernel[closest_n]  / iResolution * scale;
      
    }

    vec4 Step(in vec2 fragCoord){

      vec4 JFA_undefined = vec4(-dsm_Infinity);

      float stepwidth = floor(exp2(c_maxSteps - c_stepNum - 1.0));

      vec2 warp = iResolution / max(iResolution.x, iResolution.y);
      
      float bestDistance = dsm_Infinity;
      vec4  bestLine     = JFA_undefined;
      
      for (int n = 0; n < 9; n++) {
          
        vec2 sampleCoord = fragCoord + JFA_kernel[n] / iResolution * stepwidth;
        vec4 seed        = getPixel( sampleCoord, iChannel0 );

        if( seed == JFA_undefined ) continue; // don't try to use this one
        float dist = LineSDF( seed * vec4(warp,warp), fragCoord * warp );
        
        if (dist < bestDistance){
          bestDistance = dist;
          bestLine     = seed;
        }
              
      }
      
      return bestLine;
    }

    void main(){

      vec4 JFA_undefined = vec4(-dsm_Infinity);

      vec2 fragCoord = texCoord;
      
      if( iInitFlag == 1 ) {  // JFA initialization
        
        bool mask = detectSignChange( fragCoord ); // works correctly
        
        if( mask ){

          fragCoord = quadTreeSolve(fragCoord, 1.0);
          fragCoord = quadTreeSolve(fragCoord, 0.5);
          fragCoord = quadTreeSolve(fragCoord, 0.25);
          
          vec2 mathCoord = fragCoord * graphSize + graphCorner;
          vec2 d = f_dxy(mathCoord.x, mathCoord.y);
          
          d = normalize( vec2(-d.y, d.x) ) / iResolution;
          
          outColor = lineToPixel(-d, d, fragCoord);
        }
        else {
          outColor = JFA_undefined;
        }
          
      }
      else {  // JFA stepping
        outColor = Step( fragCoord );
      }
          
    }

    //============== END Shadertoy Buffer A ==============//
  `;
    const shader = getShaderProgram(gl, VERTEX_SHADER, {
      source,
      DCG_SC_uniforms: chunk.DCG_SC_uniforms
    });
    return shader;
  }
  function glesmosGetFinalPassShader(gl, chunk) {
    const source = `${environment(chunk)}

    uniform sampler2D iChannel0;   // storage
    uniform sampler2D iChannel1;   // cache
    uniform vec2      iResolution; // canvas size
    uniform int       iDoOutlines;
    uniform int       iDoFill;

    void main(){

      // fill
      if ( iDoFill == 1 ) {
        vec4 test = getPixel( texCoord, iChannel1 );
        if( test.x > 0.0 ){
          outColor = mixColor(outColor, ${chunk.color});
        }
      }

      // lines
      if( iDoOutlines != 1 ) return;
      vec4 JFA_undefined = vec4(-dsm_Infinity);
      vec2 warp = iResolution / max(iResolution.x, iResolution.y);

      vec4 seed = getPixel( texCoord, iChannel0 );

      if( seed == JFA_undefined ){ return; }

      float dist = LineSDF( seed * vec4(warp,warp), texCoord * warp ) * max(iResolution.x, iResolution.y);

      float alpha = smoothstep(0.0, 1.0, clamp( dist - float(${chunk.line_width}) * 0.5 + 0.5, 0.0, 1.0 ));
      outColor = mixColor(outColor, ${chunk.line_color} * vec4(1.0,1.0,1.0,1.0 - alpha));
    }
  `;
    const shader = getShaderProgram(gl, VERTEX_SHADER, {
      source,
      DCG_SC_uniforms: chunk.DCG_SC_uniforms
    });
    gl.useProgram(shader.glProgram);
    setUniform(gl, shader, "iDoOutlines", "1i", chunk.line_width > 0 ? 1 : 0);
    setUniform(gl, shader, "iDoFill", "1i", chunk.fill ? 1 : 0);
    return shader;
  }
  function glesmosGetFastFillShader(gl, chunk, deps) {
    const mains = `float f_xy(float x, float y){ ${chunk.main} }`;
    const colorCalls = `if( f_xy( mathCoord.x, mathCoord.y ) > 0.0 ){
      outColor = mixColor(outColor, ${chunk.color});
    }`;
    const source = `${environment(chunk)}

    ${deps}

    ${mains}

    void main(){
      vec2 mathCoord = texCoord * graphSize + graphCorner;
      ${colorCalls}
    }`;
    const shader = getShaderProgram(gl, VERTEX_SHADER, {
      source,
      DCG_SC_uniforms: chunk.DCG_SC_uniforms
    });
    return shader;
  }

  // src/utils/depUtils.ts
  var { evaluateLatex } = Fragile;
  var keys = Fragile.Keys;
  function EvaluateSingleExpression(calc, s) {
    return evaluateLatex(s, calc.controller.getDegreeMode());
  }
  var autoCommands = Private?.MathquillConfig?.getAutoCommands?.();
  var autoOperatorNames = Private?.MathquillConfig?.getAutoOperators?.();
  function getCurrentGraphTitle(calc) {
    const title = window.shellController.graphsController.getCurrentGraphTitle();
    if (title === calc.controller.s("account-shell-text-untitled-graph") || title === calc.controller.s("account-shell-text-untitled")) {
      return void 0;
    }
    return title;
  }
  function tick(calc) {
    calc.controller.dispatch({ type: "tick" });
  }
  function isPlainToast(toast) {
    return typeof toast.message === "string";
  }
  function showToast(calc, toast) {
    calc.controller.showToast(
      isPlainToast(toast) ? toast : (
        // Toasts are ephemeral enough that they don't really need
        // to update on language change:
        // eslint-disable-next-line @desmodder/eslint-rules/no-format-in-ts
        { ...toast, message: fromFormattable(toast.message) }
      )
    );
    tick(calc);
  }
  var bindCalc = (calcUtils) => (calc) => Object.entries(calcUtils).reduce(
    (utils, [name, func]) => {
      utils[name] = (...args) => func(calc, ...args);
      return utils;
    },
    {}
  );
  var createCalcUtils = bindCalc({
    EvaluateSingleExpression,
    getCurrentGraphTitle,
    tick,
    showToast
  });
  var { List } = Fragile;

  // src/plugins/GLesmos/glesmosCanvas.ts
  function createAndBindTexture(gl) {
    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    return tex;
  }
  var FULLSCREEN_QUAD = new Float32Array([
    -1,
    1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    1,
    -1,
    -1,
    -1
  ]);
  function initGLesmosCanvas(calc) {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2", {
      // Disable premultiplied alpha
      // Thanks to <https://stackoverflow.com/a/12290551/7481517>
      premultipliedAlpha: false,
      antialias: true
    });
    if (!gl) {
      showToast(calc, { message: { key: "GLesmos-no-support" } });
      globals_default.DSM?.setPluginEnabled?.("GLesmos", false);
      return void 0;
    }
    gl.getExtension("EXT_color_buffer_float");
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, FULLSCREEN_QUAD, gl.STATIC_DRAW);
    let ACTIVE_FB = 0;
    const textures = [];
    const framebuffers = [];
    const cacheTexture = createAndBindTexture(gl);
    const cacheFB = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, cacheFB);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      cacheTexture,
      0
    );
    for (let i = 0; i < 3; i++) {
      const tex = createAndBindTexture(gl);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        tex,
        0
      );
      textures.push(tex);
      framebuffers.push(fb);
    }
    let glesmosCache;
    let glesmosSDF;
    let glesmosSDFrequiredSteps;
    let glesmosFinalPass;
    let glesmosFastFill;
    let cornerOfGraph = [-10, -6];
    let sizeOfGraph = [20, 12];
    const updateTransforms = (transforms) => {
      const {
        pixelCoordinates: { right: w, bottom: h },
        pixelsToMath: p2m
      } = transforms;
      c.width = w;
      c.height = h;
      if (p2m.xScale.type !== "linear" || p2m.yScale.type !== "linear") {
        glesmosError("Unsupported transformation. Please use linear.");
      }
      gl.viewport(0, 0, c.width, c.height);
      glesmosSDFrequiredSteps = Math.ceil(Math.log2(Math.max(w, h)));
      cornerOfGraph = [p2m.xScale.t, p2m.yScale.s * h + p2m.yScale.t];
      sizeOfGraph = [p2m.xScale.s * w, -p2m.yScale.s * h];
      for (const tex of textures.concat(cacheTexture)) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA32F,
          w,
          h,
          0,
          gl.RGBA,
          gl.FLOAT,
          null
        );
      }
    };
    const setupGLesmosEnvironment = (program) => {
      gl.enableVertexAttribArray(program.vertexAttribPos);
      gl.vertexAttribPointer(program.vertexAttribPos, 2, gl.FLOAT, false, 8, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.uniform2fv(program.size, sizeOfGraph);
      gl.uniform2fv(program.corner, cornerOfGraph);
      gl.uniform1f(program.dsm_Infinity, Infinity);
      gl.uniform1f(program.Infinity, Infinity);
      gl.uniform1f(program.NaN, NaN);
      for (let i = 0; i < program.DCG_SC_uniforms.length; i++) {
        gl.uniform1f(program.DCG_SC_uniforms[i], program.DCG_SC_uniformValues[i]);
      }
    };
    const buildGLesmosFancy = (deps, chunk) => {
      glesmosCache = glesmosGetCacheShader(gl, chunk, deps);
      glesmosFinalPass = glesmosGetFinalPassShader(gl, chunk);
      glesmosSDF = glesmosGetSDFShader(gl, chunk, deps);
    };
    const buildGLesmosFast = (deps, chunk) => {
      glesmosFastFill = glesmosGetFastFillShader(gl, chunk, deps);
    };
    const runCacheShader = () => {
      if (!glesmosCache)
        glesmosError("Cache shader failed.");
      gl.useProgram(glesmosCache.glProgram);
      setupGLesmosEnvironment(glesmosCache);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cacheTexture);
      gl.bindFramebuffer(gl.FRAMEBUFFER, cacheFB);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const runSDFShader = () => {
      if (!glesmosSDF)
        glesmosError("SDF shader failed.");
      gl.useProgram(glesmosSDF.glProgram);
      ACTIVE_FB = 0;
      setupGLesmosEnvironment(glesmosSDF);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cacheTexture);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[ACTIVE_FB]);
      setUniform(gl, glesmosSDF, "c_maxSteps", "1f", glesmosSDFrequiredSteps);
      setUniform(gl, glesmosSDF, "iResolution", "2fv", [c.width, c.height]);
      setUniform(gl, glesmosSDF, "iInitFlag", "1i", 1);
      setUniform(gl, glesmosSDF, "iChannel0", "1i", 0);
      setUniform(gl, glesmosSDF, "iChannel1", "1i", 1);
      for (let i = 0; i < glesmosSDFrequiredSteps; i++) {
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        setUniform(gl, glesmosSDF, "iInitFlag", "1i", 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[ACTIVE_FB]);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[1 - ACTIVE_FB]);
        setUniform(gl, glesmosSDF, "c_stepNum", "1f", i);
        ACTIVE_FB = 1 - ACTIVE_FB;
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[2]);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const runFinalPassShader = () => {
      if (!glesmosFinalPass)
        glesmosError("Outline pass shader failed.");
      gl.useProgram(glesmosFinalPass.glProgram);
      setupGLesmosEnvironment(glesmosFinalPass);
      setUniform(gl, glesmosFinalPass, "iResolution", "2fv", [c.width, c.height]);
      setUniform(gl, glesmosFinalPass, "iChannel0", "1i", 0);
      setUniform(gl, glesmosFinalPass, "iChannel1", "1i", 1);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, textures[2]);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, cacheTexture);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const runFastShader = () => {
      if (!glesmosFastFill)
        glesmosError("Fast-fill shader failed.");
      gl.useProgram(glesmosFastFill.glProgram);
      setupGLesmosEnvironment(glesmosFastFill);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const renderFancy = () => {
      runCacheShader();
      runSDFShader();
      runFinalPassShader();
    };
    const renderFast = () => {
      runFastShader();
    };
    const deleteCanvas = () => {
      c.parentElement?.removeChild(c);
    };
    return {
      element: c,
      glContext: gl,
      deleteCanvas,
      updateTransforms,
      buildGLesmosFancy,
      buildGLesmosFast,
      renderFancy,
      renderFast
    };
  }

  // src/plugins/GLesmos/drawGLesmosSketchToCtx.ts
  var canvas = null;
  function drawGLesmosSketchToCtx(calc, drawCtx, { id, branches }) {
    branches = branches.filter((b) => b.graphMode === "GLesmos");
    const glBranches = branches.map((b) => b.compiledGL);
    if (glBranches.length === 0)
      return;
    drawOneGLesmosSketchToCtx?.(calc, drawCtx, glBranches, id);
  }
  function drawOneGLesmosSketchToCtx(calc, { ctx, projection }, compiledGL, id) {
    canvas = canvas ?? initGLesmosCanvas(calc);
    try {
      if (!canvas?.element)
        glesmosError("WebGL Context Lost!");
      canvas.updateTransforms(projection);
      for (const glPackage of compiledGL) {
        const { hasOutlines, shaderFunctionsList, chunk } = glPackage;
        const joinedShaderFunctions = joinShaderFunctions(shaderFunctionsList);
        if (hasOutlines) {
          canvas?.buildGLesmosFancy(joinedShaderFunctions, chunk);
          canvas?.renderFancy();
          ctx.drawImage(canvas?.element, 0, 0);
        } else {
          canvas?.buildGLesmosFast(joinedShaderFunctions, chunk);
          canvas?.renderFast();
          ctx.drawImage(canvas?.element, 0, 0);
        }
      }
    } catch (e) {
      const model = calc.controller.getItemModel(id);
      if (model)
        model.error = e instanceof Error ? e.message : e;
    }
  }
  function joinShaderFunctions(shaderFunctionsList) {
    return Fragile.joinShaderFunctions(shaderFunctionsList);
  }

  // src/preload/script.ts
  function tryRunDesModder() {
    if (globals_default.Notebook !== void 0) {
    } else if (globals_default.Calc !== void 0)
      runDesModder();
    else
      setTimeout(tryRunDesModder, 10);
  }
  var scriptURL;
  function runDesModder() {
    injectScript(scriptURL);
  }
  function getCalcDesktopURL() {
    const script = document.querySelector("script[src*='shared_calculator_desktop']") ?? document.querySelector("script[src*='calculator_desktop']") ?? document.querySelector("script[src*='calculator_geometry']") ?? document.querySelector("script[src*='calculator_3d']");
    return script?.src;
  }
  async function load(pluginsForceDisabled) {
    if (globals_default.DesModder) {
      throw new Error(
        "DesModder is already loaded in the tab, probably due to an update in Firefox, or due to reinstalling DesModder. Stopping the loading process for DesModder."
      );
    }
    globals_default.DesModder = {
      insertElement,
      replaceElement,
      format,
      drawGLesmosSketchToCtx
    };
    if (globals_default.Desmos?.Calculator || globals_default.Calc) {
      throw new Error(
        "DesModder failed to load properly; it was unable to block the initial load of Desmos. Stopping the loading process for DesModder."
      );
    }
    Console.warn(
      false ? `%cThe warning above (Loading failed for the <script> with source...) is intentional and does not indicate a bug.` : `%cThe error above (net::ERR_BLOCKED_BY_CLIENT) is intentional and does not indicate a bug.`,
      "font-weight: bold;"
    );
    Console.log(
      `%cDesModder is present! (Version ${"0.15.14"})`,
      "color: #388c46; font-weight: bold; font-size: 2em;"
    );
    const srcURL = await pollForValue(getCalcDesktopURL);
    const calcDesktop = await (await fetch(srcURL + "?")).text();
    const enabledReplacements = replacements.filter(
      (r) => !r.plugins.every((p) => pluginsForceDisabled.has(p))
    );
    const newCode = await fullReplacementCached(
      calcDesktop,
      enabledReplacements,
      { addPanic, workerAppend: append_inline_default }
    );
    tryRunDesModder();
    globals_default.dsm_workerAppend = append_inline_default;
    (0, eval)(newCode);
    delete globals_default.dsm_workerAppend;
  }
  listenToMessageDown((message) => {
    if (message.type === "apply-initial-data") {
      message.pluginsForceDisabled.forEach(
        (disabledPlugin) => addForceDisabled(disabledPlugin)
      );
      ({ scriptURL } = message);
      globals_default.DesModderPreload = {
        pluginsForceDisabled: arrayToSet(message.pluginsForceDisabled),
        pluginsEnabled: message.pluginsEnabled,
        pluginSettings: message.pluginSettings
      };
      void load(arrayToSet(message.pluginsForceDisabled));
      return true;
    }
    return false;
  });
  postMessageUp({ type: "get-initial-data" });
})();
