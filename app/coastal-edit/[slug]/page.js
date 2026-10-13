import { notFound } from 'next/navigation';
import { getCoastalProduct, COASTAL_PRODUCTS } from '@/lib/coastalProducts';
import CoastalConfigurator from '@/app/components/CoastalConfigurator';

export async function generateMetadata({ params }) {
  const product = getCoastalProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — The Coastal Collection | Kent & Vale`,
    description: `${product.tagline} ${product.dimensions}. ${product.priceDisplay}. Handmade ocean resin homeware by Kent & Vale.`,
  };
}

export async function generateStaticParams() {
  return COASTAL_PRODUCTS.map(p => ({ slug: p.slug }));
}

export default function CoastalProductPage({ params }) {
  const product = getCoastalProduct(params.slug);
  if (!product) notFound();
  return <CoastalConfigurator product={product} />;
}
