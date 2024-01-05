const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please Provide Username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: [true, "Email Already Exist."],
  },
  password: {
    type: String,
    required: [true, "Please Provide Password"],
    minlength: [8, "Password Should be At Least Eight Letters."],
  },
});

module.exports = mongoose.model("User", userSchema);
