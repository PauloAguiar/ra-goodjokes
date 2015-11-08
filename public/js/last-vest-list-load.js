if(templates === undefined) {
  var templates = {};
}

$(document).ready(function() {
  $.get('/public/ejs/last-vest-list.ejs', function (template) {
    templates.lastVestList = ejs.compile(template);
    $.get('/vestibulars/recent', function (data) {
      var html = templates.lastVestList({'lastVestList': data});
      $('#last-vest-list').append(html);
      data.forEach(function(item) {
          document.getElementById('questionvestlist' + item.id).addEventListener("click", function() {
              GetListedQuestions(item);
          }, false);
      });
    });
  });
});