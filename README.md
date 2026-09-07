
# TERRAN

Arabic RTL storefront for TERRAN men's accessories. The site is a statically rendered Next.js application; orders are handed off to Instagram and there is no application backend or database.

## Requirements

- Node.js 22 LTS (the minimum supported version is `20.9.0`)
- npm 11 or a compatible npm version

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` during development.

## Environment

Copy `.env.example` to `.env.local` when configuring a deployment. Set `SITE_URL` to the public HTTPS origin, for example `https://terran.example`, so canonical and Open Graph URLs are generated correctly. `SITE_URL` is a URL, not a secret, and is read only while Next.js generates metadata.

## Validation

```bash
npm run lint
npm run build
npm run test:e2e
npm run test:a11y
```

The Playwright tests start a local development server automatically. Install the browser once with `npx playwright install chromium` if Playwright reports that Chromium is missing.

## Production deployment

For Vercel, connect the repository and use the detected Next.js preset. Set `SITE_URL` to the final HTTPS domain.

For a Node.js host such as Render or Railway:

```bash
npm ci
npm run build
npm run start
```

Use the provider-provided `PORT`; `next start` listens on it automatically. No database, backend URL, CORS configuration, or other runtime secret is required.

## Monitoring

Configure an external uptime check against `/` after the public domain is live. Alert on non-2xx responses and failed TLS checks. The application is static, so provider deployment logs plus the uptime check are sufficient; no custom health endpoint is needed.

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn more about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=default-template) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
