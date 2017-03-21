var myapp =  angular.module("myapp",[]);
myapp.controller("EventContoller", function($scope)
{
var counter = 0;

var names = ['ram','shyam','kartik','sagar'];

$scope.clickMe = function(){
	$scope.name = names[counter%names.length];
	counter++;
};

});