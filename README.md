# Developer Portfolio Template

Minimalist, multilingual portfolio template built with React + TypeScript + Vite.

## Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Tailwind (CDN in `index.html`)

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or Bun)

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## How To Customize

Main customization file:

- `src/config/constants.ts`

Edit this file to update all content in PT/EN/ES:

- Hero data (`name`, `role`, `location`, `email`, etc.)
- About paragraphs
- Projects
- Experience
- Skills
- Education
- Footer

UI structure:

- `src/components/layout/Header.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/sections/Experience.tsx`
- `src/components/sections/TechnicalStack.tsx`
- `src/components/sections/Education.tsx`
- `src/components/layout/Footer.tsx`

### Social links

Update social URLs in:

- `src/components/layout/Header.tsx`

Current links are placeholders:

- `https://linkedin.com/in/your-profile`
- `https://github.com/your-username`
- `https://x.com/your-handle`

### Branding and SEO

Edit:

- `index.html` for `<title>`, description, author and theme color.
- `public/favicon.svg` for your favicon.
- `metadata.json` for app metadata.

This template intentionally ships without personal image assets and without Open Graph image tags.

## Project Structure

```text
src/
  app/
    App.tsx
  components/
    layout/
    sections/
    ui/
  config/
    constants.ts
    theme.tsx
  i18n/
    index.tsx
  types/
    index.ts
```

## Deploy

You can deploy the `dist/` output to any static host:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Quick Checklist Before Publish

- Replace all placeholder content in `src/config/constants.ts`
- Replace social URLs in `src/components/layout/Header.tsx`
- Update metadata in `index.html` and `metadata.json`
- Run `npm run build` and confirm no errors
