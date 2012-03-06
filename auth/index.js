
var request = require('request'),
	qs = require('querystring'),
	oauth = {
		callback: 'http://mysite.com/callback/',
		consumer_key: 'key',
		consumer_secret: 'secret'
	},
	url = 'http://echo.lab.madgex.com/request-token.ashx';

request.get({url: url, oauth:oauth}, function(e, r, body){
	console.log(e);
});
