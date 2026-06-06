# Foundry — Competitive Analysis

A parent site hosting UX, product &amp; strategy teardowns of the AI game-generation platforms in our space, prepared for the **Foundry** game-generation platform.

A landing page at the root lists each competitor as a tile; each competitor gets its own sub-page.

## Analyses

| Competitor | Status | Path |
|------------|--------|------|
| [Astrocade](https://www.astrocade.com) — AI "wish-to-game" platform | ✅ Live | [`/astrocade`](./astrocade/) |
| Tesana | 🚧 Coming soon | — |

## Stack
Plain HTML, CSS and a little vanilla JS. No build step, no dependencies (fonts via Google Fonts).

```
index.html          — landing page (competitor tiles)
styles.css          — landing-page theme
astrocade/          — Astrocade teardown (self-contained)
  index.html        — all content
  styles.css        — responsive dark theme
  script.js         — mobile nav, active-section nav, image lightbox
  assets/img/       — Studio screenshots (resized to 1600px)
.nojekyll           — serve assets as-is on GitHub Pages
```

Each competitor sub-page is fully self-contained (its own HTML/CSS/JS/assets) and uses only relative paths, so the whole folder can be dropped under any route. To add a new competitor: create a folder (e.g. `tesana/`), drop the page in, and add a tile to the root `index.html`.

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
