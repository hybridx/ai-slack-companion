const pino = require('pino');

const logger = pino({
  level: process.env.PINO_LEVEL,
  transport: {
    target: 'pino-pretty',
  },
});

module.exports = { logger };
