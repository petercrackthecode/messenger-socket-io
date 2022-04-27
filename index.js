const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);
const PORT = 3000;

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: ", msg);
    io.emit("chat message", msg);
  });
});

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
