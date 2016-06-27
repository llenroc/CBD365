﻿'use strict';

(function () {

  var app = angular.module('UnifiedApiSpa');

  app.controller('viewController', viewController);

  function viewController($scope, $routeParams, wingtipCrmService) {
    var id = $routeParams.id;
    wingtipCrmService.getCustomer(id).success(function (data) {
      $scope.customer = data.d;
    });
  }

})();