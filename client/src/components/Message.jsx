import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/message.css";

const MessageComponent = () => {
  const [messages, setMessages] = useState([]);
  const senderId = "6599c0ea47626d383ecfb1e9"; // Replace with sender's ID
  const recipientId = "659c036d2f8d1e0aa716373b"; // Replace with recipient's ID

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/get-message/${senderId}/${recipientId}`
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    // Fetch messages initially
    fetchMessages();

    // Update messages every 1 second
    const interval = setInterval(() => {
      fetchMessages();
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [senderId, recipientId]);

  return (
    <div className="message-container">
      {/* Render messages */}
      <div className="message-list">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`message ${
              message.sender === senderId ? "sender" : "receiver"
            }`}
          >
            <img
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              src="https://images.pexels.com/photos/2332083/pexels-photo-2332083.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt={`${
                message.sender === senderId ? "Sender-Img" : "Receiver-Img"
              }`}
            />
            {message.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageComponent;
