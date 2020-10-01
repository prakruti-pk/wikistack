const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, User, Page } = require("./models");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res, next) => {
  res.send("helloworld");
});

const init = async() => {
await db.sync()
.then (() => {
console.log('db is synced!')
},
await Page.sync()
.then (() => {
console.log('Page is synced!')
},
await User.sync()
.then (() => {
  console.log("we're connected to the User!")
},
app.listen(3000, () => {
  console.log("im listening to port 3000");
});
}
