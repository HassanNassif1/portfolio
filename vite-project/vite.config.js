import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/'],  // Add more routes if you have them
      renderer: '@vitejs/plugin-react',
    })
  ]
})