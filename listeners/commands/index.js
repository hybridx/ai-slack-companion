const { pingCommandCallback } = require('./pingCommand');

module.exports.register = (app) => {
  app.command('/ping', pingCommandCallback);
};
