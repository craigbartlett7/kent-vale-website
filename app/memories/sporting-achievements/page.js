import React from 'react';
import Link from 'next/link';

const SITE = 'https://www.kentandvale.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sporting Achievement Keepsakes in Resin — Kent & Vale',
  description: 'Preserve medals, rosettes, race numbers and sporting trophies in hand-poured resin. Bespoke sporting memory keepsakes handmade in Kent, England.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  url: `${SITE}/memories/sporting-achievements`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Memories', item: `${SITE}/memories` },
    { '@type': 'ListItem', position: 3, name: 'Sporting Achievements', item: `${SITE}/memories/sporting-achievements` },
  ],
};

export const metadata = {
  title: 'Sporting Achievement Keepsakes in Resin | Kent & Vale',
  description: 'Preserve medals, rosettes, race numbers and sporting memories in hand-poured resin. A permanent heirloom that honours what you earned — made to order by Kent & Vale in Sittingbourne, Kent.',
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

const achievements = [
  {
    title: 'Marathon Medals',
    body: "The medal is what you hold at the finish line. We set it in resin alongside your race number and completion certificate — the whole day, preserved in a single object.",
  },
  {
    title: 'Rosettes & Show Ribbons',
    body: 'Equestrian rosettes, dog show ribbons, agricultural prizes. Fabric fades and curl. Resin doesn\'t. We set a rosette exactly as it is — shape, colour, detail — into a display piece worthy of what it represents.',
  },
  {
    title: 'Race Numbers',
    body: 'The number you pinned on that morning. We embed it with the medal, a photograph, or a soil sample from the course. The story of a race, told in one object.',
  },
  {
    title: 'Trophies & Certificates',
    body: 'We can set a certificate, a miniature trophy, or a fragment of something significant alongside dried flowers from the occasion — turning a single achievement into an heirloom.',
  },
  {
    title: 'A First Win',
    body: 'First place at a local show. A county championship. A personal best recorded and kept. We make pieces for achievements of every scale — because what matters is what it meant to you.',
  },
  {
    title: 'Something We Haven\'t Heard Yet',
    body: 'Tell us the achievement and what you have to show for it. We\'ll tell you how to preserve it. There is no catalogue — only possibility.',
  },
];

export default function SportingAchievementsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section style={{ background: charcoal, minHeight: '70vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <p style={eyebrow}>Memories — Sporting Achievements</p>
          <h1 style={{ ...sectionHeading, color: ivory }}>
            You earned it.<br />Now keep it.
          </h1>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', maxWidth: '480px' }}>
            Medals go in drawers. Rosettes gather dust. Race numbers get folded and forgotten. We set what you worked for into hand-poured resin — so it becomes something you look at every day, not something you lose track of.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Begin a Commission →</Link>
            <Link href="/memories" style={ghostCTA}>All Memories</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/images/sporting-keepsake-1.jpg"
            alt="Marathon medal and completion certificate preserved in a resin block with walnut base and engraved brass plaque"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* What we preserve */}
      <section style={{ background: ivory, padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>What we can preserve</p>
          <h2 style={{ ...sectionHeading, color: charcoal, maxWidth: '520px' }}>
            Every achievement deserves a home.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem 3rem', marginTop: '3rem' }}>
            {achievements.map(({ title, body }) => (
              <div key={title} style={{ borderTop: '1px solid rgba(26,26,24,0.1)', paddingTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: charcoal, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action panel */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: brass }}>How it works</p>
          <h2 style={{ ...sectionHeading, color: ivory }}>A conversation, then a commission.</h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 1.5rem' }}>
            You tell us what the achievement was and what you have to show for it. We discuss the form — a block on a plinth, a side table, a wall piece — and we design something around what you give us. Brass plaque engraved with your name, the event, and the date. Lead time four to six weeks.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" style={brassCTA}>Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
