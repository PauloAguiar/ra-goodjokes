
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Vestibular = mongoose.model('Vestibular');
var Question  = mongoose.model('Question');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

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
 *  Show
 */

exports.show = function (req, res) {
  var vestibularId = req.params.vestibularId;
  
    Question.find({"_vestibular" : vestibularId})
    .deepPopulate('_vestibular _answers _tags _creator')
    .exec(function (err, results) {
      res.json({'_questions': results });
    });
};


exports.recent = function (req, res) {
    Vestibular
        .aggregate(
      [
        {
          $project: {
            text: {$toUpper: "$name"},
            _id: 1,
            count: {$size: "$_questions"}
            
          }
        }
      ]
    )
    .limit(10)
    .sort('-updated_at')
    .exec(function (err, results) {
      console.log(JSON.stringify(results));
      return res.json(results);
    });
};

exports.list = function (req, res) {
    Vestibular.find({})
    .exec(function (err, results) {
      res.json(results);
    });
};