const { test, expect } = require('@playwright/test');


test('addnewproject',async({page})=>{
    await page.goto("https://traccar-qa.spurtreetech.com/");
    await page.goto("https://traccar-qa.spurtreetech.com/");
    await page.locator("//input[@placeholder='Enter your email address']").fill('Gokul@spurtreetech.com')
    await page.locator("//input[@name='password']").fill('Spur2Win!!')
    await page.locator("//button[@type='submit']").click()













})