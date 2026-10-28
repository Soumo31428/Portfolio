import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['.monkeycode-ai.live'],
  },
  preview: {
    host: true,
    allowedHosts: ['.monkeycode-ai.live'],
  },
  resolve: {
    alias: {
      'react-icons/si': fileURLToPath(
        new URL('./node_modules/react-icons/si/index.js', import.meta.url)
      ),
      'react-icons/tb': fileURLToPath(
        new URL('./node_modules/react-icons/tb/index.js', import.meta.url)
      ),
    },
  },
  base: './',
  build: {
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {},
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
