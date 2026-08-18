# DesmosPlus Browser Extension

The DesmosPlus browser extension transfers complete graph state between the
official Desmos calculators and DesmosPlus. It also converts static SVG artwork
and OBJ models into editable Desmos equations, converts audio files into
playable graphs, adds reusable function definitions and a starter ticker, adds
a dark theme, and can periodically save signed-in Desmos graphs. Processing
happens locally in the browser.
Tool sections use short directional transitions and switch instantly when the
browser's reduced-motion preference is enabled.

DesmosPlus is an independent project. It is not affiliated with, endorsed by,
or maintained by Desmos Studio PBC.

## Table of Contents

- [Requirements](#requirements)
- [Downloads](#downloads)
- [Release Process](#release-process)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Supported Calculators](#supported-calculators)
- [Graph Pop-Out](#graph-pop-out)
- [Autosave](#autosave)
- [Graph Transfer](#graph-transfer)
- [SVG Import](#svg-import)
- [3D OBJ Import and Starter Ticker](#3d-obj-import-and-starter-ticker)
- [Function Library](#function-library)
- [DesAudify Audio Import](#desaudify-audio-import)
  - [Downloadable Shard ZIP](#downloadable-shard-zip)
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
into a folder that can be selected with **Load unpacked**. The repository and
release downloads are public and do not require a GitHub account.

| Version | DesModder included | Package | Release |
| --- | --- | --- | --- |
| **v1.22.0 (latest)** | **No** | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.22.0/DesmosPlus-Extension-v1.22.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.22.0) |
| v1.21.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.21.0/DesmosPlus-Extension-v1.21.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.21.0) |
| v1.20.1 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.20.1/DesmosPlus-Extension-v1.20.1.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.20.1) |
| v1.20.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.20.0/DesmosPlus-Extension-v1.20.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.20.0) |
| v1.19.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.19.0/DesmosPlus-Extension-v1.19.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.19.0) |
| v1.18.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.18.0/DesmosPlus-Extension-v1.18.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.18.0) |
| v1.17.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.17.0/DesmosPlus-Extension-v1.17.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.17.0) |
| v1.16.2 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.16.2/DesmosPlus-Extension-v1.16.2.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.16.2) |
| v1.16.1 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.16.1/DesmosPlus-Extension-v1.16.1.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.16.1) |
| v1.16.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.16.0/DesmosPlus-Extension-v1.16.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.16.0) |
| v1.15.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.15.0/DesmosPlus-Extension-v1.15.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.15.0) |
| v1.14.1 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.14.1/DesmosPlus-Extension-v1.14.1.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.14.1) |
| v1.14.0 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.14.0/DesmosPlus-Extension-v1.14.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.14.0) |
| v1.13.0 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.13.0/DesmosPlus-Extension-v1.13.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.13.0) |
| v1.12.1 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.12.1/DesmosPlus-Extension-v1.12.1.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.12.1) |
| v1.12.0 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.12.0/DesmosPlus-Extension-v1.12.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.12.0) |
| v1.11.1 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.11.1/DesmosPlus-Extension-v1.11.1.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.11.1) |
| v1.11.0 | Yes | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.11.0/DesmosPlus-Extension-v1.11.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.11.0) |
| v1.10.0 | No | [Download ZIP](https://github.com/DesmosPlus/desmosplus/releases/download/v1.10.0/DesmosPlus-Extension-v1.10.0.zip) | [Release notes](https://github.com/DesmosPlus/desmosplus/releases/tag/v1.10.0) |

The complete release history is available on the
[GitHub Releases page](https://github.com/DesmosPlus/desmosplus/releases).

## Release Process

Starting with the next version after v1.15.0, every version must provide a
standard ZIP without DesModder. A separately named GitHub ZIP with DesModder
should also be provided when available, using the same version and a separate
row in the table above. The optional package must not block the standard
release.

Maintainers must follow the complete
[dual-edition release process](docs/extension-release-process.md) before
changing the version or publishing a tag.

Every release ZIP includes `DESMOSPLUS-BUILD.txt`. DesmosPlus-owned HTML, CSS,
and JavaScript also carry a comment with the package version and source URL.
Files under `vendor/` retain their upstream attribution and are not stamped as
DesmosPlus code.

## Screenshots

These reference screenshots were captured from v1.14.1 and may show its
DesModder Settings tab. Version 1.22.0 uses Settings for dark mode and autosave,
adds separate 3D and Functions tabs, and does not include DesModder.

| 1. Graph transfer | 2. SVG import |
| --- | --- |
| ![DesmosPlus Graph transfer tab](docs/screenshots/extension/01-graph.png) | ![DesmosPlus SVG import tab](docs/screenshots/extension/02-svg.png) |

| 3. DesAudify Auto | 4. DesAudify conversion menu |
| --- | --- |
| ![DesAudify Auto conversion mode](docs/screenshots/extension/03-desaudify-auto.png) | ![DesAudify conversion mode menu](docs/screenshots/extension/04-desaudify-conversion-menu.png) |

| 5. DesAudify MAX | 6. DesAudify Custom |
| --- | --- |
| ![DesAudify MAX mode with flame frame](docs/screenshots/extension/05-desaudify-max.png) | ![DesAudify Custom conversion controls](docs/screenshots/extension/06-desaudify-custom.png) |

## Installation

### Install a Release ZIP

1. Download the latest package from the [Downloads](#downloads) table.
2. Create a permanent folder for the extension, such as
   `DesmosPlus Extension`.
3. Extract the ZIP into that folder. `manifest.json` must be directly inside
   the selected folder, not inside another nested directory.
4. Open the browser's extension manager:
   - Chrome and Chromium: `chrome://extensions`
   - Edge: `edge://extensions`
   - Brave: `brave://extensions`
5. Enable **Developer mode**.
6. Select **Load unpacked** and choose the extracted extension folder.
7. Pin **DesmosPlus** from the browser's extensions menu.
8. Open a supported Desmos calculator and select the DesmosPlus toolbar icon.

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

Using the same folder keeps the unpacked extension identity stable.

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

The **SVG** section supports 2D Graphing and Geometry. The **3D** section
supports 3D Graphing. The **DesAudify** section supports 2D Graphing.

The hosted DesmosPlus 2D calculator at
`https://desmosplus.pages.dev/2dcalculator` is also recognized as a supported
graph page.

## Graph Pop-Out

When DesmosPlus is opened on a website that is not a supported calculator, the
popup offers two options:

- **Open graph window** opens the hosted DesmosPlus 2D calculator in a separate
  1200x800 browser window.
- **Show graph on this page** places a smaller calculator window on the current
  website. Drag its title bar to move it and drag the bottom-right handle to
  resize it. Use the minus button or press Escape to minimize it into the
  floating DesmosPlus icon, then select that icon to restore the same graph,
  position, and size. The close button removes it completely.

Open DesmosPlus again from the separate graph window to use Graph, SVG, and
DesAudify tools on that calculator. Browser-protected pages and websites with
restrictive frame policies may block the in-page overlay; use the separate
window on those pages. Neither option adds a background process or extension
permission.

## Dark Mode

Open **Settings** and switch **Dark mode** on or off. The preference is stored
locally by the extension and applies immediately across open supported Desmos
and hosted DesmosPlus pages. It remains selected after a reload or browser
restart.

Dark mode uses packaged CSS and does not download a theme or send the setting
anywhere. Turning it off removes the DesmosPlus theme flag and restores the
page's normal appearance.

## Autosave

Open **Settings** and switch **Autosave** on to request a save every 60 seconds.
Autosave is off by default and applies only to saved official Desmos 2D graphs
opened while signed in. Unsaved calculator pages, signed-out sessions, and
graphs whose Save control is already disabled are skipped.

The setting takes effect immediately and remains selected after a browser
restart. DesmosPlus sends the normal platform save shortcut to the page; it does
not inspect credentials or retain graph contents in extension storage. Desmos's
native save may store the graph in the signed-in Desmos account under Desmos's
own privacy policy.

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

Import replaces the active calculator state. It is not saved or published unless
the user saves it or Autosave is enabled on an existing signed-in graph.

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

## 3D OBJ Import and Starter Ticker

Open the official Desmos 3D Graphing Calculator, select **3D** in DesmosPlus,
choose an OBJ mode, and select **Import OBJ**.

| Mode | Result | Limit |
| --- | --- | --- |
| Direct | One editable `triangle` expression for every triangulated face | 2,500 triangles |
| Optimized | Indexed vertex and face lists with vectorized `triangle` expressions | 50,000 triangles |
| MAX | The same indexed representation as Optimized | No DesmosPlus file-size or triangle cap |

Optimized mode is the default and uses substantially fewer Desmos expressions.
Large optimized and MAX models are split into bounded chunks so no single
vertex list or surface expression grows without limit. Direct mode is useful
when every face needs to remain individually editable.

MAX displays the purple Flame Wrap frame used by other unrestricted tools and
changes the MAX control to blue while it is hovered or keyboard-focused. Its
warning must be accepted before choosing a file. MAX removes the extension's
15 MB file-size and 50,000-triangle safeguards; it does not remove browser,
memory, computer, or Desmos evaluator limits.

The importer supports OBJ vertex and face records, slash-separated face
references, negative indexes, triangles, quads, and polygon faces. Quads and
polygons are triangulated with a fan. Materials, textures, normals, smoothing
groups, curves, and scene transforms are not imported. OBJ files are processed
locally and must use finite coordinates within one billion units. Direct and
Optimized mode files must be 15 MB or smaller; MAX removes that extension cap.

Select **Add ticker** to create a collapsed **Desmos+ Starter Ticker** folder
with `t_elapsed`, an update function, and a native Desmos ticker. The value is
measured in seconds and can drive model animation. If the graph already has a
different ticker, DesmosPlus leaves it unchanged. **Remove ticker** deletes
only the DesmosPlus-owned folder and ticker.

## Function Library

1. Open the official Desmos 2D Graphing Calculator.
2. Open DesmosPlus and select **Functions**.
3. Select **Add** beside one definition, or select **Add library** for all 14.
4. Open the **Desmos+ Functions** folder to inspect or edit the definitions.

The library adds normalized sinc, clamp, linear interpolation, fractional part,
hypotenuse, logistic, sign, decimal-place rounding, versine, haversine, range
wrapping, and the inverse hyperbolic sine, cosine, and tangent. Calls use Desmos
subscript names, such as `f_{sinc}(x)` and `f_{clamp}(x,a,b)`.

The Functions tab includes a scrollable reference for all 14 definitions. Each
entry pairs a bundled, path-based LaTeX SVG with a readable plain-text formula.
The images are generated locally by `scripts/generate-function-equations.py`
and require no network or runtime math-rendering dependency.

Each row can inject its function independently. Repeating an individual add
replaces only that DesmosPlus-owned definition; it does not duplicate the
function, remove other library entries, or change unrelated graph expressions.

Every definition is an ordinary Desmos expression. It is saved and exported as
part of the graph, can be edited directly, and does not require a runtime patch.
Selecting **Add library** again replaces the DesmosPlus-owned definitions with
the current set. **Remove library** deletes only that folder and its contents.

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

## Permissions and Privacy

| Permission | Purpose |
| --- | --- |
| `activeTab` | Grants temporary access to the current tab after the user opens the extension. |
| `scripting` | Injects packaged code that reads or writes calculator state for graph, SVG, OBJ, ticker, function-library, and audio actions. |
| `storage` | Stores the local dark-mode and autosave on/off preferences. |
| Desmos site access | Runs the packaged dark-mode files on supported pages and the autosave timer on saved official 2D graphs. |

Selected graph, SVG, OBJ, schema, and audio files are processed locally and are
not uploaded by DesmosPlus. Graph transfer, SVG and OBJ conversion, ticker and
function-library changes, and DesAudify run only after a user action.

## File Formats and Limits

| Input | Support |
| --- | --- |
| `.desmos` | Preferred wrapped graph format with product metadata |
| `.desmosplus.json` | Legacy wrapped graph format |
| `.json` | Raw Desmos state or wrapped graph state |
| `.svg` | Static vector import, up to 1 MB |
| `.obj` | 3D geometry import; Direct and Optimized cap files at 15 MB, Direct allows 2,500 triangles, Optimized allows 50,000, and warned MAX removes those extension caps |
| Audio | Browser-decodable audio; standard modes allow 100 MB and five minutes, while MAX removes those extension caps |
| `.zip` | DesAudify-only player UI and individually copyable `.desmos` shard graphs |
| `.txt` | DesAudify schemas, up to 6 MB and 500 non-empty equations per file |

The browser's media decoder determines which audio codecs can be opened.

The public [extension overview](extension.html), [privacy policy](privacy.html),
and [support page](support.html) are included with the DesmosPlus site. The
Chrome Web Store fields, permission justifications, reviewer instructions, and
prepared listing graphics are in the
[publishing kit](docs/chrome-web-store/PUBLISHING.md).

## Troubleshooting

### Buttons Are Disabled

Open a supported page on `desmos.com`, wait for the calculator to finish
loading, and reopen the extension. SVG requires 2D Graphing or Geometry.
OBJ import and the starter ticker require 3D Graphing. DesAudify requires 2D
Graphing.

### An Update Is Not Visible

Open `chrome://extensions`, find DesmosPlus, and select **Reload**. Close and
reopen the extension popup afterward.

### A Graph Imports but Is Not Saved

Injection changes only the current calculator state. Select Desmos **Save**, or
enable Autosave after opening an existing signed-in graph, to store it in the
account or graph library.

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
node --check extension/obj-import.js
node --check extension/desaudify-audio.js
node --check extension/desaudify-audio-worker.js
node --check extension/desaudify-export.js
node --check extension/desaudify-page.js
node --check extension/flame-effects.js
node --check extension/dark-mode.js
node --check extension/autosave.js
node --check extension/popup.js
node --check extension/vendor/flame-wrap.js
node -e 'JSON.parse(require("fs").readFileSync("extension/manifest.json", "utf8"))'
```

Update the bundled files directly, then package the extension:

```sh
node scripts/package-extension.mjs
```

The packager requires the standard `zip` and `unzip` commands.

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
| `extension/dark-mode.js` | Stored dark-mode preference and live page toggle |
| `extension/dark-mode.css` | Page-scoped Desmos dark theme |
| `extension/autosave.js` | Opt-in 60-second save timer for saved official 2D graphs |
| `extension/flame-effects.js` | DesAudify and OBJ MAX Flame Wrap lifecycle and colors |
| `extension/vendor/flame-wrap.js` | Pinned Canvas UI Flame Wrap WebGL engine |
| `extension/svg-import.js` | Static SVG validation and equation conversion |
| `extension/obj-import.js` | Local OBJ parsing and direct, optimized, or MAX 3D expression generation |
| `extension/equations/*.svg` | Bundled path-based equation images for the Functions reference |
| `scripts/generate-function-equations.py` | Rebuilds the Functions reference SVGs from LaTeX source |
| `extension/desaudify-audio.js` | Audio decoding and worker orchestration |
| `extension/desaudify-audio-worker.js` | FFT analysis and schema generation |
| `extension/desaudify-export.js` | DesAudify shard graph and local ZIP generation |
| `extension/desaudify-page.js` | Main-world player and paced schema injection bridge |
| `extension/desaudify-template.json` | Bundled DesAudify player state |
| `scripts/package-extension.mjs` | Creates a clean versioned extension ZIP |

## Known Limitations

- The extension is installed unpacked and is not published to a browser store.
- A ZIP-installed or unpacked extension does not update itself; install each
  new DesmosPlus release manually.
- Graphs injected into Desmos remain temporary until saved through Desmos.
- Desmos page changes can require updates to calculator detection or injection.
- Very large SVG, OBJ, or audio conversions remain limited by browser memory
  and Desmos evaluator throughput.
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

The OBJ import workflow is adapted from
[DesLoader](https://github.com/Mr-milky-way/Desloader). Its MIT license is
included in [`extension/DESLOADER-LICENSE`](extension/DESLOADER-LICENSE).

Desmos is a trademark of Desmos Studio PBC. See the main
[`README.md`](README.md) for the repository's license and third-party notice.
