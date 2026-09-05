import Link from 'next/link';
import { BrandLogo } from '@/components/brand/brand-logo';
import { ArrowUpRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div>
          <BrandLogo />
          <p className="footer-tagline">OVRLD YOUR LIMIT.</p>
        </div>
        <div className="footer-column">
          <p className="eyebrow muted">GEAR / 001</p>
          <Link href="/gear/wrist-wraps">
            Wrist Wraps <ArrowUpRight />
          </Link>
          <Link href="/gear/lifting-straps">
            Grips <ArrowUpRight />
          </Link>
          <Link href="/001">
            The First Drop <ArrowUpRight />
          </Link>
        </div>
        <div className="footer-column">
          <p className="eyebrow muted">OVRLD</p>
          <Link href="/app">
            Training App <ArrowUpRight />
          </Link>
          <Link href="/about">
            Our Story <ArrowUpRight />
          </Link>
        </div>
      </div>
      <div className="footer-bottom eyebrow">
        <span>© {new Date().getFullYear()} OVRLD</span>
        <span>PHYSICAL TOOLS. DIGITAL PROGRESS.</span>
        <a href="#main">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
