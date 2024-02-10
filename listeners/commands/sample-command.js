const { logger } = require('../../utils/logger');

const sampleCommandCallback = async ({ ack, respond }) => {
  try {
    await ack();
    await respond('Responding to the sample command!');
    logger.trace('command');
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { sampleCommandCallback };
