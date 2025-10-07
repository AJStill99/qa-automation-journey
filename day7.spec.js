const { test, expect } = require('@playwright/test');

test('Visit example page and fill inputs', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    console.log(`Page title is: ${title}`);
    expect(title).toBe('Example Domain');
    // Goes to site, uses an assertion to check the title

    await page.fill('#username', 'testuser');
    await page.fill('#password', 'testpassword');
    await page.click('#loginbutton');
    // Fills in username and password fields, clicks login button
});