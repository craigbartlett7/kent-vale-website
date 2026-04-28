'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  const [order, setOrder] = useState(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!sessionId) return;

    // Poll for the order — webhook may take a few seconds to write it
    const maxAttempts = 8;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/orders/by-session?session_id=${sessionId}`);
        const data = await res.json();

        if (data.found) {
          setOrder(data);
          clearInterval(interval);
        } else {
          setAttempts(prev => {
            if (prev + 1 >= maxAttempts) clearInterval(interval);
            return prev + 1;
          });
        }
      } catch {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [sessionId]);

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

      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Order number */}
        <div style={{
          padding: '2rem',
          background: 'white',
          border: '1px solid rgba(184,181,174,0.35)',
          textAlign: 'center',
          marginBottom: '3.5rem',
        }}>
          {order ? (
            <>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: '0.75rem',
              }}>
                Your Order Number
              </p>
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: '2rem',
                color: 'var(--charcoal)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}>
                {order.orderNumber}
              </p>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.8rem',
                color: 'var(--stone)',
                lineHeight: 1.6,
              }}>
                Please keep this safe — quote it if you need to get in touch with us about your commission.
              </p>
            </>
          ) : attempts >= 8 ? (
            <>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                color: '#555',
                lineHeight: 1.7,
              }}>
                Your order has been placed. You'll receive your order number by email shortly.
              </p>
            </>
          ) : (
            <>
              <p style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#bbb',
                marginBottom: '0.75rem',
              }}>
                Confirming your order…
              </p>
              <div style={{
                width: '32px',
                height: '2px',
                background: 'var(--brass)',
                margin: '0 auto',
                animation: 'pulse 1.2s ease-in-out infinite',
              }} />
              <style>{`@keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }`}</style>
            </>
          )}
        </div>

        {/* Next steps */}
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
            desc: 'A payment confirmation is on its way. We\'ll also be in touch within one working day to arrange everything for the next step.',
          },
          {
            num: '02',
            title: 'We send you protective packaging',
            desc: 'We\'ll post you prepaid, self-addressed protective packaging so you can safely send your medal and certificate to our studio in Kent — no trips to the post office needed.',
          },
          {
            num: '03',
            title: 'We make your keepsake',
            desc: 'Once we receive your items, we\'ll begin work. We\'ll keep you updated as the piece takes shape — typically 4–6 weeks from receipt.',
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
            Any questions? Quote your order number and reach us at{' '}
            <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--charcoal)' }}>
              hello@kentandvale.com
            </a>
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
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
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--ivory)' }} />}>
      <SuccessContent />
    </Suspense>
  );
}
