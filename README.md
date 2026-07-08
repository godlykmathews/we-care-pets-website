This is the website for We Care Pets, built with Next.js.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set `NEXT_PUBLIC_SITE_URL` or `SITE_URL` to the production origin before building for deployment, for example:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com npm run build
```

## Deploy on Cloudflare Workers

This app uses `@opennextjs/cloudflare`. Keep the normal Next.js build script as `npm run build`, but set the Cloudflare Workers deploy command to:

```bash
npm run deploy
```

If the Cloudflare Workers build pipeline is configured as separate commands, use:

```bash
npm run build
npx wrangler deploy
```

The `postbuild` hook adapts the completed Next.js build into `.open-next`, which is the worker output that Wrangler needs. For local manual deployments, `npm run deploy` runs the full OpenNext build and deploy flow.

Use `npm run build:next` when you only want the raw Next.js build without the OpenNext adapter step.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
