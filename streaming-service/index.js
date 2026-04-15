const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/watch/:id", (req, res) => {
  res.json({
    movieId: req.params.id,
    message: "Streaming started 🎬",
    streamUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny.mp4"
  });
});

app.listen(3002, () => {
  console.log("Streaming Service running on port 3002");
});
