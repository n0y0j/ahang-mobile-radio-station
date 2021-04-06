const puppeteer = require("puppeteer");
const https = require('https')

const HOST_URL = `https://spectrummap.kr`;

const getBrowser = async (lati, longi) => {
  const BROWSER_URL =
    HOST_URL +
    `/gis/mobile_service.json?menuNo=300480&type=&latitude=${lati}&longitude=${longi}&zoom=16&visibleRadius=500`;

  const browser = await puppeteer.launch({
    headless: true,
  });

  const userAgent = await browser.userAgent();

  const page = await browser.newPage();
  await page.setUserAgent(userAgent);

  await page.goto(BROWSER_URL);

  return await page.content();
};

const getMobileBrowser = async (url) => {
  const MOBILE_URL = HOST_URL + url;

  return new Promise ((resolve, reject) => {
    let req = https.get(MOBILE_URL, function (res) {
      var data = '';
  
      res.on('data', function(chunk) {
        data += chunk;
      })
  
      res.on('end', function() {
        var temp = JSON.parse(data);
        resolve(temp)
      })
  
      res.on('error', function(err) {
        console.log(err)
      })
    })
  })
};

module.exports = { getBrowser, getMobileBrowser };
