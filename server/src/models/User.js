const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  movieId: { type: String, required: true },
  review: { type: String },
  rating: { type: Number, min: 0, max: 5 },
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    favorites: {
      type: [String], // array of movie IDs
      default: [],
    },
    watchlist: {
      type: [String],
      default: [],
    },
    reviews: {
      type: [reviewSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
