import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' for Vercel, '/talk-to-the-wind/' for GitHub Pages
const base = process.env.VERCEL ? '/' : '/talk-to-the-wind/'

export default defineConfig({
  plugins: [react()],
  base: base,
})
