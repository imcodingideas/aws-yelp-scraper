"use strict";

const { getPage, parsePage, saveRatingsToDb } = require("./utils");

module.exports.scrape = (event, context, callback) => {
  // fetch the page
  getPage(event)
    // parse the page
    .then(page => parsePage(page))
    //save to database
    .then(yelpData => saveRatingsToDb(yelpData));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
