(function(angular) {
  'use strict';
angular.module('cacheExampleApp', []).
  controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
    $scope.keys = [];
    $scope.cache = $cacheFactory('cacheId');
    $scope.put = function(key, value) {
      if (isUndefined($scope.cache.get(key))) {
        $scope.keys.push(key);
      }
      $scope.cache.put(key, isUndefined(value) ? null : value);
    };
  }]);
})(window.angular);