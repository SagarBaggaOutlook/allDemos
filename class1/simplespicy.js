var myapp = angular.module('myApp',[]);

myapp.controller('SpicyController',['$scope', function($scope){
$scope.spicy = 'very';
$scope.customram = 'abradabra';

/*$scope.chillispicy = function(){
	$scope.spicy = 'chilli';
};

$scope.jalapenospicy = function(){
	$scope.spicy = 'jalapeno';
};*/

$scope.spicy = function(abc)
{
	$scope.spicy = abc;
}

}]);


/*
myapp.controller('greetingcontroller', function($scope){
$scope.greeting = 'helo world';

});
*/