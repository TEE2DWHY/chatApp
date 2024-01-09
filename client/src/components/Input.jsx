import { useState } from "react";
import axios from "axios";

const Input = () => {
  const [info, setInfo] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInfo(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/new-message/659c036d2f8d1e0aa716373b/6599c0ea47626d383ecfb1e9",
        {
          message: info,
        }
      );
      console.log(response);
      setInfo("");
    } catch (error) {
      console.log(error);
    }
  };

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
