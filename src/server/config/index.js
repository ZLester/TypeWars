module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGOLAB_URI || 'mongodb://localhost/mrrn', 
};
