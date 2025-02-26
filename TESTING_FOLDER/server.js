const { Server } = require("socket.io");
const server = new Server({cors: {
    origin: "*",
  }
});

server.on('connection', socket => {
    let query = socket.handshake.query
    socket.join(query.room)
    console.log('conn', query.room);
    socket.on('message', message => {
        console.log("recieved message: ", query.room, message);
        socket.to(query.room).emit('message', message)
    });
})
server.listen(3000);