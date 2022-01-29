const express = require("express");
const logger = require("#utils/logger");
const app = express();
const port = 8080;

app.listen(port, () => {
  logger.info("Hello world");
});
