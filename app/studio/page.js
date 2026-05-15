import Link from 'next/link';
import { getProducts } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Studio — Kent & Vale',
  description: 'Design-led made-to-order furniture and objects. Dining tables, side tables, consoles and boards — each built in your chosen timber, made only when you order it.',
};

export default async function Studio() {
  const products = await getProducts('studio');

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--charcoal)', paddingTop: '120px', paddingBottom: '5rem', padding: '120px 2rem 5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Studio
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Design-led furniture,<br />made to your order.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px' }}>
            Each Studio piece is chosen from our curated range of forms and built in your chosen timber when you order it. No stock. No repeat pieces. Every piece is uniquely yours — from the wood-grain to the resin pour.
          </p>
        </div>
      </div>

      {/* How Studio works */}
      <div style={{ background: 'white', padding: '4rem 2rem', borderBottom: '1px solid rgba(184,181,174,0.2)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { n: '01', t: 'Choose your form', d: 'Browse the range of pieces below and select the one that fits your space.' },
            { n: '02', t: 'Configure it', d: 'Choose your timber, share your colour palette, and leave notes for our craftsmen.' },
            { n: '03', t: 'Place a 50% deposit', d: 'Your piece enters production. We\'ll send an artist\'s impression within five working days.' },
            { n: '04', t: 'Delivery', d: 'Balance due by bank transfer prior to shipping. Lead time 8–12 weeks from deposit.' },
          ].map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--forest)', marginBottom: '0.4rem', lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.3rem' }}>{s.t}</p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product range */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem' }}>
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '3rem', textAlign: 'center' }}>
          The Range
        </p>

        {products.length === 0 ? (
          <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', color: '#888', fontSize: '0.95rem' }}>
            The Studio range is being updated — check back soon.
          </p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {products.map(product => (
              <Link key={product.id} href={`/studio/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ background: 'white', border: '1px solid rgba(184,181,174,0.25)', overflow: 'hidden', transition: 'box-shadow 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,26,26,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div style={{ height: '240px', background: '#f0ece4', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '0.8rem', color: 'rgba(26,26,26,0.25)', fontStyle: 'italic' }}>Image coming soon</p>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.25rem' }}>
                      {product.name}
                    </h2>
                    {product.dimensions && (
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: '#888', marginBottom: '0.75rem' }}>{product.dimensions}</p>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--brass)', fontWeight: 500 }}>
                        From £{(product.base_price / 100).toLocaleString()}
                      </p>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: '#aaa', letterSpacing: '0.1em' }}>
                        {product.lead_time}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Atelier upsell */}
        <div style={{ marginTop: '5rem', padding: '3rem', background: '#1a1a18', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>
            Want something more?
          </p>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Any Studio piece can become an Atelier commission.
          </h3>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Incorporate wedding flowers, family heirlooms, a personal inscription, or any artefact that matters to you. The form is Studio — the soul is entirely yours.
          </p>
          <Link href="/atelier-commissions" style={{ display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid rgba(184,181,174,0.35)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Learn About Atelier →
          </Link>
        </div>
      </div>
    </div>
  );
}
