import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sessionStorageUtil } from "../utils/sessionStorage";

const Navbar = () => {
  const router = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    image: "",
  });
  useEffect(() => {
    setUserDetails({
      name: sessionStorageUtil.getItem("name"),
      image: sessionStorageUtil.getItem("profileImg"),
    });
  }, []);

  return (
    <>
      <nav>
        <Link to="#">
          <span className="logo">Speak Swift</span>
        </Link>
        <div className="user">
          <img src={userDetails.image} alt="user-img" />
          <span>{userDetails.name}</span>
          <button
            onClick={() => {
              sessionStorageUtil.deleteItem("name", "profileImg", "loggedIn");
              router("/");
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
