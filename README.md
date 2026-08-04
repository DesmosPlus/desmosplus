<p align="center">
  <img src="extension/icons/icon-128.png" width="128" height="128" alt="DesmosPlus icon">
</p>

<h1 align="center">DesmosPlus</h1>

<p align="center">
  Offline-first calculator workspace with local saves and Chrome graph transfer.
</p>

DesmosPlus packages seven calculator experiences from local browser captures into
one dependency-free Node.js project. Calculator assets run locally, saved work
stays in the browser, and the included Chrome extension moves graph state from
`desmos.com` into DesmosPlus without translating or rebuilding expressions.

> [!IMPORTANT]
> DesmosPlus is an independent project. It is not affiliated with, endorsed by,
> or maintained by Desmos Studio PBC.

## Features

- Seven calculators behind one consistent DesmosPlus shell.
- Local New, Save, Library, category, open, edit, and delete workflows.
- Browser-local persistence with no application database.
- Chrome MV3 extension for exporting from and injecting into Desmos calculators.
- Opt-in Turbo clock for running graph sliders and tickers at up to 16x speed.
- Import support for `.desmosplus.json` and raw Desmos state JSON.
- Local copies of required scripts, styles, fonts, images, and response stubs.
- No package installation, frontend framework, analytics SDK, or build step.
- Responsive desktop and mobile layouts.

## Calculators

| Calculator | Route |
| --- | --- |
| 2D Graphing | `/2dcalculator.html` |
| 3D Graphing | `/3dcalculator.html` |
| Geometry | `/geometry.html` |
| Matrix | `/matrix.html` |
| Notebook | `/notebook.html` |
| Four Function | `/fourfunction.html` |
| Scientific | `/scientific.html` |

## Requirements

- Node.js 18 or newer.
- A current Chromium browser to use the extension.
- No npm packages or global dependencies.

## Quick Start

```sh
git clone https://github.com/loleksyuk/desmosplus.git
cd desmosplus
node scripts/serve.mjs
```

Open <http://127.0.0.1:8765>.

Use another port when needed:

```sh
PORT=3000 node scripts/serve.mjs
```

The custom server is recommended over a generic static server. It serves the
calculator files and local stubs used by account, analytics, usage, and error
reporting routes.

## Local Library

Each calculator exposes New, Save, and Library controls. A saved instance keeps
the complete calculator state and can be reopened, edited, recategorized, and
saved again.

Storage is scoped to the current browser and site origin:

- Cookie chunks hold the local save archive.
- `localStorage` mirrors the archive as a fallback.
- Saves do not sync between browsers, devices, or domains.
- Redeploying to the same origin preserves browser storage.
- Large graph collections remain subject to browser storage quotas.

## Turbo Mode

Graphing calculators expose an opt-in Turbo selector with Off, 2x, 4x, 8x,
and 16x settings. Turbo scales the complete controller, evaluator, and grapher
clock while preserving one full calculator tick per browser animation frame.
This speeds graph motion without intentionally reducing render throughput. A
live FPS readout reports the animation-frame rate. Turbo does not alter saved
graph state and is never stored in cookies or browser storage. Reloading or
reopening a calculator always starts with Turbo Off.

Higher settings intentionally use more CPU and memory. Large graphs may become
slow when the evaluator cannot keep up. If measured frame rate remains below 30
FPS for roughly 1.5 seconds, DesmosPlus automatically reduces Turbo by one step
until the page becomes responsive again. A stalled frame disables Turbo and
discarded background time is not multiplied when the tab becomes active again.

Simple fixed-step tickers are accelerated with Desmos's elapsed-time `dt`
variable. This keeps their motion at the selected speed when a large graph
cannot evaluate every requested tick, while requesting the highest update rate
the calculator can sustain. The original ticker action and interval are retained
in local saves and recovery snapshots. Other ticker actions use clock scaling.

## Crash Recovery

DesmosPlus keeps a browser-local recovery checkpoint of the current calculator
state. After an abnormal renderer exit, the next load restores that unsaved
state automatically. A recovered snapshot is quarantined until the page remains
stable, preventing a failing snapshot from causing a reload loop. Clean
navigation and normal page closure clear the crash marker so they do not produce
false recovery messages.

The local Node server also supervises its serving worker. A worker that exits or
fails three consecutive health checks is replaced automatically while keeping
the same `http://127.0.0.1:8765` address.

## Chrome Extension

The extension transfers calculator state in both directions. It reads state only
after the user selects Export from Desmos and writes state only after the user
selects Import into Desmos. Exported files contain the state returned by Desmos
rather than expressions parsed from the page.

### Install

1. Open `chrome://extensions` in Chrome, Chromium, Brave, or Edge.
2. Enable Developer mode.
3. Select Load unpacked.
4. Select the repository's `extension` directory.
5. Pin DesmosPlus Transfer when frequent access is useful.

### Export and Import

1. Open a supported calculator on `desmos.com` and wait for it to load.
2. Open DesmosPlus Transfer.
3. Set the name and category, then select Export from Desmos.
4. Open DesmosPlus and select Library.
5. Select Import graph file and choose the exported file.

Wrapped exports include the calculator product, so DesmosPlus switches to the
matching calculator before opening the imported state. Raw Desmos state JSON can
also be imported into the calculator currently open.

### Inject into Desmos

1. Open the matching calculator on `desmos.com`.
2. Open DesmosPlus Transfer and select Import into Desmos.
3. Choose a `.desmosplus.json` file or raw Desmos state JSON.
4. Review the loaded graph, then use Desmos Save if it should remain in the
   Desmos account or graph library.

Injection changes only the active calculator state. The extension does not click
Save, publish a graph, or access Desmos account APIs.

