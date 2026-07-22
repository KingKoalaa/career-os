import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Career OS — Vite configuration.
//
// Plugin responsibilities:
// - @vitejs/plugin-react: JSX/Fast Refresh support for the app/ directory.
// - vite-plugin-pwa: generates the service worker and web app manifest so
//   Career OS can be installed as a Progressive Web App.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Career OS',
        short_name: 'Career OS',
        description: 'A personal career operating system.',
        theme_color: '#111827',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: 'pwa-512x512.svg', sizes: '512x512', type: 'image/svg+xml' },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.{js,jsx}'],
  },
});
