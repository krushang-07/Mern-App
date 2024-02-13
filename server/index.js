const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page are here!!");
});
app.get("/about", (req, res) => {
  res.send("about page are here!!");
});
app.get("/contact", (req, res) => {
  res.send("contact page are here!!");
});
app.get("/signin", (req, res) => {
  res.send("signin page are here!!");
});
app.get("/signup", (req, res) => {
  res.send("signup page are here!!");
});

app.listen(8080, () => {
  console.log("server are running on port:8080");
});
