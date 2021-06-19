const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({ignoreHTTPSErrors: true});
    const page = await context.newPage();
    await page.goto('https://admin-dev.projects.local');
    await page.click("xpath=//button[@class='base-button dark']");
    await page.type("#i0116", 'mc-cypress@sssearch.onmicrosoft.com');
    await page.click("#idSIButton9");
    await page.type("#i0118", 'MyCareer1');
    await page.click("#idSIButton9");
    await page.click("#KmsiCheckboxField");
    await page.click("#idSIButton9");
    //await browser.close();
})();

describe('mix', function () {

    it('should work', function () {

    });
});