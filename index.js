
// Framework d'aide au dev : Express
var express = require('express');
var app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var ping = require('./ping/ping.js')(app);
 
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);