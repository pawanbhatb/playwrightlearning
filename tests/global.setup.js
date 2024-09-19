const { test, expect } = require('@playwright/test');
import {test as setup} from '@playwright/test'

setup('AddNewUser',async({page}) =>{
    await page.goto("https://traccar-qa.spurtreetech.com/");
    await page.locator("//input[@placeholder='Enter your email address']").fill('Gokul@spurtreetech.com')
    await page.locator("//input[@name='password']").fill('Spur2Win!!')
    await page.locator("//button[@type='submit']").click()
    await page.context().storageState({path:'../session.json'})

})