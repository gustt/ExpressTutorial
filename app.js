
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

//Demais módulos
var routes	= require('./routes')
  , config 	= require('./config');

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
app.get('/oauth/flickr/start', routes.oauth_flickr_start);
app.get('/oauth/flickr/callback', routes.oauth_flickr_callback);

app.listen(15706);
console.log(new Date().toLocaleTimeString() + ' Express server listening on port %d in %s mode', app.address().port, app.settings.env);
