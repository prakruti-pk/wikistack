const express = require("express");
const morgan = require("morgan");
const app = express();
const { db } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res, next) => {
  res.send("helloworld");
});

app.listen(3000, () => {
  console.log("im listening to port 3000");
});
