function GetListedQuestions(vestId)
{
    return $.get('/questionsSample/' + vestId, function (data) {
        $('#content-view').empty();
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
        return $('#content-view').empty().append(html);
      });
  });
}