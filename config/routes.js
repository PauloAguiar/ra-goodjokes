module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate'});
	});

    app.get('/statistics', function (req, res) {
        res.render('statistics', {'title': 'Good Jokes Mate'});
    });
}