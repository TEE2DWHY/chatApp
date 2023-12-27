const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  //   socket.emit("chat-message", "Hello World");
  socket.on("send-chat-message", (message) => {
    // console.log(message);
    socket.broadcast.emit("chat-message", message);
  });
});

http.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
