# Chrome Web Store Publishing Kit

This document contains the files, listing text, privacy answers, reviewer steps,
and submission checklist for publishing Desmos+ in the Chrome Web Store.

Google's dashboard and policies can change. Recheck the linked official pages
before each submission.

## Ready Files

| Item | Repository path |
| --- | --- |
| Upload package | Pending Web Store build without DesModder |
| Store icon | `assets/icon-128.png` |
| Required small promo tile | `assets/small-promo-440x280.png` |
| Optional marquee tile | `assets/marquee-1400x560.png` |
| Store screenshots | Pending recapture from the Web Store build |
| Public extension page | `/extension.html` |
| Public privacy policy | `/privacy.html` |
| Public support page | `/support.html` |

> [!WARNING]
> Do not upload the current v1.14.1 release ZIP to the Chrome Web Store. It
> contains the GitHub DesModder integration. The official Web Store package
> will be built later without DesModder, its Settings tab, background loader,
> WakaTime access, or related permissions.

## Account Setup

1. Register a Chrome Web Store developer account and pay Google's one-time
   registration fee.
2. Enable 2-Step Verification on the publishing Google account. Chrome Web
   Store policy requires it for publishing and updates.
3. Complete the developer display name, verified contact email, and account
   information in the dashboard.
4. Deploy this repository to a stable public HTTPS origin before submission.
5. Confirm these pages work without signing in:
   - `https://YOUR-DOMAIN/extension.html`
   - `https://YOUR-DOMAIN/privacy.html`
   - `https://YOUR-DOMAIN/support.html`

Only the account owner can complete payment, 2-Step Verification, contact-email
verification, dashboard declarations, and the final **Submit for Review** action.

## Package Upload

Upload the future Web Store ZIP after the DesModder-free package variant is
built and tested. It must be a Manifest V3 extension, remain below the 2 GB
package limit, and have `manifest.json` at the archive root.

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
| Homepage URL | `https://YOUR-DOMAIN/extension.html` |
| Support URL | `https://YOUR-DOMAIN/support.html` |

### Detailed Description

Paste this as plain text:

```text
Desmos+ adds powerful graph transfer, SVG conversion, audio creation, and customization tools directly to Desmos.

KEY FEATURES

• Graph transfer
Export and import complete Desmos graphs while preserving expressions, folders, tables, sliders, notes, viewport settings, and supported animations.

• Native .desmos files
Save graphs in a portable format and reopen them later in Desmos+ or a compatible calculator.

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

Desmos+ is an independent open-source project. It is not affiliated with, endorsed by, or maintained by Desmos Studio PBC.
```

Do not describe Desmos+ as an official Desmos extension. Keep the listing free
of repetitive keywords, unsupported performance claims, and anonymous user
testimonials.

## Graphic Assets

Recapture up to five 1280x800 screenshots after the Web Store package removes
the DesModder Settings tab. Do not upload the earlier screenshots that show
Settings, because they would not match the official package.

Use `assets/small-promo-440x280.png` for the required small promotional image.
Use `assets/marquee-1400x560.png` for the optional marquee image. The extension
icon comes from the packaged `icons/icon-128.png`; the identical review copy is
stored at `assets/icon-128.png`.

A promotional YouTube video is optional. Add one only if it accurately shows
the current version and does not reveal private graphs, files, or account data.

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
Desmos+ needs temporary access to the active tab after the user opens the extension so a requested graph export, graph import, SVG import, or audio conversion can read or update the current supported Desmos calculator. It does not use activeTab for background browsing surveillance.
```

**scripting**

```text
Desmos+ injects packaged functions into the active supported Desmos page to call the calculator's getState, setState, and expression APIs for user-requested graph, SVG, and audio operations. No remotely downloaded script is executed.
```

### Remote Code

Select:

```text
No, I am not using remote code.
```

All executable extension logic, including DesAudify, FFT, and Flame Wrap code,
is inside the submitted package. The installed Web Store extension does not
download or execute remote code.

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
https://YOUR-DOMAIN/privacy.html
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
- [ ] DesModder-free Web Store ZIP built and checksum recorded.
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

## Planned GitHub Package Choice

The package split will be implemented in a later extension change:

- **Chrome Web Store edition:** Graph, SVG, and DesAudify only, with the
  narrowest required permissions and no DesModder or WakaTime code.
- **GitHub DesModder edition:** the same core tools plus the optional bundled
  DesModder integration, clearly named as a separate download.

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
