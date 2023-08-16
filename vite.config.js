import { fileURLToPath, URL } from 'node:url'

import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }, 
  base: '/portfolio/',
  // import des images

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'src/page/contact.html'),
        blog: resolve(__dirname, 'src/page/blog.html'),
        projet: resolve(__dirname, 'src/page/projet.html'),
        entreprises: resolve(__dirname, 'src/page/entreprises.html'),
      }
    }
  }
})
