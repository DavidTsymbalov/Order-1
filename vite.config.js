import { defineConfig } from "vite";

// GitHub Pages project site: https://davidtsymbalov178-crypto.github.io/Order-1/
const repoBase = "/Order-1/";
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGitHubPages ? repoBase : "./",
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    emptyOutDir: true,
  },
});
