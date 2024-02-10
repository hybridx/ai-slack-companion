const { appMentionCallback } = require('./app-mention');

module.exports.register = (app) => {
  app.event('app_mention', appMentionCallback);
};
