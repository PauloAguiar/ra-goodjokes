var database = {};
var mongoose = require('mongoose');
var config = require('../config.js');

(function(database) {
	var _url;

	database.connect = function(callback) {
		_url = config.getDatabaseURL();
		mongoose.connect(_url);

		mongoose.connection.on('connected', onConnected(callback));
		mongoose.connection.on('error', onError());
		mongoose.connection.on('disconnected', onDisconnected());
	};

	database.getGridFs = function() {
		return _gridFs;
	};

	function onConnected() {
		return function() {
			console.log('Connected to database server at: ' + _url + '.');
			//return callback();
		};
	};

	function onError() {
		return function() {
			console.log('Error when connecting to: ' + _url + '.');
			console.log('Finishing process.');
			return process.exit(1);
		};
	};

	function onDisconnected() {
		return function() {
			console.log('Disconnected from: ' + _url + '.');
			console.log('Finishing process.');
			return process.exit(1);
		};
	};
}(database));

module.exports = database;