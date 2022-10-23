const puppeteer = require('puppeteer-extra');
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());

async function scrapeAddress(url){
    const browser = await puppeteer.launch(
    {
        headless: true,
        ignoreHTTPSErrors: true,
        executablePath:'/usr/bin/chromium-browser',
        slowMo: 0,
        args: ['--window-size=1400,900',
        '--remote-debugging-port=9222',
        "--remote-debugging-address=0.0.0.0", // You know what your doing?
        '--disable-gpu', "--disable-features=IsolateOrigins,site-per-process", '--blink-settings=imagesEnabled=true'
        ]});

    const page = await browser.newPage();
    await page.goto(url,{waitUntil: 'networkidle0'});

    //wait for xpath
    await page.waitForXPath('//*[@id="mp-tfa"]/p/b[1]/a');
    const [el]= await page.$x('//*[@id="mp-tfa"]/p/b[1]/a');
    // console.log(el)
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue(); 

    console.log({rawTxt}); 

    browser.close();

}

scrapeAddress("https://en.wikipedia.org/wiki/Main_Page")