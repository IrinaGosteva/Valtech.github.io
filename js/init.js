;(function ($) {
var header = $('.header');
var headerHeight = header.outerHeight();
var innerHeight = $('.inner').outerHeight();

function onScroll() {
    var position = $(window).scrollTop();
    var windowWidth = $(window).width();

    if (position > headerHeight + 100 && windowWidth > 991) {
        header.addClass('scroll');
        header.css({
            'position': 'fixed',
            'top' : `-${headerHeight}px`,
            'background': 'rgba(255,255,255,0.8)',
            'box-shadow': 'none',
            'width': '100%',
            'padding': '20px 0'
        });
    }
    if (position > innerHeight - 50 && windowWidth > 991) {
        header.css({
            'top' : '0',
            'z-index' : '999',
            'transition' : 'top .3s ease-out',
            'box-shadow': '0px 3px 10px 0px rgba(0,0,0,0.1)'
        });
    }

    if (position < headerHeight + 100 && windowWidth > 991) {
        header.removeClass('scroll');
        header.css({
            'position': 'static',
            'top' : '0',
            'background': 'transparent',
            'transition' : 'none',
            'box-shadow': 'none'
        });
    }
}

$(window).on('scroll', onScroll);

// smoth scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
})(jQuery);

    $(function(){
        $('.header-nav').slicknav({
            label: '',
            prependTo: '.header .container',
        });

    });