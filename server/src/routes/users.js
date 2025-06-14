const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

router.post("/favorites", auth, async (req, res) => {
  const { movieId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user.favorites.includes(movieId)) {
    user.favorites.push(movieId);
    await user.save();
  }
  res.json(user);
});

router.post("/watchlist", auth, async (req, res) => {
  const { movieId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user.watchlist.includes(movieId)) {
    user.watchlist.push(movieId);
    await user.save();
  }
  res.json(user);
});

router.post("/review", auth, async (req, res) => {
  const { movieId, review, rating } = req.body;
  const user = await User.findById(req.user.id);
  user.reviews.push({ movieId, review, rating });
  await user.save();
  res.json(user);
});

module.exports = router;
