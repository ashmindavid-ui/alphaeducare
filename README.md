# Alpha Global Educare — Website

A React + Vite marketing site for an international education consultancy: hero, countries,
why-choose, services, testimonials, partner universities, news and a contact section.

## Tech stack
- React 18 + Vite 5
- Plain CSS (CSS variables for the design system, no framework)
- Font Awesome 6 (via CDN, already linked in `index.html`)
- Google Fonts: Fraunces (display) + Manrope (body)

## Project structure
```
alpha-global-educare/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css          # design tokens + global styles
│   ├── assets/
│   │   └── logo.png
│   ├── hooks/
│   │   └── useReveal.js    # scroll-reveal animation hook
│   └── components/
│       ├── TopBar.jsx / .css
│       ├── Header.jsx / .css
│       ├── Hero.jsx / .css
│       ├── Countries.jsx / .css
│       ├── WhyChoose.jsx / .css
│       ├── Services.jsx / .css
│       ├── Testimonials.jsx / .css
│       ├── Partners.jsx / .css
│       ├── News.jsx / .css
│       ├── Contact.jsx / .css
│       ├── Footer.jsx / .css
│       └── SectionTitle.jsx / .css
```

## Run it in VS Code

1. **Unzip / open the folder** in VS Code (`File → Open Folder…`).
2. **Open a terminal** in VS Code: `` Ctrl+` `` (Windows/Linux) or `` Cmd+` `` (Mac).
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   This opens the site at `http://localhost:3000` and hot-reloads on save.
5. **Build for production** when you're ready to deploy:
   ```bash
   npm run build
   ```
   Output goes to the `dist/` folder.
6. **Preview the production build locally** (optional):
   ```bash
   npm run preview
   ```

> Requires Node.js 18+ (Node 20 LTS recommended). Check with `node -v`.

## Customizing content

Almost all copy lives at the top of each component file as a small array or set of
constants (e.g. `COUNTRIES` in `Countries.jsx`, `SERVICES` in `Services.jsx`,
`TESTIMONIALS` in `Testimonials.jsx`) — edit those arrays rather than hunting through JSX.

- **Logo**: replace `src/assets/logo.png` with your final logo file (same name, or update
  the `import logo from '../assets/logo.png'` paths in `Header.jsx` and `Footer.jsx`).
- **Colors / fonts**: all design tokens are CSS variables at the top of `src/index.css`
  (`--color-primary`, `--color-gold`, `--font-display`, etc.) — change once, applies everywhere.
- **Images**: country/news images currently pull from Unsplash placeholder URLs. Swap
  in your own licensed photography before going live — put files in `src/assets/` and
  `import` them the same way the logo is imported.
- **Contact form**: `Contact.jsx` currently only logs the submission to the console
  (`handleSubmit`). Wire it to a real service before launch — easiest options are
  [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or your own
  backend API endpoint.

## Deploying to Vercel via GitHub

1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Alpha Global Educare site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo.
3. Vercel auto-detects Vite. Confirm these build settings (defaults are already correct):
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
4. Click **Deploy**. Every push to `main` will auto-redeploy.
5. Once live, add your custom domain under **Project → Settings → Domains** and point
   your domain's DNS to Vercel as instructed there.

## Common issues

| Issue | Fix |
|---|---|
| Logo not showing | Confirm `src/assets/logo.png` exists and the import path matches |
| Port already in use | Change `server.port` in `vite.config.js`, or run `npm run dev -- --port 3001` |
| Images not loading | Check your internet connection (Unsplash/flagcdn/randomuser images are CDN-hosted) or swap in local assets |
| Mobile menu not opening | Hard refresh (`Ctrl/Cmd + Shift + R`) — a stale service worker/cache can occasionally hide the hamburger button |
| Styles look unstyled after build | Make sure you're serving `dist/` (via `npm run preview` or your host), not opening `index.html` directly from disk |

## License
© 2026 Alpha Global Educare. All Rights Reserved.
