const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const logger = require("#utils/logger");
const app = express();

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `./environment/${env}.env` });
const port = process.env.PORT || 8089;

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes"));

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
