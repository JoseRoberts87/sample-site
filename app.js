var express = require('express');
var app = express();
var path = require('path');

// var apiForwardingUrl = 'http://blog.therpiproject.com';
var apiForwardingUrl = 'http://localhost:5000';


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', 3000);

// Serve static directory where our angular app is located.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('port set at ' + port);
});