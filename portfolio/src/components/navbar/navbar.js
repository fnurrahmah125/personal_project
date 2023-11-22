import $ from "jquery";

function initMenuToggle() {
  $(".header-toggle").click(function () {
    $(".header-nav").toggleClass("header-nav--open", 500);
    $(this).toggleClass("open");
  });
}

export default initMenuToggle;
