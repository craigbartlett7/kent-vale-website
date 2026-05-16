'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const COLLECTIONS = ['studio', 'games-room'];

const EMPTY_FORM = {
  name: '',
  slug: '',
  collection: 'studio',
  payment_type: 'deposit',
  description: '',
  dimensions: '',
  base_price: '',
  lead_time: '8–12 weeks',
  image_url: '',
  allow_legs_addon: false,
  legs_addon_price: '20000',
  display_order: '0',
  active: true,
};

const inputStyle = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  fontFamily: 'var(--sans)',
  fontSize: '0.9rem',
  border: '1px solid rgba(184,181,174,0.5)',
  background: 'white',
  boxSizing: 'border-box',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--sans)',
  fontSize: '0.72rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '0.4rem',
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filterCollection, setFilterCollection] = useState('all');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('collection')
      .order('display_order');
    if (data) setProducts(data);
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value };
      // Auto-generate slug from name when creating new
      if (name === 'name' && !editingId) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  };

  const openCreate = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setError('');
    setSuccess('');
    setShowForm(true);
    setTimeout(() => document.getElementById('product-form-top')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const openEdit = (product) => {
    setForm({
      name: product.name || '',
      slug: product.slug || '',
      collection: product.collection || 'studio',
      payment_type: product.payment_type || 'deposit',
      description: product.description || '',
      dimensions: product.dimensions || '',
      base_price: product.base_price ? String(product.base_price) : '',
      lead_time: product.lead_time || '8–12 weeks',
      image_url: product.image_url || '',
      allow_legs_addon: product.allow_legs_addon || false,
      legs_addon_price: product.legs_addon_price ? String(product.legs_addon_price) : '20000',
      display_order: product.display_order !== undefined ? String(product.display_order) : '0',
      active: product.active !== false,
    });
    setEditingId(product.id);
    setError('');
    setSuccess('');
    setShowForm(true);
    setTimeout(() => document.getElementById('product-form-top')?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setError('');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);

    if (!form.name || !form.slug || !form.base_price) {
      setError('Name, slug and base price are required.');
      setSaving(false);
      return;
    }

    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      collection: form.collection,
      payment_type: form.payment_type,
      description: form.description.trim() || null,
      dimensions: form.dimensions.trim() || null,
      base_price: parseInt(form.base_price),
      lead_time: form.lead_time.trim() || '8–12 weeks',
      image_url: form.image_url.trim() || null,
      allow_legs_addon: form.allow_legs_addon,
      legs_addon_price: form.allow_legs_addon ? parseInt(form.legs_addon_price || 20000) : null,
      display_order: parseInt(form.display_order || 0),
      active: form.active,
    };

    let result;
    if (editingId) {
      result = await supabase.from('products').update(payload).eq('id', editingId);
    } else {
      result = await supabase.from('products').insert(payload);
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    setSuccess(editingId ? 'Product updated.' : 'Product created.');
    setSaving(false);
    setShowForm(false);
    setEditingId(null);
    fetchProducts();
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    setDeleting(id);
    await supabase.from('products').delete().eq('id', id);
    setProducts(prev => prev.filter(p => p.id !== id));
    setDeleting(null);
  };

  const handleToggleActive = async (product) => {
    const newActive = !product.active;
    await supabase.from('products').update({ active: newActive }).eq('id', product.id);
    setProducts(prev => prev.map(p => p.id === product.id ? { ...p, active: newActive } : p));
  };

  const filtered = filterCollection === 'all' ? products : products.filter(p => p.collection === filterCollection);
  const fmt = (pence) => pence ? `£${(pence / 100).toLocaleString()}` : '—';

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'var(--sans)' }}>

      {/* Page header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '0.25rem' }}>
            Products
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            Studio and The Games Room — manage the shop catalogue
          </p>
        </div>
        <button
          onClick={openCreate}
          style={{ padding: '0.7rem 1.4rem', background: 'var(--charcoal)', color: 'var(--ivory)', border: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}
        >
          + Add Product
        </button>
      </div>

      {success && (
        <div style={{ padding: '0.9rem 1.2rem', background: '#e8f5e9', border: '1px solid #a5d6a7', color: '#2e7d32', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          {success}
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div id="product-form-top" style={{ background: 'white', border: '1px solid rgba(184,181,174,0.4)', padding: '2rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--charcoal)', marginBottom: '1.75rem' }}>
            {editingId ? 'Edit Product' : 'New Product'}
          </h2>

          <form onSubmit={handleSave} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input style={inputStyle} name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label style={labelStyle}>Slug * <span style={{ fontWeight: 300, letterSpacing: 0, textTransform: 'none', fontSize: '0.7rem', color: '#aaa' }}>(URL key — auto-generated)</span></label>
                <input style={inputStyle} name="slug" value={form.slug} onChange={handleChange} required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Collection *</label>
                <select style={inputStyle} name="collection" value={form.collection} onChange={handleChange}>
                  <option value="studio">Studio</option>
                  <option value="games-room">The Games Room</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Payment Type *</label>
                <select style={inputStyle} name="payment_type" value={form.payment_type} onChange={handleChange}>
                  <option value="deposit">50% Deposit — balance prior to delivery</option>
                  <option value="full">Full Payment — pay in full at checkout</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Base Price (pence) * <span style={{ fontWeight: 300, letterSpacing: 0, textTransform: 'none', color: '#aaa' }}>e.g. 120000 = £1,200</span></label>
                <input style={inputStyle} name="base_price" type="number" value={form.base_price} onChange={handleChange} required placeholder="120000" />
              </div>
              <div>
                <label style={labelStyle}>Lead Time</label>
                <input style={inputStyle} name="lead_time" value={form.lead_time} onChange={handleChange} placeholder="8–12 weeks" />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Dimensions / Size</label>
              <input style={inputStyle} name="dimensions" value={form.dimensions} onChange={handleChange} placeholder="e.g. 60cm × 60cm" />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Description</label>
              <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} name="description" value={form.description} onChange={handleChange} />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Image URL</label>
              <input style={inputStyle} name="image_url" type="url" value={form.image_url} onChange={handleChange} placeholder="https://..." />
            </div>

            {/* Legs add-on */}
            <div style={{ marginBottom: '1.25rem', padding: '1.25rem', background: '#fafaf8', border: '1px solid rgba(184,181,174,0.3)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', marginBottom: form.allow_legs_addon ? '1rem' : 0 }}>
                <input type="checkbox" name="allow_legs_addon" checked={form.allow_legs_addon} onChange={handleChange} />
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: 'var(--charcoal)' }}>Offer legs add-on for this product</span>
              </label>
              {form.allow_legs_addon && (
                <div>
                  <label style={labelStyle}>Legs Add-on Price (pence) <span style={{ fontWeight: 300, letterSpacing: 0, textTransform: 'none', color: '#aaa' }}>e.g. 20000 = £200</span></label>
                  <input style={{ ...inputStyle, maxWidth: '200px' }} name="legs_addon_price" type="number" value={form.legs_addon_price} onChange={handleChange} />
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Display Order <span style={{ fontWeight: 300, letterSpacing: 0, textTransform: 'none', color: '#aaa' }}>(lower = first)</span></label>
                <input style={inputStyle} name="display_order" type="number" value={form.display_order} onChange={handleChange} />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '0.1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
                  <span style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', color: 'var(--charcoal)' }}>Active (visible on site)</span>
                </label>
              </div>
            </div>

            {error && (
              <div style={{ padding: '0.9rem 1.2rem', background: '#fff0f0', border: '1px solid rgba(200,80,80,0.3)', color: '#c00', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                {error}
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" disabled={saving} style={{ padding: '0.8rem 1.8rem', background: saving ? '#888' : 'var(--charcoal)', color: 'var(--ivory)', border: 'none', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: saving ? 'not-allowed' : 'pointer' }}>
                {saving ? 'Saving…' : editingId ? 'Save Changes' : 'Create Product'}
              </button>
              <button type="button" onClick={handleCancel} style={{ padding: '0.8rem 1.4rem', background: 'none', color: '#888', border: '1px solid rgba(184,181,174,0.5)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {['all', 'studio', 'games-room'].map(f => (
          <button key={f} onClick={() => setFilterCollection(f)} style={{ padding: '0.45rem 1rem', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'capitalize', border: '1px solid rgba(184,181,174,0.5)', background: filterCollection === f ? 'var(--charcoal)' : 'white', color: filterCollection === f ? 'var(--ivory)' : '#555', cursor: 'pointer' }}>
            {f === 'all' ? 'All' : f === 'studio' ? 'Studio' : 'The Games Room'}
          </button>
        ))}
      </div>

      {/* Products table */}
      {loading ? (
        <p style={{ color: '#888', fontSize: '0.9rem' }}>Loading products…</p>
      ) : filtered.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', border: '1px dashed rgba(184,181,174,0.5)', color: '#888', fontSize: '0.9rem' }}>
          No products yet. Click "+ Add Product" to create your first.
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(184,181,174,0.4)' }}>
                {['Order', 'Name', 'Collection', 'Price', 'Payment', 'Lead Time', 'Status', 'Actions'].map(h => (
                  <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(product => (
                <tr key={product.id} style={{ borderBottom: '1px solid rgba(184,181,174,0.2)' }}>
                  <td style={{ padding: '0.85rem 1rem', color: '#aaa', fontSize: '0.8rem' }}>
                    {product.display_order}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <p style={{ fontWeight: 500, color: 'var(--charcoal)', marginBottom: '0.1rem' }}>{product.name}</p>
                    <p style={{ fontSize: '0.78rem', color: '#aaa' }}>{product.slug}</p>
                    {product.dimensions && <p style={{ fontSize: '0.78rem', color: '#888' }}>{product.dimensions}</p>}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: product.collection === 'studio' ? '#1565c0' : '#2e7d32',
                      background: product.collection === 'studio' ? '#e3f2fd' : '#e8f5e9',
                      padding: '0.2rem 0.6rem',
                    }}>
                      {product.collection === 'studio' ? 'Studio' : 'Games Room'}
                    </span>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', color: 'var(--charcoal)', fontWeight: 500 }}>
                    {fmt(product.base_price)}
                    {product.allow_legs_addon && (
                      <p style={{ fontSize: '0.75rem', color: '#888', fontWeight: 400 }}>
                        +{fmt(product.legs_addon_price)} legs
                      </p>
                    )}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.6rem',
                      background: product.payment_type === 'full' ? '#e8eaf6' : '#fff8e1',
                      color: product.payment_type === 'full' ? '#283593' : '#e65100',
                    }}>
                      {product.payment_type === 'full' ? 'Full' : '50% Deposit'}
                    </span>
                  </td>
                  <td style={{ padding: '0.85rem 1rem', color: '#555', fontSize: '0.83rem' }}>
                    {product.lead_time || '—'}
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <button
                      onClick={() => handleToggleActive(product)}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        border: 'none',
                        cursor: 'pointer',
                        background: product.active ? '#e8f5e9' : '#f5f5f5',
                        color: product.active ? '#2e7d32' : '#888',
                      }}
                    >
                      {product.active ? 'Active' : 'Hidden'}
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button onClick={() => openEdit(product)} style={{ background: 'none', border: 'none', color: 'var(--charcoal)', fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '0.05em', padding: 0 }}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(product.id, product.name)} disabled={deleting === product.id} style={{ background: 'none', border: 'none', color: '#c00', fontSize: '0.8rem', cursor: 'pointer', letterSpacing: '0.05em', padding: 0, opacity: deleting === product.id ? 0.5 : 1 }}>
                        {deleting === product.id ? '…' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Price helper note */}
      <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: '#fafaf8', border: '1px solid rgba(184,181,174,0.3)', fontSize: '0.8rem', color: '#888', lineHeight: 1.6 }}>
        <strong style={{ color: '#555' }}>Prices are stored in pence.</strong> £1,200 = 120000 · £1,400 = 140000 · £1,700 = 170000 · £2,600 = 260000 · £200 legs = 20000
      </div>

      <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '1.5rem' }}>
        <a href="/admin/dashboard" style={{ fontSize: '0.8rem', color: '#888', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← Admin
        </a>
      </div>
    </div>
  );
}
