'use strict';

angular.module('docsApp', [
  'ngMaterial',
  'HeaderController',
  'FooterController',
  'DocsController',
  'ViewUtils',
  'versionsData',
  'pagesData',
  'navData',
  'directives',
  'errors',
  'examples',
  'search',
  'tutorials',
  'versions',
  'responsiveMenu'
])

.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
}]);

angular.module('directives', [])

/**
 * scrollTo Directive
 *
 * @description
 * Upon click, scroll to the target element (identified by the selector provided via the `scroll-to`
 * attribute).
 */
.directive('scrollTo', ['$document', '$location', function($document, $location) {
  var doc = $document[0];

  return {
    restrict: 'A',
    link: function scrollToPostLink(scope, elem, attrs) {
      elem.on('click', onClick);

      function onClick() {
        var targetSelector = attrs.scrollTo;
        var targetElem = doc.querySelector(targetSelector);

        if (targetElem) {
          targetElem.scrollIntoView();
        }
      }
    }
  };
}])


.directive('code', ['$window', function($window) {
  return {
    restrict: 'E',
    terminal: true,
    compile: function(element) {
      var linenums = element.hasClass('linenum');// || element.parent()[0].nodeName === 'PRE';
      var match = /lang-(\S+)/.exec(element[0].className);
      var lang = match && match[1];
      var html = element.html();
      element.html($window.prettyPrintOne(html, lang, linenums));
    }
  };
}])


// TODO: Probably not needed any more
.directive('scrollYOffsetElement', ['$anchorScroll', function($anchorScroll) {
  return {
    link: function(scope, element) {
      $anchorScroll.yOffset = element;
    }
  };
}]);

angular.module('DocsController', ['ViewUtils'])

.controller('DocsController', [
          '$scope', '$rootScope', '$location', '$window', 'openPlunkr', 'ViewUtils',
              'NG_PAGES', 'NG_NAVIGATION', 'NG_VERSION',
  function($scope, $rootScope, $location, $window, openPlunkr, ViewUtils,
              NG_PAGES, NG_NAVIGATION, NG_VERSION) {

  $scope.vu = ViewUtils;

  $scope.openPlunkr = openPlunkr;

  $scope.docsVersion = NG_VERSION.isSnapshot ? 'snapshot' : NG_VERSION.version;

  $scope.isCurrentPath = function(path) {
    return this.currentPage && path && (this.currentPage.path === path);
  };

  $scope.navClass = function(navItem) {
    return {
      active: navItem.href && this.currentPage && this.currentPage.path,
      current: this.currentPage && this.currentPage.path === navItem.href,
      'nav-index-section': navItem.type === 'section'
    };
  };



  $scope.$on('$includeContentLoaded', function() {
    var pagePath = $scope.currentPage ? $scope.currentPage.path : $location.path();
    $window._gaq.push(['_trackPageview', pagePath]);
  });

  $scope.$watch(function docsPathWatch() { return $location.path(); }, function docsPathWatchAction(path) {

    path = path.replace(/^\/?(.+?)(\/index)?\/?$/, '$1');

    var currentPage = $scope.currentPage = NG_PAGES[path];

    if (currentPage) {
      $scope.partialPath = 'partials/' + path + '.html';
      $scope.currentArea = NG_NAVIGATION[currentPage.area];
      var pathParts = currentPage.path.split('/');
      var breadcrumb = $scope.breadcrumb = [];
      var breadcrumbPath = '';
      angular.forEach(pathParts, function(part) {
        breadcrumbPath += part;
        breadcrumb.push({ name: (NG_PAGES[breadcrumbPath]&&NG_PAGES[breadcrumbPath].name) || part, url: breadcrumbPath });
        breadcrumbPath += '/';
      });
    } else {
      $scope.currentArea = NG_NAVIGATION['api'];
      $scope.breadcrumb = [];
      $scope.partialPath = 'Error404.html';
    }
  });

  /**********************************
   Initialize
   ***********************************/

  $scope.loading = 0;


  var INDEX_PATH = /^(\/|\/index[^\.]*.html)$/;
  if (!$location.path() || INDEX_PATH.test($location.path())) {
    $location.path('/api').replace();
  }

}]);

