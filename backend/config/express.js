const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static('./../frontend/dist'));
app.use(bodyParser.json({limit: '20mb'}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');	
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

consign({cwd: 'app'})
	.include('models')
	.then('tools')
	.then('api')
	.then('routes')
	.into(app);


app.all('/*', function(req, res) {
	res.sendFile(path.resolve('./../frontend/dist/index.html'));
});

module.exports = app;
