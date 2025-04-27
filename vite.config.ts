import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/myportfolio/"
})


// package.json
// "homepage": "http://ktgangoso.github.io/PortfolioReactJS",
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"
