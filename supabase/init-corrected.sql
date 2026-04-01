-- Kent & Vale Supabase Database Schema (CORRECTED)
-- Copy and paste this entire script into Supabase SQL Editor
-- Run it all at once

-- ============================================================================
-- BLOG POSTS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

CREATE INDEX IF NOT EXISTS idx_blog_stream ON blog_posts(stream);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);

-- ============================================================================
-- GALLERY ITEMS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

CREATE INDEX IF NOT EXISTS idx_gallery_collection ON gallery_items(collection);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON gallery_items(featured);
CREATE INDEX IF NOT EXISTS idx_gallery_order ON gallery_items(display_order);

-- ============================================================================
-- ENQUIRIES TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON enquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_enquiries_interest ON enquiries(interest);

-- ============================================================================
-- TEAM MEMBERS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_team_order ON team_members(display_order);

-- ============================================================================
-- SITE SETTINGS TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text' CHECK (setting_type IN ('text', 'number', 'boolean', 'json')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- INSERT DEFAULT SETTINGS
-- ============================================================================

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
-- INSERT SAMPLE DATA
-- ============================================================================

-- Team members
INSERT INTO team_members (name, role, bio, display_order) VALUES
('Paul', 'Lead Craftsman', 'Bio coming soon.', 1),
('Amanda Anderson', 'Operations', 'Bio coming soon.', 2),
('Craig Bartlett', 'Brand Ambassador', 'Bio coming soon.', 3),
('Norman Bartlett', 'Strategy & PR', 'Bio coming soon.', 4)
ON CONFLICT DO NOTHING;

-- Gallery items
INSERT INTO gallery_items (title, description, collection, display_order, featured) VALUES
('Wedding Bouquet Preservation', 'Cream and pink roses with eucalyptus in resin', 'forever-form', 1, true),
('Proposal Keepsake', 'Rose petals and handwritten note in resin', 'forever-form', 2, false),
('Chess Set - Midnight', 'Bespoke black and ivory resin chess board', 'games-room', 1, true),
('Backgammon Board', 'Forest green and brass resin backgammon set', 'games-room', 2, false),
('Pet Memorial', 'Memorial piece with pet''s fur and collar', 'forever-form', 3, false),
('Dining Table', 'Walnut and resin river table', 'forever-form', 4, false)
ON CONFLICT DO NOTHING;

-- Sample blog post
INSERT INTO blog_posts (title, slug, content, excerpt, stream, published, published_at, meta_description) VALUES
('How to Preserve Wedding Flowers in Resin: A Complete Guide', 
 'how-to-preserve-wedding-flowers-resin',
 'Complete guide on preserving your wedding bouquet in resin. This comprehensive guide walks through the entire process...',
 'Learn the complete process of preserving your wedding bouquet in resin.',
 'forever-form',
 true,
 NOW(),
 'Learn how to preserve your wedding flowers in resin permanently.')
ON CONFLICT DO NOTHING;

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Blog posts: Public can read published
DROP POLICY IF EXISTS "Published blog posts are readable by anyone" ON blog_posts;
CREATE POLICY "Published blog posts are readable by anyone" ON blog_posts
  FOR SELECT USING (published = true);

-- Gallery items: Public can read all
DROP POLICY IF EXISTS "Gallery items are readable by anyone" ON gallery_items;
CREATE POLICY "Gallery items are readable by anyone" ON gallery_items
  FOR SELECT USING (true);

-- Enquiries: Allow inserts (form submissions)
DROP POLICY IF EXISTS "Anyone can submit enquiries" ON enquiries;
CREATE POLICY "Anyone can submit enquiries" ON enquiries
  FOR INSERT WITH CHECK (true);

-- Team members: Public can read all
DROP POLICY IF EXISTS "Team members are readable by anyone" ON team_members;
CREATE POLICY "Team members are readable by anyone" ON team_members
  FOR SELECT USING (true);

-- Site settings: Public can read all
DROP POLICY IF EXISTS "Site settings are readable by anyone" ON site_settings;
CREATE POLICY "Site settings are readable by anyone" ON site_settings
  FOR SELECT USING (true);
