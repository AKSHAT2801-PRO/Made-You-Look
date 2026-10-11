# Made You Look by Samiksha: website

React + Vite landing page for the nail art studio.

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev        # local site at http://localhost:5173
npm run build      # production files in /dist
npm run preview    # preview the production build
```

## Responsive layout

The CSS in `src/index.css` is mobile-first, with larger-screen layouts added at
640px and 900px. The page includes a responsive navigation menu, a gallery that
adapts to screen size, and a persistent WhatsApp booking button.

## Make it yours

Everything you need to change lives in two files:

| File | What to edit |
| --- | --- |
| `src/config.js` | City, Instagram URL and WhatsApp number |
| `src/data.js` | Price-menu services, prices and gallery entries |

Booking links open WhatsApp using the country code and phone number in
`src/config.js`:

```js
whatsappNumber: '917021069856', // country code + number, digits only
```

### Add your photos

1. Put your images in `public/gallery/` (for example `look-01.jpg`).
2. In `src/data.js`, add `image: '/gallery/look-01.jpg'` to a gallery entry.

The hero images are imported from the project root. The About portrait and
social QR codes are served from `public/`.

## Brand

| Role | Value |
| --- | --- |
| Hot pink (large type, accents) | `#FF0A54` |
| Deep pink (buttons, small text) | `#E5004B` |
| Cream background | `#FDF8EC` |
| Gold sparkle | `#FFD21A` |
| Body text | `#4A0E24` |
| Display font | Bodoni Moda |
| Script font | Yellowtail |
| Body font | Jost |

Colours and fonts are CSS variables at the top of `src/index.css`.

## Project structure

```
src/
  App.jsx             page order
  config.js           studio details
  data.js             services and gallery
  index.css           all styles
  components/         Header, Hero, Strip, Services, Gallery, About, Booking, Footer, Sparkle
```

## Deploy

This project is configured for Vercel in `vercel.json`. It is a static Vite
site; `npm run build` creates the production site in `dist/`.

### Deploy with the Vercel dashboard

1. Put this website in its own Git repository and push it to GitHub, GitLab, or
   Bitbucket. Use the folder containing `package.json` as the repository root.
2. In Vercel, choose **Add New → Project**, import that repository, and deploy.
   Vercel reads the project settings from `vercel.json`.
3. In the Vercel project, open **Settings → Domains** and add
   `madeyoulookbysamiksha.in`.
4. Follow the DNS records Vercel displays at your domain registrar. Wait for
   Vercel to verify the domain and issue its TLS certificate.

### Deploy with the Vercel CLI

From the folder containing `package.json`, run `npx vercel` and follow the
prompts to sign in and link or create the Vercel project. When ready to publish
the production version, run `npx vercel --prod`.

You can verify a production build locally first with `npm run build` and
`npm run preview`.
