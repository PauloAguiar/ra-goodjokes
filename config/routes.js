var user = require('../app/controllers/user.js');
var question = require('../app/controllers/question.js');
var tag = require('../app/controllers/tag.js');
var vestibular = require('../app/controllers/vestibular.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});
	
	//users routes
	app.param ('userId',         user.load);
	app.get   ('/users/:userId', user.show);
	app.post  ('/users',         user.save);
	
	//question routes
	// app.param ('questionId',      			    question.load);
	// app.get   ('/questions/:questionId',        question.show);
	// app.get   ('/questions/search/:query',      question.list);
	app.post  ('/questions'            ,        question.save);
	app.post  ('/questions/:questionId/answer', question.answer);
	//app.delete('/questions/:questionId',        question.delete);
	
	//answer routes
	//app.delete('/answer/:answerId',             answer.delete);
	
	//tag routes
	app.get   ('/tag/:tagName', tag.show);

	//vestibular routes
	app.get   ('/vestibular/:vestibularName', vestibular.show);

}