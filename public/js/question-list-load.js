if(templates === undefined) {
  var templates = {};
}
$(document).ready(function() {
    $.get('/public/ejs/question-small.ejs', function (template) {
        templates.question = ejs.compile(template);
        GetListedQuestions('/questions');
    });
});