const { getMobileJson } = require("./lib/mobile")

module.exports = {
    getMobileJson: async (lati, longi) => {
        return await getMobileJson(lati, longi);
    }
  };