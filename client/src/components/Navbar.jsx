import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="#">
          <span className="logo">Speak Swift</span>
        </Link>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2880979/pexels-photo-2880979.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="user-img"
          />
          <span>John Norton</span>
          <button>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
