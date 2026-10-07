# Joseph Zhang: portfolio

A single-page Astro site with a CodeMind Jobs case study, the App Store catalog, experience and skills. Light and dark themes.

## Edit content

| What | Where |
|---|---|
| Name, email, links (LinkedIn, GitHub, resume), stats, experience, skills | `src/data/site.js` |
| CodeMind case study text, metrics, stack | `src/data/codemind.js` |
| Featured apps, English names for Chinese titles | `src/data/apps.js` |
| App list + icons (from the App Store API) | `npm run fetch-apps` rewrites `src/data/apps.json` and `public/apps/` |
| CodeMind screenshots | `node scripts/shots.mjs` (uses Playwright from `../job-tracker/server`) |

Resume download: put the PDF at `public/resume.pdf` and set `resume: '/resume.pdf'` in `site.js`.

## Run

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploy (Cloudflare Worker with static assets)

1. The Worker is named `portfolio` and is configured by `wrangler.jsonc`. It is connected to github.com/josephzhang0602/portfolio.
2. Workers Builds runs on every push to `main`: build `npm run build`, then deploy `npx wrangler deploy`.
3. Unknown paths get `dist/404.html` (`not_found_handling` in `wrangler.jsonc`).
4. Domains are set on the Worker's Domains tab: `josephz.dev` and `www.josephz.dev`.
5. If the domain ever changes, update `site.url` in `src/data/site.js` and `site` in `astro.config.mjs`, then run `node scripts/og.mjs` if the share image text changes.

Every push to `main` redeploys.
