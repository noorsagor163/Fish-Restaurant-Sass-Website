$(function () {

    // ===== Humberger Menu =====

    $(".bars").click(function () {
        $(".menu").addClass("open-menu");
    });

    $(".menu-close").click(function () {
        $(".menu").removeClass("open-menu");
    });

    $(".menu-link").click(function () {
        $(".menu").removeClass("open-menu");
    });

    //===== Sticky Menu ======

    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling >= 100) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    //===== Animated Scroll Start =====

    var html_body = $('html, body');
    $('.menu-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500);
                return false;
            }
        }
    });

    // =====Add active class to the current menu =====

    var header = document.getElementById("mymenu");
    var btns = header.getElementsByClassName("menu-link");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }

    // ===== Frame Slide =====

    $('.frame-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: ".left",
        nextArrow: ".right"
    });

    // ===== Friez Slide =====

    $('.friez-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    prevArrow: ".left2",
                    nextArrow: ".right2"
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: ".left2",
                    nextArrow: ".right2"
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});