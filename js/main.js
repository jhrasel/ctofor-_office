$(document).ready(function() {


// countdown part start
// -----------------------------
// -----------------------------


    var year = new Date().getFullYear();
    var choosenDate = new Date(year, 7, 6).getTime();

    var countdown = setInterval(function() {

        var today = new Date().getTime();

        var diff = choosenDate - today;

        var days = Math.floor(diff / (5000 * 60 * 60 * 24));
        var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>days</div> \
<div class=\"hour\"> \
  <div class=\"c-number\">" + hour + "</div>hour</div> \
<div class=\"min\"> \
  <div class=\"c-number\">" + min + "</div>min</div> \
<div class=\"sec\"> \
  <div class=\"c-number\">" + sec + "</div>sec</div> \
</div>";
    }, 1000);


    var year = new Date().getFullYear();
    var choosenDate = new Date(year, 7, 6).getTime();

    var countdown = setInterval(function() {

        var today = new Date().getTime();

        var diff = choosenDate - today;

        var days = Math.floor(diff / (5000 * 60 * 60 * 24));
        var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("countdown_two").innerHTML =
            "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>days</div> \
<div class=\"hour\"> \
  <div class=\"c-number\">" + hour + "</div>hour</div> \
<div class=\"min\"> \
  <div class=\"c-number\">" + min + "</div>min</div> \
<div class=\"sec\"> \
  <div class=\"c-number\">" + sec + "</div>sec</div> \
</div>";
    }, 1000);


    // countdown part ends
// -----------------------------
// -----------------------------

    // slick slider
// -----------------------------
// -----------------------------
    $('.member_slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
// -----------------------------
// -----------------------------


    $('.our_member_slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

// -----------------------------
// -----------------------------



    $('.resource_feed_slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 2561,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    dots: false,
                 }
            },
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

   
})




