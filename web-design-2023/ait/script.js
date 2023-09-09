var filterList = [];

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


$(document).ready(function() {
  $.getJSON("data.json", function(data) {
  
    $.each(data, function(key, value) {
  
      var tmpl = $.templates("#nameTemplate");
      var html = tmpl.render(value);
  
      $("#portfolio-wrapper").append(html);
    });
  
  });
  
  $('.filterButton').click(function() {
    if($(this).hasClass("btn-dark")) {
      $(this).addClass('btn-primary');
      $(this).removeClass('btn-dark');
      filterList.push($(this).attr("filter"));
    } else {
      $(this).removeClass('btn-primary');
      $(this).addClass('btn-dark');
      filterList.remove($(this).attr("filter"));
      
    }
    updateFilter();
  })
});

function updateFilter() {
  console.log("test");
  $('#portfolio-wrapper').children().each(function(){
    if(filterList.includes($(this).attr("filter")) || filterList.length == 0) {
      console.log("hide")
      $(this).removeClass('hide');
    } else {
      $(this).addClass('hide');
    }
  })
}