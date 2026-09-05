export const site = {
  name: 'OVRLD',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ovrld.co',
  tagline: 'OVRLD YOUR LIMIT.',
  appStatus: 'Coming soon',
  campaignImage: '/images/campaign.webp',
  wordmark: '/brand/wordmark.webp',
};
export const releases = [
  {
    id: '001',
    subtitle: 'THE FIRST DROP',
    productSlugs: ['wrist-wraps', 'lifting-straps'],
  },
] as const;
export const routes = [
  '/',
  '/001',
  '/gear/wrist-wraps',
  '/gear/lifting-straps',
  '/app',
  '/about',
];
