
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
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
  return User.getIdBy({"name" : req.body.name}, function(userId) {
      if(userId !== null) {
        req.body._creator = userId;
  
        var question = new Question(req.body);
      
        return question.save(function (err) {
          if (err)
            return res.error({'msg': 'error_on_save_question'});
          
          return res.json({'msg': 'question_saved'});
        });
      }
      else {
        return res.error({'msg': 'used_id_not_found'});
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
  var query = req.query.q;
  Question.find(
    { "title": { "$regex": query, "$options": "i" } })
      .populate( '_creator', 'id name')
      .exec(function (err, results) {
        res.json(results);
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
