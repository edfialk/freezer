import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
