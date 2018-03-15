'use strict';

/**
 * @ngdoc overview
 * @name gitHubApp
 * @description
 * # gitHubApp
 *
 * Main module of the application.
 */
angular
  .module('gitHubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/tg', {
            templateUrl: 'views/tg.html',
            controller: 'AboutCtrl'
        })
      .when('/wikipedia', {
        templateUrl: 'views/wikipedia.html',
        controller: 'WikipediaCtrl'
      })
      .when('/corporate', {
        templateUrl: 'views/corporate.html',
        controller: 'AboutCtrl'
      })
      .when('/dsr', {
        templateUrl: 'views/dsr.html',
        controller: 'DsrCtrl'
      })
      .when('/image-filters', {
        templateUrl: 'views/image-filters.html',
        controller: 'ImageFiltersCtrl'
      })
      .when('/paint-an-image', {
        templateUrl: 'views/paint-an-image.html',
        controller: 'PaintAnImageCtrl'
      })
      .when('/self-hosting', {
        templateUrl: 'views/self-hosting.html',
        controller: 'SelfOrganizingMapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
