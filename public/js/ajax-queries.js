function GetListedQuestions(path)
{
    return $.get(path, function (data) {
        $('#content-view').empty();
        $('#tabs').show();
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#content-view').append(html);
                if(d.vest !== undefined)
                {
                    document.getElementById('questionvest' + d.vest.id).addEventListener("click", function() {
                      GetListedQuestions('/questionsSample/'+ d.vest.tag);
                    }, false);
                }

                document.getElementById('question-' + d.id).addEventListener("click", function() {
                    GetQuestionView(d.id);
                }, false);
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

<<<<<<< HEAD
function getListedTags(tagId) {
=======
function GetListedTags(tagId)
{
>>>>>>> b504a61dd90eb5d72c378f979bb2adfa6d24feea
    return $.get('/tags/' + tagId, function (data) {
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#tabs').show();
                $('#content-view').empty().append(html);
            });
        }
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