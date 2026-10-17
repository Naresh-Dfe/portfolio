import assert from "node:assert/strict";

const origin = new URL(process.argv[2] ?? "http://127.0.0.1:8787").origin;
const request = (path, options = {}) =>
  fetch(`${origin}${path}`, { ...options, signal: AbortSignal.timeout(20000) });
const homepage = await request("/");
assert.equal(homepage.status, 200, "Homepage failed");
const html = await homepage.text();
assert.ok(html.includes("Naresh Kumar G"), "Portfolio identity missing");
for (const section of ["about", "skills", "projects", "experience", "contact"]) {
  assert.ok(html.includes(`id="${section}"`), `Missing ${section} anchor`);
}
assert.ok(!html.includes("Send a message"), "Removed contact form unexpectedly rendered");
assert.ok(html.includes("nareshkumarg984@gmail.com"), "Email missing");
assert.ok(
  html.includes("https://www.linkedin.com/in/nareshkumar48"),
  "LinkedIn destination missing",
);
assert.ok(
  html.includes("https://pub-cd02c25bf25a476d9698eae9ef7d371e.r2.dev/NareshKumar_G_Resume.pdf"),
  "Hosted resume link missing",
);
const assets = [
  ...new Set([...html.matchAll(/(?:src|href)="(\/assets\/[^"?]+)/g)].map((match) => match[1])),
];
assert.ok(assets.length > 0, "No built assets found");
for (const asset of ["/favicon.svg", ...assets])
  assert.equal((await request(asset)).status, 200, `Asset failed: ${asset}`);
const pdf = await request("/resume/NareshKumar_G_Resume.pdf");
assert.equal(pdf.status, 200, "Local resume asset failed");
assert.equal((await pdf.text()).slice(0, 5), "%PDF-", "Invalid resume PDF asset");
assert.equal(
  (await request("/not-a-real-portfolio-page")).status,
  404,
  "Missing page should return 404",
);
assert.equal(
  (await request("/api/contact")).status,
  404,
  "Removed contact endpoint should return 404",
);
assert.equal((await request("/robots.txt")).status, 200, "Robots endpoint failed");
const sitemap = await request("/sitemap.xml");
assert.ok([200, 503].includes(sitemap.status), "Sitemap endpoint failed");
console.log(
  `Verified ${origin}: homepage, section anchors, contact links, hosted resume link, ${assets.length + 1} static assets, local PDF, 404, robots and sitemap.`,
);
