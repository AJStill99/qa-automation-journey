import { test, expect } from '@playwright/test';

const tableAndListHTML = `
  <table id="user-table">
    <tr><th>Name</th><th>Age</th></tr>
    <tr><td>Alice</td><td>30</td></tr>
    <tr><td>Bob</td><td>25</td></tr>
  </table>
  <ul id="user-list">
    <li>Alice</li>
    <li>Bob</li>
  </ul>
  <input type="text" id="filter-name" placeholder="Filter by name">
  <button id="filter-submit">Filter</button>
`;


test.describe('Day 14 - Tables and Lists', async () => {
    test.beforeEach(async ({ page }) => {
        await page.setContent(tableAndListHTML);
    });

    test('verify table contents', async ({ page }) => {
        // Locate table rows
        const rows = page.locator('#user-table tr').nth(1); // first row after header;
        await expect(rows).toHaveText(/Alice/);
    })

    test('Looping through table rows', async ({ page }) => {
        const allRows = page.locator('#user-table tr');
        const rowCount = await allRows.count();

        for(let i = 1; i < rowCount; i++) {
            const rowText = await allRows.nth(i).textContent();
            // Gets the row text before pasting it to the console log each loop
            console.log(`Row ${i}: ${rowText}`);
            // expect(rowText).toContain('Alice'); // Example assertion
            if (rowText.includes('Alice')) {
                expect(rowText).toContain('Alice');
            } else if (rowText.includes('Bob')) {
                expect(rowText).toContain('Bob');
    }
        }
    })

    test('verify list items', async ({ page }) => {
        const listItems = page.locator('#user-list li');
        await expect(listItems).toHaveCount(2);

        await expect(listItems.filter({ hasText: 'Bob' })).toHaveCount(1);
        // Verify that there is one list item containing 'Bob'
        // Use filter hasText to find specific item without relying on index/position

    });

    test('Filtering and Sorting tables', async ({ page }) => {
        await page.fill('#filter-name', 'Alice');
        await page.click('#filter-submit');

        //verify filtered results
        const filteredRows = page.locator('#user-table tr').nth(1);
        await expect(filteredRows).toHaveText(/Alice/);
    });

})