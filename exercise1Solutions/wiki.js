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



crawlWiki("https://en.wikipedia.org/wiki/Main_Page")





// "https://www.heb.com/"
// //*[@id="root"]/header/div[2]/div/nav/ul/li[1]/a
// "https://en.wikipedia.org/wiki/Main_Page"
// //*[@id="p-wikibase-otherprojects"]/div/ul/li[1]/a
// //*[@id="p-wikibase-otherprojects"]/div/ul/li[14]/a


    // <a href="/wiki/Ich_will_den_Kreuzstab_gerne_tragen,_BWV_56" title="Ich will den Kreuzstab gerne tragen, BWV 56">Full&nbsp;article...</a>

    // Scrapes featured article of the day
    // const [el] = await page.$x(`//*[@id="mp-tfa"]/p/b/a`);
    // const href = await el.getProperty('href');
    // const hrefText = await href.jsonValue();
    // result["Featured Article"] = hrefText;

    // const [el] = await page.$x(`//*[@id="mp-itn"]/ul/li[1]/b[2]/a`);
    // const href = await el.getProperty('href');
    // const hrefText = await href.jsonValue();
    // // result["In Other News"] = hrefText;
    // result[`testing limits`] = hrefText;

    // for (let i = 1; i < 5; i++){
    //     for(let j = 1; i < 3; i++){
    //         const [el] = await page.$x(`//*[@id="mp-itn"]/ul/li[${i}]/b[${j}]/a`);
    //         const href = await el.getProperty('href');
    //         const hrefText = await href.jsonValue();
    //         // result["In Other News"] = hrefText;
    //         result[`i:${i} j:${j}`] = hrefText;
    //     }
    // }

    //*[@id="mp-itn"]/ul/li[1]/b[2]/a
    //*[@id="mp-itn"]/ul/li[4]/b[2]/a
    //*[@id="mp-itn"]/ul/li[4]/b[2]/a
    //*[@id="mp-itn"]/div[2]/div[2]/div/ul/li[6]/a
    //*[@id="mp-itn"]/div[2]/div[1]/b/a
    

    // Scrapes "in other projects" section

    // for (let i = 1; i < 15; i++){
    //     const [el] = await page.$x(`//*[@id="p-wikibase-otherprojects"]/div/ul/li[${i}]/a`);
    //     const href = await el.getProperty('href');
    //     const hrefText = await href.jsonValue();
    //     result[i] = hrefText;
    // }

    // Scrapes other languages

    // for (let i = 1; i < 48; i++){
    //     const [el] = await page.$x(`//*[@id="p-lang"]/div/ul/li[${i}]/a`);
    //     const href = await el.getProperty('href');
    //     const hrefText = await href.jsonValue();
    //     result[i+15] = hrefText;
    // }