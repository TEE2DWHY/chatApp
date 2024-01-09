const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: () => {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, "0"); // Ensure two digits for hours
      const minute = String(now.getMinutes()).padStart(2, "0"); // Ensure two digits for minutes
      return `${hour}:${minute}`;
    },
  },
});

module.exports = mongoose.model("Message", messageSchema);
