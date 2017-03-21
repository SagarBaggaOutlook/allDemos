angular.module('myServiceModule',[])
.controller('MyController',['$scope','factoryNotify',function($scope,factoryNotify){
/*$scope.callNotify = function(mymessage){
window.alert(mymessage)
}*/
$scope.callNotify = function(msg){
factoryNotify(msg);
};
}])
.factory('factoryNotify',['$window',function(win){
var allmsg = []
return function(msg){
allmsg.push(msg)
if(allmsg.length == 3){
win.alert('you have clicked thrice! :');
allmsg = [];
}
}
}])