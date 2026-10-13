import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Baby Memories in Resin | Kent & Vale',
  description: 'Preserve the first moments of a new life — hospital tags, locks of hair, first shoes and scan photos — set in hand-poured resin by Kent & Vale. A keepsake that lasts forever.',
};

const brass = 'var(--brass)';
const charcoal = '#1a1a18';
const ivory = 'var(--ivory)';

const eyebrow = {
  fontFamily: 'var(--sans)',
  fontSize: '0.7rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: brass,
  marginBottom: '1.25rem',
};

const sectionHeading = {
  fontFamily: 'var(--serif)',
  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: '1.5rem',
};

const bodyText = {
  fontFamily: 'var(--sans)',
  fontSize: '1rem',
  lineHeight: 1.85,
  color: 'var(--stone)',
  maxWidth: '560px',
  marginBottom: '1.5rem',
};

const brassCTA = {
  display: 'inline-block',
  padding: '0.9rem 2.2rem',
  background: brass,
  color: charcoal,
  fontFamily: 'var(--sans)',
  fontSize: '0.8rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const ghostCTA = {
  display: 'inline-block',
  padding: '0.9rem 2.2rem',
  border: `1px solid rgba(184,181,174,0.4)`,
  color: ivory,
  fontFamily: 'var(--sans)',
  fontSize: '0.8rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const keepsakes = [
  {
    title: 'Hospital Tag',
    body: 'The first name they were ever given. The weight. The time. We set the original tag in clear resin so it never fades, never yellows, never gets lost at the back of a drawer.',
  },
  {
    title: 'Lock of Hair',
    body: "A first haircut feels like a small goodbye. We suspend a lock in resin — often alongside a first curl — so that softness is preserved exactly as it was on the day.",
  },
  {
    title: 'First Shoes',
    body: 'Tiny soles that never touched tarmac. A pair of first shoes set in resin becomes a sculpture — something to hold, to show, to pass down.',
  },
  {
    title: 'First Scan',
    body: 'The very first image of them. We can embed a scan photograph inside the resin alongside dried flowers from the maternity ward, a hospital tag, or a curl — layering the whole story of arrival.',
  },
  {
    title: 'Coming Home Outfit',
    body: "The outfit they wore leaving the hospital. A single bootie, a hat, a babygrow — fabric doesn't last, but resin does. We fold what matters into a piece that will outlast all of us.",
  },
  {
    title: 'Something of Your Own',
    body: 'There is no catalogue here. If it matters, we can preserve it. Tell us what you have and we will tell you how it can live in resin.',
  },
];

export default function BabyMemoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: charcoal, minHeight: '70vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <p style={eyebrow}>Memories — Baby</p>
          <h1 style={{ ...sectionHeading, color: ivory }}>
            The first moments.<br />Preserved forever.
          </h1>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', maxWidth: '480px' }}>
            A hospital tag. A lock of hair. A first pair of shoes. The things that mark the beginning of a life feel too important to leave to time — so we set them in resin, permanently.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Begin a Commission →</Link>
            <Link href="/memories" style={ghostCTA}>All Memories</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/images/baby-keepsake-1.jpg"
            alt="Baby memories preserved in resin — hospital tag, lock of hair, baby's breath flowers in a resin block with oak base"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* What we preserve */}
      <section style={{ background: ivory, padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>What we can preserve</p>
          <h2 style={{ ...sectionHeading, color: charcoal, maxWidth: '520px' }}>
            Everything from the first chapter.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem 3rem', marginTop: '3rem' }}>
            {keepsakes.map(({ title, body }) => (
              <div key={title} style={{ borderTop: `1px solid rgba(26,26,24,0.1)`, paddingTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: charcoal, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature image panel */}
      <section style={{ background: charcoal, minHeight: '50vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ overflow: 'hidden', minHeight: '360px' }}>
          <img
            src="/images/baby-keepsake-2.jpg"
            alt="Resin keepsake block with pale roses and K&V brass plaque — a permanent heirloom"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={eyebrow}>Every piece is personal</p>
          <h2 style={{ ...sectionHeading, color: ivory, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Built for the shelf,<br />made for the soul.
          </h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
            Each baby commission is entirely bespoke. We talk through what you have, how you want it displayed, and what the piece should feel like in your hands. A block on a walnut plinth. A side table top. A hanging object. The form follows the memory.
          </p>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
            We add a brass plaque engraved with the name, birth date and weight — because those details matter.
          </p>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: brass }}>How it begins</p>
          <h2 style={{ ...sectionHeading, color: ivory }}>A commission, not a product.</h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 1.5rem' }}>
            Every baby keepsake begins with a conversation. You tell us what you have and what it means. We design something around it — something you'll want on your mantle, not hidden in a box. Lead time is typically four to six weeks. We handle everything with the care it deserves.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" style={brassCTA}>Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
