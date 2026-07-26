# Rabin Pun — Personal Website

A single-page personal portfolio/CV site built with React, TypeScript, and Material UI (MUI), bundled with Vite and deployed to Netlify.

## Tech stack

- [React 17](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- [MUI](https://mui.com/) for components and styling
- [EmailJS](https://www.emailjs.com/) for the contact form (no backend server)

## Getting started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root with your EmailJS credentials (used by the contact form):

```
VITE_YOUR_SERVICE_ID=your_service_id
VITE_YOUR_TEMPLATE_ID=your_template_id
VITE_YOUR_PUBLIC_KEY=your_public_key
```

## Available scripts

### `npm run dev`

Starts the Vite dev server at [http://localhost:4000](http://localhost:4000) and opens it in your browser. Supports hot module reloading.

### `npm run build`

Type-checks the project with `tsc` and builds the production bundle to the `dist` folder.

### `npm run preview`

Serves the production build from `dist` locally, for a final check before deploying.

## Project structure

The page is composed of section components rendered in order from `src/App.tsx`:

```
NavBar → Home → About → Portfolio → Contact → Footer
```

Each section lives in its own file in `src/` (e.g. `Home.tsx`, `About.tsx`) and owns a DOM id (`#home`, `#about`, etc.) that the nav bar links to via in-page anchors — there's no router.

Static assets (profile picture, CV, favicon) are served from `public/`.

## Deployment

The site is deployed via Netlify. Node version is pinned in `.nvmrc` to match the Netlify build environment.
