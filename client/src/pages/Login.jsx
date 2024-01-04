import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.scss";
import { handleChange } from "../utils/handleChange";

const Login = () => {
  const router = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    router("/messages");
  };

  return (
    <>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <h1 className="logo">Speak Swift</h1>
            <span>Login</span>
          </div>
          <div className="form-inputs">
            <input
              type="email"
              placeholder="email"
              required
              name="email"
              value={formData.email}
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              value={formData.password}
              onChange={(event) => handleChange(event, setFormData, formData)}
            />
          </div>
          <button type="submit" className="form-button">
            Log in
          </button>
          <Link to="/register">
            <p className="login-text">Don't you have an account? Register</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
