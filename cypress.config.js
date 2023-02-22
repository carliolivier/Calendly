const { defineConfig } = require('cypress');

module.exports = defineConfig({
 
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});

