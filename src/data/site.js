// Everything personal lives here. Leave a link empty ('') to hide it.
export const site = {
  name: 'Joseph Zhang',
  role: 'Senior Full-Stack / AI Engineer',
  location: 'Little Rock, Arkansas',
  email: 'jzhangdev97@outlook.com',
  url: 'https://josephz.dev',
  appStore: 'https://apps.apple.com/us/developer/jiafu-zhang/id717622923',
  codemind: 'https://jobs.codemind.site',
  linkedin: '',
  github: '',
  // Put the PDF at public/resume.pdf, then set this to '/resume.pdf'.
  resume: '',
  description:
    'Senior Full-Stack / AI Engineer with 8+ years shipping web, mobile, backend and AI products. Builder of CodeMind Jobs and 30+ apps on the App Store with 4M+ installs.',
};

export const stats = [
  { value: '8+', label: 'years shipping production software' },
  { value: '4M+', label: 'installs across my App Store apps' },
  { value: '30+', label: 'iOS & macOS apps published' },
  { value: '~5k', label: 'jobs/day processed by CodeMind' },
];

export const experience = [
  {
    role: 'Senior Software Engineer / AI Engineer',
    company: 'First Orion',
    place: 'North Little Rock, AR',
    period: 'Oct 2019 — Present',
    points: [
      'Lead production software and AI systems for caller identity, reputation scoring, spam detection and anomaly detection across high-volume telecom data.',
      'Build NLP and semantic-matching workflows with transformer embeddings for entity normalization, noisy-data matching and intent classification.',
      'Ship real-time Python scoring services and end-to-end product features across React/TypeScript, Node.js, PostgreSQL and Redis.',
      'Deliver customer-facing mobile features in React Native, Swift/UIKit and Kotlin/Jetpack Compose, and own App Store and Google Play releases.',
    ],
    tags: ['Python', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Hugging Face', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    role: 'Software Consultant',
    company: 'Fast Enterprises',
    place: 'Centennial, CO',
    period: 'Jan 2018 — Oct 2019',
    points: [
      'Built and maintained backend applications in C#, .NET and SQL Server with a focus on data integrity and reliability.',
      'Built fraud-scoring models for tax-return data that flag anomalous patterns for investigation.',
      'Automated database-driven workflows that cut manual processing.',
    ],
    tags: ['C#', '.NET', 'SQL Server', 'Statistics'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'ArcBest Technologies',
    place: 'Fort Smith, AR',
    period: 'May 2016 — Aug 2016',
    points: ['Built C# applications and database workflows for internal teams, with unit tests and documentation.'],
    tags: ['C#', 'SQL'],
  },
];

export const education = {
  degree: 'B.S. Computer Science',
  school: 'University of Arkansas, Fayetteville',
  period: '2015 — 2017',
};

export const skills = [
  {
    group: 'AI / ML',
    items: ['OpenAI API', 'LangChain', 'LangGraph', 'RAG', 'AI agents', 'Tool calling', 'Structured outputs', 'Embeddings', 'Vector search', 'Hugging Face', 'PyTorch', 'Eval harnesses'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Chrome extensions'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Django', 'REST', 'GraphQL', 'Background jobs'],
  },
  {
    group: 'Mobile',
    items: ['Swift', 'SwiftUI', 'UIKit', 'React Native', 'Kotlin', 'Jetpack Compose', 'In-app purchases', 'App Store Connect'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'FAISS', 'SQL Server', 'Firebase'],
  },
  {
    group: 'Cloud & Ops',
    items: ['AWS', 'GCP', 'Azure', 'Render', 'Cloudflare', 'Docker', 'GitHub Actions', 'Sentry'],
  },
];
