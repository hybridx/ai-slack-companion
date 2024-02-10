const { chat } = require('../../services/chat');
const { logger } = require('../../utils/logger');

const appMentionCallback = async ({ event, say }) => {
  try {
    logger.trace(event);
    const data = await chat(event.text);
    await say(data.response);
  } catch (error) {
    logger.error(`${error.name}: ${error.message}`);
  }
};

module.exports = { appMentionCallback };
