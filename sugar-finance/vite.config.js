import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Sugar Finance frontend. Base is "./" so the build works on Cloudflare Pages
// and GitHub Pages subpaths without extra configuration.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
