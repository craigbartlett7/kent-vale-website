// app/admin/settings/page.js
// Site settings management

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './admin-settings.module.css';

export default function AdminSettings() {
  const router = useRouter();
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');

      if (error) throw error;

      const settingsObj = {};
      data?.forEach(item => {
        settingsObj[item.setting_key] = item.setting_value;
      });
      setSettings(settingsObj);
      setLoading(false);
    } catch (error) {
      console.error('Error loading settings:', error);
      setLoading(false);
    }
  };

  const handleChange = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Update each setting
      const updates = Object.entries(settings).map(([key, value]) => 
        supabase
          .from('site_settings')
          .update({ setting_value: value, updated_at: new Date().toISOString() })
          .eq('setting_key', key)
      );

      const results = await Promise.all(updates);
      const hasErrors = results.some(result => result.error);

      if (hasErrors) throw new Error('Error updating settings');

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Error saving settings');
    }
    setSaving(false);
  };

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Settings</h1>
          <p>Manage site configuration</p>
        </div>
        <Link href="/admin/dashboard" className={styles.backBtn}>
          ← Dashboard
        </Link>
      </div>

      <div className={styles.form}>
        <div className={styles.section}>
          <h3>Contact Information</h3>
          
          <div className={styles.formGroup}>
            <label htmlFor="contact_email">Contact Email</label>
            <input
              type="email"
              id="contact_email"
              value={settings.contact_email || ''}
              onChange={(e) => handleChange('contact_email', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={settings.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={settings.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3>Social Media</h3>

          <div className={styles.formGroup}>
            <label htmlFor="instagram_url">Instagram URL</label>
            <input
              type="url"
              id="instagram_url"
              value={settings.instagram_url || ''}
              onChange={(e) => handleChange('instagram_url', e.target.value)}
              placeholder="https://instagram.com/..."
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="pinterest_url">Pinterest URL</label>
            <input
              type="url"
              id="pinterest_url"
              value={settings.pinterest_url || ''}
              onChange={(e) => handleChange('pinterest_url', e.target.value)}
              placeholder="https://pinterest.com/..."
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3>Site Information</h3>

          <div className={styles.formGroup}>
            <label htmlFor="site_title">Site Title</label>
            <input
              type="text"
              id="site_title"
              value={settings.site_title || ''}
              onChange={(e) => handleChange('site_title', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="site_description">Site Description</label>
            <textarea
              id="site_description"
              value={settings.site_description || ''}
              onChange={(e) => handleChange('site_description', e.target.value)}
              rows="3"
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
          {saved && <p className={styles.success}>✓ Settings saved</p>}
        </div>
      </div>
    </div>
  );
}
