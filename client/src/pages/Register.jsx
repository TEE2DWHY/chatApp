// styles
import "../styles/style.scss";
// images
import addAvatar from "../assets/images/img.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../config/url";
import axios from "axios";
import { handleChange } from "../utils/handleChange";
import Spinner from "../assets/icons/Spinner";

const Register = () => {
  const router = useNavigate();

  const initialFormData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [err, setErr] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.confirmPassword !== formData.password) {
      setErr("Password and Confirm password do not match.");
      return;
    }
    if (imageURL === null) {
      setErr("Please Provide Image");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(register, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setFormData(initialFormData);
      setImageURL(null);
      setIsSubmitted(true);
      setIsLoading(false);
      router("/");
    } catch (error) {
      console.log(error);
      setErr(error.response.data.message);
      setIsLoading(false);
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
              name="userName"
              value={formData.userName}
              required
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
              onFocus={() => setErr(null)}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={formData.email}
              required
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
              onFocus={() => setErr(null)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              required
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
              onFocus={() => setErr(null)}
            />
            <input
              type="password"
              placeholder="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
              onFocus={() => setErr(null)}
            />
            <input
              type="file"
              id="file"
              name="image"
              style={{ display: "none" }}
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
              onFocus={() => setErr(null)}
            />
            <div>
              {imageURL ? (
                <>
                  <div className="user-avatar">
                    <img
                      className="img-avatar"
                      src={imageURL}
                      alt="upload-avatar"
                    />
                    <span
                      className="remove-avatar"
                      onClick={() => setImageURL(null)}
                    >
                      X
                    </span>
                  </div>
                </>
              ) : (
                <label htmlFor="file">
                  <img src={addAvatar} alt="add-avatar" />
                  <span>Upload Image</span>
                </label>
              )}
            </div>
          </div>
          <p className="error-message">{err}</p>
          <button
            className={`form-button ${isSubmitted ? "disabled-cursor" : ""}`}
            type="submit"
            disabled={isSubmitted}
          >
            {isLoading ? <Spinner /> : isSubmitted ? "Submitted" : "Sign Up"}
          </button>
          <Link to="/">
            <p className="login-text">Do you have an account?. Login</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
