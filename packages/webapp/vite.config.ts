import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import esbuild from 'esbuild';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'load-js-files-as-jsx',
      async load(id) {
        if (!id.match(/node_modules\/(?:react-native-reanimated)\/.*.js$/)) {
          return;
        }

        const file = await fs.promises.readFile(id, 'utf-8');
        return esbuild.transformSync(file, { loader: 'jsx' });
      }
    }
  ],
  define: {
    global: {}
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
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
