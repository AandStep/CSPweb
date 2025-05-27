import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/CSPweb/",
  server: {
    host: "0.0.0.0",
    port: 8000,
    proxy: {
      // всё, что идёт на /api, будет редиректиться:
      "/api": {
        target: "http://87.228.96.2",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
