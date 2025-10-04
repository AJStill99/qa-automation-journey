const { test, expect } = require('@playwright/test');

test('visit example.com', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    expect(title).toBe('Wikipedia');
});
