# conman.dev

Angular portfolio + writing site.

## Run

```bash
npm install
npm start
```

Build with `npm run build`.

## Edit content

Most copy lives in `src/app/data.ts`.

- `projects` = project cards + detail pages
- `writing` = stories/essays + detail pages
- `site` = name, contact links, social links, footer quote
- `home.component.html` = homepage section copy

Add a project or story by copying the matching object shape in `CONTENT-GUIDE.md`.

## Artwork

Site SVGs live in `src/assets/illustrations/`.
Project screenshots can live in `src/assets/projects/` and are referenced from `data.ts`.

## Push

```bash
git remote add origin git@github.com:YOUR-USERNAME/conman.dev.git
git push -u origin main
```
