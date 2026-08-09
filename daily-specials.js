/**
 * Author: Professor Krasso
 * Modified by: This code was generated with the assistance of GitHub Copilot
 * Date: 6-20-24
 * File: daily-specials.js
 * Description: This code is used to generate a list of daily specials for the virtual taco stand.
 *  This code includes a series of unit tests to validate the code.
 */
"use strict";

// require statements
const http = require('http');
const url = require('url');

// array of daily specials
const specials = [
  { day: 'Monday', name: 'Carnitas Taco', description: 'Slow-cooked pork with fresh cilantro, onions, and salsa on a corn tortilla.', price: 2.60 },
  { day: 'Tuesday', name: 'Queso Birria Taco', description: 'Cheesy birria with cilantro, onions, and consomé for dipping.', price: 2.80 },
  { day: 'Wednesday', name: 'Al Pastor Taco', description: 'Marinated pork with pineapple, cilantro, and onions on a corn tortilla.', price: 2.60 },
  { day: 'Thursday', name: 'Tacos de Lengua', description: 'Tender beef tongue with cilantro and onions on a corn tortilla.', price: 2.80 },
  { day: 'Friday', name: 'Chicken Taco', description: 'Grilled chicken with lettuce, tomatoes, and salsa on a corn tortilla.', price: 2.60 },
  { day: 'Saturday', name: 'Fish Taco', description: 'Battered fish with cabbage slaw and creamy sauce on a flour tortilla.', price: 2.60 },
  { day: 'Sunday', name: 'Veggie Taco', description: 'Grilled vegetables with black beans, cheese, and salsa on a corn tortilla.', price: 2.60 }
];

// create a new server
const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true); // parse the URL
  const pathname = parseUrl.pathname; // get the path name
  const query = parseUrl.query; // get the query string

  // Set CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*'); // This allows all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed request methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // To call this API, use the following URL:
  // http://localhost:3000/api/daily-specials?day=Monday
  // The query string parameter 'day' can be any day of the week
  // The API will return the special for that day
  // If the day is not found, the API will return a 404 status code
  // and the message 'Special not found'
  //
  // if the path is '/api/daily-specials' and the method is 'GET'
  if (pathname === '/api/daily-specials' && req.method === 'GET') {
    const day = query.day; // get the day from the query string

    // find the special for the given day in the specials array. Use the toLowerCase() method to make the search case-insensitive
    const special = specials.find(special => special.day.toLowerCase() === day.toLowerCase());

    // if the special is found, return it as a JSON response
    if (special) {
      res.writeHead(200, { 'Content-Type': 'application/json' }); // set the response header
      res.end(JSON.stringify(special)); // send the response
    } else {
      // if the special is not found, return a 404 status code and the message 'Special not found'
      res.writeHead(404, { 'Content-Type': 'text/plain' }); // set the response header
      res.end('Special not found'); // send the response
    }
  } else {
    // if the path is not '/api/daily-specials' or the method is not 'GET', return a 404 status code and the message 'Not found'
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// start the server on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000'); // log a message to the console
});

//////////////////////////// UNIT TESTS /////////////////////////////////
// Do not modify the code below this line.  They are used to test the implementation above.
// They are not required for the code to run correctly but are required to pass the tests.
// The tests will run automatically when the code is run after a 1-second delay.
// You do not need to understand the code below to complete this week's assignment.
//
// WARNING: If you modify the code below, the tests may not run correctly and the API's behavior may change.
// if this happens, you may not receive full credit for the assignment, because I will have no way to verify
// week 8's assignment requirements.
//////////////////////////// UNIT TESTS /////////////////////////////////
setTimeout(() => {
  const http = require('http');
  const assert = require('assert');

  function testValidDaySpecial(callback) {
    http.get('http://localhost:3000/api/daily-specials?day=Monday', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const special = JSON.parse(data);
        assert.strictEqual(special.day, 'Monday');
        callback();
      });
    });
  }

  function testInvalidDaySpecial(callback) {
    http.get('http://localhost:3000/api/daily-specials?day=Nonday', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Special not found');
        callback();
      });
    });
  }

  function testResponseHeaders(callback) {
    http.get('http://localhost:3000/api/daily-specials?day=Monday', (res) => {
      assert.strictEqual(res.headers['access-control-allow-origin'], '*');
      assert.strictEqual(res.headers['access-control-allow-methods'], 'GET, POST, OPTIONS');
      callback();
    });
  }

  function testContentTypeJson(callback) {
    http.get('http://localhost:3000/api/daily-specials?day=Monday', (res) => {
      assert.strictEqual(res.headers['content-type'], 'application/json');
      callback();
    });
  }

  function testContentTypeText(callback) {
    http.get('http://localhost:3000/api/daily-specials?day=Nonday', (res) => {
      assert.strictEqual(res.headers['content-type'], 'text/plain');
      callback();
    });
  }

  function testNotFound(callback) {
    http.get('http://localhost:3000/api/non-existing-route', (res) => {
      assert.strictEqual(res.statusCode, 404);
      callback();
    });
  }

  function testRunner() {
    let tests = [testValidDaySpecial, testInvalidDaySpecial, testResponseHeaders, testContentTypeJson, testContentTypeText, testNotFound];
    let index = 0;

    function nextTest() {
      if (index < tests.length) {
        tests[index++](nextTest);
      } else {
        console.log('All tests passed!');
      }
    }

    nextTest();
  }
  setTimeout(testRunner, 1000);
}, 1000)