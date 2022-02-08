const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const loggerFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    timestamp({
      format: () => {
        return new Date().toUTCString();
      },
    }),
    loggerFormat
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
