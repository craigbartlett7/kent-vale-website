import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/supabase';
import ProductConfigurator from '@/app/components/ProductConfigurator';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Studio | Kent & Vale`,
    description: product.description || `${product.name}. Made to order from our Kent studio in English Oak, English Elm or Olive Wood.`,
  };
}

export default async function StudioProductPage({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product || product.collection !== 'studio') notFound();
  return <ProductConfigurator product={product} backHref="/studio" backLabel="Studio" />;
}
