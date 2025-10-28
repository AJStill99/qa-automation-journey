import { test, expect } from '@playwright/test';
import { handleAlert } from '../utils/testing_functions.js';

test('Modal and Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await handleAlert(page, 'I am a JS Alert');
    await page.click('text=Click for JS Alert');
    console.log("Modal handled!");
});

test.describe('Day 12 - Modals, Alerts, and Async UI', () => {
    // grouping related tests

  test('handles alerts and confirms', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Handle alert
    page.once('dialog', async dialog => {
      console.log('Alert message:', dialog.message());
      await dialog.accept(); // Click OK
    });
    // This sets a one time listener for the next dialog event

    await page.click('text=Click for JS Alert');
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    // This may be covered in the previous test, but included here for completeness
  });

  test('waits for dynamic content to load', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    await page.click('button'); // Start loading
    await page.locator('#finish h4').waitFor(); // Wait until element exists
    await expect(page.locator('#finish h4')).toHaveText('Hello World!');
    // When content loads, verifies the text
  });

  test('handles a custom modal', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc'); // or any page with modals

  // Simulate a modal appearing
  await page.evaluate(() => {
    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.innerHTML = '<button id="closeBtn">Close</button>';
    document.body.appendChild(modal);
  });

  // Verify modal is visible
  await expect(page.locator('#customModal')).toBeVisible();

  // Close it
  await page.click('#closeBtn');

  // Verify modal is gone
  await expect(page.locator('#customModal')).toBeHidden();
});


});

test('handles JS confirm box', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async popup => {
    // renamed variable to show they're named differently, but popup is just the object representing the 'dialog'
    // 'dialog' will tell Playwright which event to listen for
    // async dialog => { ... } is the callback function that will be called when the dialog appears
    console.log('Confirm message:', popup.message());
    await popup.dismiss(); // Click "Cancel"
  });

  await page.click('text=Click for JS Confirm');
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

