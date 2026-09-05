import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products, colourways } from '@/data/products';
import { CampaignImage } from '@/components/campaign/campaign-image';
import { BrandMoment } from '@/components/campaign/editorial-section';
import { ProductCard } from '@/components/product/product-card';
import { LaunchSection } from '@/components/campaign/launch-section';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'OVRLD 001 — The First Drop',
  'Two essentials. One intention. Discover OVRLD Wrist Wraps and Grips, our debut performance gear release.',
  '/001',
);
export default function CampaignPage() {
  return (
    <main id="main">
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow lime">THE RELEASE</p>
            <h1 className="title">START WITH THE ESSENTIALS.</h1>
          </div>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index === 0}
            />
          ))}
        </div>
      </section>
      <section className="drop-hero container">
        <div className="drop-heading">
          <p className="eyebrow lime">OVRLD / RELEASE 001</p>
          <span className="eyebrow muted">PREORDERS COMING SOON</span>
        </div>
        <h2 className="display">
          OVRLD <span>001</span>
        </h2>
        <div className="drop-heading">
          <h2>THE FIRST DROP.</h2>
          <p className="copy">
            The beginning of the physical side of OVRLD.
            <br />
            Built around the essentials.
          </p>
        </div>
        <CampaignImage
          className="drop-cover"
          media={{
            image: '/images/campaign.webp',
            alt: 'Concept campaign image of chalked hands preparing to lift a barbell',
          }}
          sizes="92vw"
        />
        <div className="image-credit eyebrow">
          <span>001 / THE FIRST DROP</span>
          <span>CAMPAIGN PREVIEW</span>
        </div>
      </section>
      <section className="colour-story section container">
        <p className="eyebrow lime">FOUR COLOURWAYS / ONE IDENTITY</p>
        <h2 className="statement">
          BLACK AT HEART.
          <br />
          ROOM FOR EXPRESSION.
        </h2>
        <div className="colour-story-grid">
          {colourways.map((colour, index) => (
            <div key={colour.id}>
              <div
                className={`colour-story-sample${colour.id === 'black' ? ' is-primary' : ''}`}
                style={{ background: `var(${colour.token})` }}
              >
                <span className="colour-story-index">0{index + 1}</span>
              </div>
              <span className="eyebrow">{colour.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <p className="preview-note">
          Colourway previews. Final shades and photography will be confirmed
          before launch.
        </p>
      </section>
      <BrandMoment variant="graphic" />
      <section className="drop-detail section container">
        <div>
          <p className="eyebrow lime">LESS NOISE. MORE INTENTION.</p>
          <h2 className="statement">
            THE WORK
            <br />
            COMES FIRST.
          </h2>
          <p className="copy">
            A considered starting point. Wrist wraps and grips, brought
            together under OVRLD 001. Explore the concept details behind each
            product.
          </p>
          <Link href="/gear/wrist-wraps" className="text-link">
            A CLOSER LOOK <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <CampaignImage
          media={{
            image: '/images/wrist-wraps.webp',
            alt: 'Studio concept of woven wrist wraps with OVRLD labels',
          }}
          sizes="(max-width: 700px) 100vw, 48vw"
        />
      </section>
      <LaunchSection />
    </main>
  );
}
