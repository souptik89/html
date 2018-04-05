(function ($) {

    "use strict";

    // Sticky Nav
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
        currentClass: 'active'
    });

    $(window).on('load', function () {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
    });


    /* 
       CounterUp
       ========================================================================== */
    // $('.counter').counterUp({
    //     time: 1000
    // });

    /* 
       MixitUp
       ========================================================================== */
    // $('#portfolio').mixItUp();

    /* 
       Touch Owl Carousel
       ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<img src="images/arrow-left.png" class="arrow-left"><img src="images/arrow-left-solid.png" class="arrow-left-solid">');
    $('.touch-slider').find('.owl-next').html('<img src="images/arrow-left.png" class="arrow-right"><img src="images/arrow-left-solid.png" class="arrow-right-solid">');

    var owl = $('.key-cards');
    owl.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        slideSpeed: 1000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1024, 2],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1],
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        singleItem: false,
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    var owl = $('#featurescreen-slide');
    owl.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        slideSpeed: 1000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1],
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        singleItem: false,
    });

    /* 
       Sticky Nav
       ========================================================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

    /* 
       VIDEO POP-UP
       ========================================================================== */
    // $('.video-popup').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false,
    // });


    /* 
     SMOOTH SCROLL
     ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

    /* 
       Back Top Link
       ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })

    /* Nivo Lightbox
      ========================================================*/
    // $('.lightbox').nivoLightbox({
    //     effect: 'fadeScale',
    //     keyboardNav: true,
    // });


    /* stellar js
      ========================================================*/
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });

    /* 
       Page Loader
       ========================================================================== */
    $('#loader').fadeOut();



}(jQuery));
$(document).ready(
    /*************************
     Screenshots silder
     *************************/
    function screensilder() {
        var slide = $('.slider-single');
        var slideTotal = slide.length - 1;
        var slideCurrent = -1;

        function slideInitial() {
            slide.addClass('proactivede');
            setTimeout(function () {
                slideRight();
            }, 500);
        }

        function slideRight() {
            if (slideCurrent < slideTotal) {
                slideCurrent++;
            } else {
                slideCurrent = 0;
            }

            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);

            }

            slide.each(function () {
                var thisSlide = $(this);
                if (thisSlide.hasClass('preactivede')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
                if (thisSlide.hasClass('preactive')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }

        function slideLeft() {
            if (slideCurrent > 0) {
                slideCurrent--;
            } else {
                slideCurrent = slideTotal;
            }

            if (slideCurrent < slideTotal) {
                var proactiveSlide = slide.eq(slideCurrent + 1);
            } else {
                var proactiveSlide = slide.eq(0);
            }
            var activeSlide = slide.eq(slideCurrent);
            if (slideCurrent > 0) {
                var preactiveSlide = slide.eq(slideCurrent - 1);
            } else {
                var preactiveSlide = slide.eq(slideTotal);
            }
            slide.each(function () {
                var thisSlide = $(this);
                if (thisSlide.hasClass('proactivede')) {
                    thisSlide.removeClass('preactive active proactive proactivede').addClass('preactivede');
                }
                if (thisSlide.hasClass('proactive')) {
                    thisSlide.removeClass('preactivede preactive active proactive').addClass('proactivede');
                }
            });
            preactiveSlide.removeClass('preactivede active proactive proactivede').addClass('preactive');
            activeSlide.removeClass('preactivede preactive proactive proactivede').addClass('active');
            proactiveSlide.removeClass('preactivede preactive active proactivede').addClass('proactive');
        }

        var left = $('.slider-left');
        var right = $('.slider-right');
        left.on('click', function () {
            slideLeft();
        });
        right.on('click', function () {
            slideRight();
        });
        slideInitial();
    });