var express = require('express');
var database = require('./app/services/database.js');

var app = express();
var port = 3000;

database.connect();

require('./config/express')(app);

app.get('/', function (req, res) {
  res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
});
app.get('/create_question', function (req, res) {
  res.render('create_question', {'title': 'Create question', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
});
require('./config/routes')(app);

app.listen(port);

console.log('Example app listening at http://localhost:%s', port);
