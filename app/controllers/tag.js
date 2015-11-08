
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Tag = mongoose.model('Tag');
var Question = mongoose.model('Question');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

/**
 * Load
 */

exports.load = function (req, res, next, id) {
  var options = {
    criteria: { _id : id }
  };
  Tag.load(options, function (err, tag) {
    if (err) return next(err);
    if (!tag) return next(new Error('Failed to load tag ' + id));
    req.profile = tag;
    next();
  });
};

exports.save = function (req, res) {
  console.log(req.body);
  var tag = new Tag(req.body);
  tag.save(function (err) {
    if (err) {
      return res.render('index', {'title': 'Good Jokes Mate', 'tags': ['good', 'jokes', 'mate', 'oi', 'tudo', 'bem', 'la', '123412', 'olaaa']});
    }
    else {
    	res.status(404)        // HTTP status 404: NotFound
   			.send('Tudo OK!');
    }
  });
};

exports.show = function (req, res) {
  var tagId = req.params.tagId;

  Tag.findById(tagId)
    .deepPopulate('_questions._vestibular _questions._answers _questions._tags')
    .exec(function(err, res) {
        console.log(JSON.stringify(res));
    });
  // Tag.findById(tagId)
  //   .populate('_questions')
  //   .populate('_questions._tags')
  //   .populate('_questions._vestibular')
  //   // .populate('_questions.answers')
  //   .exec(function (err, results) {
      
  //     console.log(JSON.stringify(results));

  //     res.json(results);
  //   });

  // res.render('tags/show', {
  //   title: tag.name,
  //   tag: tag
  // });
};

exports.recent = function (req, res) {
  Tag.find({})
    .populate('_questions')
    .limit(10)
    .sort('-updated_at')
    .exec(function (err, results) {
      res.json(results);
    });
};

exports.all = function (req, res) {
  Tag.find({})
    .exec(function (err, results) {
      res.json(results);
    });
};


