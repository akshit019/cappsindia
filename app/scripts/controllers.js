'use strict';

angular.module('cappsindiaApp')

.controller('Homecontroller', ['$scope', '$rootScope' '$route' function ($scope, $route, $rootScope) {
    
    $scope.load = function() {
       // do your $() stuff here
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
       };

   //don't forget to call the load function
   $scope.load();

}])

;

