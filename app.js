var express = require('express');
var app = express();
var morgan = require('morgan');
var database = require('./app/services/database.js');

app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
  res.render('index', {'title': 'Good Jokes Mate'});
});

database.connect(onConnectedToDatabase);

function onConnectedToDatabase() {
	var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
	});
}