angular.module('todoApp', ['ngRoute', 'todoApp.controllers', 'todoApp.services'])
  .config(function($routeProvider) {
    $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'partials/list.html'
    })
    .when('/edit/:todoText', {
      controller:'EditCtrl',
      templateUrl:'partials/detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'partials/detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
  })
