const { createLogger, format, transports, addColors } = require('winston');

const customLevels = {
  levels: {
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    info: 'cyan',
    warn: 'yellow',
    error: 'red',
    fatal: 'orange',
  },
};

const formatter = format.combine(
  format.colorize(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.splat(),
  format.printf(info => {
    const { timestamp, level, message, ...meta } = info;

    return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''}`;
  })
);

class Logger {
  constructor() {
    const production = process.env.ENV;
    if (production === 'development') {
      this.logger = createLogger({
        transports: [new transports.Console()],
        transports: new transports.Console({
          format: formatter,
          level: 'info',
        }),
        exceptionHandlers: new transports.Console({
          format: formatter,
        }),
        levels: customLevels.levels,
      });
    }
    if (production === 'beta') {
      this.logger = createLogger({
        transports: new transports.Console({
          format: formatter,
          level: 'info',
        }),
        exceptionHandlers: new transports.Console({
          format: formatter,
        }),
        levels: customLevels.levels,
      });
    }
    if (production === 'production') {
      this.logger = createLogger({
        transports: [
          new transports.File({
            filename: '../logs/error.log',
            level: 'info',
          }),
          new transports.File({
            filename: '../logs/server.log',
          }),
        ],
        exceptionHandlers: new transports.File({
          filename: '../logs/exceptions.log',
          handleRejections: true,
        }),
        levels: customLevels.levels,
      });
    }
    addColors(customLevels.colors);
  }

  info(msg, meta) {
    this.logger.info(msg, meta);
  }

  warn(msg, meta) {
    this.logger.warn(msg, meta);
  }

  error(msg, meta) {
    this.logger.error(msg, meta);
  }

  fatal(msg, meta) {
    this.logger.log('fatal', msg, meta);
  }
}

module.exports = Logger;
