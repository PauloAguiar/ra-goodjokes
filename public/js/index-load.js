var templates = {};

$(document).ready(function() {
    getTemplates();
});

function getTemplates() {
    $.get('/views/partials/question-small.ejs', function (template) {
        templates.question = ejs.compile(template);
        return getQuestions();
    });

    $.get('/views/partials/last-vest-list.ejs', function (template) {
        templates.lastVestList = ejs.compile(template);
        return getLastVestList();
    });

    $.get('/views/partials/recent-tags-list.ejs', function (template) {
        templates.recentTagsList = ejs.compile(template);
        return getRecentTagsList();
    });
}

function getQuestions() {
  return $.get('/questionsSample', function (data) {
    data.forEach(function(d)
    {
      var html = templates.question({'question': d});
      $('#question-list').append(html);
      if (d.vest !== undefined) {
        document.getElementById('questionvest' + d.vest.id).addEventListener("click", function() {
                getListedQuestions(d.vest);
            }, false);
      } 
    });
  });
}

function getLastVestList() {
  return $.get('/lastVestListSample', function (data) {
      var html = templates.lastVestList({'lastVestList': data});
      $('#last-vest-list').append(html); 
      data.forEach(function(item) {
          document.getElementById('questionvestlist' + item.id).addEventListener("click", function() {
              getListedQuestions(item);
          }, false);
      });
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

function formatTimeStamp(ts) {
// Create a date object with the current time
  var now = new Date(ts * 1000);

// Create an array with the current month, day and time
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

// If hour is 0, set it to 12
  time[0] = time[0] || 12;

// If seconds and minutes are less than 10, add a zero
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

// Return the formatted string
  return date.join("/") + " " + time.join(":") + " " + suffix;
}
