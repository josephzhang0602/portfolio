// Everything personal lives here. Leave a link empty ('') to hide it.
export const site = {
  name: 'Joseph Zhang',
  role: 'Senior Full-Stack / AI Engineer',
  location: 'Little Rock, Arkansas',
  email: 'joseph.zhang0602@gmail.com',
  url: 'https://josephz.dev',
  appStore: 'https://apps.apple.com/us/developer/jiafu-zhang/id717622923',
  codemind: 'https://jobs.codemind.site',
  linkedin: '',
  github: '',
  // Put the PDF at public/, then set this to its path.
  resume: '',
  description:
    'Senior Full-Stack / AI Engineer with 9+ years shipping web, mobile, backend and AI products. Builder of CodeMind Jobs and 30+ apps on the App Store with 4M+ installs.',
};

export const stats = [
  { value: '9+', label: 'years shipping production software' },
  { value: '4M+', label: 'installs across my App Store apps' },
  { value: '30+', label: 'iOS & macOS apps published' },
  { value: '~5k', label: 'jobs/day processed by CodeMind' },
];

export const experience = [
  {
    role: 'Founder & Lead AI Engineer',
    company: 'CodeMind AI LLC',
    mark: 'CM',
    highlight: 'Founded and launched CodeMind Jobs, a subscription AI platform for job discovery, resume optimization and matching',
    place: 'Remote',
    period: '2026 — Present',
    points: [
      'Own product, architecture and delivery of CodeMind Jobs.',
      'Build full-stack SaaS features with React, Next.js, TypeScript, Node.js and Python/FastAPI for accounts, job search, onboarding and subscriptions.',
      'Develop multi-source job ingestion, normalization, deduplication, search and filtering, saved jobs and alerts across startup and ATS sources.',
      'Integrate LLM APIs for resume parsing, ATS scoring, AI-assisted tailoring, structured outputs and resume-to-job recommendations.',
      'Ship paid membership flows, billing integrations and a browser extension, reaching 230+ registered users in the early launch phase.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'LLM APIs', 'Structured outputs'],
  },
  {
    role: 'Founder & Lead React Native / iOS & AI Engineer',
    company: 'Joseph Works Limited',
    mark: 'JW',
    highlight: '30+ iOS and macOS apps with 4M+ installs',
    place: 'Remote',
    period: 'Feb 2022 — Present',
    points: [
      'Design, build and launch AI-powered apps, owning mobile architecture, feature delivery, subscriptions and App Store releases.',
      'Build cross-platform React Native and TypeScript features with native Swift, SwiftUI and UIKit integrations for device APIs, background tasks and async workflows.',
      'Develop Whisper Transcribe audio capture and AI transcription flows with AVFoundation, FFmpeg and real-time streaming.',
      'Build ChatPDF document Q&A with ingestion, retrieval, LLM-backed answers, streaming chat responses and REST/GraphQL integrations.',
      'Optimize media rendering, memory use and stability with Metal/C++, Instruments, automated testing, TestFlight feedback and production crash diagnostics.',
    ],
    tags: ['React Native', 'TypeScript', 'Swift', 'SwiftUI', 'UIKit', 'AVFoundation', 'FFmpeg', 'Whisper', 'RAG', 'Metal'],
  },
  {
    role: 'Senior iOS Engineer',
    company: 'Apple',
    mark: 'AP',
    highlight: 'Production native iOS features focused on accessible UI, reliability and polished platform-native experiences',
    place: 'California',
    period: 'Oct 2019 — Jan 2022',
    points: [
      'Built and maintained production iOS features in Swift, SwiftUI and UIKit.',
      'Designed modular, testable components with MVVM, protocol-oriented programming and reusable UI patterns.',
      'Implemented asynchronous networking and responsive state flows using Combine, GCD and modern Swift concurrency with lifecycle-aware error handling.',
      'Integrated platform capabilities and privacy-sensitive device services, including Keychain, notifications and application lifecycle workflows.',
      'Investigated launch-time, memory and crash issues with Instruments and Xcode, expanded XCTest/XCUITest coverage and collaborated across design, engineering and QA.',
    ],
    tags: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'GCD', 'XCTest', 'Instruments'],
  },
  {
    role: 'iOS Engineer',
    company: 'ByteDance',
    mark: 'BD',
    highlight: 'Reduced video playback crash rates by about 20%',
    place: 'Beijing, China',
    period: 'Jan 2017 — Apr 2019',
    points: [
      'Built high-performance Swift and Objective-C video-feed components, improving scrolling smoothness, playback and touch responsiveness.',
      'Contributed to live-streaming and real-time video features with WebRTC, media pipelines and backend API integrations.',
      'Resolved production crashes and memory issues, and added automated tests and A/B analytics.',
    ],
    tags: ['Swift', 'Objective-C', 'WebRTC', 'Media pipelines', 'A/B testing'],
  },
];

export const education = {
  degree: 'B.Eng. Computer Science and Technology',
  school: 'Tsinghua University, Beijing',
  mark: 'TH',
  period: 'Jul 2016',
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
    logos: [['Python', 'python'], ['TypeScript', 'typescript'], ['JavaScript', 'javascript'], ['Java', 'java'], ['C#', 'csharp'], ['Swift', 'swift'], ['Kotlin', 'kotlin'], ['Dart', 'dart']],
    more: [],
  },
  {
    group: 'Frontend',
    logos: [['React', 'react'], ['Next.js', 'nextjs'], ['Tailwind', 'tailwind'], ['Vite', 'vite']],
    more: ['Chrome extensions', 'Responsive UI'],
  },
  {
    group: 'Backend',
    logos: [['Node.js', 'nodejs'], ['Express', 'express'], ['Java', 'java'], ['.NET', 'dotnet'], ['FastAPI', 'fastapi'], ['Django', 'django'], ['GraphQL', 'graphql']],
    more: ['REST APIs', 'Background jobs', 'Async processing'],
  },
  {
    group: 'Mobile',
    logos: [['iOS', 'apple'], ['Xcode', 'xcode'], ['React Native', 'react'], ['Flutter', 'flutter'], ['Android', 'android']],
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
