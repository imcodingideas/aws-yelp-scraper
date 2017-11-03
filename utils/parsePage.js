const cheerio = require("cheerio");
module.exports = page => {
  try {
    const $ = cheerio.load(page);
    const rating = $(".rating-info .i-stars")
      .attr("title")
      .trim()
      .split(" ")[2];
    const reviewCount = $(".rating-info .review-count")
      .text()
      .trim()
      .split(" ")[0];

    console.log(rating, reviewCount);
  } catch (error) {
    return Promise.reject(`Error Parsing Page ${JSON.stringify(error)}`);
  }
};