angular.module('errors', ['ngSanitize'])

.filter('errorLink', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}<>]/g,
      MAILTO_REGEXP = /^mailto:/,
      STACK_TRACE_REGEXP = /:\d+:\d+$/;

  var truncate = function(text, nchars) {
    if (text.length > nchars) {
      return text.substr(0, nchars - 3) + '...';
    }
    return text;
  };

  return function(text, target) {
    var targetHtml = target ? ' target="' + target + '"' : '';

    if (!text) return text;

    return $sanitize(text.replace(LINKY_URL_REGEXP, function(url) {
      if (STACK_TRACE_REGEXP.test(url)) {
        return url;
      }

      // if we did not match ftp/http/mailto then assume mailto
      if (!/^((ftp|https?):\/\/|mailto:)/.test(url)) url = 'mailto:' + url;

      return '<a' + targetHtml + ' href="' + url +'">' +
                truncate(url.replace(MAILTO_REGEXP, ''), 60) +
              '</a>';
    }));
  };
}])


.directive('errorDisplay', ['$location', 'errorLinkFilter', function ($location, errorLinkFilter) {
  var interpolate = function (formatString) {
    var formatArgs = arguments;
    return formatString.replace(/\{\d+\}/g, function (match) {
      // Drop the braces and use the unary plus to convert to an integer.
      // The index will be off by one because of the formatString.
      var index = +match.slice(1, -1);
      if (index + 1 >= formatArgs.length) {
        return match;
      }
      return formatArgs[index+1];
    });
  };

  return {
    link: function(scope, element, attrs) {
      var search = $location.search(),
          formatArgs = [attrs.errorDisplay],
          i;

      for (i = 0; angular.isDefined(search['p'+i]); i++) {
        formatArgs.push(search['p'+i]);
      }
      element.html(errorLinkFilter(interpolate.apply(null, formatArgs), '_blank'));
    }
  };
}]);

angular.module('examples', [])

.factory('formPostData', ['$document', function($document) {
  return function(url, newWindow, fields) {
    /*
     * Form previously posted to target="_blank", but pop-up blockers were causing this to not work.
     * If a user chose to bypass pop-up blocker one time and click the link, they would arrive at
     * a new default plnkr, not a plnkr with the desired template.
     */
    var target = newWindow ? '_blank' : '_self';
    var form = angular.element('<form style="display: none;" method="post" action="' + url + '" target="' + target + '"></form>');
    angular.forEach(fields, function(value, name) {
      var input = angular.element('<input type="hidden" name="' +  name + '">');
      input.attr('value', value);
      form.append(input);
    });
    $document.find('body').append(form);
    form[0].submit();
    form.remove();
  };
}])


.factory('openPlunkr', ['formPostData', '$http', '$q', function(formPostData, $http, $q) {
  return function(exampleFolder, clickEvent) {

    var exampleName = 'AngularJS Example';
    var newWindow = clickEvent.ctrlKey || clickEvent.metaKey;

    // Load the manifest for the example
    $http.get(exampleFolder + '/manifest.json')
      .then(function(response) {
        return response.data;
      })
      .then(function(manifest) {
        var filePromises = [];

        // Build a pretty title for the Plunkr
        var exampleNameParts = manifest.name.split('-');
        exampleNameParts.unshift('AngularJS');
        angular.forEach(exampleNameParts, function(part, index) {
          exampleNameParts[index] = part.charAt(0).toUpperCase() + part.substr(1);
        });
        exampleName = exampleNameParts.join(' - ');

        angular.forEach(manifest.files, function(filename) {
          filePromises.push($http.get(exampleFolder + '/' + filename, { transformResponse: [] })
            .then(function(response) {

              // The manifests provide the production index file but Plunkr wants
              // a straight index.html
              if (filename === "index-production.html") {
                filename = "index.html";
              }

              return {
                name: filename,
                content: response.data
              };
            }));
        });
        return $q.all(filePromises);
      })
      .then(function(files) {
        var postData = {};

        angular.forEach(files, function(file) {
          postData['files[' + file.name + ']'] = file.content;
        });

        postData['tags[0]'] = "angularjs";
        postData['tags[1]'] = "example";
        postData.private = true;
        postData.description = exampleName;

        formPostData('http://plnkr.co/edit/?p=preview', newWindow, postData);
      });
  };
}]);

