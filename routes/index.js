
/*
 * GET home page.
 */
var config = require('../config');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
  res.end();
};

exports.oauth_flickr_start = function(req, res){
	console.log(new Date().toLocaleTimeString() + ' route:oauth_flickr_start - Iniciado.');
	console.log(require('../extra'));
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