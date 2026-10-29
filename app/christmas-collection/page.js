import Link from 'next/link';

export const metadata = {
  title: 'The Christmas Collection — Resin Christmas Gifts & Decorations | Kent & Vale',
  description: "Handmade resin Christmas pieces — festive decorations, keepsake baubles, and bespoke gifts made in our studio in Kent. Beautiful, permanent, and unlike anything you'll find anywhere else.",
};

const SITE = 'https://www.kentandvale.com';

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'The Christmas Collection — Kent & Vale',
  description: 'Handmade resin Christmas pieces — festive decorations, keepsake baubles, and bespoke gifts made by hand in Sittingbourne, Kent.',
  url: `${SITE}/christmas-collection`,
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Christmas Collection', item: `${SITE}/christmas-collection` },
  ],
};

const GALLERY = [
  { img: '/images/IMG_0316.png', alt: 'Handmade resin Christmas piece — Kent & Vale' },
  { img: '/images/IMG_0317.png', alt: 'Resin Christmas decoration — handmade in Kent' },
  { img: '/images/IMG_0318.png', alt: 'Bespoke resin Christmas keepsake — Kent & Vale' },
  { img: '/images/IMG_0319.png', alt: 'Handmade resin festive piece — Kent & Vale studio' },
  { img: '/images/IMG_0320.png', alt: 'Resin Christmas decoration — handcrafted in Sittingbourne' },
  { img: '/images/IMG_0323.png', alt: 'Bespoke resin Christmas gift — Kent & Vale' },
  { img: '/images/IMG_0324.png', alt: 'Handmade resin Christmas keepsake — Kent & Vale' },
  { img: '/images/IMG_0325.png', alt: 'Resin festive piece — handmade in Kent' },
  { img: '/images/IMG_0326.png', alt: 'Handcrafted resin Christmas decoration — Kent & Vale' },
];

export default function ChristmasCollection() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section style={{
        minHeight: '95vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/images/IMG_0316.png"
          alt="The Christmas Collection — handmade resin Christmas pieces by Kent &amp; Vale"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,10,10,0.95) 35%, rgba(26,10,10,0.3) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            The Christmas Collection
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Christmas,<br />made to last forever.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            Handmade resin Christmas pieces — decorations, keepsakes and gifts — each one poured by hand in our studio in Kent. The kind of Christmas pieces you bring out every year and never want to put away.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#gallery" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--brass)', color: '#1a1a18', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              See the Collection
            </a>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Bespoke Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* About the collection */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            The collection
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Pieces made to become<br />part of your Christmas.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every piece in the Christmas Collection is hand-poured in our studio in Sittingbourne, Kent. Resin preserves colour, texture and detail in a way that nothing else can — these are not novelties. They are objects built to outlast the trend.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We take bespoke commissions for Christmas pieces — specific colourways, personalised inclusions, sizes to order. If you have something particular in mind, get in touch and we'll make it.
            </p>
            <p>
              Current pieces are available to order now for Christmas delivery. Lead times vary — contact us for availability.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section id="gallery" style={{ padding: '4rem 2rem 8rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            From the studio
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '3.5rem' }}>
            The Christmas Collection.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {GALLERY.map((item, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: '4/3', background: '#f5f3ef' }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', lineHeight: 1.7, color: '#777', textAlign: 'center', marginTop: '2.5rem', fontStyle: 'italic' }}>
            Every piece is hand-poured individually — each carries its own unique character. All pieces shown are available to order or can be commissioned in alternative colourways.
          </p>
        </div>
      </section>

      {/* Dark feature section */}
      <section style={{ background: '#1a0a0a', padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Made by hand
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
            No two pieces<br />are the same.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Each Christmas piece is mixed, poured and finished by hand. Colour, inclusions and finish vary naturally — this is the nature of hand-poured resin. The result is always a one-of-a-kind object.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            We use professional-grade, UV-resistant resin that cures to crystal clarity and holds its colour for decades. These pieces are built to become part of your Christmas story — year after year.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.15, marginBottom: '2rem' }}>
            Order before Christmas,<br />or start a bespoke commission.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: '#555', lineHeight: 1.9, marginBottom: '3rem' }}>
            Ready-made pieces from the collection are available to order now. Bespoke commissions — a specific colourway, a personalised piece, a custom size — begin with a short conversation. Get in touch and we'll take it from there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--charcoal)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Get in Touch
            </Link>
            <Link href="/inspiration-gallery" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(26,26,24,0.25)', color: 'var(--charcoal)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              See the Gallery
            </Link>
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: '#888', marginTop: '3rem' }}>
            Kent &amp; Vale · Sittingbourne, Kent · hello@kentandvale.com
          </p>
        </div>
      </section>
    </div>
  );
}
