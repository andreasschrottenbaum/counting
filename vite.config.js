import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://vite.dev/config/
export default defineConfig({
  base: '/counting/',
  build: {
    outDir: 'dist',
  },
  plugins: [svelte()],
})
