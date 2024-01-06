const { StatusCodes } = require("http-status-codes");
const asyncWrapper = require("../middlewares/asyncWrapper");
const User = require("../models/User");

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

module.exports = getUser;
