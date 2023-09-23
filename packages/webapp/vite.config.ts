import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {}
  },
  resolve: {
    alias: [
      { find: /^react-native\/(.*)/, replacement: 'react-native-web/$1' },
      {
        find: /^react-native$/,
        replacement: 'react-native-web'
      }
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: ['.web.js', '.js', '.ts']
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
