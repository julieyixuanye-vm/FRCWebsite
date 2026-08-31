import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/FRCWebsite/, so assets need the repo
// name as a base. Override with BASE_PATH=/ when deploying to a custom domain.
const base = process.env.BASE_PATH ?? '/FRCWebsite/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048,
  },
})
