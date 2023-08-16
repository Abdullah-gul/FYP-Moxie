const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  seen:{
    type: Boolean,
    required: false,
  }
});

module.exports = mongoose.model("notification", notificationSchema);
