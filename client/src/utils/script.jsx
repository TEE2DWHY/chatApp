import { io } from "socket.io-client";

let socket;
let message = "";

export const getMessage = () => message;

export const socketFn = () => {
  if (!socket) {
    socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("chat-message", (data) => {
      message = data;
    });
  }

  return socket;
};
