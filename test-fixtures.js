const { test: base } = require('@playwright/test');
const { navigateToLogin, safePerformLogin } = require('./utils/testing_functions.js');

// use test: base as it grabs playwright's base test so we can extend it
// Import helper functions

const test = base.extend({
    loggedInPage: async ({ browser }, use) => {
        const page = await browser.newPage();
        await navigateToLogin(page);
        await safePerformLogin(page, 'testuser', 'password123');
        await use(page);
        await page.close();
    },

    testFixture: async ({ page }, use) => {
        console.log("Before each")
        await use();
        console.log("After each")
        await page.close;
    }
})

module.exports = { test };