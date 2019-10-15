const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/hello-server')));
app.use('/', express.static(path.join(__dirname, '../dist/hello-server')));

module.exports = app;
