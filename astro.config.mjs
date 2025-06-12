import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  output: 'server', // Habilita SSR
  adapter: vercel(), // Adaptador para Vercel
  site: 'https://tudominio.vercel.app', 
  integrations: [], 
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});