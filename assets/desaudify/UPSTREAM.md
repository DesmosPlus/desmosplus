# DesAudify integration

DesmosPlus includes a pinned copy of the DesAudify player template for local
and extension-based equation injection.

- Upstream: https://github.com/whitecaplol/DesAudify
- Upstream commit: `e41972eb517d0a538e53dc5c4146c21264d45924`
- Template graph: https://www.desmos.com/calculator/dv7amzb7vs
- Template version: `2a09e690-9063-11f1-b3fd-e9e42ab4df27`
- Retrieved: 2026-08-05
- License: Apache License 2.0; see `LICENSE`

DesmosPlus adds validation, file selection, folder naming, main-world injection,
and paced equation batches around the insertion workflow from upstream
`insert.js`. The player helpers and generated processing equations are aligned
with the completed Society audio graph examples, including joined tone chunks
and counters initialized to `-1`. The direct chunk extractor form and automatic
ticker start were verified against `Society-Audio-Example.desmos`.
The bundled player is a song-neutral copy of that example's visual state, with
the same viewport, background, visualizer, label geometry, and click controls.

The extension also includes a browser port of the schema-generation format. It
uses local Web Audio decoding and a worker-based FFT peak pass in place of the
Python CLI's `ssqueezepy` multi-resolution transform, then applies DesAudify's
frequency, gain, frame-packing, chunking, and processing-schema formulas. The
generated data is split into shard-sized folders and inserted as ordered chunk
pairs with byte-scaled pauses. The vendored FFT implementation is `fft.js`
4.0.4 under the MIT license.
