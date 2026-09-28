# conman.dev

Personal portfolio, project archive, and writing site for conman.dev.

## Design direction

A restrained desert-road visual system: paper, graphite, faded signage, imperfect geometry, and small hand-drawn SVG marks. The day/night toggle is tied to the local clock by default and can be overridden by the visitor; the preference persists in local storage.

The visual language borrows broad editorial and countercultural cues from desert road ephemera, sketchbooks, old Vegas signage, and expressive ink-on-paper artwork without copying any single artist's work.

## Customize your copy

The main content is in `src/app/data.ts`.

- `projects` controls project cards and project-detail pages.
- `writing` controls writing cards and long-form article pages.
- `src/app/pages/home.component.html` contains your intro, accomplishments, competencies, interests, and contact copy.
- Replace the sample social/contact URLs in `src/app/pages/home.component.html` and `src/app/app.component.ts`.

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

## Build

```bash
npm run build
```

## GitHub

The repository is already initialized with Git and has local commits. Add your GitHub remote and push `main` when repository access is available.

```bash
git remote add origin git@github.com:YOUR-USERNAME/conman.dev.git
git push -u origin main
```
