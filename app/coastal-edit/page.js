import Link from 'next/link';

export const metadata = {
  title: 'The Coastal Edit — Ocean Resin Homeware | Kent & Vale',
  description: 'Ocean wave resin on wine glasses, tumblers, personalised serving boards and handcrafted furniture. Ready-to-ship gifts and bespoke commissions, made in Kent.',
};

const SITE = 'https://www.kentandvale.com';

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'The Coastal Edit — Kent & Vale',
  description: 'Ocean wave resin homeware: wine glasses, tumblers, personalised serving boards, side tables and statement furniture. Handmade in Sittingbourne, Kent.',
  url: `${SITE}/coastal-edit`,
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'The Coastal Edit', item: `${SITE}/coastal-edit` },
  ],
};

const PRODUCTS = [
  {
    label: 'Glassware',
    title: 'Ocean Wave Glasses',
    desc: 'Stemless wine glasses and stemmed wine glasses with a hand-poured ocean wave in the base — teal, turquoise, and deep navy. Each wave is unique. Sold individually or as a pair. A gift that reads as luxury and lives as an everyday object.',
    note: null,
  },
  {
    label: 'Drinkware',
    title: 'Coastal Tumblers',
    desc: 'Slim, insulated stainless tumblers with a full-coverage ocean wave resin pour — the sea wrapping the entire surface. Beach holiday memories in your hand every morning.',
    note: null,
  },
  {
    label: 'Kitchen',
    title: 'Personalised Serving Boards',
    desc: 'Solid walnut serving and charcuterie boards with an ocean wave resin section and bespoke laser engraving — names, a date, a short message. A personalised wedding gift, anniversary gift, or housewarming piece that will be used and seen every week.',
    note: 'All resins used on food-contact surfaces are fully cured food-safe grade. We always advise hand washing.',
  },
  {
    label: 'Occasional Furniture',
    title: 'Ocean Resin Side Tables',
    desc: 'Round side tables with a deep ocean wave resin top — mounted on a powder-coated steel frame. Deep navy with embedded shells and starfish, or translucent teal. At home indoors or on a covered terrace. A piece that stops people mid-conversation.',
    note: null,
  },
  {
    label: 'Statement Furniture',
    title: 'Live-Edge Ocean Coffee Table',
    desc: 'A bespoke commission: live-edge olive wood set within a rectangle of deep blue epoxy resin, embedded with real shells, starfish and sea glass, on a powder-coated steel base. Every table is unique to its commission — the wood slab, the depth of blue, the arrangement of shells. For a living room that deserves something it cannot find anywhere else.',
    note: 'This is a bespoke commission — lead time is approximately 10–14 weeks. Begin with a conversation.',
  },
];

export default function CoastalEdit() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section style={{
        minHeight: '95vh',
        background: '#0d1f2d',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 60% 40%, rgba(0,150,180,0.18) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(0,80,120,0.22) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d1f2d 35%, transparent 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            The Coastal Edit
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            The ocean,<br />fixed in resin.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            A collection of ocean resin pieces — glassware, drinkware, personalised serving boards and handcrafted furniture — each one carrying the movement of the sea inside it. Ready-made gifts and bespoke commissions, made by hand in Kent.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Enquire or Order
          </Link>
        </div>
      </section>

      {/* The idea */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            The collection
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Pieces that carry<br />a place inside them.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The ocean resin technique creates something genuinely difficult to explain until you see it: waves and foam and depth, suspended in perfect clarity, visible from every angle, never moving and yet somehow still alive. The result sits somewhere between art and object — a glass you use every day, a board you bring out when people come for dinner, a table that stops conversations.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Every piece in The Coastal Edit is hand-poured in our studio in Sittingbourne, Kent. The smaller pieces — glassware, tumblers, serving boards — are available to order directly. Furniture commissions begin with a conversation.
            </p>
            <p>
              We also take personalised commissions across all formats: a board engraved with a couple's names and date, a glass in a specific colourway, a side table in a size or tone to fit a particular room.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            What we make
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            From glassware to statement furniture.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {PRODUCTS.map((p, i) => (
              <div key={i} style={{ padding: '2.5rem', border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{p.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.75, color: '#555', marginBottom: p.note ? '1rem' : 0 }}>{p.desc}</p>
                {p.note && (
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--brass)', fontStyle: 'italic' }}>{p.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift section */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Gifts
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            The ocean resin glasses and<br />serving boards are made to give.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Each piece is gift-ready — packed in a kraft box with crinkle paper. For personalised boards, we include the engraving in the order. A pair of glasses with an engraved board is the most popular combination we make for wedding gifts, anniversaries, and housewarmings.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Custom colourways — different blues, greens, or a colour to match a recipient's home — are available on request.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Enquire About a Gift
          </Link>
        </div>
      </section>

      {/* What makes ours different */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            Made by hand
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            No two waves<br />are the same.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Ocean resin is poured in layers, each one placed by hand to build depth, movement, and light. The result is always different — the white foam breaks slightly differently each time, the teal deepens differently into navy, the sand-coloured pigment settles in its own way. Identical colourways produce related but never identical pieces.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We use professional-grade UV-resistant epoxy that cures to crystal clarity and remains stable for decades. Our furniture pieces are finished by hand and mounted on powder-coated steel frames made to our specification.
            </p>
            <p>
              Everything is made in our studio in Sittingbourne, Kent — a short drive from the North Kent coast that inspires the work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', background: '#0d1f2d' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
            Find your piece,<br />or tell us what you need.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            For ready-made pieces, current availability, or a bespoke commission — get in touch and we'll take it from there. All Coastal Edit orders begin with a short conversation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--brass)', color: '#1a1a18', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Get in Touch
            </Link>
            <Link href="/inspiration-gallery" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              See the Gallery
            </Link>
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--stone)', marginTop: '3rem', opacity: 0.7 }}>
            Kent &amp; Vale · Sittingbourne, Kent · hello@kentandvale.com
          </p>
        </div>
      </section>
    </div>
  );
}
