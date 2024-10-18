import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Configura @ como alias de la carpeta src
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
});
