import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import react from '@vitejs/plugin-react'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@UI': resolve(currentDir, 'src/components/ui'),
      '@mocks': resolve(currentDir, 'src/mocks'),
      '@views': resolve(currentDir, 'src/views'),
      '@context': resolve(currentDir, 'src/context'),
      '@utils': resolve(currentDir, 'src/utils'),
      '@assets': resolve(currentDir, 'src/assets'),
      '@components': resolve(currentDir, 'src/components'),
    }
  }
})