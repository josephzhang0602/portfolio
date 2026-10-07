// Screenshots of jobs.codemind.site for the CodeMind case study.
// Uses the Playwright install from the job-tracker repo next door.
import { chromium } from '../../job-tracker/server/node_modules/playwright/index.mjs';

const pages = [
  ['board', 'https://jobs.codemind.site/'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
for (const [name, url] of pages) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `public/shots/${name}.png` });
  console.log('saved', name);
  await page.close();
}
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true });
const m = await mobile.newPage();
await m.goto(pages[0][1], { waitUntil: 'networkidle', timeout: 60000 });
await m.waitForTimeout(1500);
await m.screenshot({ path: 'public/shots/board-mobile.png' });
console.log('saved board-mobile');
await browser.close();
