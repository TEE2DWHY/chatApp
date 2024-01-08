import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.scss";
import { handleChange } from "../utils/handleChange";
import { login } from "../config/url";
import axios from "axios";
import Spinner from "../assets/icons/Spinner";
import { sessionStorageUtil } from "../utils/sessionStorage";

const Login = () => {
  const router = useNavigate();

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formState, setFormState] = useState({
    imageURL: null, // image input does not exist tho.
    err: "",
    isLoading: false,
    isSubmitted: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({
      ...formState,
      isLoading: true,
    });
    try {
      const response = await axios.post(login, formData);
      sessionStorageUtil.setItem("name", response.data.name);
      sessionStorageUtil.setItem("profileImg", response.data.image);
      sessionStorageUtil.setItem("loggedIn", true);
      setFormData(initialFormData);
      setFormState({
        ...formState,
        isSubmitted: true,
        isLoading: false,
      });
      router("/messages");
    } catch (error) {
      setFormState({
        ...formState,
        isLoading: false,
        err: error.response.data.message,
      });
    }
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
              onChange={(event) =>
                handleChange(
                  event,
                  setFormData,
                  setFormState({ ...formState, imageURL: null }),
                  formData
                )
              }
            />
            <input
              type="password"
              placeholder="password"
              required
              name="password"
              value={formData.password}
              onChange={(event) =>
                handleChange(
                  event,
                  setFormData,
                  setFormState({ ...formState, imageURL: null }),
                  formData
                )
              }
            />
          </div>
          <p className="error-message">{formState.err}</p>
          <button
            className={`form-button ${
              formState.isSubmitted ? "disabled-cursor" : ""
            }`}
            type="submit"
            disabled={formState.isSubmitted}
          >
            {formState.isLoading ? (
              <Spinner />
            ) : formState.isSubmitted ? (
              "Submitted"
            ) : (
              "Sign Up"
            )}
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
