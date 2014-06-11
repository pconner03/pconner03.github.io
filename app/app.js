var main = angular.module('main', ['ui.bootstrap']);

main.controller("Header", ["$scope", function($scope) {
  $scope.title = "Patrick Conner";
  $scope.subtitle = "A subtitle here";
}]);