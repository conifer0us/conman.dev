export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;
  summary: string;
  glyph: 'signal' | 'index' | 'radio' | 'ledger';
  tech: string[];
  status: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
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

export const projects: Project[] = [
  {
    slug: 'signal-drift',
    title: 'Signal Drift', year: '2026', type: 'software / product',
    summary: 'A speculative interface for finding calm in noisy systems — the place where a dashboard stops shouting and starts helping.',
    glyph: 'signal', tech: ['Angular', 'TypeScript', 'D3'], status: 'prototype', role: 'design + engineering',
    problem: 'Sample: people had too many metrics and not enough attention. The real question was which signals deserved a second look.',
    approach: 'Sample: reduced the interface to a few strong visual anchors, then added interactions only where they clarified change over time.',
    outcome: 'Sample: a tighter prototype that made the right anomalies easier to notice without turning the screen into a control room.'
  },
  {
    slug: 'midnight-index',
    title: 'Midnight Index', year: '2025', type: 'web / data',
    summary: 'A tiny archive engine for odd little datasets, built to make overlooked patterns feel strangely important.',
    glyph: 'index', tech: ['Node', 'SQLite', 'CSS'], status: 'shipped', role: 'solo developer',
    problem: 'Sample: a collection of small datasets was technically searchable but emotionally unreadable.',
    approach: 'Sample: built a lightweight index, then used typographic rhythm and hand-drawn labels to turn browsing into discovery.',
    outcome: 'Sample: a working archive with fast search and a more memorable browsing experience.'
  },
  {
    slug: 'desert-radio',
    title: 'Desert Radio', year: '2025', type: 'creative code',
    summary: 'An interactive radio dial that turns a playlist into a map of fictional road stops, weather, and neon signs.',
    glyph: 'radio', tech: ['Web Audio', 'Canvas', 'Angular'], status: 'experiment', role: 'creative developer',
    problem: 'Sample: playlists are usually linear. I wanted one that felt like wandering.',
    approach: 'Sample: treated audio as geography and built a dial that changes its landscape, labels, and atmosphere as the listener moves.',
    outcome: 'Sample: a small creative experiment where interaction becomes part of the music rather than a control layered on top.'
  },
  {
    slug: 'ledger-burn',
    title: 'Ledger Burn', year: '2024', type: 'tooling / automation',
    summary: 'A small workflow tool that trims repetitive admin from student teams and leaves the useful parts behind.',
    glyph: 'ledger', tech: ['Python', 'CLI', 'GitHub'], status: 'in use', role: 'developer + maintainer',
    problem: 'Sample: student teams kept doing the same cleanup and reporting by hand every week.',
    approach: 'Sample: automated the repetitive steps and left explicit checkpoints where human judgment was actually useful.',
    outcome: 'Sample: fewer mechanical tasks, clearer handoffs, and a tool small enough to understand and maintain.'
  }
];

export const writing: Writing[] = [
  {
    slug: 'notes-from-exit-12', title: 'Notes from Exit 12', date: 'Aug 2026', kind: 'short story',
    excerpt: 'A late-night roadside story about a broken vending machine, a borrowed car, and a very specific kind of luck.', length: '7 min',
    body: [
      'Replace this paragraph with the opening of your story. The reading view is deliberately quiet: the words are the main event.',
      'Another paragraph goes here. You can paste prose directly into this array for the starter version, then migrate the content to markdown or a CMS later.',
      'Use line breaks sparingly and let the measure stay narrow. Long-form pages should feel closer to a printed page than to a dashboard.'
    ], pullQuote: 'Put the line you want readers to remember here.'
  },
  {
    slug: 'what-i-learned-making-things', title: 'What I learned making things', date: 'Jun 2026', kind: 'essay',
    excerpt: 'A field note on shipping small projects, keeping weird ideas alive, and getting better at the boring parts.', length: '5 min',
    body: [
      'Replace this with your essay. The point is to give you enough structure to publish immediately while leaving the actual voice to you.',
      'A second paragraph can carry the argument, story, or reflection. This layout supports short pieces now and much longer writing later.',
      'Close with something concrete: what changed, what you would do differently, or what question you are still carrying.'
    ], pullQuote: 'A sentence worth underlining belongs here.'
  },
  {
    slug: 'the-parts-between', title: 'The parts between', date: 'Apr 2026', kind: 'short story',
    excerpt: 'Three people wait for a bus that keeps saying it is two minutes away.', length: '4 min',
    body: [
      'Start the story here. This page intentionally avoids a heavy publishing UI so the piece can retain its own pacing.',
      'More story goes here. When you have real work to publish, swap in your own paragraphs and the page will remain visually coherent.',
      'A final paragraph lands here, wherever your story actually needs to end.'
    ], pullQuote: 'Your own line, in your own voice.'
  }
];
