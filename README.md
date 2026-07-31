# DesmosPlus

Seven calculator pages recovered from local captures and packaged with their
scripts, styles, fonts, and images. The pages do not load third-party scripts or
send calculator data to external services.

## Included Pages

- 2D Calculator: `/2dcalculator.html`
- 3D Calculator: `/3dcalculator.html`
- Geometry: `/geometry.html`
- Matrix: `/matrix.html`
- Notebook: `/notebook.html`
- Four Function: `/fourfunction.html`
- Scientific: `/scientific.html`

## Run Locally

Node.js 18 or newer is recommended. No dependencies need to be installed.

```sh
git clone https://github.com/loleksyuk/desmosplus.git
cd desmosplus
node scripts/serve.mjs
```

Open <http://localhost:8765>.

To use another port:

```sh
PORT=3000 node scripts/serve.mjs
```

Keep the local server and this folder on the computer to use the calculators
without an internet connection.

## Deploy

Use any Node.js hosting service that can run a command from the repository.

| Setting | Value |
| --- | --- |
| Build command | None |
| Start command | `node scripts/serve.mjs` |
| Port | Supplied automatically through `PORT` |
| Publish directory | Not used |

### Render

1. Create a new Web Service and connect `loleksyuk/desmosplus`.
2. Select the Node runtime.
3. Leave the build command empty.
4. Set the start command to `node scripts/serve.mjs`.
5. Deploy the service.

### Railway

1. Create a project from `loleksyuk/desmosplus`.
2. Set the start command to `node scripts/serve.mjs`.
3. Generate a public domain for the service.

### VPS or Local Network

Clone the repository on the server, then run:

```sh
PORT=8080 node scripts/serve.mjs
```

Put a reverse proxy such as Caddy or Nginx in front of port `8080` when exposing
the service publicly.

## Saved Calculators

The Save button stores calculator states in browser cookies, with local storage
as a backup. Saves are grouped by category and can be opened, edited, and saved
again.

Saved calculators stay in that browser and website address. They do not sync
between devices. Changing the deployed domain creates a separate browser
storage area, while redeploying to the same domain preserves existing saves.

## Chrome Extension

The extension exports the raw state of a Desmos graph into a
`.desmosplus.json` file. Expressions, folders, sliders, tables, regressions,
notes, settings, and product-specific state remain in the file.

Library also accepts raw Desmos state JSON containing `graph` and
`expressions.list`. Raw files import into the calculator currently open.

Install it in Chrome or another Chromium browser:

1. Open `chrome://extensions`.
2. Enable Developer mode.
3. Select Load unpacked.
4. Select the `extension` folder from this repository.

Export and import a graph:

1. Open a calculator on `desmos.com` and wait for it to load.
2. Open DesmosPlus Exporter and select Export graph.
3. Open the matching calculator in DesmosPlus.
4. Open Library and select Import graph file.
5. Select the exported `.desmosplus.json` file.

The importer automatically switches to the matching DesmosPlus calculator and
opens the imported state.

## Rebuild from the HAR Files

Place the original HAR files in the paths expected by
`scripts/build-pages-from-har.mjs`, then run:

```sh
node scripts/build-pages-from-har.mjs
```

The rebuild script regenerates the calculator HTML and local response stubs.
