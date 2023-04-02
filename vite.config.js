import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'primereact',
            'primeicons',
            'primeflex',
            'react-icons',
            'react-lazy-load-image-component',
            'react-pdf',
            'three',
            'typewriter-effect',
            'web-vitals',
          ],
        },
      },
    },
  },
});
