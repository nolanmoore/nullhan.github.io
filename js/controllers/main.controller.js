'use strict';

/**
* @ngdoc function
* @name myApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the myApp
*/
angular.module('myApp')
.controller('MainCtrl', ['$resource', '$sanitize', 'renderHTMLCorrectlyFilter', function ($resource, $sanitize, renderHTMLCorrectlyFilter) {
  var vm = this;

  vm.init = function() {
    vm.data = data;
  };

  vm.init();
}]);
