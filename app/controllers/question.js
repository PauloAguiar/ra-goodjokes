
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


exports.signin = function (req, res) {};

/**
 * Auth callback
 */

exports.authCallback = login;

/**
 * Show login form
 */

exports.login = function (req, res) {
  res.render('question/login', {
    title: 'Login'
  });
};

/**
 * Show sign up form
 */

exports.signup = function (req, res) {
  res.render('question/signup', {
    title: 'Sign up',
    question: new Question()
  });
};

/**
 * Logout
 */

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/login');
};

/**
 * Session
 */

exports.session = login;

/**
 * Login
 */

function login (req, res) {
  var redirectTo = req.session.returnTo ? req.session.returnTo : '/';
  delete req.session.returnTo;
  res.redirect(redirectTo);
};
