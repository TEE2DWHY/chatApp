import { useState } from "react";

const Input = () => {
  const [info, setInfo] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInfo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
