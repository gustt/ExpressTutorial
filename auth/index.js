var request = require('request'),
	qs = require('querystring'),
	oauth_message = {
		action: 'http://echo.lab.madgex.com/request-token.ashx',
		parameters: {
			consumer_key: 'key',
			consumer_secret: 'secret'
		}
	};
	

request.post({ url: oauth_message.action, oauth:oauth_message.parameters }, function(e, r, body){
	console.log(qs.parse(body));
});
