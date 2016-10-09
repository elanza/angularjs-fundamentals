'use strict';

describe('Controller: TwoWayBindingCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsFundamentalsApp'));

  var TwoWayBindingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TwoWayBindingCtrl = $controller('TwoWayBindingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TwoWayBindingCtrl.awesomeThings.length).toBe(3);
  });
});
