var templates = {};

$(document).ready(function() {
    getTemplates();
    getQuestionView();
});

function getTemplates() {

    $.get('/views/partials/question-view-answer-list.ejs', function (template) {
        templates.answerList = ejs.compile(template);
        return getQuestionViewAnswer();
    });
} 

function getQuestionView() {
  return $.get('/questionViewSample', function (data) {
      var title = (data.title);
      var content = data.content;
      var votes = data.votes;
      $('#question-title-view').html(title); 
      $('#question-content-view').html(content);
      $('#question-votes-view').html(votes); 
  
  });
}


function getQuestionViewAnswer() {
  return $.get('/questionViewAnswerSample', function (data) {
    var html = templates.answerList({'answerList': data});
    $('#question-view-answer-list').append(html);
  });
}
