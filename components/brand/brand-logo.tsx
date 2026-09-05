import { site } from '@/data/site';
import Image from 'next/image';
import Link from 'next/link';
export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="OVRLD home"
      className={`brand-logo ${className}`}
    >
      <Image
        unoptimized
        src={site.wordmark}
        width={620}
        height={82}
        alt="OVRLD"
      />
    </Link>
  );
}