angular.
    module('FooterController', []).
    controller('FooterController', FooterController);

function FooterController() {
  var vm = this;
  var v = angular.version;

  vm.versionNumber = v.full;
  vm.version = v.full + '  ' + v.codeName;
}

angular.
    module('HeaderController', []).
    controller('HeaderController', HeaderController);

function HeaderController() {
  var vm = this;

  vm.learnItems = [
    {label: 'Why AngularJS?', url: '//angularjs.org/'},
    {label: 'Watch', url: '//www.youtube.com/user/angularjs'},
    {label: 'Tutorial', url: 'tutorial'},
    {label: 'Case Studies', url: '//builtwith.angularjs.org/'},
    {label: 'Seed App project template', url: '//github.com/angular/angular-seed'},
    {label: 'FAQ', url: 'misc/faq'}
  ];

  vm.developItems = [
    {label: 'Why AngularJS?', url: '//angularjs.org/'},
    {label: 'Tutorial', url: 'tutorial'},
    {label: 'Developer Guide', url: 'guide'},
    {label: 'API Reference', url: 'api'},
    {label: 'Error Reference', url: 'error'},
    {label: 'Contribute', url: 'misc/contribute'},
    {label: 'Download', url: '//code.angularjs.org/'}
  ];

  vm.discussItems = [
    {label: 'Blog', url: '//blog.angularjs.org'},
    {label: 'Mailing List', url: '//groups.google.com/group/angular'},
    {label: 'Chat Room', url: '//webchat.freenode.net/?channels=angularjs&uio=d4'},
    {label: 'Twitter', url: '//twitter.com/#!/angularjs'},
    {label: 'Google+', url: '//plus.google.com/110323587230527980117'},
    {label: 'GitHub', url: '//github.com/angular/angular.js'},
    {label: 'Issue Tracker', url: '//github.com/angular/angular.js/issues'},
  ];
}

angular.
    module('responsiveMenu', ['ngMaterial', 'ViewUtils']).
    directive('responsiveMenu', responsiveMenuDirective);

responsiveMenuDirective.$inject = ['$mdBottomSheet', 'ViewUtils'];
function responsiveMenuDirective($mdBottomSheet, ViewUtils) {
  // TODO: Create showFns for various sizes (not necessarily all)
  var showFns = {
    // 'gt-lg': '',
    // 'lg': '',
    // 'md': '',
    'sm': function showSmFn(items) {
      $mdBottomSheet.show({
        template: _getResponsiveMenuSmTemplate(),
        controller: ['$mdBottomSheet', '$scope',
          function ResponsiveMenuSmController($mdBottomSheet, $scope) {
            $scope.items = items;
            $scope.onItemClick = $mdBottomSheet.hide.bind($mdBottomSheet);
          }
        ]
      });
    }
  };

  var defaultShowFn = showFns.sm;

  return {
    restrict: 'A',
    scope: {
      items: '=rmItems'
    },
    controller: ['$element', '$scope', function ResponsiveMenuController($element, $scope) {
      $element.on('click', onClick.bind(this));

      function onClick(evt) {
        var showFn = ViewUtils.getValueForSize(showFns, defaultShowFn);
        showFn($scope.items);
      }
    }]
  };
}

function _getResponsiveMenuSmTemplate() {
  return [
    '<md-bottom-sheet>',
    '  <md-list>',
    '    <md-item ng-repeat="item in items">',
    '      <md-button aria-label="{{item.label}}" ng-click="onItemClick(item)">',
    '        <a ng-href="{{item.url}}">{{item.label}}</a>',
    '      </md-button>',
    '    </md-item>',
    '  </md-list>',
    '</md-bottom-sheet>',
    ''].join('\n');
}

angular.module('search', ['ViewUtils'])

