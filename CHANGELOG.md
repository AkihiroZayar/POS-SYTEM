# Changelog

All notable changes to **AkihiroLabs POS** are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [10.1.0] — 2026-09-28

### Changed
- Split the single-file `index.html` into separate files:
  `css/style.css`, `js/*.js` and `js/views/*.js`, linked from `index.html`.
- Version now lives in one place: `js/version.js` (`APP_VERSION`).
- Footer and PDF reports show the **AkihiroLabs** brand and the current version.
- New app icon (Byte 🦝) in `assets/icon.png`, used as favicon and home-screen icon.

### Added
- `README.md` and `CHANGELOG.md`.
- Repository renamed from `POS-SYTEM` to `akihirolabs-pos`.

### Notes
- No feature or behavior changes. The IndexedDB name (`pos_bar_v3`) is unchanged,
  so existing data in your browser keeps working.

## [10.0.0]

- Single-file release (`index.html`): staff PIN login, POS with cash numpad,
  size variants, customer tabs, happy hour, inventory with low-stock alerts,
  dashboard, reports, CSV / PDF export, JSON backup / restore, English / Burmese UI.
