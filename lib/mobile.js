const cheerio = require("cheerio");
const { getBrowser, getMobileBrowser } = require("./browser");

const getMobileJson = async (lati, longi) => {
  const content = await getBrowser(lati, longi);

  const $ = cheerio.load(content);
  const body = $(`body`);

  const toJson = JSON.parse($(body).find("pre").text());

  var dataList = [];

  await Promise.all(toJson.points.map(async (item, index) => {
    var tempList = await getMobileBrowser(item);
    dataList = [ ...tempList ]
  }))

  return dataList;
};

module.exports = { getMobileJson };
