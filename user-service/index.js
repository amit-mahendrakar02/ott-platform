const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "devops-secret";

// Login (mock)
app.post("/login", (req, res) => {
  const { username } = req.body;

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

  res.json({ token });
});

// Protected route
app.get("/profile", (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.send("No token");

  try {
    const data = jwt.verify(token, SECRET);
    res.json({ message: "User profile", user: data });
  } catch {
    res.send("Invalid token");
  }
});

app.listen(3003, () => {
  console.log("User Service running on 3003");
});
