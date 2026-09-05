import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/gear/${product.slug}`} className="product-card">
      <div className="product-card-image">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, 46vw"
        />
        <span className="product-card-number eyebrow">
          {product.number} <span className="muted">/</span> BLACK
        </span>
        <span className="card-arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
      <div className="product-card-info">
        <div>
          <h3>{product.name}</h3>
          <div
            className="colour-dots"
            aria-label="Preview colourways: Black, Grey, Brown, Light Pink"
          >
            {product.colourways.map((colour) => (
              <span
                key={colour.id}
                className="colour-dot"
                style={{ background: `var(${colour.token})` }}
              />
            ))}
          </div>
        </div>
        <span className="eyebrow muted">COMING SOON</span>
      </div>
    </Link>
  );
}
