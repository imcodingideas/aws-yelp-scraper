## Installation

This currently scrapes the rating and reviewCount from yelp.

You run it like this:
sls invoke local -f scrape -d "reforma-255-hermosillo"

Which will scrape
https://www.yelp.com.mx/biz/reforma-255-hermosillo

or you can node launch which uses invokes cronjob to run the first Monday of every month.

## Installation

On a mac you have a few dependancies.

npm i -g serverless
brew install aws-cli

You will need to run aws configure and input your aws credentials.

Than at somepoint you will need to npm i to install depenencies.