import { BrandLogo } from '@/components/brand/brand-logo';
import Link from 'next/link';
export function Ecosystem() {
  return (
    <section className="ecosystem section container">
      <p className="eyebrow muted">THE OVRLD ECOSYSTEM</p>
      <h2 className="title">ONE BRAND. EVERY REP.</h2>
      <div className="ecosystem-diagram">
        <Link href="/001">
          <span className="eyebrow lime">01 / PHYSICAL</span>
          <span>
            WRAPS. STRAPS.
            <br />
            THE SETUP.
          </span>
        </Link>
        <div className="ecosystem-brand" aria-label="OVRLD">
          <BrandLogo />
        </div>
        <Link href="/app">
          <span className="eyebrow lime">02 / DIGITAL</span>
          <span>
            LOG. TRACK.
            <br />
            THE PROGRESS.
          </span>
        </Link>
      </div>
    </section>
  );
}
