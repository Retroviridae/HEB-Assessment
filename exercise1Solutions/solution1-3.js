const puppeteer = require('puppeteer');

async function crawlWiki(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    result = {};

    // Scrapes featured article of the day
        const [el] = await page.$x(`//*[@id="mp-tfa"]/p/b/a`);
        const href = await el.getProperty('href');
        const hrefText = await href.jsonValue();
        result["Featured Article"] = hrefText;

    // Scrapes "in other projects" section
    for (let i = 1; i < 15; i++){
        const [el] = await page.$x(`//*[@id="p-wikibase-otherprojects"]/div/ul/li[${i}]/a`);
        const href = await el.getProperty('href');
        const hrefText = await href.jsonValue();
        result[i] = hrefText;
    }

    // Scrapes other languages
    for (let i = 1; i < 48; i++){
        const [el] = await page.$x(`//*[@id="p-lang"]/div/ul/li[${i}]/a`);
        const href = await el.getProperty('href');
        const hrefText = await href.jsonValue();
        result[i+14] = hrefText;
    }

    console.log(result);
    browser.close();
}

crawlWiki("https://en.wikipedia.org/wiki/Main_Page");

// Different options for scraping on wiki page