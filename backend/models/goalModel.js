const mongoose = require("mongoose");

// schema design
const goalSchema = mongoose.Schema(
  {
    goal: {
      type: String,
      // unique: true
      required: [true, "Text Value must contain some data"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Goals", goalSchema);
