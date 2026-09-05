'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColourSwatches } from './colour-swatches';
import { NotifyForm } from '@/components/forms/notify-form';
import type { Product } from '@/data/products';
export function ProductExperience({ product }: { product: Product }) {
  const [colour, setColour] = useState('black');
  const [formOpen, setFormOpen] = useState(false);
  const [view, setView] = useState<'full' | 'detail'>('full');
  const formRef = useRef<HTMLDivElement>(null);
  const selected = product.colourways.find((item) => item.id === colour)!;
  const image = selected.image || product.image;
  function showForm() {
    setFormOpen(true);
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
        block: 'nearest',
      });
      formRef.current?.querySelector('input')?.focus({ preventScroll: true });
    });
  }
  return (
    <section className="product-experience">
      <div className="product-gallery">
        <div
          className={`gallery-primary ${view === 'detail' ? 'detail-view' : ''}`}
        >
          <Image
            key={image}
            src={image}
            alt={product.imageAlt}
            fill
            preload
            sizes="(max-width: 800px) 100vw, 60vw"
          />
          <span className="gallery-caption eyebrow">
            {product.number} /{' '}
            {selected.image ? selected.name.toUpperCase() : 'BLACK'}
          </span>
          <div className="gallery-controls" aria-label="Product image view">
            <button
              type="button"
              aria-label="Show full product"
              aria-pressed={view === 'full'}
              onClick={() => setView('full')}
            >
              01
            </button>
            <button
              type="button"
              aria-label="Show texture close-up"
              aria-pressed={view === 'detail'}
              onClick={() => setView('detail')}
            >
              02
            </button>
          </div>
        </div>
        <div className="gallery-support">
          <div className="gallery-detail">
            <Image
              src={product.image}
              alt={`Close-up crop of the ${product.shortName.toLowerCase()} concept`}
              fill
              sizes="30vw"
            />
            <span className="eyebrow">TEXTURE / CONCEPT DETAIL</span>
          </div>
          <div className="gallery-detail lifestyle">
            <Image
              src="/images/campaign.webp"
              alt="Campaign concept showing a lifter preparing a barbell"
              fill
              sizes="30vw"
            />
            <span className="eyebrow">IN THE WORK / CAMPAIGN</span>
          </div>
        </div>
        <p className="preview-note">
          Concept imagery. Final product design and specifications may differ.
        </p>
      </div>
      <div className="product-information">
        <p className="eyebrow lime">{product.number} / THE FIRST DROP</p>
        <h1 className="title">{product.name}</h1>
        <p className="availability">
          {product.availability.status === 'coming-soon'
            ? 'COMING SOON'
            : new Intl.NumberFormat('en-SG', {
                style: 'currency',
                currency: product.availability.currency,
              }).format(product.availability.price)}
        </p>
        <p className="copy">{product.description}</p>
        <ColourSwatches
          colours={product.colourways}
          value={colour}
          onChange={setColour}
        />
        <p className="colour-status" aria-live="polite">
          {colour === 'black'
            ? 'Black concept shown.'
            : `${selected.name} colourway preview. Black product shown; ${selected.name.toLowerCase()} photography coming soon.`}
        </p>
        {product.availability.status === 'coming-soon' ? (
          <>
            <Button
              onClick={showForm}
              className="action product-notify"
              aria-expanded={formOpen}
              aria-controls={`notify-${product.slug}`}
            >
              NOTIFY ME <ArrowUpRight aria-hidden="true" />
            </Button>
            <p className="product-preorder-note">Preorders opening soon.</p>
            <div
              ref={formRef}
              id={`notify-${product.slug}`}
              hidden={!formOpen}
              className="product-form"
            >
              <NotifyForm compact />
            </div>
          </>
        ) : (
          <a
            className="action product-notify"
            href={product.availability.preorderUrl}
          >
            PREORDER <ArrowUpRight aria-hidden="true" />
          </a>
        )}
        <div className="product-disclosures">
          {[
            {
              title: 'THE FIRST DROP',
              text: `${product.name} is part of OVRLD 001. Preorder timing and final pricing have not been announced.`,
            },
            {
              title: 'PRODUCT DETAILS',
              text: 'Product imagery and colourways are previews. Materials, measurements, fit, care, and final construction details will be published before orders open.',
            },
            {
              title: 'DELIVERY & RETURNS',
              text: 'Delivery regions, shipping timelines, and the returns policy will be available before preorders open. No payments are being taken.',
            },
          ].map((item) => (
            <details key={item.title}>
              <summary>
                {item.title}
                <Plus aria-hidden="true" className="plus" />
                <Minus aria-hidden="true" className="minus" />
              </summary>
              <p>{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
