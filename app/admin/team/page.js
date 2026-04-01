// app/admin/team/page.js
// Team member management

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './admin-team.module.css';

export default function AdminTeam() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    photo_url: '',
    display_order: 0,
  });
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading team:', error);
      setLoading(false);
    }
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    if (!formData.name || !formData.role) {
      alert('Name and role are required');
      return;
    }

    setUpdating(true);
    try {
      const { error } = await supabase
        .from('team_members')
        .update({
          ...formData,
          updated_at: new Date().toISOString(),
        })
        .eq('id', selectedMember.id);

      if (error) throw error;

      setMembers(members.map(m => 
        m.id === selectedMember.id ? { ...selectedMember, ...formData } : m
      ));
      setSelectedMember(null);
    } catch (error) {
      console.error('Error saving member:', error);
      alert('Error saving member');
    }
    setUpdating(false);
  };

  const editMember = (member) => {
    setFormData(member);
    setSelectedMember(member);
  };

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Team Members</h1>
          <p>Update team member information</p>
        </div>
        {selectedMember && (
          <button className={styles.closeBtn} onClick={() => setSelectedMember(null)}>
            ← Back
          </button>
        )}
        <Link href="/admin/dashboard" className={styles.backBtn}>
          ← Dashboard
        </Link>
      </div>

      {!selectedMember ? (
        <div className={styles.membersList}>
          {members.map(member => (
            <div
              key={member.id}
              className={styles.memberCard}
              onClick={() => editMember(member)}
            >
              {member.photo_url && (
                <img src={member.photo_url} alt={member.name} className={styles.photo} />
              )}
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                {member.bio && (
                  <p className={styles.bio}>{member.bio.substring(0, 100)}...</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.form}>
          <h2>Edit {selectedMember.name}</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={formData.role}
              onChange={(e) => handleFormChange('role', e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="photo_url">Photo URL</label>
            <input
              type="text"
              id="photo_url"
              value={formData.photo_url}
              onChange={(e) => handleFormChange('photo_url', e.target.value)}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {formData.photo_url && (
            <div className={styles.photoPreview}>
              <img src={formData.photo_url} alt="Preview" />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleFormChange('bio', e.target.value)}
              placeholder="Team member bio..."
              rows="4"
            />
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

          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={updating}
          >
            {updating ? 'Saving...' : 'Update Member'}
          </button>
        </div>
      )}
    </div>
  );
}
