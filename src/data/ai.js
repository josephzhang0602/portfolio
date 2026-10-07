import { apps } from './apps.js';

const byId = Object.fromEntries(apps.map((a) => [a.id, a]));
const pick = (ids) => ids.map((id) => byId[id]).filter(Boolean);

export const aiAppCount = apps.filter((a) => a.ai).length;

// One card per capability, each tied to work that actually shipped.
export const aiWork = {
  pipelines: {
    title: 'LLM pipelines with structured outputs',
    body: 'CodeMind turns about 5,000 raw job posts a day into clean, typed data: skills, seniority, salary, visa and work type. It runs a cheap batch model first and moves up to a stronger model only when needed, and every answer is checked against a strict schema.',
    where: 'CodeMind Jobs',
    tags: ['OpenAI Batch API', 'Strict JSON schema', 'Validation + retry', 'Cost caps'],
  },
  rag: {
    title: 'RAG & document AI',
    body: 'Chat with a PDF and get answers that cite the page, plus translation that keeps a book or paper\'s layout and formulas intact.',
    where: 'ChatPDF · PDF Translator · eBook Translator · AI Legal Assistant',
    apps: pick([1672831757, 6739878059, 6668259223, 6450730357]),
  },
  agents: {
    title: 'Agents & tool use',
    body: 'A research agent that plans, searches, reads and writes a report; an MCP server that lets AI assistants search CodeMind; and a browser agent that fills multi-page application forms.',
    where: 'Deep Researcher · CodeMind MCP · Autofill extension',
    apps: pick([6742180013]),
  },
  speech: {
    title: 'Speech & audio AI',
    body: 'Whisper transcription, natural text-to-speech with dozens of voices, and generated focus music, shipped as consumer apps with thousands of ratings.',
    where: 'Whisper Transcribe · Text to Speech · AI.FM · ChatTTS · Ambience AI',
    apps: pick([6450915714, 1626767582, 6744231807, 6504213488, 6748725944, 6762692135]),
  },
  scoring: {
    title: 'Evaluation & trustworthy scoring',
    body: 'In the ATS matcher the model only judges each requirement and quotes the resume line that proves it. Code checks that each quote is really in the resume and computes the score, and changes are tested against a benchmark of real job and resume pairs.',
    where: 'CodeMind ATS scorer · resume tailoring',
  },
  generative: {
    title: 'Generative image & video',
    body: 'Photo-to-video animation, image editing by text prompt, photo restoration, virtual staging, background design and AI font art. Each one is a shipped App Store product with in-app purchases.',
    where: '7 apps',
    apps: pick([6749887847, 6760249222, 6747907290, 6746754418, 6745123628, 6745967608, 6746832895]),
  },
  nlp: {
    title: 'NLP & embeddings at scale',
    body: 'At First Orion: transformer embeddings and semantic matching for entity normalization, noisy-data matching and intent classification, feeding real-time scoring for caller identity and spam detection.',
    where: 'First Orion · telecom scale',
    tags: ['Hugging Face', 'Embeddings', 'Semantic matching', 'Real-time scoring'],
  },
};
