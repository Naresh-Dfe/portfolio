import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Select the deployment adapter without changing the development server.
  nitro: {
    preset: process.env["NITRO_PRESET"] === "cloudflare-module" ? "cloudflare-module" : "vercel",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
