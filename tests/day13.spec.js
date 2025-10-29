import { test, expect } from '@playwright/test';

test.describe('Day 13 - File Uploads', () => {
    test('upload a single file', async ({ page }) => {
        await page.goto('https://example.com/upload');

        // Select the file input and attach a file
        const filePath = './files/sample.txt';
        await page.setInputFiles('input[type="file"]', filePath);

        // Submit the form if required
        await page.click('button#submit');

        // Verify upload success
        await expect(page.locator('#success-message')).toHaveText('File uploaded successfully');
    });

    test('upload multiple files', async ({ page }) => {
        await page.goto('https://example.com/upload');

        // Select the file input and attach a file
        const filePath = './files/sample.txt';
        await page.setInputFiles('input[type="file"]', [filePath, './files/sample2.txt']);
        // Can clear this input with an empty array []

        // Submit the form if required
        await page.click('button#submit');

        // Verify upload success
        await expect(page.locator('#success-message')).toHaveText('File uploaded successfully');
    });

    test('download a file', async ({ page, browserName }) => {
        await page.goto('https://example.com/download');

        // listen for the download event 
        const [ download ] = await Promise.all([
            page.waitForEvent('download'),
            // Trigger the download
            page.click('#download-button')
        ]);

        // Save the downloaded file to a specific path
        const downloadPath = './downloads/myFile.txt';
        await download.saveAs(downloadPath);

        // Verify the download
        const fileExists = require('fs').existsSync(Path);
        expect(fileExists).toBe(true);

        // Save to a specific location if needed
        await download.saveAs('./downloads/myFile.txt');

        expect(download.suggestedFilename()).toBe('myfile.txt');
    });
});
