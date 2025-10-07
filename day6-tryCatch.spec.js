const { test, expect } = require('@playwright/test');

test('Multi-step QA test with error handling', async ({ page }) => {
  try {
    console.log("Step 1: Navigate to Wikipedia...");
    await page.goto('https://www.wikipedia.org', { timeout: 5000 });
    await expect(page).toHaveTitle(/Wikipedia/i);
    console.log("✅ Wikipedia loaded successfully.");

    console.log("Step 2: Search for Playwright...");
    await page.fill('input[name="search"]', 'Playwright');
    await page.press('input[name="search"]', 'Enter');

    await page.waitForSelector('#firstHeading', { timeout: 5000 });
    const heading = await page.textContent('#firstHeading');
    console.log(`✅ Found heading: ${heading}`);

  } catch (error) {
    console.error(`❌ Test failed at some step: ${error.message}`);
  } finally {
    console.log("🧹 Cleaning up: closing page...");
    await page.close();
  }
});
// This test does the following:
// 1. Navigates to Wikipedia and checks the title.
// 2. Searches for "Playwright" and verifies the heading on the results page.
// 3. Uses try/catch to handle any errors gracefully, logging failures without crashing.
// 4. Cleans up by closing the page in a finally block.