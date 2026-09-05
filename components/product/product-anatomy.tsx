import Image from 'next/image';
import type { Product } from '@/data/products';
export function ProductAnatomy({ product }: { product: Product }) {
  return (
    <section className="anatomy section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow lime">{product.number} / A CLOSER LOOK</p>
            <h2 className="title">THE DETAILS MATTER.</h2>
          </div>
          <p className="intro-line">
            A study of the concept.
            <br />
            Final specifications coming before launch.
          </p>
        </div>
        <div className="anatomy-image">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, 90vw"
          />
          {product.anatomy.map((point) => (
            <div
              key={point.label}
              className={`anatomy-callout ${point.side}`}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
            >
              <i />
              <span>{point.label}</span>
            </div>
          ))}
        </div>
        <ul className="anatomy-mobile-labels">
          {product.anatomy.map((point) => (
            <li key={point.label}>{point.label}</li>
          ))}
        </ul>
        <p className="preview-note">
          Labels describe the pictured concept only. They are not final
          manufacturing specifications.
        </p>
      </div>
    </section>
  );
}
