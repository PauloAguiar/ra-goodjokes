
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

exports.save = function (req, res) {
  console.log(req.body);
  var vestibular = new Vestibular(req.body);
  vestibular.save(function (err) {
    if (err) {
      return res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
    }
    else {
      res.status(404)        // HTTP status 404: NotFound
        .send('Tudo OK!');
    }
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