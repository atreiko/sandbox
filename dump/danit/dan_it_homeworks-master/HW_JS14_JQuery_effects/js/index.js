'use strict';
const $ = window.$;

$(document).ready(function() {

    $(".nav-item").on("click", "a", function(event) {
        event.preventDefault();
        const id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    const btnTop = $('<button class="btn-to-top">To top</button>').appendTo('body');
    btnTop.css({
        'display': 'none',
        'padding': '15px 6px',
        'background-color': '#14B9D5',
        'color': 'white',
        'position': 'fixed',
        'left': '95%',
        'top': '85%',
        'border-radius': '3px',
        'font-weight': '700',
        'text-transform': 'uppercase',
        'border': '3px solid #313131'
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= $(window).height()) {
            btnTop.css('display', '');
        } else {
            btnTop.css('display', 'none');
        }
    });

    $(btnTop).on('click', function() {
        $('html').animate({ scrollTop: 0 }, 1500);
    });

    $('.slide-toggle').click(function() {
        $('.top-rated-list').slideToggle('slow');
    });

});