import Link from 'next/link';

export const metadata = {
  title: 'Funeral Flower Preservation — Memories — Kent & Vale',
  description: 'Preserve funeral flowers forever in hand-poured resin. A permanent tribute to someone irreplaceable — coffee tables, display blocks, wall pieces and more. Handmade in Kent.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Funeral Flower Preservation — Kent & Vale',
  description: 'Bespoke funeral and memorial flower preservation in hand-poured resin. Coffee tables, display blocks, wall sculptures and more — a permanent tribute handmade in Sittingbourne, Kent.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kent & Vale',
    url: 'https://kentandvale.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sittingbourne',
      addressRegion: 'Kent',
      postalCode: 'ME10',
      addressCountry: 'GB',
    },
  },
  url: 'https://kentandvale.com/memories/funeral-flowers',
};

export default function FuneralFlowerPreservation() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
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
        <img
          src="/images/resin-flowers-1.jpg"
          alt="Funeral flowers preserved in clear resin — a memorial piece by Kent & Vale"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.38,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a1a18 45%, transparent 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Memories · Funeral Flower Preservation
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            The flowers you chose<br />to say goodbye.<br />We make sure they stay.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            Funeral flowers are chosen with extraordinary care. They deserve to last longer than the service. Set in hand-poured resin, they become a permanent piece — something that keeps the person they honoured present in your home, every day.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Talk to Us
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
            Something that outlasts<br />the occasion it marked.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              The flowers chosen for a funeral or memorial service are never chosen lightly. They represent someone's life, their character, the love around them. And then, within days, they are gone.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We preserve those flowers permanently in hand-poured, crystal-clear resin — not as a dried arrangement pressed behind glass, but as a piece of furniture or sculpture that lives in your home. A coffee table, a display block, a wall piece. Something you are with every day. Something that carries the person inside it.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              It is a way of keeping someone present without effort — not a photograph on a shelf that has to be looked at deliberately, but a piece that is simply part of the room. Part of ordinary life. Exactly where it should be.
            </p>
            <p>
              We work with families quietly and without rush. There is no urgency in the conversation — only care.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '0', background: '#1a1a18' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
        }}>
          <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="/images/resin-flowers-2.jpg"
              alt="Memorial flowers set in clear resin — Kent & Vale funeral flower preservation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ overflow: 'hidden', aspectRatio: '4/5' }}>
            <img
              src="/images/resin-flowers-3.jpg"
              alt="Flower preservation in resin — a permanent tribute piece by Kent & Vale"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Which flowers we work with */}
      <section style={{ padding: '8rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            What we work with
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Any flower. Any arrangement.<br />Any occasion of loss.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              We work with coffin flowers, funeral bouquets, graveside tributes, sympathy arrangements, and individual stems. We can preserve a single meaningful bloom or an entire arrangement. We work with flowers from funerals, from memorial services, from anniversaries of loss.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              If you have flowers from a service and are wondering whether they can be preserved, get in touch and tell us what you have. We will always give you an honest answer about what is achievable.
            </p>
            <p>
              We can also incorporate other elements alongside the flowers — a handwritten note, a photograph printed on archival paper, a small personal object. Every commission is a conversation first.
            </p>
          </div>
        </div>
      </section>

      {/* The forms we make */}
      <section style={{ padding: '7rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            The forms we make
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            A permanent home for something irreplaceable.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              {
                label: 'Display Block',
                title: 'A quiet, lasting presence',
                desc: 'A compact block of crystal-clear resin — the size of a thick hardback — holding a curated arrangement of blooms. Sits on a mantlepiece, a bookshelf, a bedside table. Close at hand. Always there.',
              },
              {
                label: 'Coffee Table',
                title: 'A centrepiece of remembrance',
                desc: 'Your flowers set beneath a deep, clear resin top on a powder-coated frame. Present in the room every day — not tucked away, not behind glass, but part of ordinary life in a home that misses someone.',
              },
              {
                label: 'Side Table',
                title: 'For a bedroom or hallway',
                desc: 'All the quiet beauty of the round table in a smaller form. A piece for a more private space — a room where someone is especially felt.',
              },
              {
                label: 'Wall Piece',
                title: 'A botanical tribute',
                desc: 'Flowers and stems set in a rectangular resin panel, backed in solid wood and wall-mounted. An object that reads as art and carries a life inside it.',
              },
              {
                label: 'For the Family',
                title: 'Individual pieces from one arrangement',
                desc: 'We can create multiple pieces from a single arrangement — one for each branch of a family. Each piece holds a different bloom from the same flowers. Distinct, but connected.',
              },
              {
                label: 'Something else',
                title: 'Tell us what you imagine',
                desc: 'If you have an idea that does not fit these forms, begin a conversation. We work to briefs we haven\'t made before. The piece should be right for the person it honours.',
              },
            ].map((form, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: 'white' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{form.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{form.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.7, color: '#555' }}>{form.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            On timing
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            There is no pressure.<br />But sooner is better.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            The sooner flowers are dried after a funeral or memorial service, the more colour and structure can be preserved. If you are in the days immediately following a service and wondering whether this is something worth doing, the answer is: reach out now, while the flowers are still fresh. We will walk you through everything.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            If some time has already passed, please still get in touch. We work with what you have and we are always honest about what is achievable. Even flowers that have dried naturally can sometimes yield something beautiful.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Get in Touch
          </Link>
        </div>
      </section>

      {/* What makes ours different */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            How we work
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            One piece at a time.<br />Complete attention.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              We make one piece at a time — not a batch, not a production run. From the moment your flowers arrive with us to the moment the finished piece leaves the studio, they receive our complete attention.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We use professional-grade, UV-resistant epoxy resin — formulated to remain crystal-clear for decades without yellowing or clouding. The flowers are dried with care over the time needed to preserve as much colour and detail as possible. Every pour is done in controlled stages. Every piece is finished entirely by hand.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We are based in Sittingbourne, Kent. We are always happy to speak by phone — there is no form to fill, no automated process. If you would like to talk through what is possible before you make any decision, that conversation is always free and without obligation.
            </p>
            <p>
              We understand that the flowers you want to preserve carry something irreplaceable. We treat them accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '8rem 2rem', background: '#1a1a18' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
            Someone deserves to be<br />remembered beautifully.
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Tell us about the flowers you have, and the person they were chosen for. The first conversation is always free, always without obligation, and always begins with listening.
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
