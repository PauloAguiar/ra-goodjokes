function getListedQuestions(vest)
{
    return $.get('/questionsSample/' + vest.tag, function (data) {
        $('#question-list').empty();
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#question-list').append(html);
                document.getElementById('questionvest' + d.vest.id).addEventListener("click", function() {
                    getListedQuestions(d.vest);
                }, false);
            });
        }
        else
        {
            return $('#question-list').append("nenhuma pergunta encontrada");
        }
    });
}