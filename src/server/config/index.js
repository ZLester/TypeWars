const path = require('path');

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.MONGOLAB_URI || 'mongodb://localhost/typewars',
  JWT_SECRET: process.env.JWT_SECRET || 'developmentsecret',
  JWT_EXPIRES: process.env.JWT_EXPIRES || 60,
  STATIC_PATH: path.join(__dirname, '../../../build'),
};
