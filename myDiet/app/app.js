'use strict';

/* App Module */

var mydietApp = angular.module('mydietApp', [
  'ngRoute',

  'mydietControllers',
]);

mydietApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
