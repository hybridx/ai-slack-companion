const commands = require('./commands');
const events = require('./events');

module.exports.registerListeners = (app) => {
  commands.register(app);
  events.register(app);
};
