# Bogdan Portfolio

Responsive one-page portfolio website built with plain HTML, CSS and JavaScript and deployed through GitHub Pages.

## Project structure

```text
/
├── index.html                  # Main and only page
├── README.md                   # Project documentation
├── assets/                     # Static assets
│   ├── favicon.svg
│   └── flags/
│       ├── 1x1/                # Square flag variants
│       └── 4x3/                # Flag variants used by the language panel
├── css/                        # Main page styles
│   ├── style.css
│   ├── service-fix.css
│   └── home-fix.css
├── header/                     # Header layout and behavior styles
│   ├── header-fix.css
│   └── sticky-header.css
├── language-panel/             # Language switcher styles and legacy translations
│   ├── lang.css
│   ├── lang-fix.css
│   ├── lang-extra.js
│   ├── lang-service.js
│   └── language-fix.js
├── modal/                      # Service modal component
│   ├── modal.css
│   └── modal.js
├── js/                         # Active and legacy homepage scripts
│   ├── home.js
│   ├── price-fix.js
│   └── script.js
└── services/                   # Legacy service-specific CSS/JS files
    ├── web-development-fix.css
    └── web-development.js
```

## Main page

`index.html` contains the header/navigation, hero section, Services cards, Contact section and footer. Service cards are handled as modal triggers on the homepage.

## Active JavaScript

- `js/home.js` — language switching (EN/RU/AM), translations, service data, service modals, modal pricing and navigation/menu behavior.
- `js/price-fix.js` — keeps Web Development modal pricing synchronized with the selected language. It uses a guarded MutationObserver; do not replace it with an observer that writes to the DOM unconditionally.

## CSS organization

- `css/style.css` — main visual design, typography, cards, hero, sections and responsive layout.
- `css/service-fix.css` — service-related visual/layout fixes.
- `css/home-fix.css` — homepage stability overrides. It disables the problematic reveal/noise animations so the page remains stable and visible.
- `header/` — fixed header and related header behavior.
- `language-panel/` — language switcher styling and legacy language scripts.
- `modal/` — service modal styling and legacy modal script.

## Assets

The language panel uses the uploaded SVG flags from `assets/flags/4x3/`:

- `us.svg` — EN
- `ru.svg` — RU
- `am.svg` — AM

The `1x1/` variants are kept as an additional square set for future use.

## Service-related files

The old standalone service HTML pages were removed. Service links may still use the old `services/*.html` paths internally because `js/home.js` intercepts service-card clicks and opens the corresponding modal instead.

The remaining files in `services/` are legacy service-specific CSS/JS and are not loaded by the current homepage unless explicitly added.

## Current service order

1. `01 / WEB` — Web Development
2. `02 / MARKETING` — Marketing
3. `06 / AI` — AI & Automation
4. `05 / DESIGN` — Design

The former `04 / ALGOTRADING` and `07 / UNIQUE DEVELOPMENT` homepage cards have been removed.

## Languages

The interface supports:

- 🇺🇸 EN — English
- 🇷🇺 RU — Russian
- 🇦🇲 AM — Armenian

The internal language code for Armenian is `hy`, but the visible label is always `AM`.

## Important rules

- Keep the homepage one-page structure unless a new page is explicitly requested.
- Service cards should open the existing modal pattern rather than restoring standalone service pages.
- Preserve the desktop/mobile language switch behavior.
- Do not remove `css/home-fix.css` or its stability overrides without testing the homepage.
- When editing an existing GitHub file, always use its current SHA.
- Keep edited code readable, structured and commented with short, useful comments.

## Local development

Open `index.html` in a browser.

## Deployment

The project is hosted on GitHub Pages. No server or paid hosting is required.

## Contact placeholders

The Contact section currently contains placeholder email/Telegram values. Replace them in `js/script.js` when the final contact details are available.
