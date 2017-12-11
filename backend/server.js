var http = require('http');
var app = require('./config/express');

// banco de dados
require('./config/database')('k121:k121@ds133876.mlab.com:33876/k121');

http.createServer(app)
.listen(3000, function() {
	console.log('Servidor iniciado');
});

