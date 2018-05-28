'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
angular
  .module('udaciMealsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Set default path
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('item', {
        url: '/item/:id',
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl as item'
      })
      .state('item.source', {
        url: '/source',
        templateUrl: 'views/item-source.html'
      })
      .state('item.reviews', {
        url: '/reviews',
        templateUrl: 'views/item-reviews.html'
      });
  }]);