### Permissions

| Permission | Purpose |
| --- | --- |
| `activeTab` | Grants temporary access to the current tab after extension use. |
| `scripting` | Reads or writes `window.Calc` or `window.Notebook` in the page's main world. |

The extension declares no persistent host permissions and makes no network
requests.

## Graph File Format

DesmosPlus wraps the raw calculator state with minimal routing metadata:

```json
{
  "format": "desmosplus.graph",
  "version": 1,
  "product": "2dcalculator",
  "name": "Example graph",
  "category": "Imported",
  "exportedAt": "2026-07-31T00:00:00.000Z",
  "sourceUrl": "https://www.desmos.com/calculator/example",
  "state": {
    "version": 8,
    "randomSeed": "...",
    "graph": {},
    "expressions": {
      "list": []
    }
  }
}
```

The `state` object is stored and passed to the matching calculator unchanged.
This preserves expressions, folders, sliders, tables, regressions, notes,
viewport settings, animation state, and product-specific fields supported by
the captured calculator bundle.

## Deployment

Use a Node.js host that can run the included server.

| Setting | Value |
| --- | --- |
| Build command | None |
| Start command | `node scripts/serve.mjs` |
| Port | Supplied through `PORT` |
| Health check | `/` |
| Persistent server storage | Not required |

### Render

1. Create a Web Service from `loleksyuk/desmosplus`.
2. Select the Node runtime.
3. Leave the build command empty.
4. Set the start command to `node scripts/serve.mjs`.
5. Deploy.

### Railway

1. Create a project from `loleksyuk/desmosplus`.
2. Set the start command to `node scripts/serve.mjs`.
3. Generate a public domain.

### VPS or Local Network

```sh
PORT=8080 node scripts/serve.mjs
```

Use HTTPS and place Caddy, Nginx, or another reverse proxy in front of the Node
process for a public deployment. Keep the public origin stable when users need
existing browser-local saves to remain available.

## Offline and Privacy Model

- Calculator scripts and static assets are served from this repository.
- Runtime guards block outbound requests and external script injection.
- Versioned local assets clear stale Cache Storage entries and obsolete service
  workers without deleting saves, categories, cookies, or recovery snapshots.
- Local telemetry endpoints return inert responses.
- Calculator states remain in browser storage unless the user exports a file.
- The extension reads only the active supported Desmos tab after a user action.

Captured bundles can still contain remote URLs as inactive strings for upstream
help, gallery, account, thumbnail, and reporting features. A hosted deployment
also requires a network connection for the initial page download. Run the local
server to use the packaged calculators without internet access.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `index.html` | Calculator directory. |
| `*calculator.html`, `geometry.html`, `notebook.html` | Product pages. |
| `assets/build/` | Captured calculator bundles and static assets. |
| `assets/local/` | DesmosPlus shell, storage, import, and offline guard code. |
| [`assets/product-logos/`](assets/product-logos/) | PNG and ICO product logo pack for all seven calculators. |
| `extension/` | Chrome MV3 graph import and export extension. |
| `scripts/serve.mjs` | Local and production Node server. |
| `scripts/build-pages-from-har.mjs` | HAR extraction and page regeneration. |

## Development

Run syntax and manifest checks:

```sh
node --check assets/local/offline-save.js
node --check assets/local/offline-guard.js
node --check extension/popup.js
node --check scripts/serve.mjs
node -e 'JSON.parse(require("fs").readFileSync("extension/manifest.json", "utf8"))'
```

Start the server and verify the main route:

```sh
node scripts/serve.mjs
curl --fail http://127.0.0.1:8765/
```

### Rebuild from HAR Captures

`scripts/build-pages-from-har.mjs` expects the seven source HAR paths listed in
the script. Update those paths when working on another machine, then run:

```sh
node scripts/build-pages-from-har.mjs
```

The command regenerates product HTML and local response stubs. HAR files can
contain account details, headers, cookies, and session data. Never commit or
share a capture without reviewing and sanitizing it first.

When changing local CSS, guards, or save behavior, bump `siteVersion` in
`scripts/build-pages-from-har.mjs` and the matching `SITE_CACHE_VERSION` in
`assets/local/offline-guard.js`, then regenerate or update the page references.

## Contributing

1. Fork the repository and create a focused branch.
2. Keep runtime dependencies at zero unless a dependency removes more risk than
   it adds.
3. Preserve offline behavior and browser-local storage semantics.
4. Keep UI changes restrained, accessible, unrounded, and responsive.
5. Run the checks above and test affected calculators before opening a pull
   request.

Bug reports should include the calculator route, browser version, reproduction
steps, and console error text. Do not attach private HAR files or graph exports
that contain information you do not intend to publish.

## Known Limitations

- Browser saves are not synchronized or backed up automatically.
- Browser storage quotas limit very large libraries.
- Crash checkpoints are best effort and remain subject to browser storage
  availability and quotas.
- The extension is installed unpacked and is not published to a browser store.
- Graphs injected into Desmos remain temporary until saved through Desmos.
- Upstream calculator changes can require fresh captures or importer updates.
- Turbo speed remains limited by browser and calculator evaluator throughput.
- FPS remains limited by hardware, graph complexity, and display refresh rate.
- Optional upstream account, gallery, help, and sharing features are not part of
  the local workspace.

## License and Third-Party Notice

This repository does not currently include an open-source license. Public source
visibility alone does not grant reuse rights. Add an explicit `LICENSE` before
accepting outside contributions or redistributing the project.

Desmos is a trademark of Desmos Studio PBC. Captured calculator code and assets
may remain subject to third-party terms. Review those rights before public or
commercial distribution.
