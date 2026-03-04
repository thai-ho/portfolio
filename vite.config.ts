import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@v1": fileURLToPath(new URL("./v1/src", import.meta.url)),
      "@v2": fileURLToPath(new URL("./v2/src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
  },
});
