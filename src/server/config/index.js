const path = require('path');

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.MONGOLAB_URI || 'mongodb://localhost/typewars',
  STATIC_PATH: path.join(__dirname, '../../../build'),
};
