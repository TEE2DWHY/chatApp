import { useEffect, useState } from "react";
import { socketFn } from "../utils/script";

const Input = () => {
  const [info, setInfo] = useState("");

  const socket = socketFn();

  const handleChange = (event) => {
    const { value } = event.target;
    setInfo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("send-chat-message", info);
    setInfo("");
  };

  useEffect(() => {
    socketFn();
  }, []);

  return (
    <>
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type Something..."
          value={info}
          onChange={handleChange}
        />
        {/* ... */}
        <button>Send</button>
      </form>
    </>
  );
};

export default Input;
