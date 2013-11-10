var config = require('./config');

module.exports = function (compound) {
  var app = compound.app;

  var environment = 'func01';
  app.configure(environment, function () {
    app.enable('watch');
    app.disable('assets timestamps');
    app.use(require('express').errorHandler());
    app.settings.quiet = true;

    var config = config[environment];
    console.log('config: ', config);
    app.set('config', config);
  });
};
