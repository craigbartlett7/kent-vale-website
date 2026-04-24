import Link from 'next/link';

export const metadata = {
  title: 'Order Confirmed — Kent & Vale',
  description: 'Your London Marathon keepsake order has been placed. We\'ll be in touch shortly with instructions for sending your medal.',
};

export default function OrderSuccess() {
  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{
        paddingTop: '120px',
        paddingBottom: '4rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textAlign: 'center',
        background: 'var(--charcoal)',
      }}>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.75rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--brass)',
          marginBottom: '1rem',
        }}>
          Order Confirmed
        </p>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 400,
          color: 'var(--ivory)',
          lineHeight: 1.2,
          marginBottom: '1.5rem',
        }}>
          You Did It Once.<br />Now We'll Keep It Forever.
        </h1>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.95rem',
          color: 'var(--stone)',
          lineHeight: 1.7,
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          Thank you for your order. Payment has been received and your commission is now in our books.
        </p>
      </div>

      {/* Next steps */}
      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '5rem 2rem' }}>

        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--brass)',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          What Happens Next
        </p>

        {[
          {
            num: '01',
            title: 'Check your inbox',
            desc: 'A payment confirmation is on its way from Stripe. We\'ll also send you a separate email within one working day with instructions for posting your medal and certificate to our studio.',
          },
          {
            num: '02',
            title: 'Post your medal to us',
            desc: 'We\'ll provide a Kent studio address and recommend a tracked service. Your medal is in safe hands — we handle every piece with the care it deserves.',
          },
          {
            num: '03',
            title: 'We make your keepsake',
            desc: 'Once we receive your medal, we\'ll begin work. We\'ll keep you updated as the piece takes shape — typically 4–6 weeks from receipt of your items.',
          },
          {
            num: '04',
            title: 'Delivered to your door',
            desc: 'Your finished keepsake is packed carefully and sent via tracked delivery. It arrives ready to display — a permanent object of your achievement.',
          },
        ].map((step, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            alignItems: 'flex-start',
          }}>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.5rem',
              color: 'var(--forest)',
              lineHeight: 1,
              flexShrink: 0,
              marginTop: '2px',
            }}>
              {step.num}
            </p>
            <div>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--charcoal)',
                marginBottom: '0.4rem',
              }}>
                {step.title}
              </p>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                color: '#555',
                lineHeight: 1.7,
              }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Contact note */}
        <div style={{
          padding: '1.5rem',
          background: 'white',
          border: '1px solid rgba(184,181,174,0.35)',
          textAlign: 'center',
          marginTop: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.875rem',
            color: '#555',
            lineHeight: 1.7,
          }}>
            Any questions? We're always happy to hear from you at{' '}
            <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--charcoal)' }}>
              hello@kentandvale.com
            </a>
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--stone)',
              textDecoration: 'none',
            }}
          >
            ← Kent &amp; Vale
          </Link>
        </div>
      </div>
    </div>
  );
}
