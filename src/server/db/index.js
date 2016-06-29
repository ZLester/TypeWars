const mongoose = require('mongoose');
const { DB_URI } = require('../config');

const connection = mongoose.connect(DB_URI);

module.exports = connection;
