import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const result = spawnSync(
  process.execPath,
  [fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url)), "build"],
  {
    cwd: root,
    env: { ...process.env, NITRO_PRESET: "cloudflare-module" },
    stdio: "inherit",
  },
);
if (result.error) throw result.error;
process.exit(result.status ?? 1);
