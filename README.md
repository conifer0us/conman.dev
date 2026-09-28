# conman.dev

A personal portfolio / writing site built with Angular. The visual direction is a desert day-to-night cycle: paper, graphite, worn road signage, sparse Las Vegas cues, and hand-drawn SVG marks.

## Design intent

The site deliberately avoids a generic portfolio grid. The homepage behaves like a landscape: a strong editorial hero, irregular information cards, project cards that feel like found objects, and writing rows that lead into generous reading pages. The artwork is original inline SVG with pencil/ink-like geometry rather than stock imagery.

## Editing your copy

Start with `src/app/pages/home.component.html` for the homepage copy and `src/app/pages/home.component.ts` for project and writing metadata. Detail-page sample text lives in `src/app/pages/project-detail.component.ts` and `src/app/pages/writing-detail.component.ts`.

## Run locally

Requires Node compatible with Angular 21. Angular 21 is used here because it is an actively supported LTS line and works with the current Node 22 toolchain available during scaffolding.

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## GitHub

The workspace is initialized as a Git repository with an initial commit. The GitHub connector was unavailable in the build environment, so the remote repository still needs to be connected/pushed.
