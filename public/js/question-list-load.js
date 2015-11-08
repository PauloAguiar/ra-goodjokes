if(templates === undefined) {
  var templates = {};
}
$(document).ready(function() {
    $.get('/public/ejs/question-small.ejs', function (template) {
        templates.question = ejs.compile(template);
        $.get('/questionsSample', function (data) {
          data.forEach(function(d) {
            var html = templates.question({'question': d});
            return $('#content-view').append(html);
          });
        });
    });
});