const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const timeZoneDate = () => {
  return new Date().toUTCString();
};

const loggerFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    timestamp({ format: timeZoneDate }),
    loggerFormat
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
