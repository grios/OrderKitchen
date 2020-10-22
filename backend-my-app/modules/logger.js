const winston = require('winston');
const moment = require('moment');

const colors = 
            {
                trace: 'cyan',
                debug: 'blue',
                info: 'green',
                warn: 'yellow',
                error: 'red',
                off: 'grey',
            };

winston.addColors(colors);

const logger = winston.createLogger({
    transports: [new winston.transports.Console({
        level: 'silly',
        colorize: true,
        format: winston.format.combine(
            winston.format.label({ label: 'main' }),
            winston.format.timestamp(),
            winston.format.printf(
                ({ level, message, label, timestamp }) => winston.format.colorize().colorize(level, `${timestamp} ${label} [${level.toUpperCase()}]: ${(message instanceof Object) ? JSON.stringify(message) : message}`)
            )),
    })],
});
  
module.exports = logger;