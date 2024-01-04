import React from "react";
import SideBar from "../components/sideBar";
import Chat from "../components/chat";
const User = () => {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default User;
