# Foundry — Competitive Analysis

A parent site hosting UX, product &amp; strategy teardowns of the AI game-generation platforms in our space, prepared for the **Foundry** game-generation platform.

A landing page at the root lists each competitor as a tile; each competitor gets its own sub-page.

## Analyses

| Competitor | Status | Path |
|------------|--------|------|
| [Astrocade](https://www.astrocade.com) — AI "wish-to-game" platform | ✅ Live | [`/astrocade`](./astrocade/) |
| [Tesana](https://tesana.ai) — AI "make-any-game" platform (real Godot export) | ✅ Live | [`/tesana`](./tesana/) |

The landing page also carries an **at-a-glance 3-way comparison** (Astrocade vs Tesana vs Foundry).

## Stack
Plain HTML, CSS and a little vanilla JS. No build step, no dependencies (fonts via Google Fonts). All pages share one **centralized design system** — see [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) and the living style guide at [`/styleguide/`](./styleguide/).

```
index.html            — landing page (competitor tiles + 3-way comparison)
DESIGN-SYSTEM.md      — design-system docs + "add a competitor" playbook
assets/
  css/
    tokens.css        — design tokens (:root custom properties) — single source of truth
    base.css          — reset, type, layout primitives, topbar, hero atoms, lightbox
    report.css        — report components (hero, KPIs, sections, cards, figs, callouts, flow, SWOT)
    landing.css       — landing components (tiles, comparison table)
  js/report.js        — shared report behaviour (mobile nav, scroll-spy, lightbox)
  logos/              — competitor logos used on the tiles
styleguide/index.html — living style guide (renders every token + component)
astrocade/            — Astrocade teardown
  index.html          — content; links ../assets/css/* + ../assets/js/report.js
  assets/img/         — Studio screenshots (resized to 1600px)
tesana/               — Tesana teardown
  index.html          — content; links the same shared system
  assets/img/         — Studio screenshots (from the FigJam board)
.nojekyll             — serve assets as-is on GitHub Pages
```

Pages reference the shared system via relative paths (`../assets/...`), so a token or component change propagates everywhere at once. To add a new competitor, follow the playbook in [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md): copy a report folder, drop in screenshots, add a tile + comparison column.

## Run locally
Serve the folder root so relative paths resolve:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

The landing page is at `/`; the Astrocade analysis at `/astrocade/`.

## Deploy — GitHub Pages
This repo publishes from the **root of the `main` branch**:

1. Push to `main`.
2. GitHub → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
3. The site goes live at `https://paperworkstud.io/foundry-comp-analysis/`, with the Astrocade teardown at `https://paperworkstud.io/foundry-comp-analysis/astrocade/`.

(`.nojekyll` is included so the `assets/` folders are served without Jekyll processing.)

---
Prepared by Paper Lee · June 2026.
