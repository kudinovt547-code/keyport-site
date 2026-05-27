import { defineConfig } from 'vite';
import { resolve } from 'node:path';

// Base path for GitHub Pages — project site path
const BASE = process.env.VITE_BASE ?? '/keyport-site/';

export default defineConfig({
  base: BASE,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        developer: resolve(__dirname, 'developer.html'),
        products: resolve(__dirname, 'products.html'),
        cases: resolve(__dirname, 'cases.html'),
        experience: resolve(__dirname, 'experience.html'),
        philosophy: resolve(__dirname, 'philosophy.html'),
        economy: resolve(__dirname, 'economy.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        feedback: resolve(__dirname, 'feedback.html'),
      },
    },
  },
});
