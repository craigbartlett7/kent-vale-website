// app/admin/team/page.js
// Team member management — add, edit, delete

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
  const [isAdding, setIsAdding] = useState(false);
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

  const resetForm = () => {
    setFormData({ name: '', role: '', bio: '', photo_url: '', display_order: 0 });
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
      if (isAdding) {
        // Create new member
        const { data, error } = await supabase
          .from('team_members')
          .insert([{ ...formData, created_at: new Date().toISOString() }])
          .select();

        if (error) throw error;
        setMembers([...members, data[0]]);
        setIsAdding(false);
        resetForm();
      } else {
        // Update existing member
        const { error } = await supabase
          .from('team_members')
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq('id', selectedMember.id);

        if (error) throw error;
        setMembers(members.map(m =>
          m.id === selectedMember.id ? { ...selectedMember, ...formData } : m
        ));
        setSelectedMember(null);
        resetForm();
      }
    } catch (error) {
      console.error('Error saving member:', error);
      alert('Error saving member: ' + error.message);
    }
    setUpdating(false);
  };

  const handleDelete = async () => {
    if (!confirm(`Delete ${selectedMember.name}? This cannot be undone.`)) return;

    try {
      const { error } = await supabase
        .from('team_members')
        .delete()
        .eq('id', selectedMember.id);

      if (error) throw error;
      setMembers(members.filter(m => m.id !== selectedMember.id));
      setSelectedMember(null);
      resetForm();
    } catch (error) {
      console.error('Error deleting member:', error);
      alert('Error deleting member: ' + error.message);
    }
  };

  const editMember = (member) => {
    setFormData(member);
    setSelectedMember(member);
    setIsAdding(false);
  };

  const startAdding = () => {
    resetForm();
    setSelectedMember(null);
    setIsAdding(true);
  };

  const cancelForm = () => {
    setSelectedMember(null);
    setIsAdding(false);
    resetForm();
  };

  if (loading) {
    return <div className={styles.container}><p>Loading...</p></div>;
  }

  const showForm = selectedMember || isAdding;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Team Members</h1>
          <p>Add, edit, and remove team member profiles</p>
        </div>
        <div className={styles.headerActions}>
          {showForm ? (
            <button className={styles.cancelBtn} onClick={cancelForm}>
              ← Cancel
            </button>
          ) : (
            <button className={styles.newMemberBtn} onClick={startAdding}>
              + Add Member
            </button>
          )}
          <Link href="/admin/dashboard" className={styles.backBtn}>
            ← Dashboard
          </Link>
        </div>
      </div>

      {/* Member list */}
      {!showForm && (
        <>
          {members.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No team members yet.</p>
              <button className={styles.newMemberBtn} onClick={startAdding}>
                + Add Your First Team Member
              </button>
            </div>
          ) : (
            <div className={styles.membersList}>
              {members.map(member => (
                <div
                  key={member.id}
                  className={styles.memberCard}
                  onClick={() => editMember(member)}
                >
                  {member.photo_url ? (
                    <img src={member.photo_url} alt={member.name} className={styles.photo} />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <div className={styles.info}>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    {member.bio && (
                      <p className={styles.bio}>{member.bio.substring(0, 100)}{member.bio.length > 100 ? '...' : ''}</p>
                    )}
                    <p className={styles.editHint}>Click to edit</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Add / Edit form */}
      {showForm && (
        <div className={styles.form}>
          <h2>{isAdding ? 'Add Team Member' : `Edit — ${selectedMember.name}`}</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              placeholder="Full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="role">Role *</label>
            <input
              type="text"
              id="role"
              value={formData.role}
              onChange={(e) => handleFormChange('role', e.target.value)}
              placeholder="e.g. Lead Craftsman"
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
            <p className={styles.help}>Paste a direct link to the photo image (Cloudinary, Imgur, etc.)</p>
          </div>

          {formData.photo_url && (
            <div className={styles.photoPreview}>
              <img src={formData.photo_url} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
            </div>
          )}

          <div className={styles.formGroup}>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleFormChange('bio', e.target.value)}
              placeholder="A short bio for this team member..."
              rows="5"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="display_order">Display Order</label>
            <input
              type="number"
              id="display_order"
              value={formData.display_order}
              onChange={(e) => handleFormChange('display_order', parseInt(e.target.value))}
              min="0"
            />
            <p className={styles.help}>Lower numbers appear first. Use 1, 2, 3, etc.</p>
          </div>

          <div className={styles.actions}>
            <button className={styles.saveBtn} onClick={handleSave} disabled={updating}>
              {updating ? 'Saving...' : isAdding ? 'Add Member' : 'Update Member'}
            </button>
            {selectedMember && (
              <button className={styles.deleteBtn} onClick={handleDelete} disabled={updating}>
                Delete Member
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
