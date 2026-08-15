# DesmosPlus Browser Extension

The DesmosPlus browser extension transfers complete graph state between the
official Desmos calculators and DesmosPlus. It also converts static SVG artwork
and audio files into editable Desmos equations. Processing happens locally in
the browser.

DesmosPlus is an independent project. It is not affiliated with, endorsed by,
or maintained by Desmos Studio PBC.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Supported Calculators](#supported-calculators)
- [Graph Transfer](#graph-transfer)
- [SVG Import](#svg-import)
- [DesAudify Audio Import](#desaudify-audio-import)
- [Permissions and Privacy](#permissions-and-privacy)
- [File Formats and Limits](#file-formats-and-limits)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Known Limitations](#known-limitations)
- [Third-Party Notices](#third-party-notices)

## Requirements

- Chrome, Chromium, Brave, or Edge with Manifest V3 support.
- A local checkout of DesmosPlus.
- Developer mode enabled on the browser extensions page.

No package installation or build step is required.

## Installation

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Select the repository's `extension` directory.
5. Pin **DesmosPlus** for easier access.

After pulling an update, return to `chrome://extensions` and select **Reload**
on the DesmosPlus extension card.

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
supports 2D Graphing.

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

The available conversion modes are:

| Mode | Settings |
| --- | --- |
| Auto | 30 FPS, 32 voices, 260,000-note limit, `0.0001` minimum magnitude |
| High quality | 60 FPS, 144 voices, 1,200,000-note limit |
| Custom | Start, end, FPS, polyphony, note limit, and minimum magnitude controls |

Conversion supports a selected range up to five minutes. Higher settings use
more memory and take longer for Desmos to parse.

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

## Permissions and Privacy

| Permission | Purpose |
| --- | --- |
| `activeTab` | Grants temporary access to the current tab after the user opens the extension. |
| `scripting` | Injects packaged code that reads or writes `window.Calc` or `window.Notebook` in the active page. |

The extension declares no persistent host permissions. It reads or changes only
the active supported Desmos tab after a user action. Selected graph, SVG, schema,
and audio files are processed locally and are not uploaded by DesmosPlus. The
extension makes no network requests of its own.

## File Formats and Limits

| Input | Support |
| --- | --- |
| `.desmos` | Preferred wrapped graph format with product metadata |
| `.desmosplus.json` | Legacy wrapped graph format |
| `.json` | Raw Desmos state or wrapped graph state |
| `.svg` | Static vector import, up to 1 MB |
| Audio | Browser-decodable audio, including common MP3, WAV, M4A, OGG, FLAC, and AAC selections |
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
time.

### Audio Is Silent

Wait for processing to finish, unmute Desmos audio, and click the title or the
instruction to its right. The author row and its instruction restart playback.

## Development

Run the extension checks from the repository root:

```sh
node --check extension/svg-import.js
node --check extension/desaudify-audio.js
node --check extension/desaudify-audio-worker.js
node --check extension/desaudify-page.js
node --check extension/popup.js
node -e 'JSON.parse(require("fs").readFileSync("extension/manifest.json", "utf8"))'
```

After changing extension files, increment the version in
`extension/manifest.json`, reload the unpacked extension, and test the affected
feature on the matching official Desmos calculator.

The extension's main files are:

| Path | Purpose |
| --- | --- |
| `extension/manifest.json` | Manifest V3 metadata and permissions |
| `extension/popup.html` | Popup structure and tool sections |
| `extension/popup.css` | Popup styling and animations |
| `extension/popup.js` | Active-tab detection and graph transfer orchestration |
| `extension/svg-import.js` | Static SVG validation and equation conversion |
| `extension/desaudify-audio.js` | Audio decoding and worker orchestration |
| `extension/desaudify-audio-worker.js` | FFT analysis and schema generation |
| `extension/desaudify-page.js` | Main-world player and paced schema injection bridge |
| `extension/desaudify-template.json` | Bundled DesAudify player state |

## Known Limitations

- The extension is installed unpacked and is not published to a browser store.
- Graphs injected into Desmos remain temporary until saved through Desmos.
- Desmos page changes can require updates to calculator detection or injection.
- Very large SVG or audio conversions remain limited by browser memory and
  Desmos evaluator throughput.
- Audio codec support varies by Chromium build and operating system.

## Third-Party Notices

The bundled DesAudify template is pinned to upstream commit
`e41972eb517d0a538e53dc5c4146c21264d45924`. Attribution and the Apache 2.0
license are in [`assets/desaudify/`](assets/desaudify/).

The browser port vendors `fft.js` 4.0.4. Its MIT notice is included in
[`extension/vendor/FFTJS-NOTICE`](extension/vendor/FFTJS-NOTICE).

Desmos is a trademark of Desmos Studio PBC. See the main
[`README.md`](README.md) for the repository's license and third-party notice.
