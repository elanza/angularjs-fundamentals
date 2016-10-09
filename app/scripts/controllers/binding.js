'use strict';

/**
 * @ngdoc function
 * @name angularjsFundamentalsApp.controller:BindingCtrl
 * @description
 * # BindingCtrl
 * Controller of the angularjsFundamentalsApp
 */
angular.module('angularjsFundamentalsApp')
  .controller('BindingCtrl', function () {
    //ObjectArrays
    this.PlayersArray = [
      { team: "Barcelona", name: "Messi", position: "Forward", number: "10", nationality:"Argentine" },
      { team: "Barcelona", name: "Neymar", position: "Forward", number: "11", nationality:"Brasil" },
      { team: "Barcelona", name: "Suarez", position: "Forward", number: "9", nationality:"Uruguay" },
      { team: "Atletico Madrid", name: "Griezman", position: "Forward", number: "9", nationality:"France" },
      { team: "Real Madrid", name: "CR7", position: "Forward", number: "7", nationality:"Portugal" },
      { team: "Real Madrid", name: "Benzema", position: "Forward", number: "9", nationality:"France" }
    ];
  });
