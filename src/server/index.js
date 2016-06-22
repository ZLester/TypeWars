const server = require('./server.js');
const { port } = require('./config');

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
