import React from 'react';
import Link from 'next/link';

const SITE = 'https://www.kentandvale.com';

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Career Memory Keepsakes in Resin — Kent & Vale',
  description: 'Preserve ID badges, business cards, a favourite pen, golf balls and career mementoes in hand-poured resin. A bespoke retirement gift handmade in Kent, England.',
  provider: { '@type': 'LocalBusiness', name: 'Kent & Vale', url: SITE },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  url: `${SITE}/memories/career`,
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Memories', item: `${SITE}/memories` },
    { '@type': 'ListItem', position: 3, name: 'Career Memories', item: `${SITE}/memories/career` },
  ],
};

export const metadata = {
  title: "Career Memories in Resin | Kent & Vale",
  description: "Preserve a working life in resin — ID badges, business cards, a favourite pen, a golf ball, a letter — set into a side table or display piece. The perfect retirement gift. Made by hand in Kent.",
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

const items = [
  {
    title: 'ID Badges & Passes',
    body: "The lanyard they wore every day for thirty years. The building passes from every company they gave their best to. We embed them exactly as they are — worn, printed, personal — beneath crystal-clear resin.",
  },
  {
    title: 'Business Cards',
    body: "The card they handed to strangers who became colleagues who became lifelong friends. A career's worth of cards, or just the first one, or just the last — arranged in the resin like a timeline of a working life.",
  },
  {
    title: 'A Favourite Pen',
    body: 'The pen they signed the deals with. The one they always reached for. Set in resin, still poised as though about to write something important — because it was, once, many times.',
  },
  {
    title: 'Professional Certificates',
    body: 'The qualifications that opened doors. The letters after the name. We can embed a rolled certificate or a folded letter of commendation so that the document itself becomes part of the furniture.',
  },
  {
    title: 'Mementoes from the Work',
    body: 'A golf ball from the company day. A coin from a project launch. A token from a milestone trip. A key fob. Small objects accumulate over a career — we give them a permanent home together.',
  },
  {
    title: "Something Only They Would Recognise",
    body: "The things that meant the most are often the hardest to explain to anyone else. We don't need to understand them — we just need to know what they are and where they should sit. You tell us the story. We build the piece.",
  },
];

export default function CareerMemoriesPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section
        style={{
          background: charcoal,
          minHeight: '85vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        <div
          style={{
            padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <p style={eyebrow}>Memories — Career</p>
          <h1 style={{ ...sectionHeading, color: ivory }}>
            A working life<br />deserves a monument.
          </h1>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.78)', maxWidth: '480px' }}>
            Decades of early mornings. The badges, the cards, the handshakes, the deals. The career that paid for the house and put the children through school and meant more than any job description could say. We preserve it — set in hand-poured resin, built into a piece of furniture that tells the story to everyone who sees it.
          </p>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.78)', maxWidth: '480px' }}>
            The perfect retirement gift. Or the one you commission for yourself, because you know what it took.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Begin a Commission →</Link>
            <Link href="/memories" style={ghostCTA}>All Memories</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '420px' }}>
          <img
            src="/images/career-memories-1.jpg"
            alt="Round resin side table in forest green with olive wood, containing embedded career mementoes — ID badges, business cards, a pen and golf ball — a retirement keepsake made by Kent & Vale"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        </div>
      </section>

      {/* The gift no one thinks to give */}
      <section style={{ background: ivory, padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>Why this gift</p>
          <h2 style={{ ...sectionHeading, color: charcoal }}>
            Not a card. Not a clock.<br />Something they will keep.
          </h2>
          <p style={{ ...bodyText, color: '#444' }}>
            When someone retires, the instinct is to get them something nice. But nice fades. Nice gets put on a shelf and eventually moved to a drawer. A career memories commission is something else entirely — it is the career itself, made physical, given a permanent address in the home.
          </p>
          <p style={{ ...bodyText, color: '#444' }}>
            Imagine a round side table in forest green resin with a live-edge olive wood centre. Set beneath the surface: an ID badge from the first job and the last. A business card. The pen they always used. A golf ball from the company day. A handwritten note from a colleague who mattered. Every time they rest a cup on it, they see their working life looking back up at them.
          </p>
          <p style={{ ...bodyText, color: '#444' }}>
            We made exactly this. The family gathered the items without telling the retiree what they were for. They brought them to us. We built a table around them. When he saw it for the first time, he didn't say anything for a while.
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.85, color: '#444', fontStyle: 'italic' }}>
            That is what we are here for.
          </p>
        </div>
      </section>

      {/* What we can embed */}
      <section style={{ background: '#f5f3ef', padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>What we can preserve</p>
          <h2 style={{ ...sectionHeading, color: charcoal, maxWidth: '520px' }}>
            The small things that<br />held a career together.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem 3rem',
              marginTop: '3rem',
            }}
          >
            {items.map(({ title, body }) => (
              <div key={title} style={{ borderTop: '1px solid rgba(26,26,24,0.1)', paddingTop: '1.5rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: charcoal,
                    marginBottom: '0.75rem',
                  }}
                >
                  {title}
                </h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For families commissioning a gift */}
      <section
        style={{
          background: charcoal,
          padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem 5rem', alignItems: 'center' }}>
          <div>
            <p style={eyebrow}>Commissioning as a gift</p>
            <h2 style={{ ...sectionHeading, color: ivory, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              The logistics are<br />easier than you think.
            </h2>
            <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
              We work with families, teams, and colleagues all the time on retirement gifts. You gather the items — secretly, if that is the point — and bring them to us or post them to our studio in Sittingbourne. We handle the design, the pour, the furniture build, and the delivery.
            </p>
            <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
              We can work to a retirement date. We have done it many times. The first conversation is always free and always without obligation — just tell us what you have in mind and we will tell you if we can make it happen.
            </p>
          </div>
          <div>
            <p style={eyebrow}>The forms it can take</p>
            <div style={{ borderLeft: `2px solid ${brass}`, paddingLeft: '1.5rem' }}>
              {[
                'A round side table — the career under glass, in your living room',
                'A rectangular coffee table — items arranged like a timeline',
                'A display block on a walnut plinth — a desk piece, an office piece',
                'A wall-mounted panel — a piece of art that holds a life',
                'A chess board — for the one who always played the long game',
              ].map((form, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    color: 'rgba(240,236,228,0.78)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                    paddingBottom: '1rem',
                    borderBottom: i < 4 ? '1px solid rgba(184,181,174,0.12)' : 'none',
                  }}
                >
                  {form}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: brass }}>Begin here</p>
          <h2 style={{ ...sectionHeading, color: ivory }}>Tell us about the career.</h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 0.5rem' }}>
            Every commission starts with a conversation. You tell us what the career was, what items you have, and what the piece should feel like. We handle everything from there — design, build, engraving, delivery.
          </p>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 2rem' }}>
            Lead time is typically four to six weeks. We can work to a date if you give us enough notice. The first conversation is free.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
