var morgan = require('morgan');
var express = require('express');
var bodyParser = require("body-parser");

module.exports = function(app) {
	app.set('view engine', 'ejs');
	app.use(morgan('dev'))
	console.log(__dirname);
	app.use('/bower_components',  express.static(__dirname + '/../bower_components'));
	app.use('/public',  express.static(__dirname + '/../public'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
}