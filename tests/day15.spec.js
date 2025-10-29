import { test, expect } from '@playwright/test';

// REGEX for flexible matching 

test('regex match example', async ({ page }) => {
  await page.setContent('<div id="welcome-message">Welcome, Alice123!</div>');

  // Match “Welcome, ” followed by any word/number
  await expect(page.locator('#welcome-message')).toHaveText(/Welcome, \w+/);

  // Partial text matching

  await expect(page.locator('#notification')).toContainText('successfully');

  const warning = page.locator('#warning');

  if (await warning.count() > 0) {
    await expect(warning).toHaveText(/deprecated/i); // case-insensitive match
  } else {
    console.log('No warning message present.');
  }

  const button = page.locator('#submit');

  await expect(button, 'Submit button should be visible').toBeVisible();

  const row = page.locator('#user-table tr').nth(1);

  await expect(row).toHaveText(/Alice/);
  await expect(row.locator('td')).toHaveCount(2);
  await expect(row.locator('td').first()).toHaveText('Alice');

});