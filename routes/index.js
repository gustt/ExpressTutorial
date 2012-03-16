
/*
 * GET home page.
 */
var config		= require('../config'),
	debug		= require('../extra/debug');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  res.end();
};

exports.oauth_flickr_start = function(req, res){
	debug.output('route:oauth_flickr_start - Iniciado.');
	var flickr_auth = require('../extra').oAuth;
	var qs = require('querystring');
	var callback = function(params){
		res.redirect(config.flickr.oauth_action_user_authorize + '?' + 
						qs.stringify({oauth_token: params.token}));
	};
	
	flickr_auth.solitarRequestTokenDirecionarParaAutenticacao(callback);
};

exports.oauth_flickr_callback = function(req, res){
  res.render('flickr_auth_callback', { title: 'Solicitando permissão do Flickr' });
};