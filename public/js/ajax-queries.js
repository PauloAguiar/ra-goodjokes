function GetListedQuestions(vestId)
{
    return $.get('/questionsSample/' + vestId, function (data) {
        $('#content-view').empty();
        $('#tabs').show();
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#content-view').append(html);
            });
        }
        else
        {
            return $('#content-view').append("<center>Nenhuma pergunta encontrada.</center>");
        }
    });
}

function GetProvasList() {
  $.get('/public/ejs/prova-list.ejs', function (template) {
      templates.provaList = ejs.compile(template);
      $.get('/provaListSample', function (data) {
        var html = templates.provaList({'provaData': data});
        $('#tabs').hide();
        return $('#content-view').empty().append(html);
      });
  });
}

function GetQuestionForm() {
  $.get('/public/ejs/redactor-form.ejs', function (template) {
      templates.redactorForm = ejs.compile(template);
      $('#tabs').hide();
      $('#content-view').empty().append(templates.redactorForm());
      $('#summernote').summernote({
        height: 300,
      });
  });
}