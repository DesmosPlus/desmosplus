# Chrome Web Store Publishing Kit

This document contains the files, listing text, privacy answers, reviewer steps,
and submission checklist for publishing Desmos+ in the Chrome Web Store.

Google's dashboard and policies can change. Recheck the linked official pages
before each submission.

## Ready Files

Reusable draft screenshots and other local submission materials can be kept in
`docs/chrome-web-store/local-assets/`. That directory is intentionally ignored
by Git so each release can reuse working files without publishing drafts or
account-specific material.

| Item | Repository path |
| --- | --- |
| Upload package | `../../dist/DesmosPlus-Extension-v1.16.1.zip` |
| SHA-256 | `3d4baf33029d0e6bea89ee873dd4f81c0090c78f249f493c17bd29f1d6df51fb` |
| Store icon | `assets/icon-128.png` |
| Required small promo tile | `assets/small-promo-440x280.png` |
| Optional marquee tile | `assets/marquee-1400x560.png` |
| Store screenshots | `local-assets/store-edition-screenshots/` (local, ignored by Git) |
| Public extension page | `/extension.html` |
| Public privacy policy | `/privacy.html` |
| Public support page | `/support.html` |

> [!WARNING]
> Do not upload v1.11.0 through v1.14.1 to the Chrome Web Store. Those releases
> contain the GitHub DesModder integration. Use v1.16.1, which excludes
> DesModder, its Settings tab, background loader, WakaTime access, and related
> permissions.

## Account Setup

1. Register a Chrome Web Store developer account and pay Google's one-time
   registration fee.
2. Enable 2-Step Verification on the publishing Google account. Chrome Web
   Store policy requires it for publishing and updates.
3. Complete the developer display name, verified contact email, and account
   information in the dashboard.
4. Deploy this repository to a stable public HTTPS origin before submission.
5. Confirm these pages work without signing in:
   - `https://desmosplus.pages.dev/extension`
   - `https://desmosplus.pages.dev/privacy`
   - `https://desmosplus.pages.dev/support`

Only the account owner can complete payment, 2-Step Verification, contact-email
verification, dashboard declarations, and the final **Submit for Review** action.

## Package Upload

Upload `DesmosPlus-Extension-v1.16.1.zip` after completing the unpacked browser
tests. It is a Manifest V3 extension with `manifest.json` at the archive root.

Before uploading, load the matching `extension/` directory unpacked in Chrome
and test every user-facing feature. Manifest metadata cannot be edited in the
dashboard. Any package change requires a higher manifest version and a new ZIP.

## Store Listing

### Product Details

| Field | Value |
| --- | --- |
| Name | From package: `Desmos+` |
| Summary | From package: `Transfer graphs, make songs in Desmos, convert SVGs into Desmos graphs, and so much more!` |
| Category | `Education` |
| Language | `English` |
| Official URL | `None` |
| Homepage URL | `https://desmosplus.pages.dev/extension` |
| Support URL | `https://desmosplus.pages.dev/support` |
| Mature content | `Off` |

### Detailed Description

Paste this as plain text:

```text
Desmos+ adds graph transfer, SVG conversion, and audio creation tools directly to supported Desmos calculators.

KEY FEATURES

• Graph transfer
Export and import complete Desmos graphs while preserving expressions, folders, tables, sliders, notes, viewport settings, and supported animations.

• Native .desmos files
Save graphs in a portable format and reopen them later in Desmos+ or a compatible calculator.

• Graph pop-out
Open a separate DesmosPlus 2D calculator window or use a smaller, resizable in-page calculator that minimizes into a floating DesmosPlus icon.

• SVG-to-equation conversion
Convert static SVG artwork into editable Desmos polygons, points, and equations.

• DesAudify audio tools
Turn audio files into playable Desmos graphs using automatic, high-quality, MAX, or fully custom conversion settings.

• Downloadable audio shards
Export large audio projects as organized shard ZIPs that can be added to a graph using Desmos's native graph-pasting tools.

• Multiple calculator types
Transfer graphs across supported Desmos Graphing, Geometry, 3D, Notebook, Matrix, Scientific, and Four Function calculators.

• Local processing
Graph, SVG, and audio processing runs locally in your browser.

PRIVACY

Desmos+ does not sell user data, run advertising analytics, or send selected graph, SVG, or audio files to the developer. Its executable code is included in the extension package and is not downloaded remotely at runtime.

Desmos+ is an independent project. It is not affiliated with, endorsed by, or maintained by Desmos Studio PBC.
```

Do not describe Desmos+ as an official Desmos extension. Keep the listing free
of repetitive keywords, unsupported performance claims, and anonymous user
testimonials.

## Graphic Assets

Upload the graphic assets in this order:

| Dashboard field | File |
| --- | --- |
| Store icon | `assets/icon-128.png` |
| Screenshot 1 | `local-assets/store-edition-screenshots/01-graph-transfer-1280x800.png` |
| Screenshot 2 | `local-assets/store-edition-screenshots/02-svg-equations-1280x800.png` |
| Screenshot 3 | `local-assets/store-edition-screenshots/03-desaudify-auto-1280x800.png` |
| Screenshot 4 | `local-assets/store-edition-screenshots/04-desaudify-max-menu-1280x800.png` |
| Screenshot 5 | `local-assets/store-edition-screenshots/05-desaudify-custom-1280x800.png` |
| Small promo tile | `assets/small-promo-440x280.png` |
| Marquee promo tile | `assets/marquee-1400x560.png` |

The screenshots are opaque 1280x800 PNGs captured from the v1.16.1 standard
edition. The small and marquee promotional images are opaque 24-bit PNGs at
the exact dashboard dimensions. Do not upload the older reference screenshots
that show Settings, because they depict the GitHub edition with DesModder.

