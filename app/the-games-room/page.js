import Link from 'next/link';
import { getProducts } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'The Games Room — Kent & Vale',
  description: 'Hand-crafted chess boards and game boards built in English timber and resin. Made to order from our studio in Kent — each one singular, each one yours.',
};

export default async function GamesRoom() {
  const products = await getProducts('games-room');

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: 'var(--forest)', paddingTop: '120px', paddingBottom: '5rem', padding: '120px 2rem 5rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            The Games Room
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Playing boards built to<br />outlast the game.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'rgba(244,241,234,0.75)', lineHeight: 1.9, maxWidth: '540px' }}>
            Each board is made to order in English timber and poured resin — a playing surface that is also a piece of furniture. No two alike. Every grain, every pour, entirely your own.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: 'white', padding: '4rem 2rem', borderBottom: '1px solid rgba(184,181,174,0.2)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {[
            { n: '01', t: 'Choose your board', d: 'Home or competition squares. Optional legs to make it a freestanding side table.' },
            { n: '02', t: 'Configure it', d: 'Choose your timber, share your colour preferences, and leave any notes for our craftsmen.' },
            { n: '03', t: 'Place a 50% deposit', d: "Your board enters the making queue. We'll send an artist's impression within five working days." },
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
          Chess Boards
        </p>

        {products.length === 0 ? (
          <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', color: '#888', fontSize: '0.95rem' }}>
            The Games Room range is being updated — check back soon.
          </p>
        ) : (
          <>
          <style>{`.gr-card:hover { box-shadow: 0 8px 30px rgba(26,26,26,0.1); }`}</style>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.map(product => (
              <Link key={product.id} href={`/the-games-room/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="gr-card"
                  style={{ background: 'white', border: '1px solid rgba(184,181,174,0.25)', overflow: 'hidden', transition: 'box-shadow 0.3s ease' }}
                >
                  <div style={{ height: '260px', background: '#e8f0ea', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <p style={{ fontFamily: 'var(--serif)', fontSize: '0.8rem', color: 'rgba(42,74,60,0.3)', fontStyle: 'italic' }}>Image coming soon</p>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.25rem' }}>
                      {product.name}
                    </h2>
                    {product.dimensions && (
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>{product.dimensions}</p>
                    )}
                    {product.description && (
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.83rem', color: '#666', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                        {product.description}
                      </p>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--brass)', fontWeight: 500 }}>
                        From £{(product.base_price / 100).toLocaleString()}
                        {product.allow_legs_addon && (
                          <span style={{ fontSize: '0.75rem', color: '#999', fontWeight: 400 }}> · legs +£{((product.legs_addon_price || 20000) / 100).toLocaleString()}</span>
                        )}
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
          </>
        )}

        {/* Other games note */}
        <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'white', border: '1px solid rgba(184,181,174,0.25)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest)', marginBottom: '0.5rem' }}>
              Beyond Chess
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
              Backgammon, Go, and other games
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
              We also make boards for backgammon, Go, and other games. These are available as bespoke commissions — speak to us about what you have in mind.
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', whiteSpace: 'nowrap', padding: '0.8rem 1.6rem', background: 'var(--charcoal)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', flexShrink: 0 }}>
            Get in Touch →
          </Link>
        </div>

        {/* Atelier upsell */}
        <div style={{ marginTop: '2rem', padding: '3rem', background: '#1a1a18', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>
            Want something more?
          </p>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Any board can become an heirloom commission.
          </h3>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 2rem' }}>
            Incorporate meaningful objects — a wedding ring, a coin, family artefacts — cast directly into the board. The game is the same. The object becomes irreplaceable.
          </p>
          <Link href="/atelier-commissions" style={{ display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid rgba(184,181,174,0.35)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Learn About Atelier →
          </Link>
        </div>
      </div>
    </div>
  );
}
