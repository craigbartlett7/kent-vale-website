// seed-articles.mjs
// Run once to publish the 5 new Memories journal articles to Supabase.
// Usage (from kent-vale-website folder):
//   node seed-articles.mjs
//
// Requires .env.local with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

import { readFileSync } from 'fs';
import { createClient } from '@supabase/supabase-js';

// Load .env.local manually
const env = {};
try {
  readFileSync('.env.local', 'utf8').split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && v.length) env[k.trim()] = v.join('=').trim();
  });
} catch (e) {
  console.error('Could not read .env.local:', e.message);
  process.exit(1);
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const PUBLISHED_AT = '2026-10-13T09:00:00.000Z';

const articles = [
  {
    title: 'Baby Memory Keepsakes in Resin: How to Preserve the First Moments of a New Life',
    slug: 'baby-memory-keepsakes-in-resin',
    stream: 'atelier',
    published: true,
    published_at: PUBLISHED_AT,
    featured_image_url: '',
    excerpt: 'Hospital tags, locks of hair, first shoes, scan photographs — we preserve the physical evidence of a new life\'s beginning in hand-poured resin. A permanent keepsake that lasts forever.',
    meta_description: 'Baby memory keepsakes in resin — hospital tags, first shoes, locks of hair, scan photos preserved permanently in hand-poured resin. Handmade by Kent & Vale in England.',
    content: `The first weeks of a baby's life pass at a different speed to the rest of time. You know this while it's happening — you feel the weight of it — but you cannot slow it down. The hospital tag comes off. The curl is cut. The first shoes are outgrown in weeks and placed, with the best intentions, in a drawer.

This is what baby memory keepsakes in resin are made for.

At Kent & Vale, we preserve the physical evidence of a new life's beginning — hospital identification tags, locks of hair, first shoes, scan photographs, coming-home outfits — set in hand-poured resin and built into objects that last. Not tucked away. Placed. Permanent.

## What Can Be Preserved in Resin?

Almost any small object from a baby's earliest days can be set in resin. The most common items we work with are:

**Hospital identification tags** — the wristband bearing their first name, their weight, the exact time they arrived. This is the first document of a life. We set it in clear resin so it cannot fade, yellow, or get lost at the back of a drawer.

**Locks of hair** — from a first haircut, or sometimes from the day they were born. Suspended in resin, the colour and texture are preserved exactly. We often combine a lock with a curl from the delivery room if both are available.

**First shoes** — tiny soles that may never have touched pavement. Set in resin they become a sculpture: something to hold, to show, to hand down. We have made pieces from shoes so small they fit inside a palm.

**Scan photographs** — the very first image of them. We can embed an ultrasound scan inside the resin alongside a hospital tag or dried flowers from the maternity ward. Some parents keep the scan separate and embed only items from the birth day itself. We follow your instincts.

**Coming-home outfits** — the babygrow or hat they wore leaving the hospital. Fabric held flat in resin holds its colour and texture permanently. A single bootie, a knitted hat, a folded babygrow — each becomes an object with weight and presence.

**Birth flowers** — if flowers were sent to the ward, or if the birth fell during a particular season, pressed blooms woven through the resin can anchor the piece to a specific moment in the year.

## What Does a Baby Resin Keepsake Look Like?

There is no catalogue. Every piece we make begins with a conversation about what you have and what feels right. That said, the most common forms we create for baby commissions are:

A **resin block on a walnut or oak plinth** — the items suspended inside clear or lightly tinted resin, finished with a brass plaque engraved with the baby's name, date of birth, weight and time. This sits on a bedside table, a shelf, a mantle.

A **side table or low display surface** — for families who want the commission to be part of the room rather than just on a shelf. The items float inside the resin table top, visible from above, permanent below a smooth poured surface.

A **smaller hanging or framed piece** — for a nursery wall, or for a grandparent. These tend to be flatter, with pressed flowers, the scan, and perhaps a single item from the birth.

Each piece carries a brass plaque engraved with the baby's name, birth date, weight and time of arrival — because those details matter.

## Is a Resin Baby Keepsake a Good Gift?

Yes. Baby memory keepsakes in resin are among the most meaningful gifts available for a new parent, particularly for mothers who have been thinking about what to do with the hospital tag or the first curl since the day they left the ward.

For grandparents who want to give something lasting rather than something the baby will outgrow, a commissioned keepsake — built around items the parents choose — is unusually personal and unusually permanent.

We work with gift-givers directly: the grandparent, godparent or close friend contacts us, we talk through what items the parents have and what form they'd like the piece to take, and we liaise with the family from there.

## When Should You Send Items for a Baby Keepsake Commission?

There is no deadline — we have made pieces from items kept for months or years — but hair and delicate items keep best when stored away from light and damp. A small paper envelope in a drawer is ideal. The hospital tag should be kept flat if possible.

If you're planning a commission, we recommend getting in touch within the first six months of the birth so we can advise on storage. Items can be sent to us by post; we provide a packing guide and tracked returns for anything irreplaceable.

Lead time for a baby resin keepsake is typically four to six weeks from receipt of items. We handle everything — packing materials, the design conversation, production, and delivery.

## Begin a Baby Memory Commission

Every commission begins with a conversation. You tell us what you have. We tell you what's possible. There are no fixed prices until we've talked through the size, form, and materials — pieces start from around £350 and scale with size and complexity.

If you're ready to start, or if you're simply curious about what might be possible, [get in touch with us here](/contact). We work with families across the United Kingdom and ship nationwide.`,
  },
  {
    title: 'Sporting Achievement Keepsakes in Resin: How to Preserve What You Worked For',
    slug: 'sporting-achievement-keepsakes-in-resin',
    stream: 'atelier',
    published: true,
    published_at: PUBLISHED_AT,
    featured_image_url: '',
    excerpt: 'Medals, rosettes, race numbers — we preserve sporting achievements in hand-poured resin so they are never lost in a drawer. Bespoke commissions for runners, riders and athletes.',
    meta_description: 'Sporting achievement keepsakes in resin — marathon medals, rosettes, race numbers preserved permanently. Bespoke commissions handmade by Kent & Vale in England.',
    content: `Medals go in drawers. Rosettes gather dust in the spare room. Race numbers get folded and forgotten in the pocket of a coat that hasn't been worn since the finish line.

You crossed it. You wore the number. You have the medal, the rosette, the certificate — and yet, somehow, the thing you worked the hardest for is the thing most likely to disappear quietly from your life.

Sporting achievement keepsakes in resin exist to solve this. At Kent & Vale, we take what you earned and build it into something you look at every day.

## What Sporting Achievements Can Be Preserved in Resin?

We work with any physical evidence of sporting achievement. The most common commissions we receive are:

**Marathon and running medals** — particularly London Marathon, Manchester, Edinburgh and other major city events. We set the medal in resin alongside the race number, a photograph from the finish line, or a dried flower from the crowd. The piece becomes the whole day: not just the medal, but the story around it.

**Rosettes and show ribbons** — equestrian rosettes, dog show ribbons, agricultural prizes, gymkhana awards. Fabric fades and colours flatten over years. Resin preserves a rosette exactly as it looked the day it was won — shape, colour, texture, the name of the show on the central disc.

**Race numbers** — the paper or fabric bib pinned on that morning, often annotated with a time, a finishing position, a handwritten message. We embed race numbers with medals, with photographs, or alongside a small amount of soil from the course itself.

**Trophies and sporting certificates** — we can embed a miniature trophy, a first-place certificate, a county championship letter, or a qualifying document inside resin, combined with dried flowers from the occasion or other significant items.

**A first win** — the first gold at a local show, a personal best, a county title at junior level. We make pieces for achievements at every scale. What matters is what the achievement meant — not where it appeared in the national rankings.

**Equestrian and country sports memorabilia** — horseshoes from a significant event, a hunting cap badge, the number from a point-to-point, rosettes from a lifetime of showing. We can work across many seasons, layering significant items into a single large commission.

## What Form Does a Sporting Achievement Keepsake Take?

Most sporting commissions become one of the following:

A **resin block on a plinth** — the medal or rosette suspended inside clear resin on an oak or walnut base, finished with a brass plaque engraved with the athlete's name, the event, and the date. This is the most common form: compact, elegant, designed to sit on a shelf or a desk.

A **display table** — for families with multiple achievements, or where the piece should be central to a room. The items are suspended beneath a poured resin surface; the table is functional and displayable simultaneously.

A **wall piece** — particularly suited to rosettes and ribbons, which have their own visual quality when preserved flat. A series of rosettes from a career of showing can become a single large wall-hung panel.

We can also work across multiple commissions for the same person — one piece per race, or a larger retrospective piece drawing on a career of achievement.

## Is a Sporting Achievement Keepsake a Good Gift?

Yes. Particularly for someone who has trained for years and has a drawer full of medals that never quite make it onto the wall.

The most common gift commissions we receive are a marathon medal commission for a partner who has just finished their first 26.2 miles, a rosette piece for a daughter or son at the end of a junior showing career, and a retirement-from-competition piece for a rider, competitor or coach.

For gift commissions, we work directly with the person giving the gift. You tell us about the achievement; we advise on what items to gather and what form would suit the person receiving it. We can liaise with the athlete directly once the commission is agreed if you'd prefer to keep the design a surprise.

## How Long Does a Sporting Keepsake Commission Take?

Lead time is typically four to six weeks from receipt of items. We provide packing materials and a tracked return for anything irreplaceable. Medals, rosettes and race numbers travel by post to our studio in Sittingbourne, Kent; we keep them safe and return everything with the finished piece.

Pieces start from around £350 and scale with size and complexity. Every commission is bespoke and priced after an initial conversation.

## Start Your Sporting Achievement Commission

[Get in touch with us here](/contact). Tell us what the achievement was, what you have to show for it, and what you'd like the piece to feel like. We'll take it from there.

We work with athletes, families and gift-givers across the United Kingdom and ship nationwide.`,
  },
  {
    title: 'Preserving a Favourite Place in Resin: How to Keep a Landscape, a Beach, a Garden',
    slug: 'preserving-a-favourite-place-in-resin',
    stream: 'atelier',
    published: true,
    published_at: PUBLISHED_AT,
    featured_image_url: '',
    excerpt: 'Shells from a meaningful beach, wood from a family garden, soil from a cherished place — we preserve what matters about a location in hand-poured resin. Commissions that last forever.',
    meta_description: 'Favourite place memory keepsakes in resin — shells, sand, wood, soil and botanical material preserved permanently. Bespoke commissions by Kent & Vale in England.',
    content: `There are places that shape you. The beach where you spent the same week every August for fifteen years. The garden of the house you grew up in, or the first house you owned. The cove where you got engaged. The field where you ran, the stretch of river where you fished, the hillside you couldn't stop thinking about long after you'd left.

These places don't stay. Gardens are sold. Houses are demolished. Beaches erode. The people who knew them with you move on or are lost.

At Kent & Vale, we preserve what a place felt like — physically, materially — in hand-poured resin. Not a photograph. Not a memory. The actual substance of the place: shells from that beach, wood from that garden, soil from that field, water from that river.

## What Can Be Preserved from a Favourite Place?

The possibilities are wider than most people first imagine. Some examples of items we have worked with:

**Shells, pebbles and sand from a meaningful beach** — from a honeymoon destination, a childhood holiday location, a stretch of coast associated with a relationship or a person. We can work with wet or dry sand, smooth pebbles from a specific beach, shells collected over many years.

**Wood from a garden** — a branch from an oak in a garden that was sold, a piece of decking from the house where your children grew up, a timber from a barn or outbuilding. Wood embedded in resin holds its grain, its colour, its character. We have made pieces from timber that was over a hundred years old.

**Soil from a significant place** — a handful of earth from a garden, a field, a churchyard, a plot of land the family owned for generations. Soil can be contained inside the resin or mixed through it, depending on the effect you want. It is surprisingly beautiful.

**Water from a meaningful body of water** — sea water, river water, well water, the water from a particular rain. Liquid embedded in resin remains liquid, suspended visibly inside the piece. A small phial of water from the cove where you were married is a different thing entirely from a photograph of it.

**Pressed leaves, bark, lichen and botanical material** — from a specific tree, a forest, a hedgerow, a garden that no longer exists. We can layer botanical material through the resin to create pieces that feel like a landscape compressed into an object.

**Fragments from a demolished building** — brick, tile, glass, plaster. We have made pieces that incorporate material from houses that were pulled down, from buildings that were significant to a family across generations.

## What Form Does a Favourite Place Commission Take?

A favourite-places commission can take almost any form, but the most common are:

A **side table** — where shells from that beach, or wood from that garden, sit suspended in clear resin beneath the surface. The table is functional; the place is preserved inside it. Every glass set down on its surface is placed above something that matters.

A **display block on a plinth** — a smaller, more intimate piece. Soil, shells, wood or water inside resin on an oak or walnut base, finished with a brass plaque. This sits on a shelf, a windowsill, a mantle.

A **wall piece or panel** — particularly suited to pressed botanical material, layered leaves, or bark sections. A piece that captures the quality of a landscape: something you look at and recognise, without it being a representation of the place.

## Is a Favourite Place Commission a Good Gift?

Yes, and often the most meaningful kind. A piece made from soil or shells gathered from a place someone loves says something that no object bought in a shop can.

The most common gift commissions we receive in this category are for people who have recently moved from a place they loved, for families who have sold a family home, and for couples marking anniversaries or significant years together.

## How to Gather Materials from a Place

If you're thinking about a favourite-places commission, here's what to collect: sand and shells should be gathered dry if possible in a small sealed bag; soil travels best dry in a small sealed jar; wood or bark should be wrapped in tissue to protect the grain; water should go in a small bottle with a secure lid, labelled with where and when; botanical material should be pressed between books or tissue for two to three weeks before sending.

We provide full guidance once a commission is underway. Items travel to our studio in Sittingbourne, Kent, by post; we provide tracked returns for anything irreplaceable.

## Begin a Favourite Place Commission

[Get in touch with us here](/contact). Tell us about the place and what you have from it. We work with families, couples and individuals across the United Kingdom and ship nationwide.

Lead time is typically four to six weeks. Pieces start from around £350.`,
  },
  {
    title: 'Pet Memorial Keepsakes in Resin: A Permanent Tribute to a Beloved Animal',
    slug: 'pet-memorial-keepsakes-in-resin',
    stream: 'atelier',
    published: true,
    published_at: PUBLISHED_AT,
    featured_image_url: '',
    excerpt: 'Collar, fur, paw print, ashes — we preserve what a pet left behind in hand-poured resin. A permanent tribute to a beloved animal, handmade in Kent.',
    meta_description: 'Pet memorial keepsakes in resin — collar, fur, paw print and ashes preserved permanently. Bespoke animal memorial commissions handmade by Kent & Vale in England.',
    content: `There is a particular kind of quiet that follows the loss of a pet. The house knows it. The routines know it. The chair they used to occupy, the route you used to walk, the lead hanging by the door — every ordinary thing becomes, briefly, a reminder.

A photograph is not nothing. But a photograph is flat. It doesn't have weight. It doesn't carry the specific texture of the collar they wore every day, or the curl of a lock of fur that is theirs and only theirs.

At Kent & Vale, we make pet memorial keepsakes in resin — objects built around the physical things that belonged to your animal, set permanently and given a place in your home. A tribute that is also a thing: something to hold, to place, to keep.

## What Can Be Preserved in a Pet Memorial Keepsake?

We work with any meaningful object or material from a pet's life. The most common items we set in resin are:

**Collar and tag** — the collar they wore every day, the tag you'd hear from the other end of the house. Worn leather, a familiar clasp, their name engraved on metal. We set it in resin exactly as it is — no cleaning, no straightening — because the worn quality is part of what makes it theirs.

**Lock of fur** — fur suspended in resin holds its colour and its texture exactly as it was at the moment it was gathered. We have made pieces from fur that is decades old. Combined with a small pressed flower or dried herb from a garden they used to run in, it becomes something quietly extraordinary.

**Paw print** — an ink or clay paw print embedded in clear resin. We can work from a print you already have, or guide you through making one from a living animal. The result is something that sits on your shelf for the rest of your life: their print, exactly as it was.

**Ashes** — a portion of ashes set within the resin, making the piece truly continuous with the animal. This can be a standalone commission or combined with a collar, a lock of fur, or pressed flowers from the garden where they rested. We handle ashes with care; you send what you are comfortable sending and we return the remainder.

**Favourite toy** — a chewed tennis ball, a piece of rope, a small toy they carried everywhere. Small, irreplaceable, funny. Embedded in resin, it becomes a monument to the way they played. We have made pieces from toys so worn they were barely recognisable — and that is exactly what made them right.

**Horseshoes or stable items** — for horses and ponies, we often work with a shoe from a significant race or competition, a headcollar, a small portion of mane. These tend towards larger commissions — a block for a tack room or a display piece for a study.

## What Does a Pet Memorial Keepsake Look Like?

The most common forms for pet memorial commissions are:

A **resin block on a plinth** — the items suspended inside clear resin on an oak or walnut base, finished with a brass plaque engraved with the pet's name and the years they were with you. This sits on a shelf, a windowsill, a mantle — placed in the room the way they were placed in the room.

A **heart-shaped ornament or hanging piece** — particularly suited to fur, a paw print, and pressed flowers. A smaller form, more intimate, often placed in a bedroom or a quiet corner of the house.

A **display table or side piece** — for animals that filled a larger part of the family's life, a table-form commission places their collar or paw print beneath a poured resin surface. The piece is functional; the tribute is inseparable from it.

We add a brass plaque engraved with the animal's name and the years they were with you. If they had a particular phrase associated with them, or if you'd like something else on the plaque, we accommodate that.

## Is a Pet Memorial Keepsake a Good Gift?

Yes, and one of the most considered gifts you can give someone who has lost an animal. The loss of a pet is a real grief and it is often underacknowledged. A commissioned piece says something that a card cannot.

For gift commissions, we work with you to understand what the person has and what form the piece should take. We can liaise with the recipient afterwards on the design, or we can work from what you can gather without telling them.

## Timing and Practical Details

There is no deadline for a pet memorial commission. We have worked with families who contacted us years after a loss, using items kept safe in a box. If you have a collar, a lock of fur, or a paw print, it will keep.

Lead time is four to six weeks from receipt of items. Items travel to our studio in Sittingbourne, Kent, by post; we provide tracked return for anything irreplaceable.

Pieces start from around £350. Every commission is bespoke and priced after an initial conversation.

## Begin a Pet Memorial Commission

[Get in touch here](/contact) and tell us about the animal and what you'd like to keep. We work with families across the United Kingdom and ship nationwide.`,
  },
  {
    title: 'Career Memory Keepsakes in Resin: The Perfect Retirement Gift',
    slug: 'career-memory-keepsakes-in-resin',
    stream: 'atelier',
    published: true,
    published_at: PUBLISHED_AT,
    featured_image_url: '',
    excerpt: 'ID badges, business cards, a favourite pen — we preserve the physical evidence of a career in hand-poured resin. The finest retirement gift available, handmade in Kent.',
    meta_description: 'Career memory keepsakes in resin — ID badges, business cards, certificates and career mementoes preserved permanently. The finest retirement gift, handmade by Kent & Vale.',
    content: `A working life is not nothing. Thirty years in a company. A career built across several of them. Relationships formed in corridors and meeting rooms and on the road. The ID badge worn every morning. The pen used at a particular desk. The golf ball from the day the biggest deal was signed.

And then: a card, a clock, a bunch of flowers.

At Kent & Vale, we make career memory keepsakes in resin — commissions that treat a working life the way it deserves to be treated. The physical evidence of a career — badges, cards, documents, small objects — set permanently in hand-poured resin and built into a piece that belongs in the home.

These are, without question, the finest retirement gifts available.

## What Can Be Preserved in a Career Memory Keepsake?

Almost any small object from a professional life can be set in resin. The most meaningful commissions typically draw on:

**ID badges and access passes** — the badges worn every day across a career often span many years and several employers. Layered in resin, they become a visual record of a working life: the progression of titles, companies, photographs. We have made pieces using a single badge from a final employer and pieces that span thirty years of access cards.

**Business cards** — particularly moving when they span a career: the first card from an early employer, the card from the company the person founded, the card from the position they reached after years of work. A handful of cards embedded in clear resin, arranged chronologically, becomes something no valedictory speech can match.

**A favourite pen** — the pen they always had on their desk. Not a display pen: the actual one, worn down, probably running low. Set in resin it becomes exactly what it is: an object used thousands of times in service of a career.

**Professional certificates and qualifications** — a professional qualification certificate, a letter of appointment, a commendation. Documents embedded in resin are protected from light and damp permanently; they cannot yellow or crack inside the piece.

**Objects specific to the work** — the golf ball from a particular round with a particular client. A tool from the trade. A small object that only the people who knew this person in their working life would understand. These are the items that make a commission genuinely irreplaceable.

**Letters, photographs and documents** — a letter from a long-standing client, a photograph from a significant project, the front page of a newspaper on the day a deal was announced. These can be embedded alongside three-dimensional items or used as the primary element of the commission.

## What Form Does a Career Memory Keepsake Take?

The most common forms for career commissions are:

A **resin side table** — the piece that made us well-known in this category. Career mementoes — badges, cards, a pen, a small object — suspended beneath a poured resin surface set into a round or oval table with a solid wood base. It becomes a piece of furniture: something the recipient uses every day and explains to every visitor. This is the definitive career keepsake.

A **resin block on a plinth** — a smaller, more compact piece. Items suspended inside clear resin on an oak or walnut base, finished with a brass plaque engraved with the recipient's name, their years of service, and the company or role. This sits on a desk, a study shelf, a mantle.

A **display panel** — particularly suited to careers in the arts, in sport, in public life, or where documents and photographs form the primary material. A flat panel, framed or wall-mounted, with the evidence of a career arranged and set.

All pieces carry a brass plaque. The engraving is your choice: a name and dates, a title, a line from a leaving speech, a private joke that only the team would recognise.

## Why a Career Memory Keepsake Is the Right Retirement Gift

The standard retirement gift — a carriage clock, a hamper, an engraved watch — says: you are done here. A career memory keepsake says something different. It says: what you built mattered, and here is the evidence of it, treated accordingly.

For the person receiving it, this distinction lands. The piece doesn't go in a drawer. It doesn't sit on a mantle until it's moved to the spare room. It goes where they live — because it is made from the objects that defined the years they worked, and it looks like it.

Career memory keepsakes make the finest retirement gifts for a long-serving company director or CEO, a retiring partner in a law firm, accountancy practice or consultancy, a career military officer or public servant, a founding member of a business leaving at the point of sale, a teacher, headteacher or academic at the end of a long career in education, and anyone, at any level, whose working life deserves to be honoured.

## Commissioning on Behalf of a Team

Most career keepsakes are commissioned by a team, a department, or a board — not by the recipient themselves. We work directly with the person or group commissioning the piece. You tell us about the career and what items are available; we advise on what to gather and what form suits the person.

For group commissions, we can accommodate contributions from multiple people: a badge from a colleague, a business card from a former employer, a photograph from a significant project. We coordinate the gathering of materials and provide a packing guide.

## Practical Details

Lead time is four to six weeks from receipt of items. Items travel to our studio in Sittingbourne, Kent, by post; we provide secure packing guidance and tracked returns for anything irreplaceable.

Pieces start from around £350 for a smaller block commission and range considerably for large table pieces. Every commission is bespoke and priced after an initial conversation about scale, materials, and what is being preserved.

## Begin a Career Memory Commission

[Get in touch with us here](/contact). Tell us about the career and what items are available. We work with teams, companies and individuals across the United Kingdom and ship nationwide.

A working life deserves a monument. We know how to build one.`,
  },
];

async function seed() {
  console.log(`Inserting ${articles.length} articles into blog_posts...`);

  for (const article of articles) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([article])
      .select('id, slug, title');

    if (error) {
      // If slug already exists, skip
      if (error.code === '23505') {
        console.log(`  SKIP (already exists): ${article.slug}`);
      } else {
        console.error(`  ERROR inserting "${article.title}":`, error.message);
      }
    } else {
      console.log(`  OK: ${article.slug} (id: ${data[0]?.id})`);
    }
  }

  console.log('Done.');
}

seed().catch(console.error);
