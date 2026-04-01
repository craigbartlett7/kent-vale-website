# Kent & Vale Website — Deployment Guide
## Complete Step-by-Step Instructions for Vercel + Supabase

**Status:** Ready to Deploy  
**Last Updated:** April 2026

---

## PRE-DEPLOYMENT CHECKLIST

Before you deploy, make sure you have:

- ✅ Supabase project created and database initialized
- ✅ GitHub account with repository created
- ✅ Vercel account created
- ✅ Custom domain: kentandvale.com (registered)
- ✅ All code files ready to push to GitHub

---

## STEP 1: Set Up GitHub Repository

### 1.1: Create a new GitHub repository

1. Go to https://github.com/new
2. Repository name: `kent-vale-website`
3. Description: `Kent & Vale — Bespoke Objects of Permanence`
4. Privacy: **Private** (only you can see it)
5. Click **Create repository**

### 1.2: Push your code to GitHub

In your project directory, run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Kent & Vale website"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/kent-vale-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username.

---

## STEP 2: Deploy to Vercel

### 2.1: Import repository to Vercel

1. Go to https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Click **Import Git Repository**
4. Select your GitHub account
5. Find and click `kent-vale-website`
6. Click **Import**

### 2.2: Configure environment variables

On the Vercel configuration page:

1. Scroll to **Environment Variables**
2. Add the following (copy-paste from your `.env.local`):

```
NEXT_PUBLIC_SUPABASE_URL=https://ysukhyohfnglzilkfzmh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_l2r8Jzda1R5wzZJDYi1RBA_z2cpfHw-
NEXT_PUBLIC_CONTACT_EMAIL=hello@kentandvale.com
ADMIN_PASSWORD=Lilluc@s180214
NEXT_PUBLIC_SITE_URL=https://kentandvale.com
NEXT_PUBLIC_SITE_NAME=Kent & Vale
```

3. Click **Deploy**

**Wait for deployment** (takes 2-5 minutes)

Once done, you'll see: "Congratulations! Your site is live."

### 2.3: Your deployment URL

Vercel will give you a URL like: `https://kent-vale-website-xxx.vercel.app`

**Test it:** Visit the URL to make sure the site loads.

---

## STEP 3: Connect Custom Domain

### 3.1: Add domain to Vercel

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Type: `kentandvale.com`
5. Click **Add**

### 3.2: Update DNS at your domain registrar

Vercel will show you DNS records to add. The process differs by registrar:

**If you use GoDaddy, Namecheap, etc.:**

1. Log into your domain registrar
2. Find DNS settings (usually under "DNS Manager" or "Advanced Settings")
3. Add the DNS records Vercel shows:
   - Usually one `A` record or `CNAME` record
   - Copy exactly what Vercel displays

4. Save changes
5. Wait 24-48 hours for DNS to propagate

**If you registered domain elsewhere:**

Contact your domain registrar's support or check their docs for how to add DNS records.

Once DNS is updated, Vercel will show a green checkmark.

### 3.4: Enable HTTPS

Vercel handles this automatically. Your site will be `https://kentandvale.com` with SSL certificate.

---

## STEP 4: Test Your Live Site

Once deployment is complete:

1. Visit https://kentandvale.com (or your vercel.app URL)
   - Homepage should load ✓
   - Collections should work ✓
   - Navigation links work ✓

2. Test Admin Panel:
   - Visit https://kentandvale.com/admin/login
   - Enter password: `Lilluc@s180214`
   - Dashboard should load ✓
   - Enquiries, Blog, Gallery, Team, Settings tabs should all work ✓

3. Test Form Submission:
   - Go to /enquiry
   - Fill in test form
   - Submit
   - Check Supabase: go to your project → Table Editor → `enquiries` table
   - Your submission should appear as a new row ✓

---

## STEP 5: Post-Deployment Tasks

### Update admin password (IMPORTANT)

Your current password is temporary. Change it:

1. Go to `.env` in your Vercel project settings
2. Update: `ADMIN_PASSWORD=your-new-secure-password`
3. Redeploy

Actually, better approach:

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Click the eye icon next to `ADMIN_PASSWORD`
3. Click **Edit**
4. Change to a new strong password
5. Vercel will redeploy automatically

### Set up email notifications (Optional - can be done later)

If you want email notifications when customers submit the form:

