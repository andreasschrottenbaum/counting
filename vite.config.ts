import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/counting/',
  build: {
    outDir: 'dist',
  },
  plugins: [svelte()],
})
