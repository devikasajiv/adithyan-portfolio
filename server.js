const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const query = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
  db.query(query, [name, email, message], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Message sent successfully!" });
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
