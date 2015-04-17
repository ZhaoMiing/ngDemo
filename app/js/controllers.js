'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', 'clientId', 'userId', 'launchDog',
  function($scope, Phone, clientId, userId, launchDog) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    $scope.clientId = clientId;
    $scope.userId = userId;
    $scope.dogs = launchDog;
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 'notify',
  function($scope, $routeParams, Phone, notify) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    notify.call($scope, Date.now());
  }]);

phonecatControllers.controller('Double', ['$scope', function($scope) {
  $scope.double = function (value) {
    return value * 2;
  };
  $scope.num = 0;
}]);
