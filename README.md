# Competitive Analysis — Astrocade

A responsive single-page showcase of a UX, product &amp; strategy teardown of **[Astrocade](https://www.astrocade.com)** — the AI "wish-to-game" platform — analysed for the **Weekend / Crucible** TV-gaming thesis (TV-first, voice-first, local-multiplayer game nights).

It mirrors the source [FigJam board](https://www.figma.com/board/QFfTuIiUQlZmPU6tD0SqIo/Comp-Analysis): company &amp; funding, gameplay platform, creation toolkit, the agentic-AI pipeline, social factors, business model, SWOT, user stories / jobs-to-be-done, and implications — with live Studio screenshots.

## Stack
Plain HTML, CSS and a little vanilla JS. No build step, no dependencies (fonts via Google Fonts).

```
index.html      — all content
styles.css      — responsive dark theme
script.js       — mobile nav, active-section nav, image lightbox
assets/img/     — Studio screenshots (resized to 1600px)
.nojekyll       — serve assets as-is on GitHub Pages
```

## Run locally
Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy — GitHub Pages
This repo is meant to publish from the **root of the `main` branch**:

1. Push to `main`.
2. GitHub → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
3. The site goes live at `https://paperli.github.io/astrocade-comp-analysis/`.

(`.nojekyll` is included so the `assets/` folder is served without Jekyll processing.)

---
Prepared by Paper Lee · June 2026.
