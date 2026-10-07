import raw from './apps.json';

// English names for the Chinese-language apps.
const gloss = {
  1120027237: 'Vocabulary Notebook with smart review reminders',
  1436010230: 'Macmillan 7500 core words',
  1640987617: 'Mindfulness meditation',
  1609432425: 'Guess the Word: English crossword',
  1453514210: 'Never-forget dictionary with spaced repetition',
  1038800145: 'Quadrant to-do list (Eisenhower matrix)',
  6450730357: 'AI legal assistant',
  1214381535: 'Minimal card-style expense tracker',
  1608670338: 'Chinese idiom Wordle',
};

// Hand-written blurbs for the featured apps.
const featured = {
  1120027237: 'A fast lookup-first vocabulary app with tags, fuzzy search and spaced-repetition reminders. My most-rated app.',
  1388842081: 'Make, study and share flashcards with spaced repetition, images and audio.',
  1626767582: 'Turns any text, document or web page into natural speech with dozens of voices.',
  6749887847: 'Generative AI that turns still photos into short animated videos.',
  1672831757: 'Chat with any PDF: retrieval-augmented answers with page citations, powered by GPT.',
  6450915714: 'On-device and cloud Whisper transcription for recordings, audio and video files.',
};

const groupOf = (genre) =>
  ({
    Education: 'Learning',
    Reference: 'Learning',
    Productivity: 'Productivity',
    Finance: 'Productivity',
    'Graphics & Design': 'Photo & Design',
    'Photo & Video': 'Photo & Design',
    Utilities: 'Utilities',
    'Developer Tools': 'Utilities',
  })[genre] || 'Lifestyle';

const isAI = (a) => /\bAI\b|AI|GPT|Whisper|ChatPDF|ChatTTS|Flux|SpeechMax|Deep Researcher/.test(a.name);

export const apps = raw.map((a) => ({
  ...a,
  gloss: gloss[a.id] || '',
  blurb: featured[a.id] || a.blurb,
  group: groupOf(a.genre),
  ai: isAI(a),
}));

export const featuredApps = Object.keys(featured).map((id) => apps.find((a) => a.id === Number(id)));

export const appGroups = ['All', 'AI', 'Learning', 'Productivity', 'Photo & Design', 'Utilities'];

export const totalRatings = apps.reduce((sum, a) => sum + a.ratings, 0);
