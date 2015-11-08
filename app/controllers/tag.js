
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Tag = mongoose.model('Tag');

exports.show = function() {}




// /**
//  * Load
//  */

// exports.load = function (req, res, next, id) {
//   var options = {
//     criteria: { _id : id }
//   };
//   User.load(options, function (err, user) {
//     if (err) return next(err);
//     if (!user) return next(new Error('Failed to load User ' + id));
//     req.profile = user;
//     next();
//   });
// };

// /**
//  * Create user
//  */

// exports.save = function (req, res) {
//   var user = new User(req.body);
//   console.log(user);
//   user.save(function (err) {
//     if (err) {
//       return res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
//     }
//   });
// };

// /**
//  *  Show profile
//  */

// exports.create = function (req, res) {
//   res.render('users/create');
// };

// exports.show = function (req, res) {
//   var user = req.profile;
//   res.render('users/show', {
//     title: user.name,
//     user: user
//   });
// };

// exports.signin = function (req, res) {};

// /**
//  * Auth callback
//  */

// exports.authCallback = login;

// /**
//  * Show login form
//  */

// exports.login = function (req, res) {
//   res.render('users/login', {
//     title: 'Login'
//   });
// };

// /**
//  * Show sign up form
//  */

// exports.signup = function (req, res) {
//   res.render('users/signup', {
//     title: 'Sign up',
//     user: new User()
//   });
// };

// /**
//  * Logout
//  */

// exports.logout = function (req, res) {
//   req.logout();
//   res.redirect('/login');
// };

// /**
//  * Session
//  */

// exports.session = login;

// /**
//  * Login
//  */

// function login (req, res) {
//   var redirectTo = req.session.returnTo ? req.session.returnTo : '/';
//   delete req.session.returnTo;
//   res.redirect(redirectTo);
// };
