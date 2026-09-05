import type { Metadata } from 'next';
import { site } from '@/data/site';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: `${title} | OVRLD`,
      description,
      url: path,
      images: [
        {
          url: '/brand/banner.webp',
          width: 1600,
          height: 645,
          alt: 'OVRLD wordmark',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | OVRLD`,
      description,
      images: ['/brand/banner.webp'],
    },
  };
}
