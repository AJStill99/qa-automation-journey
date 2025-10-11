const { test, expect } = require('@playwright/test');
const { navigateToLogin, safePerformLogin } = require('../utils/testing_functions.js');

test.setTimeout(60000); // 1 minute per test if your site is slow

// 🔹 Runs before every test — each test gets its own fresh `page`
test.beforeEach(async ({ page }) => {
  console.log('🌀 Starting new test: opening login page');
  await navigateToLogin(page);
  await safePerformLogin(page, 'student', 'Password123');
  console.log('✅ Logged in before test');
});

test('User can log in successfully', async ({ page }) => {
  // Verify the user lands on the success page
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.locator('.post-title')).toHaveText(/Logged In Successfully/);

  console.log('✅ Login test passed successfully!');
});

test('Welcome message is correct', async ({ page }) => {
  // Verify that the welcome message appears correctly
  await expect(page.locator('#welcomeMessage')).toHaveText('Welcome, student!');
  console.log('✅ Welcome message verified successfully!');
});

// 🔹 Optional cleanup — Playwright auto-closes the page, but this makes it explicit
test.afterEach(async () => {
  console.log('🧹 Closed page after test');
});