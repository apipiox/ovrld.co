import type { NextConfig } from 'next';
const isStaticExport = process.env.OVRLD_STATIC_EXPORT === '1';
const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [480, 768, 1024, 1440, 1920],
    imageSizes: [320],
    formats: ['image/webp'],
  },
  // Redirects are unsupported under `output: 'export'`, so they're only
  // registered for the standard Next.js/Vercel build.
  ...(isStaticExport
    ? {}
    : {
        async redirects() {
          return [
            {
              source: '/gear/lifting-straps',
              destination: '/gear/grips',
              permanent: true,
            },
          ];
        },
      }),
};
export default nextConfig;
