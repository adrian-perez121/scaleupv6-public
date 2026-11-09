import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { EVENT_TITLE } from './src/config.js';

export default defineConfig(() => {
    return {
      // GitHub Pages serves this repo from /scaleupv6-public/, not from the domain root
      base: '/scaleupv6-public/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['.ngrok-free.app', '.ngrok.app'] // For localhost sharing purposes
      },
      plugins: [
        react(),
        // Fills %EVENT_TITLE% in index.html from src/config.js
        {
          name: 'event-title-html',
          transformIndexHtml: (html) => html.replace(/%EVENT_TITLE%/g, EVENT_TITLE),
        },
      ]
    };
});
