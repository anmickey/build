const { transports, format, createLogger } = require('winston');
const { combine, timestamp, printf, errors, colorize, splat } = format;
const path = require('path');

const myFormat = printf(({ level, label, message, timestamp, stack }) => {
  return `${timestamp} [${label}] ${level}: ${message} ${stack}`;
});

const errorsFormat = errors({ stack: true });

const logger = createLogger({
  //   format: combine(timestamp(), myFormat),
  format: combine(
    splat(),
    colorize({ all: true }),

    //  label({ label: filename }),
    timestamp({ format: 'YY-MM-DD HH:MM:SS' }),
    myFormat,
  ),
  transports: [
    new transports.Console({
      colorize: true,
      format: combine(errorsFormat),
    }),
    new transports.File({
      level: 'info',
      maxSize: '20m',
      maxFiles: '2d',
      filename: path.resolve(__dirname, '..', 'logs', 'application.log'),
    }),
    new transports.File({
      level: 'error',
      maxSize: '20m',
      maxFiles: '4d',
      filename: path.resolve(__dirname, '..', 'logs', 'error.log'),
    }),
  ],
});

module.exports = logger;
