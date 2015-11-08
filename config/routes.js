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
	app.param ('questionId',      			    question.load);
	app.get   ('/questions/:questionId',        question.show);
	app.get   ('/questions/search',             question.list);
	app.post  ('/questions'            ,        question.save);
	app.post  ('/questions/:questionId/answer', question.answer);
	app.delete('/questions/:questionId',        question.remove);
	
	//answer routes
	app.delete('/answers/:answerId', answer.remove);
	
	//tag routes
	app.post  ('/tags', tag.save);
	app.get   ('/tags/:tagId', tag.show);

	//vestibular routes
	app.post  ('/vestibulars', vestibular.save);
	app.get   ('/vestibulars/:vestibularId', vestibular.show);

    app.get('/question_view', function (req, res) {
        res.render('question_view', {'title': 'Good Jokes Mate'});
    });


	app.param ('userId',        user.load);
	app.get   ('/users/:id',    user.show);
	app.get   ('/users/create', user.create);
	// app.get   ('/users/edit',   user.edit);
	// app.post  ('/users',        user.save);
	// app.put   ('/users/:id',    user.update);
	// app.delete('/users/:id',    user.remove);
};
