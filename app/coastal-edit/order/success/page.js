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

  const steps = [
    {
      num: '01',
      title: "We'll send you a confirmation email",
      desc: 'Your order confirmation will arrive within a few minutes at the email address you provided. It will include your order reference and a summary of your order.',
    },
    {
      num: '02',
      title: 'We begin work',
      desc: 'In-stock items are packed and dispatched within 2–3 working days. Made-to-order pieces (the wave board and tray table) enter production immediately — you\'ll receive a dispatch notification when ready.',
    },
    {
      num: '03',
      title: 'Delivered to your door',
      desc: 'All orders are sent via tracked delivery. You\'ll receive tracking details once your order is dispatched. Handle with care — your resin piece is a work of art.',
    },
  ];

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#0d1f2d', paddingTop: '120px', paddingBottom: '4rem', padding: '120px 2rem 4rem' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>
            The Coastal Collection · Payment Received
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Thank you.<br />Your order is placed.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'rgba(240,236,228,0.8)', lineHeight: 1.7, maxWidth: '460px', margin: '0 auto' }}>
            Payment confirmed. We'll get this to you as quickly as we can.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Order number */}
        <div style={{ padding: '2rem', background: 'white', border: '1px solid rgba(184,181,174,0.35)', textAlign: 'center', marginBottom: '3.5rem' }}>
          {order ? (
            <>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#999', marginBottom: '0.75rem' }}>
                Your Order Reference
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--charcoal)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {order.orderNumber}
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.6 }}>
                Quote this reference in any correspondence about your order.
              </p>
            </>
          ) : attempts >= 8 ? (
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
              Your order has been placed. You'll receive an email confirmation shortly.
            </p>
          ) : (
            <>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#bbb', marginBottom: '0.75rem' }}>
                Confirming your order…
              </p>
              <div style={{ width: '32px', height: '2px', background: 'var(--brass)', margin: '0 auto', animation: 'pulse 1.2s ease-in-out infinite' }} />
              <style>{`@keyframes pulse { 0%,100%{opacity:0.3} 50%{opacity:1} }`}</style>
            </>
          )}
        </div>

        {/* Next steps */}
        <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem', textAlign: 'center' }}>
          What Happens Next
        </p>

        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: '#4a7fa5', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>
              {step.num}
            </p>
            <div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.4rem' }}>
                {step.title}
              </p>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Contact note */}
        <div style={{ padding: '1.5rem', background: 'white', border: '1px solid rgba(184,181,174,0.35)', textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
            Any questions? Quote your order reference and write to{' '}
            <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--charcoal)' }}>
              hello@kentandvale.com
            </a>
          </p>
        </div>

        {/* Explore more */}
        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/coastal-edit" style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            ← The Coastal Collection
          </Link>
          <Link href="/memories" style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            Explore Memories →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoastalOrderSuccess() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--ivory)' }} />}>
      <SuccessContent />
    </Suspense>
  );
}
