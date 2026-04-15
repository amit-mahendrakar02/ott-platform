const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

// Use service names instead of localhost
const CONTENT_SERVICE = "http://content-service:3001";
const STREAMING_SERVICE = "http://streaming-service:3002";

// Route: get movies
app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get(`${CONTENT_SERVICE}/movies`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Content service not reachable" });
  }
});

// Route: watch movie
app.get("/watch/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `${STREAMING_SERVICE}/watch/${req.params.id}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Streaming service not reachable" });
  }
});

app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});