const express = require("express");
const morgan = require("morgan");
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
});
