import { test, expect } from '@playwright/test';

test.describe('Day 14 - Tables and Lists', async () => {
    test('verify table contents', async ({ page }) => {
        await page.goto('https://example.com/users');

        // Locate table rows
        const rows = page.locator('#user-table tr').nth(1); // first row after header;
        await expect(rows).toHaveText(/Alice/);
    })

    test('Looping through table rows', async ({ page }) => {
        await page.goto('https://example.com/users');

        const allRows = page.locator('#user-table tr');
        const rowCount = await allRows.count();

        for(let i = 1; i < rowCount; i++) {
            const rowText = await allRows.nth(i).textContent();
            // Gets the row text before pasting it to the console log each loop
            console.log(`Row ${i}: ${rowText}`);
            expect(rowText).toContain('Alice'); // Example assertion
        }
    })

    test('verify list items', async ({ page }) => {
        await page.goto('https://example.com/users');

        const listItems = page.locator('#user-list li');
        await expect(listItems).toHaveCount(2);

        await expect(listItems.filter({ hasText: 'Bob' })).toHaveCount(1);
        // Verify that there is one list item containing 'Bob'
        // Use filter hasText to find specific item without relying on index/position

    });

    test('Filtering and Sorting tables', async ({ page }) => {
        await page.goto('https://example.com/users');

        await page.fill('#filter-name', 'Alice');
        await page.click('#filter-submit');

        //verify filtered results
        const filteredRows = page.locator('#user-table tr');
        await expect(filteredRows).toHaveText(/Alice/);
    });

})