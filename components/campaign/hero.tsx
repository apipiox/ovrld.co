import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="cross" aria-hidden="true">
            +
          </span>{' '}
          PHYSICAL TOOLS. DIGITAL PROGRESS.
        </p>
        <h1 className="display">
          OVRLD
          <br />
          YOUR
          <br />
          <span>LIMIT.</span>
        </h1>
        <p className="copy">
          Performance gear and training software built for the work.
        </p>
        <div className="actions">
          <Link className="action" href="/001">
            EXPLORE OVRLD 001 <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link className="text-link" href="/app">
            DISCOVER THE APP <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <a href="#first-drop" className="hero-foot eyebrow">
          SCROLL TO EXPLORE <ArrowDown aria-hidden="true" />
        </a>
      </div>
      <div className="hero-visual">
        <Image
          src="/images/wrist-wraps.webp"
          alt="Concept preview of OVRLD black wrist wraps, photographed on a textured graphite surface"
          fill
          preload
          sizes="(max-width: 700px) 100vw, 50vw"
        />
        <span className="hero-side-index eyebrow">001 / THE FIRST DROP</span>
        <div className="hero-image-label">
          <div>
            <span className="eyebrow muted">001.01 / WRIST WRAPS</span>
            <strong>BUILT FOR HEAVY WORK.</strong>
          </div>
          <Link
            href="/001"
            className="hero-image-cta"
            aria-label="Explore the first drop"
          >
            <ArrowUpRight />
          </Link>
        </div>
        <span className="hero-preview-label">CONCEPT PREVIEW</span>
      </div>
    </section>
  );
}
