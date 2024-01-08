// styles
import "../styles/style.scss";
// images
import addAvatar from "../assets/images/img.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../config/url";
import axios from "axios";
import { handleChange } from "../utils/handleChange";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.confirmPassword !== formData.password) {
      alert("Password and Confirm password do not match.");
      return;
    }

    try {
      const data = new FormData();
      data.append("userName", formData.userName);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("confirmPassword", formData.confirmPassword);
      data.append("image", formData.image);

      const response = await axios.post(register, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setFormData(initialFormData);
      setImageURL(null);
      router("/");
    } catch (error) {
      console.log(error);
      setErr(error.response.data.message);
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
            />
            <input
              type="file"
              id="file"
              name="image"
              style={{ display: "none" }}
              onChange={(event) =>
                handleChange(event, setFormData, setImageURL, formData)
              }
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
          <button className="form-button">SignUp</button>
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
