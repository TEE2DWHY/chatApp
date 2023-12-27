// styles
import "../styles/style.scss";
// images
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form-wrapper">
        <form>
          <div className="form-header">
            <h1 className="logo">Speak Swift</h1>
            <span>Login</span>
          </div>
          <div className="form-inputs">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </div>
          <button className="form-button">Log in</button>
          <Link to="/register">
            <p className="login-text">Don't you have an account login?</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
