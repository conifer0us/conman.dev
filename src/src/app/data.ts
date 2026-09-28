export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  summary: string;
  art: string;
  tech: string[];
  status: string;
  role: string;
  sections: ProjectSection[];
  screenshots: { src?: string; alt: string; caption: string }[];
};

export type Writing = {
  slug: string;
  title: string;
  date: string;
  kind: string;
  excerpt: string;
  length: string;
  body: string[];
  pullQuote?: string;
};

export const site = {
  name: 'Your Name Here',
  email: 'hello@conman.dev',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername/',
  goodreads: 'https://www.goodreads.com/',
  letterboxd: 'https://letterboxd.com/',
  footerQuote: 'buy the ticket, take the ride',
  footerQuoteSource: 'https://en.wikipedia.org/wiki/Hunter_S._Thompson'
};

export const projects: Project[] = [
  {
    slug: 'signal-drift', title: 'Signal Drift', year: '2026', type: 'software / product',
    summary: 'A speculative interface for finding calm in noisy systems — the place where a dashboard stops shouting and starts helping.',
    art: 'assets/illustrations/project-signal.svg',
    tech: ['Angular', 'TypeScript', 'D3'], status: 'prototype', role: 'design + engineering',
    sections: [
      { heading: 'why it exists', body: 'People had too many metrics and not enough attention. The real question was which signals deserved a second look.' },
      { heading: 'how it works', body: 'I reduced the interface to a few strong visual anchors, then added interactions only where they clarified change over time.' },
      { heading: 'what changed', body: 'The result was a tighter prototype that made the right anomalies easier to notice without turning the screen into a control room.' }
    ],
    screenshots: [
      { alt: 'Signal Drift dashboard screenshot', caption: 'dashboard / primary experience' },
      { alt: 'Signal Drift interaction screenshot', caption: 'interaction / notable state' },
      { alt: 'Signal Drift process screenshot', caption: 'process / architecture' }
    ]
  },
  {
    slug: 'midnight-index', title: 'Midnight Index', year: '2025', type: 'web / data',
    summary: 'A tiny archive engine for odd little datasets, built to make overlooked patterns feel strangely important.',
    art: 'assets/illustrations/project-index.svg',
    tech: ['Node', 'SQLite', 'CSS'], status: 'shipped', role: 'solo developer',
    sections: [
      { heading: 'why it exists', body: 'A collection of small datasets was technically searchable but emotionally unreadable.' },
      { heading: 'how it works', body: 'I built a lightweight index, then used typographic rhythm and hand-drawn labels to turn browsing into discovery.' },
      { heading: 'what changed', body: 'The result was a working archive with fast search and a more memorable browsing experience.' }
    ],
    screenshots: [
      { alt: 'Midnight Index search screenshot', caption: 'primary archive view' },
      { alt: 'Midnight Index result screenshot', caption: 'interesting result state' },
      { alt: 'Midnight Index data model screenshot', caption: 'technical side' }
    ]
  },
  {
    slug: 'desert-radio', title: 'Desert Radio', year: '2025', type: 'creative code',
    summary: 'An interactive radio dial that turns a playlist into a map of fictional road stops, weather, and neon signs.',
    art: 'assets/illustrations/project-radio.svg',
    tech: ['Web Audio', 'Canvas', 'Angular'], status: 'experiment', role: 'creative developer',
    sections: [
      { heading: 'why it exists', body: 'Playlists are usually linear. I wanted one that felt like wandering.' },
      { heading: 'how it works', body: 'I treated audio as geography and built a dial that changes its landscape, labels, and atmosphere as the listener moves.' },
      { heading: 'what changed', body: 'A small creative experiment where interaction becomes part of the music rather than a control layered on top.' }
    ],
    screenshots: [
      { alt: 'Desert Radio dial screenshot', caption: 'main experience' },
      { alt: 'Desert Radio map screenshot', caption: 'fictional route / map layer' },
      { alt: 'Desert Radio visual state', caption: 'strange or beautiful state' }
    ]
  },
  {
    slug: 'ledger-burn', title: 'Ledger Burn', year: '2024', type: 'tooling / automation',
    summary: 'A small workflow tool that trims repetitive admin from student teams and leaves the useful parts behind.',
    art: 'assets/illustrations/project-ledger.svg',
    tech: ['Python', 'CLI', 'GitHub'], status: 'in use', role: 'developer + maintainer',
    sections: [
      { heading: 'why it exists', body: 'Student teams kept doing the same cleanup and reporting by hand every week.' },
      { heading: 'how it works', body: 'I automated the repetitive steps and left explicit checkpoints where human judgment was actually useful.' },
      { heading: 'what changed', body: 'The result was fewer mechanical tasks, clearer handoffs, and a tool small enough to understand and maintain.' }
    ],
    screenshots: [
      { alt: 'Ledger Burn command line screenshot', caption: 'CLI in action' },
      { alt: 'Ledger Burn workflow screenshot', caption: 'workflow before / after' },
      { alt: 'Ledger Burn repository screenshot', caption: 'tests / docs / implementation' }
    ]
  }
];

export const writing: Writing[] = [
  {
    slug: 'notes-from-exit-12', title: 'Notes from Exit 12', date: 'Aug 2026', kind: 'short story',
    excerpt: 'A late-night roadside story about a broken vending machine, a borrowed car, and a very specific kind of luck.', length: '7 min',
    body: [
      'The gas station had one working light, one working vending machine, and a bell over the door that sounded much too polite for midnight.',
      'We took the frontage road because neither of us could remember the last time we had made a decision for a sensible reason.',
      'By morning, the story had changed depending on who told it, which is usually how you know it was worth remembering.'
    ], pullQuote: 'Some roads only make sense after you have already taken them.'
  },
  {
    slug: 'what-i-learned-making-things', title: 'What I learned making things', date: 'Jun 2026', kind: 'essay',
    excerpt: 'A field note on shipping small projects, keeping weird ideas alive, and getting better at the boring parts.', length: '5 min',
    body: [
      'The best projects I have made usually began with a question that was too small to justify a roadmap.',
      'I keep coming back to the same lesson: making something a little stranger is often more useful than making it a little safer.',
      'The work gets better when I stop trying to make every decision permanent.'
    ], pullQuote: 'The useful part is usually the part nobody planned.'
  },
  {
    slug: 'the-parts-between', title: 'The parts between', date: 'Apr 2026', kind: 'short story',
    excerpt: 'Three people wait for a bus that keeps saying it is two minutes away.', length: '4 min',
    body: [
      'The bus stop had a roof, a bench, and an advertisement for a casino that had closed six years earlier.',
      'They waited long enough for the silence between strangers to become a kind of conversation.',
      'When the bus finally arrived, nobody looked surprised.'
    ], pullQuote: 'Everything arrives eventually, just rarely when you expect it.'
  }
];
