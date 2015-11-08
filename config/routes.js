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

    app.get('/questionsSample', function (req, res) {
        res.json(
            [
                {
                    'answers': 0,
                    'views': 550,
                    'votes': 2,
                    'text': 'Good Jokes Mate',
                    'tags': ['good', 'jokes', 'mate'],
                    'vest': ['ITA 2015'],
                    'date': 1446950406,
                    'user': 'alexandremuzio'
                },
                {
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 2',
                    'tags': ['real', 'funny'],
                    'date': 1446949866,
                    'user': 'johngarden'
                },
                {
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 3',
                    'tags': ['real', 'funny'],
                    'vest': ['ITA 2015'],
                    'date': 1446949866,
                    'user': 'mateus'
                }
            ]);
    });

    app.get('/questionsSample/ita-2015', function (req, res) {
        res.json(
            [
                {
                    'answers': 0,
                    'views': 550,
                    'votes': 2,
                    'text': 'Good Jokes Mate',
                    'tags': ['good', 'jokes', 'mate'],
                    'vest': ['ITA 2015'],
                    'date': 1446950406,
                    'user': 'alexandremuzio'
                },
                {
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 3',
                    'tags': ['real', 'funny'],
                    'vest': ['ITA 2015'],
                    'date': 1446949866,
                    'user': 'mateus'
                }
            ]);
    });

    app.get('/lastVestListSample', function (req, res) {
        res.json(
            [
                {'text': 'ITA 2015', 'id': 'ita-2015', 'count': 24},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 2}
            ]);
    });

	app.param ('userId',        user.load);
	app.get   ('/users/:id',    user.show);
	app.get   ('/users/create', user.create);
	// app.get   ('/users/edit',   user.edit);
	// app.post  ('/users',        user.save);
	// app.put   ('/users/:id',    user.update);
	// app.delete('/users/:id',    user.remove);
}