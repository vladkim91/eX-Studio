const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/authtest', { target: window.location.origin })),
    app.use(proxy('/api/**', { target: window.location.origin }));
};
