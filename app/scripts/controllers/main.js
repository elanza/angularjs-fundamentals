'use strict';

/**
 * @ngdoc function
 * @name angularjsFundamentalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsFundamentalsApp
 */
angular.module('angularjsFundamentalsApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.name = "Name of controller";
  });
