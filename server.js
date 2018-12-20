const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("It works!");
});

app.listen(3000, () => {
  console.log("Serving listening to port 3000...");
});
