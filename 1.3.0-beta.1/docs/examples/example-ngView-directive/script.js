  angular.module('ngViewExample', ['ngRoute', 'ngAnimate'],
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/Book/:bookId', {
        templateUrl: 'book.html',
        controller: BookCtrl,
        controllerAs: 'book'
      });
      $routeProvider.when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: ChapterCtrl,
        controllerAs: 'chapter'
      });

      // configure html5 to get links working on jsfiddle
      $locationProvider.html5Mode(true);
  });

  function MainCtrl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
  }

  function BookCtrl($routeParams) {
    this.name = "BookCtrl";
    this.params = $routeParams;
  }

  function ChapterCtrl($routeParams) {
    this.name = "ChapterCtrl";
    this.params = $routeParams;
  }