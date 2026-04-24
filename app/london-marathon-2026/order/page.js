'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  fontFamily: 'var(--sans)',
  fontSize: '0.95rem',
  color: 'var(--charcoal)',
  background: 'white',
  border: '1px solid rgba(184,181,174,0.5)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--sans)',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--charcoal)',
  marginBottom: '0.4rem',
};

const fieldStyle = {
  marginBottom: '1.5rem',
};

function OrderForm() {
  const searchParams = useSearchParams();
  const cancelled = searchParams.get('cancelled');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    finishTime: '',
    raceYear: '2026',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    specialInstructions: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.finishTime || !form.addressLine1 || !form.city || !form.postcode) {
      setError('Please fill in all required fields.');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/checkout/marathon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{
        paddingTop: '120px',
        paddingBottom: '3rem',
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
          London Marathon 2026
        </p>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 400,
          color: 'var(--ivory)',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Order Your Marathon Keepsake
        </h1>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.95rem',
          color: 'var(--stone)',
          lineHeight: 1.7,
        }}>
          Medal &amp; Certificate Block — <strong style={{ color: 'var(--brass)' }}>£500</strong>
        </p>
      </div>

      {/* Form */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 2rem' }}>

        {cancelled && (
          <div style={{
            padding: '1rem 1.5rem',
            background: '#fff8f0',
            border: '1px solid rgba(184,181,174,0.4)',
            fontFamily: 'var(--sans)',
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '2rem',
          }}>
            Your order was not completed — no payment was taken. Please try again when you're ready.
          </div>
        )}

        {/* What's included reminder */}
        <div style={{
          padding: '1.5rem',
          background: 'white',
          border: '1px solid rgba(184,181,174,0.35)',
          marginBottom: '3rem',
        }}>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            color: 'var(--charcoal)',
            marginBottom: '0.75rem',
          }}>
            What's included
          </p>
          {[
            'Hand-poured optical resin block',
            'Your finisher\'s medal & completion certificate',
            'English walnut wooden base',
            'Personalised engraved brass nameplate',
            'Presented in a Kent & Vale gift box',
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '0.75rem',
              fontFamily: 'var(--sans)',
              fontSize: '0.875rem',
              color: '#555',
              lineHeight: 1.5,
              marginBottom: '0.35rem',
            }}>
              <span style={{ color: 'var(--brass)', flexShrink: 0 }}>—</span>
              <span>{item}</span>
            </div>
          ))}
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            color: 'var(--stone)',
            marginTop: '1rem',
            lineHeight: 1.6,
          }}>
            After ordering, we'll email you with instructions for posting your medal and certificate to our studio in Kent. We'll keep you updated throughout the making process.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* Personal details */}
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
          }}>
            Your Details
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={labelStyle} htmlFor="firstName">First name *</label>
              <input style={inputStyle} type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div>
              <label style={labelStyle} htmlFor="lastName">Last name *</label>
              <input style={inputStyle} type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle} htmlFor="email">Email address *</label>
            <input style={inputStyle} type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          {/* Race details */}
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
            marginTop: '2.5rem',
          }}>
            Race Details
          </p>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.85rem',
            color: '#666',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            marginTop: '-0.75rem',
          }}>
            This is what will be engraved on your brass nameplate.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={labelStyle} htmlFor="finishTime">Official finish time * <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(e.g. 3:34:27)</span></label>
              <input style={inputStyle} type="text" id="finishTime" name="finishTime" placeholder="3:34:27" value={form.finishTime} onChange={handleChange} required />
            </div>
            <div>
              <label style={labelStyle} htmlFor="raceYear">Race year *</label>
              <input style={inputStyle} type="text" id="raceYear" name="raceYear" value={form.raceYear} onChange={handleChange} required />
            </div>
          </div>

          {/* Delivery address */}
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--brass)',
            marginBottom: '1.5rem',
            marginTop: '2.5rem',
          }}>
            Delivery Address
          </p>

          <div style={fieldStyle}>
            <label style={labelStyle} htmlFor="addressLine1">Address line 1 *</label>
            <input style={inputStyle} type="text" id="addressLine1" name="addressLine1" value={form.addressLine1} onChange={handleChange} required />
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle} htmlFor="addressLine2">Address line 2 <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
            <input style={inputStyle} type="text" id="addressLine2" name="addressLine2" value={form.addressLine2} onChange={handleChange} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={labelStyle} htmlFor="city">Town / City *</label>
              <input style={inputStyle} type="text" id="city" name="city" value={form.city} onChange={handleChange} required />
            </div>
            <div>
              <label style={labelStyle} htmlFor="postcode">Postcode *</label>
              <input style={inputStyle} type="text" id="postcode" name="postcode" value={form.postcode} onChange={handleChange} required />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle} htmlFor="country">Country *</label>
            <input style={inputStyle} type="text" id="country" name="country" value={form.country} onChange={handleChange} required />
          </div>

          {/* Special instructions */}
          <div style={{ ...fieldStyle, marginTop: '2.5rem' }}>
            <label style={labelStyle} htmlFor="specialInstructions">
              Anything else? <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
            </label>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#666', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              A personal message, a preference for the piece, or anything you'd like us to know.
            </p>
            <textarea
              style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
              id="specialInstructions"
              name="specialInstructions"
              value={form.specialInstructions}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div style={{
              padding: '1rem 1.5rem',
              background: '#fff0f0',
              border: '1px solid rgba(200,80,80,0.3)',
              fontFamily: 'var(--sans)',
              fontSize: '0.9rem',
              color: '#c00',
              marginBottom: '1.5rem',
            }}>
              {error}
            </div>
          )}

          {/* Legal note */}
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            color: 'var(--stone)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}>
            By placing an order you agree to our <Link href="/terms" style={{ color: 'var(--charcoal)', textDecoration: 'underline' }}>Terms of Service</Link>. As this is a personalised, bespoke item made to order, it is not eligible for return or refund once we have received your medal and work has begun.
          </p>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%',
              padding: '1.1rem 2rem',
              background: submitting ? '#888' : 'var(--charcoal)',
              color: 'var(--ivory)',
              fontFamily: 'var(--sans)',
              fontSize: '0.875rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: submitting ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s ease',
            }}
          >
            {submitting ? 'Redirecting to payment…' : 'Proceed to Payment — £500'}
          </button>
        </form>

        {/* Bespoke note */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'white',
          border: '1px solid rgba(184,181,174,0.35)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--charcoal)',
            marginBottom: '0.5rem',
          }}>
            Want something more personal?
          </p>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.875rem',
            color: '#555',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}>
            GPS route, race photographs, a personal message — we can build a fully bespoke piece around your day.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--charcoal)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--brass)',
              paddingBottom: '2px',
            }}
          >
            Discuss a bespoke commission →
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/london-marathon-2026" style={{
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--stone)',
            textDecoration: 'none',
          }}>
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--ivory)' }} />}>
      <OrderForm />
    </Suspense>
  );
}
