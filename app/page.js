import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Kent & Vale — Handmade in Kent, England',
  description: 'Three collections. One studio. Kent & Vale makes design-led furniture, collector game boards, and ultra-bespoke Atelier commissions by hand in Kent, England.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kent & Vale',
  description: 'Handmade furniture, collector game boards, and bespoke Atelier commissions from our studio in Kent, England.',
  url: 'https://kentandvale.com',
  email: 'hello@kentandvale.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Sittingbourne', addressRegion: 'Kent', addressCountry: 'GB' },
  areaServed: 'GB',
  priceRange: '£££',
  image: 'https://kentandvale.com/og-image.jpg',
  sameAs: ['https://instagram.com/kentandvale', 'https://pinterest.com/kentandvale'],
};

const roomStyle = (bg) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  minHeight: '520px',
  background: bg,
});

const panelStyle = (bg) => ({
  background: bg,
  padding: 'clamp(3rem, 6vw, 5rem)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const placeholderStyle = (bg) => ({
  background: bg,
  minHeight: '320px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const eyebrow = { fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.25rem' };
const roomHeading = { fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '1.5rem' };
const roomBody = (light) => ({ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: light ? 'rgba(240,236,228,0.8)' : 'var(--stone)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '420px' });
const brassCTA = { display: 'inline-block', padding: '0.9rem 2rem', background: 'var(--brass)', color: 'var(--charcoal)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' };
const ghostCTA = { display: 'inline-block', padding: '0.9rem 2rem', border: '1px solid rgba(184,181,174,0.4)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', alignSelf: 'flex-start' };

export default function Home() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Handmade in Kent, England</p>
          <h1 className={styles.heroHeadline}>Three rooms.<br />One studio.</h1>
          <p className={styles.heroSubheadline}>
            Design-led furniture. Collector game boards.<br />And commissions that carry a life inside them.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--ivory)' }}>
        {/* Studio */}
        <div style={roomStyle('var(--charcoal)')}>
          <div style={panelStyle('var(--charcoal)')}>
            <p style={eyebrow}>I — Studio</p>
            <h2 style={roomHeading}>Design-led furniture,<br />made to your order.</h2>
            <p style={roomBody(false)}>
              Dining tables, side tables, consoles and objects — each one chosen from our curated range of forms, built in your chosen timber, and made only when you order it. No two alike.
            </p>
            <Link href="/studio" style={brassCTA}>Enter Studio →</Link>
          </div>
          <div style={placeholderStyle('#2a2a2a')}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.15)', fontStyle: 'italic' }}>Images coming soon</p>
          </div>
        </div>

        {/* The Games Room */}
        <div style={roomStyle('var(--forest)')}>
          <div style={placeholderStyle('#f0ece4')}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'rgba(26,26,26,0.2)', fontStyle: 'italic' }}>Images coming soon</p>
          </div>
          <div style={panelStyle('var(--forest)')}>
            <p style={eyebrow}>II — The Games Room</p>
            <h2 style={roomHeading}>Collector game boards<br />built to be passed down.</h2>
            <p style={roomBody(true)}>
              Chess boards, backgammon sets and leisure objects made from the finest English timbers. Playable, displayable, and built for a lifetime. Commission as a gift — we work around your timeline.
            </p>
            <Link href="/the-games-room" style={brassCTA}>Enter The Games Room →</Link>
          </div>
        </div>

        {/* Atelier Commissions */}
        <div style={roomStyle('#1a1a18')}>
          <div style={panelStyle('#1a1a18')}>
            <p style={eyebrow}>III — Atelier Commissions</p>
            <h2 style={roomHeading}>When a piece needs to carry<br />something irreplaceable inside it.</h2>
            <p style={{ ...roomBody(false), marginBottom: '1rem' }}>
              Wedding flowers set in resin. A grandfather's cufflinks embedded in a chess board. A dining table built around timber salvaged from a childhood home.
            </p>
            <p style={roomBody(false)}>
              Atelier commissions are entirely bespoke and always begin with a conversation. There is no catalogue — only possibility.
            </p>
            <Link href="/atelier-commissions" style={ghostCTA}>Begin a Conversation →</Link>
          </div>
          <div style={placeholderStyle('#141412')}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.12)', fontStyle: 'italic' }}>Images coming soon</p>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>How every piece begins</h2>
          <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Whether you configure a Studio piece or begin an Atelier commission, the heart of the process is the same.
          </p>
          <div className={styles.processSteps}>
            {[
              { num: '01', title: 'Conversation', body: 'You tell us what the piece should hold. A room, a memory, a game. We listen.' },
              { num: '02', title: 'Design', body: 'We propose directions and explore with you. You guide the vision.' },
              { num: '03', title: 'Materials', body: 'We source timber, resins, metals — chosen for permanence and beauty.' },
              { num: '04', title: 'Creation', body: 'Many hours of careful making. The work happens. You see it taking shape.' },
              { num: '05', title: 'Delivery', body: 'The piece arrives. It enters your life. It becomes part of your story.' },
            ].map((s, i) => (
              <div key={i} className={styles.step}>
                <p className={styles.stepNumber}>{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Trusted by Homes & Hearts</h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>"She returned the wedding flowers in resin and we both cried. They're on our dining table. Every guest asks about them. This is the most meaningful gift we've ever received."</p>
              <p className={styles.testimonialAttribution}>Emma & Jonathan — Atelier Commission, 2025</p>
            </div>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>"I bought a chess set from Craig and didn't expect to become a collector. Three boards later, I understand why people commission heirlooms."</p>
              <p className={styles.testimonialAttribution}>Michael — Collector, Devon</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCTA}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Not sure where to start?</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.8 }}>Every commission begins with a conversation. No obligations — just a chat about what you imagine.</p>
          <Link href="/contact" className={styles.ctaPrimary}>Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
