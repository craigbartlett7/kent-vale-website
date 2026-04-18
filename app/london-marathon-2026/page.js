import Link from 'next/link';

export const metadata = {
  title: 'London Marathon 2026 — Keep It Forever | Kent & Vale',
  description: 'You crossed the finish line. Now preserve it forever. Kent & Vale creates handcrafted heirloom pieces for London Marathon 2026 finishers — your medal, your time, your moment, made permanent.',
  keywords: 'London Marathon 2026, marathon finisher keepsake, marathon medal display, marathon memento, London Marathon gift, marathon achievement gift UK, bespoke marathon keepsake',
  openGraph: {
    title: 'You Did It Once. Keep It Forever. | Kent & Vale',
    description: 'Handcrafted heirlooms for London Marathon 2026 finishers. Your time. Your medal. Your moment. Made to last a lifetime.',
    type: 'website',
    url: 'https://kentandvale.com/london-marathon-2026',
    images: [
      {
        url: 'https://kentandvale.com/london-marathon-2026-hero.jpg',
        width: 900,
        height: 1200,
        alt: 'London Marathon 2026 finisher celebrating at the finish line wearing a Kent & Vale vest',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'London Marathon 2026 Finisher Keepsake — Kent & Vale',
  description: 'Bespoke handcrafted heirlooms for London Marathon 2026 finishers. Resin and wood pieces that preserve your medal, race number, and finish time as a permanent object of achievement.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kent & Vale',
    url: 'https://kentandvale.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sittingbourne',
      addressRegion: 'Kent',
      addressCountry: 'GB',
    },
  },
  areaServed: 'GB',
  url: 'https://kentandvale.com/london-marathon-2026',
};

export default function LondonMarathon2026() {
  return (
    <div style={{ background: 'white' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '64px',
      }}>
        <img
          src="/london-marathon-2026-hero.jpg"
          alt="London Marathon 2026 finisher celebrating at the finish line wearing a Kent & Vale vest"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.65) 100%)',
        }} />

        {/* Hero content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '4rem 2rem',
          maxWidth: '780px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
          }}>
            London Marathon 2026
          </p>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--ivory)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}>
            You Did It Once.<br />Keep It Forever.
          </h1>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'var(--brass)',
              color: 'var(--charcoal)',
              fontFamily: 'var(--sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Preserve Your Marathon
          </Link>
        </div>
      </section>

      {/* Primary copy */}
      <section style={{ padding: '7rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '2.5rem',
          }}>
            For London Marathon 2026 Finishers
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 400,
            lineHeight: 1.35,
            color: 'var(--charcoal)',
            marginBottom: '2.5rem',
          }}>
            You didn't just run a marathon.<br />You changed something about yourself.
          </h2>
          <div style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: '#444',
            marginBottom: '2.5rem',
          }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Early mornings. Long runs. Doubt. Discipline. And then… you crossed the line.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Most people will only ever do this once.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Don't let it become just another photo in your camera roll.
            </p>
          </div>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            color: 'var(--charcoal)',
            lineHeight: 1.6,
          }}>
            At Kent &amp; Vale, we create objects of permanence — handcrafted pieces that preserve your achievement forever.
          </p>
        </div>
      </section>

      {/* What we preserve */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            What We Create
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 400,
            textAlign: 'center',
            color: 'var(--charcoal)',
            marginBottom: '4rem',
          }}>
            Your Time. Your Medal. Your Moment.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}>
            {[
              {
                title: 'Medal & Race Number',
                desc: 'Your finisher\'s medal and race bib set in hand-poured resin, framed in English walnut or oak. A display piece that tells the story at a glance.',
              },
              {
                title: 'Finish Time Piece',
                desc: 'Your official finish time — the number you\'ll never forget — engraved or cast into a permanent object. For your desk, your mantelpiece, your study.',
              },
              {
                title: 'Full Memory Commission',
                desc: 'Your medal, your bib, your GPS data, a photograph, a message. Everything that made the day, made permanent in a single bespoke piece.',
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                padding: '2.5rem 2rem',
                border: '1px solid rgba(184,181,174,0.3)',
                background: '#faf9f7',
              }}>
                <div style={{
                  width: '2rem',
                  height: '1px',
                  background: 'var(--brass)',
                  marginBottom: '1.5rem',
                }} />
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: 'var(--charcoal)',
                  marginBottom: '0.75rem',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#555',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1rem',
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--ivory)',
            marginBottom: '3.5rem',
          }}>
            Made to Last a Lifetime
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
            textAlign: 'left',
          }}>
            {[
              { num: '01', step: 'Tell us your story', desc: 'What you want the piece to hold. Your time, your medal, your mementos.' },
              { num: '02', step: 'We design it', desc: 'A bespoke design built around your achievement and your home.' },
              { num: '03', step: 'We make it by hand', desc: 'Every pour, every finish, every detail. No shortcuts.' },
              { num: '04', step: 'Kept forever', desc: 'Delivered to your door. Ready to display. Built to outlast you.' },
            ].map((item, idx) => (
              <div key={idx}>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.5rem',
                  color: 'var(--forest)',
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}>
                  {item.num}
                </p>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--ivory)',
                  marginBottom: '0.4rem',
                }}>
                  {item.step}
                </p>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.85rem',
                  color: 'var(--stone)',
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '7rem 2rem', background: 'var(--ivory)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
          }}>
            Kent &amp; Vale
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'var(--charcoal)',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}>
            You Did It Once.<br />Keep It Forever.
          </h2>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '1rem',
            color: '#555',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            Every commission begins with a conversation. Tell us what you want the piece to hold and we'll design something made to last a lifetime.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '1.1rem 3rem',
              background: 'var(--charcoal)',
              color: 'var(--ivory)',
              fontFamily: 'var(--sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              marginBottom: '1.5rem',
            }}
          >
            Preserve Your Marathon
          </Link>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            color: 'var(--stone)',
            letterSpacing: '0.05em',
          }}>
            Handmade in Kent, England · Commissions open for 2026
          </p>
        </div>
      </section>

      {/* Footer nav link */}
      <div style={{
        borderTop: '1px solid rgba(184,181,174,0.2)',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--stone)',
          textDecoration: 'none',
        }}>
          ← Kent &amp; Vale
        </Link>
      </div>
    </div>
  );
}
