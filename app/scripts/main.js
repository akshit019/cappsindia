'use strict';
// jquery
$(document).ready(function() {
	
	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();

    $(".arrow-icon").hide();

    var arrowLoad = function () {
        $(".arrow-icon").fadeIn("slow");
    };

    setTimeout(function(){
        arrowLoad();
    }, 3000);

    var typed = function(){
        $(".element").typed({
            strings: ["CENTER FOR ADVOCACY ^1000 <br> AND PUBLIC POLICY STUDIES."],
            contentType: 'html',
            typeSpeed: 0,
            backSpeed: 2,
            loop: false,
            showCursor: true,
            cursorChar: "|",
            callback: function() {
                $(".element").text();
            }
        });
    };

    typed();

});

// typed.js
// var typed = function(){
//     $(".element").typed({
//         strings: ["CENTER FOR ADVOCACY ^1000 <br> AND PUBLIC POLICY STUDIES."],
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
