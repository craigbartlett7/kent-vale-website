import Link from 'next/link';

export const metadata = {
  title: 'Memory Keepsakes in Resin — Wedding, Funeral, Baby & More | Kent & Vale',
  description: 'We preserve what matters most — wedding flowers, funeral flowers, and irreplaceable keepsakes — in hand-poured resin. Permanent pieces, handmade in Kent. Bespoke commissions.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Memories — Kent & Vale',
  description: 'Bespoke heirloom commissions preserving wedding flowers, funeral flowers, memorial elements, and irreplaceable objects in hand-poured resin. Handmade in Kent, England.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: 'https://kentandvale.com' },
  url: 'https://kentandvale.com/memories',
};

export default function Memories() {
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
        <img
          src="/images/resin-flowers-4.jpg"
          alt="Flowers preserved in hand-poured resin — Kent & Vale Memories commission"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.32 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #1a1a18 45%, transparent 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Memories
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.1, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            We don't just make<br />furniture. We preserve<br />what matters most.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1.05rem', color: 'var(--stone)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '3rem' }}>
            Wedding flowers. Funeral flowers. A loved one's belongings. Anything irreplaceable — set in hand-poured resin and built into a piece that lives in your home for the rest of your life.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Begin a Conversation
          </Link>
        </div>
      </section>

      {/* What we do */}
      <section style={{ padding: '8rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2.5rem' }}>
            What we do
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '2.5rem' }}>
            Objects that hold something<br />no catalogue can contain.
          </h2>
          <div style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.9, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every Memories commission begins not with a brief, but with a conversation. We want to understand the thing you want to preserve — not just its dimensions, but its weight, its significance, its story.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              We work across furniture and objects. A dining table becomes a Memories commission when wedding flowers are incorporated into the resin. A display block when a grandmother's funeral arrangement is set permanently in crystal-clear resin and placed on a mantlepiece. A chess board when a grandfather's military insignia is cast into the squares.
            </p>
            <p>
              The form might be Studio. The game might be Games Room. But when something irreplaceable enters the piece — that is Memories.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Flower Preservation — featured panel */}
      <section style={{ padding: '0', background: 'white', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '600px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '2px', background: '#111', minHeight: '500px' }}>
            <div style={{ gridColumn: '1 / -1', overflow: 'hidden' }}>
              <img src="/images/wedding-flowers-resin-1.jpg" alt="Pink and purple wedding flowers preserved in a round clear resin coffee table" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src="/images/wedding-flowers-resin-2.jpg" alt="Deep red and white wedding flowers preserved in a round resin coffee table" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src="/images/wedding-flowers-resin-3.jpg" alt="Kent & Vale wedding flower resin pieces displayed at exhibition" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div style={{ padding: 'clamp(4rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)', background: '#1a1a18', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
              Wedding Flower Preservation
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
              Your flowers.<br />Permanent.
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Your wedding flowers last one day. We make them last forever — set in hand-poured crystal-clear resin as a coffee table, a side piece, a wall sculpture, or a display block. Your blooms, exactly as they were on the day.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
              No two pieces are the same. Each one is designed around your flowers, your home, your story.
            </p>
            <Link href="/memories/wedding-flowers" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' }}>
              Explore Wedding Flowers →
            </Link>
          </div>
        </div>
      </section>

      {/* Funeral Flower Preservation — featured panel */}
      <section style={{ padding: '0', background: 'white', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', minHeight: '600px' }}>
          <div style={{ padding: 'clamp(4rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)', background: '#242420', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
              Funeral Flower Preservation
            </p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.15, marginBottom: '2rem' }}>
              The flowers chosen to say goodbye.<br />Kept.
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Funeral flowers are chosen with extraordinary care. They deserve to last longer than the service. We set them in hand-poured resin — as a display block, a coffee table, or a wall piece — so that the person they honoured remains present in your home.
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
              We work with families quietly, without rush. The first conversation is always free.
            </p>
            <Link href="/memories/funeral-flowers" style={{ display: 'inline-block', padding: '1rem 2.5rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' }}>
              Explore Funeral Flowers →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '2px', background: '#111', minHeight: '500px' }}>
            <div style={{ gridColumn: '1 / -1', overflow: 'hidden' }}>
              <img src="/images/resin-flowers-1.jpg" alt="Flowers preserved in hand-poured resin — Kent & Vale memorial piece" style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src="/images/resin-flowers-2.jpg" alt="Resin flower preservation — a permanent tribute by Kent & Vale" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src="/images/resin-flowers-3.jpg" alt="Flower preservation pieces by Kent & Vale" style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Examples grid */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem', textAlign: 'center' }}>
            What we preserve
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400, textAlign: 'center', color: 'var(--charcoal)', marginBottom: '4rem' }}>
            Memories commissions in practice
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              {
                label: 'Wedding Flowers',
                title: 'The flowers from that day',
                desc: 'Your wedding bouquet, preserved and set in resin — as a coffee table, a display piece, or a sculpture that will outlast every photograph.',
                link: '/memories/wedding-flowers',
              },
              {
                label: 'Funeral Flowers',
                title: 'A permanent tribute',
                desc: 'Coffin flowers, memorial arrangements, graveside tributes — preserved in resin so the person they honoured stays present in the home.',
                link: '/memories/funeral-flowers',
              },
              {
                label: 'Baby Memories',
                title: 'The first moments',
                desc: 'A hospital tag, a lock of hair, a first pair of shoes — small things with enormous weight, turned into something permanent and beautiful.',
                link: '/memories/baby',
              },
              {
                label: 'Sporting Achievements',
                title: 'You earned it. Now keep it.',
                desc: 'Medals, rosettes, race numbers and completion certificates — set in resin alongside the story of what it took to get there.',
                link: '/memories/sporting-achievements',
              },
              {
                label: 'Favourite Places',
                title: 'The places that shaped you',
                desc: 'Shells from a beach, wood from a first home\'s garden, soil from a meaningful walk — the geography of a life, preserved in resin.',
                link: '/memories/favourite-places',
              },
              {
                label: 'Pet Memorials',
                title: 'The one who filled the whole house',
                desc: 'A collar, a paw print, a lock of fur — held in resin and solid wood as a tribute worthy of a life that mattered.',
                link: '/memories/pets',
              },
              {
                label: 'Career Memories',
                title: 'A working life deserves a monument',
                desc: 'ID badges, business cards, a favourite pen, a golf ball — a career\'s worth of mementoes set in resin as a side table or display piece. The perfect retirement gift.',
                link: '/memories/career',
              },
              {
                label: 'Botanical Keepsakes',
                title: 'Flowers held in clarity',
                desc: 'Heart-shaped keepsakes, display blocks, personalised engraved pieces and botanical side tables — for garden flowers, anniversary roses, or any blooms you couldn\'t let go of.',
                link: '/memories/botanical-keepsakes',
              },
            ].map((ex, i) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid rgba(184,181,174,0.25)', background: '#faf9f7', position: 'relative' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>{ex.label}</p>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{ex.title}</h3>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', lineHeight: 1.7, color: '#555', marginBottom: '1.5rem' }}>{ex.desc}</p>
                <Link href={ex.link} style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', textDecoration: 'none' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem' }}>
            Before you get in touch
          </p>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--ivory)', marginBottom: '1.5rem', lineHeight: 1.3 }}>
            What to expect
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.9, marginBottom: '3rem' }}>
            Memories commissions are priced individually — there is no fixed tariff because no two pieces are the same. Our process page explains how a commission unfolds from the first call to final delivery. Our pricing page gives a guide to investment levels across the full range of what we make.
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
              Every Memories commission begins with a phone call. Not a form — a conversation.
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
