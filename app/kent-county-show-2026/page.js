import Link from 'next/link';
import ConsultationForm from './ConsultationForm';

const HERO_IMAGE = 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776413583/Dining_table_in_modern_luxury_interior2_lt4aum.png';

export const metadata = {
  title: 'Meet Us at the Kent County Show 2026 | Kent & Vale',
  description: 'Kent & Vale is exhibiting at the Kent County Show, 3rd–5th July 2026. Come and see pieces from every collection in person and book a 10-minute consultation on the day.',
  keywords: 'Kent County Show 2026, Kent & Vale exhibitor, Kent Showground, bespoke furniture Kent, meet Kent and Vale, furniture consultation Kent',
  openGraph: {
    title: 'Meet Us at the Kent County Show — 3rd–5th July 2026 | Kent & Vale',
    description: 'We’re exhibiting at the Kent County Show with pieces from every collection on display, and 10-minute consultations available on the day.',
    type: 'website',
    url: 'https://www.kentandvale.com/kent-county-show-2026',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 800,
        alt: 'A Kent & Vale dining table in a refined, modern interior',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Kent & Vale at the Kent County Show 2026',
  description: 'Kent & Vale will be exhibiting at the Kent County Show, with pieces from every collection on display and 10-minute design consultations available on the day.',
  startDate: '2026-07-03',
  endDate: '2026-07-05',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Kent Showground',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kent Showground',
      addressLocality: 'Maidstone',
      addressRegion: 'Kent',
      postalCode: 'ME14 3JF',
      addressCountry: 'GB',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Kent & Vale',
    url: 'https://www.kentandvale.com',
  },
  image: HERO_IMAGE,
  url: 'https://www.kentandvale.com/kent-county-show-2026',
};

const SHOWCASE_ITEMS = [
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1779267457/60cm_round_table_oyfmyq.png',
    alt: '60cm Round Table from the Kent & Vale Studio collection',
    label: 'Studio',
    name: '60cm Round Table',
  },
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776413587/Desk_table_in_home_office_space2_eykxb2.png',
    alt: 'Office Desk from the Kent & Vale Studio collection, shown in a home office',
    label: 'Studio',
    name: 'Office Desk',
  },
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776419916/Game_board_in_context_luxury_games_room1_whsndt.png',
    alt: 'Home Chess Board from the Kent & Vale Games Room collection',
    label: 'The Games Room',
    name: 'Home Chess Board',
  },
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776423750/English_Countryside_Chess_Board_wg91re.png',
    alt: 'Competition Chess Board from the Kent & Vale Games Room collection',
    label: 'The Games Room',
    name: 'Competition Chess Board',
  },
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1778839102/60_x_40_side_table_hfdov7.png',
    alt: '60cm x 40cm Side Table from the Kent & Vale Studio collection',
    label: 'Studio',
    name: '60cm x 40cm Side Table',
  },
  {
    src: 'https://res.cloudinary.com/deavpxz5u/image/upload/q_auto/f_auto/v1776413583/Dining_table_in_modern_luxury_interior2_lt4aum.png',
    alt: 'Large Dining Table from the Kent & Vale Studio collection, shown in a modern luxury interior',
    label: 'Studio',
    name: 'Large Dining Table',
  },
];

