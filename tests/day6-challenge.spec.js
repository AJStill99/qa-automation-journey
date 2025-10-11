const { test, expect } = require('@playwright/test');

const sites = [
  { name: "Example", url: "https://example.com" },
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Playwright", url: "https://playwright.dev" },
  { name: "Broken", url: "https://thisdoesnotexist12345.com" }
];
// List of sites to check, last one is intentionally broken

test('Site Health Summary', async ({ page }) => {
  let successCount = 0;
  let failCount = 0;
  // Initialize counters

  for (const site of sites) {
    try {
      const response = await page.goto(site.url, { timeout: 5000 });

      if (response && response.ok()) {
        console.log(`✅ ${site.url} loaded successfully`);
        successCount++;
      } else if (response) {
        console.warn(`⚠️ ${site.url} failed — status: ${response.status()}`);
        failCount++;
      }
    } catch (error) {
      console.error(`❌ Error loading ${site.url}: ${error.message}`);
      failCount++;
    }
  }

  console.log(`\nSummary:`);
  console.log(`✅ ${successCount} sites loaded successfully`);
  console.log(`❌ ${failCount} sites failed to load`);
});

// Try/catch block to handle errors gracefully
// Timeout set to 5 seconds for each site to avoid long waits
// Summary at the end to show total successes and failures
// To run: npx playwright test day6-bonus.spec.js
