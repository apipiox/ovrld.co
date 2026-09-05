import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true'
        ? { allow: '/' }
        : { disallow: '/' }),
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
