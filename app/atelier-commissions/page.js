import Link from 'next/link';

export const metadata = {
  title: 'Atelier Commissions — Kent & Vale',
  description: 'Ultra-bespoke commissions that carry something irreplaceable inside them. Wedding flowers, family heirlooms, memorial pieces, and one-off artistic work. Every Atelier commission begins with a conversation.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Atelier Commissions — Kent & Vale',
  description: 'Ultra-bespoke commissions incorporating personal artefacts, heirlooms, memorial elements, and one-off artistic work. Handmade in Kent, England.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: 'https://kentandvale.com' },
  url: 'https://kentandvale.com/atelier-commissions',
};

export default function AtelierCommissions() {
  return (
    <div style={{ background: 'white' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{
        minHeight: '90vh',
        background: '#1a1a18',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
        marginTop: '64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Atelier Commissions
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Some things deserve<br />to last longer than<br />a lifetime.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            An Atelier commission is not a product. It is an act of making permanent something that matters — a memory, a relationship, a person, a moment that will not come again. We work with you until the piece is exactly right.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Begin a Conversation
          </Link>
        </div>
      </section>

      {/* What an Atelier commission is */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            What we make
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Objects that hold something<br />no catalogue can contain.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every Atelier commission begins not with a brief but with a conversation. We want to understand the thing you want to preserve — not just its dimensions, but its weight, its significance, its story.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We work across furniture and objects. A dining table becomes an Atelier commission when wedding flowers are incorporated into the resin. A chess board becomes one when a grandfather's military insignia is set into the squares. A side table carries the memory of a beloved pet. A desk holds the wood from a tree that fell in a childhood garden.
            </p>
            <p>
              The form might be Studio. The game might be Games Room. But when something irreplaceable enters the piece — that is Atelier.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            Examples
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            What Atelier commissions look like in practice
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { label: 'Memorial', title: 'A life, held gently', desc: 'Ashes, pressed flowers, a handwritten note, a lock of hair — set within resin in a piece that sits on a mantelpiece and tells a story to everyone who sees it.' },
              { label: 'Wedding', title: 'The flowers from that day', desc: 'Your wedding flowers, preserved and set in resin within a dining table centrepiece or a wall piece that will outlast every photograph you take.' },
              { label: 'Inheritance', title: 'A game board with a lineage', desc: 'Military insignia, family silver, a grandfather\'s watch face — embedded in a chess board or backgammon set that becomes an heirloom itself.' },
              { label: 'Place', title: 'The wood from where you grew up', desc: 'Timber salvaged from a demolished building, a fallen garden tree, a childhood home — worked into a piece of furniture that carries that place forward.' },
              { label: 'Achievement', title: 'Something you earned', desc: 'A marathon medal. A degree certificate. A sporting honour. Set permanently in resin as an object of permanence rather than a photograph or a drawer.' },
              { label: 'Artistic', title: 'One-off artistic commissions', desc: 'Large-scale statement pieces, site-specific works, and collaborations with artists. If you have an idea that does not fit any category, tell us.' },
            ].map((ex, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{ex.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{ex.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.7, color: '#555' }}>{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Pricing links */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Before you get in touch
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            What to expect
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Atelier commissions are priced individually — there is no fixed tariff because no two pieces are the same. Our process page explains how a commission unfolds from the first call to final delivery. Our pricing page gives a guide to investment levels across the full range of what we make.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/process" style={{ display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              The Process
            </Link>
            <Link href="/pricing" style={{ display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* How it begins */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            How it begins
          </p>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every Atelier commission begins with a phone call. Not a form — a conversation.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We want to hear about the thing you want made permanent, understand the space it will live in, and get a sense of what the piece needs to feel like. That first call is always free, always without obligation, and never a sales pitch.
            </p>
            <p style={{ marginBottom: '3rem' }}>
              If we're the right studio for what you have in mind, we'll tell you. If we're not, we'll tell you that too.
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1.1rem 3rem', background: 'var(--charcoal)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Begin a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
