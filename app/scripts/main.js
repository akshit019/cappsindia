'use strict';
// jquery
$(document).ready(function() {
	
	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();

});

// typed.js
$(function(){
    $(".element").typed({
        strings: ["CENTER FOR ADVOCACY ^1000 <br> AND PUBLIC POLICY STUDIES."],
        contentType: 'html',
        typeSpeed: 0,
        backSpeed: 2,
        loop: false,
        showCursor: true,
        cursorChar: "|"
    });
});

// wowjs
new WOW().init();

