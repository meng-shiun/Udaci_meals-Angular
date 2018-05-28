'use strict';

/**
* @ngdoc service
* @name udaciMealsApp.foodFinder
* @description
* # foodFinder
* Service in the udaciMealsApp.
*/
angular.module('udaciMealsApp')
  .service('foodFinder', function($http) {
  // Use $http.get to make sure json is fetched, and then show it on view model
  this.getMenu = function() {
    return $http.get('/menu/menu.json');
  };

  this.getItem = function(id) {
    var menuItemFile = '/menu/' + id + '.json';
    return $http.get(menuItemFile);
  };
});