1. Sign up for Resend: https://resend.com
2. Get your API key
3. In Vercel dashboard, add: `RESEND_API_KEY=your_key_here`
4. Vercel redeploys automatically

---

## STEP 6: Ongoing Operations

### Adding a Blog Post

1. Log into https://kentandvale.com/admin/login
2. Click **Blog Posts**
3. Click **+ New Post**
4. Fill in title, content, stream (Forever Form / Games Room / Studio)
5. Check "Published" to make it live
6. Click **Create Post**
7. Post appears on https://kentandvale.com/blog instantly ✓

### Uploading Gallery Images

1. Log into admin panel
2. Click **Gallery**
3. Click **+ Add Image**
4. Paste image URL (from Imgur, Cloudinary, etc.)
5. Add title, description, collection
6. Click **Add Item**
7. Image appears in gallery instantly ✓

### Managing Enquiries

1. Log into admin panel
2. Click **Enquiries**
3. Click an enquiry to view details
4. Update status: New → Contacted → In Progress → Completed
5. Add internal notes
6. Your notes are saved ✓

### Updating Team Info

1. Log into admin panel
2. Click **Team Members**
3. Click a team member to edit
4. Update bio, photo URL, role
5. Click **Update Member** ✓

### Updating Site Settings

1. Log into admin panel
2. Click **Settings**
3. Update contact email, phone, address, social links
4. Click **Save Settings** ✓

---

## Troubleshooting

### Site shows "404 Not Found"

**Problem:** Vercel deployment failed  
**Solution:**
1. Go to Vercel dashboard
2. Check deployment logs (look for errors)
3. If there's a build error, check that all files were committed to GitHub
4. Push fixes to GitHub
5. Vercel redeploys automatically

### Admin login not working

**Problem:** Password incorrect or environment variables not set  
**Solution:**
1. Double-check password in Vercel environment variables
2. Make sure `ADMIN_PASSWORD` matches what you set
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try in incognito window

### Forms not submitting

**Problem:** Supabase not connected or API keys wrong  
**Solution:**
1. Check Supabase project is live
2. Verify API keys in Vercel match your Supabase project
3. Check browser console (F12) for errors
4. Make sure `enquiries` table exists in Supabase

### Domain not resolving

**Problem:** DNS not updated yet  
**Solution:**
1. Wait 24-48 hours for DNS propagation
2. Check DNS was added correctly at your registrar
3. Use https://dnschecker.org to verify DNS is live
4. Once DNS shows, Vercel updates automatically

---

## Backup & Security

### Backup your database

Your Supabase database is hosted in the cloud and automatically backed up.

To manually export data:
1. Go to Supabase dashboard
2. Select your project
3. Click **Database** → **Backups** (if available on your plan)
4. Or use SQL Editor to export tables

### Secure your admin password

**Never:**
- Share your admin password
- Commit `.env.local` to GitHub
- Post your API keys on the internet

**Always:**
- Use a strong password (12+ characters, mix of letters/numbers/symbols)
- Keep `.env.local` in `.gitignore` (already done in project)
- Rotate password every 6 months

### Monitor your usage

Supabase free tier includes:
- 500MB database storage
- 2GB file storage
- Unlimited API calls (rate limited)

Check your usage in Supabase dashboard → **Project Settings** → **Billing**

---

## Making Updates After Launch

### Update code and redeploy

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update [description]"
   git push origin main
   ```
3. Vercel detects the push and redeploys automatically
4. Site updates within 1-2 minutes

### Update environment variables

1. Go to Vercel dashboard → your project
2. Click **Settings** → **Environment Variables**
3. Edit the variable
4. Vercel redeploys automatically

---

## Support & Resources

**Vercel Documentation:**
https://vercel.com/docs

**Supabase Documentation:**
https://supabase.com/docs

**Next.js Documentation:**
https://nextjs.org/docs

**If you need help:**
1. Check the troubleshooting section above
2. Search the relevant docs
3. Contact Vercel or Supabase support

---

## Deployment Complete! 🎉

Your website is now live at: **https://kentandvale.com**

Admin panel: **https://kentandvale.com/admin/login**  
Password: `Lilluc@s180214`

**Next steps:**
1. Add team member photos and bios
2. Upload gallery images from your 19 Nano-Banana image files
3. Write your first blog post
4. Share the site and start accepting enquiries!

Good luck! 🌿
