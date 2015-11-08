var user = require('../app/controllers/user.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});
	app.get('/create_question', function (req, res) {
  		res.render('create_question', {'title': 'Create question', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});

    app.get('/statistics', function (req, res) {
        res.render('statistics', {'title': 'Good Jokes Mate'});
    });

	app.param ('userId',        user.load);
	app.get   ('/users/:id',    user.show);
	app.get   ('/users/create', user.create);
	// app.get   ('/users/edit',   user.edit);
	// app.post  ('/users',        user.save);
	// app.put   ('/users/:id',    user.update);
	// app.delete('/users/:id',    user.remove);
}