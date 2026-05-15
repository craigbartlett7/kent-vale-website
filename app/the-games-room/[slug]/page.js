import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/supabase';
import ProductConfigurator from '@/app/components/ProductConfigurator';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — The Games Room | Kent & Vale`,
    description: product.description || `${product.name}. Made to order from our Kent studio in English Oak, English Elm or Olive Wood.`,
  };
}

export default async function GamesRoomProductPage({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product || product.collection !== 'games-room') notFound();
  return <ProductConfigurator product={product} backHref="/the-games-room" backLabel="The Games Room" />;
}
