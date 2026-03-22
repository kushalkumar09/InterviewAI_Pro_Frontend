import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This allows Render's URL to access the app
    allowedHosts: [
      'interviewai-pro-frontend.onrender.com', 
      // You can also add '.onrender.com' to allow any render subdomain
    ]
  },
  preview: {
    allowedHosts: [
      'interviewai-pro-frontend.onrender.com'
    ]
  }
})