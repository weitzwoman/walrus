$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-hidden").toggle();
    $("#initially-showing").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#secondlink").toggle();
    $(".green").toggle();
  });
});
