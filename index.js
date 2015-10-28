var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

server.listen(app.get('port'), function(){
    console.log('Express server listening on port 3000');
});
