const request = require("request-promise");
const AWS = require("aws-sdk");

const list = [
  "reforma-255-hermosillo",
  "el-leñador-hermosillo",
  "mochomos-hermosillo",
  "restaurante-el-che-parrilla-argentina-hermosillo"
];

function deployScraper(businessName) {
  const lambda = new AWS.Lambda({
    region: "us-west-2"
  });

  const params = {
    FunctionName: "yelp-scraper-dev-scrape",
    InvocationType: "RequestResponse",
    LogType: "Tail",
    Payload: JSON.stringify(businessName)
  };

  return lambda.invoke(params, function(error, data) {
    if (error) {
      console.error(JSON.stringify(error));
      return new Error(`Error scrapping: ${JSON.stringify(error)}`);
    } else if (data) {
      console.log(data);
      return JSON.stringify(data);
    }
  });
}

function swarm(arr) {
  arr.forEach(businessName => {
    deployScraper(businessName);
  });
}

swarm(list);
