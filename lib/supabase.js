// lib/supabase.js
// Supabase client configuration for Kent & Vale website

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for common queries

// Blog Posts
export const getBlogPosts = async (stream = null) => {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (stream) {
    query = query.eq('stream', stream);
  }

  const { data, error } = await query;
  if (error) console.error('Blog fetch error:', error);
  return data || [];
};

export const getBlogPostBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error && error.code !== 'PGRST116') console.error('Blog post fetch error:', error);
  return data || null;
};

// Gallery Items
export const getGalleryItems = async (collection = null) => {
  let query = supabase
    .from('gallery_items')
    .select('*')
    .order('display_order', { ascending: true });

  if (collection) {
    query = query.eq('collection', collection);
  }

  const { data, error } = await query;
  if (error) console.error('Gallery fetch error:', error);
  return data || [];
};

export const getFeaturedGalleryItems = async (limit = 4) => {
  const { data, error } = await supabase
    .from('gallery_items')
    .select('*')
    .eq('featured', true)
    .limit(limit);

  if (error) console.error('Featured gallery fetch error:', error);
  return data || [];
};

// Team Members
export const getTeamMembers = async () => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) console.error('Team fetch error:', error);
  return data || [];
};

// Enquiries
export const submitEnquiry = async (enquiryData) => {
  const { data, error } = await supabase
    .from('enquiries')
    .insert([enquiryData])
    .select();

  if (error) {
    console.error('Enquiry submission error:', error);
    return { success: false, error };
  }

  return { success: true, data: data[0] };
};

// Site Settings
export const getSiteSetting = async (key) => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('setting_value')
    .eq('setting_key', key)
    .single();

  if (error) console.error('Setting fetch error:', error);
  return data?.setting_value || null;
};

export const getAllSettings = async () => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*');

  if (error) console.error('Settings fetch error:', error);
  
  const settings = {};
  data?.forEach(item => {
    settings[item.setting_key] = item.setting_value;
  });
  
  return settings;
};
