function getListedTags(tagId)
{
    return $.get('/tags/' + tagId, function (data) {
        if(data.length > 0)
        {
            data.forEach(function(d) {
                var html = templates.question({'question': d});
                $('#content-view').empty().append(html);
            });
        }
    });
}