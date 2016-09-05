'use strict';

angular.module('cappsindiaApp')

.controller('Homecontroller', ['$scope', '$rootScope' '$route' function ($scope, $route, $rootScope) {
    
    $rootScope.$on('$routeChangeSuccess', function() {
        alert('test check'); // <-- alert from the question
    });
    
}])

;

