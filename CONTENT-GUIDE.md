# Content guide

Add entries in `src/app/data.ts`. No new page component is needed.

## Project

```ts
{
  slug: 'my-project',
  title: 'My Project',
  year: '2026',
  type: 'web / software',
  summary: 'Short description.',
  art: 'assets/illustrations/project-signal.svg',
  tech: ['Angular', 'TypeScript'],
  status: 'shipped',
  role: 'developer',
  sections: [
    { heading: 'why it exists', body: '...' },
    { heading: 'how it works', body: '...' },
    { heading: 'what changed', body: '...' }
  ],
  screenshots: [
    { src: 'assets/projects/my-project-01.webp', alt: 'Main screen', caption: 'main view' }
  ]
}
```

URL: `/projects/my-project`

## Writing

```ts
{
  slug: 'my-story',
  title: 'My Story',
  date: 'Sep 2026',
  kind: 'short story',
  excerpt: 'Short description.',
  length: '8 min',
  body: ['Paragraph one.', 'Paragraph two.'],
  pullQuote: 'Optional.'
}
```

URL: `/writing/my-story`

SVGs go in `src/assets/illustrations/`. Screenshots go in `src/assets/projects/`.
