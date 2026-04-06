// app/admin/blog/page.js
// Complete blog post management interface

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from './admin-blog.module.css';

export default function AdminBlog() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    stream: 'forever-form',
    published: false,
    meta_description: '',
  });
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false, nullsFirst: false });

      if (error) throw error;
      setPosts(data || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading posts:', error);
      setLoading(false);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    if (!formData.title || !formData.slug || !formData.content) {
      alert('Please fill in all required fields');
      return;
    }

    setUpdating(true);
    try {
      if (selectedPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
            published_at: formData.published ? (selectedPost.published_at || new Date().toISOString()) : null,
          })
          .eq('id', selectedPost.id);

        if (error) throw error;

        setPosts(posts.map(p => p.id === selectedPost.id ? { ...selectedPost, ...formData } : p));
      } else {
        // Create new post
        const { data, error } = await supabase
          .from('blog_posts')
          .insert([{
            ...formData,
            published_at: formData.published ? new Date().toISOString() : null,
          }])
          .select();

        if (error) throw error;

        setPosts([data[0], ...posts]);
      }

      setSelectedPost(null);
      setIsCreating(false);
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post');
    }
    setUpdating(false);
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', selectedPost.id);

      if (error) throw error;

      setPosts(posts.filter(p => p.id !== selectedPost.id));
      setSelectedPost(null);
      resetForm();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      stream: 'forever-form',
      published: false,
      meta_description: '',
    });
  };

  const editPost = (post) => {
    setFormData(post);
    setSelectedPost(post);
    setIsCreating(false);
  };

  const newPost = () => {
    resetForm();
    setSelectedPost(null);
    setIsCreating(true);
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
          <h1>Blog Posts</h1>
          <p>Create and manage blog content</p>
        </div>
        <div className={styles.headerActions}>
          {(selectedPost || isCreating) && (
            <button className={styles.cancelBtn} onClick={() => { setSelectedPost(null); setIsCreating(false); resetForm(); }}>
              Cancel
            </button>
          )}
          {!selectedPost && !isCreating && (
            <button className={styles.newPostBtn} onClick={newPost}>
              + New Post
            </button>
          )}
          <Link href="/admin/dashboard" className={styles.backBtn}>
            ← Dashboard
          </Link>
        </div>
      </div>

      <div className={styles.layout}>
        {/* Posts List */}
        {!selectedPost && !isCreating && (
          <div className={styles.postsList}>
            {posts.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No blog posts yet.</p>
                <button className={styles.newPostBtn} onClick={newPost}>
                  + Create Your First Post
                </button>
              </div>
            ) : (
              posts.map(post => (
                <div
                  key={post.id}
                  className={styles.postItem}
                  onClick={() => editPost(post)}
                >
                  <div className={styles.postItemHeader}>
                    <h3>{post.title}</h3>
                    <span className={`${styles.badge} ${post.published ? styles.published : styles.draft}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <p className={styles.postMeta}>
                    <span>{post.stream}</span>
                    <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  </p>
                  <p className={styles.excerpt}>{post.excerpt || 'No excerpt'}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Form */}
        {(selectedPost || isCreating) && (
          <div className={styles.form}>
            <h2>{isCreating ? 'New Post' : 'Edit Post'}</h2>

            <div className={styles.formGroup}>
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e)}
                placeholder="Post title"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="slug">Slug *</label>
              <input
                type="text"
                id="slug"
                value={formData.slug}
                onChange={(e) => handleFormChange('slug', e.target.value)}
                placeholder="post-url-slug"
              />
              <p className={styles.help}>Auto-generated from title. Used in the URL.</p>
            </div>

            <div className={styles.twoCol}>
              <div className={styles.formGroup}>
                <label htmlFor="stream">Stream</label>
                <select
                  id="stream"
                  value={formData.stream}
                  onChange={(e) => handleFormChange('stream', e.target.value)}
                >
                  <option value="forever-form">Forever Form</option>
                  <option value="games-room">The Games Room</option>
                  <option value="studio">Studio & Process</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="published">
                  <input
                    type="checkbox"
                    id="published"
                    checked={formData.published}
                    onChange={(e) => handleFormChange('published', e.target.checked)}
                  />
                  Published
                </label>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="excerpt">Excerpt</label>
              <textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleFormChange('excerpt', e.target.value)}
                placeholder="Short summary for listings"
                rows="2"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content">Content *</label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => handleFormChange('content', e.target.value)}
                placeholder="Full post content (supports markdown)"
                rows="12"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="metaDescription">Meta Description (SEO)</label>
              <input
                type="text"
                id="metaDescription"
                value={formData.meta_description}
                onChange={(e) => handleFormChange('meta_description', e.target.value)}
                placeholder="SEO meta description (155 chars max)"
                maxLength="155"
              />
            </div>

            <div className={styles.actions}>
              <button
                className={styles.saveBtn}
                onClick={handleSave}
                disabled={updating}
              >
                {updating ? 'Saving...' : isCreating ? 'Create Post' : 'Update Post'}
              </button>
              {selectedPost && (
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
