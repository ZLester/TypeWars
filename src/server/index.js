const app = require('./server.js');
const { port } = require('./config');

app.listen(port, () => {
  console.log('Server listening on ' + port);
});
