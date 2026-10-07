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
  github: 'https://github.com/josephzhang0602',
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
    mark: 'FO',
    highlight: 'AI for caller identity, reputation scoring and spam detection on high-volume telecom data',
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
    mark: 'FE',
    highlight: 'Fraud-scoring models that flag anomalous tax returns for investigation',
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
    mark: 'AB',
    highlight: 'Internal tools and automation for business teams',
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

// Logo tiles use public/tech/<icon>.svg (scripts/tech-icons.mjs); no icon shows initials.
export const skills = [
  {
    group: 'AI / ML',
    logos: [['OpenAI'], ['LangChain'], ['LangGraph'], ['Hugging Face'], ['PyTorch', 'pytorch'], ['TensorFlow', 'tensorflow']],
    more: ['RAG', 'AI agents', 'Tool calling', 'Structured outputs', 'Embeddings', 'Vector search', 'Evals'],
  },
  {
    group: 'Languages',
    logos: [['Python', 'python'], ['TypeScript', 'typescript'], ['JavaScript', 'javascript'], ['Java', 'java'], ['C#', 'csharp'], ['Swift', 'swift'], ['Kotlin', 'kotlin']],
    more: [],
  },
  {
    group: 'Frontend',
    logos: [['React', 'react'], ['Next.js', 'nextjs'], ['Tailwind', 'tailwind'], ['Vite', 'vite']],
    more: ['Chrome extensions', 'Responsive UI'],
  },
  {
    group: 'Backend',
    logos: [['Node.js', 'nodejs'], ['Express', 'express'], ['.NET', 'dotnet'], ['FastAPI', 'fastapi'], ['Django', 'django'], ['GraphQL', 'graphql']],
    more: ['REST APIs', 'Background jobs', 'Async processing'],
  },
  {
    group: 'Mobile',
    logos: [['iOS', 'apple'], ['Xcode', 'xcode'], ['React Native', 'react'], ['Android', 'android']],
    more: ['SwiftUI', 'UIKit', 'Jetpack Compose', 'In-app purchases', 'App Store Connect'],
  },
  {
    group: 'Data',
    logos: [['PostgreSQL', 'postgresql'], ['MongoDB', 'mongodb'], ['Redis', 'redis'], ['MySQL', 'mysql'], ['SQL Server', 'sqlserver'], ['Firebase', 'firebase']],
    more: ['pgvector', 'FAISS'],
  },
  {
    group: 'Cloud & DevOps',
    logos: [['AWS', 'aws'], ['Google Cloud', 'gcp'], ['Azure', 'azure'], ['Docker', 'docker'], ['GitHub Actions', 'githubactions'], ['Cloudflare', 'cloudflare'], ['Linux', 'linux']],
    more: ['CI/CD', 'Sentry', 'Render'],
  },
];
