import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      global: 'window'
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        'react-native': 'react-native-web'
      }
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    plugins: [react()]
  }
})
