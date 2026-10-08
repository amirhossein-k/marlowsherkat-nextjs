# Marlow Corporate Website

Persian RTL corporate website for Marlow, an office and gaming chair manufacturer in Tehran.

## Included

- Responsive Next.js App Router website
- Persian RTL layout and content
- Corporate hero, company profile, product families, quality principles, portfolio, and contact sections
- Local optimized product visuals in `public/products`
- Product gallery and zoom
- Agency and partnership request form at `/agency`
- MongoDB persistence through Next.js Route Handlers
- Custom management dashboard at `/dashboard`
- Portfolio page at `/projects`
- Vercel configuration and deployment guide

## Local setup

```bash
cp .env.example .env.local
# edit .env.local with MongoDB Atlas values
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## MongoDB

The agency form posts to `/api/agency` and stores records in the `agency_requests` collection. See `MONGODB-NEXTJS.md`.

## Vercel

See `VERCEL-DEPLOY.md`. Set `MONGODB_URI` and `MONGODB_DB` in Vercel Project Settings before production use.

## Demo content

Tehran addresses and product visuals are sample content for this prototype. Replace them with official Marlow data and photography before public launch.
