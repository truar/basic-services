
// Framework d'aide au dev : Express
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var ping = require('./ping/ping.js')(app);
 
var server = app.listen(3000, function() {
	console.log('Basic services running at http://localhost:3000/. version=1.0.0');
});