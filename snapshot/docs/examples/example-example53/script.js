(function(angular) {
  'use strict';
angular.module('dateExample', [])
  .controller('TimeController', ['$scope', '$date', function($scope, $date) {
    $scope.now = $date.now();
  }]);
})(window.angular);