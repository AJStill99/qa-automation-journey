const { test, expect } = require('@playwright/test');

// Step 1: Create some "users" to test with
const users = [
  { name: "Alice", url: "https://example.com" },
  { name: "Bob", url: "https://www.wikipedia.org" },
  { name: "Charlie", url: "https://www.playwright.dev" }
];

function standardCheck(title) {
    let lowerTitle = title.toLowerCase();
    if (lowerTitle === "example domain") {
        console.log("Standard site detected");
    } else {
        console.log("Non-standard site");
    }
}

// Note: title.toLower() does not work, has to reassign the variable for it to work here

//added in this function to refactor a bit, so that the testing block is cleaner


// Step 2: Loop through each user and run a test
for (const user of users) {
  test(`check page title for ${user.name}`, async ({ page }) => {
    console.log(`Running test for ${user.name}...`);
    await page.goto(user.url);
    const title = await page.title();
    console.log(`${user.name} sees: ${title}`);
    standardCheck(title);
    expect(title.length).toBeGreaterThan(0); // ensure title exists
  });
}
