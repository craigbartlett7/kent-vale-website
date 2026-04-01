// app/admin/enquiries/page.js
// Complete enquiries management interface

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './admin-enquiries.module.css';

export default function AdminEnquiries() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadEnquiries();
  }, []);

  const loadEnquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEnquiries(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading enquiries:', error);
      setLoading(false);
    }
  };

  const filteredEnquiries = enquiries
    .filter(e => (filter === 'all' ? true : e.status === filter))
    .filter(e => 
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleStatusChange = async (enquiryId, newStatus) => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('enquiries')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', enquiryId);

      if (error) throw error;

      setEnquiries(enquiries.map(e => 
        e.id === enquiryId ? { ...e, status: newStatus } : e
      ));
      setSelectedEnquiry(null);
    } catch (error) {
      console.error('Error updating enquiry:', error);
    }
    setUpdating(false);
  };

  const handleNotesUpdate = async (enquiryId, notes) => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('enquiries')
        .update({ notes: notes, updated_at: new Date().toISOString() })
        .eq('id', enquiryId);

      if (error) throw error;

      setEnquiries(enquiries.map(e => 
        e.id === enquiryId ? { ...e, notes } : e
      ));
    } catch (error) {
      console.error('Error updating notes:', error);
    }
    setUpdating(false);
  };

  const handleDelete = async (enquiryId) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const { error } = await supabase
        .from('enquiries')
        .delete()
        .eq('id', enquiryId);

      if (error) throw error;

      setEnquiries(enquiries.filter(e => e.id !== enquiryId));
      setSelectedEnquiry(null);
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Commission Enquiries</h1>
          <p>Manage incoming enquiries and track their status</p>
        </div>
        <Link href="/admin/dashboard" className={styles.backBtn}>
          ← Back to Dashboard
        </Link>
      </div>

      {/* Search & Filter */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <div className={styles.filterButtons}>
          {['all', 'new', 'contacted', 'in-progress', 'completed', 'archived'].map(status => (
            <button
              key={status}
              className={`${styles.filterBtn} ${filter === status ? styles.active : ''}`}
              onClick={() => setFilter(status)}
            >
              {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
              <span className={styles.count}>
                {status === 'all' 
                  ? enquiries.length 
                  : enquiries.filter(e => e.status === status).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries List */}
      <div className={styles.enquiriesList}>
        {filteredEnquiries.length === 0 ? (
          <p className={styles.empty}>No enquiries found</p>
        ) : (
          filteredEnquiries.map(enquiry => (
            <div
              key={enquiry.id}
              className={`${styles.enquiryCard} ${selectedEnquiry?.id === enquiry.id ? styles.selected : ''}`}
              onClick={() => setSelectedEnquiry(enquiry)}
            >
              <div className={styles.cardHeader}>
                <div>
                  <h3>{enquiry.name}</h3>
                  <p className={styles.email}>{enquiry.email}</p>
                </div>
                <span className={`${styles.statusBadge} ${styles[enquiry.status]}`}>
                  {enquiry.status}
                </span>
              </div>

              <div className={styles.cardMeta}>
                <span className={styles.interest}>{enquiry.interest}</span>
                <span className={styles.date}>
                  {new Date(enquiry.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className={styles.description}>
                {enquiry.description.substring(0, 100)}...
              </p>
            </div>
          ))
        )}
      </div>

      {/* Details Panel */}
      {selectedEnquiry && (
        <div className={styles.detailsPanel}>
          <div className={styles.panelHeader}>
            <h2>Enquiry Details</h2>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedEnquiry(null)}
            >
              ✕
            </button>
          </div>

          <div className={styles.detailsContent}>
            <div className={styles.section}>
              <h4>Contact Information</h4>
              <p><strong>Name:</strong> {selectedEnquiry.name}</p>
              <p><strong>Email:</strong> 
                <a href={`mailto:${selectedEnquiry.email}`}>
                  {selectedEnquiry.email}
                </a>
              </p>
            </div>

            <div className={styles.section}>
              <h4>Commission Details</h4>
              <p><strong>Interest:</strong> {selectedEnquiry.interest}</p>
              {selectedEnquiry.budget_range && (
                <p><strong>Budget:</strong> £{selectedEnquiry.budget_range.replace('-', '–')}</p>
              )}
              {selectedEnquiry.timeline && (
                <p><strong>Timeline:</strong> {selectedEnquiry.timeline}</p>
              )}
            </div>

            <div className={styles.section}>
              <h4>Commission Description</h4>
              <p className={styles.description}>{selectedEnquiry.description}</p>
            </div>

            <div className={styles.section}>
              <h4>Status</h4>
              <div className={styles.statusSelect}>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                  disabled={updating}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className={styles.section}>
              <h4>Internal Notes</h4>
              <textarea
                value={selectedEnquiry.notes || ''}
                onChange={(e) => setSelectedEnquiry({ ...selectedEnquiry, notes: e.target.value })}
                onBlur={(e) => handleNotesUpdate(selectedEnquiry.id, e.target.value)}
                placeholder="Add internal notes here..."
                className={styles.notesTextarea}
              />
            </div>

            <div className={styles.section}>
              <h4>Metadata</h4>
              <p><strong>Received:</strong> {new Date(selectedEnquiry.created_at).toLocaleString()}</p>
              <p><strong>Last Updated:</strong> {new Date(selectedEnquiry.updated_at).toLocaleString()}</p>
            </div>

            <div className={styles.actions}>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(selectedEnquiry.id)}
              >
                Delete Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
