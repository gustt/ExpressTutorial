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
console.log(require('./'));
/*
var request			= require('request'),
	qs				= require('querystring'),
	config			= module.exports.config,
	oauth_cache		= {
		consumer_key: 			config.oauth_consumer_key,
		consumer_secret: 		config.oauth_consumer_secret,
		token: 					'',
		token_secret: 			''	
	},
	oauth_message	= {
		action: 				config.oauth_action_request_token,
		parameters: {
			consumer_key: 		config.oauth_consumer_key,
			consumer_secret: 	config.oauth_consumer_secret
		}
	};
	
console.log(config);
	
//Getting a request token
request.post({ url: oauth_message.action, oauth:oauth_message.parameters }, function(e, r, body){
	var pars = qs.parse(body);
	
	oauth_message.parameters = {
		consumer_key: 'key',
		consumer_secret: 'secret',
		token: pars.oauth_token,
		token_secret: pars.oauth_token_secret
	};
	oauth_cache.token = oauth_message.parameters.token;
	oauth_cache.token_secret = oauth_message.parameters.token_secret;

	//Getting an access token	
	request.post({ url: oauth_message.action, oauth:oauth_message.parameters }, function(e, r, body){
		var pars = qs.parse(body);
		
		oauth_message.parameters = {
			consumer_key: 'key',
			consumer_secret: 'secret',
			token: pars.oauth_token,
			token_secret: pars.oauth_token_secret,
		};
	});
});*/