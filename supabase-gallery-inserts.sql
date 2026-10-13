-- Gallery inserts for new images from drive-download-20261013T160739Z-1-001
-- Paste into Supabase SQL Editor and run
-- Check current max display_order first:
-- SELECT MAX(display_order) FROM gallery_items;
-- Then update the display_order values below to continue from that number.

INSERT INTO gallery_items (title, description, collection, image_url, image_alt_text, display_order, featured)
VALUES
  (
    'Botanical Heart Keepsake',
    'Preserved flowers and botanicals set in a heart-shaped resin keepsake — a delicate way to hold a moment forever.',
    'memories',
    '/images/memories-botanical-heart-keepsake-1.jpg',
    'Heart-shaped resin keepsake containing preserved flowers and botanicals, handmade by Kent & Vale',
    200,
    false
  ),
  (
    'Botanical Coffee Table',
    'Pressed botanicals suspended in a clear resin coffee table — bringing the garden indoors permanently.',
    'memories',
    '/images/memories-botanical-coffee-table-1.jpg',
    'Clear resin coffee table with pressed botanical specimens embedded throughout, by Kent & Vale',
    201,
    false
  ),
  (
    'Career Memories — Gin Collection Board',
    'Miniature gin bottles, labels and mementoes set into a resin display board — a toast to a career well spent.',
    'memories',
    '/images/career-memories-gin-board-1.jpg',
    'Resin memory board with embedded miniature gin bottles and career mementoes, handmade by Kent & Vale',
    202,
    false
  ),
  (
    'Career Memories — Police Service Table',
    'ID badges, service chain, handcuffs and career mementoes embedded in a round forest-green resin table with olive wood centre.',
    'memories',
    '/images/career-memories-police-table-1.jpg',
    'Round forest-green resin table with olive wood, containing embedded police service mementoes — a retirement keepsake by Kent & Vale',
    203,
    true
  ),
  (
    'Deep Blue Island Side Table',
    'A deep ocean-blue resin island table — one of the Coastal Collection signature pieces, photographed at market.',
    'coastal-edit',
    '/images/coastal-island-table-market-1.jpg',
    'Deep blue resin island side table from the Kent & Vale Coastal Collection, shown at market',
    204,
    false
  ),
  (
    'Beach Scene Chess Table',
    'A full chess set embedded in a coastal-themed resin table — sand, sea and strategy in one piece.',
    'games-room',
    '/images/games-room-beach-chess-table-1.jpg',
    'Coastal-themed resin chess table with beach scene embedded in the board surface, by Kent & Vale',
    205,
    false
  ),
  (
    'Coastal Boards at Market',
    'A selection of Kent & Vale coastal resin serving boards and decorative pieces displayed at market.',
    'coastal-edit',
    '/images/coastal-boards-market-1.jpg',
    'Collection of coastal resin boards and decorative pieces by Kent & Vale, shown at a craft market',
    206,
    false
  ),
  (
    'Las Vegas Games Table',
    'A Las Vegas-themed resin games table — poker chips, dice and casino memorabilia set beneath the playing surface.',
    'games-room',
    '/images/games-room-vegas-table-1.jpg',
    'Las Vegas themed resin games table with embedded poker chips, dice and casino memorabilia by Kent & Vale',
    207,
    false
  );
