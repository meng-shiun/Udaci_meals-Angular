'use strict';

/**
* @ngdoc function
* @name udaciMealsApp.controller:MenuCtrl
* @description
* # MenuCtrl
* Controller of the udaciMealsApp
*/
angular.module('udaciMealsApp')
.controller('MenuCtrl', ['foodFinder', 'orderManager', function(menu, orderManager) {

  var vm = this;

  menu.getMenu().then(function(response) {
    vm.items = response.data;
  });

  this.chooseItem = function(menuCategory, menuItemName){
    orderManager.chooseMenuOption(menuCategory, menuItemName);
  };

  this.increment = function(item) {
    // item.rating += 0.1;
    item.rating = ((item.rating * 10) + 1) / 10;
  };

  this.decrement = function(item) {
    item.rating = ((item.rating * 10) - 1) / 10;
  };
}]);
