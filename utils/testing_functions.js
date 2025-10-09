const { expect } = require('@playwright/test');

const timeStamp = new Date().toISOString().replace(/[:.]/g, '-'); // generate timestamp now
const filePath = `test-results/Failing_Images/Fail_Img_${timeStamp}.png`;

// This is known as a utility function file, full of helper functions

async function navigateToLogin(page) {
  await page.goto('https://example.com/login');
  await expect(page).toHaveURL(/.*login/);
  console.log('🧭 Navigated to login page successfully');
}

async function performLogin(page, username, password) {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');
}

async function verifyPageTitle(page, expectedTitle) {
  const title = await page.title();
  console.log(`Page title is: ${title}`);
  await expect(title).toBe(expectedTitle);
  console.log('✅ Page title verification passed successfully!');
}

async function verifyLoginSuccess(page, username) {
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('#welcomeMessage')).toHaveText(`Welcome, ${username}!`);
  // not sure on this one, how do I make page.locator dynamic?
  console.log('✅ Login verification passed successfully!');
}

module.exports = ( filePath, timeStamp ); // exporting variables too for use in other files
// Exporting variables so they can be used in other files
module.exports = { navigateToLogin, performLogin, verifyPageTitle, verifyLoginSuccess };
// Exporting functions so they can be used in other files

