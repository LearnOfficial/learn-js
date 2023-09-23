import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {}
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: ['.web.tsx', '.web.jsx', '.web.js', '.tsx', '.ts', '.js']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts']
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
