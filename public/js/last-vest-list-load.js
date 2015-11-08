if(templates === undefined) {
  var templates = {};
}

$(document).ready(function() {
  $.get('/public/ejs/last-vest-list.ejs', function (template) {
    templates.lastVestList = ejs.compile(template);
    $.get('/lastVestListSample', function (data) {
      var html = templates.lastVestList({'lastVestList': data});
      $('#last-vest-list').append(html);
      data.forEach(function(item) {
          document.getElementById(item.id).addEventListener("click", function() {
              GetListedQuestions(item.id);
          }, false);
      });
    });
  });
});