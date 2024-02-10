const { logger } = require('../../utils/logger');

const sampleMessageCallback = async ({ context, say }) => {
  try {
    const greeting = context.matches[0];
    logger.trace('context');
    await say(`${greeting}, how are you?`);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { sampleMessageCallback };
