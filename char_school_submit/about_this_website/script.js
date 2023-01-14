$(function () {
  $(".js_accordion_title").on("click", function() {
    $(".js_accordion_title").not(this).removeClass("open");
    $(".js_accordion_title").not(this).next().slideUp(200);
    $(this).toggleClass("open");
    $(this).next().slideToggle(200);
  });
});
