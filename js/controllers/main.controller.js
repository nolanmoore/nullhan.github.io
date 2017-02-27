'use strict';

/**
* @ngdoc function
* @name myApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the myApp
*/
angular.module('myApp')
.controller('MainCtrl', function ($resource) {
  var vm = this;

  vm.init = function() {
    var data = $resource('projects.json');
    data.get(function(res) {
      vm.data = res;
    });
  };

  vm.init();
});
