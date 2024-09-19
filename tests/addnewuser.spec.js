const { test, expect } = require('@playwright/test');
import {generateRandomNameAndEmail} from '../utils/randomName'

test('AddNewUser',async({page}) =>{
    await page.goto("https://traccar-qa.spurtreetech.com/");
    await page.locator("//input[@placeholder='Enter your email address']").fill('Gokul@spurtreetech.com')
    await page.locator("//input[@name='password']").fill('Spur2Win!!')
     await page.locator("//button[@type='submit']").click()
    //await page.goto('https://traccar-qa.spurtreetech.com/projects')
    await page.click('text="Users"');

    await page.click('text="Add User"');
    const { name, email } = generateRandomNameAndEmail();
    await page.locator("input[placeholder='Enter the First Name']").fill(name)
    await page.locator("//input[@name='last_name']").fill('test01')
    //await page.locator("//input[@name='email_id']").fill('Aut01@aut.com')
    await page.locator("//input[@name='email_id']").fill(email) 
    await page.locator("//input[@name='password']").fill('Aut0000001')
    await page.locator("//div[@class=' css-tlfecz-indicatorContainer']").click()  // //div[@class=' css-1n7v3ny-option']
    await page.locator("//div[@class=' css-1n7v3ny-option']").click()   //button[@type='submit']
    await page.locator(" //button[@type='submit']").click()
    // Click the link based on its visible text


    //await page.click('a[href="/users"]');
    //await page.click("https://traccar-qa.spurtreetech.com/users")

    //await page.locator("//div[@data-menu-id='rc-menu-uuid-17754-1-sub1']").click()
    await page.waitForTimeout(4000)

    


} )