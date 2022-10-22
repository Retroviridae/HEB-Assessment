const puppeteer = require('puppeteer');

async function crawlHEB(url){
    const browser = await puppeteer.launch({
        args: [
             '--disable-gpu',
             '--disable-dev-shm-usage',
             '--disable-setuid-sandbox',
             '--no-first-run',
             '--no-sandbox',
             '--no-zygote',
             '--single-process',
        ]
   })
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="root"]/header/div[2]/div/nav/ul/li[1]/a');
    const href = await el.getProperty('href');
    const hrefText = await href.jsonValue();

    console.log({hrefText});

    browser.close;

}

crawlHEB("https://www.heb.com/")

