var express = require('express');
var database = require('./app/services/database.js');
var fs = require('fs');
var join = require('path').join;

var app = express();
var port = 3000;

database.connect();

fs.readdirSync(join(__dirname, 'app/models')).forEach(function (file) {
  if (~file.indexOf('.js')) require(join(__dirname, 'app/models', file));
});

require('./config/express')(app);
require('./config/routes')(app);

app.listen(port);

console.log('Example app listening at http://localhost:%s', port);
