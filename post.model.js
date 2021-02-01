const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    numberOfLikes: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
