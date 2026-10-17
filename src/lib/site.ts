export function siteOrigin(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      url.hostname === "localhost" ||
      url.hostname.endsWith(".localhost") ||
      url.hostname === "127.0.0.1"
    )
      return null;
    return url.origin;
  } catch {
    return null;
  }
}

export const productionOrigin = siteOrigin(import.meta.env["VITE_SITE_URL"]);

export function safeExternalUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}
