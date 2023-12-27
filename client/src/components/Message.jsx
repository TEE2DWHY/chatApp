import { useEffect, useState } from "react";
import { getMessage, socketFn } from "../utils/script";

const Message = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const socket = socketFn();

    socket.on("chat-message", () => {
      const updatedMessage = getMessage();
      setCurrentMessage(updatedMessage);
    });
  }, []);
  return (
    <>
      <div className="message owner">
        <div className="message-info">
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Just Now</span>
        </div>
        <div className="message-content">
          <p>{currentMessage}</p>
          <img
            src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Message;
