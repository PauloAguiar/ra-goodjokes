

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate'});
	});

	app.param ('userId',        users.load);
	app.get   ('/users/:id',    users.show);
	app.get   ('/users/create', users.create);
	app.get   ('/users/edit',   users.edit);
	app.post  ('/users',        users.save);
	app.put   ('/users/:id',    users.update);
	app.delete('users/:id',     users.remove);

}