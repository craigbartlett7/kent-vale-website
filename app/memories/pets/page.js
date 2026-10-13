import React from 'react';
import Link from 'next/link';

const SITE = 'https://www.kentandvale.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pet Memorial Keepsakes in Resin — Kent & Vale',
  description: 'Preserve a collar, paw print, lock of fur or ashes in hand-poured resin. Bespoke pet memorial pieces handmade in Kent, England. A permanent tribute to a beloved companion.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  url: `${SITE}/memories/pets`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Memories', item: `${SITE}/memories` },
    { '@type': 'ListItem', position: 3, name: 'Pet Memorials', item: `${SITE}/memories/pets` },
  ],
};

export const metadata = {
  title: 'Pet Memorial Keepsakes in Resin | Kent & Vale',
  description: 'Preserve a collar, a paw print, a lock of fur — or ashes — in hand-poured resin. A permanent tribute to the companion you lost. Made to order by Kent & Vale in Sittingbourne, Kent.',
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
    title: 'Collar & Tag',
    body: "The collar they wore every day. The tag you'd hear from the other end of the house. We set it in resin exactly as it is — worn leather, familiar clasp, their name on the tag — and build it into a permanent object.",
  },
  {
    title: 'Lock of Fur',
    body: 'Fur preserved in resin stays exactly as it was — colour, texture, softness. Often combined with a paw print, a dried flower from the garden, or a few grains of earth from their favourite walk.',
  },
  {
    title: 'Paw Print',
    body: 'An ink or clay paw print embedded in clear resin. We can work from a print you already have, or guide you through making one. The result is something that will sit on your shelf for the rest of your life.',
  },
  {
    title: 'Ashes',
    body: 'A portion of ashes set within the resin — making the piece truly continuous with the animal. This can be a standalone object or combined with a collar, a lock of fur, or pressed flowers from the garden where they rested.',
  },
  {
    title: 'Favourite Toy',
    body: "A small toy, a chewed tennis ball, a piece of rope they loved — embedded in resin, it becomes a monument to the way they played. Small, irreplaceable, funny. Exactly right.",
  },
  {
    title: 'Something of Your Own',
    body: "Every pet is different. Every loss is different. Tell us what you have and what the piece should feel like. There's no catalogue — only a conversation and a commission.",
  },
];

export default function PetsPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section style={{ background: charcoal, minHeight: '70vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <p style={eyebrow}>Memories — Pets</p>
          <h1 style={{ ...sectionHeading, color: ivory }}>
            They were family.<br />This says so.
          </h1>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', maxWidth: '480px' }}>
            A collar. A paw print. A lock of fur. Ashes. We set what remains of a beloved animal in hand-poured resin — and build it into something permanent, something placed, something that belongs in the home the way they did.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Begin a Commission →</Link>
            <Link href="/memories" style={ghostCTA}>All Memories</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/images/pet-memorial-1.jpg"
            alt="Resin display block pet memorial — wood-burned dog portrait, name plaque and flowers set in clear resin on a mantelpiece with candles"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
          />
        </div>
      </section>

      {/* What we preserve */}
      <section style={{ background: ivory, padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>What we can preserve</p>
          <h2 style={{ ...sectionHeading, color: charcoal, maxWidth: '520px' }}>
            A tribute that lasts as long as you do.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem 3rem', marginTop: '3rem' }}>
            {keepsakes.map(({ title, body }) => (
              <div key={title} style={{ borderTop: '1px solid rgba(26,26,24,0.1)', paddingTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: charcoal, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note on sensitivity */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: brass }}>How we work</p>
          <h2 style={{ ...sectionHeading, color: ivory }}>We understand what this means.</h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 1.5rem' }}>
            Losing a pet is losing a presence in the house. We treat every pet commission with the same care and attention we give to all our Memories work — because it is the same. You tell us what you have and what you'd like the piece to feel like. We handle everything from there, with care and without rush.
          </p>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 1.5rem' }}>
            We add a brass plaque engraved with their name and the years they were with you. Lead time is typically four to six weeks.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" style={brassCTA}>Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
