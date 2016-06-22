const socketIo = require('socket.io');

module.exports = server => {
  const io = socketIo(server);
  io.on('connection', socket => {
    console.log(`${socket.client.id} connected`);
    socket.on('disconnect', () => {
      console.log(`${socket.client.id} disconnected`);
    });
  });
};
