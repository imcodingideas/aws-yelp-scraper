"use strict";

const {
  getPage,
  parsePage,
  saveRatingsToDb,
  deployScrapers
} = require("./utils");

module.exports.scrape = (event, context, callback) => {
  // fetch the page
  getPage(event)
    // parse the page
    .then(page => parsePage(page))
    //save to database
    .then(yelpData => saveRatingsToDb(yelpData, event))
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Scraped ${event}`
        })
      })
    )
    .catch(error =>
      callback(new Error(`Error Scraping ${event}: ${JSON.stringify(error)}`))
    );
};

module.exports.launch_scrapers = (event, context, callback) => {
  const fakeDatabaseResults = [
    "reforma-255-hermosillo",
    "el-leñador-hermosillo",
    "mochomos-hermosillo",
    "restaurante-el-che-parrilla-argentina-hermosillo"
  ];

  fakeDatabaseResults.forEach(businessName => {
    deployScrapers(businessName);
  });
};
