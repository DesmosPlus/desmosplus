# DesmosPlus Dual-Edition Release Process

This is the local reminder for every DesmosPlus extension version after
v1.15.0. It keeps the required Chrome Web Store package narrow while preserving
an optional DesModder package for GitHub users when that build is available.

## Release Invariant

One extension version produces one Git tag and one GitHub release. The standard
ZIP without DesModder is mandatory. The DesModder ZIP is preferred but optional
and must not block the standard release.

| Edition | DesModder | Required asset name | Distribution |
| --- | --- | --- | --- |
| Standard | No | `DesmosPlus-Extension-vX.Y.Z.zip` | GitHub and Chrome Web Store |
| DesModder | Yes | `DesmosPlus-Extension-with-DesModder-vX.Y.Z.zip` | GitHub only |

The tag and release title must both be exactly `vX.Y.Z`. When both assets are
published, both manifests must report the same `X.Y.Z` version. The Downloads
table in `extension.md` must have one row per available asset so users can see
which package includes DesModder.

Version v1.15.0 predates this rule and contains only the standard asset. Do not
retroactively relabel an older ZIP as a current DesModder edition.

## Edition Boundaries

### Standard Edition

The standard edition is built from `extension/` and must contain Graph, SVG,
and DesAudify. It must not contain:

- DesModder or WakaTime source, text, paths, or web-accessible resources.
- A DesModder Settings tab or auto-injection controls.
- A background worker or DesModder content script.
- `storage`, `declarativeNetRequest`, Desmos host permissions, or WakaTime host
  permissions.

Its manifest permissions are limited to `activeTab` and `scripting` unless a
future user-facing standard feature is documented and approved for the Chrome
Web Store edition.

### DesModder Edition

The DesModder edition starts from the same version of the standard source and
adds only the tracked DesModder integration layer. It must preserve every core
feature and add:

- The DesModder Settings tab and manual or automatic injection controls.
- The packaged loader and background support required by DesModder.
- The latest validated stable DesModder Chrome runtime and its license,
  metadata, source release, and archive checksum.
- Only the additional permissions required by that bundled integration.

Executable DesModder code must be bundled at build time. The installed
extension must not download or execute remote code.

## Current Tooling Status

`scripts/package-extension.mjs` currently builds and rejects contamination in
the standard edition. `scripts/update-desmodder.mjs` can retrieve and validate
the latest stable upstream DesModder runtime, but a separate variant packager
has not yet been implemented.

When a current DesModder edition is prepared, add and validate
`scripts/package-extension-desmodder.mjs`. It should build from the same
standard source version in temporary staging, add the integration without
modifying the standard tree, and write
`dist/DesmosPlus-Extension-with-DesModder-vX.Y.Z.zip`.

If that packager or optional edition is not ready, publish the verified standard
asset on time and state that the DesModder edition is unavailable for that
version.

## Local Working Files

Keep reusable, untracked release material under:

```text
docs/chrome-web-store/local-assets/releases/vX.Y.Z/
```

That ignored folder can hold copies of every available ZIP, SHA-256 files,
screenshots, manual test notes, and Chrome Web Store drafts. Release source and
required licenses must remain tracked in the repository; the ignored folder is
not a source of truth.

## Required Checks

Run these checks for the mandatory standard edition and repeat the applicable
checks for the optional DesModder edition when it is published:

1. Parse each available `manifest.json` and confirm the intended `X.Y.Z`
   version.
2. Run `node --check` on all first-party JavaScript used by that edition.
3. Load each available edition unpacked in a separate browser profile.
4. Test Graph export and import on a supported official Desmos page.
5. Test SVG import on the 2D Graphing Calculator.
6. Test DesAudify Auto import with a short non-private audio file.
7. Open every popup tab and verify keyboard and pointer controls.
8. Inspect every ZIP member list for nested roots, `.DS_Store`, `__MACOSX`, and
   embedded ZIP files.
9. Confirm `manifest.json` and `DESMOSPLUS-BUILD.txt` are at every ZIP root.
10. Confirm first-party code is watermarked and third-party files are not.
11. Scan the standard ZIP for `desmodder` and `wakatime`; it must return no
    filenames or packaged text.
12. When built, verify the DesModder ZIP contains its loader, background
    support, runtime, metadata, and license.
13. Compute and record a SHA-256 checksum for every published ZIP.

MAX mode is intentionally resource intensive and does not need to be used for
every release smoke test. Its menu, warning, and disabled-by-default behavior
still need visual verification.

## Publication Order

1. Finish source changes and increment the shared manifest version.
2. Add the mandatory standard row to `extension.md`, marked **No** in the
   DesModder column. Add a **Yes** row when the optional asset is available.
3. Build and verify the standard ZIP, then build and verify the DesModder ZIP
   when available.
4. Commit and push the validated source and documentation.
5. Create and push tag `vX.Y.Z` at the same commit.
6. Create one GitHub release titled exactly `vX.Y.Z`.
7. Upload the required standard ZIP and the optional DesModder ZIP when
   available.
8. Put every published SHA-256 value and a short edition explanation in the
   release body. Explicitly note when no DesModder edition is available.
9. Download every published asset back from GitHub and verify its checksum,
   manifest, member list, and DesModder inclusion status independently.
10. Confirm the release is the latest non-draft, non-prerelease release and the
    repository worktree is clean.

If the standard package fails after publication, remove or replace the release
before directing users to it. If only the optional DesModder package fails,
remove that asset, keep the valid standard release available, and explain the
optional package status in the release notes.

## Chrome Web Store Boundary

Only `DesmosPlus-Extension-vX.Y.Z.zip` may be submitted to the Chrome Web Store.
Store screenshots, permission declarations, privacy answers, and reviewer
instructions must describe the standard edition only. Keep store-specific work
in [`chrome-web-store/PUBLISHING.md`](chrome-web-store/PUBLISHING.md).
