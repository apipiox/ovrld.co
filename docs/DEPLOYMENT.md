# Deployment

## Standard Next.js / Vercel

1. Push this repository to the chosen Git provider and import it in Vercel using the Next.js preset.
2. Install with `npm ci`; build with `npm run build`. Do not set `OVRLD_STATIC_EXPORT` for this workflow.
3. Set `NEXT_PUBLIC_SITE_URL=https://ovrld.co` for production, or the trusted preview origin for a separate preview.
4. Leave `NEXT_PUBLIC_ALLOW_INDEXING=false` for previews. Set it to `true` only for the approved public launch. Both metadata and robots respect it.
5. Connect the mailing provider through `lib/subscribe.ts` with a server-side API and server-only credentials. Add rate limiting, provider-side deduplication, retention/unsubscribe handling, and privacy wording as part of that integration. Verify a real stored test record before changing UI copy to claim signup success.
6. Replace and approve conceptual product assets and copy before accepting preorders. Configure the typed availability data and a genuine preorder destination when ready.
7. Test the deployed routes and notifications before enabling indexing. Configure the domain/DNS only when explicitly authorized. No DNS changes were made by this build.

No server secrets are required for the current preview. See `.env.example` for the build-time public configuration. `NEXT_PUBLIC_*` values are public and must never hold provider credentials.

## Private Sites review

`npm run build:sites` uses Next.js static export. `.openai/hosting.json` selects `out/`. Responsive image variants are pre-generated, so this does not require a Next.js image optimization server. This copy is private and uses the exact same source and components as the standard deployment.

The default metadata origin is the intended production domain, `https://ovrld.co`, as specified in the brief. For the private Sites build, set `NEXT_PUBLIC_SITE_URL` to that private review origin so preview canonicals, sitemap and social image URLs remain internally consistent. Keep indexing disabled.

## Images

To replace assets, follow `ASSETS.md`, run `npm run prepare:images`, then rebuild. Build-time transforms provide predictable static-host behaviour. All gallery images use explicit dimensions or aspect ratios with responsive sizes, and only the genuine hero/LCP asset is preloaded on each gear/campaign route. Below-fold imagery is lazy loaded.

## Validation boundaries

A successful local or private build does not mean `ovrld.co` has been updated. Core Web Vitals need measurement on the final public host with real traffic and final campaign assets. This version has no purchase or email-storage backend.
