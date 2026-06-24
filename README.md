# Aspire Academy Website

## Course Data (SQLite)

Course content for:

- `/discover-courses`
- `/course-detail/[slug]`
- `/en/discover-courses`
- `/en/course-detail/[slug]`

is stored in a SQLite database at `data/courses.sqlite`.

Run the seed script manually when you want to initialize or refresh the database:

```bash
npm run db:seed
```

To recreate the database from scratch:

```bash
npm run db:seed:force
```

The app does not auto-update the database during normal prompts or regular page builds.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Seed the SQLite database (first run only):

```bash
npm run db:seed
```

3. Start the dev server:

```bash
npm run dev
```

## Static Build

This project uses Next.js static export (`output: "export"`). Build output is generated in the `out/` directory:

```bash
npm run build
```

## GitHub Pages Deployment

Deployment is handled by `.github/workflows/deploy.yml`:

- Builds the static site with `npm run build`
- Uploads `out/` as the Pages artifact
- Deploys via `actions/deploy-pages`

For CI or first-time setup, make sure `data/courses.sqlite` exists before `npm run build` is executed.
