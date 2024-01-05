const asyncWrapper = require("../middlewares/asyncWrapper");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");

const register = asyncWrapper(async (req, res) => {
  const data = { ...req.body };
  if (Object.keys(data).length === 0) {
    return res.status(StatusCodes.CREATED).json({
      message: `Data Field Cannot be Empty.`,
    });
  }
  const { password, confirmPassword } = req.body;
  if (confirmPassword !== password) {
    return res.status(StatusCodes.CREATED).json({
      message: `Password and ConfirmPassword Must Match.`,
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ password: hashedPassword, ...req.body });
  res.status(StatusCodes.CREATED).json({
    message: `User with Username: ${newUser.userName} Is Created Successfully.`,
  });
});

const login = asyncWrapper(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "User Does Not Exist",
    });
  }
  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatch) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Incorrect password",
    });
  }
  res.status(StatusCodes.CREATED).json({
    message: "Login is Successful.",
  });
});

module.exports = { register, login };
