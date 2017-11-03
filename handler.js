"use strict";

const { getPage, parsePage, saveRatingsToDb } = require("./utils");

module.exports.hello = (event, context, callback) => {
  // fetch the page

  // parse the page

  //save to database

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  callback(null, response);
};
