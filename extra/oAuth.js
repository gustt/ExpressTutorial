/*
                c==o
              _/____\_
       _.,--'" ||^ || "`z._
      /_/^ ___\||  || _/o\ "`-._
    _/  ]. L_| || .||  \_/_  . _`--._
   /_~7  _ . " ||. || /] \ ]. (_)  . "`--.
  |__7~.(_)_ []|+--+|/____T_____________L|
  |__|  _^(_) /^   __\____ _   _|
  |__| (_){_) J ]K{__ L___ _   _]					oAuth Autenticador
  |__| . _(_) \v     /__________|________
  l__l_ (_). []|+-+-<\^   L  . _   - ---L|
   \__\    __. ||^l  \Y] /_]  (_) .  _,--'
     \~_]  L_| || .\ .\\/~.    _,--'"
      \_\ . __/||  |\  \`-+-<'"
        "`---._|J__L|X o~~|[\\
               \____/ \___|[//

 */

var request			= require('request'),
	qs				= require('querystring');
	config			= require('../config').flickr;
	debug			= require('./debug');

var solitarRequestTokenDirecionarParaAutenticacao = function(callback){
		
	var oauth_parameters		= {
			consumer_key: 			config.oauth_consumer_key,
			consumer_secret: 		config.oauth_consumer_secret,
			callback:				config.oauth_callback
		}

	debug.output('oAuth: flickrAutenticar() Start');
	
	//Getting a request token
	request.post({ url: config.oauth_action_request_token, oauth: oauth_parameters },
		function(e, r, body){
			var pars = qs.parse(body);
			debug.output('oAuth: Getting a request token: Callback(){oauth_token:%s, oauth_token_secret:%s}',pars.oauth_token,pars.oauth_token_secret);
			
			oauth_parameters.token = pars.oauth_token;
			oauth_parameters.token_secret = pars.oauth_token_secret;
			
			callback(oauth_parameters); 
	});
};

var solicitarAccessToken = function(oauth_parameters){
	//Getting an access token	
	request.post({ url: config.oauth_action_access_token, oauth: oauth_parameters },
		function(e, r, body){
			var pars = qs.parse(body);
			debug.output('oAuth: Getting an access token: Callback(){oauth_token:%s, oauth_token_secret:%s}',pars.oauth_token,pars.oauth_token_secret);
			oauth_parameters.token = pars.oauth_token;
			oauth_parameters.token_secret = pars.oauth_token_secret;
			oauth_parameters.method = config.method;
			exports.oauth_parameters = oauth_parameters;
	});
};

module.exports = {
	solitarRequestTokenDirecionarParaAutenticacao: solitarRequestTokenDirecionarParaAutenticacao,
	solicitarAccessToken: solicitarAccessToken
};