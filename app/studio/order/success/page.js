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

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: 'var(--charcoal)', paddingTop: '120px', paddingBottom: '4rem', padding: '120px 2rem 4rem' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1rem' }}>
            Studio · Deposit Received
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Your piece is now<br />in production.
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', color: 'var(--stone)', lineHeight: 1.7, maxWidth: '460px', margin: '0 auto' }}>
            Thank you for your commission. Your deposit has been received and your piece enters the making queue today.
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
                Please keep this safe — quote it in any correspondence about your commission.
              </p>
            </>
          ) : attempts >= 8 ? (
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
              Your commission has been placed. You'll receive your order reference by email shortly.
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

        {[
          {
            num: '01',
            title: "We'll send an artist's impression",
            desc: "Within five working days you'll receive a digital artist's impression of your piece — showing the timber, resin palette, and form. This is your opportunity to refine or adjust before we begin.",
          },
          {
            num: '02',
            title: 'The making begins',
            desc: 'Once you\'re happy with the impression, our craftsmen begin work in our Kent studio. Every piece is built by hand to your specification — lead time is typically 8–12 weeks from this point.',
          },
          {
            num: '03',
            title: 'Balance payment',
            desc: 'When your piece is complete and ready to ship, we\'ll be in touch with bank transfer details for the remaining 50% balance. No payment is due until you\'ve seen the finished piece.',
          },
          {
            num: '04',
            title: 'Delivered to your door',
            desc: 'Your piece is carefully packed and sent via tracked, insured delivery. Every piece arrives ready to place — a permanent object made only for you.',
          },
        ].map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', alignItems: 'flex-start' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--forest)', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>
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
          <Link href="/studio" style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            ← Back to Studio
          </Link>
          <Link href="/atelier-commissions" style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            Explore Atelier Commissions →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function StudioOrderSuccess() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--ivory)' }} />}>
      <SuccessContent />
    </Suspense>
  );
}
