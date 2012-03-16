var http = require('http');
http.createServer(function(req, resp){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Teste');
}).listen(15706);
