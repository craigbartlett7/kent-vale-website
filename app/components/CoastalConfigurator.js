'use client';

import { useState } from 'react';
import Link from 'next/link';

const label = {
  fontFamily: 'var(--sans)',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--charcoal)',
  display: 'block',
  marginBottom: '0.5rem',
};

const input = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid rgba(26,26,24,0.2)',
  background: 'white',
  fontFamily: 'var(--sans)',
  fontSize: '0.9rem',
  color: 'var(--charcoal)',
  outline: 'none',
  boxSizing: 'border-box',
};

const fieldWrap = { marginBottom: '1.5rem' };

export default function CoastalConfigurator({ product }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    shippingZone: 'uk',
    colourChoice: product.colourOptions?.[0] || '',
    personalisation: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    country: 'GB',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const shippingCost = product.shipping[form.shippingZone];
  const totalPence = product.price + shippingCost;
  const totalDisplay = `£${(totalPence / 100).toFixed(2).replace('.00', '')}`;
  const shippingDisplay = shippingCost === 0
    ? 'Free'
    : `£${(shippingCost / 100).toFixed(2).replace('.00', '')}`;

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.firstName || !form.lastName || !form.email) {
      setError('Please complete your name and email address.');
      return;
    }
    if (product.hasPersonalisation && !form.personalisation.trim()) {
      setError('Please enter your personalisation text.');
      return;
    }
    if (product.hasColourChoice && !form.colourChoice) {
      setError('Please choose a colour.');
      return;
    }
    if (!form.addressLine1 || !form.city || !form.postcode) {
      setError('Please enter your delivery address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/checkout/coastal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productSlug: product.slug,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: '50vh', minHeight: '360px', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.imageAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(13,31,45,0.85) 30%, rgba(13,31,45,0.2) 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'clamp(2rem, 5vw, 4rem)',
        }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.75rem' }}>
            The Coastal Collection
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
            {product.name}
          </h1>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'rgba(240,236,228,0.8)', lineHeight: 1.6, maxWidth: '480px' }}>
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

        {/* Left: product info */}
        <div>
          <Link href="/coastal-edit" style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
            ← The Coastal Collection
          </Link>

          <p style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
            {product.priceDisplay}
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--stone)', marginBottom: '2rem' }}>
            {product.shippingDisplay.uk} · {product.shippingDisplay.international}
          </p>

          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: '#444', lineHeight: 1.8, marginBottom: '1rem' }}>
            {product.description}
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', lineHeight: 1.65, color: '#888', fontStyle: 'italic', marginBottom: '2rem' }}>
            Images are for illustration. Every piece is hand-poured individually and made to order — each one will have its own unique pattern, movement and signature.
          </p>

          <div style={{ borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.75rem' }}>
              Details
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
              {product.dimensions}
            </p>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
              {product.leadTime}
            </p>
            {product.colourOptions && (
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', lineHeight: 1.7 }}>
                Frame colours: {product.colourOptions.join(', ')}
              </p>
            )}
          </div>

          {(product.colourNote || product.bundleNote) && (
            <div style={{ borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
              {product.bundleNote && (
                <div style={{ background: 'rgba(184,160,110,0.08)', border: '1px solid rgba(184,160,110,0.3)', padding: '1rem 1.2rem', marginBottom: '1rem' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.4rem' }}>
                    Set Offer
                  </p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#444', lineHeight: 1.7, margin: 0 }}>
                    {product.bundleNote}
                  </p>
                </div>
              )}
              {product.colourNote && (
                <div style={{ background: '#f8f7f5', padding: '1rem 1.2rem' }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.4rem' }}>
                    Any Colour
                  </p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#444', lineHeight: 1.7, margin: 0 }}>
                    {product.colourNote}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: order form */}
        <div style={{ background: 'white', padding: '2.5rem', border: '1px solid rgba(184,181,174,0.25)' }}>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '2rem' }}>
            Order Now
          </p>

          <form onSubmit={handleSubmit}>

            {/* Colour choice */}
            {product.hasColourChoice && product.colourOptions && (
              <div style={fieldWrap}>
                <span style={label}>Frame Colour</span>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {product.colourOptions.map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => set('colourChoice', c)}
                      style={{
                        padding: '0.6rem 1.2rem',
                        border: form.colourChoice === c ? '2px solid var(--charcoal)' : '1px solid rgba(26,26,24,0.2)',
                        background: 'transparent',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.85rem',
                        color: 'var(--charcoal)',
                        cursor: 'pointer',
                        fontWeight: form.colourChoice === c ? 500 : 400,
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Personalisation */}
            {product.hasPersonalisation && (
              <div style={fieldWrap}>
                <label style={label}>Personalisation</label>
                <textarea
                  value={form.personalisation}
                  onChange={e => set('personalisation', e.target.value)}
                  maxLength={product.personalisationMaxLength || 80}
                  placeholder={product.personalisationPlaceholder || 'Enter your personalisation text'}
                  rows={3}
                  style={{ ...input, resize: 'vertical' }}
                />
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: '#999', marginTop: '0.4rem' }}>
                  {form.personalisation.length}/{product.personalisationMaxLength || 80} characters
                </p>
              </div>
            )}

            {/* Shipping zone */}
            <div style={fieldWrap}>
              <span style={label}>Delivery Region</span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { value: 'uk', label: `UK — ${product.shippingDisplay.uk}` },
                  { value: 'international', label: `International — ${product.shippingDisplay.international}` },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => set('shippingZone', opt.value)}
                    style={{
                      padding: '0.6rem 1rem',
                      border: form.shippingZone === opt.value ? '2px solid var(--charcoal)' : '1px solid rgba(26,26,24,0.2)',
                      background: 'transparent',
                      fontFamily: 'var(--sans)',
                      fontSize: '0.8rem',
                      color: 'var(--charcoal)',
                      cursor: 'pointer',
                      fontWeight: form.shippingZone === opt.value ? 500 : 400,
                      flex: 1,
                      textAlign: 'left',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={label}>First Name</label>
                <input style={input} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="Emma" required />
              </div>
              <div>
                <label style={label}>Last Name</label>
                <input style={input} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="Wilson" required />
              </div>
            </div>

            <div style={fieldWrap}>
              <label style={label}>Email Address</label>
              <input style={input} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="emma@example.com" required />
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: '#999', marginTop: '0.4rem' }}>
                Your order confirmation will be sent here.
              </p>
            </div>

            {/* Delivery address */}
            <div style={{ borderTop: '1px solid rgba(184,181,174,0.25)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
              <p style={{ ...label, marginBottom: '1rem' }}>Delivery Address</p>

              <div style={fieldWrap}>
                <label style={label}>Address Line 1</label>
                <input style={input} value={form.addressLine1} onChange={e => set('addressLine1', e.target.value)} placeholder="12 Harbour Road" required />
              </div>

              <div style={fieldWrap}>
                <label style={label}>Address Line 2 (optional)</label>
                <input style={input} value={form.addressLine2} onChange={e => set('addressLine2', e.target.value)} placeholder="Apartment, flat, etc." />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={label}>Town / City</label>
                  <input style={input} value={form.city} onChange={e => set('city', e.target.value)} placeholder="Canterbury" required />
                </div>
                <div>
                  <label style={label}>Postcode / ZIP</label>
                  <input style={input} value={form.postcode} onChange={e => set('postcode', e.target.value)} placeholder="CT1 1AA" required />
                </div>
              </div>

              {form.shippingZone === 'international' && (
                <div style={{ marginTop: '1rem' }}>
                  <label style={label}>Country</label>
                  <input style={input} value={form.country} onChange={e => set('country', e.target.value)} placeholder="Country" />
                </div>
              )}
            </div>

            {/* Error */}
            {error && (
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#c0392b', marginBottom: '1rem', lineHeight: 1.5 }}>
                {error}
              </p>
            )}

            {/* Order summary */}
            <div style={{ background: '#f9f7f4', padding: '1.25rem', marginBottom: '1.5rem', borderTop: '1px solid rgba(184,181,174,0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                <span>{product.name}</span>
                <span>{product.priceDisplay}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', marginBottom: '0.75rem' }}>
                <span>Shipping ({form.shippingZone === 'uk' ? 'UK' : 'International'})</span>
                <span>{shippingDisplay}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 500, color: 'var(--charcoal)', borderTop: '1px solid rgba(184,181,174,0.25)', paddingTop: '0.75rem' }}>
                <span>Total</span>
                <span>{totalDisplay}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '1rem',
                background: loading ? '#ccc' : 'var(--charcoal)',
                color: 'var(--ivory)',
                fontFamily: 'var(--sans)',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Redirecting to payment…' : `Pay ${totalDisplay} securely →`}
            </button>

            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
              Secure payment by Stripe. We never see your card details.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
