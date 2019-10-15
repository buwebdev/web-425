const express = require('express');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let Composer = require('./models/composer');

// global variables
const conn = 'mongodb://admin:admin1@ds113765.mlab.com:13765/web-425-week8';
const port = '3000';

// MongoDB connection
mongoose.connect(conn, {
  promiseLibrary: require('bluebird')
}).then( () => console.log('MongoDB connection successful'))
  .catch( (err) => console.log(err));

let app = express();

// using statements
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/js-mean-db')));
app.use('/', express.static(path.join(__dirname, '../dist/js-mean-db')))
app.use(morgan('dev'));

// routes
app.get('/api/composers', function(req, res, next) {
  Composer.find(function(err, composers) {
    if (err) return next(err);
    return res.json(composers);
  });
});

app.get('/api/composers/:id', function(req, res, next) {
  console.log(req.params.id);
  Composer.findOne({ _id: req.params.id}, function(err, composer) {
    if (err) return next(err);
    return res.json(composer);
  });
});

app.post('/api/composers', function(req, res, next) {
  console.log(req.body);
  let composer = new Composer({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  console.log(composer);

  Composer.create(composer, function(err, composers) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(composers);
      res.json(composers);
    }
  })
});

// create the Node server
http.createServer(app).listen(port, function () {
  console.log('Application started and listening on port: ' + port);
});
