var morgan = require('morgan');
var express = require('express');

module.exports = function(app) {
	app.set('view engine', 'ejs');
	app.use(morgan('dev'))
	console.log(__dirname);
	app.use('/bower_components',  express.static(__dirname + '/../bower_components'));
	app.use('/public',  express.static(__dirname + '/../public'));
    app.use('/views',  express.static(__dirname + '/../views'));
}