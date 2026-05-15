import { supabase } from '@/lib/supabase';

const BASE_URL = 'https://kentandvale.com';

export default async function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE_URL}/studio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/the-games-room`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/atelier-commissions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/inspiration-gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/journal`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/london-marathon-2026`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  // Dynamic journal post pages
  let journalPages = [];
  try {
    const { data } = await supabase
      .from('blog_posts')
      .select('slug, published_at, updated_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (data) {
      journalPages = data.map(post => ({
        url: `${BASE_URL}/journal/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (e) {
    console.error('Sitemap: error fetching journal posts', e);
  }

  // Dynamic product pages
  let productPages = [];
  try {
    const { data } = await supabase
      .from('products')
      .select('slug, collection, updated_at')
      .eq('active', true);

    if (data) {
      productPages = data.map(p => ({
        url: `${BASE_URL}/${p.collection === 'studio' ? 'studio' : 'the-games-room'}/${p.slug}`,
        lastModified: new Date(p.updated_at || new Date()),
        changeFrequency: 'monthly',
        priority: 0.8,
      }));
    }
  } catch (e) {
    console.error('Sitemap: error fetching products', e);
  }

  return [...staticPages, ...journalPages, ...productPages];
}
