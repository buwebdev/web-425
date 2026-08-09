/**
 * Author: Professor Krasso
 * Modified by: This code was generated with the assistance of GitHub Copilot
 * Date: 6-20-24
 * File: character-factions.js
 * Description: This code is used to generate a list of character factions for a fictional game.
 * This code includes a series of unit tests to validate the code.
 */

"use strict";

// require statements
const http = require('http');
const url = require('url');

// array of character factions
const factions = [
  {
    name: "The Iron Brotherhood",
    description: "The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit."
  },
  {
    name: "The Arcane Order",
    description: "The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess."
  },
  {
    name: "The Silent Knives",
    description: "The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination."
  },
  {
    name: "The Nature's Guardians",
    description: "The Nature's Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature."
  }
];

// create a new server
const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true); // parse the URL
  const pathname = parseUrl.pathname; // get the path name

  // Set CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*'); // This allows all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed request methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  // To call this API, use the following URL:
  // http://localhost:3000/api/character-factions
  // The API will return a list of factions with their names and descriptions
  //
  // if the path is '/api/character-factions' and the method is 'GET'
  if (pathname === '/api/character-factions' && req.method === 'GET') {

    if (!factions) {
      // if the factions array is empty, return a 404 status code and the message 'Factions not found'
      res.writeHead(404, { 'Content-Type': 'application/json' }); // set the response header
      res.end(JSON.stringify({ message: 'Factions not found' })); // send the response
      return; // exit the function
    }

    // if the factions array is not empty, return it as a JSON response
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(factions)); // send the response
  } else {
    // if the path is not '/api/character-factions' or the method is not 'GET', return a 404 status code and the message 'Not found'
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found'); // send the response
  }
});

// start the server on port 3000 and log a message to the console
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
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

  function testFactionsList(callback) {
    http.get('http://localhost:3000/api/character-factions', (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const factions = JSON.parse(data);
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(Array.isArray(factions), true);
        assert.strictEqual(factions.length > 0, true);
        callback();
      });
    });
  }

  function testResponseHeaders(callback) {
    http.get('http://localhost:3000/api/character-factions', (res) => {
      assert.strictEqual(res.headers['access-control-allow-origin'], '*');
      assert.strictEqual(res.headers['access-control-allow-methods'], 'GET, POST, OPTIONS');
      callback();
    });
  }

  function testContentTypeJson(callback) {
    http.get('http://localhost:3000/api/character-factions', (res) => {
      assert.strictEqual(res.headers['content-type'], 'application/json');
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
    let tests = [testFactionsList, testResponseHeaders, testContentTypeJson, testNotFound];
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
}, 1000);