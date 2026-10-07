// Real 5-star App Store reviews, quoted word for word (US store, fetched 2026-10-07).
// Reviewer names are left out on purpose. "…" marks a cut, nothing is reworded.
import { apps } from './apps.js';

const byId = Object.fromEntries(apps.map((a) => [a.id, a]));

export const reviews = [
  {
    app: 1672831757,
    title: 'Does exactly what I wanted!',
    text: 'Train your chatbot by uploading PDFs and use it to generate or answer questions. I love it!!! … It’s exactly what I was looking for!',
  },
  {
    app: 6450915714,
    title: 'Best transcript app',
    text: 'This app has by far the best transcript capabilities of anything that’s out there. And also has the best value easily, hands-down',
  },
  {
    app: 1388842081,
    title: 'Simple, effective, efficient',
    text: 'The simple design allows you to focus on the content you are trying to retain & explore. Effective with the timed study reminders. Efficient & informed is what you will be after you use this app.',
  },
  {
    app: 1388842081,
    title: 'Excellent!',
    text: 'Thank you for not harvesting my info like every other one of these! Well-made app, very responsive and easy to use. Has just the right number of features.',
  },
  {
    app: 6749887847,
    title: 'So simple',
    text: 'This was very easy to use. Perfect need for my friend who didn’t want to talk live on video',
  },
].map((r) => ({ ...r, app: byId[r.app] }));
