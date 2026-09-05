import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CampaignImage } from './campaign-image';
import type { Product } from '@/data/products';
export function EditorialSection({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <section className={`editorial-product ${reverse ? 'reverse' : ''}`}>
      <CampaignImage
        media={{ image: product.image, alt: product.imageAlt }}
        sizes="(max-width: 700px) 100vw, 50vw"
      />
      <div className="editorial-copy">
        <p className="eyebrow lime">{product.number} / PERFORMANCE GEAR</p>
        <h2 className="statement">{product.statement}</h2>
        <p className="copy">{product.story}</p>
        <Link className="text-link" href={`/gear/${product.slug}`}>
          EXPLORE {product.shortName.toUpperCase()}{' '}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
export function BrandMoment() {
  return (
    <section className="brand-moment">
      <CampaignImage
        media={{
          image: '/images/campaign.webp',
          alt: 'Concept campaign image of chalked hands preparing to lift a barbell',
        }}
      />
      <div className="brand-moment-content container">
        <p className="eyebrow">NO SHORTCUTS. JUST THE WORK.</p>
        <h2 className="statement">
          BUILT FOR
          <br />
          HEAVY WORK.
        </h2>
        <div className="brand-moment-bottom">
          <span className="eyebrow lime">OVRLD YOUR LIMIT.</span>
          <span className="eyebrow">001 / CAMPAIGN PREVIEW</span>
        </div>
      </div>
    </section>
  );
}
