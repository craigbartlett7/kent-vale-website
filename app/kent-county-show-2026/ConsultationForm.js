'use client';

import React, { useState } from 'react';
import { submitEnquiry } from '@/lib/supabase';
import styles from './kent-county-show.module.css';

const DAY_LABELS = {
  'friday-3rd': 'Friday 3rd July',
  'saturday-4th': 'Saturday 4th July',
  'sunday-5th': 'Sunday 5th July',
  'no-preference': 'No preference',
};

const TIME_LABELS = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  'no-preference': 'No preference',
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    day: 'no-preference',
    time: 'no-preference',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError('Please fill in your name and email.');
      return;
    }

    setLoading(true);
    setError('');

    const description = [
      'Kent County Show 2026 — consultation pre-registration.',
      `Preferred day: ${DAY_LABELS[formData.day] || formData.day}.`,
      `Preferred time: ${TIME_LABELS[formData.time] || formData.time}.`,
      formData.phone ? `Phone: ${formData.phone}.` : null,
      formData.message ? `Notes: ${formData.message}` : null,
    ].filter(Boolean).join(' ');

    try {
      const enquiryData = {
        name: formData.name,
        email: formData.email,
        interest: 'other',
        description,
        status: 'new',
      };

      const { success } = await submitEnquiry(enquiryData);

      if (!success) {
        setError('Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      try {
        await fetch('/api/send-enquiry-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            interest: 'Kent County Show — Consultation Booking',
            description,
          }),
        });
      } catch (emailError) {
        console.error('Email notification error:', emailError);
      }

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error('Consultation pre-registration error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.3rem',
          color: 'var(--charcoal)',
          marginBottom: '1rem',
        }}>
          You're on the list.
        </p>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: '0.95rem',
          color: '#555',
          lineHeight: 1.8,
        }}>
          We've noted your preferred time and will do our best to have you seen promptly when you arrive at the stand. Walk-ups are also very welcome across all three days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="day">Preferred day</label>
          <select id="day" name="day" value={formData.day} onChange={handleChange}>
            <option value="friday-3rd">Friday 3rd July</option>
            <option value="saturday-4th">Saturday 4th July</option>
            <option value="sunday-5th">Sunday 5th July</option>
            <option value="no-preference">No preference</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="time">Preferred time</label>
        <select id="time" name="time" value={formData.time} onChange={handleChange}>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="no-preference">No preference</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">What would you like to discuss? (optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="A commission idea, a piece you'd like to see in person, a question about timelines..."
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? 'Sending...' : 'Reserve My Slot'}
      </button>

      <p className={styles.note}>
        This reserves your name on our list for the day — we'll do our best to honour your preferred time. Prefer to just turn up? Walk-ups are welcome too.
      </p>
    </form>
  );
}
