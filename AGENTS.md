# Repository Instructions

## Extension Releases

Read [`docs/extension-release-process.md`](docs/extension-release-process.md)
before changing `extension/manifest.json` or publishing an extension release.

Starting with the next version after v1.15.0, every DesmosPlus extension version
must publish the standard ZIP without DesModder. It should also publish a
separately identified DesModder ZIP under the same GitHub release when that
edition is available:

- Standard edition without DesModder.
- DesModder edition with the optional bundled integration.

When both editions are published, they must use the same `X.Y.Z` manifest
version, preserve the complete Graph, SVG, and DesAudify feature set, extract
with `manifest.json` at the ZIP root, include the release watermark, and pass
their edition-specific checks.

Never block or delay the standard release because the optional DesModder
edition is unavailable. Record the missing optional edition in the release
notes and version table. The Chrome Web Store may receive only the standard
edition.
