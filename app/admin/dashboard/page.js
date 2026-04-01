// app/admin/dashboard/page.js
// Main admin panel dashboard

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    totalBlogPosts: 0,
    totalGalleryItems: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentEnquiries, setRecentEnquiries] = useState([]);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Load dashboard stats
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Get enquiry stats
      const { count: totalEnquiries } = await supabase
        .from('enquiries')
        .select('*', { count: 'exact', head: true });

      const { count: newEnquiries } = await supabase
        .from('enquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'new');

      // Get blog post count
      const { count: totalBlogPosts } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });

      // Get gallery item count
      const { count: totalGalleryItems } = await supabase
        .from('gallery_items')
        .select('*', { count: 'exact', head: true });

      // Get recent enquiries
      const { data: recent } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalEnquiries: totalEnquiries || 0,
        newEnquiries: newEnquiries || 0,
        totalBlogPosts: totalBlogPosts || 0,
        totalGalleryItems: totalGalleryItems || 0,
      });

      setRecentEnquiries(recent || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading stats:', error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
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
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>Kent & Vale Admin</h1>
          <p>Manage content, gallery, team, and enquiries</p>
        </div>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Log Out
        </button>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Total Enquiries</p>
          <p className={styles.statValue}>{stats.totalEnquiries}</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>New Enquiries</p>
          <p className={styles.statValue}>{stats.newEnquiries}</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Blog Posts</p>
          <p className={styles.statValue}>{stats.totalBlogPosts}</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Gallery Items</p>
          <p className={styles.statValue}>{stats.totalGalleryItems}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <h2>Manage Content</h2>
        <div className={styles.navGrid}>
          <Link href="/admin/enquiries" className={styles.navCard}>
            <h3>Enquiries</h3>
            <p>View and manage commission enquiries</p>
            <span>→</span>
          </Link>
          <Link href="/admin/blog" className={styles.navCard}>
            <h3>Blog Posts</h3>
            <p>Create and edit blog content</p>
            <span>→</span>
          </Link>
          <Link href="/admin/gallery" className={styles.navCard}>
            <h3>Gallery</h3>
            <p>Upload and manage portfolio pieces</p>
            <span>→</span>
          </Link>
          <Link href="/admin/team" className={styles.navCard}>
            <h3>Team Members</h3>
            <p>Update team info and photos</p>
            <span>→</span>
          </Link>
          <Link href="/admin/settings" className={styles.navCard}>
            <h3>Settings</h3>
            <p>Site config, contact info, social links</p>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Recent Enquiries */}
      {recentEnquiries.length > 0 && (
        <div className={styles.recentSection}>
          <h2>Recent Enquiries</h2>
          <div className={styles.enquiriesTable}>
            <div className={styles.tableHeader}>
              <div>Name</div>
              <div>Email</div>
              <div>Interest</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            {recentEnquiries.map(enquiry => (
              <Link
                key={enquiry.id}
                href={`/admin/enquiries/${enquiry.id}`}
                className={styles.tableRow}
              >
                <div>{enquiry.name}</div>
                <div>{enquiry.email}</div>
                <div>{enquiry.interest}</div>
                <div>
                  <span className={`${styles.statusBadge} ${styles[enquiry.status]}`}>
                    {enquiry.status}
                  </span>
                </div>
                <div>{new Date(enquiry.created_at).toLocaleDateString()}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
