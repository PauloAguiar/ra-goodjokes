var user = require('../app/controllers/user.js');
var question = require('../app/controllers/question.js');
var tag = require('../app/controllers/tag.js');
var vestibular = require('../app/controllers/vestibular.js');
var answer = require('../app/controllers/answer.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});
	
	//users routes
	app.param ('userId',         user.load);
	app.get   ('/users/:userId', user.show);
	app.post  ('/users',         user.save);
	
	//question routes
	app.get   ('/questions/search',             question.list);
	app.param ('questionId',      			    question.load);
	app.get   ('/questions/:questionId',        question.show);
	app.post  ('/questions'            ,        question.save);
	app.post  ('/questions/:questionId/answer', question.answer);
	app.delete('/questions/:questionId',        question.remove);
	
	//answer routes
	app.delete('/answers/:answerId', answer.remove);
	
	//tag routes
	app.get   ('/tags/:tagId/getName', tag.getName)
    app.get   ('/tags/:tagId', 		   tag.show);
	app.get   ('/tags',        		   tag.all);
    app.get   ('/tags/recent', 		   tag.recent); //most recent
	app.post  ('/tags',        		   tag.save);

	//vestibular routes
    app.get   ('/vestibulars/recent',        vestibular.recent);
    app.get   ('/vestibulars',               vestibular.list);
	app.post  ('/vestibulars',               vestibular.save);
	app.get   ('/vestibulars/:vestibularId', vestibular.show);

    app.get('/question_view', function (req, res) {
        res.render('question_view', {'title': 'Good Jokes Mate'});
    });

    app.get('/questionsSample', function (req, res) {
        res.json(
            [
                {
                    'id': 2,
                    'answers': 0,
                    'views': 550,
                    'votes': 2,
                    'text': 'Good Jokes Mate',
                    'tags': ['good', 'jokes', 'mate'],
                    'vest': {'name': 'ITA 2015', 'id': '1', 'tag': 'ita-2015'},
                    'date': 1446950406,
                    'user': 'alexandremuzio'
                },
                {
                    'id': 3,
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 2',
                    'tags': ['real', 'funny'],
                    'date': 1446949866,
                    'user': 'johngarden'
                },
                {
                    'id': 4,
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 3',
                    'tags': ['real', 'funny'],
                    'vest': {'name': 'ITA 2015', 'id': '2', 'tag': 'ita-2015'},
                    'date': 1446949866,
                    'user': 'mateus'
                }
            ]);
    });

    app.get('/questionsSample/ita-2015', function (req, res) {
        res.json(
            [
                {
                    'id': 2,
                    'answers': 0,
                    'views': 550,
                    'votes': 2,
                    'text': 'Good Jokes Mate',
                    'tags': ['good', 'jokes', 'mate'],
                    'vest': {'name': 'ITA 2015', 'id': '1', 'tag': 'ita-2015'},
                    'date': 1446950406,
                    'user': 'alexandremuzio'
                },
                {
                    'id': 3,
                    'answers': 11,
                    'views': 2000,
                    'votes': 0,
                    'text': 'Good Jokes Mate 3',
                    'tags': ['real', 'funny'],
                    'vest': {'name': 'ITA 2015', 'id': '2', 'tag': 'ita-2015'},
                    'date': 1446949866,
                    'user': 'mateus'
                }
            ]);
    });

    app.get('/questionsSample/ime-2015', function (req, res) {
        res.json([]);
    });

    // app.get('/lastVestListSample', function (req, res) {
    //     res.json(
    //         [
    //             {'text': 'ITA 2015', 'tag': 'ita-2015', 'id': '1', 'count': 2},
    //             {'text': 'IME 2015', 'tag': 'ime-2015', 'id': '2', 'count': 0}
    //         ]);
    // });

    app.get('/tags/ita', function (req,res) {
        res.json(
            [
                {
                    'id': 4,
                    'answers': 0,
                    'views': 550,
                    'votes': 2,
                    'text': 'Good Jokes Mate',
                    'tags': ['good', 'jokes', 'mate'],
                    'vest': {'name': 'ITA 2015', 'id': '1', 'tag': 'ita-2015'},
                    'date': 1446950406,
                    'user': 'alexandremuzio'
                }
            ]);
    });
    
    app.get('/question/2', function (req, res) {
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
};
