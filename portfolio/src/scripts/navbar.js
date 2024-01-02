import $ from 'jquery';

function initNavbar() {
  const navbarToggle = () => {
    $('.nav-hamburger').click(function () {
      $('.nav-list').toggleClass('nav--open', 500);
      $('.fa-bars').toggleClass('fa-xmark');
    });

    $(window).on('resize', function () {
      if ($(window).width() >= 768) {
        $('.nav-list').removeClass('nav--open');
        $('.fa-bars').removeClass('fa-xmark');
      }
    });
  };

  navbarToggle();
}

export default initNavbar;