export default function KentCountyShow2026() {
  return (
    <div style={{ background: 'white' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '64px',
      }}>
        <img
          src={HERO_IMAGE}
          alt="A Kent & Vale dining table in a refined, modern interior"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.75) 100%)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '4rem 2rem',
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
          }}>
            3rd – 5th July 2026 · Kent Showground
          </p>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--ivory)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}>
            Come and See Us at<br />the Kent County Show
          </h1>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.05rem',
            color: 'var(--stone)',
            lineHeight: 1.8,
            maxWidth: '540px',
            marginBottom: '2.5rem',
          }}>
            We're exhibiting for all three days, with pieces from every collection on display and 10-minute design consultations available on the day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="#consultations"
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
              }}
            >
              Reserve a Consultation
            </a>
            <a
              href="https://kcas.org.uk/kent-county-show/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: 'var(--ivory)',
                border: '1px solid rgba(245,242,235,0.4)',
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Show Tickets &amp; Directions
            </a>
          </div>
        </div>
      </section>

      {/* Invitation copy */}
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
            You're Invited
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontWeight: 400,
            lineHeight: 1.35,
            color: 'var(--charcoal)',
            marginBottom: '2.5rem',
          }}>
            Our pieces are made to be touched,<br />not just photographed.
          </h2>
          <div style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: '#444',
            marginBottom: '2.5rem',
          }}>
            <p style={{ marginBottom: '1.25rem' }}>
              For three days at the Kent County Show, we're stepping out of the studio and onto the showground — bringing a hand-picked selection from across our collections so you can see the resin pours, feel the timber, and take in the detail in person.
            </p>
            <p>
              Whether you've been following us for a while or you're discovering Kent &amp; Vale for the first time, come and say hello. We'd love to talk about what we make, and what we could make for you.
            </p>
          </div>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            color: 'var(--charcoal)',
            lineHeight: 1.6,
          }}>
            No appointment needed to stop by — just bring your questions.
          </p>
        </div>
      </section>

      {/* What's on display */}
      <section style={{ padding: '7rem 2rem', background: 'white' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1rem',
            textAlign: 'center',
          }}>
            On Display
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 400,
            textAlign: 'center',
            color: 'var(--charcoal)',
            marginBottom: '4rem',
          }}>
            Every Collection, Under One Tent
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}>
            {[
              {
                title: 'Studio',
                desc: 'Our design-led, made-to-order furniture — dining tables, side tables, consoles and boards in your choice of timber and resin.',
              },
              {
                title: 'The Games Room',
                desc: 'Handcrafted chess boards and game pieces, built as both objects of play and objects of display.',
              },
              {
                title: 'Memories',
                desc: 'Our fully bespoke heirloom pieces. Bring a photo or simply an idea — this is where we talk through what’s possible.',
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

          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--stone)',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}>
            A Preview of What You'll See
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {SHOWCASE_ITEMS.map((item, idx) => (
              <div key={idx} style={{ background: '#f0ece4' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.1rem 1.25rem' }}>
                  <p style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--brass)',
                    marginBottom: '0.4rem',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '1rem',
                    color: 'var(--charcoal)',
                  }}>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event details */}
      <section style={{ padding: '7rem 2rem', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1rem',
          }}>
            The Details
          </p>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 400,
            color: 'var(--ivory)',
            marginBottom: '3.5rem',
          }}>
            Find Us at the Showground
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
            textAlign: 'left',
          }}>
            {[
              { label: 'When', value: 'Friday 3rd – Sunday 5th July 2026' },
              { label: 'Where', value: 'Kent Showground, Maidstone, Kent ME14 3JF' },
              { label: 'Tickets', value: 'Available via the official Kent County Show site' },
            ].map((item, idx) => (
              <div key={idx}>
                <p style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--forest)',
                  marginBottom: '0.6rem',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  color: 'var(--ivory)',
                  lineHeight: 1.5,
                }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.95rem',
            color: 'var(--stone)',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}>
            Kent &amp; Vale will have a stand among the show's trade exhibitors — ask any member of staff on site and they'll happily point you our way.
          </p>
          <a
            href="https://kcas.org.uk/kent-county-show/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--brass)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--brass)',
              paddingBottom: '2px',
            }}
          >
            Plan your visit at kcas.org.uk →
          </a>
        </div>
      </section>

      {/* Consultations */}
      <section id="consultations" style={{ padding: '7rem 2rem', background: 'var(--ivory)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--brass)',
                marginBottom: '1rem',
              }}>
                On the Day
              </p>
              <h2 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 400,
                color: 'var(--charcoal)',
                marginBottom: '1.5rem',
                lineHeight: 1.3,
              }}>
                Book a 10-Minute Consultation
              </h2>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem',
                lineHeight: 1.85,
                color: '#444',
                marginBottom: '1.5rem',
              }}>
                Bring your space, your ideas, or just a question, and spend ten minutes with us talking through what's possible — timber choices, sizing, lead times, or a fully bespoke Memories commission.
              </p>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem',
                lineHeight: 1.85,
                color: '#444',
                marginBottom: '1.5rem',
              }}>
                Reserve a slot in advance using the form, and we'll do our best to see you at your preferred time. No reservation needed if you'd rather just walk up on the day.
              </p>
              <div style={{
                borderTop: '1px solid rgba(184,181,174,0.4)',
                paddingTop: '1.5rem',
              }}>
                {[
                  'No obligation, no pressure',
                  'Bring photos, measurements or just an idea',
                  'Available across all three show days',
                  'Walk-ups always welcome',
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.6rem',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.9rem',
                    color: '#555',
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: 'var(--brass)', flexShrink: 0, marginTop: '2px' }}>—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'white',
              border: '1px solid rgba(184,181,174,0.35)',
            }}>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding: '7rem 2rem', background: 'white', textAlign: 'center' }}>
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
            We Can't Wait to<br />Meet You in Person.
          </h2>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '1rem',
            color: '#555',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            Friday 3rd to Sunday 5th July, at the Kent Showground. Come and see what we make.
          </p>
          <a
            href="#consultations"
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
              marginBottom: '1.5rem',
            }}
          >
            Reserve a Consultation
          </a>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            color: 'var(--stone)',
            letterSpacing: '0.05em',
          }}>
            Handmade in Kent, England · Exhibiting 3–5 July 2026
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
