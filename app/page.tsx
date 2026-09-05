import { Hero } from '@/components/campaign/hero';
import { ProductCard } from '@/components/product/product-card';
import {
  BrandMoment,
  EditorialSection,
} from '@/components/campaign/editorial-section';
import { AppShowcase } from '@/components/app/app-showcase';
import { Ecosystem } from '@/components/campaign/ecosystem';
import { LaunchSection } from '@/components/campaign/launch-section';
import { Reveal } from '@/components/motion/reveal';
import { products } from '@/data/products';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'OVRLD YOUR LIMIT.',
  'Performance gear and training software built for the work. Discover OVRLD 001: Wrist Wraps and Lifting Straps.',
  '/',
);
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <section id="first-drop" className="section container">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow lime">001 / THE FIRST DROP</p>
              <h2 className="title">OVRLD 001</h2>
            </div>
            <p className="intro-line">
              Two essentials. One intention.
              <br />
              Show up. Put in the work. Go again.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className="preview-note">
            Product imagery is a concept preview. Final details will be shared
            before launch.
          </p>
        </Reveal>
      </section>
      <BrandMoment />
      {products.map((product, index) => (
        <Reveal key={product.slug}>
          <EditorialSection product={product} reverse={index === 1} />
        </Reveal>
      ))}
      <AppShowcase />
      <Ecosystem />
      <LaunchSection />
    </main>
  );
}
