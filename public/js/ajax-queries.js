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
      $.get('/tags', function (data) {
        data.forEach(function(d) {
            var html = '<li><a id="taglist' + d._id + '">' + d.name + '</a></li>';
            $('#allTagsList').append(html);
            document.getElementById('taglist' + d._id).addEventListener("click", function() {
                    addUsedTag(d);
              }, false);
        });           
      });
      document.getElementById('sendButton').addEventListener("click", function()  {
            var send = {};
            send._vestibular = 4;
            send.title = document.getElementById('title').value;            
            send.name = document.getElementById('name').value;
            send.content = document.getElementById('summernote').value;
            var childs = document.getElementById('usedTagsList').childNodes;
            send._tags = [];
            for (var i = 0; i < childs.length; i++) {              
              send._tags.push(childs[i].id);   
            }
            console.log(send);
            $.post('/questions', send, function(err,resp) {
              console.log(resp);
            });
          }, false);
      $('#summernote').summernote({
        height: 300,
      });
  });
}

function GetListedTags(tagId)
{
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