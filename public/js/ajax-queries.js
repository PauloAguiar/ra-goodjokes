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
              var tagId = d._tags[tag]._id;
              document.getElementById('question-' + d._id + '-tag-' + tagId).addEventListener("click", function() {
                var myId = tagId;
                return function () { GetListedQuestions('/tags/' + myId); };
              }(), false);
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
      $.get('/tags', function (data) {
        data.forEach(function(d) {
            var html = '<li><a id="taglist' + d._id + '">' + d.name + '</a></li>';
            $('#allTagsList').append(html);
            document.getElementById('taglist' + d._id).addEventListener("click", function() {
                    addUsedTag(d);
              }, false);
        });           
      });
      var vestIdSel;
      $.get('/vestibulars', function (data) {
        data.forEach(function(d) {
            var html = '<li><a id="vestlist' + d._id + '">' + d.name + '</a></li>';
            $('#allVestsList').append(html);
            document.getElementById('vestlist' + d._id).addEventListener("click", function() {
                    vestIdSel = d._id;
                    document.getElementById('vestName').innerHTML = d.name;
              }, false);
        });           
      });
      document.getElementById('sendButton').addEventListener("click", function()  {
            var send = {};
            //send._vestibular = document.getElementById('vestName').innerHTML;
            send._vestibular = vestIdSel;
            send.title = document.getElementById('title').value;            
            send.name = document.getElementById('name').value;
            send.content = document.getElementById('summernote').value;
            var childs = document.getElementById('usedTagsList').childNodes;
            send._tags = [];
            for (var i = 0; i < childs.length; i++) {              
              send._tags.push(childs[i].id);   
            }
            $.post('/questions', send, function(resp,err) {}, 'json');
          }, false);
      $('#summernote').summernote({
        height: 300,
      });
  });
}

function GetQuestionView(questionId)
{
  $.get('/public/ejs/question-view.ejs', function (template) {
    templates.questionView = ejs.compile(template);
    $.get('/questions/' + questionId, function (data) {
      console.log(JSON.stringify(data));
      var html = templates.questionView({'answer': data._answers});
      $('#tabs').hide();
      $('#content-view').empty().append(html);
      $('#question-title-view').html(data.title); 
      $('#question-content-view').html(data.content);
      //$('#question-votes-view').html(votes); 
    });
  });
}