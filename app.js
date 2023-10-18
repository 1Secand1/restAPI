const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.relative(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.relative(__dirname, "client", "index.html"));
});

app.listen(3001, () => {
  console.log(`Server has been started on port 3000...`);
});