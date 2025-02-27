$("#content").on("click", ".tabContainer .tabs a", function(e) {
  e.preventDefault(),
  $(this)
    .parents(".tabContainer")
    .find(".tabContent > div")
    .each(function() {
      $(this).hide();
    });
  
  $(this)
    .parents(".tabs")
    .find("a")
    .removeClass("active"),
    $(this).toggleClass("active"), $("#" + $(this).attr("src")).show();
});
