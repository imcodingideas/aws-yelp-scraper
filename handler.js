"use strict";

const { getPage, parsePage, saveRatingsToDb } = require("./utils");

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
