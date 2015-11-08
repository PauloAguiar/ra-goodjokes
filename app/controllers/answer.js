
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');

exports.remove = function(req, res) {
  console.log(req.params.answerId);
  Answer.findByIdAndRemove(req.params.answerId, function(err, answer) {
    console.log(answer);
    if (err) return res.error({'msg': 'error_on_finding answer'});
    Question.findById(answer._question, function(err, question) {
      var index = question._answers.indexOf(answer);
      console.log("Index of answer:", index);
      if (index >= 0) question._answers.splice(index, 1);
      question.save(function (err) {
        if (err) return res.error({'msg': 'error_on_deleting_answer'});
          return res.error({'msg': 'question_saved'});
      });
    });
  });
}

exports.upvote = function (req, res) {
  var aId = req.params.answerId;
  var status = req.params.status;

  return Answer.findOne({ _id : aId })
        .exec(function(err, a) {          
          if (err)
            return res.error({'msg': 'error_on_save_answer'});
            if (status === 'true')
              a.upvotes += 1;
            else
              a.upvotes -= 1; 
               if (a.upvotes <= 0)
                a.upvotes = 0;
                
              a.save();
              res.json(a);    
      });
};


exports.downvote = function (req, res) {
  var aId = req.params.answerId;
  var status = req.params.status;

  return Answer.findOne({ _id : aId })
        .exec(function(err, a) {          
          if (err)
            return res.error({'msg': 'error_on_save_answer'});
            if (status === 'true')
              a.downvotes += 1;
            else
              a.downvotes -= 1; 
              
              if (a.downvotes <= 0)
                a.downvotes = 0;
              a.save();
              res.json(a);    
      });
}; 