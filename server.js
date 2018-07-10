var http = require('http');
var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'common')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = http.createServer(app);

var port = 4000;
var host = '127.0.0.1';

server.listen(port, host);

console.log(`server started at http://${host}:${port}`);
