
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.oauth = function(req, res){
  res.render('oauthTest', { title: 'Testando oAuth com Flirck' });
};