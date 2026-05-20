'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const WOODS = [
  {
    id: 'English Oak',
    name: 'English Oak',
    desc: 'Warm golden-brown with a pronounced, open grain and natural figuring. Hard-wearing and characterful, it deepens and enriches with age. The most traditional and enduring of English timbers.',
  },
  {
    id: 'English Elm',
    name: 'English Elm',
    desc: 'Distinctive interlocking grain with a rich reddish-brown warmth. Rarer than oak — English Elm has become scarce since Dutch Elm Disease, which makes each slab genuinely singular. Beautiful natural variation in every piece.',
  },
  {
    id: 'Olive Wood',
    name: 'Olive Wood',
    desc: 'Pale cream shot through with dramatic dark brown and grey streaks. Exceptionally dense and smooth to the touch. The most visually striking grain pattern of the three — no two slabs share the same markings.',
  },
];

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
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--sans)',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'var(--charcoal)',
  marginBottom: '0.5rem',
};

function ConfiguratorInner({ product }) {
  const searchParams = useSearchParams();
  const cancelled = searchParams.get('cancelled');

  const depositAmount = product.allow_legs_addon ? null : Math.round(product.base_price / 2);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    woodChoice: '',
    favouriteColours: '',
    craftNote: '',
    legsAddon: false,
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
  });

  const [woodInfoOpen, setWoodInfoOpen] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isFullPayment = product.payment_type === 'full';
  const legsPrice = product.allow_legs_addon ? (product.legs_addon_price || 20000) : 0;
  const totalPence = product.base_price + (form.legsAddon ? legsPrice : 0);
  const depositPence = Math.round(totalPence / 2);
  const chargePence = isFullPayment ? totalPence : depositPence;

  const fmt = (pence) => `£${(pence / 100).toLocaleString()}`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    if (!form.firstName || !form.lastName || !form.email || !form.woodChoice || !form.addressLine1 || !form.city || !form.postcode) {
      setError('Please fill in all required fields.');
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/checkout/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, productSlug: product.slug }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Something went wrong. Please try again.');
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--ivory)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'var(--charcoal)', paddingTop: '100px', paddingBottom: '3.5rem', padding: '100px 2rem 3.5rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <Link href={`/${product.collection === 'studio' ? 'studio' : 'the-games-room'}`} style={{ display: 'inline-block', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
            ← {product.collection === 'studio' ? 'Studio' : 'The Games Room'}
          </Link>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--ivory)', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            {product.name}
          </h1>
          {product.dimensions && (
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', color: 'var(--stone)', marginBottom: '0.5rem' }}>{product.dimensions}</p>
          )}
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--brass)', letterSpacing: '0.1em' }}>
            {fmt(product.base_price)}{product.allow_legs_addon && legsPrice > 0 ? ` — optional legs add-on +${fmt(legsPrice)}` : ''}
            {isFullPayment ? ' · Full payment at checkout' : ' · 50% deposit to order · Balance due prior to delivery'}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && product.image_url && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(26,26,24,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.5rem',
              background: 'none', border: 'none', color: 'rgba(244,241,234,0.7)',
              fontSize: '1.75rem', lineHeight: 1, cursor: 'pointer', padding: '0.25rem 0.5rem',
            }}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={product.image_url}
            alt={product.name}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '100%', maxHeight: '90vh',
              objectFit: 'contain',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
              cursor: 'default',
            }}
          />
        </div>
      )}

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2rem' }}>
        {/* Product image and description */}
        {(product.image_url || product.description) && (
          <div style={{ display: 'grid', gridTemplateColumns: product.image_url ? '1fr 1fr' : '1fr', gap: '2rem', marginBottom: '3.5rem', alignItems: 'start' }}>
            {product.image_url && (
              <div
                onClick={() => setLightboxOpen(true)}
                style={{ position: 'relative', cursor: 'zoom-in' }}
                title="Click to enlarge"
              >
                <img src={product.image_url} alt={product.name} style={{ width: '100%', display: 'block', boxShadow: '0 4px 20px rgba(26,26,26,0.1)' }} />
                <div style={{
                  position: 'absolute', bottom: '0.6rem', right: '0.6rem',
                  background: 'rgba(26,26,24,0.55)', color: 'rgba(244,241,234,0.9)',
                  fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  padding: '0.3rem 0.6rem', fontFamily: 'var(--sans)',
                  pointerEvents: 'none',
                }}>
                  ⊕ Enlarge
                </div>
              </div>
            )}
            {product.description && (
              <div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.95rem', lineHeight: 1.9, color: '#444' }}>{product.description}</p>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#888', marginTop: '1rem', lineHeight: 1.6 }}>
                  Lead time: {product.lead_time || '8–12 weeks'} from receipt of deposit.
                </p>
              </div>
            )}
          </div>
        )}

        {cancelled && (
          <div style={{ padding: '1rem 1.5rem', background: '#fff8f0', border: '1px solid rgba(184,181,174,0.4)', fontFamily: 'var(--sans)', fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>
            Your order was not completed — no payment was taken. Please try again when you're ready.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Wood selection */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <label style={labelStyle}>Choose your timber *</label>
              <button type="button" onClick={() => setWoodInfoOpen(!woodInfoOpen)} style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#aaa', cursor: 'pointer', flexShrink: 0 }}>
                {woodInfoOpen ? 'Hide' : 'About our timbers'}
              </button>
            </div>

            {/* Wood info panel */}
            {woodInfoOpen && (
              <div style={{ background: 'white', border: '1px solid rgba(184,181,174,0.35)', padding: '1.5rem', marginBottom: '1.25rem' }}>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: '1rem' }}>About our timbers</p>
                {WOODS.map(w => (
                  <div key={w.id} style={{ marginBottom: '1rem' }}>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.2rem' }}>{w.name}</p>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.83rem', color: '#555', lineHeight: 1.6 }}>{w.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {WOODS.map(w => (
                <label key={w.id} style={{ cursor: 'pointer' }}>
                  <input type="radio" name="woodChoice" value={w.id} checked={form.woodChoice === w.id} onChange={handleChange} style={{ display: 'none' }} />
                  <div style={{ padding: '0.85rem 1rem', border: `1px solid ${form.woodChoice === w.id ? 'var(--charcoal)' : 'rgba(184,181,174,0.5)'}`, background: form.woodChoice === w.id ? 'var(--charcoal)' : 'white', textAlign: 'center', transition: 'all 0.15s ease' }}>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: form.woodChoice === w.id ? 'var(--ivory)' : 'var(--charcoal)', fontWeight: form.woodChoice === w.id ? 500 : 400 }}>{w.name}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Legs add-on */}
          {product.allow_legs_addon && legsPrice > 0 && (
            <div style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'white', border: '1px solid rgba(184,181,174,0.3)' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer' }}>
                <input type="checkbox" name="legsAddon" checked={form.legsAddon} onChange={handleChange} style={{ marginTop: '3px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.2rem' }}>
                    Add matching legs — +{fmt(legsPrice)}
                  </p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.83rem', color: '#666', lineHeight: 1.6 }}>
                    Converts your board into a freestanding side table at the same height. Legs are made in the same timber as your board.
                  </p>
                </div>
              </label>
            </div>
          )}

          {/* Colours */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={labelStyle} htmlFor="favouriteColours">Your favourite colours *</label>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.83rem', color: '#666', lineHeight: 1.6, marginBottom: '0.6rem' }}>
              We use this to guide the resin palette — tones, shades, combinations you're drawn to.
            </p>
            <input style={inputStyle} type="text" id="favouriteColours" name="favouriteColours" placeholder="e.g. Deep blues, slate grey, warm amber tones" value={form.favouriteColours} onChange={handleChange} required />
          </div>

          {/* Notes */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={labelStyle} htmlFor="craftNote">Notes for our craftsmen <span style={{ fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
            <p style={{ fontFamily: 'var(--sans)', fontSize: '0.83rem', color: '#666', lineHeight: 1.6, marginBottom: '0.6rem' }}>
              Any specific directions, preferences, or details you'd like us to bear in mind during the making.
            </p>
            <textarea style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }} id="craftNote" name="craftNote" value={form.craftNote} onChange={handleChange} />
          </div>

          {/* Personal details */}
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem', marginTop: '2.5rem' }}>Your Details</p>

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

          <div style={{ marginBottom: '1.75rem' }}>
            <label style={labelStyle} htmlFor="email">Email address *</label>
            <input style={inputStyle} type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          {/* Delivery address */}
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '1.5rem', marginTop: '2.5rem' }}>Delivery Address</p>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle} htmlFor="addressLine1">Address line 1 *</label>
            <input style={inputStyle} type="text" id="addressLine1" name="addressLine1" value={form.addressLine1} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
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
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={labelStyle} htmlFor="country">Country *</label>
            <input style={inputStyle} type="text" id="country" name="country" value={form.country} onChange={handleChange} required />
          </div>

          {/* Price summary */}
          <div style={{ background: 'white', border: '1px solid rgba(184,181,174,0.35)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
              <span>{product.name}</span><span>{fmt(product.base_price)}</span>
            </div>
            {form.legsAddon && legsPrice > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                <span>Legs add-on</span><span>+{fmt(legsPrice)}</span>
              </div>
            )}
            <div style={{ borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '0.75rem', marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)' }}>
              <span>Total</span><span>{fmt(totalPence)}</span>
            </div>
            {isFullPayment ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--brass)', marginTop: '0.4rem' }}>
                <span>Due today (full payment)</span><span>{fmt(totalPence)}</span>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--brass)', marginTop: '0.4rem' }}>
                  <span>Deposit due today (50%)</span><span>{fmt(depositPence)}</span>
                </div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.78rem', color: '#999', marginTop: '0.75rem', lineHeight: 1.5 }}>
                  The remaining balance of {fmt(depositPence)} is due by bank transfer prior to delivery. We will contact you with payment details when your piece is ready to ship.
                </p>
              </>
            )}
          </div>

          {/* Legal */}
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.6, marginBottom: '2rem' }}>
            By placing an order you agree to our <Link href="/terms" style={{ color: 'var(--charcoal)' }}>Terms of Service</Link>. As every piece is made to order, it is not eligible for return or refund once work has begun.
          </p>

          {error && (
            <div style={{ padding: '1rem 1.5rem', background: '#fff0f0', border: '1px solid rgba(200,80,80,0.3)', fontFamily: 'var(--sans)', fontSize: '0.9rem', color: '#c00', marginBottom: '1.5rem' }}>
              {error}
            </div>
          )}

          <button type="submit" disabled={submitting} style={{ width: '100%', padding: '1.1rem', background: submitting ? '#888' : 'var(--charcoal)', color: 'var(--ivory)', fontFamily: 'var(--sans)', fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer' }}>
            {submitting ? 'Redirecting to payment…' : isFullPayment ? `Pay in Full — ${fmt(totalPence)}` : `Pay Deposit — ${fmt(depositPence)}`}
          </button>
        </form>

        {/* Atelier upsell */}
        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'white', border: '1px solid rgba(184,181,174,0.3)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
            Want to add something personal to this piece?
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Any Studio piece can become an Atelier commission — incorporating flowers, family artefacts, meaningful objects or a personal inscription.
          </p>
          <Link href="/atelier-commissions" style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--charcoal)', textDecoration: 'none', borderBottom: '1px solid var(--brass)', paddingBottom: '2px' }}>
            Learn about Atelier Commissions →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductConfigurator({ product, backHref, backLabel }) {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--ivory)' }} />}>
      <ConfiguratorInner product={product} backHref={backHref} backLabel={backLabel} />
    </Suspense>
  );
}
