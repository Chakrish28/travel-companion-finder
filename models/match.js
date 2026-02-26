const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    user1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    user2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    compatibilityScore: Number,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
