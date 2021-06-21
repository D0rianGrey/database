const {chromium} = require("@playwright/test");
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({ignoreHTTPSErrors: true});
    const adminMode = await context.newPage();
    const careerMode = await context.newPage();
    await adminMode.goto('https://admin-dev.projects.local');
    await careerMode.goto('https://career-dev.projects.local')
    await adminMode.click("xpath=//button[@class='base-button dark']");
    await adminMode.type("#i0116", 'mc-cypress@sssearch.onmicrosoft.com');
    await adminMode.click("#idSIButton9");
    await adminMode.type("#i0118", 'MyCareer1');
    await adminMode.click("#idSIButton9");
    await adminMode.click("#KmsiCheckboxField");
    await adminMode.click("#idSIButton9");
    await careerMode.click("xpath=//a[@class='freelance-btn']");
});