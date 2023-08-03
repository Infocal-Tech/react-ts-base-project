import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mui/material': '@mui/material/v5',
      '@mui/lab': '@mui/lab/v5',
      '@mui/icons-material': '@mui/icons-material/v5',
      '@mui/system': '@mui/system/v5'
    }
  }
})
