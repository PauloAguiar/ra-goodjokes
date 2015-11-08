
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Tag = mongoose.model('Tag');
var Question = mongoose.model('Question');

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
    .populate('_questions')
    .exec(function (err, results) {
      res.json(results);
    });

  // res.render('tags/show', {
  //   title: tag.name,
  //   tag: tag
  // });
};