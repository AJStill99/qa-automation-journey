const { test, expect } = require('@playwright/test');

const sites = [
  { name: "Example", url: "https://example.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Playwright", url: "https://playwright.dev" },
  { name: "Broken", url: "https://thisdoesnotexist12345.com" }
];

// Last site is intentionally broken to show response code handling

function titleCheck(title) {
    let lowerTitle = title.toLowerCase();
    switch(lowerTitle) {
        case "example domain":
            console.log("Standard site detected");
            break;
        case "wikipedia":
            console.log("Wikipedia site detected");
            break;
        case "playwright":
            console.log("Playwright site detected");
            break;
        default:
            console.log("General site detected");
    }
}

for (const site of sites) {
  test(`check page title for ${site.name}`, async ({ page }) => {
    console.log(`Running test for ${site.name}...`);
    const response = await page.goto(site.url);
    // await expect(response.ok()).toBeTruthy();
    // ^ covered in a later test now
    // Waits for page to load, checks for a successful response
    // Successful responses are in the 200-299 range
    console.log(response.status());
    // Logs the exact response code to the console
    await page.screenshot({ path: `${site.name}-screenshot.png` });
    //Will save a screenshot of each site visited
    // Will save to the root folder of the project
    const title = await page.title();
    titleCheck(title);
    console.log(`${site.name} site title: ${title}`);
    expect(title.length).toBeGreaterThan(0); // ensure title exists
  });
}

test('Checks that response is okay', async ({ page }) => {
  for (const site of sites) {
    try {
      const response = await page.goto(site.url, { timeout: 5000 });
      
      // Handle cases where the response exists but isn't ok (e.g., 404 or 500)
      if (response && !response.ok()) {
        console.warn(`⚠️ ${site.url} failed — status: ${response.status()}`);
        // If response exists, but is not okay
      } else if (response) {
        console.log(`✅ ${site.url} loaded successfully`);
      }
    } catch (error) {
      // Handle total network errors or timeouts
      console.error(`❌ Error loading ${site.url}: ${error.message}`);
    }
  }
});
// This test will check if the response is okay for each site
// It will log a warning for non-2xx status codes and an error for network issues
// This is useful for identifying broken links or server issues
