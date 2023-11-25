import $ from 'jquery';

$(() => {
  $('.header-toggle').click(function () {
    $('.nav').toggleClass('nav--open', 500);
    $(this).toggleClass('open');
    $('footer').toggleClass('menu-open');
  });

  $(window).on('resize', function () {
    if ($(window).width() >= 768) {
      $('footer').removeClass('menu-open');
    }
  });
});
