# Alex Morgan — Modern Portfolio

A responsive portfolio starter built with React, Vite, Tailwind CSS, and React Router. Includes a landing page, login page, and registration page.

## Pages
- `/` — Portfolio landing page
- `/login` — Login form
- `/register` — Registration form

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build
```bash
npm run build
npm run preview
```

## Demo authentication
Registration and login use browser `localStorage` for demonstration only. This is **not production authentication**: passwords are stored in the browser and should never be handled this way in a real application. For production, connect a secure backend, hash passwords on the server, and use secure session cookies or a suitable authentication provider.

## Customize
- Change the sample name “Alex Morgan” and text in `src/pages/Landing.jsx`.
- Update project cards in the `projects` array.
- Change the page title and metadata in `index.html`.
- Main styling is in `src/index.css`.
