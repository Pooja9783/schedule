const mongoose = require("mongoose");

const scheduleControllers = new mongoose.Schema(
  {
    text: { type: String, require: true },
    dateTime: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("schedule", scheduleControllers);
