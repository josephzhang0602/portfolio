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

## Deploy on Cloudflare Pages

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard › Workers & Pages › Create › Pages › Connect to Git, then pick the repo.
3. Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. After the first deploy: Custom domains › add `josephz.dev` and `www.josephz.dev`.
5. If the domain ever changes, update `site.url` in `src/data/site.js` and `site` in `astro.config.mjs`, then run `node scripts/og.mjs` if the share image text changes.

Every push to `main` redeploys.
