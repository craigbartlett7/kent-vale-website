import Link from 'next/link';

export const metadata = {
  title: 'Botanical Keepsakes in Resin — Preserved Flowers | Kent & Vale',
  description: 'Flowers suspended in hand-poured resin — heart-shaped keepsakes, display tables and personalised pieces. Wedding bouquets, garden flowers, bouquets from loved ones. Made in Kent.',
};

const SITE = 'https://www.kentandvale.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Botanical Keepsakes in Resin — Kent & Vale',
  description: 'Dried flowers and botanicals set in hand-poured, crystal-clear resin — heart keepsakes, display blocks, botanical side tables and personalised pieces. Made in Sittingbourne, Kent.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE, address: { '@type': 'PostalAddress', addressLocality: 'Sittingbourne', addressRegion: 'Kent', postalCode: 'ME10', addressCountry: 'GB' } },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  url: `${SITE}/memories/botanical-keepsakes`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Memories', item: `${SITE}/memories` },
    { '@type': 'ListItem', position: 3, name: 'Botanical Keepsakes', item: `${SITE}/memories/botanical-keepsakes` },
  ],
};

const FORMS = [
  {
    label: 'Heart Keepsake',
    title: 'The flower heart',
    desc: 'A solid, heart-shaped resin block holding a curated selection of flowers from your arrangement — wildflowers, garden blooms, roses, dried botanicals. Sits on a mantelpiece, a bedside table, a shelf. Small enough to hold, beautiful enough to keep out always.',
  },
  {
    label: 'Display Block',
    title: 'The jewel block',
    desc: 'A rectangular block in crystal-clear resin, the size of a thick hardback, holding a full floral arrangement. Stands on any surface. The most popular format for wedding bouquets, anniversary flowers, and garden cuttings.',
  },
  {
    label: 'Personalised Display',
    title: 'With an engraved plaque',
    desc: 'A rectangular resin panel set in a solid live-edge wood base, with a brass-finish engraved plaque — names, a date, a short dedication. The flowers are held suspended in the resin above the wood. For mantelpieces, entrance halls, and anywhere a gift should feel like an heirloom.',
  },
  {
    label: 'Botanical Side Table',
    title: 'Flowers beneath the surface',
    desc: 'A round side table with a full floral arrangement set beneath a clear resin top — roses, hydrangeas, gerberas, eucalyptus, wildflowers — exactly as they were arranged, visible from above, mounted on hairpin steel legs. Every table is different. Every arrangement unique.',
  },
];

export default function BotanicalKeepsakes() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section style={{
        minHeight: '95vh',
        background: '#1e1a16',
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
          background: 'radial-gradient(ellipse at 70% 30%, rgba(160,120,80,0.12) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1e1a16 40%, transparent 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Memories · Botanical Keepsakes
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            The flowers you<br />couldn't let go of,<br />held for good.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            Dried flowers and botanicals set in hand-poured, crystal-clear resin — heart-shaped keepsakes, display blocks, personalised pieces with engraved plaques, and botanical side tables. Each one made from flowers that meant something.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Begin a Conversation
          </Link>
        </div>
      </section>

      {/* The idea */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            The idea
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Flowers that were given<br />with love, kept that way.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Cut flowers, at their best, last a week. Then they dry, they lose colour, they end up in a drawer or pressed between the pages of a book — somewhere they're rarely seen. Something that once sat at the centre of a room, that everyone looked at, becomes something easy to overlook.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              A botanical keepsake in resin works differently. The flowers are carefully dried, then set within hand-poured, professional-grade epoxy resin — suspended in perfect clarity, every petal exactly where it was placed. They don't fade further. They don't flatten. They become part of an object you want to have out, to look at, to show people.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We make keepsakes from wedding bouquets, from garden flowers, from flowers given by someone who is no longer here, from first-anniversary roses, from the wildflowers picked on a particular day. If the flowers meant something to you, they can become something permanent.
            </p>
            <p>
              Every piece begins with a conversation about the flowers you have and what you'd like to create from them.
            </p>
          </div>
        </div>
      </section>

      {/* Forms grid */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            The forms we make
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            Choose the piece that carries your flowers.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {FORMS.map((form, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{form.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{form.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.7, color: '#555' }}>{form.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which flowers */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Which flowers can we work with?
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Almost any flower.<br />The sooner, the better.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            We work with roses, peonies, wildflowers, lavender, dried grasses, gypsophila, eucalyptus, and many more varieties. Most flowers need to be dried before setting — the sooner we can begin this process, the more colour, structure and texture we can retain.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            We also work with flowers that have already been dried or pressed elsewhere — garden cuttings, foraged botanicals, sentimental arrangements that have been kept for some time. Get in touch and describe what you have; we'll tell you honestly what's possible.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            For wedding flowers specifically, please contact us as soon as possible after the day — ideally within the first week.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Tell Us About Your Flowers
          </Link>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '7rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            Related
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '3rem' }}>
            Other ways we preserve flowers.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <Link href="/memories/wedding-flowers" style={{ display: 'block', padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: 'white', textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.75rem' }}>Memories</p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Wedding Flower Preservation</h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>Larger commissions — coffee tables, dining tables, wall sculptures — built around a full wedding bouquet.</p>
            </Link>
            <Link href="/memories/funeral-flowers" style={{ display: 'block', padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: 'white', textDecoration: 'none' }}>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.75rem' }}>Memories</p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>Funeral Flower Preservation</h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>Flowers from a funeral, a tribute, or a memorial — set in resin to keep the person they honoured close.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', background: '#1e1a16' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
            Tell us about<br />your flowers.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Every piece begins with a conversation. Tell us what you have, what you'd like to create, and when the flowers are from — we'll take it from there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'var(--brass)', color: '#1a1a18', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500 }}>
              Begin a Conversation
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
