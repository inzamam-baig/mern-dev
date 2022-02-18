const mongoose = require("mongoose");

// schema design
const goalSchema = mongoose.Schema(
  {
    goal: {
      type: String,
      // unique: true
      required: [true, "Goal Value must contain some data"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
