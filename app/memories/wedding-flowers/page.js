import Link from 'next/link';

export const metadata = {
  title: 'Wedding Flower Preservation — Memories — Kent & Vale',
  description: 'Your wedding flowers preserved forever in hand-poured resin. Coffee tables, side tables, wall pieces and display blocks — bespoke pieces handmade in Kent. Each one unique.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Flower Preservation — Kent & Vale',
  description: 'Bespoke wedding flower preservation in hand-poured resin. Coffee tables, display blocks, wall sculptures and more — handmade in Sittingbourne, Kent.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: 'https://kentandvale.com', address: { '@type': 'PostalAddress', addressLocality: 'Sittingbourne', addressRegion: 'Kent', postalCode: 'ME10', addressCountry: 'GB' } },
  url: 'https://kentandvale.com/memories/wedding-flowers',
};

export default function WeddingFlowerPreservation() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero — full-bleed with overlay */}
      <section style={{
        minHeight: '95vh',
        background: '#1a1a18',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Hero image */}
        <img
          src="/images/wedding-flowers-resin-1.jpg"
          alt="Pink and purple wedding flowers preserved in clear resin — a round coffee table by Kent & Vale"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a1a18 40%, transparent 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Memories · Wedding Flower Preservation
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Your flowers lasted<br />one day. We make<br />them last forever.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            Set in hand-poured, crystal-clear resin — as a coffee table, a side piece, a wall sculpture, or a jewel-like display block — your wedding flowers are preserved exactly as they were on the day that changed everything.
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
            Not a keepsake.<br />A piece of furniture<br />worth keeping forever.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Most wedding flowers are gone within a week. Pressed and dried, they survive — but they fade, they flatten, they end up tucked in a box and rarely looked at. Something that was once the most beautiful arrangement in the room becomes something a little sad.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              A wedding flower preservation piece from Kent & Vale is different in kind. The flowers are dried and set within hand-poured, professional-grade epoxy resin — suspended in perfect clarity, visible from every angle, every petal exactly where it was. The result is not a pressed flower behind glass. It is a piece of furniture — something you sit in front of every day, that carries the day itself inside it.
            </p>
            <p>
              It is, we think, the most beautiful thing you can do with your bouquet.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery — two images side by side */}
      <section style={{ padding: '0', background: '#1a1a18' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
        }}>
          <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="/images/wedding-flowers-resin-2.jpg"
              alt="Deep red peonies and white roses preserved in a clear resin coffee table — Kent & Vale"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="/images/wedding-flowers-resin-3.jpg"
              alt="Kent & Vale wedding flower resin pieces on display — circular resin disc and botanical resin panel"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* The forms */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            The forms we make
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            Choose the piece that fits your home.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              {
                label: 'Coffee Table',
                title: 'The round resin table',
                desc: 'Your flowers set beneath a deep, crystal-clear round resin top — mounted on a powder-coated steel frame. A conversation piece in every sense. Sits in a living room the way a painting hangs on a wall: everyone notices it.',
              },
              {
                label: 'Side Table',
                title: 'A smaller statement',
                desc: 'All the impact of the round table, in a size that fits a bedroom, a hallway, or beside a sofa. The piece your guests ask about first.',
              },
              {
                label: 'Display Block',
                title: 'The jewel block',
                desc: 'A compact, dense piece in crystal-clear resin — the size of a thick hardback — holding a curated selection of blooms from your bouquet. Sits on a bookshelf, a bedside table, a mantlepiece. Small enough to move. Beautiful enough to stay put.',
              },
              {
                label: 'Wall Piece',
                title: 'A botanical sculpture',
                desc: 'Flowers and botanical elements set in a rectangular resin panel, backed in solid wood and wall-mounted. A piece that reads as art — and carries a specific, irreplaceable memory inside it.',
              },
              {
                label: 'Dining Table',
                title: 'Within a river table',
                desc: 'For those who want something truly extraordinary: your flowers set within the resin river of a bespoke Studio dining table. Every meal, every gathering, every ordinary evening — around the flowers from the day you were married.',
              },
              {
                label: 'Sets',
                title: 'One for each family',
                desc: 'We create sets of matching pieces — one for the couple and individual pieces for each set of parents, each holding a single bloom from the same arrangement. Related but distinct. Each one a record of the same day.',
              },
            ].map((form, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{form.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{form.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.7, color: '#555' }}>{form.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing — important callout */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            An important note
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Timing matters more<br />than you might think.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Flowers need to be carefully dried before they can be set in resin. The sooner we begin this process, the more colour, structure, and texture can be preserved. We strongly encourage brides and grooms to get in touch as soon as possible after a wedding — even before they know exactly what piece they want to create.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            If some time has already passed, don't hesitate to reach out. We'll always be honest about what's achievable with the flowers you have.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get in Touch Now
          </Link>
        </div>
      </section>

      {/* What makes ours different */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            What makes ours different
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            One commission.<br />Complete attention.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              We make one piece at a time. Not one per day, not a batch — one, from start to finish, before the next begins. This is a deliberate choice, and it shapes everything about how we work.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We use professional-grade, UV-resistant epoxy resin — formulated to remain crystal-clear for decades, not to yellow or cloud over time. Every pour is done in controlled stages. Every piece is finished by hand. The steel bases for our round tables are powder-coated and made to measure.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We are based in Sittingbourne, Kent. You are welcome to visit the studio.
            </p>
            <p>
              Every piece we make begins with a conversation, not a form. Tell us about your flowers, your home, your day — and we'll tell you what we think we can make from them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 2rem', background: '#1a1a18' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
            Your flowers deserve<br />more than a box.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Get in touch and tell us about your wedding, your flowers, and what you'd like to create. The first conversation is free, without obligation, and always begins with listening.
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
            Kent &amp; Vale · Sittingbourne, Kent · hello@kentandvale.com · 01795 606005
          </p>
        </div>
      </section>
    </div>
  );
}
