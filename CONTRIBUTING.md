# Development workflow

Use Node.js 24 and npm with the committed `package-lock.json`.

1. Make changes on `dev` (or open a feature pull request into `dev`).
2. Run `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build:cloudflare`.
3. Push `dev` and confirm the CI checks pass.
4. Open a pull request from `dev` into `main`.
5. Merge after review and successful checks. The production workflow deploys `main` to Cloudflare Workers.
6. Merge `main` back into `dev` before the next release to keep both branches aligned.

Preserve published Git history. Use merge commits rather than rebasing, squashing, amending, or force-pushing published commits.

## Application conventions

- Retain TanStack Start and file-based routing.
- Edit portfolio content in `src/data/portfolio.ts`.
- Keep portfolio components in `src/components/portfolio` and visual tokens in `src/styles.css`.
- Preserve section-anchor navigation and index-route SEO metadata.
- Missing destinations should explain their availability rather than use fake links.
- Deploy from source through the pipeline; do not commit build output, credentials, or local environment files.

## Repository settings

Protect `main` with a pull request requirement, at least one approval where practical, and the required `Quality checks` status check. Disable force pushes and branch deletion. Availability of protection rules for private repositories depends on the GitHub plan.

Set `dev` as the default branch for ongoing development. Keep the production deployment trigger on `main`.
