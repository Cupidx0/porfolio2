# Godwin Alamu — Portfolio

Personal portfolio of Godwin Alamu, a London-based full-stack developer building practical, AI-powered web apps with React, Python and Firebase.

## Stack

- React 19 + Vite 7 (SWC)
- Plain CSS with design tokens (`src/index.css`)
- ESLint 9 flat config

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run lint     # lint
npm run build    # production build in dist/
```

## Editing content

All copy (bio, journey, projects, skills, links) lives in `src/data/content.js`.
Project `github` and `demo` links render only when they are set, so add them once a project is public.

## Structure

```
src/
├── components/   Header, Section, TagList
├── data/         content.js — every piece of site copy
└── pages/        portfoliopage.jsx — page layout
```
