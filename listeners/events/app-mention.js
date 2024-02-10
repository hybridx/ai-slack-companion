const { logger } = require('../../utils/logger');

const appMentionCallback = async ({ event, say }) => {
  try {
    await say(event.text);
    logger.trace(event);
  } catch (error) {
    logger.error(`${error.name}: ${error.message}`);
  }
};

module.exports = { appMentionCallback };
