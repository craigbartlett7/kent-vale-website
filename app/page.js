import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Kent & Vale — Resin Keepsakes & Bespoke Furniture, Handmade in Kent',
  description: 'Kent & Vale preserves memories in resin — wedding flowers, funeral flowers, and irreplaceable keepsakes — and makes design-led furniture and collector game boards by hand in Kent, England.',
};

const SITE = 'https://www.kentandvale.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kent & Vale',
  description: 'We preserve memories in resin — wedding flowers, funeral flowers, and irreplaceable keepsakes — alongside handmade furniture and collector game boards. Studio in Sittingbourne, Kent.',
  url: SITE,
  email: 'hello@kentandvale.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Sittingbourne', addressRegion: 'Kent', addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  priceRange: '££–££££',
  image: `${SITE}/og-image.jpg`,
  logo: { '@type': 'ImageObject', url: `${SITE}/images/pbb-logo-transparent.png` },
  sameAs: ['https://www.instagram.com/kentandvale', 'https://www.pinterest.com/kentandvale'],
  knowsAbout: [
    'resin preservation', 'wedding flower preservation', 'funeral flower preservation',
    'memory keepsakes', 'bespoke furniture', 'handmade chess boards', 'collector game boards',
    'retirement gifts', 'pet memorials', 'baby memory keepsakes',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kent & Vale Commissions',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Flower Preservation in Resin', url: `${SITE}/memories/wedding-flowers` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Funeral Flower Preservation in Resin', url: `${SITE}/memories/funeral-flowers` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Baby Memory Keepsakes in Resin', url: `${SITE}/memories/baby` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Memorial Keepsakes in Resin', url: `${SITE}/memories/pets` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Career Memory Keepsakes in Resin', url: `${SITE}/memories/career` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sporting Achievement Keepsakes in Resin', url: `${SITE}/memories/sporting-achievements` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Favourite Places Preserved in Resin', url: `${SITE}/memories/favourite-places` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Bespoke Handmade Furniture', url: `${SITE}/studio` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Collector Game Boards and Chess Sets', url: `${SITE}/the-games-room` } },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What can Kent & Vale preserve in resin?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kent & Vale preserves wedding flowers, funeral flowers, baby mementoes (hospital tags, locks of hair, first shoes), pet items (collars, fur, ashes), career memorabilia (ID badges, business cards, pens), sporting achievements (medals, rosettes, race numbers), and items from favourite places (shells, soil, wood). Almost any object can be set in hand-poured resin.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a resin commission take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Typical lead time for a Memories commission is four to six weeks from the initial conversation to delivery. Bespoke furniture from the Studio takes eight to twelve weeks. Each piece is made to order.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a resin memory keepsake cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kent & Vale commissions start from around £350 for a smaller keepsake block and range to £20,000 or more for large furniture pieces. Every commission is bespoke and priced after an initial conversation about size, materials, and what is being preserved.' },
    },
    {
      '@type': 'Question',
      name: 'Where is Kent & Vale based?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kent & Vale is based in Sittingbourne, Kent, England. We ship across the United Kingdom and can arrange delivery for larger furniture commissions.' },
    },
    {
      '@type': 'Question',
      name: 'Is a resin memory keepsake a good retirement gift?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Career memory keepsakes — ID badges, business cards, a favourite pen, a golf ball set in resin as a side table or display piece — are one of our most popular commission types and are frequently bought as retirement gifts.' },
    },
    {
      '@type': 'Question',
      name: 'Can you preserve wedding flowers that are already dried?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work with dried and freeze-dried wedding flowers. For best results, flowers should be sent within two weeks of the wedding, but we have worked successfully with flowers dried months or even years earlier.' },
    },
  ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
          <div style={{ overflow: 'hidden', minHeight: '320px' }}>
            <img src="https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776414064/Dining_table_in_modern_luxury_interior1_ypudod.png" alt="Kent & Vale Studio — dining table" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

        {/* The Games Room */}
        <div style={roomStyle('var(--forest)')}>
          <div style={{ overflow: 'hidden', minHeight: '320px' }}>
            <img src="https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776419916/Game_board_in_context_luxury_games_room1_whsndt.png" alt="Kent & Vale — The Games Room chess board" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* Memories */}
        <div style={roomStyle('#1a1a18')}>
          <div style={panelStyle('#1a1a18')}>
            <p style={eyebrow}>III — Memories</p>
            <h2 style={roomHeading}>We preserve memories<br />in resin. Permanently.</h2>
            <p style={{ ...roomBody(false), marginBottom: '1rem' }}>
              Wedding flowers. Funeral flowers. Ashes, locks of hair, a loved one's belongings. We set what matters most in hand-poured resin and build it into a piece that lives in your home for the rest of your life.
            </p>
            <p style={roomBody(false)}>
              No catalogue. No fixed forms. Every Memories commission begins with a conversation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/memories/wedding-flowers" style={brassCTA}>Wedding Flowers →</Link>
              <Link href="/memories/funeral-flowers" style={ghostCTA}>Funeral Flowers →</Link>
            </div>
          </div>
          <div style={{ overflow: 'hidden', minHeight: '320px' }}>
            <img src="/images/resin-flowers-5.jpg" alt="Kent & Vale Memories — flowers preserved in resin" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>How every piece begins</h2>
          <p style={{ textAlign: 'center', fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Whether you configure a Studio piece or begin a Memories commission, the heart of the process is the same.
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
              <p className={styles.testimonialAttribution}>Emma & Jonathan — Memories Commission, 2025</p>
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
