if(templates === undefined) {
  var templates = {};
}
$(document).ready(function() {
    $.get('/public/ejs/recent-tags-list.ejs', function (template) {
        templates.recentTagsList = ejs.compile(template);
        return $.get('/tags', function (data) {
          var html = templates.recentTagsList({'recentTagsList': data});
          $('#recent-tags-list').append(html);
          data.forEach(function(item) {
              document.getElementById(item._id).addEventListener("click", function() {
                  GetListedQuestions('/tags/' + item._id);
              }, false);
      });
  });
    });
});