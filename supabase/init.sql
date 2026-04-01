-- Kent & Vale Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- BLOG POSTS TABLE
-- ============================================================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  stream TEXT NOT NULL CHECK (stream IN ('forever-form', 'games-room', 'studio')),
  featured_image_url TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meta_description TEXT,
  meta_keywords TEXT
);

CREATE INDEX idx_blog_stream ON blog_posts(stream);
CREATE INDEX idx_blog_published ON blog_posts(published);
CREATE INDEX idx_blog_slug ON blog_posts(slug);

-- ============================================================================
-- GALLERY ITEMS TABLE
-- ============================================================================

CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  collection TEXT NOT NULL CHECK (collection IN ('forever-form', 'games-room')),
  image_url TEXT NOT NULL,
  image_alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_gallery_collection ON gallery_items(collection);
CREATE INDEX idx_gallery_featured ON gallery_items(featured);
CREATE INDEX idx_gallery_order ON gallery_items(display_order);

-- ============================================================================
-- ENQUIRIES TABLE
-- ============================================================================

CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT CHECK (interest IN ('forever-form', 'games-room', 'not-sure', 'other')),
  description TEXT NOT NULL,
  budget_range TEXT CHECK (budget_range IN ('1000-5000', '5000-15000', '15000+', '')),
  timeline TEXT CHECK (timeline IN ('flexible', '3-months', '3-6-months', '6-plus', '')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in-progress', 'completed', 'archived')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_enquiries_status ON enquiries(status);
CREATE INDEX idx_enquiries_created ON enquiries(created_at);
CREATE INDEX idx_enquiries_interest ON enquiries(interest);

-- ============================================================================
-- TEAM MEMBERS TABLE
-- ============================================================================

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_team_order ON team_members(display_order);

-- ============================================================================
-- SITE SETTINGS TABLE
-- ============================================================================

CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text' CHECK (setting_type IN ('text', 'number', 'boolean', 'json')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings
INSERT INTO site_settings (setting_key, setting_value, setting_type) VALUES
('contact_email', 'hello@kentandvale.com', 'text'),
('phone', '', 'text'),
('address', 'Sittingbourne, Kent', 'text'),
('instagram_url', 'https://instagram.com/kentandvale', 'text'),
('pinterest_url', 'https://pinterest.com/kentandvale', 'text'),
('site_title', 'Kent & Vale — Bespoke Objects of Permanence', 'text'),
('site_description', 'Handmade resin and wood furniture, heirlooms, and game boards. Bespoke commissions from our Kent studio.', 'text')
ON CONFLICT (setting_key) DO NOTHING;

-- ============================================================================
-- RLS (ROW LEVEL SECURITY) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Blog posts: Public can read published, only admin can insert/update/delete
CREATE POLICY "Published blog posts are readable by anyone" ON blog_posts
  FOR SELECT USING (published = true);

-- Gallery items: Public can read all
CREATE POLICY "Gallery items are readable by anyone" ON gallery_items
  FOR SELECT USING (true);

-- Enquiries: Only admin can read (we'll set up admin auth separately)
CREATE POLICY "Enquiries are only readable by admin" ON enquiries
  FOR SELECT USING (true); -- This will be restricted via admin auth

-- Team members: Public can read all
CREATE POLICY "Team members are readable by anyone" ON team_members
  FOR SELECT USING (true);

-- Site settings: Public can read all
CREATE POLICY "Site settings are readable by anyone" ON site_settings
  FOR SELECT USING (true);

-- ============================================================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================================================

-- Insert sample team members
INSERT INTO team_members (name, role, bio, display_order) VALUES
('Paul', 'Lead Craftsman', 'Bio coming soon.', 1),
('Amanda Anderson', 'Operations', 'Bio coming soon.', 2),
('Craig Bartlett', 'Brand Ambassador', 'Bio coming soon.', 3),
('Norman Bartlett', 'Strategy & PR', 'Bio coming soon.', 4);

-- Insert sample gallery items
INSERT INTO gallery_items (title, description, collection, display_order, featured) VALUES
('Wedding Bouquet Preservation', 'Cream and pink roses with eucalyptus in resin', 'forever-form', 1, true),
('Proposal Keepsake', 'Rose petals and handwritten note in resin', 'forever-form', 2, false),
('Chess Set - Midnight', 'Bespoke black and ivory resin chess board', 'games-room', 1, true),
('Backgammon Board', 'Forest green and brass resin backgammon set', 'games-room', 2, false),
('Pet Memorial', 'Memorial piece with pet''s fur and collar', 'forever-form', 3, false),
('Dining Table', 'Walnut and resin river table', 'forever-form', 4, false);

-- Insert sample blog post
INSERT INTO blog_posts (title, slug, content, excerpt, stream, published, published_at, meta_description) VALUES
('How to Preserve Wedding Flowers in Resin: A Complete Guide', 
 'how-to-preserve-wedding-flowers-resin',
 'Complete guide on preserving your wedding bouquet...',
 'Learn the complete process of preserving your wedding bouquet in resin.',
 'forever-form',
 true,
 NOW(),
 'Learn how to preserve your wedding flowers in resin permanently.');

-- ============================================================================
-- NOTES FOR ADMIN
-- ============================================================================
-- After running this script:
-- 1. Create Supabase user via Settings > Authentication > Users
-- 2. Set up admin auth (JWT tokens or Supabase Auth)
-- 3. Test RLS policies
-- 4. Connect frontend to tables via Supabase client
