const dotenv = require("dotenv");
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `./environment/${env}.env` });

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
};
