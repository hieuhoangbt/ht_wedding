window.onload = function () {
    /*animation wow*/
    var WowAnimate = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });
    WowAnimate.init();
    /*animation clock*/
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter'
    });
    /*animation slider*/
    $(".banner-wedding__slider").vegas({
        cover: false,
        align: 'top',
        delay: 10000,
        timer: false,
        slides: [
            {src: 'images/banner.jpg', cover: true},
            {src: 'images/banner2.jpg', cover: true},
            {src: 'images/banner1.jpg', cover: true}
        ],
        transition: ['fade', 'zoomOut', 'swirlLeft'],
        animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]

    });
    /*match height*/
    $('.list-blog .item').matchHeight();

}
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

