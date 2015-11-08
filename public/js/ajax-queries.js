function GetListedQuestions(path)
{
    return $.get(path, function (data) {
        console.log('GET: ' + path);
        console.log(data);
        $('#content-view').empty();
        $('#tabs').show();
        if($.isArray(data._questions) && data._questions.length > 0)
        {
          data._questions.forEach(function(d) {
            var html = templates.question({'question': d});
            $('#content-view').append(html);
            if(d._vestibular !== undefined)
            {
                document.getElementById('questionvest-' + d._vestibular._id).addEventListener("click", function() {
                  GetListedQuestions('/questionsSample/'+ d._vestibular._id);
                }, false);
            }

            document.getElementById('question-' + d._id).addEventListener("click", function() {
                GetQuestionView(d._id);
            }, false);

            for (tag in d._tags)
            {
              console.log('question-' + d._id + '-tag-' + d._tags[tag]._id);
              document.getElementById('question-' + d._id + '-tag-' + d._tags[tag]._id).addEventListener("click", function() {
                GetListedQuestions('/tags/' + d._tags[tag]);
              }, false);
              //$.get('/tags/d._tags[tag]')
            }
          });
        }
        else
        {
            return $('#content-view').append("<center>Nenhuma pergunta encontrada.</center>");
        }
    }).error(function() {
        return $('#content-view').empty().append("<center>Nenhuma pergunta encontrada.</center>");
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

function GetQuestionView(questionId)
{
  $.get('/public/ejs/question-view.ejs', function (template) {
    templates.questionView = ejs.compile(template);
    $.get('/questionViewAnswerSample', function (data) {
      var html = templates.questionView({'answerList': data});
      $('#tabs').hide();
      $('#content-view').empty().append(html);
      $.get('/question/' + questionId, function (data) {
        var title = (data.title);
        var content = data.content;
        var votes = data.votes;
        $('#question-title-view').html(title); 
        $('#question-content-view').html(content);
        $('#question-votes-view').html(votes); 
      });
    });
  });
}