The global promotional YouTube video is optional. Leave it blank unless an
accurate public demo of the current standard edition is available and it does
not reveal private graphs, files, or account data.

## Privacy Practices

### Single Purpose

```text
Enhance supported Desmos calculators with user-requested graph transfer and local SVG and audio conversion.
```

All listed features operate on supported Desmos calculator content and should
be presented as parts of this one purpose.

### Permission Justifications

**activeTab**

```text
Desmos+ needs temporary access to the active tab after the user opens the extension so a requested graph export, graph import, SVG import, audio conversion, or in-page graph overlay can run on that tab. It does not use activeTab for background browsing surveillance.
```

**scripting**

```text
Desmos+ injects packaged functions into an active supported calculator to call its getState, setState, and expression APIs for user-requested graph, SVG, and audio operations. On an unrelated website it can inject the packaged graph-overlay interface after the user selects Show graph on this page. No remotely downloaded script is executed with extension privileges.
```

### Remote Code

Select:

```text
No, I am not using remote code.
```

All executable extension logic, including the overlay, DesAudify, FFT, and
Flame Wrap code, is inside the submitted package. The optional graph window and
overlay display the documented DesmosPlus calculator as a separate cross-origin
web page without extension API access; no remote script is imported into or
executed by the extension.

### Data Types

Google requires disclosure even when data is processed or stored only on the
device. Select the following categories conservatively:

- **Website content:** Desmos calculator state and user-selected graph, SVG,
  audio, and schema content.
- **Web history:** the active supported Desmos URL used to identify the
  calculator and record graph source information.

For data usage, select **App functionality**. Do not select advertising,
personalization, analytics, or unrelated purposes. Certify only statements that
remain true for the submitted package, including that data is not sold, is not
used for unrelated purposes, is not used for creditworthiness or lending, and
is handled according to the Chrome Web Store User Data Policy.

### Privacy Policy URL

```text
https://desmosplus.pages.dev/privacy
```

The deployed policy must match the submitted extension. Update both the policy
and dashboard disclosures before publishing any future data-handling change.

## Distribution

Recommended initial settings:

- Visibility: **Public**, or **Unlisted** for a limited first release.
- Pricing: **Free**.
- Regions: all supported regions unless there is a specific legal reason to
  limit distribution.
- Publish timing: defer automatic publishing if a final manual launch check is
  desired after approval.

## Reviewer Test Instructions

Test instructions are optional, but these are recommended because Desmos+ has
several calculator-specific sections. No account credentials are required.

```text
1. Open https://www.desmos.com/calculator and wait for the calculator to finish loading.
2. Open Desmos+. In Graph, enter a name and category, then select Export. Confirm that a .desmos file downloads.
3. Select Import and choose that downloaded .desmos file. Confirm that the graph state loads.
4. In SVG, select Import SVG as equations and choose a small static SVG. Confirm that a named folder of editable equations is added.
5. In DesAudify, use a short browser-decodable audio file and Auto mode. Confirm that conversion finishes and equations are injected. MAX mode is intentionally resource intensive and is not required for review.
```

## Final Submission Checklist

- [ ] Developer account registered and registration fee paid.
- [ ] 2-Step Verification enabled.
- [ ] Developer contact email verified and monitored.
- [ ] Public HTTPS homepage, privacy, and support pages deployed.
- [x] DesModder-free Web Store ZIP built and checksum recorded.
- [ ] ZIP tested through **Load unpacked** using the matching source version.
- [ ] Graph export and import tested on a supported Desmos page.
- [ ] SVG import tested.
- [ ] DesAudify Auto tested with a short non-private audio file.
- [ ] Listing description matches actual behavior.
- [ ] Icon, at least one screenshot, and small promotional tile uploaded.
- [ ] Category set to Education and language set to English.
- [ ] Permission justifications pasted accurately.
- [ ] Remote code set to No.
- [ ] Data types and App functionality use disclosed.
- [ ] Privacy policy URL entered.
- [ ] Distribution and publish timing reviewed.
- [ ] Reviewer instructions added.
- [ ] Third-party notices remain inside the uploaded package.
- [ ] Final item preview checked for spelling, image order, and independence disclaimer.
- [ ] Submitted for review.

## Package Choice

The repository-wide dual-edition rules are in
[`../extension-release-process.md`](../extension-release-process.md). This
Chrome Web Store guide applies only to the standard edition.

The current release choices are:

- **v1.16.1 Web Store edition:** Graph, pop-out, SVG, and DesAudify only, with
  the narrowest required permissions and no DesModder or WakaTime code.
- **Older GitHub editions:** v1.11.0 through v1.14.1 include DesModder. A future
  current-version DesModder build must be published as a clearly separate
  download.

Do not represent the GitHub DesModder edition as the package submitted to the
Chrome Web Store.

## Official References

- [Register a developer account](https://developer.chrome.com/docs/webstore/register)
- [Prepare an extension package](https://developer.chrome.com/docs/webstore/prepare)
- [Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish)
- [Complete the store listing](https://developer.chrome.com/docs/webstore/cws-dashboard-listing/)
- [Supply store images](https://developer.chrome.com/docs/webstore/images)
- [Fill out privacy fields](https://developer.chrome.com/docs/webstore/cws-dashboard-privacy/)
- [Chrome Web Store User Data FAQ](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq)
- [Manifest V3 requirements](https://developer.chrome.com/docs/webstore/program-policies/mv3-requirements)
- [Distribution settings](https://developer.chrome.com/docs/webstore/cws-dashboard-distribution/)
- [Reviewer test instructions](https://developer.chrome.com/docs/webstore/cws-dashboard-test-instructions)
