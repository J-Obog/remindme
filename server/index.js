const express = require("express");
const logger = require("./logger");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  logger.info("Hello world");
});
