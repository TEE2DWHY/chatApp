import { sessionStorageUtil } from "./sessionStorage";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const router = useNavigate();

  useEffect(() => {
    const loggedIn = sessionStorageUtil.getItem("loggedIn");
    if (!loggedIn || loggedIn === null) {
      router("/");
    }
  });

  return <Outlet />;
};

export default PrivateRoute;
