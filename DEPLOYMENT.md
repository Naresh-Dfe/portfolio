# Deployment

Production deployments run from the `main` branch through GitHub Actions. `dev` is the development branch and is checked without publishing production changes.

## Initial repository setup

1. Create an empty GitHub repository and connect this checkout to it.
2. Push the initial source to `dev` first, then promote it to `main` without rewriting published history.
3. Set `dev` as the default development branch.
4. In Settings → Secrets and variables → Actions, add:

| Type | Name | Value |
| --- | --- | --- |
| Secret | `CLOUDFLARE_API_TOKEN` | Cloudflare API token authorized to deploy Workers in the intended account. |
| Variable | `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account ID from the account dashboard. |
| Variable | `SITE_URL` | The actual production HTTPS origin, without a path or trailing slash. |

The registered account namespace is `nareshkumar48.workers.dev`; the configured Worker name is `naresh-kumar-portfolio`. The intended production origin is `https://naresh-kumar-portfolio.nareshkumar48.workers.dev`. This is a deployment target, not confirmation of a successful deployment.

Create the API token in Cloudflare → My Profile → API Tokens → Create Token, using the Workers deployment template scoped to the intended account. Store it directly in GitHub; do not paste it into source files or commit it. Local Wrangler OAuth credentials are not a replacement for a CI API token.

Production is restricted to `main` by the workflow condition. The workflow uses repository secrets so it also works with private repositories on plans without deployment environments. Where supported by the GitHub plan, optionally add a protected production environment and restrict it to `main`. Protect `main` with pull requests, required `Quality checks`, and disabled force pushes. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Pipeline behavior

On pushes to `dev` or `main`, and pull requests into either branch:

1. Install dependencies from `package-lock.json` using Node.js 24.
2. Run TypeScript, lint, and tests.
3. Build the Cloudflare Worker and assets.

On a successful push to `main`, the production job builds with `SITE_URL`, publishes the Worker using the official Cloudflare Wrangler action, and runs HTTP checks against the production origin. Pull requests and `dev` never deploy production.

For normal releases, push `dev`, wait for checks, open a `dev` → `main` pull request, and merge it. The resulting `main` push deploys automatically. The GitHub Actions page shows validation and deployment logs.

## Cloudflare configuration

The application retains TanStack Start and Nitro. The Cloudflare build uses Nitro's `cloudflare-module` preset. `wrangler.jsonc` defines the Worker name, compatibility date, Node compatibility, and observability. Nitro generates the entry point, module upload rules, and `ASSETS` binding in `.output/server/wrangler.json`.

Only the public `VITE_SITE_URL` value is needed by the application. The workflow supplies it from `SITE_URL` at build time. Email, phone, LinkedIn, and the hosted R2 resume do not need server credentials. There is no mail endpoint, database, or private application API.

## Local deployment tools

The following commands are available for previewing or manual recovery; normal production releases use the Git workflow:

```sh
npm run build:cloudflare
npm run preview:cloudflare
node scripts/verify-deployment.mjs http://127.0.0.1:8787
npm run cloudflare:login
npm run cloudflare:whoami
npm run deploy:cloudflare
```

Stop `preview:cloudflare` before rebuilding on Windows. Do not commit `.output`, `.vercel`, `.wrangler`, `node_modules`, or local credentials.

## Custom domain

After the Worker is deployed, open it in the Cloudflare dashboard and use its Domains settings to add a custom domain. Follow Cloudflare's DNS and certificate instructions. Change the GitHub `SITE_URL` variable to that HTTPS origin and rerun the production workflow from `main`. Verify canonical metadata, robots, and sitemap on the new address.

## Troubleshooting

- Configuration check fails: add the required GitHub secret and variables.
- Cloudflare authorization fails: verify token permissions, account scope, and expiration.
- `workers.dev` registration fails: register an available account subdomain in Workers & Pages.
- Canonical/sitemap missing: configure `SITE_URL` and rerun the build and deployment.
- Windows build reports `EBUSY`: stop the local Worker preview and retry.
- Private repository protection settings unavailable: check the GitHub plan; CI/CD can still run without those protection features.

References: [Cloudflare GitHub Actions deployment](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/), [Nitro Workers adapter](https://nitro.build/deploy/providers/cloudflare), and [GitHub deployment controls](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments).
