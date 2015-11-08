
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

/**
 * Load
 */

exports.load = function (req, res, next, id) {
  var options = {
    criteria: { _id : id }
  };
  Question.load(options, function (err, question) {
    if (err) return next(err);
    if (!question) return next(new Error('Failed to load Question ' + id));
    req.profile = question;
    next();
  });
};

/**
 * Create question
 */

exports.save = function (req, res) {
  var user = new Question(req.body);
  console.log(user);
  user.save(function (err) {
    if (err) {
      return res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
    }
  });
};


/**
 *  Show question
 */

exports.show = function (req, res) {
  var question = req.profile;
  res.render('question/show', {
    title: question.name,
    question: question
  });
};


/**
 *  List questions
 */

exports.list = function (req, res) {
  var question = req.profile;
  res.render('question/show', {
    title: question.name,
    question: question
  });
};

/**
 *  Create Answer
 */

exports.answer = function (req, res) {
   var ans = new Answer(req.body);
  // res.render('question/show', {
  //   title: question.name,
  //   question: question
  // });
};
