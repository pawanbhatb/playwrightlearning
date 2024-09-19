const { test, expect } = require("@playwright/test");
const path = require('path');

test('Welcome to the-internet', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.fill('input[placeholder="First Name"]', 'Pawan');
    await page.fill('input[placeholder="Last Name"]', 'Bhat');

    await page.check('input[value="Male"]');

    await page.click('input[value="Cricket"]');

    await page.dblclick('input[value="Movies"]');

    await page.click('input[id="firstpassword"]', { button: 'right' });

    //const filePath = path.resolve('');
   // await page.setInputFiles('input[id="imagesrc"]', filePath);
   
    await page.waitForTimeout(8000);
});

//
