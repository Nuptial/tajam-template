var videoEndCallback = function (e) {
    $('.section-about-video-overlay,.section-about-video-play-icon,.section-about-video-title').show();
}

var navListItemsActions = function () {

    $('.right-nav-list-item:eq(0)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });

    $('.right-nav-list-item:eq(1)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-about").offset().top
        }, 1000);
    });

    $('.right-nav-list-item:eq(2)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-expertise").offset().top
        }, 1000);
    });

    $('.right-nav-list-item:eq(3)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-team").offset().top
        }, 1000);
    });

    $('.right-nav-list-item:eq(4)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-works").offset().top
        }, 1000);
    });

    $('.right-nav-list-item:eq(5)').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-testimonials").offset().top
        }, 1000);
    });
};

var initializeSliders = function () {
    $('.slider-header').bxSlider({
        touchEnabled: false
    });
    $('.testimonials-slider').bxSlider({
        touchEnabled: false
    });
};

var makeTestimonialsThirdItemActive = function () {
    $('.section-testimonials .bx-pager-item:eq(2) a').click();
    $('.section-testimonials .bx-wrapper .bx-pager-item').has('a.active').css('transform', 'scale(1.4)');
    $('.section-testimonials .bx-wrapper .bx-pager-item:first').css('transform', 'scale(1)');
};

$(document).ready(function () {

    $('.section-works-item:gt(9)').css('display', 'none');

    $('.section-works-button').click(function () {
        $('.section-works-item:gt(9)').fadeIn();
    });

    initializeSliders();
    $('.section-about-video').click(function () {
        var myVideo = document.getElementById("section-about-video-elem");

        if (myVideo.paused) {
            $('#section-about-video-elem').get(0).play();
            $('.section-about-video-overlay,.section-about-video-play-icon,.section-about-video-title').hide();
        } else {
            $('#section-about-video-elem').get(0).pause();
            $('.section-about-video-overlay,.section-about-video-play-icon,.section-about-video-title').show();
        }

    });

    navListItemsActions();

    document.getElementById('section-about-video-elem').addEventListener('ended', videoEndCallback, false);

    $('.section-testimonials .bx-wrapper .bx-pager-item a,.section-testimonials .bx-prev,.section-testimonials .bx-next')
        .on('click', function () {
            setTimeout(function () {
                $('.section-testimonials .bx-wrapper .bx-pager-item').css('transform', 'scale(1)');
                $('.section-testimonials .bx-wrapper .bx-pager-item').has('a.active').css('transform', 'scale(1.4)');
            }, 200);
        });

    makeTestimonialsThirdItemActive();

});