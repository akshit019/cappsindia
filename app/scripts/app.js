'use strict';

/**
 * @ngdoc overview
 * @name cappsindiaApp
 * @description
 * # cappsindiaApp
 *
 * Main module of the application.
 */
angular
  .module('cappsindiaApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: '',
        controllerAs: ''
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
