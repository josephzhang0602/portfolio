export const codemind = {
  name: 'CodeMind Jobs',
  tagline: 'An AI job search platform for software engineers, built and run by me alone.',
  summary:
    'CodeMind gathers software-engineering jobs from hundreds of sources, scores your resume against each one, tailors it to the posting and fills the application form for you. I designed, built and operate the whole thing: ingestion, AI pipelines, web app, browser extension, billing and SEO.',
  url: 'https://jobs.codemind.site',
  metrics: [
    { value: '~5,000', label: 'new jobs ingested daily' },
    { value: '40+', label: 'job sources & ATS platforms' },
    { value: '$0.0005', label: 'AI enrichment cost per job' },
    { value: '16+', label: 'ATS forms the extension fills' },
  ],
  highlights: [
    {
      icon: 'pipeline',
      title: 'Ingestion at scale',
      body: 'Collectors for 34 ATS platforms (Greenhouse, Lever, Workday, Ashby, SuccessFactors…), plus LinkedIn, Indeed, hiring.cafe, Wellfound and YC. They run on schedules, merge multi-city reposts into one job and follow aggregator copies back to the employer\'s own link.',
    },
    {
      icon: 'spark',
      title: 'LLM enrichment for less than a cent',
      body: 'Every posting is turned into structured data (skills, seniority, salary, visa, work type) with a gpt-5-nano batch, then a retry, then gpt-5-mini, and every answer is validated. On flex processing it costs about $0.0005 per job.',
    },
    {
      icon: 'gauge',
      title: 'ATS scoring where code owns the number',
      body: 'The model only gives a verdict on each requirement and quotes the resume line that supports it. Code checks that each quote really appears in the resume, applies fixed weights and computes the score, so the result can be repeated and checked.',
    },
    {
      icon: 'doc',
      title: 'Resume tailoring with guardrails',
      body: 'Strict-schema rewrites in three modes (ATS-first, Balanced, Looks-real), traced bullets, a gap pass driven by the score, and a benchmark of real job/resume pairs. Exports to ATS-safe .docx and PDF templates.',
    },
    {
      icon: 'cursor',
      title: 'Autofill browser extension',
      body: 'A Manifest V3 extension built from adapters for each board. It fills application forms that span several pages on Workday, Greenhouse, Lever, iCIMS and others, attaches the tailored resume and drafts answers, and leaves Submit to you.',
    },
    {
      icon: 'plug',
      title: 'A full product, not a demo',
      body: 'Stripe billing, an employer job-posting flow, identity verification, job alerts via Resend, an MCP server for AI assistants, programmatic SEO landing pages and an admin console with outreach tooling.',
    },
  ],
  pipeline: [
    { icon: 'search', title: 'Collect', note: '40+ sources: ATS APIs and job boards' },
    { icon: 'layers', title: 'Dedupe', note: 'Reposts and multi-city copies merged into one job' },
    { icon: 'spark', title: 'Enrich', note: 'AI extracts skills, salary, seniority and visa' },
    { icon: 'filter', title: 'Score', note: 'Resume match, every claim checked in code' },
    { icon: 'doc', title: 'Tailor', note: 'Resume rewritten for the role, .docx or PDF' },
    { icon: 'cursor', title: 'Apply', note: 'Extension fills the application form' },
  ],
  stack: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB Atlas', 'OpenAI', 'Playwright', 'Apify', 'Stripe', 'Render', 'Cloudflare R2', 'Sentry', 'MCP'],
};
