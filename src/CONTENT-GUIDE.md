# conman.dev content guide

The site is content-driven. You add a project or story by adding one object to the matching array in `src/app/data.ts`. The Angular detail page is already the reusable template, so no new HTML page is needed for a normal entry.

## Add a project

Copy this shape into `projects`:

```ts
{
  slug: 'my-project',
  title: 'My Project',
  year: '2026',
  type: 'web / software',
  summary: 'One or two sentences for the project card and the top of the detail page.',
  art: 'assets/illustrations/project-signal.svg',
  tech: ['Angular', 'TypeScript'],
  status: 'shipped',
  role: 'developer',
  sections: [
    { heading: 'why it exists', body: 'What problem or question started it.' },
    { heading: 'how it works', body: 'What you built and the important decisions.' },
    { heading: 'what changed', body: 'Outcome, result, lesson, or impact.' }
  ],
  screenshots: [
    { src: 'assets/projects/my-project-01.png', alt: 'Main screen', caption: 'main experience' },
    { src: 'assets/projects/my-project-02.png', alt: 'Interesting state', caption: 'interesting state' }
  ]
}
```

The URL becomes `/projects/my-project` automatically.

## Add a story or essay

Copy this shape into `writing`:

```ts
{
  slug: 'my-story',
  title: 'My Story',
  date: 'Sep 2026',
  kind: 'short story',
  excerpt: 'A short description for the homepage.',
  length: '8 min',
  body: [
    'First paragraph.',
    'Second paragraph.',
    'Third paragraph.'
  ],
  pullQuote: 'Optional pull quote.'
}
```

The URL becomes `/writing/my-story` automatically.

## Artwork

All SVG artwork used by the site lives in `src/assets/illustrations/`. Replace an SVG there without changing the templates. Project card artwork is referenced by the `art` field above. Project screenshots can live separately in `src/assets/projects/` so the illustrations folder stays focused on reusable drawings.
