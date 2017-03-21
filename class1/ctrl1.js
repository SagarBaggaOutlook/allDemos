var myapp = angular.module('myApp',[]);

myapp.controller('greetingcontroller',['$scope', function($scope){
$scope.greeting = 'helo world';

$scope.double = function(value){
return value * 2;
};
}]);


/*
myapp.controller('greetingcontroller', function($scope){
$scope.greeting = 'helo world';

});
*/