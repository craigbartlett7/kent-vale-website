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
    img: '/images/coastal-glasses-pair-1.jpg',
    imgAlt: 'Pair of teal ocean wave resin wine glasses with a Cloudy Bay bottle — Kent & Vale Coastal Edit',
    desc: 'Stemless wine glasses and stemmed wine glasses with a hand-poured ocean wave in the base — teal, turquoise, and deep navy. Each wave is unique. Sold individually or as a pair. A gift that reads as luxury and lives as an everyday object.',
    note: null,
  },
  {
    label: 'Drinkware',
    title: 'Coastal Tumblers',
    img: '/images/coastal-tumbler-1.jpg',
    imgAlt: 'Tall coastal ocean wave resin tumbler on a beach — Kent & Vale Coastal Edit',
    desc: 'Slim, insulated stainless tumblers with a full-coverage ocean wave resin pour — the sea wrapping the entire surface. Beach holiday memories in your hand every morning.',
    note: null,
  },
  {
    label: 'Kitchen',
    title: 'Personalised Serving Boards',
    img: '/images/coastal-board-1.jpg',
    imgAlt: 'Personalised walnut charcuterie board with ocean wave resin and engraved names — Kent & Vale Coastal Edit',
    desc: 'Solid walnut serving and charcuterie boards with an ocean wave resin section and bespoke laser engraving — names, a date, a short message. A personalised wedding gift, anniversary gift, or housewarming piece that will be used and seen every week.',
    note: 'All resins used on food-contact surfaces are fully cured food-safe grade. We always advise hand washing.',
  },
  {
    label: 'Occasional Furniture',
    title: 'Ocean Resin Side Tables',
    img: '/images/coastal-side-table-2.jpg',
    imgAlt: 'Deep blue ocean wave resin round side table in a coastal living room — Kent & Vale Coastal Edit',
    desc: 'Round side tables with a deep ocean wave resin top — mounted on a powder-coated steel frame. Deep navy with embedded shells and starfish, or translucent teal. At home indoors or on a covered terrace. A piece that stops people mid-conversation.',
    note: null,
  },
  {
    label: 'Statement Furniture',
    title: 'Live-Edge Ocean Coffee Table',
    img: '/images/coastal-coffee-table-1.jpg',
    imgAlt: 'Live-edge olive wood and deep blue epoxy resin coffee table with real shells, starfish and sea glass — Kent & Vale Coastal Edit',
    desc: 'A bespoke commission: live-edge olive wood set within a rectangle of deep blue epoxy resin, embedded with real shells, starfish and sea glass, on a powder-coated steel base. Every table is unique to its commission — the wood slab, the depth of blue, the arrangement of shells. For a living room that deserves something it cannot find anywhere else.',
    note: 'This is a bespoke commission — lead time is approximately 10–14 weeks. Begin with a conversation.',
  },
  {
    label: 'Statement Furniture',
    title: 'Ocean Scene Floating Chess Table',
    img: '/images/coastal-chess-table-1.jpg',
    imgAlt: 'Ocean scene floating chessboard — dark walnut squares surrounded by deep ocean resin waves on a tripod base — Kent & Vale Coastal Edit',
    desc: 'A round chess table in which the playing surface — dark walnut squares, hand-finished — appears to float inside a coastal scene poured entirely in deep ocean resin. Waves, depth and movement surround the board on all sides. Every game is played at the edge of the sea.',
    note: 'This is a bespoke commission — the colourway, chess square finish and tripod base can all be specified. Lead time 10–14 weeks.',
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
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src="/images/coastal-chess-table-1.jpg"
          alt="Coastal scene ocean resin chess table — The Coastal Edit by Kent &amp; Vale"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,31,45,0.96) 40%, rgba(13,31,45,0.35) 100%)' }} />

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

      {/* Lifestyle image — woman with tumbler */}
      <div style={{ height: 'clamp(420px, 60vh, 700px)', overflow: 'hidden' }}>
        <img
          src="/images/coastal-tumbler-lifestyle-1.jpg"
          alt="Woman sipping from a coastal ocean wave resin tumbler on a beach — Kent &amp; Vale Coastal Edit"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
        />
      </div>

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {PRODUCTS.map((p, i) => (
              <div key={i} style={{ border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7', overflow: 'hidden' }}>
                <div style={{ height: '260px', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{p.label}</p>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.75, color: '#555', marginBottom: p.note ? '1rem' : 0 }}>{p.desc}</p>
                  {p.note && (
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--brass)', fontStyle: 'italic' }}>{p.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured piece — Coastal Chess Table */}
      <section style={{ background: '#0d1f2d' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '560px' }}>
          <div style={{ overflow: 'hidden', minHeight: '400px' }}>
            <img
              src="/images/coastal-chess-table-1.jpg"
              alt="Ocean scene floating chessboard — ocean resin waves surrounding walnut squares, bespoke commission by Kent &amp; Vale"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
              Bespoke Commission · The Coastal Chess Table
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              The ocean scene<br />floating chessboard.
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              The playing surface — dark walnut squares, hand-finished — appears to float inside a coastal scene poured entirely in deep ocean resin. Waves, depth and movement surround the board on all sides. Every game is played at the edge of the sea.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              A fully bespoke commission — the colourway, the chess square finish, and the powder-coated steel tripod base can all be specified to order.
            </p>
            <Link href="/the-games-room" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' }}>
              See The Games Room →
            </Link>
          </div>
        </div>
      </section>

      {/* Gift section */}
      <section style={{ padding: '0', background: 'var(--charcoal)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '480px' }}>
        <div style={{ overflow: 'hidden', minHeight: '360px' }}>
          <img
            src="/images/coastal-board-gift-1.jpg"
            alt="Personalised ocean wave resin serving board in a kraft gift box with crinkle paper — Kent &amp; Vale Coastal Edit"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Gifts
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            The ocean resin glasses and<br />serving boards are made to give.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Each piece is gift-ready — packed in a kraft box with crinkle paper. For personalised boards, we include the engraving in the order. A pair of glasses with an engraved board is the most popular combination we make for wedding gifts, anniversaries, and housewarmings.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            Custom colourways — different blues, greens, or a colour to match a recipient's home — are available on request.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' }}>
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
