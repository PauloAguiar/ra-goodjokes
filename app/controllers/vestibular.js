
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Vestibular = mongoose.model('Vestibular');

/**
 * Load
 */

exports.load = function (req, res, next, id) {
  var options = {
    criteria: { _id : id }
  };
  Vestibular.load(options, function (err, vestibular) {
    if (err) return next(err);
    if (!vestibular) return next(new Error('Failed to load Vestibular ' + id));
    req.profile = vestibular;
    next();
  });
};

/**
 *  Show profile
 */

exports.show = function (req, res) {
  var vestibular = req.profile;
  res.render('vestibulars/show', {
    title: vestibular.name,
    vestibular: vestibular
  });
};