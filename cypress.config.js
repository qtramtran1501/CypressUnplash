const { defineConfig } = require('cypress')
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { verifyDownloadTasks } = require('cy-verify-downloads');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      on('task', verifyDownloadTasks);
      on('task', { downloadFile });
      return config;
    },
    watchForFileChanges: false,
    video: false,
    baseUrl: 'https://unsplash.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    slowTestThreshold: 4000,
    specPattern: 'cypress/e2e/*/*.feature',
    supportFile: 'cypress/support/e2e.js',
    env: {
      apiUrl: 'https://api.unsplash.com',
      username: '',
      email: 'kaitoukid141206@gmail.com',
      password: 'Tu@n@nh123$%^.',
      token: 'Ky3jhxcpue7C8RyleDP6prD9_Hhq8CZgwTbAOMeDV2U'
    }
  },
});
