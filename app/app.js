var main = angular.module('main', ['ui.bootstrap']);

main.controller("Header", ["$scope", function($scope) {
  $scope.title = "Patrick Conner";
  $scope.subtitle = "A subtitle here";
  $scope.links = [
    {text: "Projects", link: "projects.html"},
    {text: "Links", link: "links.html"},
    {text: "R\u00E9sum\u00E9", link:"resume.html"},
    {text: "Blog", link:"blog.html"}
  ];
}]);
/*
main.controller("Links", ["$scope", function($scope) {
  
}]);
*/

main.controller("Projects", ["$scope", function($scope) {
	$scope.title = "Projects";
}]);

main.controller("Links", ["$scope", function($scope) {
	$scope.title = "Links";
}]);

main.controller("Resume", ["$scope", function($scope) {
	$scope.title = "R\u00E9sum\u00E9";
}]);

main.controller("Blog", ["$scope", function($scope) {
	$scope.title = "Blog";
}]);