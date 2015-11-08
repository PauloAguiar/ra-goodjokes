var user = require('../app/controllers/user.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});

	app.get('/create_question', function (req, res) {
  		res.render('create_question', {'title': 'Create question', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});

    app.get('/provas', function (req, res) {
        res.render('provas', {'title': 'Create question', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
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

    app.get('/questionsSample/ime-2015', function (req, res) {
        res.json([]);
    });

    app.get('/lastVestListSample', function (req, res) {
        res.json(
            [
                {'text': 'ITA 2015', 'id': 'ita-2015', 'count': 2},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 0}
            ]);
    });


    app.get('/questionViewSample', function (req, res) {
        res.json(
            
                {'title': 'ITA 2015 DB', 'content': 'blablabla blablabla blablabla do DBblablabla blablabla blablabla do DB', 'votes': 5, 'id': 'suga'}
            );
    });

    app.get('/questionViewAnswerSample', function (req, res) {
        res.json(
            [
                {'title': 'ITA 2015 DB', 'content': 'blablabla blablabla blablabla do DBblablabla blablabla blablabla do DB', 'votes': 5, 'id': 'suga1'},
                {'title': 'ITA 2015 DB', 'content': '2blablabla blablabla blablabla do DBblablabla blablabla blablabla do DB', 'votes': 4 , 'id': 'suga2'},
                {'title': 'ITA 2015 DB', 'content': '2blablabla blablabla blablabla do DBblablabla blablabla blablabla do DB', 'votes': 3 , 'id': 'suga3'}
            ]);
    });

    app.get('/question_view', function (req, res) {
        res.render('question_view', {'title': 'Good Jokes Mate'});
    });


    app.get('/provaListSample', function (req, res) {
        res.json({
            'current_page': 0,
            'total_pages': 2,
            'list': [
                {'text': 'ITA 2015', 'id': 'ita-2015', 'count': 2, 'date': 1446949866},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 0, 'date': 1446949866},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 0, 'date': 1446949866},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 0, 'date': 1446949866},
                {'text': 'IME 2015', 'id': 'ime-2015', 'count': 0, 'date': 1446949866},
            ]});
    });

	app.param ('userId',        user.load);
	app.get   ('/users/:id',    user.show);
	app.get   ('/users/create', user.create);
	// app.get   ('/users/edit',   user.edit);
	// app.post  ('/users',        user.save);
	// app.put   ('/users/:id',    user.update);
	// app.delete('/users/:id',    user.remove);
}