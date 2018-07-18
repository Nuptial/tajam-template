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


}

$(document).ready(function () {
    $('.slider-header').bxSlider();

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

});