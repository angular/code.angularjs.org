(function(angular) {
  'use strict';
angular.module('multiSlotTranscludeExample', [])
 .directive('pane', function(){
    return {
      restrict: 'E',
      transclude: {
        'paneTitle': '?title',
        'paneBody': 'body'
      },
      template: '<div style="border: 1px solid black;">' +
                  '<div ng-transclude="title" style="background-color: gray"></div>' +
                  '<div ng-transclude="body"></div>' +
                '</div>'
    };
})
.controller('ExampleController', ['$scope', function($scope) {
  $scope.title = 'Lorem Ipsum';
  $scope.link = "https://google.com";
  $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
}]);
})(window.angular);