.controller('DocsSearchController', ['$scope', '$location', 'docsSearch', 'ViewUtils',
  function($scope, $location, docsSearch, ViewUtils) {
    $scope.hideResults = hideResults;
    $scope.search = search;
    $scope.submit = submit;

    // TODO: Probably use some event on the input field, when
    // https://github.com/angular/material/pull/848 is resolved
    $scope.$watch('q', search);

    clearResults();

    function clearResults() {
      $scope.results = {};
      $scope.colClassName = null;
      $scope.hasResults = false;
    }

    function hideResults(path) {
      ViewUtils.closeSidenav('search');
      clearResults();
      $scope.q = '';

      if (arguments.length) {
        $location.path(path);
      }
    }

    function search(q) {
      var MIN_SEARCH_LENGTH = 2;
      q = q || '';

      if (q.length >= MIN_SEARCH_LENGTH) {
        docsSearch(q).then(function(hits) {
          var results = {};
          angular.forEach(hits, function(hit) {
            var area = hit.area;

            var limit = (area === 'api') ? 40 : 14;
            results[area] = results[area] || [];
            if(results[area].length < limit) {
              results[area].push(hit);
            }
          });

          var totalAreas = Object.keys(results).length;
          if (totalAreas > 0) {
            // TODO: Use `colClassName` or remove it
            $scope.colClassName = 'cols-' + totalAreas;
          }
          $scope.hasResults = totalAreas > 0;
          $scope.results = results;
        });
      } else {
        clearResults();
      }

      // FIXME: Don't use private `$$phase` property
      if (!$scope.$$phase) $scope.$apply();
    }

    function submit() {
      var result;

      if ($scope.results.api) {
        result = $scope.results.api[0];
      } else {
        Object.keys($scope.results).some(function(key) {
          return (result = $scope.results[key][0]);
        });
      }

      if (result) {
        $location.path(result.path);
        $scope.hideResults();
      }
    }
  }
])


.controller('Error404SearchCtrl', ['$scope', '$location', 'docsSearch',
  function($scope, $location, docsSearch) {
    docsSearch($location.path().split(/[\/\.:]/).pop()).then(function(results) {
      $scope.results = {};
      angular.forEach(results, function(result) {
        var area = $scope.results[result.area] || [];
        area.push(result);
        $scope.results[result.area] = area;
      });
    });
  }
])


.provider('docsSearch', function() {

  // This version of the service builds the index in the current thread,
  // which blocks rendering and other browser activities.
  // It should only be used where the browser does not support WebWorkers
  function localSearchFactory($http, $log, $timeout, NG_PAGES) {

    $log.log('Using Local Search Index');

    // Create the lunr index
    var index = lunr(function() {
      this.ref('path');
      this.field('titleWords', {boost: 50});
      this.field('members', { boost: 40});
      this.field('keywords', { boost : 20 });
    });

    // Delay building the index by loading the data asynchronously
    var indexReadyPromise = $http.get('js/search-data.json').then(function(response) {
      var searchData = response.data;
      // Delay building the index for 500ms to allow the page to render
      return $timeout(function() {
        // load the page data into the index
        angular.forEach(searchData, function(page) {
          index.add(page);
        });
      }, 500);
    });

    // The actual service is a function that takes a query string and
    // returns a promise to the search results
    // (In this case we just resolve the promise immediately as it is not
    // inherently an async process)
    return function(q) {
      return indexReadyPromise.then(function() {
        var hits = index.search(q);
        var results = [];
        angular.forEach(hits, function(hit) {
          results.push(NG_PAGES[hit.ref]);
        });
        return results;
      });
    };
  }
  localSearchFactory.$inject = ['$http', '$log', '$timeout', 'NG_PAGES'];

  // This version of the service builds the index in a WebWorker,
  // which does not block rendering and other browser activities.
  // It should only be used where the browser does support WebWorkers
  function webWorkerSearchFactory($log, $q, $rootScope, NG_PAGES) {

    $log.log('Using WebWorker Search Index');

    var searchIndex = $q.defer();
    var results;

    var worker = new Worker('js/search-worker.js');

    // The worker will send us a message in two situations:
    // - when the index has been built, ready to run a query
    // - when it has completed a search query and the results are available
    worker.onmessage = function(oEvent) {
      $rootScope.$apply(function() {

        switch(oEvent.data.e) {
          case 'index-ready':
            searchIndex.resolve();
            break;
          case 'query-ready':
            var pages = oEvent.data.d.map(function(path) {
              return NG_PAGES[path];
            });
            results.resolve(pages);
            break;
        }
      });
    };

    // The actual service is a function that takes a query string and
    // returns a promise to the search results
    return function(q) {

      // We only run the query once the index is ready
      return searchIndex.promise.then(function() {

        results = $q.defer();
        worker.postMessage({q: q});
        return results.promise;
      });
    };
  }
  webWorkerSearchFactory.$inject = ['$log', '$q', '$rootScope', 'NG_PAGES'];

  return {
    // TODO(gkalpak): Would be nice to use `$window` (e.g. for easier testing)
    $get: window.Worker ? webWorkerSearchFactory : localSearchFactory
  };
})

