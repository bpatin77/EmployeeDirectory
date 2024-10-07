// TODO: this file :)
const express = require("express");
const employess = require("./employess");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employess);
});

app.listen(PORT, () => {
  console.log(`Listening on port #${PORT}`);
});