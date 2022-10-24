const puppeteer = require('puppeteer');

async function crawlWiki(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // let result = {};

    const grabURLs = await page.evaluate(() => {
        // Selects all <a> tags
        const hrefTags = document.querySelectorAll('a');
        const urlLinks = []
        for (let i = 0; i < hrefTags.length; i++) {
          urlLinks.push(hrefTags[i].href)
        }
        // Return first 100 links. Started at 1 because first a tag on wikipedia is
        return urlLinks.splice(1,100);
      })

    // console.log(result);
    console.log(grabURLs)

    browser.close();

}
crawlWiki("https://en.wikipedia.org/wiki/Main_Page")
// Decided to scrape wikipedia because HEB.com blocked me. This function can scrape every link on wikipedia but instructions say up to 100 so I limited it to 100. 