'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('ItemCtrl', ['$stateParams', 'foodFinder', function($stateParams, foodFinder) {

    var vm = this;

    // fetch Id from $stateProvider and pass it to foodFinder service
    foodFinder.getItem($stateParams.id).then(function(response) {
        // pass data to item view
        vm.data = response.data;
      });
  }]);
