'use client';

import React, { useState } from 'react';
import { submitEnquiry } from '@/lib/supabase';
import styles from './enquiry.module.css';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'not-sure',
    description: '',
    budget_range: '',
    timeline: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Submit to Supabase
      const enquiryData = {
        name: formData.name,
        email: formData.email,
        interest: formData.interest,
        description: formData.description,
        budget_range: formData.budget_range || null,
        timeline: formData.timeline || null,
        status: 'new',
      };

      const { success, error: submitError } = await submitEnquiry(enquiryData);

      if (!success) {
        setError('Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      // Send email notification to you
      try {
        await fetch('/api/send-enquiry-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            interest: formData.interest,
            description: formData.description,
            budget: formData.budget_range,
            timeline: formData.timeline,
          }),
        });
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Don't block the success message if email fails
      }

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error('Enquiry submission error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '1rem' }}>Thank You</h1>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
            We've received your enquiry and will be in touch within 24 hours.
            <br />
            <br />
            We're looking forward to chatting about what you imagine.
          </p>
          <a href="/" className="button primary">
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Start a Commission</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
          Every piece begins with a conversation. No obligations. Just a chat about what you imagine.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.error}>{error}</div>}

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

          <div className={styles.formGroup}>
            <label htmlFor="interest">What's your interest? *</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
            >
              <option value="not-sure">Not sure yet</option>
              <option value="forever-form">Forever Form (Heirloom Commissions)</option>
              <option value="games-room">The Games Room (Game Boards)</option>
              <option value="other">Other / Undecided</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Tell us what you're imagining *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="A wedding bouquet? A chess set? A family memorial? What should this piece hold?"
              required
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget_range">Budget range (optional)</label>
            <select
              id="budget_range"
              name="budget_range"
              value={formData.budget_range}
              onChange={handleChange}
            >
              <option value="">Not sure</option>
              <option value="1000-5000">£1,000–£5,000</option>
              <option value="5000-15000">£5,000–£15,000</option>
              <option value="15000+">£15,000+</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="timeline">Timeline (optional)</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">No preference</option>
              <option value="flexible">Flexible</option>
              <option value="3-months">Within 3 months</option>
              <option value="3-6-months">3–6 months</option>
              <option value="6-plus">6+ months</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>

          <p className={styles.note}>
            We typically respond within 24 hours. We look forward to discussing your commission.
          </p>
        </form>
      </div>
    </section>
  );
}
