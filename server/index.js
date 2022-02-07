const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
const express = require("express");
const logger = require("#utils/logger");
const app = express();

dotenv.config({ path: `./environment/${env}.env` });
const port = process.env.PORT || 8089;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
