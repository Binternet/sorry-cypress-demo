const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sorry-cypress',
  e2e: {
    baseUrl: 'http://localhost:1234',
    supportFile: 'cypress/support/index.js'
  }
});
