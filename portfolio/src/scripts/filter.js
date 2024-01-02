import $ from 'jquery';

function initFilter() {
  const filterSelection = () => {
    $('.bookmark-btn').each(function () {
      $(this).on('click', function () {
        const dataType = $(this).data('type');

        $('.bookmark-btn').removeClass('active');
        $('.bookmark-card').removeClass('hide');

        $(this).addClass('active');
        $('.bookmark-card').each(function () {
          if (!$(this).hasClass(dataType) && dataType !== 'all') {
            $(this).addClass('hide');
          }
        });
      });
    });
  };

  filterSelection();
}

export default initFilter;
