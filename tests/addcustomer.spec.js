const { test, expect } = require('@playwright/test');

test('addnewcustomer',async({page})=>{
    await page.goto("https://traccar-qa.spurtreetech.com/");
    await page.locator("//input[@placeholder='Enter your email address']").fill('Gokul@spurtreetech.com')
    await page.locator("//input[@name='password']").fill('Spur2Win!!')
    await page.locator("//button[@type='submit']").click()
    await page.locator("//span[.='Customers' and @class='ant-menu-title-content']").nth(0).click();
    await page.waitForTimeout(5000)
    await page.click('text="Summary"');













})