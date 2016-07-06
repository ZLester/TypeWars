const express = require('express');
const app = express();
const server = require('http').Server(app);

require('./db');
require('./middleware')(app, express);
require('./routes')(app);
require('./io')(server);

module.exports = server;
