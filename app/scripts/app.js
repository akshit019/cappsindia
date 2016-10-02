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
        controller: 'Homecontroller',
        controllerAs: ''
      })
      .when('/approach', {
        templateUrl: 'views/approach.html',
        controller: '',
        controllerAs: ''
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: '',
        controllerAs: ''
      })
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: '',
        controllerAs: ''
      })
      // .when('/blog', {
      //   templateUrl: 'https://www.cappsindiablog.wordpress.com',
      //   controller: '',
      //   controllerAs: ''
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
