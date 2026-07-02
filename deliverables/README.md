# William Ye — Portfolio · Delivery package

Everything you need to review, replicate, and deploy the portfolio.

## What's in here

| File | What it is |
|---|---|
| `William-Ye-Portfolio.html` | The portfolio as a **single self-contained HTML file**. Works offline, no build step, no dependencies. Open it in a browser or drop it on any static host to deploy as-is. |
| `Design-Handoff.html` | The visual design handoff — tokens, component specs, responsive breakpoints, accessibility checklist, asset list, content map. Also a single self-contained file. |
| `nextjs-reproduction-prompt.md` | The **full build brief** to rebuild the portfolio as a clean, production Next.js codebase. Paste it into Claude Code / Cursor / v0. Includes project structure, Tailwind token config, all content data, per-component + motion specs, and a definition of done. |
| `William-Ye-Resume.pdf` | Source résumé / the file the portfolio's "Résumé ↓" button downloads. |

## Two ways to deploy

**A. Ship the HTML now (fastest).**
`William-Ye-Portfolio.html` is a complete static site.
- Netlify: drag the file onto app.netlify.com/drop.
- Vercel: put it in a folder as `index.html` and run `vercel`.
- GitHub Pages: commit as `index.html` and enable Pages.
Put `William-Ye-Resume.pdf` next to it (same folder) so the download link resolves.

**B. Rebuild in Next.js (recommended for a real codebase).**
Feed `nextjs-reproduction-prompt.md` to your coding agent to scaffold a Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion project, then deploy to Vercel. This gives you clean, componentized, editable source rather than one big HTML file.

## Confirm before launch

- **Contact details** were OCR'd from the résumé — verify: email `williamyeny@gmail.com`, LinkedIn `linkedin.com/in/will-ye-`, phone `+1 929 548 7774`.
- **Projects** (Atlas, Semaphore, Forge, Ledger IQ) are realistic **placeholders** — swap in real case studies + screenshots.
- **Images** — add a headshot (4:5) and project screenshots (16:9 / 16:10); see the asset list in the handoff.

## Design system, at a glance

- **Type:** Space Grotesk (display/body) · JetBrains Mono (labels/metrics)
- **Accent:** `#B8F24E` lime · **Canvas:** `#0A0B0D` near-black
- **Motion:** neural-net hero, count-up metrics, scroll reveals, typewriter, cursor glow — all disabled under `prefers-reduced-motion`.
