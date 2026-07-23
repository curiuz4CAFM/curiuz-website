# Curiuz Technologies — Website

Marketing site for **Curiuz Technologies** (business & technology consulting) and its product **Premyz**.

Built with **Next.js 15** (App Router), **React 19**, **Tailwind CSS**, and **lucide-react**. Deployed on **Vercel**, auto-deploying from `main`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint |

## Structure

```
app/
  page.tsx                    Home (hero + video, market-insight marquee, services, Premyz, contact CTA)
  services/page.tsx           Services index
  services/[slug]/page.tsx    4 service detail pages (SSG)
  products/premyz/page.tsx    Premyz product teaser (deep-links to premyz.com)
  contact/page.tsx            Contact page (form)
components/                   Header, footer, consulting sections, hero video, contact form
lib/site-data.ts             Content model (services, insights, testimonials, etc.)
public/                      Logos, imagery, hero video
```

## Configuration

**Contact form** — submissions use [Web3Forms](https://web3forms.com) (backend-less). Set an env var and redeploy:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=<your key>
```

On Vercel: Project → Settings → Environment Variables. Without it, the form shows a "please email us" fallback.

## Brand

Navy `#10233b` + ember `#e07a5f`, from the Curiuz Technologies logo. Premyz sections use blue/cyan to stay distinct under the parent brand.

<!-- deployed via GitHub → Vercel integration -->

_Auto-deploy test: 95db3bd_
