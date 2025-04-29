import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
      // changeOrigin: true,
      // secure: false,
    },
  },

  plugins: [react(), tailwindcss()],
});
