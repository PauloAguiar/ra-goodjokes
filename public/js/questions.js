function getListedQuestions()
{
    return $.get('/questionsSample/ita-2015', function (data) {
        $('#question-list').empty();
        data.forEach(function(d)
        {
          var html = templates.question({'question': d, 'formatDate': formatTimeStamp});
          return $('#question-list').append(html);
        });
    });
}