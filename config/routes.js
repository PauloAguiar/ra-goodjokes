var user = require('../app/controllers/user.js');

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
	});

	app.param ('userId',         user.load);
	app.get   ('/users/:userId', user.show);
	app.post  ('/users',         user.save);

	app.get   ('/questions/search/:query',      question.list);
	app.get   ('/questions/:questionId',        question.show);
	app.post  ('/questions'            ,        question.save);
	app.post  ('/questions/:questionId/answer', question.answer);
	//app.delete('/questions/:questionId',        question.delete);

	//app.delete('/answer/:answerId',             answer.delete);

	app.get   ('/tag/:tagName', tag.show);



}