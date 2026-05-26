# Siong Interior & Builder Website

This is a simple static website for Siong Interior & Builder Pte Ltd.

## Why this version is safer

This version does not require React, Vite, Tailwind or npm build steps.  
It can be uploaded directly to GitHub, Vercel, Netlify or GitHub Pages.

## Files included

- `index.html` - main website page with SEO meta tags and LocalBusiness schema
- `style.css` - website styling
- `siong-logo.png` - logo image
- `robots.txt` - search engine crawling file
- `sitemap.xml` - sitemap for SEO
- `vercel.json` - simple Vercel setting
- `sem-keywords-and-ads.md` - SEM keyword and ad copy plan

## How to upload to GitHub

1. Open your GitHub repo.
2. Delete old React/Vite files if the site is blank.
3. Upload all files from this folder directly into the repo root.
4. Commit changes.
5. Redeploy on Vercel.

## How to deploy on Vercel

1. Go to Vercel.
2. Import the GitHub repo.
3. For framework preset, choose `Other`.
4. Leave build command empty.
5. Output directory should be empty or `/`.
6. Deploy.

## Important SEO step

After you buy or connect the real domain, replace all instances of:

`https://www.sionginterior.com/`

with the real domain in:

- `index.html`
- `robots.txt`
- `sitemap.xml`
