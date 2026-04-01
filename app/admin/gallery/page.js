// app/admin/gallery/page.js
// Complete gallery management interface

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './admin-gallery.module.css';

export default function AdminGallery() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    collection: 'forever-form',
    image_url: '',
    image_alt_text: '',
    display_order: 0,
    featured: false,
  });
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setItems(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading gallery:', error);
      setLoading(false);
    }
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    if (!formData.title || !formData.image_url) {
      alert('Title and image URL are required');
      return;
    }

    setUpdating(true);
    try {
      if (selectedItem) {
        // Update
        const { error } = await supabase
          .from('gallery_items')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', selectedItem.id);

        if (error) throw error;
        setItems(items.map(i => i.id === selectedItem.id ? { ...selectedItem, ...formData } : i));
      } else {
        // Create
        const { data, error } = await supabase
          .from('gallery_items')
          .insert([{ ...formData, created_at: new Date().toISOString() }])
          .select();

        if (error) throw error;
        setItems([...items, data[0]]);
      }

      setSelectedItem(null);
      setIsAdding(false);
      resetForm();
    } catch (error) {
      console.error('Error saving item:', error);
      alert('Error saving item');
    }
    setUpdating(false);
  };

  const handleDelete = async () => {
    if (!confirm('Delete this gallery item?')) return;

    try {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', selectedItem.id);

      if (error) throw error;
      setItems(items.filter(i => i.id !== selectedItem.id));
      setSelectedItem(null);
      resetForm();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Error deleting item');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      collection: 'forever-form',
      image_url: '',
      image_alt_text: '',
      display_order: 0,
      featured: false,
    });
  };

  const editItem = (item) => {
    setFormData(item);
    setSelectedItem(item);
    setIsAdding(false);
  };

  const newItem = () => {
    resetForm();
    setSelectedItem(null);
    setIsAdding(true);
  };

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Gallery</h1>
          <p>Manage portfolio pieces and images</p>
        </div>
        <div className={styles.headerActions}>
          {(selectedItem || isAdding) && (
            <button className={styles.cancelBtn} onClick={() => { setSelectedItem(null); setIsAdding(false); resetForm(); }}>
              Cancel
            </button>
          )}
          {!selectedItem && !isAdding && (
            <button className={styles.newBtn} onClick={newItem}>
              + Add Image
            </button>
          )}
          <Link href="/admin/dashboard" className={styles.backBtn}>
            ← Dashboard
          </Link>
        </div>
      </div>

      <div className={styles.layout}>
        {/* Gallery Grid */}
        {!selectedItem && !isAdding && (
          <div className={styles.galleryGrid}>
            {items.length === 0 ? (
              <p className={styles.empty}>No gallery items yet.</p>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className={styles.galleryItem}
                  onClick={() => editItem(item)}
                >
                  <div className={styles.imagePlaceholder}>
                    <img src={item.image_url} alt={item.image_alt_text} onError={(e) => e.target.style.display = 'none'} />
                    {item.featured && <span className={styles.featuredBadge}>Featured</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p className={styles.itemMeta}>{item.collection}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Form */}
        {(selectedItem || isAdding) && (
          <div className={styles.form}>
            <h2>{isAdding ? 'Add Gallery Item' : 'Edit Item'}</h2>

            <div className={styles.formGroup}>
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => handleFormChange('title', e.target.value)}
                placeholder="Piece title"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="image_url">Image URL *</label>
              <input
                type="text"
                id="image_url"
                value={formData.image_url}
                onChange={(e) => handleFormChange('image_url', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
              <p className={styles.help}>Paste the full image URL (e.g., from Imgur, Cloudinary, or your CDN)</p>
            </div>

            {formData.image_url && (
              <div className={styles.preview}>
                <img src={formData.image_url} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="image_alt_text">Alt Text</label>
              <input
                type="text"
                id="image_alt_text"
                value={formData.image_alt_text}
                onChange={(e) => handleFormChange('image_alt_text', e.target.value)}
                placeholder="Descriptive alt text for accessibility"
              />
            </div>

            <div className={styles.twoCol}>
              <div className={styles.formGroup}>
                <label htmlFor="collection">Collection</label>
                <select
                  id="collection"
                  value={formData.collection}
                  onChange={(e) => handleFormChange('collection', e.target.value)}
                >
                  <option value="forever-form">Forever Form</option>
                  <option value="games-room">The Games Room</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="display_order">Order</label>
                <input
                  type="number"
                  id="display_order"
                  value={formData.display_order}
                  onChange={(e) => handleFormChange('display_order', parseInt(e.target.value))}
                  min="0"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="featured">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => handleFormChange('featured', e.target.checked)}
                />
                Featured
              </label>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleFormChange('description', e.target.value)}
                placeholder="Optional description"
                rows="4"
              />
            </div>

            <div className={styles.actions}>
              <button
                className={styles.saveBtn}
                onClick={handleSave}
                disabled={updating}
              >
                {updating ? 'Saving...' : isAdding ? 'Add Item' : 'Update Item'}
              </button>
              {selectedItem && (
                <button
                  className={styles.deleteBtn}
                  onClick={handleDelete}
                  disabled={updating}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
