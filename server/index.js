const dotenv = require("dotenv");

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "/env/.env.dev" });
}

const express = require("express");
const logger = require("#utils/logger");
const app = express();
const port = process.env.PORT || 8089;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
