const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY:
      '0eb8c10df01cb2342a0ebe4f6e25ad1a56d490da7a22751db6c21932bea2c897P',
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});
