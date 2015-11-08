
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Question = mongoose.model('Question');

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


exports.answer = function(req, res) {
  console.log(req.body);
}