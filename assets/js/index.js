var videoEndCallback = function (e) {
    $('.section-about-video-overlay,.section-about-video-play-icon,.section-about-video-title').show();
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

    document.getElementById('section-about-video-elem').addEventListener('ended', videoEndCallback, false);
});