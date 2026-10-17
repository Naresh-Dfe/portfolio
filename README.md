# Naresh Kumar G — Portfolio

A responsive developer portfolio built with TanStack Start, React, TypeScript, Tailwind CSS, and Lucide. It includes project showcases, work history, education, direct contact options, and a hosted resume.

[Live portfolio](https://naresh-kumar-portfolio.nareshkumar48.workers.dev)

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run lint
npm test
npm run build:cloudflare
```

To preview the production Worker locally:

```sh
npm run preview:cloudflare
node scripts/verify-deployment.mjs http://127.0.0.1:8787
```

Stop the Worker preview before rebuilding on Windows to release its file handles.

## Project structure

- `src/data/portfolio.ts` — editable portfolio content and types.
- `src/components/portfolio/` — portfolio layout and project previews.
- `src/components/ui/` — shared button and dialog controls.
- `src/routes/` — file-based routes, page metadata, and error pages.
- `src/server.ts` — server entry, robots, and sitemap endpoints.
- `src/styles.css` — visual tokens and responsive styles.
- `src/test/` — routing, content, URL safety, and interaction tests.
- `public/` — favicon and local resume copy.
- `scripts/` — Cloudflare build and deployment verification.
- `.github/workflows/pipeline.yml` — branch validation and production deployment.
- `wrangler.jsonc` — Cloudflare Worker configuration.

## Content updates

Edit `src/data/portfolio.ts` for biography, skills, projects, employment, education, and contact details. Work history uses `YYYY-MM` dates; a null end date means the role is current. Project status distinguishes professional work, concepts, and work in progress. Each case study includes product context, ownership, engineering decisions, reliability/access considerations, delivered capabilities, and an optional simplified architecture map. Contribution highlights link directly to the relevant project ID.

Add screenshots under `public/projects/` and provide the image path, alt text, width, and height in the project record. Existing visuals are clearly labeled illustrations. Keep missing project URLs and GitHub links null until real destinations are available.

The resume button opens the hosted R2 PDF in a new tab, where visitors can save it. The original PDF is also retained in `public/resume/`. Email, phone, and LinkedIn are direct contact actions; there is no contact form or mail-delivery service.

## Configuration

Copy `.env.example` to `.env.local` for local settings. `VITE_SITE_URL` is the public HTTPS production origin used for canonical metadata, robots, and sitemap. Without it, the page is not indexed and sitemap returns 503. Configure `SITE_URL` in GitHub repository variables for production builds.

No application secrets are required. The deployment pipeline uses a Cloudflare API token stored in GitHub Actions secrets. Never commit tokens or local environment files.

## Git and deployment

Changes go to `dev` first. Open a pull request from `dev` to `main` when the checks pass. Merging into `main` triggers Cloudflare production deployment.

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch conventions and [DEPLOYMENT.md](DEPLOYMENT.md) for repository settings, Cloudflare credentials, custom domains, and troubleshooting.

The existing `npm run build` and `npm run preview` commands remain available for the Vercel target. The build configuration retains the template's shared adapter to preserve its plugin and routing behavior; do not add a second TanStack or Nitro plugin.
