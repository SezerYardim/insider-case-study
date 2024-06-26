import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
      },
      {
        find: "@src",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
