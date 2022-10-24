const puppeteer = require('puppeteer');

async function crawlHEB(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    // Find element by xpath
    const [el] = await page.$x('//*[@id="root"]/header/div[2]/div/nav/ul/li[1]/a');
    // Get URL: from specified element
    const href = await el.getProperty('href');
    // Convert to text
    const hrefText = await href.jsonValue();

    // Log URL within object
    console.log({hrefText});

    // Close puppeteer
    browser.close();

}
crawlHEB("https://www.heb.com/");

// Grabs a single HEB URL. Didn't take this any further because bots are blocked from Heb.com and I don't want it to catch me
// I have the URL logged in an object because it would be helpful if a lot of URLs are scraped.

