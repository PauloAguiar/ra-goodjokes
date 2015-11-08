
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