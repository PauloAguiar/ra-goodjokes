var express = require('express');
var database = require('./app/services/database.js');

var app = express();
var port = 3000;

database.connect();

require('./config/express')(app);

require('./config/routes')(app);

app.listen(port);

console.log('Example app listening at http://localhost:%s', port);
