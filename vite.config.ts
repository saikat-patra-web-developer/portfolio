import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      // Windows locks image files mid-write (e.g. saving into public/assets/images).
      // chokidar then fails to fs.watch that path with EBUSY/EPERM and emits an
      // 'error' event that nothing in Vite listens for — Node treats that as an
      // uncaught exception and kills the whole dev server. Log and move on so a
      // locked asset can never take the server down.
      name: 'watcher-error-resilience',
      configureServer(server) {
        server.watcher.on('error', (error: NodeJS.ErrnoException) => {
          const transient = error.code === 'EBUSY' || error.code === 'EPERM'
          const target = error.path ? ` on ${error.path}` : ''
          if (transient) {
            console.warn(`[vite] ignored transient file lock while watching${target}`)
          } else {
            console.error(`[vite] watcher error${target}:`, error.message)
          }
        })
      },
    },
  ],
})
