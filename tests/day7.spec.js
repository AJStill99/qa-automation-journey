const { test, expect } = require('@playwright/test');
const { navigateToLogin, performLogin } = require('../testing_functions');

test('Visit example page and fill inputs', async ({ page }) => {
    try {
        await page.goto('https://example.com');
    } catch(error) {
        console.error(`❌ Error loading example.com: ${error.message}`);
        return; // Exit the test if navigation fails
    }
    // Try/catch block to handle navigation errors gracefully

    //Title Handling
    const title = await page.title();
    // Capturing title of the page in a variable to use in assertion
    console.log(`Page title is: ${title}`);
    await expect(title).toBe('Example Domain');
    // Goes to site, uses an assertion to check the title

    // Filling in login form
    performLogin(page, 'testuser', 'testpassword');
    // Using the performLogin function to log in

    await page.click('#loginbutton');
    // login by selecting elements by their IDs, second argument is the value to input

    await expect(page).toHaveURL(/dashboard/);
    // Asserts that the URL contains "dashboard" after login

    await expect(page.locator('#welcomeMessage')).toHaveText('Welcome, testuser!');
    // Asserts that the welcome message is correct after login


});