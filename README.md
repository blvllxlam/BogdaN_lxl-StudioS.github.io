# Bogdan Portfolio

Responsive one-page portfolio website built with plain HTML, CSS and JavaScript and deployed through GitHub Pages.

## Project structure

### Main page
- `index.html` — the main and only page. Contains the header/navigation, hero section, Services cards, Contact section and footer. Service cards are handled as modal triggers on the homepage.

### JavaScript
- `home.js` — main homepage logic: language switching (EN/RU/AM), translations, service data, service modals, modal pricing and navigation/menu behavior.
- `price-fix.js` — keeps the Web Development modal pricing synchronized with the selected language. This file uses a guarded MutationObserver; do not replace it with an observer that writes to the DOM unconditionally.

### CSS
- `style.css` — main visual design, typography, cards, hero, sections, modal base styles and responsive layout.
- `modal.css` — additional styling for the service modal and its contents.
- `service-fix.css` — service-related visual/layout fixes.
- `header-fix.css` — fixed desktop/mobile header and scroll offset fixes.
- `home-fix.css` — homepage stability overrides. It disables the problematic reveal/noise animations so the page remains stable and visible.
- `lang-fix.css` — language switch layout and flag styling for desktop and mobile.

### Assets
- `favicon.svg` — site favicon.

### Service-related files
The old standalone service HTML pages were removed. Service links may still use the old `services/*.html` paths internally because `home.js` intercepts service-card clicks and opens the corresponding modal instead.

The `services/` directory may contain legacy JavaScript/CSS files from the former standalone service pages. They are not part of the current one-page navigation unless explicitly loaded by the homepage.

## Current service order
1. `01 / WEB` — Web Development
2. `02 / MARKETING` — Marketing
3. `06 / AI` — AI & Automation
4. `05 / DESIGN` — Design

The former `04 / ALGOTRADING` and `07 / UNIQUE DEVELOPMENT` homepage cards have been removed.

## Languages
The interface supports:
- 🇬🇧 EN — English
- 🇷🇺 RU — Russian
- 🇦🇲 AM — Armenian

The internal language code for Armenian is `hy`, but the visible label is always `AM`.

## Important rules
- Keep the homepage one-page structure unless a new page is explicitly requested.
- Service cards should open the existing modal pattern rather than restoring standalone service pages.
- Preserve the desktop/mobile language switch behavior.
- Do not remove `home-fix.css` or its stability overrides without testing the homepage.
- When editing an existing GitHub file, always use its current SHA.

## Local development
Open `index.html` in a browser.

## Deployment
The project is hosted on GitHub Pages. No server or paid hosting is required.

## Contact placeholders
The Contact section currently contains placeholder email/Telegram values. Replace them when the final contact details are available.
