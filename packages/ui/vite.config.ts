import path from 'node:path';
import { resolve } from 'path';
import { InlineConfig, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: path.resolve(__dirname, 'src'),
      outDir: resolve(__dirname, 'dist')
    })
  ],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-native',
        'react-native-reanimated',
        'react/jsx-runtime',
        '@shopify/react-native-skia',
        'react-native-reanimated',
        'graphql',
        '@apollo/client'
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react-native': 'ReactNative',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'ui',
      fileName: (format, entryName) => `${entryName}-${format}.js`,
      formats: ['es']
    }
  }
} satisfies InlineConfig);
