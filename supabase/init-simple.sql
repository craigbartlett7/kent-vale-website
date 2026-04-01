-- Kent & Vale Supabase Database Schema (ULTRA SIMPLE)
-- Just tables, no RLS policies
-- Copy and paste into Supabase SQL Editor and run

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  stream TEXT NOT NULL,
  featured_image_url TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  meta_description TEXT,
  meta_keywords TEXT
);

CREATE TABLE gallery_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  collection TEXT NOT NULL,
  image_url TEXT NOT NULL,
  image_alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT,
  description TEXT NOT NULL,
  budget_range TEXT,
  timeline TEXT,
  status TEXT DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  photo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text',
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
ON CONFLICT DO NOTHING;
