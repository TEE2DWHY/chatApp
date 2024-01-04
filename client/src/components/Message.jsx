import { useState } from "react";

const Message = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const isOwner = true; // Assume the current user is the owner for demonstration

  const getMessageTime = () => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    return `${hour}:${minute}`;
  };

  return (
    <>
      <div className={`message ${isOwner ? "owner" : "sender"}`}>
        <div className="message-info">
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>{getMessageTime()}</span>
        </div>
        <div className="message-content">
          <p className={isOwner ? "owner-content" : "sender-content"}>
            {currentMessage}
          </p>
        </div>
      </div>
    </>
  );
};

export default Message;
