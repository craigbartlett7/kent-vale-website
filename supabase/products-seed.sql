-- Kent & Vale — Products table creation and initial seed
-- Run this in the Supabase SQL editor

-- ============================================================
-- 1. Create the products table (skip if already exists)
-- ============================================================
CREATE TABLE IF NOT EXISTS products (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now(),

  -- Identity
  name              TEXT NOT NULL,
  slug              TEXT NOT NULL UNIQUE,
  collection        TEXT NOT NULL CHECK (collection IN ('studio', 'games-room')),

  -- Content
  description       TEXT,
  dimensions        TEXT,
  image_url         TEXT,

  -- Pricing (stored in pence)
  base_price        INTEGER NOT NULL,
  legs_addon_price  INTEGER,
  allow_legs_addon  BOOLEAN DEFAULT false,

  -- Display
  lead_time         TEXT DEFAULT '8–12 weeks',
  display_order     INTEGER DEFAULT 0,
  active            BOOLEAN DEFAULT true
);

-- Index for fast lookups by slug and collection
CREATE INDEX IF NOT EXISTS products_slug_idx        ON products (slug);
CREATE INDEX IF NOT EXISTS products_collection_idx  ON products (collection);
CREATE INDEX IF NOT EXISTS products_active_idx      ON products (active);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS products_updated_at ON products;
CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================
-- 2. Enable Row Level Security
-- ============================================================
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon key) to SELECT active products (public shop)
DROP POLICY IF EXISTS "Public can read active products" ON products;
CREATE POLICY "Public can read active products"
  ON products FOR SELECT
  USING (active = true);

-- Allow anon key full access for admin (matches other tables in this project)
DROP POLICY IF EXISTS "Anon full access for admin" ON products;
CREATE POLICY "Anon full access for admin"
  ON products FOR ALL
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- 3. Seed initial products
-- ============================================================

-- STUDIO collection
INSERT INTO products (name, slug, collection, description, dimensions, base_price, display_order, lead_time, active)
VALUES
  (
    '60cm Round Table',
    'round-table-60cm',
    'studio',
    'A confident, sociable form — the 60cm diameter makes it ideal as a side table, lamp table, or occasional dining piece for two. The circular top is made from a single live-edge slab wherever the timber allows.',
    '60cm diameter',
    120000,
    10,
    '8–12 weeks',
    true
  ),
  (
    '60cm × 40cm Side Table',
    'side-table-60x40',
    'studio',
    'A refined rectangular side table. At 60 × 40cm it works beautifully beside a sofa, bed, or armchair — generous enough to hold a lamp and a book without feeling heavy in the room.',
    '60cm × 40cm',
    100000,
    20,
    '8–12 weeks',
    true
  ),
  (
    'Small Dining Table',
    'dining-table-small',
    'studio',
    'A 4ft × 2ft dining table that seats four comfortably — the right size for a kitchen, a breakfast room, or a compact dining space. Built to be used every day for decades.',
    '120cm × 60cm (4ft × 2ft)',
    170000,
    30,
    '10–14 weeks',
    true
  ),
  (
    'Large Dining Table',
    'dining-table-large',
    'studio',
    'Our statement dining piece. At 7ft × 4ft it seats eight and commands a room. Made from a substantial slab with a deep resin river — a piece that becomes the centrepiece of every gathering you will ever host.',
    '213cm × 120cm (7ft × 4ft)',
    260000,
    40,
    '12–16 weeks',
    true
  ),
  (
    'Charcuterie Board',
    'charcuterie-board',
    'studio',
    'A substantial serving board — built not for occasional use but for the table you set with intention. Thick enough to feel substantial in hand, finished to a standard that earns its place when the food is gone.',
    'Approx. 50cm × 35cm',
    70000,
    50,
    '6–8 weeks',
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- GAMES ROOM collection
INSERT INTO products (name, slug, collection, description, dimensions, base_price, legs_addon_price, allow_legs_addon, display_order, lead_time, active)
VALUES
  (
    'Home Chess Board',
    'chess-board-home',
    'games-room',
    'Our home board uses 4cm squares — the size that feels right on a coffee table or side table, generous enough to play comfortably without dominating the space. Available with matching legs to create a freestanding side table.',
    '60cm × 60cm · 4cm squares',
    120000,
    20000,
    true,
    10,
    '8–12 weeks',
    true
  ),
  (
    'Competition Chess Board',
    'chess-board-competition',
    'games-room',
    'Built to FIDE regulation 5cm squares — the standard for serious play. At 60 × 60cm with full-size squares, this is the board for the player who takes the game seriously, displayed in the room where it belongs.',
    '60cm × 60cm · 5cm squares',
    140000,
    20000,
    true,
    20,
    '8–12 weeks',
    true
  )
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- Done. Verify with:
-- SELECT id, name, slug, collection, base_price, active FROM products ORDER BY collection, display_order;
-- ============================================================
