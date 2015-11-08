function getListedTags(tagId)
{
    return $.get('/tags/' + tagId, function (data) {
        $('#question-list').empty();
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#question-list').append(html);
            });
        }
    });
}