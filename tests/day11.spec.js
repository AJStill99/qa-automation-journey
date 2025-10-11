const { test } = require('../test-fixtures.js');
const { fillCreatePostForm, submitForm, verifyPostCreated } = require('../utils/testing_functions.js');
// Import helper functions

test('Create a new post successfully', async ({ loggedInPage }) => {
    const page = loggedInPage;

    await page.goto('/create-post');
    // Can do this as we have already logged in via the fixture

    // Define post details
    const title = 'My new post';
    const content = 'This is the content of my new post.';

    // Use the helper functions to fill and submit the form
    await fillCreatePostForm(page, title, content);
    await submitForm(page);

    // Verify the post was created successfully
    await verifyPostCreated(page, title);
});

// Come back to this, still confuses me a bit 