// styles
import "../styles/style.scss";
// images
import addAvatar from "../assets/images/img.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleChange } from "../utils/handleChange";
import { register } from "../config/url";

const Register = () => {
  const router = useNavigate();

  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [err, setErr] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      alert("Password and Confirm password does not match.");
      return;
    }
    try {
      const response = await fetch(register, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      setFormData(initialFormData);
      router("/");
      // const { confirmPassword, password, ...user } = formData;
      // console.log(user);
    } catch (error) {
      console.log(error.message);
      setErr(error.message);
    }
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
            <input
              type="text"
              placeholder="display name"
              name="name"
              value={formData.name}
              required
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              required
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              required
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <img src={addAvatar} alt="add-avatar" />
              <span>Add An Avatar</span>
            </label>
          </div>
          <button className="form-button">Sign Up</button>
          <p className="error-message">{err}</p>
          <Link to="/">
            <p className="login-text">Do you have an account?. Login</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