// TODO: Do we need this ?
// .directive('focused', function($timeout) {
//   return {
//     link: function(scope, element, attrs) {
//       element[0].focus();
//       element.on('focus', function() {
//         scope.$apply(attrs.focused + '=true');
//       });
//       element.on('blur', function() {
//         // have to use $timeout, so that we close the drop-down after the user clicks,
//         // otherwise when the user clicks we process the closing before we process the click.
//         $timeout(function() {
//           scope.$eval(attrs.focused + '=false');
//         });
//       });
//       // TODO(gkalpak): Do we need this if we first register the listeners
//       //                and the call `.focus()` ?
//       scope.$eval(attrs.focused + '=true');
//     }
//   };
// })

.directive('docsSearchInput', ['$document', function($document) {
  var doc = $document[0];
  var body = angular.element(doc.body);

  return {
    link: function(scope, element, attrs) {
      var ESCAPE_KEY_KEYCODE = 27,
          FORWARD_SLASH_KEYCODE = 191;

      element.on('keydown', onInputKeydown);
      body.on('keydown', onBodyKeydown);

      // Since we are attaching a listener to <body>,
      // it is a good idea to detach it upon scope destruction
      // (Not likely to happen with the current implemetation, but...things change.)
      scope.$on('$destroy', function() {
        body.off('keydown', onBodyKeydown);
      });

      function onBodyKeydown(event) {
        var input = element[0];
        if ((event.keyCode === FORWARD_SLASH_KEYCODE) && (doc.activeElement !== input)) {
          event.stopPropagation();
          event.preventDefault();
          input.focus();
        }
      }

      function onInputKeydown(event) {
        if (event.keyCode === ESCAPE_KEY_KEYCODE) {
          event.stopPropagation();
          event.preventDefault();
          scope.$apply(function() {
            scope.hideResults();
          });
        }
      }
    }
  };
}]);

angular.module('tutorials', [])

.directive('docTutorialNav', function() {
  var pages = [
    '',
    'step_00', 'step_01', 'step_02', 'step_03', 'step_04',
    'step_05', 'step_06', 'step_07', 'step_08', 'step_09',
    'step_10', 'step_11', 'step_12', 'the_end'
  ];
  return {
    scope: {},
    template:
      // TODO(gkalpak): Remove Bootstrap-specific staff
      '<a ng-href="tutorial/{{prev}}"><li class="btn btn-primary"><i class="glyphicon glyphicon-step-backward"></i> Previous</li></a>\n' +
      '<a ng-href="https://angular.github.io/angular-phonecat/step-{{seq}}/app"><li class="btn btn-primary"><i class="glyphicon glyphicon-play"></i> Live Demo</li></a>\n' +
      '<a ng-href="https://github.com/angular/angular-phonecat/compare/step-{{diffLo}}...step-{{diffHi}}"><li class="btn btn-primary"><i class="glyphicon glyphicon-search"></i> Code Diff</li></a>\n' +
      '<a ng-href="tutorial/{{next}}"><li class="btn btn-primary">Next <i class="glyphicon glyphicon-step-forward"></i></li></a>',
    link: function(scope, element, attrs) {
      var seq = 1 * attrs.docTutorialNav;
      scope.seq = seq;
      scope.prev = pages[seq];
      scope.next = pages[2 + seq];
      scope.diffLo = seq ? (seq - 1): '0~1';
      scope.diffHi = seq;

      element.addClass('btn-group');
      element.addClass('tutorial-nav');
    }
  };
})


