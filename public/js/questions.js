function getListedQuestions(vestId)
{
    return $.get('/questionsSample/' + vestId, function (data) {
        $('#question-list').empty();
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#question-list').append(html);
            });
        }
        else
        {
            return $('#question-list').append("nenhuma pergunta encontrada");
        }
    });
}