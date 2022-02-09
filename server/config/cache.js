const redis = require("redis");
const logger = require("#utils/logger");

const cache = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  database: process.env.REDIS_DB,
});

(async () => {
  try {
    await cache.connect();
  } catch (e) {
    logger.console.warn(e);
  }
})();

module.exports = cache;
