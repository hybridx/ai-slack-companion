const { logger } = require('../../utils/logger');

const pingCommandCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond('Pong');
    logger.trace('command');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { pingCommandCallback };
