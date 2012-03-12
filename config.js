var config = {
	flickr: {
		oauth_action_request_token: 'http://www.flickr.com/services/oauth/request_token',
		oauth_action_user_authorize: 'http://www.flickr.com/services/oauth/authorize',
		oauth_action_access_token: 'http://www.flickr.com/services/oauth/access_token',
		oauth_action_api: 'http://api.flickr.com/services/rest',
		
		oauth_consumer_key: '3685d623f66103923b80d2bab825ae87',
		oauth_consumer_secret: '9ec1240adf6d1dc7',
		oauth_callback: 'http://localhost:3000/oauth/flickr/callback/',
		method: ''
	}
};

module.exports = config;
