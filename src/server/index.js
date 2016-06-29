const server = require('./server.js');
const { PORT } = require('./config');

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