.directive('docTutorialReset', function() {
  return {
    scope: {
      step: '@docTutorialReset'
    },
    template:
      // TODO(gkalpak): Remove Bootstrap-specific staff
      '<p><a href="" ng-click="show=!show;$event.stopPropagation()">Workspace Reset Instructions  ➤</a></p>\n' +
      '<div class="alert alert-info" ng-show="show">\n' +
      '  <p>Reset the workspace to step {{step}}.</p>' +
      '  <p><pre>git checkout -f step-{{step}}</pre></p>\n' +
      '  <p>Refresh your browser or check out this step online: '+
          '<a href="https://angular.github.io/angular-phonecat/step-{{step}}/app">Step {{step}} Live Demo</a>.</p>\n' +
      '</div>\n' +
      '<p>The most important changes are listed below. You can see the full diff on ' +
        '<a ng-href="https://github.com/angular/angular-phonecat/compare/step-{{step ? (step - 1): \'0~1\'}}...step-{{step}}">GitHub</a>\n' +
      '</p>'
  };
});

"use strict";

angular.module('versions', [])

.controller('DocsVersionsCtrl', ['$scope', '$location', '$window', 'NG_VERSIONS', function($scope, $location, $window, NG_VERSIONS) {
  $scope.docs_version  = NG_VERSIONS[0];
  $scope.docs_versions = NG_VERSIONS;

  for (var i = 0, ii = NG_VERSIONS.length, minor = NaN; i < ii; i++) {
    var version = NG_VERSIONS[i];
    // NaN will give false here
    if (minor <= version.minor) {
      continue;
    }
    version.isLatest = true;
    minor = version.minor;
  }

  $scope.getGroupName = getGroupName;
  $scope.groupBy = groupBy;
  $scope.jumpToDocsVersion = jumpToDocsVersion;

  function getGroupName(v) {
    return v.isLatest ? 'Latest' : ('v' + v.major + '.' + v.minor + '.x');
  }

  // TODO(gkalpak): Do we really need this as a "public" function ?
  //                Would a one-time groupping (in JS) be sufficient ?
  function groupBy(items, prop) {
    var groupped = {};
    var getter = angular.isFunction(prop) ? prop : function(item) { return item[prop]; };

    items.forEach(function(item) {
      var groupName = getter(item);
      var groupList = groupped[groupName] = (groupped[groupName] || []);
      groupList.push(item);
    });

    return groupped;
  }

  function jumpToDocsVersion(version) {
    var currentPagePath = $location.path().replace(/\/$/, '');

    // TODO: We need to do some munging of the path for different versions of the API...

    $window.location = version.docsUrl + currentPagePath;
  }
}]);

angular.
    module('ViewUtils', ['ngMaterial']).
    service('ViewUtils', ViewUtilsService);

ViewUtilsService.$inject = ['$mdMedia', '$mdSidenav'];
function ViewUtilsService($mdMedia, $mdSidenav) {
  this.closeSidenav = closeSidenav;
  this.getFlex = getFlex;
  this.getValueForSize = getValueForSize;
  this.media = $mdMedia;
  this.openSidenav = openSidenav;

  var flexMap = {
    toc: {
      'gt-lg': '20',
      'lg': '25',
      'md': '33'
    },
    search: {
      'gt-lg': '20'
    }
  };

  function closeSidenav(id) {
    $mdSidenav(id).close();
  }

  function getFlex(componentId) {
    var flex;

    if (flexMap.hasOwnProperty(componentId)) {
      var queriesMap = flexMap[componentId];
      flex = getValueForSize(queriesMap);
    }

    return flex;
  }

  function getValueForSize(queriesMap, defaultVal) {
    var val = defaultVal;

    Object.keys(queriesMap).some(function(q) {
      if ($mdMedia(q)) {
        val= queriesMap[q];
        return true;
      }
    });

    return val;
  }

  function openSidenav(id) {
    $mdSidenav(id).open();
  }
}
