'use strict';

function closeCarousel() {
    $('.full-window-for-search-animal').fadeOut('slow', function () {
        $(this).css({'display':'none'});
        console.log('Не Работает')
    })
}

$('.quick-view').on('click', function () {
    $('.full-window-for-search-animal').fadeIn('slow', function () {
        $(this).css({'display':'inline-block'});
        console.log('Работает')
    })
});