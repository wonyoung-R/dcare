import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check if we're using a custom domain
  const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';
  
  // For GitHub Pages with custom domain, use '/' as the base path
  // For GitHub Pages without custom domain, use '/dcare/' in production
  // For local development, use '/'
  const base = isCustomDomain ? '/' : (mode === 'production' ? '/dcare/' : '/');
  
  console.log(`Vite config: mode=${mode}, base=${base}, isCustomDomain=${isCustomDomain}`);
  
  return {
    base,
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      // Ensure WebP images are properly handled
      assetsInlineLimit: 0, // Don't inline any assets
    },
  };
}); 