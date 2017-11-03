const request = require("request-promise");
module.exports = businessName => {
  // https://www.yelp.com.mx/biz/reforma-255-hermosillo
  const url = `https://www.yelp.com.mx/biz/${businessName}`;

  return request({ method: "GET", url: url });
};
