var express = require("express");
var app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send('{ "response": "Hello Dockerize App" }');
});

app.get("/will", function (req, res) {
  res.send('{ "response": "Hello World" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});
app.listen(port, () => {
  console.log(`App is listennign in port ${port}`);
});

module.exports = app;
