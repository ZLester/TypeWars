const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { STATIC_PATH } = require('../config');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(express.static(STATIC_PATH));
};
