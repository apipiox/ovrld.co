import type { ImageLoaderProps } from 'next/image';
// Pre-generated responsive assets work on both static Sites and standard Next.js hosts.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  return src.startsWith('/images/')
    ? `${src.replace(/\.webp$/, '')}-${width}.webp`
    : src;
}
