import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/data/products';
import { ProductExperience } from '@/components/product/product-experience';
import { ProductAnatomy } from '@/components/product/product-anatomy';
import { ProductCard } from '@/components/product/product-card';
import { ProductComparison } from '@/components/product/product-comparison';
import { HowToUse } from '@/components/product/how-to-use';
import { pageMetadata } from '@/lib/metadata';
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata(
    product.name,
    `${product.description} Coming soon in Black, Grey, Brown and Light Pink.`,
    `/gear/${slug}`,
  );
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <main id="main">
      <div className="container">
        <nav className="breadcrumbs eyebrow" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/001">OVRLD 001</Link>
          <span>/</span>
          <span aria-current="page">{product.shortName.toUpperCase()}</span>
        </nav>
        <ProductExperience product={product} />
      </div>
      <section className="product-story section container">
        <p className="eyebrow lime">{product.number} / BUILT FOR THE WORK</p>
        <h2 className="statement">{product.statement}</h2>
        <div className="detail-topics">
          {product.detailTopics.map((topic, index) => (
            <div key={topic.title}>
              <span className="eyebrow muted">0{index + 1}</span>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ProductAnatomy product={product} />
      {product.comparison && (
        <ProductComparison rows={product.comparison} />
      )}{' '}
      {product.howTo && <HowToUse steps={product.howTo} />}
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow lime">COMPLETE THE FIRST DROP</p>
            <h2 className="title">THE OTHER HALF.</h2>
          </div>
          <Link href="/001" className="text-link">
            EXPLORE OVRLD 001 ↗
          </Link>
        </div>
        <div className="related-product">
          {products
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
        </div>
      </section>
    </main>
  );
}
