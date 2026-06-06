# Design System — Foundry Competitive Analysis

A small, dependency-free design system shared by every page on the site. No build step — plain CSS custom properties and component classes, served straight from GitHub Pages.

**Living style guide:** [`/styleguide/`](./styleguide/) renders every token and component.

## Layers

CSS is split into four files under `assets/css/`, imported in this order:

| File | What it holds | Imported by |
|------|---------------|-------------|
| `tokens.css` | Design tokens only — the `:root` custom properties (color, type, spacing, radius, elevation, motion). The single source of truth. | every page |
| `base.css` | Reset, typography, layout primitives (`.wrap`, `.skip-link`), shared chrome (`.topbar`, `.brand`), hero atoms (`.eyebrow`, `.hero__name`, `.meta-chips`), `.lightbox`, sticky-footer body, shared responsive + reduced-motion. | every page |
| `report.css` | The full per-competitor component set — hero, `.kpis`, `.tldr`, `.section*`, `.cards*`, `.figs*`/`.fig*`, `.callout*`, `.banner--northstar`, `.flow*`, `.swot*`, report footer, and all report breakpoints. | report pages |
| `landing.css` | Parent-index only — `.tiles*` and the `.cmp*` comparison table (plus landing hero/section/footer scale). | `index.html` |

Shared behaviour lives in `assets/js/report.js` (mobile nav toggle, scroll-spy nav, image lightbox), linked by report pages.

## Token rules

- Reference tokens with `var(--token)` — **never hard-code a hex** in a component or page.
- Ink: `--text` (primary), `--muted` (secondary), `--faint` (tertiary), `--ink-lead` (lead/emphasis paragraphs), `--ink-strong` (strongest emphasis), `--on-accent` (text on a bright fill).
- Category accents map to meaning: `--cyan` primary, `--violet` agentic AI, `--gold` key features/implications, `--green` live/strengths/"our lane", `--red` weaknesses.

## Page wiring

Report page `<head>`:
```html
<link rel="stylesheet" href="../assets/css/tokens.css" />
<link rel="stylesheet" href="../assets/css/base.css" />
<link rel="stylesheet" href="../assets/css/report.css" />
```
…and before `</body>`: `<script src="../assets/js/report.js"></script>`

Landing uses `base.css` + `landing.css` (root-relative `assets/...`, no `../`).

## Add a new competitor report

1. **Create the folder** `comp-name/` with an `index.html`. Fastest start: copy `tesana/index.html` and replace the content. It already links the shared CSS/JS with `../assets/...` paths.
2. **Drop screenshots** in `comp-name/assets/img/` and reference them from `.fig` figures. No screenshots yet? Use the `.fig__ph` placeholder (see the style guide) and swap in `<img>` later — the lightbox binds automatically.
3. **Add a logo** at `assets/logos/comp-name.svg|png` (a dark-on-transparent mark needs `class="tile__logo-img--invert"` on the tile `<img>`).
4. **Add a tile** to the root `index.html` `.tiles` list (copy an existing `<a class="tile">`).
5. **Add a column/rows** to the `.cmp` comparison table in `index.html`.
6. Update the table in `README.md`.

Because every page pulls the same `tokens.css` + `base.css`, a token change (e.g. a palette tweak) propagates everywhere at once.

## Components reference

See [`/styleguide/`](./styleguide/) for live examples of: color & type tokens, top bar/nav, hero atoms, KPI strip + snapshot, cards (default / agent / implication / persona), callouts (key / dev / info / anti), north-star banner, flow stepper, SWOT, figures (incl. placeholder), tiles and the comparison table.
