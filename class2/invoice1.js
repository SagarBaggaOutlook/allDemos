var myapp = angular.module("myapp",[]);
myapp.controller('myappcontroller',['$scope', function($scope){
$scope.msg = "GoodMorning";
$scope.inCurr = "Shyam";
$scope.names = ['Ram','Shyam','Meera','Radha'];


$scope.nicknames = {
	Ram: 'ramu',
	Shyam: 'Shyamu',
	Meera: 'Meeru',
	Radha: 'radhu'
};

$scope.output = {};

$scope.jsonOuput = function(n){
$scope.output= $scope.nicknames[n];
return output;
};

}]);


/*dropdown k acc array se name print hoga : by using ng-model of select tag
dropdown k acc json se name ka sirname print hoga: not working*/