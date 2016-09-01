'use strict';
// jquery
$(document).ready(function() {
	
	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();

});

// typed.js
$(function(){
    $(".element").typed({
        strings: ["CENTER FOR ADVOCACY<br> ^1000 AND PUBLIC POLICY STUDIES."],
        typeSpeed: 0,
        backSpeed: 2,
        loop: false,
        showCursor: true,
        cursorChar: "|"
    });
});