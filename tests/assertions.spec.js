

const { test, expect } = require('@playwright/test');

test('Validate page title', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://demo.automationtesting.in/Register.html');
  
    // Get the title of the page
    const title = await page.title();
  
    // Assert that the title is as expected
    expect(title).toBe('Register');
    
    
    const currentURL = page.url();

  // Assert that the current URL matches the expected URL
  expect(currentURL).toBe('https://demo.automationtesting.in/Register.html'); 

  const registerHeader = page.locator("//h2[normalize-space()='Register']");  // Replace with correct tag/selector

  // Assert that the header is visible
  await expect(registerHeader).toBeVisible();

  await page.locator("//input[@id='checkbox1']").click()

  await expect(page.locator("//input[@id='checkbox1']")).toBeChecked()

  await page.locator("//input[@id='checkbox2']").check()

  await page.locator("//input[@id='checkbox2']").uncheck()

  await expect(page.locator("//input[@id='checkbox2']")).not.toBeChecked()

  await expect(page.locator("//button[@id='submitbtn']")).toBeEnabled()


    


} )






















