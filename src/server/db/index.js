const mongoose = require('mongoose');
const { dbUri } = require('../config');

const connection = mongoose.connect(dbUri);

module.exports = connection;
