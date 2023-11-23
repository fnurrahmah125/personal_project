import $ from "jquery";

function initMenuToggle() {
  $(".header-toggle").click(function () {
    $(".header-nav").toggleClass("header-nav--open", 500);
    $(this).toggleClass("open");
    $("footer").toggleClass("menu-open");
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 768) {
      $("footer").removeClass("menu-open");
    }
  });
}

export default initMenuToggle;
