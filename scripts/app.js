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
      .when('/tg-setup', {
            templateUrl: 'views/tg.html',
            controller: 'AboutCtrl'
      })
      .when('/wikipedia', {
        templateUrl: 'views/wikipedia.html',
        controller: 'WikipediaCtrl'
      })
      .when('/corporate', {
        templateUrl: 'views/corporate.html',
        controller: 'SelfOrganizingMapCtrl'
      })
      .when('/jobs-career', {
        templateUrl: 'views/jobs.html',
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
      .when('/supported-exchanges', {
        templateUrl: 'views/supported-exchanges.html',
        controller: 'PaintAnImageCtrl'
      })
      .when('/self-hosting', {
        templateUrl: 'views/self-hosting.html',
        controller: 'SelfOrganizingMapCtrl'
      })
        .when('/otc-trading', {
        templateUrl: 'views/otc.html',
        controller: 'SelfOrganizingMapCtrl'
      })
        .when('/airdrop', {
            templateUrl: 'views/about.html',
            controller: 'SelfOrganizingMapCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
