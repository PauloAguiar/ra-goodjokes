
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Tag = mongoose.model('Tag');
var Vestibular = mongoose.model('Vestibular');
var Answer = mongoose.model('Answer');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

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
  return User.getIdBy({"username" : req.body.name}, function(userId) {
      if(userId !== null) {
        req.body._creator = userId;
  
        var question = new Question(req.body);
      
        return question.save(function (err) {
          if (err)
            return res.error({'msg': 'error_on_save_question'});
            
          //Add to existing tags
          question._tags.forEach(function(tagId, idx, array) {
            return Tag.findById(tagId, function (err, tag) {
                tag._questions.push(question._id);
                tag.save(function(err) {
                  //caguei
                })
            });
          });
          
          //Add to existing vestibular
          Vestibular.findById(question._vestibular, function (err, vestibular) {
                vestibular._questions.push(question._id);
                vestibular.save(function(err) {
                  //caguei
                });
            });
          
          return res.json({'msg': 'question_saved'});
        });
        
      }
      else {
        return res.json({'msg': 'used_id_not_found'});
      }
  });
};


/**
 *  Show question
 */

exports.show = function (req, res) {
  var qId = req.params.questionId;
  
    return Question.findOne({ _id : qId })
        .populate('_creator', 'id name')
        .exec(function(err, q) {          
          if (err)
            return res.error({'msg': 'error_on_save_answer'});
          res.json(q);
    });
    
  // res.render('question/show', {
  //   title: question.name,
  //   question: question
  // });
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
        if (err)
          return res.error({'msg': 'error_on_listing'});
        res.json(results);
      });
};

/**
 *  Create Answer
 */

exports.answer = function (req, res) {
  req.body._question = Number(req.params.questionId);
  console.log(req.body);
  
  User.findOne({ "name": req.body.name }, function(err, user) {
    var ans = new Answer(req.body);

    return ans.save(function (err) {
      if (err)
        return res.error({'msg': 'error_on_save_answer'});
      console.log(ans);
      return Question.findById(ans._question, function(err, question) {
          if (err)
            return res.json({'msg': 'error_on_updating_question'});
          console.log(question);
          question._answers.push(ans._id);
          console.log('After push', question);
          return question.save(function(err) {
            console.log(err);
            if(err)
              return res.json({'msg': 'error_on_saving_question'});
            return res.json({'msg': 'answer added'});
          });
          
        });
    });
  });
};

exports.remove = function (req, res) {
  Question.findByIdAndRemove(req.params.questionId, function(err, question) {    
    if (err)
      return res.error({'msg': 'error_on_deleting_question'});
    Answer.remove({ "_question": question._id }, function(err) {
      if (err)
        return res.error({'msg': 'error_on_deleting_question_answers'});
      
      return res.json({'msg': 'answers_deleted'});
    })
  });
};

exports.default = function (req, res) {
  Question.find()
    .deepPopulate('_vestibular _answers _tags _creator')
    .limit(10)
    .exec(function(err, results) {
        console.log(results);
        return res.json({"_questions" : results});
    });
};

exports.upvote = function (req, res) {
  var qId = req.params.questionId;
  var status = req.params.status;

  return Question.findOne({ _id : qId })
        .exec(function(err, q) {          
          if (err)
            return res.error({'msg': 'error_on_save_answer'});
            console.log(status);
            if (status === 'true')
              q.upVotes += 1;
            else
              q.upVotes -= 1; 
              
               if (q.upVotes <= 0)
                q.upVotes = 0;
                
              q.save();
              res.json(q);    
      });
};


exports.downvote = function (req, res) {
  var qId = req.params.questionId;
  var status = req.params.status;

  return Question.findOne({ _id : qId })
        .exec(function(err, q) {          
          if (err)
            return res.error({'msg': 'error_on_save_answer'});
            console.log(status);
            if (status === 'true')
              q.downVotes += 1;
            else
              q.downVotes -= 1; 
              
              if (q.downVotes <= 0)
                q.downVotes = 0;
              q.save();
              res.json(q);    
      });
};