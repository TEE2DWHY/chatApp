const asyncWrapper = require("../middlewares/asyncWrapper");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");

const register = asyncWrapper(async (req, res) => {
  let result;
  try {
    const data = { ...req.body };
    if (Object.keys(data).length === 0) {
      return res.status(StatusCodes.CREATED).json({
        message: `Data Field Cannot be Empty.`,
      });
    }
    if (data.confirmPassword !== data.password) {
      return res.status(StatusCodes.CREATED).json({
        message: `Password and ConfirmPassword Must Match.`,
      });
    }
    const { path } = req.file;
    if (!path) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please Upload Provide Picture.",
      });
    }
    result = await cloudinary.uploader.upload(path);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await User.create({
      ...data,
      password: hashedPassword,
      image: result.secure_url,
    });
    res.status(StatusCodes.CREATED).json({
      message: `User with Username: ${newUser.userName} Is Created Successfully.`,
    });
  } catch (error) {
    if (result) {
      await cloudinary.uploader.destroy(result.public_id);
    }
  }
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
