import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: process.env.OVRLD_STATIC_EXPORT === '1' ? 'export' : undefined,
  poweredByHeader: false,
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [480, 768, 1024, 1440, 1920],
    imageSizes: [320],
    formats: ['image/webp'],
  },
};
export default nextConfig;
