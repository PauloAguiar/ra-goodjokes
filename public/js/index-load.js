if(templates === undefined) {
  var templates = {};
}

$(document).ready(function() {
    getTemplates();
});

function getTemplates() {
    $.get('/views/partials/recent-tags-list.ejs', function (template) {
        templates.recentTagsList = ejs.compile(template);
        return getRecentTagsList();
    });
}

function getRecentTagsList() {
  return $.get('/recentTagsListSample', function (data) {
      var html = templates.recentTagsList({'recentTagsList': data});
      $('#recent-tags-list').append(html); 
      data.forEach(function(item) {
          document.getElementById(item.id).addEventListener("click", function() {
              getListedTags(item.id);
          }, false);
      });
  });
}