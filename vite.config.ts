import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/70955354-a87f-4222-931c-2605d36e6b62/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5247,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5247,
    },
  },
})
