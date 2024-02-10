require('dotenv').config();
const { App } = require('@slack/bolt');
const { logger } = require('./utils/logger');
const { registerListeners } = require('./listeners');

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});
/** Register Listeners */
registerListeners(app);

app.error(() => {
  logger.fatal('This is fatal error');
});

/**
 * Start the app slack server
 */
(async () => {
  try {
    await app.start(process.env.PORT || 3000);
    logger.info('⚡️ App is running!');
  } catch (error) {
    logger.error(`App start error: ${error}`);
  }
})();
