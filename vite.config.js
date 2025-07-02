import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    base: process.env.VITE_BASE_PATH ||"/SkinCare",
     server: {
    host: true,         // ← This allows access from network / ngrok
    port: 5173,         // (optional, set to match your ngrok port)
    strictPort: true,   // (optional, avoids auto-changing port)
    allowedHosts: [
      '73cc-2409-40d1-ac-685d-64d8-fb86-9413-b130.ngrok-free.app'
    ]
  }
})
