# OVRLD.co

OVRLD's gear-led launch website. Built with Next.js App Router, React, TypeScript, Tailwind CSS, Motion, and a small set of accessible Base UI/Shadcn controls.

## Local development

Requires Node 22.13+ and npm.

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

`npm run build:sites` produces an `out/` static export for the private Sites review environment. The normal `build` and `start` commands retain the standard Next.js/Vercel workflow.

## Routes and ownership

| Route                  | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `/`                    | Gear-led campaign, app introduction, ecosystem, notification form |
| `/001`                 | The First Drop editorial campaign                                 |
| `/gear/wrist-wraps`    | Shared product system, release 001.01                             |
| `/gear/lifting-straps` | Shared product system, release 001.02                             |
| `/app`                 | Actual native app screenshots and supported features              |
| `/about`               | Concise brand philosophy                                          |

Pages and editorial content are Server Components. Client boundaries are navigation, the product colour/gallery/form experience, the form itself, and section reveals. There is no checkout, invented price, customer review, or unsupported product specification.

- `data/products.ts`: typed product definitions, colourways, availability, anatomy callouts, optional comparison and how-to content.
- `data/site.ts`: production origin and release registry. Add later drops here and create their campaign routes when there is real content.
- `components/brand/brand-logo.tsx`: shared wordmark renderer.
- `components/product`: reusable product experience, anatomy, comparison, and optional media-backed use guides.
- `components/forms/notify-form.tsx`: semantic form and accessible interaction states.
- `lib/subscribe.ts`: validation and adapter boundary. **The default mock adapter never stores or transmits addresses.**
- `app/globals.css`: central colour, spacing, typography, and motion tokens; responsive layouts. `--lime` is the brand accent.
- `docs/DEPLOYMENT.md`: deployment and launch configuration.
- `docs/ASSETS.md`: provenance and replacement workflow.

## Email integration

The preview visibly says that email addresses are not stored. Valid mock submissions confirm only the demo; they never say the visitor was subscribed. The UI supports validation, submitting/disabled, duplicate protection, success, failure/retry, and unmount cancellation. Automated tests inject adapters to verify failure and real-success presentation.

Replace `mockSubscribeAdapter` at the `subscribeEmail` boundary with a real implementation. Keep provider secrets server-side. Return `{ mode: 'live' }` only after durable storage succeeds. Update the pre-submit disclosure when the backend and privacy notice are ready; until then leave the mock default intact. There are no hidden test email addresses that force success or failure.

## Product launch transition

`ProductAvailability` is a discriminated union. For launch, replace `{ status: 'coming-soon' }` with `{ status: 'preorder', price, currency, preorderUrl }` after integrating the real preorder destination. The shared product panel renders actual currency and a PREORDER action without changing its layout. No checkout exists in this version.

Colour swatches show all four preview shades. Black is the supplied concept image. Other choices explicitly state that black is shown until approved colour photography is available. Add an `image` path per colourway to enable the image swap. Do not present recoloured placeholder images as final products.

Optional comparison and how-to sections are wired to structured fields but hidden while content is absent. This avoids unverified comparison claims and instructions. Video slots accept MP4, WebM, a poster image, and captions; clips remain user-controlled and never autoplay.

## Remaining launch inputs

Approved product designs/specifications, final colourway photography, preorder pricing/timing, shipping and returns terms, a real mailing integration with privacy copy, and eventual app availability. The current site is a functioning prelaunch implementation; these business inputs remain intentionally unconfirmed.
