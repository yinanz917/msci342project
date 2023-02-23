<<<<<<< HEAD
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
=======
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});

>>>>>>> 373643209821d283be92a4c7eff7a505d67f5b32
