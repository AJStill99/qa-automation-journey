const { expect } = require('@playwright/test');
const fs = require('fs');

// Utility helper functions for Playwright

async function navigateToLogin(page) {
  await page.goto('https://example.com/login');
  await expect(page).toHaveURL(/.*login/);
  console.log('🧭 Navigated to login page successfully');
}

async function performLogin(page, username, password) {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
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
  console.log('✅ Login verification passed successfully!');
}

async function safePerformLogin(page, username, password) {
  try {
    await performLogin(page, username, password);
  } catch (error) {
    const timeStamp = new Date().toISOString().replace(/[:.]/g, '-');
    const dir = 'test-results/Failing_Images';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const filePath = `${dir}/Fail_Img_${timeStamp}.png`;
    console.error('❌ Error during login process:', error);
    // Moved to here to ensure directory exists before saving
    // Avoids any duplicate images
    await page.screenshot({ path: filePath });
    console.log(`📸 Screenshot saved to: ${filePath}`);
    throw error;
  }
}

module.exports = { 
  navigateToLogin, 
  performLogin, 
  verifyPageTitle, 
  verifyLoginSuccess, 
  safePerformLogin
};
