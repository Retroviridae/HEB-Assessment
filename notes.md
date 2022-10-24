10/22/22: So my first thoughts were that the second example will be much easier than the second one. I don't know what a web crawler is but the second could be solved using the contains method. Also any language means I'm going to do JS because that's what I'm most confident with. Then I'll give Java a go since it's the main language for this role. I'm going to solve the second exmaple first. Also, don't have instructions on submitting the assessment so I made this repo. 


10/22/22: The method I was thinking of was contains, not includes. Includes is an array method and I was using a string. Getting to the solution was still about as simple as expected. I am going to make a second solution using a hash map to improve my original solution, but I don't think I can improve time and space complexity past O(n). The hash map should make it slightly faster but it would be more of a 2n => n type improvement.

10/22/22: Finished the second solution. The biggest sticking point was having to switch which string I calling concat on. 
<!-- These last few comments I made from memory about yesterday -->

10/22/22: Starting on the first solution, I've found some good resources about web crawlers. Looks like Puppeteer is a good library to use here. The exmaple says to grab "up to 100" urls. So I think the hardest interpretation would be to grab 100 URLs because I might have to go to multiple pages from heb.com to get to 100. At the very least I'm not hard coding 100 things. I guess I'll hard code one and see where to go from there.

10/22/22 11:06AM: Got puppeteer running. Had some issue where chrome failed to launch, not sure the deatils but I'd hazard a guess it's something to do with running on WSL. Maybe it was looking for linux chrome or something I'm not sure. It did get resolved by adding some args to the puppeteer browser that I copied from a stack overflow post. Not sure what they do but it worked so I'm happy. Technically I have solved this question but it is hard coded to the xPath that points to the heb.com/shop page. I'll see if I can get it to find 100 urls. 

10/22/22 11:27PM: So big issue with this assignment, HEB.com apparently doesn't allow robots on the site, per a github I found (https://github.com/aggie-coding-club/GrocerEZ/issues/30). So I can get my scraper working until I request an Xpath that doesn't exist, then the website locks puppeteer out. I can still access other sites like wikipedia but not HEB. Trying to figure out how to beat HEB's protection but I'm willing to bet that Daniel was unaware of the anti-bot protections. And if he wasn't then this is a strangly difficult test. 

10/22/22 11:45: Really not sure how to get past this. I've tried changing options on pupeteer, running the extra stealth plugin, changing url's within heb, full xpaths, using a proxy server. Can't get anything going. Getting past this anti bot system is starting to feel beyond me. Also per heb.com terms of use(https://www.heb.com/terms) "you shall not... use any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, "scrape," "data mine" or otherwise gather Service content, or reproduce or circumvent the navigational structure or presentation of the Service, without H‑E‑B's express prior written consent". I think this confirms the antibot setup the github site I saw mention. I was wondering how google could scrape HEB but search engines have an explicit exemption mentioned on this page so that I suppose explains it. I think there may be a way to do it by including cookies on puppeteer but I'm not sure exactly how to do that or if it would for sure work or not. Tried a get request on postman and got this 
src="/_Incapsula_Resource?CWUDNSAI=27&xinfo=9-32283620-0%200NNN%20RT%281666501015692%2010%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29&incident_id=0-155778653333687881&edet=9&cinfo=ffffffff&rpinfo=0&mth=GET"

"Server Error
Error 9
www.heb.com
2022-10-23 04:57:04 UTC
What happened?
Your IP: 23.114.192.218
Proxy IP: 45.223.17.43 (ID 108075-100)
Incident ID: 0-155778653333687881
"
I think this also confirms HEB has blocked me, well at least my bots because I can get there on firefox and chrome, but it knows when I use bots. Assuming postman is counted as a bot. 
I looked up incapsula and it's cyber security company so yeah. Per their wiki "Incapsula then filters out malicious attacks from bots and website scrapers". I wouldn't say I'm malicious but I guess incapsula is doing their job. 

10/23/22 12:22 AM: I texted my friend Ryan and he said he's used the puppeteer extra solution in the past like I was trying with the stealth.js file. Unfortunately there's some issue with running chromium from WSL so I can't use it. I'm giving up on it and going to wikipedia to build my crawler. Hopefully on the day I can scrape something from Heb.com but I'm not going to count on it. 

10/23/22 01:19 AM: Finished scraping wikipedia. HEB works for the time being when I just scrape the one hardcoded URL. Not going to push my luck but technically it does exactly what I was asked to do. Demonstrated some more functionality with the wikipedia version so plan is to make Java solution to the second question. 

10/24/22 11:08 AM: Added Java solution to the second exercise. Not that difficult, code is mostly the same as the JS code. Main difficulty is that you cannot call contains() with a character argument. Contains() only accepts a string argument. I saw a post on stack overflow to just call contains with an emplty string plus the character like this: (""+ char). Worked like a charm. Not going to try to make a Java web crawler, I spent enough time on the JS one anyway. 

