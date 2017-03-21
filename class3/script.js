

var myapp =angular.module('docsTemplateUrlDirective', []);
myapp.controller('Controller', ['$scope', function($scope) {
  $scope.name = 'Ms dhoni';
  $scope.customer = {
  	name: 'NAOMI',
  	address: '1600 Amphitheatre'
  };
}])
myapp.directive('myCustomer', function() {
  return {
    templateUrl: 'my-customer.html'
  };
});


// why no paramenter in function of directive
//camelcase in directive name but my-customer in element

// Notice that we have bindings in this directive. After $compile compiles and links <div my-customer></div>, it will try to match directives on the element's children. This means you can compose directives of other directives.
// template & templateUrl difference

/*
app.controller('myappcontroller',['$scope', function($scope){
app.controller('myappcontroller',['$scope', function(){
with scope or without scope in function
--------------------------*/


