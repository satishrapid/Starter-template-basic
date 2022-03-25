import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    'global': {},
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeModulesPolyfills(),
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),

      ]
    }
  },
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
    },
  },
  build: {
    brotliSize: false,
    manifest: false,
    minify: 'terser',
    outDir: 'dist',
    sourcemap: 'inline',

    rollupOptions: {
      output: {
        assetFileNames: 'clientlib-site/resources/[ext]/[name][extname]',
        chunkFileNames: 'clientlib-site/resources/chunks/[name].[hash].js',
        entryFileNames: 'clientlib-site/resources/js/[name].js',
      },
    },
  },
})
