const socketIO = require("socket.io");

module.exports = (server) => {
  const io = socketIO(server);

  // Clients Object
  const clients = {};

  // Socket Connection
  io.on("connection", (socket) => {
    // Add a new user to the clients object
    clients[socket.id] = true;
    console.log(`Connected clients ${Object.keys(clients).length}`);


    // Delete user from the clients object
    socket.on("disconnect", () => {
      console.log(`Client with the id ${socket.id} disconnected!`);
      delete clients[socket.id];
    });
  });
};
