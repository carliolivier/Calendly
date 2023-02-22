const { defineConfig } = require('cypress')
module.exports = defineConfig( {
  defaultCommandTimeout: 3000,
  e2e: {
    chromeWebSecurity: false,
    },
  });