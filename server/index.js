const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Backend Working" });
  res.json({ message: "Updated Backend" });
});

module.exports = app;