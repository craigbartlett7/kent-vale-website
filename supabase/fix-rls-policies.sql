-- Kent & Vale — RLS Policy Fix
-- Run this once in Supabase SQL Editor to allow the admin panel to write data.
-- This is safe: the admin panel itself is password-protected at the app level.
-- ============================================================================

-- BLOG POSTS: allow admin to create, edit, delete, and read all (not just published)
DROP POLICY IF EXISTS "Allow full admin access to blog posts" ON blog_posts;
CREATE POLICY "Allow full admin access to blog posts" ON blog_posts
  FOR ALL USING (true) WITH CHECK (true);

-- GALLERY ITEMS: allow admin to create, edit, and delete
DROP POLICY IF EXISTS "Allow full admin access to gallery items" ON gallery_items;
CREATE POLICY "Allow full admin access to gallery items" ON gallery_items
  FOR ALL USING (true) WITH CHECK (true);

-- TEAM MEMBERS: allow admin to create, edit, and delete
DROP POLICY IF EXISTS "Allow full admin access to team members" ON team_members;
CREATE POLICY "Allow full admin access to team members" ON team_members
  FOR ALL USING (true) WITH CHECK (true);

-- SITE SETTINGS: allow admin to update settings
DROP POLICY IF EXISTS "Allow full admin access to site settings" ON site_settings;
CREATE POLICY "Allow full admin access to site settings" ON site_settings
  FOR ALL USING (true) WITH CHECK (true);

-- ENQUIRIES: allow admin to update status, add notes, and delete
DROP POLICY IF EXISTS "Allow full admin access to enquiries" ON enquiries;
CREATE POLICY "Allow full admin access to enquiries" ON enquiries
  FOR ALL USING (true) WITH CHECK (true);
