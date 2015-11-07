var config = {};

(function(config) {
	config.getDatabaseURL = function() {
		var dbUser =  "api-mate";
		var dbPassword = "goodjokes";
		var dbUrl = "ds053698.mongolab.com:53698/hackathon-ra";

		return "mongodb://" + dbUser + ":" + dbPassword + "@" + dbUrl;
	};

	config.getDefaultDir = function() {
		var dir = './defaults/';
		return dir;
	};

}(config));

module.exports = config;