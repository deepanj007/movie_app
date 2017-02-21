var app = angular.module("movieApp", ['ui.router','chieffancypants.loadingBar', 'ngAnimate','angularUtils.directives.dirPagination']);

app.config(function(cfpLoadingBarProvider, $stateProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    $stateProvider
    .state('home', {
      url: '^',
      views: {
        'main@': {
          templateUrl: 'views/home.tpl.html',
          controller: 'movieCtrl'
        }
      },
      data: {
        displayName: 'Home',
      }
    })
});