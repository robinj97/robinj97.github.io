import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  optimizeDeps: {
    include: ['vue'] // Ensure vue is bundled properly
  }
})
