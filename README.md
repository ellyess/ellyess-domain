# ellyess.com — Portfolio v1

Minimal, systems-oriented portfolio built with Next.js and Tailwind.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel-ready deployment

## Local development

1. Install Node.js 20+
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000)

## Structure

- `app/` route pages and layout
- `components/` reusable UI primitives
- `content/site.ts` centralized placeholder content
- `app/opengraph-image.tsx` and `app/twitter-image.tsx` generated social cards
- `app/manifest.ts` web app metadata route

## Production notes

- Global SEO metadata is defined in `app/layout.tsx`
- Icon files are `app/icon.svg` and `app/apple-icon.svg`
- Vercel headers config is in `vercel.json`

## Deployment

Push to GitHub and import in Vercel. Framework preset: Next.js.
