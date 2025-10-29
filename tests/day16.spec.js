import { test, expect } from '@playwright/test';

test.describe('Day 16 - Browser Contexts & Multiple Pages', () => {

  // Test: Multiple tabs in the same context
  test('handle multiple tabs', async ({ browser }) => {
    const context = await browser.newContext(); // isolated context
    const page1 = await context.newPage();

    // Set content for page 1
    await page1.setContent('<h1>Main Page</h1><button id="open-tab">Open Tab</button>');

    // Open a new tab when button clicked
    const [page2] = await Promise.all([
      page1.waitForEvent('popup'),  // wait for new tab
      page1.evaluate(() => {
        // Simulate opening a new window
        window.open("", "_blank");
      })
    ]);

    await page2.setContent('<h1>New Tab Page</h1>');

    // Assertions
    await expect(page1.locator('h1')).toHaveText('Main Page');
    await expect(page2.locator('h1')).toHaveText('New Tab Page');
  });

  // Test: Separate browser contexts (simulate two users)
  test('two users in separate contexts', async ({ browser }) => {
    // User 1 context
    const user1Context = await browser.newContext();
    const user1Page = await user1Context.newPage();
    await user1Page.setContent('<div id="welcome">Welcome, Alice</div>');

    // User 2 context
    const user2Context = await browser.newContext();
    const user2Page = await user2Context.newPage();
    await user2Page.setContent('<div id="welcome">Welcome, Bob</div>');

    // Assertions
    await expect(user1Page.locator('#welcome')).toHaveText('Welcome, Alice');
    await expect(user2Page.locator('#welcome')).toHaveText('Welcome, Bob');
  });

  // Test: Popups
  test('handle popup window', async ({ page }) => {
    await page.setContent(`
      <button id="open-popup">Open Popup</button>
    `);

    const [popup] = await Promise.all([
      page.waitForEvent('popup'), // waits for new window
      page.evaluate(() => {
        window.open("", "popup", "width=400,height=400"); // open popup
      })
    ]);

    await popup.setContent('<h1>Popup Content</h1>');
    await expect(popup.locator('h1')).toHaveText('Popup Content');
  });

});
