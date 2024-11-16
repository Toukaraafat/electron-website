$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('scroll')
    } else {
        $('header').removeClass('scroll')
    }
})

$(document).ready(function () {
    $('.owl-one').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        smartSpeed: 450,
    });
    $('.owl-two').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        margin: 25,
        nav: true,
        pagination: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $('.owl-three').owlCarousel({
        items: 6,
        loop: true,
        dots: false,
        margin: 40,
        pagination: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 2000,
    });
    $(".product-details-item-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });
});

$('.product-details-item-slider img').on('click', function () {

    var imgurl = $(this).data('imgbigurl');
    var bigImg = $('.product-details-item-main-img').attr('src');
    if (imgurl != bigImg) {
        $('.product-details-item-main-img').attr({
            src: imgurl
        });
    }
});
