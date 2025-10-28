const { expect } = require('@playwright/test');

// Utility helper functions for Playwright

async function verifyLoggedIn(page, expectedText, selector) {
  const URL = page.url();
  const elementText = await page.locator(selector).innerText();
  if(URL.includes('logged-in-successfully') || elementText.includes(expectedText)) {
    console.log('✅ User is logged in successfully');
  } else {
    throw new Error('❌ User is not logged in');
  }
}

async function fillCreatePostForm(page, title, content) {
  await page.fill('#postTitle', title);
  await page.fill('#postContent', content);
  console.log('Filled the create post form');
}

async function submitForm(page) {
  await page.click('#submit-post');
  console.log('Submitted the form');
}

async function verifyPostCreated(page, expectedTitle) {
  const postTitle = await page.locator('.post-title').allTextContents();
  if(!postTitle.includes(expectedTitle)) {
    throw new Error('❌ Post title does not found');
  }
}

async function navigateToLogin(page) {
  await page.goto('https://example.com/login');
  await expect(page).toHaveURL(/.*login/);
  console.log('🧭 Navigated to login page successfully');
}

async function performLogin(page, username, password) {
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
}

async function verifyPageTitle(page, expectedTitle) {
  const title = await page.title();
  console.log(`Page title is: ${title}`);
  await expect(title).toBe(expectedTitle);
  console.log('✅ Page title verification passed successfully!');
}

async function verifyLoginSuccess(page, username) {
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('#welcomeMessage')).toHaveText(`Welcome, ${username}!`);
  console.log('✅ Login verification passed successfully!');
}

async function safePerformLogin(page, username, password) {
  const timeStamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = `test-results/Failing_Images/Fail_Img_${timeStamp}.png`;

  try {
    await performLogin(page, username, password);
  } catch (error) {
    console.error('❌ Error during login process:', error);
    await page.screenshot({ path: filePath });
    console.log(`📸 Screenshot saved to: ${filePath}`);
    throw error;
  }
}

async function handleAlert(page, expectedMessage) {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain(expectedMessage);
    await dialog.accept();
  });
}

export async function handleConfirm(page, { expectedMessage, action = 'accept' } = {}) {
  page.once('dialog', async dialog => {
    if (expectedMessage) {
      expect(dialog.message()).toContain(expectedMessage);
    }
    if (action === 'accept') {
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });
}

export async function handlePrompt(page, { expectedMessage, inputText = '', action = 'accept' } = {}) {
  page.once('dialog', async dialog => {
    if (expectedMessage) {
      expect(dialog.message()).toContain(expectedMessage);
    }
    if (action === 'accept') {
      await dialog.accept(inputText); // Send input
    } else {
      await dialog.dismiss();
    }
  });
}

module.exports = { 
  navigateToLogin, 
  performLogin, 
  verifyPageTitle, 
  verifyLoginSuccess, 
  safePerformLogin,
  verifyLoggedIn,
  fillCreatePostForm,
  submitForm,
  verifyPostCreated,
  handleAlert
};
