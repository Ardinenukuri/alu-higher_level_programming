#!/usr/bin/node

const request = require('request');
const path = process.argv[2];

request(path, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(`code: ${response.statusCode}`);
});
