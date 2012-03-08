
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

module.exports.config = require('./config');

//Demais módulos
var routes	= require('./routes')
  , auth	= require('./auth');


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);
app.get('/oauth', routes.oauth);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
