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
    this.Name = "Lionel Messi";
    this.Salary = 6000000 ;
    //Values
    this.firstValue = 10;
    this.secondValue = 50;
    //  ngshow
    this.showme = true;
    this.hideme = false;
  });
