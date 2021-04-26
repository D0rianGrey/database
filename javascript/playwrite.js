const {chromium} = require('playwright');
const {devices} = require('playwright');

(async () => {
    //Iphone 11
    // const iPhone = devices['iPhone 11 Pro'];
    // const browser = await chromium.launch({headless: false});
    // const context = await browser.newContext({...iPhone});
    // const page = await context.newPage();
    // await page.goto('https://www.google.com.ua/');
    // await browser.close();

    //Just browser
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com.ua/');
    await page.fill(".a4bIc > .gLFyf", 'playwrite js');
    await page.click(".gNO89b");
    //await browser.close();
})();
