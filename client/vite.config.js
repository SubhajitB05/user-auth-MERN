import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
     proxy:{
      '/user':'https://user-auth-mern-backend.vercel.app',
     }
  },
  plugins: [react()],
})
