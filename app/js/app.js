'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'phonecat.directives'
]);

//you can't inject provider into run blocks
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/double', {
        templateUrl : 'partials/double.html',
        controller : 'Double'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
