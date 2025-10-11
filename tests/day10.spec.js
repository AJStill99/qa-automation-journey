const { test } = require('../test-fixtures.js');
// This 'test' is not Playwright's test, but our extended version from test-fixtures.js
const { verifyLoggedIn } = require('../utils/testing_functions.js');

test('User is logged in successfully', async ({ loggedInPage }) => {
    await verifyLoggedIn(loggedInPage, 'Logged In Successfully', '.post-title');
});

test('Welcome message is correct', async ({ loggedInPage }) => {
    // `loggedInPage` is already logged in thanks to the fixture
    const welcomeText = await loggedInPage.locator('#welcomeMessage').textContent();
    // Grab the text from the element with id 'welcomeMessage'

    if (welcomeText === 'Welcome, testuser!') {
        console.log('✅ Welcome message verified successfully!');
    } else {
        throw new Error(`❌ Welcome message incorrect. Found: "${welcomeText}"`);
        // Throws an error if the welcome message doesn't match
    }
});
