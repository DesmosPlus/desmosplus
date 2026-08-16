# DesmosPlus Browser Extension

The DesmosPlus browser extension transfers complete graph state between the
official Desmos calculators and DesmosPlus. It also converts static SVG artwork
and audio files into editable Desmos equations. Processing happens locally in
the browser.

DesmosPlus is an independent project. It is not affiliated with, endorsed by,
or maintained by Desmos Studio PBC.

## Table of Contents

- [Requirements](#requirements)
- [Downloads](#downloads)
- [Installation](#installation)
- [Supported Calculators](#supported-calculators)
- [Graph Transfer](#graph-transfer)
- [SVG Import](#svg-import)
- [DesAudify Audio Import](#desaudify-audio-import)
  - [Downloadable Shard ZIP](#downloadable-shard-zip)
- [DesModder Injection](#desmodder-injection)
- [Permissions and Privacy](#permissions-and-privacy)
- [File Formats and Limits](#file-formats-and-limits)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Known Limitations](#known-limitations)
- [Third-Party Notices](#third-party-notices)

## Requirements

- Chrome, Chromium, Brave, or Edge with Manifest V3 support.
- A downloaded DesmosPlus release ZIP or a local repository checkout.
- Developer mode enabled on the browser extensions page.

No package installation or build step is required.

## Downloads

Published extension packages are listed newest first. Each ZIP extracts directly
into a folder that can be selected with **Load unpacked**. The repository is
private, so GitHub must be signed in with an account that has access.

| Version | Package | Release |
| --- | --- | --- |
| **v1.14.0 (latest)** | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.14.0/DesmosPlus-Extension-v1.14.0.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.14.0) |
| v1.13.0 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.13.0/DesmosPlus-Extension-v1.13.0.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.13.0) |
| v1.12.1 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.12.1/DesmosPlus-Extension-v1.12.1.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.12.1) |
| v1.12.0 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.12.0/DesmosPlus-Extension-v1.12.0.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.12.0) |
| v1.11.1 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.11.1/DesmosPlus-Extension-v1.11.1.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.11.1) |
| v1.11.0 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.11.0/DesmosPlus-Extension-v1.11.0.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.11.0) |
| v1.10.0 | [Download ZIP](https://github.com/loleksyuk/desmosplus/releases/download/v1.10.0/DesmosPlus-Extension-v1.10.0.zip) | [Release notes](https://github.com/loleksyuk/desmosplus/releases/tag/v1.10.0) |

The complete release history is available on the
[GitHub Releases page](https://github.com/loleksyuk/desmosplus/releases).

Every release ZIP includes `DESMOSPLUS-BUILD.txt`. DesmosPlus-owned HTML, CSS,
and JavaScript also carry a comment with the package version and source URL.
Files under `vendor/` retain their upstream attribution and are not stamped as
DesmosPlus code.

## Installation

### Install a Release ZIP

1. Sign in to GitHub with an account that can access the repository.
2. Download the latest package from the [Downloads](#downloads) table.
3. Create a permanent folder for the extension, such as
   `DesmosPlus Extension`.
4. Extract the ZIP into that folder. `manifest.json` must be directly inside
   the selected folder, not inside another nested directory.
5. Open the browser's extension manager:
   - Chrome and Chromium: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`
6. Enable **Developer mode**.
7. Select **Load unpacked** and choose the extracted extension folder.
8. Pin **DesmosPlus** from the browser's extensions menu.
9. Open a supported Desmos calculator and select the DesmosPlus toolbar icon.

Keep the extracted folder after installation. The browser loads the extension
from that location and cannot use the ZIP directly.

### Install from the Repository

1. Clone or download the DesmosPlus repository.
2. Open the browser's extension manager and enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the repository's `extension` directory.
5. Pin **DesmosPlus** from the browser's extensions menu.

### Update an Existing Installation

1. Download the newest release ZIP.
2. Empty the existing extracted extension folder without deleting the folder
   itself.
3. Extract the new package into that same folder and confirm that
   `manifest.json` is at its root.
4. Return to the browser's extension manager.
5. Select **Reload** on the DesmosPlus extension card.
6. Close and reopen the DesmosPlus popup.

Using the same folder keeps the unpacked extension identity stable. Replacing
its package files does not remove settings stored by the browser extension.

## Supported Calculators

The **Graph** section can export and import state for these official Desmos
routes:

| Product | Desmos route |
| --- | --- |
| 2D Graphing | `/calculator` |
| 3D Graphing | `/3d` |
| Geometry | `/geometry` |
| Notebook | `/notebook` |
| Matrix | `/matrix` |
| Four Function | `/fourfunction` |
| Scientific | `/scientific` |

The **SVG** section supports 2D Graphing and Geometry. The **DesAudify** section
supports 2D Graphing. The bundled **DesModder** injector supports 2D Graphing,
Geometry, 3D Graphing, and Notebook.

## Graph Transfer

### Export from Desmos

1. Open a supported calculator on `desmos.com` and wait for it to load.
2. Open DesmosPlus and select **Graph**.
3. Enter a graph name and category.
4. Select **Export**.

The downloaded `.desmos` file contains the calculator state returned by Desmos.
Expressions are not scraped or rebuilt, so folders, sliders, tables, notes,
regressions, viewport settings, and supported animation state are preserved.

### Import into Desmos

1. Open the matching calculator on `desmos.com`.
2. Open DesmosPlus and select **Graph**.
3. Select **Import** and choose a supported graph file.
4. Review the imported graph.
5. Use Desmos **Save** when the graph should remain in the Desmos account.

Import replaces the active calculator state. It does not automatically save or
publish the graph and does not access Desmos account APIs.

### Import into the Local Site

1. Start DesmosPlus and open its **Library**.
2. Select **Import graph file**.
3. Choose the `.desmos` file exported by the extension.

Wrapped files identify their calculator product, allowing the local site to
open the matching calculator automatically.

## SVG Import

1. Open an official Desmos 2D or Geometry calculator.
2. Open DesmosPlus and select **SVG**.
3. Select **Import SVG as equations** and choose a static SVG file.

Paths and basic SVG shapes become editable polygon and point-list equations in
a named folder. Curves are sampled into points and centered on the graph. Simple
fill, stroke, opacity, and transform information is retained.

SVG files must be 1 MB or smaller. The importer rejects animation, scripts,
embedded HTML, document entities, and embedded or external resources. Text,
raster images, clipping, filters, patterns, and reusable symbols must be
converted to paths before import.

## DesAudify Audio Import

[DesAudify](https://github.com/whitecaplol/DesAudify) represents audio with
Desmos equations. The extension includes an offline browser port that decodes
the selected audio, performs FFT peak analysis in a worker, builds packed
schemas, loads the bundled player, and injects the result into a Desmos 2D
graph.

### Automatic Import

1. Open the official Desmos 2D Graphing Calculator.
2. Open DesmosPlus and select **DesAudify**.
3. Choose a conversion mode.
4. Select **Import audio** and choose an audio file.
5. Keep the graph tab open while conversion and paced injection finish.
6. Unmute Desmos audio and click the title or its right-side instruction to
   play or pause.
7. Click the author row or its right-side instruction to restart the song.

### Downloadable Shard ZIP

Select **Download shard ZIP** instead of **Import audio** to convert the audio
without changing the open graph. DesmosPlus downloads one ZIP containing:

- `01-player-ui.desmos`, with the player UI and processing equations.
- `shards/NNN-shard.desmos`, with exactly one data folder per file.
- `00-manifest.json`, with conversion details and ordered shard names.
- `README.txt`, with the native copy-and-paste assembly steps.

To assemble the graph, import `01-player-ui.desmos` into an official Desmos 2D
tab using the extension's **Graph** section. Import a numbered shard into a
second Desmos 2D tab, focus its folder, and copy it with `Ctrl+C` on Windows or
`Command+C` on macOS. Focus a blank expression line in the player graph and
paste with `Ctrl+V` or `Command+V`. Desmos inserts the copied item as a folder.
Repeat in numerical order for every shard.

The shard graphs contain only their folder and `t_i`/`p_i` equations. Shared
player and processing expressions stay in the UI graph, so they are not
duplicated in every download.

The conversion menu is a custom themed listbox with mouse, arrow-key, Home,
End, and Escape support.

While that menu is open, the MAX option uses Canvas UI Flame Wrap with purple
fire. Hovering or keyboard-focusing MAX changes its fire to blue. Selecting MAX
adds tall flames above the extension with a narrow rim along its sides and
bottom while the DesAudify tab remains open; choosing another mode or leaving
the tab releases the effect.

The available conversion modes are:

| Mode | Settings |
| --- | --- |
| Auto | 30 FPS, 32 voices, 260,000-note limit, `0.0001` minimum magnitude |
| High quality | 60 FPS, 144 voices, 1,200,000-note limit |
| MAX | 120 FPS, all detected FFT voices, full file duration, and no retained-note or file-size cap |
| Custom | Start, end, FPS, polyphony, note limit, and minimum magnitude controls |

Auto, High quality, and Custom support files up to 100 MB and a selected range
up to five minutes. MAX removes those extension safeguards and retains every
detected note. Browser memory, CPU, codec, and Desmos evaluator limits still
apply.

MAX is not an originally supported DesAudify mode. The popup displays a warning
and requires confirmation before conversion. It may freeze or crash the browser
or Desmos and may lose unsaved work. The extension owner is not responsible for
anything that happens beyond the confirmation point.

The DesAudify tab also displays a GitHub logo in the upper-right corner. It
changes to the supplied blue version on hover or keyboard focus, links directly
to the [DesAudify repository](https://github.com/whitecaplol/DesAudify), and is
hidden on the Graph and SVG tabs.

Generated data is divided into shard-sized folders. Ordered `t_i` and `p_i`
pairs are inserted with byte-scaled pauses, followed by small processing
batches. This pacing gives Desmos time to parse large graphs without receiving
the entire song in one burst. The ticker starts after processing finishes.

### Manual Schema Import

Open **Manual schemas** in the DesAudify section:

1. Select **Load player**. This replaces the current graph.
2. Select **Import data** and choose `data_schema.txt` or ordered
   `shard_*.txt` files.
3. Select **Import processing** and choose `processing_schema.txt`.

The player must be loaded before schemas are inserted. Each schema file is
limited to 6 MB and 500 non-empty equation lines.

### Upstream Python Workflow

The upstream pipeline remains available for multi-resolution synchrosqueezed
analysis or manually generated schemas:

```sh
git clone https://github.com/whitecaplol/DesAudify.git
cd DesAudify
python -m pip install -r requirements.txt
python desaudify_cli.py input.mp3 output
```

## DesModder Injection

The Settings tab includes the latest bundled stable release of
[DesModder](https://github.com/DesModder/DesModder). DesModder must start before
the calculator bundle, so both controls reload the active supported Desmos tab
after their startup rules are ready.

- **Inject in this tab** enables DesModder for the current browser tab until the
  tab closes or another tab is selected for manual injection.
- **Auto-inject on Desmos** enables DesModder for every supported official
  Desmos page. The setting remains enabled until it is switched off.

DesModder plugin choices and plugin settings use extension sync storage. The
DesmosPlus auto-inject choice uses local extension storage. DesModder's optional
WakaTime plugin can contact WakaTime only after it is configured inside
DesModder.

DesmosPlus never executes JavaScript downloaded from a GitHub release at
runtime. `scripts/update-desmodder.mjs` downloads the latest official Chrome
release during repository maintenance, validates its version, bundles the
required files, records the archive checksum, and preserves the upstream MIT
license. The extension packager runs that updater automatically, so a future
upstream release does not require a source edit or a hard-coded URL change.

## Permissions and Privacy

| Permission | Purpose |
| --- | --- |
| `activeTab` | Grants temporary access to the current tab after the user opens the extension. |
| `scripting` | Injects packaged code that reads or writes `window.Calc` or `window.Notebook` in the active page. |
| `storage` | Stores the DesModder auto-inject choice and DesModder plugin settings. |
| `declarativeNetRequest` | Lets bundled DesModder prepare the calculator script before Desmos starts. |
| `https://*.desmos.com/*` | Runs the optional DesModder loader on supported official calculators. |
| `https://wakatime.com/*` | Supports DesModder's optional WakaTime plugin when the user configures it. |

Selected graph, SVG, schema, and audio files are processed locally and are not
uploaded by DesmosPlus. Graph transfer, SVG conversion, and DesAudify still run
only after a user action. DesModder auto-injection is the only persistent Desmos
site access and is off by default.

## File Formats and Limits

| Input | Support |
| --- | --- |
| `.desmos` | Preferred wrapped graph format with product metadata |
| `.desmosplus.json` | Legacy wrapped graph format |
| `.json` | Raw Desmos state or wrapped graph state |
| `.svg` | Static vector import, up to 1 MB |
| Audio | Browser-decodable audio; standard modes allow 100 MB and five minutes, while MAX removes those extension caps |
| `.zip` | DesAudify-only player UI and individually copyable `.desmos` shard graphs |
| `.txt` | DesAudify schemas, up to 6 MB and 500 non-empty equations per file |

The browser's media decoder determines which audio codecs can be opened.

## Troubleshooting

### Buttons Are Disabled

Open a supported page on `desmos.com`, wait for the calculator to finish
loading, and reopen the extension. SVG requires 2D Graphing or Geometry.
DesAudify requires 2D Graphing.

### An Update Is Not Visible

Open `chrome://extensions`, find DesmosPlus, and select **Reload**. Close and
reopen the extension popup afterward.

### A Graph Imports but Is Not Saved

Injection changes only the current calculator state. Select Desmos **Save** to
store it in the account or graph library.

### Audio Conversion Is Slow

Keep the Desmos tab active and use **Auto** for a smaller graph. Long selections,
high FPS, high polyphony, and large note limits increase conversion and parsing
time. MAX can exhaust browser memory or remain busy for a very long time.

### Audio Is Silent

Wait for processing to finish, unmute Desmos audio, and click the title or the
instruction to its right. The author row and its instruction restart playback.

## Development

Run the extension checks from the repository root:

```sh
node --check extension/svg-import.js
node --check extension/desaudify-audio.js
node --check extension/desaudify-audio-worker.js
node --check extension/desaudify-export.js
node --check extension/desaudify-page.js
node --check extension/background.js
node --check extension/desmodder-loader.js
node --check extension/flame-effects.js
node --check extension/popup.js
node --check extension/vendor/flame-wrap.js
node -e 'JSON.parse(require("fs").readFileSync("extension/manifest.json", "utf8"))'
```

Update the bundled files directly, or package the extension and update them as
one command:

```sh
node scripts/update-desmodder.mjs
node scripts/package-extension.mjs
```

The updater requires network access plus the standard `unzip` command. The
packager requires the standard `zip` and `unzip` commands.

After changing extension files, increment the version in
`extension/manifest.json`, reload the unpacked extension, and test the affected
feature on the matching official Desmos calculator.

The extension's main files are:

| Path | Purpose |
| --- | --- |
| `extension/manifest.json` | Manifest V3 metadata and permissions |
| `extension/background.js` | Conditional DesModder startup rules and settings messages |
| `extension/desmodder-loader.js` | Early DesModder page bridge for supported Desmos routes |
| `extension/popup.html` | Popup structure and tool sections |
| `extension/popup.css` | Popup styling and animations |
| `extension/popup.js` | Active-tab detection and graph transfer orchestration |
| `extension/flame-effects.js` | DesAudify MAX Flame Wrap lifecycle and colors |
| `extension/vendor/flame-wrap.js` | Pinned Canvas UI Flame Wrap WebGL engine |
| `extension/vendor/desmodder/` | Pinned DesModder runtime, metadata, checksum, and MIT license |
| `extension/svg-import.js` | Static SVG validation and equation conversion |
| `extension/desaudify-audio.js` | Audio decoding and worker orchestration |
| `extension/desaudify-audio-worker.js` | FFT analysis and schema generation |
| `extension/desaudify-export.js` | DesAudify shard graph and local ZIP generation |
| `extension/desaudify-page.js` | Main-world player and paced schema injection bridge |
| `extension/desaudify-template.json` | Bundled DesAudify player state |
| `scripts/update-desmodder.mjs` | Syncs the latest stable DesModder Chrome release |
| `scripts/package-extension.mjs` | Creates a clean versioned extension ZIP |

## Known Limitations

- The extension is installed unpacked and is not published to a browser store.
- A ZIP-installed or unpacked extension does not update itself; install the new
  DesmosPlus release generated when the bundled DesModder version changes.
- DesModder works by preparing Desmos's own calculator bundle during page load.
  Browser-store review policies may treat that mechanism differently from a
  normal packaged content script.
- Graphs injected into Desmos remain temporary until saved through Desmos.
- Desmos page changes can require updates to calculator detection or injection.
- Very large SVG or audio conversions remain limited by browser memory and
  Desmos evaluator throughput.
- Audio codec support varies by Chromium build and operating system.
- MAX removes DesmosPlus safeguards, not the physical limits of the browser,
  computer, or Desmos calculator.

## Third-Party Notices

The bundled DesAudify template is pinned to upstream commit
`e41972eb517d0a538e53dc5c4146c21264d45924`. Attribution and the Apache 2.0
license are in [`assets/desaudify/`](assets/desaudify/).

The browser port vendors `fft.js` 4.0.4. Its MIT notice is included in
[`extension/vendor/FFTJS-NOTICE`](extension/vendor/FFTJS-NOTICE).

The MAX visual effect vendors Canvas UI Flame Wrap from commit
`f993683dc03446eead7a372153f3d22b480ec465`. Its MIT + Commons Clause notice is
included in [`extension/vendor/CANVAS-UI-NOTICE`](extension/vendor/CANVAS-UI-NOTICE).

The extension bundles the latest stable Chrome release of
[DesModder](https://github.com/DesModder/DesModder). Its version, source release,
and archive checksum are recorded in
[`extension/vendor/desmodder/metadata.json`](extension/vendor/desmodder/metadata.json),
and its MIT license is included beside the runtime.

Desmos is a trademark of Desmos Studio PBC. See the main
[`README.md`](README.md) for the repository's license and third-party notice.
