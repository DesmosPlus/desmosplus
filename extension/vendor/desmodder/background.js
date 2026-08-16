"use strict";
(() => {
  // src/plugins/wakatime/heartbeat.ts
  async function sendHeartbeat(opts, sendResponse) {
    const data = {
      // This is background information for WakaTime to handle. These values need no change.
      language: "Desmos",
      category: "coding",
      type: "app",
      dependencies: [],
      time: Date.now() * 1e-3,
      lines: opts.lineCount,
      lineno: null,
      cursorpos: null,
      is_write: opts.isWrite,
      // Everything below will show up in your Leaderboard.
      project: opts.splitProjects ? opts.graphName : (
        // Defend against empty string
        opts.projectName || "Desmos Projects"
      ),
      entity: opts.graphURL,
      branch: opts.splitProjects ? null : opts.graphName
    };
    if (opts.secretKey === "") {
      sendResponse({
        type: "heartbeat-error",
        isAuthError: true,
        message: "Secret key not provided"
      });
      return;
    }
    try {
      const r = await fetch(
        "https://wakatime.com/api/v1/users/current/heartbeats",
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(opts.secretKey)}`,
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );
      if (r.status !== 201)
        sendResponse({
          type: "heartbeat-error",
          isAuthError: r.status === 401,
          message: await r.text()
        });
    } catch (e) {
      sendResponse({
        type: "heartbeat-error",
        isAuthError: false,
        message: typeof e === "object" && e !== null ? e.message ?? e : e
      });
    }
  }

  // src/background.ts
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg.type === "send-background-heartbeat") {
      void sendHeartbeat(msg.options, sendResponse);
    }
    return true;
  });
  if (true) {
    chrome.action.onClicked?.addListener(() => {
      void chrome.tabs.create({
        url: "https://www.desmos.com/calculator"
      });
    });
  } else {
    chrome.browserAction.onClicked?.addListener(() => {
      void chrome.tabs.create({
        url: "https://www.desmos.com/calculator"
      });
    });
  }
  if (false) {
    chrome.webRequest.onBeforeRequest.addListener(
      ({ url }) => ({
        cancel: url.endsWith(".js") && !url.startsWith("https://maintain.desmos.com")
      }),
      {
        urls: [
          "https://*.desmos.com/assets/build/calculator_desktop-*.js",
          "https://*.desmos.com/assets/build/calculator_geometry-*.js",
          "https://*.desmos.com/assets/build/calculator_3d-*.js",
          "https://*.desmos.com/assets/build/shared_calculator_desktop-*.js"
        ]
      },
      ["blocking"]
    );
    chrome.webRequest.onHeadersReceived.addListener(
      (details) => ({
        ...details,
        responseHeaders: [
          ...details.responseHeaders?.filter(
            ({ name }) => name !== "Cross-Origin-Embedder-Policy" && name !== "Cross-Origin-Opener-Policy"
          ) ?? [],
          {
            name: "Cross-Origin-Embedder-Policy",
            value: "require-corp"
          },
          {
            name: "Cross-Origin-Opener-Policy",
            value: "same-origin"
          }
        ]
      }),
      {
        urls: [
          "https://*.desmos.com/calculator*",
          "https://*.desmos.com/geometry*",
          "https://*.desmos.com/3d*",
          "https://*.desmos.com/notebook*"
        ]
      },
      ["blocking", "responseHeaders"]
    );
    chrome.webRequest.onHeadersReceived.addListener(
      (details) => ({
        ...details,
        responseHeaders: [
          ...details.responseHeaders?.filter(
            ({ name }) => name !== "Cross-Origin-Resource-Policy"
          ) ?? [],
          {
            name: "Cross-Origin-Resource-Policy",
            value: "cross-origin"
          }
        ]
      }),
      {
        urls: [
          "https://saved-work.desmos.com/calc_thumbs/**/*",
          "https://saved-work.desmos.com/calc-recovery-thumbs/**/*",
          "https://saved-work.desmos.com/calc-3d-thumbs/**/*"
        ]
      },
      ["blocking", "responseHeaders"]
    );
  }
})();
