import { test, expect } from '@playwright/test';
import { handleAlert } from '../utils/testing_functions.js';

test.describe('Day 12 challenge - Modals, Alerts, and Async UI', () => {
    // grouping related tests
    test('Alert test', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        // Listen for the alert pop up

        await handleAlert(page, 'I am a JS Alert');

        // await page.once('dialog', async alertTestBox => {
        //     console.log('Alert message:', alertTestBox.message());
        //     await alertTestBox.accept(); // Click OK
        // })

        await page.click('text=Click for JS Alert');
        console.log("Alert handled!");
    });

    test('Confirm test', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

        page.once('dialog', async confirmBox => {
            console.log('Confirm message:', confirmBox.message());
            await confirmBox.dismiss(); // Click "Cancel"
        });

        await page.click('text=Click for JS Confirm');
        console.log("Confirm handled!");
    });

    test('Prompt test', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.once('dialog', async promptBox => {
            console.log('Prompt message:', promptBox.message());
            await promptBox.accept('Playwright Test Input'); // Provide input and click OK
        });

        await page.click('text=Click for JS Prompt');
        await expect(page.locator('#result')).toHaveText('You entered: Playwright Test Input');
        console.log("Prompt handled!");
        console.log("Prompt input verified!");
    })

});



