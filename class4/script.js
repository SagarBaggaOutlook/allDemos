var app = angular.module('myServiceModule', []);

app.controller('MyController', ['$scope', 'multiply', function ($scope, multiply) {
   
 $scope.clickMe = function () {
  // calling a service
  $scope.a = 3;
  $scope.b = 4;
  var val = multiply($scope);
  console.log(val);
  window.alert(val);
 };
}]);

app.factory('multiply',['$log', function ($log) {
 return function($scope) {
  console.log($scope.a)
  
   $log.log('processing multiple.');
  return $scope.a * $scope.b;
 }
}]);