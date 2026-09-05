import type { MetadataRoute } from 'next';
import { site, routes } from '@/data/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
