const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake movie database
let movies = [
  { id: 1, title: "Avengers Endgame", genre: "Action", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny.mp4" },
  { id: 2, title: "Interstellar", genre: "Sci-Fi", url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny.mp4" }
];

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Content Service OK 🚀" });
});

// Get all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// Add movie (admin simulation)
app.post("/movies", (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.json({ message: "Movie added", movie });
});

app.listen(3001, () => {
  console.log("Content Service running on port 3001");
});
