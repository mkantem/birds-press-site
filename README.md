# Bamako Institute Press Website (React + Vite)

Official website for **Bamako Institute for Research and Development Studies Press (BIRDs Press)**.

The app is bilingual (English/French), includes journal pages and policy pages, and renders a mixed "Latest Articles" stream from AJDI and RASP RSS feeds.

## Tech Stack

- React 18
- React Router
- Vite
- Tailwind CSS
- Radix UI primitives
- `react-helmet` for SEO metadata

## Prerequisites

- Node.js `20.19.1` (from `.nvmrc`)
- npm

If you use `nvm`:

```bash
nvm use
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open: `http://localhost:3000`

## Available Scripts

- `npm run dev` - starts Vite dev server on port `3000`
- `npm run build` - generates `public/llms.txt` and creates production build
- `npm run preview` - serves production build locally on port `3000`
- `npm run lint` - runs ESLint in quiet mode
- `npm run lint:warn` - runs ESLint with full output

## Project Structure

```text
src/
  components/      Shared UI (Header, Footer, UI primitives)
  contexts/        Global context providers (LanguageContext)
  hooks/           Custom hooks (RSS feed aggregation logic)
  lib/             Utility helpers
  pages/           Route pages (Home, Journals, Policies, Contact, etc.)
  App.jsx          Route map and top-level layout
  main.jsx         App entrypoint
public/
  assets/          Static images and assets
  llms.txt         Auto-generated page index (build step)
tools/
  generate-llms.js Generates public/llms.txt from pages and routes
```

## Routing and Language

- Base route `/` renders homepage.
- Language routes use `/:lang/...` where `lang` is typically `en` or `fr`.
- Many pages expose both English and French URL patterns.
- Language state is managed via `LanguageContext`.

## RSS Feed Integration

Latest articles are loaded via `src/hooks/useRSSFeed.js`.

Current sources:

- RASP: `https://revue-rasp.org/rasp/gateway/plugin/WebFeedGatewayPlugin/rss2`
- AJDI: `https://press.b-institute.org/ajdi/gateway/plugin/WebFeedGatewayPlugin/rss2`

Behavior:

- Fetches both feeds and parses XML items.
- Uses fallback fetch endpoints/candidates for reliability.
- Interleaves feed results (instead of showing only one journal).
- Sorts each source by newest publication date before mixing.

## Journal Card Links (Home Page)

Configured in `src/pages/HomePage.jsx` for each journal object:

- `website`
- `currentUrl`
- `archiveUrl`
- `submitUrl`

Buttons on the home page map to those fields.

## Contact Data

Configured in `src/pages/Contact.jsx`:

- Physical address
- Postal address
- Office hours
- Email contacts

## Build Output

- Production bundle: `dist/`
- Generated page index: `public/llms.txt`

## Deployment Notes

- This is a static frontend build. Deploy `dist/` to any static hosting platform (Nginx, Apache, Netlify, Vercel, etc.).
- Ensure SPA route fallback to `index.html` is enabled on the host.
- If feeds are blocked by CORS/network rules in a target environment, validate RSS fallback endpoints in `useRSSFeed.js`.

## Maintenance Checklist

- Keep journal URLs and submission links current in `HomePage.jsx`.
- Verify RSS endpoints periodically for availability.
- Run `npm run lint` and `npm run build` before release.

