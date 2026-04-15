const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Route: get movies from content service
app.get("/movies", async (req, res) => {
  const response = await axios.get("http://localhost:3001/movies");
  res.json(response.data);
});

// Route: watch movie
app.get("/watch/:id", async (req, res) => {
  const response = await axios.get(`http://localhost:3002/watch/${req.params.id}`);
  res.json(response.data);
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
