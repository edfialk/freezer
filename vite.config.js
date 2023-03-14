import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/freezer/",
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        icons: [
          {
            src: 'images/icons-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'images/icons-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/maskable_icon.png',
            sizes: '320x320',
            type: 'image/png',
            purpose: 'any maskable'
          },
        ],
        "theme_color": "#3c5e7e"
      }
    })
  ],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
