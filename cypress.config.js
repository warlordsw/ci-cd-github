import { defineConfig } from 'cypress'
import { baseUrl } from './url_config'

export default defineConfig({
  e2e: {
    baseUrl: 'https://comfy-torrone-9aa30a.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'vite',
    },
  },
})
