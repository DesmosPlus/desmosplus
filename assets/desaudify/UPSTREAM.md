# DesAudify integration

DesmosPlus includes a pinned copy of the DesAudify player template for local
and extension-based equation injection.

- Upstream: https://github.com/whitecaplol/DesAudify
- Upstream commit: `4ddd49a65851701615f5ec01c0c901516fa23433`
- Template graph: https://www.desmos.com/calculator/p8gb4nnc5y
- Template version: `47bf9190-be89-11f1-9795-8102531864d2`
- Retrieved: 2026-10-03
- License: Apache License 2.0; see `LICENSE`

DesmosPlus adds validation, file selection, folder naming, main-world injection,
and paced equation batches. The updated player uses BigList 2 callable tone-data
and timing arrays. The player is song-neutral, starts paused, and retains the
DesmosPlus play/restart hints. A logical `and` condition is represented as nested
piecewise conditions for compatibility with the older bundled calculator.

The extension also includes a browser port of the schema-generation format. It
uses local Web Audio decoding and a worker-based FFT peak pass in place of the
Python CLI's `ssqueezepy` multi-resolution transform, then applies DesAudify's
frequency, gain, two-note packing, timing-pointer, and processing-schema formulas.
Official Desmos imports use bounded matrix fragments. The older website and
portable downloads use list-backed fragments with the same callable interface.
Generated data is split into shard-sized folders and inserted in paced batches.
The vendored FFT implementation is `fft.js`
4.0.4 under the MIT license.
