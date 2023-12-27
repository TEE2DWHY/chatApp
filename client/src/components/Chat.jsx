// images
import cam from "../assets/images/cam.png";
import add from "../assets/images/add.png";
import more from "../assets/images/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chat-info">
          <span>Jane</span>
          <div className="chat-icons">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default Chat;
