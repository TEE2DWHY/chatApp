// styles
import "../styles/style.scss";
// images
import addAvatar from "../assets/images/img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];
  };
  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1 className="logo">Speak Swift</h1>
            <span>Register</span>
          </div>
          <div className="form-inputs">
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="password" required />
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <img src={addAvatar} alt="add-avatar" />
              <span>Add An Avatar</span>
            </label>
          </div>
          <button className="form-button">Sign Up</button>
          {err && <span>Something Went Wrong</span>}
          <Link to="/login">
            <p className="login-text">Do you have an account login?</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
