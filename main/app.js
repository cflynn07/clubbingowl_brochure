// Generated by CoffeeScript 1.4.0
(function() {
  var app, express, http, path, routes, user;

  express = require('express');

  routes = require('./routes');

  user = require('./routes/user');

  http = require('http');

  path = require('path');

  app = express();

  app.configure(function() {
    app.use(function(req, res, next) {
      res.removeHeader('X-Powered-By');
      return next();
    });
    if (process.env.NODE_ENV === 'production') {
      app.set('port', 8080);
    } else {
      app.set('port', 8080);
    }
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express["static"](path.join(__dirname, 'public')));
    return app.use(app.router);
  });

  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', routes.index);

  app.get('/features', routes.features);

  app.get('/features/:feature', routes.feature);

  app.get('/faq', routes.faq);

  app.get('/about', routes.about);

  app.get('/blog', routes.blog);

  app.get('/contact', routes.contact);

  app.get('*', routes.error);

  http.createServer(app).listen(app.get('port'), function(x) {
    return console.log('Express server listening on port ' + app.get('port'));
  });

}).call(this);
