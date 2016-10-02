'use strict';

// jquery
$(document).ready(function() {

    // preloader
    $(window).on('load', function() { // makes sure the whole site is loaded 
        //$('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(1000).css({'overflow':'visible'});
    });

	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();

    $(".arrow-icon").hide();

    //modal trigger
    $('.modal-trigger').leanModal();

    //scroll up
    $(".scroll-top").on("click", function() {
        $("body").animate({scrollTop: 0}, 'slow');
    });

    //gototop();

    var arrowLoad = function () {
        $(".arrow-icon").fadeIn("slow");
    };

    setTimeout(function(){
        arrowLoad();
    }, 5000);

    var typed = function(){
        $(".element").typed({
            strings: ["CENTER FOR ADVOCACY^1000 <br> AND PUBLIC POLICY STUDIES."],
            contentType: 'html',
            typeSpeed: 0,
            backSpeed: 2,
            loop: false,
            showCursor: true,
            cursorChar: "|"
        });
    };

    setTimeout(function(){
        typed();
    }, 2500);

    //typed();

    // $(function(){
    //     $("#typed").typed({
    //         stringsElement: $('#typed-strings'),
    //         contentType: 'html',
    //         loop: false,
    //         typeSpeed: 30,
    //         backSpeed: 100,
    //         backDelay: 2000,
    //         callback: function() {}

    //     });
    // });

    $(".home-click").on("click", function() {
        //location.reload();
        setTimeout(function(){
            location.reload();
        }, 650);
    });

});

// typed.js
// var typed = function(){
//     $(".element").typed({
//         strings: ["CENTER FOR ADVOCACY ^1000<br> AND PUBLIC POLICY STUDIES."],
//         contentType: 'html',
//         typeSpeed: 0,
//         backSpeed: 2,
//         loop: false,
//         showCursor: true,
//         cursorChar: "|",
//         callback: function() {
//             $(".element").text();
//         }
//     });
// };

// typed();

// wowjs
new WOW().init();

