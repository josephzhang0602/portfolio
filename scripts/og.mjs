// Renders public/og.png (1200x630), the preview image for shared links.
// Run after fetch-apps if the icons change: node scripts/og.mjs
import { chromium } from '../../job-tracker/server/node_modules/playwright/index.mjs';
import { readFile } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const apps = JSON.parse(await readFile(new URL('src/data/apps.json', root), 'utf8')).slice(0, 12);
const icon = async (id) =>
  'data:image/png;base64,' + (await readFile(new URL(`public/apps/${id}.png`, root))).toString('base64');
const icons = await Promise.all(apps.map((a) => icon(a.id)));
const photo = 'data:image/jpeg;base64,' + (await readFile(new URL('public/me-avatar.jpg', root))).toString('base64');

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #08090d; color: #eceef4; font-family: Inter, sans-serif; position: relative; }
  .glow { position: absolute; inset: 0; background:
    radial-gradient(45% 60% at 78% 35%, rgba(99,102,241,.32), transparent 70%),
    radial-gradient(40% 55% at 20% 85%, rgba(20,184,166,.18), transparent 70%); }
  .copy { position: absolute; left: 72px; top: 76px; width: 640px; }
  .photo { width: 84px; height: 84px; border-radius: 50%; border: 3px solid rgba(255,255,255,.14); box-shadow: 0 10px 30px -10px rgba(99,102,241,.6); }
  .mark { width: 56px; height: 56px; border-radius: 16px; display: grid; place-items: center; font-weight: 700; font-size: 20px;
    background: linear-gradient(135deg, #4b52e0, #0e9f8e); }
  .eyebrow { margin-top: 28px; font-family: 'JetBrains Mono', monospace; font-size: 18px; letter-spacing: .08em; text-transform: uppercase; color: #8b93ff; }
  h1 { margin-top: 14px; font-size: 76px; font-weight: 600; letter-spacing: -.035em; line-height: 1; }
  .tag { margin-top: 26px; font-size: 34px; line-height: 1.25; letter-spacing: -.02em; color: #c9cdd8; }
  .serif { font-family: 'Instrument Serif', serif; font-style: italic; font-size: 1.12em;
    background: linear-gradient(100deg, #8b93ff, #3dd9c5); -webkit-background-clip: text; color: transparent; }
  .foot { position: absolute; left: 72px; bottom: 64px; display: flex; gap: 14px; }
  .chip { padding: 10px 18px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04); font-size: 20px; color: #c9cdd8; }
  .wall { position: absolute; right: -40px; top: -60px; display: grid; grid-template-columns: repeat(3, 120px); gap: 22px; transform: rotate(-8deg);
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent); }
  .wall img { width: 120px; height: 120px; border-radius: 27px; border: 1px solid rgba(255,255,255,.08); box-shadow: 0 20px 40px -12px rgba(0,0,0,.8); }
  .wall img:nth-child(3n+2) { transform: translateY(-50px); }
</style></head><body>
  <div class="glow"></div>
  <div class="wall">${[...icons, ...icons.slice(0, 3)].map((s) => `<img src="${s}">`).join('')}</div>
  <div class="copy">
    <img class="photo" src="${photo}">
    <div class="eyebrow">Senior Full-Stack / AI Engineer</div>
    <h1>Joseph Zhang</h1>
    <p class="tag">I build <span class="serif">AI products</span> that ship, from LLM pipelines to apps with 4M+ installs.</p>
  </div>
  <div class="foot"><span class="chip">CodeMind Jobs</span><span class="chip">30+ App Store apps</span><span class="chip">8+ years</span></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: new URL('public/og.png', root).pathname.replace(/^\/([A-Z]:)/, '$1') });
await browser.close();
console.log('saved public/og.png');
