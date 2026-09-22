# Test Versions

Website-only assessment calculators imported from `PagePack-2026-09-22`.
The 143 captured assessment URLs resolve to 141 paths across 60 tests, states,
and territories. Quebec also includes English and French links. Standard
calculators remain on the existing homepage.

`catalog.json` contains the source URLs and captured assessment names.
`../testing/` preserves the original routing needed to select each assessment's
configuration. Shared scripts, styles, embedded fonts, and language data live
in `runtime/`, deduplicated by content. The captured analytics loader and error
reporting startup are omitted. Language query selection is enabled on the
website host; assessment restrictions are not modified.

These are dated practice copies, not approved exam software or a guarantee of
current assessment rules. Original third-party notices remain in the bundles.

## Refresh the Capture

From the repository root, with Node.js 22 or newer:

```sh
npm install --prefix /tmp/desmos-pagepack-tools acorn@8 parse5@8
NODE_PATH=/tmp/desmos-pagepack-tools/node_modules node scripts/import-test-pages.mjs /path/to/PagePack
node scripts/serve.mjs
```

No build step is needed for deployment. Publish the repository's static files,
including `testing/` and `test-versions/`.

On Cloudflare Pages, deploy the root `functions/` directory as Pages Functions
alongside the static site (using Git integration or Wrangler). `/api/region`
returns Cloudflare's IP-derived region for the search placeholder, with no
cookies or application storage and a private, non-cacheable response.
`_routes.json` limits Function invocations to that endpoint. Static-only hosts
and the local Node server use the fallback: `Search SAT, your state, ACT`.

The extension only links to `https://desmosplus.pages.dev/test-versions/` in a
new tab. Its local-site builder does not copy either directory and rewrites
the bundled homepage's directory link to the hosted URL. Do not move these
files under `assets/`, which the extension packages in full.
