# Ethiopian Developer Community Hub

A polished community directory for Ethiopian developers to discover local tech events, celebrate projects, and find learning resources.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Vitest for focused validation tests

## Run locally

1. Install dependencies with `npm install`.
2. Start development mode with `npm run dev`.
3. Open [http://localhost:3000](http://localhost:3000).

## Commands

- `npm run dev` — local development server
- `npm run lint` — lint application code
- `npm test` — run unit tests
- `npm run build` — create a production build

## Architecture

- `app/` holds route pages, global styling, and route-level loading/error boundaries.
- `components/` contains reusable presentation and form components.
- `lib/` contains strictly typed domain models, sample content, and validation logic.
- `tests/` covers reusable behavior independent from the UI.

The submit form currently provides browser-side validation and a confirmation state, deliberately leaving persistence as an integration point rather than storing data insecurely or inventing a backend.

# thiopian-developer-community-hub
