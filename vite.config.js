import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,  // Abre el navegador automáticamente cuando inicies el servidor de desarrollo
  },
  build: {
    outDir: 'dist',  // Carpeta de salida para archivos de producción
  },
});
