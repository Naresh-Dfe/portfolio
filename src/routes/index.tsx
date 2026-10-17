import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/portfolio";
import { portfolio } from "@/data/portfolio";
import { productionOrigin, safeExternalUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: portfolio.seo.title },
      { name: "description", content: portfolio.seo.description },
      { property: "og:title", content: portfolio.seo.title },
      { property: "og:description", content: portfolio.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: portfolio.name },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: portfolio.seo.title },
      { name: "twitter:description", content: portfolio.seo.description },
      ...(productionOrigin
        ? [{ property: "og:url", content: `${productionOrigin}/` }]
        : [{ name: "robots", content: "noindex, nofollow" }]),
    ],
    links: productionOrigin ? [{ rel: "canonical", href: `${productionOrigin}/` }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: portfolio.name,
          jobTitle: portfolio.role,
          ...(productionOrigin ? { url: `${productionOrigin}/` } : {}),
          sameAs: [portfolio.linkedin, portfolio.github].map(safeExternalUrl).filter(Boolean),
        }).replace(/</g, "\\u003c"),
      },
    ],
  }),
});
