$(document).ready(function () {
    // animate onscroll
    new WOW().init();
});
// Work
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//Team 
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    })
});
//Testimonial 
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    })
});
//Counter
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    })
})

// Clients
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartspeed: 700,
        loop: true,
        autoplayHoverPause: true
    })
});
// Navigation effect during  Hover transparent
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            console.log("helllo");
            $("nav").removeClass("vesco-top-nav");
            $("a#vesco-menu.navbar-nav").removeClass(".navbar-nav-2");
            $("#back-to-top").fadeOut();


        } else {
            //Show nav
            $("nav").addClass("vesco-top-nav");
            $("a#vesco-menu.navbar-nav").addClass(".navbar-nav-2");
            $("#back-to-top").fadeIn();

        }
    })
});
// smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function () {
        event.preventDefault();
        // get/return id like #about, #work etc
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    })
})