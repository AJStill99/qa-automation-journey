const { test, expect } = require('@playwright/test');

test('visit example.com', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    expect(title).toBe('Wikipedia');
});

// Test will do:
// 1. Navigate to example.com
// 2. Get the page title
// 3. Log the title to the console
// 4. Assert the title is "wikipedia"

// To run: npx playwright test day5-playwright.spec.js
