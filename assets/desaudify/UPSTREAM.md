# DesAudify integration

DesmosPlus includes a pinned copy of the DesAudify player template for local
and extension-based equation injection.

- Upstream: https://github.com/whitecaplol/DesAudify
- Upstream commit: `e41972eb517d0a538e53dc5c4146c21264d45924`
- Template graph: https://www.desmos.com/calculator/dv7amzb7vs
- Template version: `2a09e690-9063-11f1-b3fd-e9e42ab4df27`
- Retrieved: 2026-08-05
- License: Apache License 2.0; see `LICENSE`

The bundled template state is unchanged. DesmosPlus adds its own validation,
file selection, folder naming, and main-world injection around the equation
insertion workflow from upstream `insert.js`.
