import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CampaignImage } from '@/components/campaign/campaign-image';
import { Ecosystem } from '@/components/campaign/ecosystem';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Our Story — Built for the Work',
  'OVRLD is an emerging performance brand creating physical and digital tools for people serious about training.',
  '/about',
);
export default function AboutPage() {
  return (
    <main id="main">
      <section className="about-hero section container">
        <p className="eyebrow lime">OUR STORY / STILL BEING WRITTEN</p>
        <h1 className="display">
          IT STARTS
          <br />
          WITH
          <br />
          <span className="lime">THE WORK.</span>
        </h1>
        <div className="about-intro">
          <p className="about-lead">
            Physical tools.
            <br />
            Digital tools.
            <br />
            One intention.
          </p>
          <div>
            <p>
              OVRLD began with training software: a way to record the work,
              revisit a session, and see what changed.
            </p>
            <p>
              Now, that same focus is extending to the equipment used in the
              work itself. OVRLD 001 introduces our first wrist wraps and
              grips.
            </p>
            <p>
              We’re an emerging performance brand. The ambition is simple:
              create physical and digital tools for people serious about
              training.
            </p>
          </div>
        </div>
      </section>
      <CampaignImage
        className="about-campaign"
        media={{
          image: '/images/campaign.webp',
          alt: 'Campaign concept of a lifter’s hands and wrist wraps at a barbell',
        }}
        sizes="100vw"
      />
      <Ecosystem />
      <section className="about-closing section container">
        <p className="eyebrow lime">THIS IS THE BEGINNING.</p>
        <h2 className="statement">OVRLD YOUR LIMIT.</h2>
        <div className="actions">
          <Link href="/001" className="action">
            EXPLORE THE FIRST DROP <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link href="/app" className="text-link">
            DISCOVER THE APP <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
