const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middlewares/asyncWrapper");
const User = require("../models/User");
const Message = require("../models/Message");

const getUser = asyncWrapper(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!req.body.email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please Provide Email.",
    });
  }
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "User Does Not Exist.",
    });
  }
  const { password, ...response } = user.toObject();
  res.status(StatusCodes.OK).json({
    message: response,
  });
});

const sendMessage = asyncWrapper(async (req, res) => {
  const { senderId, receiverId } = req.params;
  if (!receiverId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please Provider ReceiverId",
    });
  }
  if (!senderId) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please Provider SenderId",
    });
  }
  const newMessage = await Message({
    sender: senderId,
    receiver: receiverId,
    message: req.body.message,
  });
  await newMessage.save();
  res.status(StatusCodes.CREATED).json({
    message: newMessage,
  });
});

const getMessages = asyncWrapper(async (req, res) => {
  const { senderId, receiverId } = req.params;

  const messages = await Message.find({
    $or: [
      { sender: senderId, receiver: receiverId },
      { sender: receiverId, receiver: senderId },
    ],
  }).sort({ createdAt: 1 });

  res.status(StatusCodes.OK).json({
    messages: messages,
  });
});

module.exports = { getUser, sendMessage, getMessages };
