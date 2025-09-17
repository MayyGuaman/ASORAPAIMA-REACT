import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssPostCSS from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostCSS,
        autoprefixer,
      ],
    },
  },
})