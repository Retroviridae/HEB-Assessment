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
    let result = {};

    for (let i = 1; i < 6; i++){
        const [el] = await page.$x(`//*[@id="root"]/header/div[2]/div/nav/ul/li[${i}]/a`);
        const href = await el.getProperty('href');
        const hrefText = await href.jsonValue();
        result[i] = hrefText;
    }


    console.log(result);

    browser.close();

}

//*[@id="root"]/header/div[2]/div/nav/ul/li[6]/a

crawlHEB("https://www.heb.com/")

