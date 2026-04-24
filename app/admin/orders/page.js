'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const STATUS_COLOURS = {
  paid:     { bg: '#e8f5e9', text: '#2e7d32' },
  making:   { bg: '#fff3e0', text: '#e65100' },
  shipped:  { bg: '#e3f2fd', text: '#1565c0' },
  complete: { bg: '#f3e5f5', text: '#6a1b9a' },
};

const STATUS_OPTIONS = ['paid', 'making', 'shipped', 'complete'];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setOrders(data);
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    await supabase.from('orders').update({ status }).eq('id', id);
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    setUpdatingId(null);
  };

  const formatAddress = (addr) => {
    if (!addr) return '—';
    return [addr.line1, addr.line2, addr.city, addr.postcode, addr.country]
      .filter(Boolean).join(', ');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto', fontFamily: 'var(--sans)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.8rem', color: 'var(--charcoal)', marginBottom: '0.25rem' }}>
            Orders
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            London Marathon Keepsake commissions
          </p>
        </div>
        <button
          onClick={fetchOrders}
          style={{
            padding: '0.6rem 1.2rem',
            background: 'var(--charcoal)',
            color: 'var(--ivory)',
            border: 'none',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p style={{ color: '#888', fontSize: '0.9rem' }}>Loading orders…</p>
      ) : orders.length === 0 ? (
        <div style={{
          padding: '3rem',
          textAlign: 'center',
          border: '1px dashed rgba(184,181,174,0.5)',
          color: '#888',
          fontSize: '0.9rem',
        }}>
          No orders yet.
        </div>
      ) : (
        <div>
          {/* Summary counts */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {STATUS_OPTIONS.map(s => {
              const count = orders.filter(o => o.status === s).length;
              const colours = STATUS_COLOURS[s] || { bg: '#f5f5f5', text: '#333' };
              return (
                <div key={s} style={{
                  padding: '0.6rem 1.2rem',
                  background: colours.bg,
                  color: colours.text,
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  letterSpacing: '0.05em',
                }}>
                  {s}: {count}
                </div>
              );
            })}
            <div style={{
              padding: '0.6rem 1.2rem',
              background: '#f5f5f5',
              color: '#333',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}>
              Total: {orders.length} · £{orders.length * 500}
            </div>
          </div>

          {/* Orders table */}
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(184,181,174,0.4)' }}>
                  {['Date', 'Name', 'Finish Time', 'Status', 'Email', 'Actions'].map(h => (
                    <th key={h} style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'left',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#888',
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map(order => {
                  const colours = STATUS_COLOURS[order.status] || { bg: '#f5f5f5', text: '#333' };
                  const isExpanded = expandedId === order.id;
                  return (
                    <>
                      <tr
                        key={order.id}
                        style={{
                          borderBottom: '1px solid rgba(184,181,174,0.2)',
                          background: isExpanded ? '#faf9f7' : 'white',
                          cursor: 'pointer',
                        }}
                        onClick={() => setExpandedId(isExpanded ? null : order.id)}
                      >
                        <td style={{ padding: '0.85rem 1rem', color: '#555', whiteSpace: 'nowrap' }}>
                          {new Date(order.created_at).toLocaleDateString('en-GB', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', fontWeight: 500, color: 'var(--charcoal)' }}>
                          {order.customer_name || '—'}
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: '#555', fontFamily: 'monospace' }}>
                          {order.finish_time || '—'}
                        </td>
                        <td style={{ padding: '0.85rem 1rem' }}>
                          <span style={{
                            padding: '0.25rem 0.75rem',
                            background: colours.bg,
                            color: colours.text,
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                          }}>
                            {order.status}
                          </span>
                        </td>
                        <td style={{ padding: '0.85rem 1rem', color: '#555' }}>
                          <a href={`mailto:${order.customer_email}`} style={{ color: 'var(--charcoal)' }} onClick={e => e.stopPropagation()}>
                            {order.customer_email || '—'}
                          </a>
                        </td>
                        <td style={{ padding: '0.85rem 1rem' }} onClick={e => e.stopPropagation()}>
                          <select
                            value={order.status}
                            onChange={e => updateStatus(order.id, e.target.value)}
                            disabled={updatingId === order.id}
                            style={{
                              padding: '0.4rem 0.6rem',
                              fontSize: '0.8rem',
                              border: '1px solid rgba(184,181,174,0.5)',
                              background: 'white',
                              cursor: 'pointer',
                            }}
                          >
                            {STATUS_OPTIONS.map(s => (
                              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                            ))}
                          </select>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr key={`${order.id}-detail`} style={{ background: '#faf9f7' }}>
                          <td colSpan={6} style={{ padding: '1rem 1rem 1.5rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                              <div>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '0.25rem' }}>Delivery Address</p>
                                <p style={{ fontSize: '0.875rem', color: '#444', lineHeight: 1.6 }}>{formatAddress(order.delivery_address)}</p>
                              </div>
                              <div>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '0.25rem' }}>Race Year</p>
                                <p style={{ fontSize: '0.875rem', color: '#444' }}>{order.race_year || '—'}</p>
                              </div>
                              <div>
                                <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '0.25rem' }}>Stripe Session</p>
                                <p style={{ fontSize: '0.75rem', color: '#888', wordBreak: 'break-all' }}>{order.stripe_session_id || '—'}</p>
                              </div>
                              {order.special_instructions && (
                                <div>
                                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: '0.25rem' }}>Special Instructions</p>
                                  <p style={{ fontSize: '0.875rem', color: '#444', lineHeight: 1.6 }}>{order.special_instructions}</p>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '1.5rem' }}>
        <a href="/admin" style={{ fontSize: '0.8rem', color: '#888', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          ← Admin
        </a>
      </div>
    </div>
  );
}
