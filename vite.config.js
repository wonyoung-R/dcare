import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // For GitHub Pages, use '/dcare/' as the base path in production
  // For local development, use '/'
  const base = mode === 'production' ? '/dcare/' : '/';
  
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