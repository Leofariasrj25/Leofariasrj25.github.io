# GitHub Pages Deploy Roadmap

## Pre-deploy content (src/config/constants.ts)
- [ ] Name, role, location, email
- [ ] About paragraphs
- [ ] Projects with real URLs
- [ ] Work experience
- [ ] Skills
- [ ] Education

## Social links (src/components/layout/Header.tsx)
- [ ] LinkedIn URL
- [ ] GitHub URL
- [ ] Twitter/X URL

## SEO/branding
- [ ] `index.html` — title, description, meta tags
- [ ] `metadata.json` — app metadata
- [ ] `public/favicon.svg` — your favicon

## Vite config for GitHub Pages
- [ ] Add `base: './'` to vite.config.ts (required for subdirectory hosting)

## Optional but recommended
- [ ] Custom 404.html (SPA needs it for reload)
- [ ] .nojekyll file (disables Jekyll processing)
- [ ] GitHub Actions workflow for auto-deploy on push