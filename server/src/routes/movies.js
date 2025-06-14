const express = require("express");
const axios = require("axios");
const router = express.Router();

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_KEY = process.env.TMDB_API_KEY;

router.get("/search", async (req, res) => {
  const { query } = req.query;
  try {
    const { data } = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: { api_key: TMDB_KEY, query },
    });
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const { data } = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: { api_key: TMDB_KEY },
    });
    res.json(data.results);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch popular movies" });
  }
});

module.exports = router;
