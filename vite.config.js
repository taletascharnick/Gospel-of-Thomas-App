import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Gospel of Thomas',
        short_name: 'Gospel of Thomas',
        description: 'A contemplative space for deep reflection on the sayings of the Gospel of Thomas',
        theme_color: '#2c1810',
        background_color: '#faf8f5',
        display: 'standalone',
        scope: '/Gospel-of-Thomas-App/',
        start_url: '/Gospel-of-Thomas-App/',
        icons: [
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}']
      }
    })
  ],
  // Must exactly match your GitHub repository name (case-sensitive)
  base: '/Gospel-of-Thomas-App/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist'
  }
})
