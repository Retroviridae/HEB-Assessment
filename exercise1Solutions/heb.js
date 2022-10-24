const puppeteer = require('puppeteer');

async function crawlHEB(url){
    const browser = await puppeteer.launch();
    try{
        const page = await browser.newPage();
        await page.goto(url);
        const cookies = await page.cookies();
    
        const [el] = await page.$x('//*[@id="root"]/header/div[2]/div/nav/ul/li[1]/a');
        const href = await el.getProperty('href');
        const hrefText = await href.jsonValue();
    
        console.log({hrefText});

    } catch (err){
        console.error(err.message);
    }finally{
        browser.close();
    }
}


crawlHEB("https://www.heb.com/")

// "https://www.heb.com/"
// //*[@id="root"]/header/div[2]/div/nav/ul/li[1]/a
// https://www.heb.com/category/shop/fruit-vegetables/2863/490020
// /html/body/div[1]/main/div/div[3]/div/div/div[2]/div[1]/div[1]/div/div/div/a




// "https://en.wikipedia.org/wiki/Main_Page"
// //*[@id="mp-tfa"]/p/b[1]/a

