# Native Desmos QR generator

## Integrated QR Editor

DesmosPlus v1.28.0 adds a **QR code** tab to the extension and a **QR code**
button to the website's 2D calculator. Enter text, choose dark and light colors,
and set the width in graph units. **Add QR folder** inserts one collapsed folder
without replacing other expressions. **Edit** reopens a saved QR folder;
**Update QR folder** changes only that folder. **New QR** creates a separate code.
The text and settings are stored in a note inside the folder and travel with
graph saves and exports. They are visible to anyone you share that graph with.

Integration checks: `node --test scripts/test-qr-code.cjs`. With the local
server running and Playwright, pngjs, and jsqr available, run
`node scripts/test-qr-browser.cjs`. Set `QR_EXTENSION_DIR` to an extracted
release and `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to a full Chrome executable to
include official-site injection and bundled offline-site checks.

The integrated generator uses the bundled Nayuki encoder, automatic versions
1-40 and mask selection, low error correction, and UTF-8 ECI for Unicode.
One code supports up to 2,953 ASCII bytes, 4,296 QR-alphanumeric characters,
or 7,089 digits. Unicode costs multiple bytes and its ECI header reduces the
available capacity. Oversized input is rejected, never truncated or split.
Longer codes are denser and need a larger display for reliable scanning.

The four-module quiet zone is always retained. Color choices must keep light
backgrounds and dark modules at least 4.5:1 apart; scanner compatibility still
depends on display size and conditions. Size includes the quiet zone. Turning
off **Fit graph to QR code** preserves the current viewport.

Unlike the original prototype below, this editor encodes text in JavaScript,
then inserts ordinary editable polygon equations. It does not recompute QR
encoding from character-code expressions inside Desmos. Use the editor to
change the message. Existing graph variables are untouched.

## Original Prototype

Open http://127.0.0.1:8765/qr-code/index.html while the repository server is running
(`node scripts/serve.mjs` from the repository root).

The graph encodes **1–17 ASCII characters** as a Version 1-L QR code. Change the
`A` list in Desmos to the character codes of your message. For example:

- `desmos.com`: `[100,101,115,109,111,115,46,99,111,109]` (default)
- `HELLO`: `[72,69,76,76,79]`
- `https://a.co`: `[104,116,116,112,115,58,47,47,97,46,99,111]`

Uppercase A–Z are 65–90; lowercase a–z are 97–122; digits 0–9 are 48–57.
Space is 32, period 46, slash 47, colon 58. Use printable ASCII for text; control
characters are valid bytes but may not display sensibly in scanner apps. Longer
messages, Unicode, and automatic version selection are not supported.

All data bits, padding, and Reed–Solomon parity are recalculated by native Desmos
expressions. The QR is a list of filled polygons, not an image. Fixed tables
supply the standard pattern locations and the binary error-correction transform.
Mask 0 is fixed rather than selected for minimum penalty. Keep the four-module
white border visible and the modules square when scanning.

## Files and import

- `qr-generator.desmos`: import using the existing DesmosPlus Library import.
- `qr-generator-state.json`: raw state for `Calc.setState(state)` integrations.
- `expressions.txt`: select and copy all lines, then paste into an empty official
  Desmos graph's expression list. Turn off axes/grid, use a square viewport
  covering −5 to 26 on both axes, and make both polygons fully opaque (white
  background first, black modules second). Hide the helper function `b`.
  The `.desmos` import and local launcher already include this styling.
- `index.html` / `load.js`: local launcher based on this repository's calculator
  shell; loads the graph once and does not participate in QR encoding.
- `build.py`: reproducible graph builder and 90-message module comparison check.

The standalone launcher does not autosave. Use the regular calculator's Library
import if you want the repository's save/export controls.

## Verification and source

Run `python3 qr-code/build.py` to rebuild and compare all 441 modules for 90
messages (lengths 1–17) against the reference encoder. Runtime checks also tested
native Desmos evaluation and decoded rendered screenshots with OpenCV.

The builder uses [Project Nayuki's QR Code generator](https://www.nayuki.io/page/qr-code-generator-library).
Its Python source is retained under `vendor/qrcodegen.py`, including its MIT
license. It is used only at build/test time. The local launcher uses the existing
captured Desmos bundle and remains subject to the repository's third-party notice.
