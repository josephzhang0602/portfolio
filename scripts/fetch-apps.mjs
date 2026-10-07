// Pulls every app on the App Store developer page into src/data/apps.json
// and saves each icon to public/apps/<id>.png. Run: npm run fetch-apps
import { mkdir, writeFile } from 'node:fs/promises';

const DEVELOPER_ID = 717622923;
const root = new URL('..', import.meta.url);

const res = await fetch(
  `https://itunes.apple.com/lookup?id=${DEVELOPER_ID}&entity=software&limit=200&country=us`
);
const { results } = await res.json();

const firstSentence = (text = '') => {
  const line = text.split('\n').map((l) => l.trim()).find((l) => l.length > 20) || '';
  const cut = line.match(/^.{20,180}?[.!?。！](\s|$)/);
  return (cut ? cut[0] : line.slice(0, 160)).trim();
};

const apps = results
  .filter((r) => r.wrapperType === 'software')
  .map((a) => ({
    id: a.trackId,
    name: a.trackName,
    genre: a.primaryGenreName,
    platform: a.kind === 'mac-software' ? 'macOS' : 'iOS',
    rating: a.averageUserRating ? Math.round(a.averageUserRating * 10) / 10 : null,
    ratings: a.userRatingCount || 0,
    url: a.trackViewUrl.split('?')[0],
    released: a.releaseDate?.slice(0, 10),
    blurb: firstSentence(a.description),
    artwork: a.artworkUrl512 || a.artworkUrl100,
  }));

await mkdir(new URL('public/apps/', root), { recursive: true });
for (const app of apps) {
  const src = app.artwork.replace(/\/[^/]+$/, '/256x256bb.png');
  const img = await fetch(src);
  if (img.ok) {
    await writeFile(new URL(`public/apps/${app.id}.png`, root), Buffer.from(await img.arrayBuffer()));
  }
  app.icon = `/apps/${app.id}.png`;
  delete app.artwork;
}

// First iPhone screenshot of each featured app, for the app cards.
const SCREENSHOT_IDS = [1672831757, 1626767582, 6749887847, 1388842081, 6450915714, 1120027237];
await mkdir(new URL('public/apps/shots/', root), { recursive: true });
for (const a of results.filter((r) => SCREENSHOT_IDS.includes(r.trackId))) {
  const first = a.screenshotUrls?.[0];
  if (!first) continue;
  const img = await fetch(first.replace(/\/[^/]+$/, '/460x0w.jpg'));
  if (img.ok) {
    await writeFile(new URL(`public/apps/shots/${a.trackId}.jpg`, root), Buffer.from(await img.arrayBuffer()));
    apps.find((x) => x.id === a.trackId).screenshot = `/apps/shots/${a.trackId}.jpg`;
  }
}

apps.sort((a, b) => b.ratings - a.ratings);
await writeFile(new URL('src/data/apps.json', root), JSON.stringify(apps, null, 2) + '\n');
console.log(`Saved ${apps.length} apps`);
